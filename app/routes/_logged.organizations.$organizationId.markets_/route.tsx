import {
  Typography,
  Input,
  Select,
  Card,
  Row,
  Col,
  Button,
  Table,
  Space,
  Tag,
  Statistic,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { Search } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MarketsPage() {
  const { organizationId } = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSector, setSelectedSector] = useState<string>('')
  const [selectedMarketCap, setSelectedMarketCap] = useState<string>('')

  // Fetch stocks data
  const { data: stocks, isLoading } = Api.stock.findMany.useQuery({
    where: {
      OR: [
        { symbol: { contains: searchTerm, mode: 'insensitive' } },
        { name: { contains: searchTerm, mode: 'insensitive' } },
      ],
      ...(selectedSector && { sector: selectedSector }),
      ...(selectedMarketCap && { marketCap: selectedMarketCap }),
    },
  })

  // Fetch watchlist
  const { data: watchlist } = Api.watchlistItem.findMany.useQuery({
    where: { organizationId },
  })

  // Add to watchlist mutation
  const { mutateAsync: addToWatchlist } = Api.watchlistItem.create.useMutation()

  const handleAddToWatchlist = async (stockId: string) => {
    await addToWatchlist({
      data: {
        stockId,
        organizationId: organizationId!,
        userId: 'current-user-id', // Replace with actual user ID from context
      },
    })
  }

  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'currentPrice',
      key: 'currentPrice',
      render: (price: string) => (
        <Text type={Number(price) > 0 ? 'success' : 'danger'}>${price}</Text>
      ),
    },
    {
      title: 'Sector',
      dataIndex: 'sector',
      key: 'sector',
      render: (sector: string) => <Tag color="blue">{sector}</Tag>,
    },
    {
      title: 'Market Cap',
      dataIndex: 'marketCap',
      key: 'marketCap',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Button
          type="primary"
          icon={<i className="las la-star"></i>}
          onClick={() => handleAddToWatchlist(record.id)}
          disabled={watchlist?.some(item => item.stockId === record.id)}
        >
          Watch
        </Button>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-chart-line"></i> Markets Overview
        </Title>

        {/* Market Summary */}
        <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Market Sentiment"
                value="Bullish"
                prefix={
                  <i className="las la-arrow-up" style={{ color: 'green' }}></i>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Trading Volume"
                value="2.3M"
                prefix={<i className="las la-exchange-alt"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title="Active Stocks"
                value={stocks?.length || 0}
                prefix={<i className="las la-business-time"></i>}
              />
            </Card>
          </Col>
        </Row>

        {/* Filters */}
        <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
          <Col xs={24} sm={8}>
            <Search
              placeholder="Search stocks by symbol or name"
              onChange={e => setSearchTerm(e.target.value)}
              prefix={<i className="las la-search"></i>}
            />
          </Col>
          <Col xs={24} sm={8}>
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by sector"
              onChange={setSelectedSector}
              allowClear
            >
              <Select.Option value="Technology">Technology</Select.Option>
              <Select.Option value="Healthcare">Healthcare</Select.Option>
              <Select.Option value="Finance">Finance</Select.Option>
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by market cap"
              onChange={setSelectedMarketCap}
              allowClear
            >
              <Select.Option value="Large">Large Cap</Select.Option>
              <Select.Option value="Mid">Mid Cap</Select.Option>
              <Select.Option value="Small">Small Cap</Select.Option>
            </Select>
          </Col>
        </Row>

        {/* Stocks Table */}
        <Table
          columns={columns}
          dataSource={stocks}
          loading={isLoading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </div>
    </PageLayout>
  )
}
