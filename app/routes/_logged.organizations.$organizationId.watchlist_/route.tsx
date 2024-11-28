import { Typography, Card, List, Button, Empty, message } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function WatchlistPage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()

  // Fetch watchlist items with included stock data
  const { data: watchlistItems, refetch } = Api.watchlistItem.findMany.useQuery(
    {
      where: {
        organizationId: organizationId as string,
        userId: user?.id,
      },
      include: {
        stock: true,
      },
    },
  )

  // Delete mutation
  const { mutateAsync: deleteWatchlistItem } =
    Api.watchlistItem.delete.useMutation()

  // Handle real-time stock updates
  SocketClient.useEvent('stock-update', payload => {
    if (payload) {
      refetch()
    }
  })

  // Handle remove from watchlist
  const handleRemoveStock = async (watchlistItemId: string) => {
    try {
      await deleteWatchlistItem({
        where: {
          id: watchlistItemId,
        },
      })
      message.success('Stock removed from watchlist')
      refetch()
    } catch (error) {
      message.error('Failed to remove stock from watchlist')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>
            <i className="las la-chart-line" style={{ marginRight: 8 }}></i>
            My Watchlist
          </Title>
          <Text type="secondary">
            Track your favorite stocks and keep an eye on their performance
          </Text>
        </div>

        {watchlistItems?.length === 0 ? (
          <Empty
            description="No stocks in your watchlist"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        ) : (
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 4,
              xxl: 4,
            }}
            dataSource={watchlistItems}
            renderItem={item => (
              <List.Item>
                <Card
                  hoverable
                  actions={[
                    <Button
                      key="remove"
                      type="text"
                      danger
                      icon={<i className="las la-trash-alt"></i>}
                      onClick={() => handleRemoveStock(item.id)}
                    >
                      Remove
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Text strong>{item.stock?.symbol}</Text>
                        <Text type="success">${item.stock?.currentPrice}</Text>
                      </div>
                    }
                    description={
                      <>
                        <Text>{item.stock?.name}</Text>
                        <br />
                        <Text type="secondary">{item.stock?.sector}</Text>
                        <div style={{ marginTop: 8 }}>
                          <Text type="secondary">
                            Added {dayjs(item.createdAt).format('MMM D, YYYY')}
                          </Text>
                        </div>
                      </>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>
    </PageLayout>
  )
}
