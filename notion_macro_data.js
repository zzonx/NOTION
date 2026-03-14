//FRE API KEY
const apiKey = "8bb27c78dc55739611bd34574f183d9a";

//TOP SUMMARY INFO
const dashboardSummary = {
  market_view: {
    icon: "🔭",
    title: "Market View",
    content:
      "현재 시장은 연준의 금리 경로와 고용 지표의 균형을 탐색 중입니다. 실질 금리의 변동성에 유의해야 합니다.",
  },
  watchlist: {
    icon: "📊",
    title: "Data Watchlist",
    content:
      "• CPI/PCE 하락 속도\n• 비농업 고용 및 실업률\n• 역레포 잔액 변화\n• 기업 가이던스",
  },
  risk: {
    icon: "⚠️",
    title: "Risk Factors",
    content:
      "• 수익률 곡선 역전 해소 노이즈\n• 지정학적 불안\n• 하이일드 스프레드 급등 여부",
  },
  strategy: {
    icon: "🎯",
    title: "Strategy",
    content:
      "우량 기술주 중심 포트폴리오 유지 및 방어적 채권 비중 조절을 통한 변동성 대응 전략.",
  },
};
// MACRO INDICES DESCRIPTION

const seriesInfo = {
  UNRATE: {
    group: "growth",
    name: "Unemployment Rate",
    definition: "Unemployed / Labor Force",
    interpretation:
      "• Below ~4% : Tight labor market <br>• Rising trend : Economic slowdown risk <br>• +0.5% from cycle low : Recession signal (Sahm Rule)",
    marketImpact:
      "Rising unemployment <br> → weaker household income <br> → slower consumer spending <br> → pressure on corporate earnings",
    keyInsight:
      "Equity markets usually decline before unemployment rises, making it a lagging indicator for stocks.",
  },

  ICSA: {
    group: "growth",
    name: "Initial Jobless Claims",
    definition:
      "Weekly number of people filing for unemployment benefits for the first time.",
    interpretation:
      "• Below ~200k : Strong labor market <br>• 200k–250k : Normal conditions <br>• Above ~300k : Economic slowdown risk",
    marketImpact:
      "Rising jobless claims <br> → increasing layoffs <br> → weaker household income <br> → slower consumer spending <br> → pressure on corporate earnings and equities",
    keyInsight:
      "A sustained rise in claims often signals weakening economic momentum before unemployment increases.",
  },

  IPMAN: {
    group: "growth",
    name: "Industrial Production: Manufacturing",
    definition:
      "Index tracking real production output of U.S. manufacturing industries.",
    interpretation:
      "• Rising trend : Expanding manufacturing activity <br>• Flat trend : Stable industrial demand <br>• Declining trend : Weakening economic momentum",
    marketImpact:
      "Manufacturing output rises <br> → stronger industrial activity <br> → higher business investment <br> → stronger corporate revenues <br> → supportive for equities",
    keyInsight:
      "Manufacturing is highly cyclical and often weakens ahead of broader economic slowdowns.",
  },

  HOUST: {
    group: "growth",
    name: "Housing Starts",
    definition:
      "Number of new residential housing units where construction has begun.",
    interpretation:
      "• Rising trend : Strong housing demand <br>• Stable level : Balanced housing market <br>• Declining trend : Weak housing demand <br>• Sharp drop : Potential economic slowdown",
    marketImpact:
      "Housing starts rise <br> → stronger construction activity <br> → higher employment and income <br> → stronger consumer spending <br> → supportive for corporate earnings",
    keyInsight:
      "Housing is highly sensitive to interest rates and often turns down before broader economic slowdowns.",
  },

  RSXFS: {
    group: "growth",
    name: "Retail Sales",
    definition:
      "A measure of consumer spending at retail stores across the U.S.",
    interpretation:
      "• Rising trend : Strong consumer demand <br>• Stable growth : Healthy economic conditions <br>• Declining trend : Weakening consumer spending <br>• Sharp drop : Potential economic slowdown",
    marketImpact:
      "Retail sales rise <br> → stronger consumer spending <br> → higher corporate revenues <br> → stronger earnings growth <br> → supportive for equity markets",
    keyInsight:
      "Consumer spending accounts for the majority of U.S. economic activity, making retail sales a key macro indicator.",
  },

  T10Y2Y: {
    group: "stress",
    name: "10Y - 2Y Yield Curve",
    definition:
      "Difference between the 10-year Treasury yield and the 2-year Treasury yield.",
    interpretation:
      "• Positive spread : Normal economic conditions <br>• Narrow spread : Growth slowing <br>• Negative spread : Yield curve inversion <br>• Deep inversion : Elevated recession risk",
    marketImpact:
      "Yield curve flattens <br> → bank lending profitability declines <br> → credit conditions tighten <br> → economic growth slows <br> → downside risk for equities",
    keyInsight:
      "Yield curve inversions have historically preceded U.S. recessions and are one of the most closely watched macro indicators.",
  },

  BAMLH0A0HYM2: {
    group: "stress",
    name: "High Yield Spread",
    definition:
      "Yield difference between high-yield corporate bonds and U.S. Treasury bonds.",
    interpretation:
      "• Narrow spread : Strong risk appetite <br>• Gradual widening : Rising credit risk <br>• Sharp spike : Financial stress increasing",
    marketImpact:
      "Credit spreads widen <br> → higher corporate borrowing costs <br> → tighter financial conditions <br> → rising default risk <br> → downside pressure on equities",
    keyInsight:
      "High yield spreads are one of the fastest indicators of financial stress in the credit markets.",
  },

  NFCI: {
    group: "stress",
    name: "Chicago Fed NFCI",
    definition:
      "Composite index measuring overall financial conditions in U.S. markets.",
    interpretation:
      "• Below 0 : Loose financial conditions <br>• Around 0 : Neutral conditions <br>• Above 0 : Tight financial conditions",
    marketImpact:
      "Financial conditions tighten <br> → credit becomes harder to obtain <br> → investment slows <br> → economic growth weakens <br> → equities face pressure",
    keyInsight:
      "The NFCI aggregates many financial indicators to measure systemic liquidity and stress.",
  },

  DGS10: {
    group: "rates",
    name: "10-Year Treasury Yield",
    definition: "Benchmark long-term interest rate for the U.S. economy.",
    interpretation:
      "• Rising yields : Higher borrowing costs <br>• Stable yields : Balanced financial conditions <br>• Falling yields : Slowing growth or flight to safety",
    marketImpact:
      "Treasury yields rise <br> → discount rates increase <br> → equity valuations compress <br> → pressure on growth stocks",
    keyInsight:
      "The 10-year yield is the global benchmark rate influencing mortgages, corporate bonds, and equity valuations.",
  },

  DFII10: {
    group: "rates",
    name: "10-Year Real Yield",
    definition:
      "Inflation-adjusted yield derived from Treasury Inflation-Protected Securities (TIPS).",
    interpretation:
      "• Rising real yields : Tighter financial conditions <br>• Stable real yields : Neutral monetary stance <br>• Falling real yields : Easier financial conditions",
    marketImpact:
      "Real yields rise <br> → higher real cost of capital <br> → lower equity valuations <br> → pressure on growth assets",
    keyInsight:
      "Real yields reflect the true cost of capital and are closely linked to equity valuations and gold prices.",
  },

  WALCL: {
    group: "liquidity",
    name: "Fed Balance Sheet",
    definition: "Total assets held by the Federal Reserve.",
    interpretation:
      "• Rising balance sheet : Liquidity injection (QE) <br>• Stable level : Neutral liquidity conditions <br>• Declining balance sheet : Liquidity withdrawal (QT)",
    marketImpact:
      "Fed balance sheet expands <br> → liquidity increases <br> → financial conditions ease <br> → asset prices supported",
    keyInsight:
      "The pace of balance sheet expansion or contraction reflects the direction of central bank liquidity policy.",
  },

  BUSLOANS: {
    group: "liquidity",
    name: "Commercial & Industrial Loans",
    definition:
      "Bank lending to businesses for commercial and industrial purposes.",
    interpretation:
      "• Rising loans : Expanding credit availability <br>• Stable loans : Neutral credit conditions <br>• Declining loans : Credit tightening",
    marketImpact:
      "Business lending increases <br> → corporate investment rises <br> → economic activity strengthens <br> → supportive for equities",
    keyInsight:
      "A decline in C&I loans can signal an approaching credit crunch in the real economy.",
  },

  SP500: {
    group: "market",
    name: "S&P 500 Index",
    definition: "Market index tracking large-cap U.S. equities.",
    interpretation:
      "• Rising trend : Bullish market conditions <br>• Sideways trend : Uncertain macro outlook <br>• Falling trend : Risk-off environment",
    marketImpact:
      "Equity markets rise <br> → household wealth increases <br> → consumer spending rises <br> → economic activity strengthens",
    keyInsight:
      "The S&P 500 reflects the overall trend of U.S. equity markets and investor risk appetite.",
  },

  VIXCLS: {
    group: "market",
    name: "VIX Index",
    definition:
      "Implied volatility of S&P 500 options, often called the market fear gauge.",
    interpretation:
      "• Below 15 : Low market volatility <br>• 15–25 : Normal volatility <br>• Above 30 : Elevated market fear",
    marketImpact:
      "Volatility spikes <br> → risk aversion rises <br> → investors reduce exposure <br> → equities decline",
    keyInsight:
      "Extreme spikes in the VIX often coincide with market panic and potential buying opportunities.",
  },

  DTWEXBGS: {
    group: "market",
    name: "U.S. Dollar Index",
    definition:
      "Trade-weighted index measuring the value of the U.S. dollar against major currencies.",
    interpretation:
      "• Rising dollar : Global financial tightening <br>• Stable dollar : Balanced currency conditions <br>• Falling dollar : Easier global liquidity",
    marketImpact:
      "U.S. dollar strengthens <br> → global liquidity tightens <br> → emerging market pressure rises <br> → risk assets weaken",
    keyInsight:
      "A strong dollar often coincides with tighter global financial conditions and weaker risk assets.",
  },
};
