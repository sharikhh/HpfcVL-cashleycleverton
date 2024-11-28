import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useParams } from '@remix-run/react'
import {
  Button,
  Card,
  Col,
  Input,
  message,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
const { Search } = Input

export default function NewsPage() {
  const { organizationId } = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [isLoadingLatest, setLoadingLatest] = useState(false)

  const { mutateAsync: fetchLatestNews } =
    Api.news.fetchLatestNews.useMutation()

  // Fetch articles
  const { data: articles, isLoading } = Api.article.findMany.useQuery({
    where: {
      AND: [
        searchTerm
          ? {
              OR: [
                { title: { contains: searchTerm, mode: 'insensitive' } },
                { content: { contains: searchTerm, mode: 'insensitive' } },
                { description: { contains: searchTerm, mode: 'insensitive' } },
              ],
            }
          : {},
        selectedRegion !== 'all' ? { region: selectedRegion } : {},
      ],
    },
    orderBy: { publishDate: 'desc' },
    include: {
      savedArticles: true,
    },
  })

  const handleFetchLatestNews = async () => {
    try {
      setLoadingLatest(true)
      const result = await fetchLatestNews()
      message.success(`Successfully fetched ${result.count} new articles`)
    } catch (error) {
      message.error('Failed to fetch latest news: ' + error.message)
    } finally {
      setLoadingLatest(false)
    }
  }

  // Save article mutation
  const { mutateAsync: saveArticle } = Api.savedArticle.create.useMutation()

  const handleSaveArticle = async (articleId: string) => {
    try {
      await saveArticle({
        data: {
          articleId,
          userId: 'current-user-id', // This should come from useUserContext
        },
      })
      message.success('Article saved successfully')
    } catch (error) {
      message.error('Failed to save article')
    }
  }

  const shareArticle = (article: any) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.content.substring(0, 100) + '...',
        url: window.location.href,
      })
    } else {
      message.info('Sharing is not supported on this device')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-newspaper" style={{ marginRight: 8 }}></i>
          Financial News
        </Title>
        <Paragraph>
          Stay updated with the latest financial news and market insights.
        </Paragraph>

        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%', marginBottom: 24 }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={16}>
              <Space.Compact style={{ width: '100%' }}>
                <Search
                  placeholder="Search news articles..."
                  allowClear
                  enterButton
                  size="large"
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <Button
                  onClick={handleFetchLatestNews}
                  loading={isLoadingLatest}
                >
                  Fetch Latest News
                </Button>
              </Space.Compact>
            </Col>
            <Col xs={24} sm={8}>
              <Select
                style={{ width: '100%' }}
                size="large"
                value={selectedRegion}
                onChange={setSelectedRegion}
                options={[
                  { value: 'all', label: 'All Regions' },
                  { value: 'americas', label: 'Americas' },
                  { value: 'europe', label: 'Europe' },
                  { value: 'asia', label: 'Asia' },
                ]}
              />
            </Col>
          </Row>

          {/* Trending News Section */}
          {articles?.some(article => article.isTrending) && (
            <div style={{ marginBottom: 24 }}>
              <Title level={4}>
                <i className="las la-fire" style={{ marginRight: 8 }}></i>
                Trending News
              </Title>
              <Row gutter={[16, 16]}>
                {articles
                  .filter(article => article.isTrending)
                  .map(article => (
                    <Col xs={24} md={12} key={article.id}>
                      <Card hoverable>
                        <Tag color="red">Trending</Tag>
                        <Title level={5}>{article.title}</Title>
                        <Text type="secondary" style={{ display: 'block' }}>
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read full article
                          </a>
                        </Text>
                        <Paragraph ellipsis={{ rows: 2 }}>
                          {article.description}
                        </Paragraph>
                        <Space>
                          <Tag
                            color={
                              article.sentiment === 'positive' ? 'green' : 'red'
                            }
                          >
                            {article.sentiment}
                          </Tag>
                          <Tag color="blue">
                            Impact: {article.marketImpactScore}
                          </Tag>
                        </Space>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </div>
          )}

          {/* All News Articles */}
          <Row gutter={[16, 16]}>
            {articles
              ?.filter(article => !article.isTrending)
              .map(article => (
                <Col xs={24} md={12} lg={8} key={article.id}>
                  <Card
                    hoverable
                    actions={[
                      <Button
                        type="text"
                        onClick={() => handleSaveArticle(article.id)}
                      >
                        <i className="las la-bookmark"></i>
                      </Button>,
                      <Button type="text" onClick={() => shareArticle(article)}>
                        <i className="las la-share"></i>
                      </Button>,
                    ]}
                  >
                    <Title level={5}>{article.title}</Title>
                    <Text type="secondary">
                      {dayjs(article.publishDate).format('MMM D, YYYY')}
                    </Text>
                    <Text type="secondary" style={{ display: 'block' }}>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read full article
                      </a>
                    </Text>
                    <Paragraph ellipsis={{ rows: 3 }}>
                      {article.description}
                    </Paragraph>
                    <Space>
                      {article.sentiment && (
                        <Tag
                          color={
                            article.sentiment === 'positive' ? 'green' : 'red'
                          }
                        >
                          {article.sentiment}
                        </Tag>
                      )}
                      {article.marketImpactScore && (
                        <Tag color="blue">
                          Impact: {article.marketImpactScore}
                        </Tag>
                      )}
                      {article.region && <Tag>{article.region}</Tag>}
                    </Space>
                  </Card>
                </Col>
              ))}
          </Row>
        </Space>
      </div>
    </PageLayout>
  )
}
