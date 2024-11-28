import { Typography, Card, Row, Col, Space } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Header Section */}
          <div style={{ textAlign: 'center' }}>
            <Title level={1}>
              <i className="las la-chart-line" style={{ marginRight: 8 }} />
              Welcome to FinanceHub
            </Title>
            <Paragraph style={{ fontSize: '18px' }}>
              Your all-in-one platform for financial insights, market analysis,
              and portfolio management
            </Paragraph>
          </div>

          {/* Main Features Section */}
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Title level={4}>
                  <i className="las la-newspaper" style={{ marginRight: 8 }} />
                  Financial News
                </Title>
                <Paragraph>
                  Stay informed with the latest financial news and market
                  updates. Our platform aggregates news from trusted sources and
                  provides sentiment analysis to help you make informed
                  decisions.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Title level={4}>
                  <i className="las la-eye" style={{ marginRight: 8 }} />
                  Market Watchlist
                </Title>
                <Paragraph>
                  Create and manage your personalized watchlist. Track your
                  favorite stocks, monitor price movements, and receive
                  real-time alerts on market changes.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card>
                <Title level={4}>
                  <i className="las la-calculator" style={{ marginRight: 8 }} />
                  Finance Tools
                </Title>
                <Paragraph>
                  Access powerful financial tools to manage your portfolio,
                  track transactions, and set financial goals. Visualize your
                  progress with interactive charts and reports.
                </Paragraph>
              </Card>
            </Col>
          </Row>

          {/* Getting Started Section */}
          <Card>
            <Title level={3}>
              <i className="las la-flag" style={{ marginRight: 8 }} />
              Getting Started
            </Title>
            <Space direction="vertical" size="middle">
              <Text>
                <i className="las la-check-circle" style={{ marginRight: 8 }} />
                Create or join an organization to start collaborating with your
                team
              </Text>
              <Text>
                <i className="las la-check-circle" style={{ marginRight: 8 }} />
                Set up your watchlist by adding stocks you want to track
              </Text>
              <Text>
                <i className="las la-check-circle" style={{ marginRight: 8 }} />
                Browse the latest financial news and market insights
              </Text>
              <Text>
                <i className="las la-check-circle" style={{ marginRight: 8 }} />
                Use our finance tools to manage your portfolio and track your
                goals
              </Text>
            </Space>
          </Card>

          {/* Help Section */}
          <Card>
            <Title level={3}>
              <i
                className="las la-question-circle"
                style={{ marginRight: 8 }}
              />
              Need Help?
            </Title>
            <Paragraph>
              Our support team is here to help you get the most out of
              FinanceHub. Feel free to reach out if you have any questions or
              need assistance.
            </Paragraph>
          </Card>
        </Space>
      </div>
    </PageLayout>
  )
}
