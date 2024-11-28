import {
  Typography,
  Card,
  Row,
  Col,
  Switch,
  Statistic,
  List,
  Space,
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

export default function InsightBoardPage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Fetch latest financial data
  const { data: watchlistItems } = Api.watchlistItem.findMany.useQuery({
    where: { organizationId, userId: user?.id },
    include: { stock: true },
    take: 5,
  })

  const { data: transactions } = Api.transaction.findMany.useQuery({
    where: { organizationId, userId: user?.id },
    take: 5,
    orderBy: { createdAt: 'desc' },
  })

  const { data: articles } = Api.article.findMany.useQuery({
    where: { isTrending: true },
    take: 5,
    orderBy: { publishDate: 'desc' },
  })

  const { data: financialGoals } = Api.financialGoal.findMany.useQuery({
    where: { organizationId, userId: user?.id },
  })

  // Calculate total portfolio value
  const totalPortfolioValue = watchlistItems?.reduce((acc, item) => {
    return acc + parseFloat(item.stock?.currentPrice || '0')
  }, 0)

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <Title level={2}>Financial Dashboard</Title>
          <Space>
            <Text>Dark Mode</Text>
            <Switch
              checked={isDarkMode}
              onChange={checked => setIsDarkMode(checked)}
              checkedChildren={<i className="las la-moon" />}
              unCheckedChildren={<i className="las la-sun" />}
            />
          </Space>
        </div>

        <Row gutter={[24, 24]}>
          {/* Portfolio Overview */}
          <Col xs={24} lg={8}>
            <Card
              title={
                <>
                  <i className="las la-chart-line" /> Portfolio Overview
                </>
              }
            >
              <Statistic
                title="Total Portfolio Value"
                value={totalPortfolioValue?.toFixed(2) || 0}
                prefix="$"
              />
              <List
                size="small"
                header={<Text strong>Top Watchlist</Text>}
                dataSource={watchlistItems}
                renderItem={item => (
                  <List.Item>
                    <Text>{item.stock?.symbol}</Text>
                    <Text
                      type={
                        parseFloat(item.stock?.currentPrice || '0') > 0
                          ? 'success'
                          : 'danger'
                      }
                    >
                      ${item.stock?.currentPrice}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* Recent News */}
          <Col xs={24} lg={8}>
            <Card
              title={
                <>
                  <i className="las la-newspaper" /> Market News
                </>
              }
            >
              <List
                size="small"
                dataSource={articles}
                renderItem={article => (
                  <List.Item>
                    <Text>{article.title}</Text>
                    <Text type="secondary">
                      {dayjs(article.publishDate).format('MMM D, YYYY')}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* Recent Transactions */}
          <Col xs={24} lg={8}>
            <Card
              title={
                <>
                  <i className="las la-exchange-alt" /> Recent Activity
                </>
              }
            >
              <List
                size="small"
                dataSource={transactions}
                renderItem={transaction => (
                  <List.Item>
                    <Space direction="vertical" size={0}>
                      <Text>{transaction.description}</Text>
                      <Text
                        type={
                          transaction.type === 'INCOME' ? 'success' : 'danger'
                        }
                      >
                        ${transaction.amount}
                      </Text>
                    </Space>
                    <Text type="secondary">
                      {dayjs(transaction.date).format('MMM D')}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* Financial Goals */}
          <Col xs={24}>
            <Card
              title={
                <>
                  <i className="las la-bullseye" /> Financial Goals
                </>
              }
            >
              <Row gutter={[16, 16]}>
                {financialGoals?.map(goal => (
                  <Col key={goal.id} xs={24} sm={12} md={8} lg={6}>
                    <Card size="small">
                      <Statistic
                        title={goal.name}
                        value={(
                          (parseFloat(goal.currentAmount) /
                            parseFloat(goal.targetAmount)) *
                          100
                        ).toFixed(0)}
                        suffix="%"
                      />
                      <Text type="secondary">
                        Target: ${goal.targetAmount} by{' '}
                        {dayjs(goal.deadline).format('MMM YYYY')}
                      </Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
