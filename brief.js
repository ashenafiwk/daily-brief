// ===================================================================
// DAILY BRIEF DATA
// Update this file each morning; index.html renders whatever is here.
// The schema is stable - only the values change day to day.
// ===================================================================

const BRIEF = {
  date: "2026-08-25",
  dateLabel: "Tuesday, August 25, 2026",
  updated: "Aug 25, 2026 - 10:30 AM ET",
  regime: {
    label: "HIKE RISK",
    tone: "hawkish",
    line: "The Fed's next move is more likely up than down. Position for higher-for-longer, not for cuts."
  },

  // ---- THE THREE THINGS -------------------------------------------
  signals: [
    {
      tag: "Rates",
      title: "The market is pricing a rate HIKE, not a cut",
      body: "Fed funds sits at 3.50-3.75% after July's 9-3 hold. All three dissents wanted rates <em>higher</em>. With inflation at 3.4% against a 2% target, futures put roughly one-in-three odds on a September hike.",
      why: "If you have been positioning for a cutting cycle - long-duration bonds, rate-sensitive REITs, unprofitable growth - that thesis is now running against the current. Short-duration cash is still being paid to wait."
    },
    {
      tag: "Catalyst",
      title: "Warsh speaks Friday, and neutral is fully priced",
      body: "New Fed Chair Kevin Warsh gives his first Jackson Hole address on Friday, Aug 28. A BofA survey has 69% of fund managers expecting a neutral tone - which means neutral moves nothing, and any surprise moves a lot.",
      why: "Asymmetric event risk into the weekend. Hawkish surprise: dollar rallies, long bonds and growth stocks sell off. Dovish surprise: risk assets rip. Position sizing into Friday matters more than direction."
    },
    {
      tag: "Trade",
      title: "Canada talks collapsed; retaliation lands Sept 8",
      body: "Negotiations failed before Friday's deadline, triggering tariffs on $20B of Canadian goods, with a threatened 50% levy on autos, parts and steel next year. Canada retaliates Sept 8. Separately, Treasury launched a sanctions campaign against Iran.",
      why: "This is an inflation input, which loops straight back to the Fed. Autos, industrials, homebuilding materials and energy carry the most direct exposure. It also raises the odds the Fed stays hawkish."
    }
  ],

  // ---- MARKETS ----------------------------------------------------
  markets: {
    asOf: "Aug 25",
    indices: [
      { name: "Dow 30",  value: "53,500.30", chg: "+83.14",  pct: "+0.16%", dir: "up" },
      { name: "Nasdaq",  value: "26,126.08", chg: "+145.89", pct: "+0.56%", dir: "up" },
      { name: "S&P 500", value: "--",        chg: "--",      pct: "+0.4%",  dir: "up", note: "prior session" }
    ],
    notes: [
      "Chip stocks sold off hard Monday, then recovered Tuesday as Treasury yields eased.",
      "Investors largely shrugged off the Canada and Iran headlines - the market is trading the Fed, not the geopolitics.",
      "Falling oil and falling yields did the lifting Tuesday, not earnings."
    ]
  },

  // ---- FED & RATES ------------------------------------------------
  rates: {
    fedFunds: "3.50% - 3.75%",
    lastAction: "Held July 29 - 9-3 vote",
    dissents: "Hammack, Kashkari, Logan - all wanted HIGHER",
    inflation: "3.4%",
    target: "2.0%",
    nextMeeting: "Sept 15-16 - includes dot plot",
    hikeOdds: "~33% for September",
    note: "This is the key inversion to internalize: the dissents are hawkish. A year ago the debate was how fast to cut. It is now whether to hike."
  },

  // ---- REAL ESTATE ------------------------------------------------
  realEstate: {
    rate30: "6.55% - 6.72%",
    rateNote: "One basis point below last week, 11 bps above a year ago",
    drivers: [
      "Rates have climbed since the U.S.-Iran conflict began in late February.",
      "Persistent concern over the national debt is keeping term premium - and therefore mortgage rates - elevated.",
      "Some investors are openly worried about a bond crisis; that tail risk is the thing to watch for housing."
    ],
    implication: "Refi math does not work at these levels for anyone who financed below 6%. For buyers, the question is affordability today versus a rate environment with no clear catalyst to fall while the Fed is still discussing hikes.",
    thisWeek: "Housing Starts and Permits print this week - the read on whether builders are still adding supply into weak affordability."
  },

  // ---- POLICY & GEOPOLITICS ---------------------------------------
  policy: [
    {
      title: "Canada trade war escalates",
      body: "Tariffs on $20B of Canadian products are live after talks collapsed. A 50% tariff on Canadian autos, car parts and steel is threatened for next year. PM Carney has committed to retaliatory tariffs beginning Sept 8.",
      exposure: "Autos - Industrials - Steel - Homebuilders",
      impact: "high"
    },
    {
      title: "New sanctions campaign targets Iran",
      body: "Treasury Secretary Bessent announced a campaign to isolate Tehran and its trading partners. Details were thin, and China - Iran's largest trade partner - went unmentioned. Iran's rial hit a record low of 2.02M per dollar.",
      exposure: "Energy - Defense - Shipping",
      impact: "medium"
    },
    {
      title: "Bond-crisis chatter is entering mainstream commentary",
      body: "Prolonged economic conflict with both an adversary and an ally raises the risk of retaliation that pushes energy and food prices higher, at a moment when some investors already fear a disorderly move in the Treasury market.",
      exposure: "Long-duration bonds - REITs - Anything rate-sensitive",
      impact: "watch"
    }
  ],

  // ---- RETIREMENT -------------------------------------------------
  retirement: {
    year: "2026",
    limits: [
      { label: "401(k) / 403(b) / TSP", value: "$24,500", prior: "was $23,500" },
      { label: "401(k) catch-up (50+)", value: "$8,000",  prior: "was $7,500" },
      { label: "IRA",                   value: "$7,500",  prior: "was $7,000" },
      { label: "IRA catch-up (50+)",    value: "$1,100",  prior: "was $1,000" }
    ],
    rules: [
      {
        title: "Catch-up contributions must be Roth if you earned over $150K",
        body: "If your 2025 wages exceeded $150,000, catch-up contributions are now required to be after-tax Roth. You no longer get to choose pre-tax. This raises your current-year taxable income if you are 50+ and maxing out."
      },
      {
        title: "Deduction phase-outs moved up",
        body: "Single filers covered by a workplace plan phase out between $81,000 and $91,000. Married filing jointly phases out between $129,000 and $149,000."
      }
    ],
    action: "With hike risk on the table and short rates still elevated, cash inside tax-advantaged accounts is actually earning something. The historical penalty for holding dry powder in a retirement account is unusually low right now."
  },

  // ---- CALENDAR ---------------------------------------------------
  calendar: [
    { when: "Wed Aug 26", what: "NVIDIA earnings", detail: "After the close. Consensus around $91.8B revenue and $4.09 adjusted EPS. Single biggest driver of index direction this week.", flag: "high" },
    { when: "This week",  what: "GDP", detail: "Growth is reportedly cracking under trade and geopolitical pressure. A weak print complicates the hawkish case.", flag: "high" },
    { when: "This week",  what: "Personal Income & Outlays (PCE)", detail: "Contains the Fed's preferred inflation gauge. The most important number of the week for rate odds.", flag: "high" },
    { when: "This week",  what: "Housing Starts & Permits", detail: "Direct read on builder confidence and future supply.", flag: "med" },
    { when: "This week",  what: "Consumer Confidence, Durable Goods, Jobless Claims", detail: "Second tier, but jobless claims is the fastest signal if the labor market is turning.", flag: "med" },
    { when: "Fri Aug 28", what: "Warsh at Jackson Hole", detail: "First address as Fed Chair. Neutral is priced; the surprise is the trade.", flag: "high" },
    { when: "Fri Sep 11", what: "CPI", detail: "Last inflation print before the FOMC decides.", flag: "high" },
    { when: "Sep 15-16",  what: "FOMC + dot plot", detail: "Rate decision with an updated Summary of Economic Projections.", flag: "high" }
  ],

  // ---- WATCHLIST (tickers only - no positions, no dollar amounts) --
  watchlist: [
    { sym: "NVDA", note: "Earnings Wed after close" },
    { sym: "SPY",  note: "Broad market proxy" },
    { sym: "TLT",  note: "Long bonds - the hike-risk casualty" },
    { sym: "XLE",  note: "Energy - Iran exposure" },
    { sym: "XHB",  note: "Homebuilders - rates plus steel tariffs" }
  ],

  sources: [
    { label: "CNBC - Markets",            url: "https://www.cnbc.com/2026/08/24/stock-market-today-live-updates.html" },
    { label: "Yahoo Finance - Live",      url: "https://finance.yahoo.com/markets/live/stock-market-today-tuesday-august-25-dow-sp-500-nasdaq-080527092.html" },
    { label: "Federal Reserve - FOMC",    url: "https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm" },
    { label: "CNBC - Fed decision",       url: "https://www.cnbc.com/2026/07/29/fed-rate-decision-july-2026.html" },
    { label: "Bloomberg - Warsh",         url: "https://www.bloomberg.com/news/articles/2026-08-22/kevin-warsh-to-make-first-jackson-hole-speech-as-fed-chair" },
    { label: "NPR - Canada and Iran",     url: "https://www.npr.org/2026/08/24/g-s1-139736/up-first-newsletter-iran-economic-pressures-canada-tariffs-trump-visa-ban" },
    { label: "CNN - Trade policy",        url: "https://www.cnn.com/2026/08/25/politics/trump-iran-sanctions-canada-tariffs" },
    { label: "IRS - 2026 limits",         url: "https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" },
    { label: "Mortgage Daily - Rates",    url: "https://www.mortgagedaily.com/rates/mortgage-rates-today-2026-08-22/" },
    { label: "Kiplinger - Econ calendar", url: "https://www.kiplinger.com/investing/economy/this-weeks-economic-calendar" }
  ]
};
