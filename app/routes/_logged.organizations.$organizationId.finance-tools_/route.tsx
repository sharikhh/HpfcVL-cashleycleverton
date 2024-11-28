import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Input,
  InputNumber,
  Progress,
  notification,
  Modal,
  Select,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function FinanceToolsPage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const [selectedCalculator, setSelectedCalculator] = useState<string>('tax')
  const [aiPrompt, setAiPrompt] = useState('')
  const [showBudgetModal, setShowBudgetModal] = useState(false)
  const [newBudget, setNewBudget] = useState({ category: '', limit: 0 })

  // Fetch financial data
  const { data: transactions } = Api.transaction.findMany.useQuery({
    where: { organizationId, userId: user?.id },
  })

  const { data: goals } = Api.financialGoal.findMany.useQuery({
    where: { organizationId, userId: user?.id },
  })

  // AI Advice
  const { mutateAsync: getAiAdvice } = Api.ai.generateText.useMutation()

  const handleAiAdvice = async () => {
    try {
      const response = await getAiAdvice({
        prompt: `Financial advice: ${aiPrompt}`,
      })
      notification.success({
        message: 'AI Advice',
        description: response.answer,
      })
    } catch (error) {
      notification.error({ message: 'Error getting advice' })
    }
  }

  // Export Data
  const exportToCSV = () => {
    const csvContent = transactions
      ?.map(t => `${t.date},${t.amount},${t.type},${t.category}`)
      .join('\n')

    const blob = new Blob([`Date,Amount,Type,Category\n${csvContent}`], {
      type: 'text/csv',
    })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'financial_data.csv'
    a.click()
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-calculator"></i> Financial Tools
        </Title>
        <Text>
          Manage your finances, track expenses, and reach your financial goals.
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          {/* Calculators Section */}
          <Col xs={24} lg={8}>
            <Card
              title={
                <>
                  <i className="las la-calculator"></i> Financial Calculators
                </>
              }
            >
              <Select
                style={{ width: '100%', marginBottom: 16 }}
                value={selectedCalculator}
                onChange={setSelectedCalculator}
                options={[
                  { value: 'tax', label: 'Tax Calculator' },
                  { value: 'loan', label: 'Loan Calculator' },
                  { value: 'retirement', label: 'Retirement Calculator' },
                ]}
              />
              <div style={{ marginTop: 16 }}>
                {selectedCalculator === 'tax' && (
                  <div>
                    <InputNumber
                      style={{ width: '100%', marginBottom: 8 }}
                      placeholder="Annual Income"
                    />
                    <Button type="primary" block>
                      Calculate Tax
                    </Button>
                  </div>
                )}
                {/* Similar sections for loan and retirement calculators */}
              </div>
            </Card>
          </Col>

          {/* AI Advice Section */}
          <Col xs={24} lg={8}>
            <Card
              title={
                <>
                  <i className="las la-robot"></i> AI Financial Advisor
                </>
              }
            >
              <Input.TextArea
                value={aiPrompt}
                onChange={e => setAiPrompt(e.target.value)}
                placeholder="Ask for financial advice..."
                style={{ marginBottom: 16 }}
              />
              <Button type="primary" onClick={handleAiAdvice} block>
                Get AI Advice
              </Button>
            </Card>
          </Col>

          {/* Goals Section */}
          <Col xs={24} lg={8}>
            <Card
              title={
                <>
                  <i className="las la-bullseye"></i> Financial Goals
                </>
              }
            >
              {goals?.map(goal => (
                <div key={goal.id} style={{ marginBottom: 16 }}>
                  <Text>{goal.name}</Text>
                  <Progress
                    percent={Math.round(
                      (Number(goal.currentAmount) / Number(goal.targetAmount)) *
                        100,
                    )}
                    status="active"
                  />
                </div>
              ))}
              <Button type="dashed" block>
                Add New Goal
              </Button>
            </Card>
          </Col>

          {/* Budget & Expenses Section */}
          <Col xs={24}>
            <Card
              title={
                <>
                  <i className="las la-chart-pie"></i> Budget & Expenses
                </>
              }
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Button
                    onClick={() => setShowBudgetModal(true)}
                    type="primary"
                  >
                    Create New Budget
                  </Button>
                </Col>
                <Col xs={24} md={12} style={{ textAlign: 'right' }}>
                  <Button
                    onClick={exportToCSV}
                    icon={<i className="las la-file-download"></i>}
                  >
                    Export Data
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Budget Modal */}
        <Modal
          title="Create New Budget"
          open={showBudgetModal}
          onCancel={() => setShowBudgetModal(false)}
          onOk={() => {
            // Handle budget creation
            setShowBudgetModal(false)
          }}
        >
          <Input
            placeholder="Category"
            value={newBudget.category}
            onChange={e =>
              setNewBudget({ ...newBudget, category: e.target.value })
            }
            style={{ marginBottom: 16 }}
          />
          <InputNumber
            placeholder="Limit"
            value={newBudget.limit}
            onChange={value =>
              setNewBudget({ ...newBudget, limit: value || 0 })
            }
            style={{ width: '100%' }}
          />
        </Modal>
      </div>
    </PageLayout>
  )
}
