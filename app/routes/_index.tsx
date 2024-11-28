import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Real-Time Market Intelligence`,
      description: `Get instant access to curated financial news and market insights with AI-powered impact scoring to help you make informed decisions faster.`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Smart Portfolio Tracking`,
      description: `Monitor your investments in real-time with advanced analytics and personalized alerts to stay on top of market movements.`,
      icon: <i className="las la-wallet"></i>,
    },
    {
      heading: `AI-Powered Insights`,
      description: `Leverage machine learning algorithms that analyze market trends and provide actionable recommendations tailored to your financial goals.`,
      icon: <i className="las la-brain"></i>,
    },
    {
      heading: `Expense Management`,
      description: `Track spending, set budgets, and receive smart suggestions to optimize your cash flow and build wealth systematically.`,
      icon: <i className="las la-piggy-bank"></i>,
    },
    {
      heading: `Goal Planning`,
      description: `Set financial milestones and get step-by-step guidance to achieve your short and long-term financial objectives.`,
      icon: <i className="las la-bullseye"></i>,
    },
    {
      heading: `Financial Education`,
      description: `Access a comprehensive library of resources to improve your financial literacy and make better money decisions.`,
      icon: <i className="las la-graduation-cap"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Michael Chen`,
      designation: `Retail Investor`,
      content: `Since using this platform, I've saved 5 hours weekly by having all my financial tools in one place. The AI insights helped me make 32% better investment decisions.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Sarah Johnson`,
      designation: `Financial Advisor`,
      content: `The real-time market data and AI analysis have transformed how I serve my clients. I can now provide more accurate, timely advice backed by solid data.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `David Miller`,
      designation: `Small Business Owner`,
      content: `Managing both personal and business finances was overwhelming until I found this app. The expense tracking and goal setting features have been game-changing.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for beginners starting their financial journey`,
      monthly: 9,
      yearly: 89,
      features: [
        `Real-time market data`,
        `Basic portfolio tracking`,
        `Expense management`,
      ],
    },
    {
      title: `Pro`,
      description: `For serious investors who want comprehensive tools`,
      monthly: 29,
      yearly: 290,
      features: [
        `Everything in Basic`,
        `AI-powered insights`,
        `Advanced analytics`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for financial professionals`,
      monthly: 99,
      yearly: 990,
      features: [
        `Everything in Pro`,
        `API access`,
        `Custom reporting`,
        `Dedicated account manager`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the AI-powered analysis work?`,
      answer: `Our AI algorithms analyze millions of data points from market trends, news, and user behavior to provide personalized insights and recommendations tailored to your financial goals.`,
    },
    {
      question: `Is my financial data secure?`,
      answer: `Yes, we use bank-level encryption and security measures to protect your data. We never store sensitive information and comply with all major financial regulations.`,
    },
    {
      question: `Can I integrate my existing investment accounts?`,
      answer: `Yes, we support integration with major brokers and financial institutions for seamless portfolio tracking and analysis.`,
    },
    {
      question: `What if I need help getting started?`,
      answer: `We offer comprehensive onboarding support, video tutorials, and dedicated customer service to help you make the most of our platform.`,
    },
  ]

  const steps = [
    {
      heading: `Connect Your Accounts`,
      description: `Securely link your financial accounts for a complete overview of your finances.`,
    },
    {
      heading: `Set Your Goals`,
      description: `Define your financial objectives and create actionable plans to achieve them.`,
    },
    {
      heading: `Get Personalized Insights`,
      description: `Receive AI-powered recommendations based on your financial behavior and market conditions.`,
    },
    {
      heading: `Track Your Progress`,
      description: `Monitor your journey with real-time updates and adjust your strategy as needed.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😫`,
      title: `Overwhelmed by financial information overload`,
    },
    {
      emoji: `😤`,
      title: `Frustrated with scattered financial tools`,
    },
    {
      emoji: `😰`,
      title: `Anxious about making uninformed decisions`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Take Control of Your Financial Future`}
        subtitle={`Join over 150,000 investors who use our AI-powered platform to make smarter financial decisions and achieve their wealth goals faster.`}
        buttonText={`Start Your Financial Journey`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/HpfcVL-cashleycleverton-QC3f`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={150000}
            suffixText={`from happy investors`}
          />
        }
      />
      <LandingSocialProof title={`Trusted By Leading Financial Institutions`} />
      <LandingPainPoints
        title={`78% of Americans Live Paycheck to Paycheck - Break Free from Financial Stress`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Path to Financial Freedom`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Everything You Need to Master Your Finances`}
        subtitle={`Powerful tools and insights designed to help you make better financial decisions`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Thousands Who've Transformed Their Financial Lives`}
        subtitle={`See how our platform has helped others achieve their financial goals`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Financial Future`}
        subtitle={`Choose the plan that best fits your journey to financial freedom`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Everything you need to know about taking control of your finances`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Start Building Your Wealth Today`}
        subtitle={`Join 150,000+ investors who are already on their path to financial freedom`}
        buttonText={`Begin Your Journey`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
