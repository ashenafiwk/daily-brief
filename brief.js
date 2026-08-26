// ===================================================================
// DAILY BRIEF DATA
// Update this file each morning; index.html renders whatever is here.
// The schema is stable - only the values change day to day.
// ===================================================================

const BRIEF = {
  date: "2026-08-26",
  dateLabel: "Wednesday, August 26, 2026",
  updated: "Aug 26, 2026 - 11:45 AM ET",
  regime: {
    label: "HIKE RISK",
    tone: "hawkish",
    line: "Core PCE held at 3.3%. The Fed goes into Jackson Hole divided, and the next move is still more likely up than down."
  },

  // ---- THE THREE THINGS -------------------------------------------
  signals: [
    {
      tag: "Inflation",
      title: "Core PCE stuck at 3.3% - but the monthly number softened",
      body: "The Fed's preferred gauge rose 3.3% year over year in July, in line with forecasts and unchanged from June. Month over month it was +0.2%, also in line. Sticky on the annual read, slowing on the monthly one.",
      why: "This is the split that keeps the Fed divided going into Jackson Hole. The annual figure arms the hawks who dissented in July; the monthly slowdown gives the holders something to point at. Nobody won today, which means Friday's speech carries even more weight."
    },
    {
      tag: "Earnings",
      title: "NVIDIA reports tonight, and the headline number is not the story",
      body: "Results land around 4:20pm ET with the call at 5:00pm. Company guidance was $91.0B plus or minus 2%; the 40-analyst consensus sits at $91.85B revenue and about $2.08 EPS - roughly 1% above the guidance midpoint.",
      why: "Consensus is so close to guidance that an in-line print moves nothing. The reaction will hinge on the Q3 outlook, the gross-margin trajectory, and any detail on Blackwell Ultra execution. If you hold index funds you hold this event whether you meant to or not."
    },
    {
      tag: "Trade",
      title: "Canada's retaliation is now concrete, consumer-facing, and dated",
      body: "Ottawa matched the U.S. dollar for dollar: over 700 American goods, roughly $20B, with duties up to 50%. Steel and aluminum from the U.S. get hit at 50%, doubling the current rate. The list reaches seafood, cheese, clothing, cosmetics and toilet paper. Live Sept 8.",
      why: "Two tariff walls now bracket the border, and this round lands on consumer staples rather than just industrial inputs. That is a direct CPI input arriving three days before the Fed's September meeting - and it argues for the hawks."
    }
  ],

  // ---- MARKETS ----------------------------------------------------
  markets: {
    asOf: "Aug 26 midday",
    indices: [
      { name: "S&P 500",      value: "7,679.56",  chg: "-28.42",  pct: "-0.37%", dir: "down" },
      { name: "Nasdaq",       value: "26,105.79", chg: "-225.30", pct: "-0.86%", dir: "down" },
      { name: "Dow 30",       value: "53,535.24", chg: "+72.19",  pct: "+0.14%", dir: "up" },
      { name: "Russell 2000", value: "3,012.96",  chg: "-19.98",  pct: "-0.66%", dir: "down" },
      { name: "10Y Treasury", value: "4.66%",     chg: "-0.03",   pct: "-0.68%", dir: "down" },
      { name: "Crude (WTI)",  value: "$81.48",    chg: "-5.58",   pct: "-6.41%", dir: "down", note: "Hormuz talks" },
      { name: "Gold",         value: "$4,679.00", chg: "+54.90",  pct: "+1.19%", dir: "up" },
      { name: "VIX",          value: "15.44",     chg: "-0.57",   pct: "-3.56%", dir: "down" }
    ],
    notes: [
      "Crude down more than 6% to about $81 is the day's real move - a third straight decline on reports Iran and Oman discussed a temporary joint maritime corridor through Hormuz.",
      "Equities are drifting, not trading the PCE print. The market is waiting on NVIDIA tonight.",
      "The 10Y at 4.66% eased alongside oil. Cheaper crude feeding lower yields is the one clean disinflationary channel currently open.",
      "Gold up over 1% to about $4,679 while VIX sits near 15 - a quiet tape with a persistent hedging bid underneath it.",
      "Meta settled the social media addiction case with California and other states for roughly $16.7B. Large number, but it retires an open-ended legal overhang."
    ]
  },

  // ---- FED & RATES ------------------------------------------------
  rates: {
    fedFunds: "3.50% - 3.75%",
    lastAction: "Held July 29 - 9-3 vote",
    dissents: "Hammack, Kashkari, Logan - all wanted HIGHER",
    inflation: "3.3% core PCE",
    target: "2.0%",
    nextMeeting: "Sept 15-16 - includes dot plot",
    hikeOdds: "~33% for September",
    note: "Today's print changed nobody's mind, which is itself the story. The annual rate is sticky enough to keep three hawks dissenting and the monthly rate is soft enough to justify holding. Warsh speaks Friday into exactly that deadlock."
  },

  // ---- REAL ESTATE ------------------------------------------------
  realEstate: {
    rate30: "6.681%",
    rateNote: "Down from 6.722% yesterday; 6.59% - 6.75% range this week. Refi averaging 6.74%.",
    drivers: [
      "Rates drifted lower with Treasury yields as oil fell for a third session on Hormuz corridor talks.",
      "Cheaper crude is genuinely disinflationary and is the most plausible path to lower mortgage rates from here.",
      "Working against that: national debt concerns keeping term premium elevated, and a Fed that is discussing hikes rather than cuts."
    ],
    implication: "A four-basis-point move is noise, not a trend. Nothing here changes the refi math for anyone who financed below 6%. The variable actually worth tracking is oil - if the Hormuz corridor holds, that is the channel through which mortgage rates could fall.",
    thisWeek: "Durable goods came in at $339.25B for July. GDP second estimate for Q2 expected at 1.5%, down from 2.1% - softening growth is the counterweight to the hawkish inflation read."
  },

  // ---- POLICY & GEOPOLITICS ---------------------------------------
  policy: [
    {
      title: "Canada retaliates dollar for dollar",
      body: "Over 700 U.S. goods worth roughly $20B, with duties reaching 50%. American steel and aluminum are hit at 50%, double the prior rate. Consumer categories are squarely in scope: seafood, cheese, clothing, cosmetics, paper goods. Effective Sept 8. This answers the 50% U.S. duties imposed over the weekend on Canadian wine, cement and other goods.",
      exposure: "Steel & aluminum - Consumer staples - Autos - Industrials",
      impact: "high"
    },
    {
      title: "Iran sanctions extend to the dollar system",
      body: "Treasury's package sanctions anyone transacting with Tehran and warns that entities facilitating money laundering for Iran will be cut off from the U.S. dollar system. That is a materially broader threat than tariffs - it reaches third-country banks and counterparties.",
      exposure: "Energy - Defense - Shipping - Banks with EM exposure",
      impact: "high"
    },
    {
      title: "Hormuz corridor talks are the biggest disinflationary lever in play",
      body: "Iran and Oman reportedly discussed a temporary joint maritime corridor. Brent fell 3% to about $89.5 Tuesday and crude broke below $81 Wednesday. The strait carried roughly one-fifth of global oil supply before the war. The EIA does not expect Middle East production near pre-conflict levels until early 2027 and sees Brent averaging $87 in 2026.",
      exposure: "Energy - Airlines - Transports - Anything inflation-linked",
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
    action: "No rule changes today. With core PCE at 3.3% and a Fed still debating hikes, short-duration cash inside tax-advantaged accounts continues to be paid to wait - the opportunity cost of dry powder is unusually low."
  },

  // ---- CALENDAR ---------------------------------------------------
  calendar: [
    { when: "TODAY 4:20pm", what: "NVIDIA Q2 FY27 results", detail: "Call at 5:00pm ET. Guidance $91.0B +/- 2%; consensus $91.85B and ~$2.08 EPS. Watch the Q3 outlook, gross margin and Blackwell Ultra commentary - not the headline.", flag: "high" },
    { when: "Today",      what: "Core PCE - DONE", detail: "3.3% y/y, +0.2% m/m, both in line. Sticky annually, softer monthly. Fed stays divided.", flag: "high" },
    { when: "Today",      what: "GDP Q2 second estimate", detail: "Expected 1.5%, down from 2.1%. Softening growth cuts against the case for hiking.", flag: "high" },
    { when: "Today",      what: "Durable goods (July)", detail: "$339.25B. Read on manufacturing demand ahead of the tariff wave.", flag: "med" },
    { when: "Thu Aug 27", what: "Initial jobless claims", detail: "Fastest available signal if the labor market is cracking under trade pressure.", flag: "med" },
    { when: "Fri Aug 28", what: "Warsh at Jackson Hole", detail: "First address as Fed Chair, delivered into a genuinely split committee. Neutral is priced; the surprise is the trade.", flag: "high" },
    { when: "Tue Sep 8",  what: "Canadian tariffs take effect", detail: "700+ U.S. goods, up to 50%. One week before the FOMC decides.", flag: "high" },
    { when: "Fri Sep 11", what: "CPI", detail: "Last inflation print before the FOMC meets.", flag: "high" },
    { when: "Sep 15-16",  what: "FOMC + dot plot", detail: "Rate decision with an updated Summary of Economic Projections.", flag: "high" }
  ],

  // ---- WATCHLIST (tickers only - no positions, no dollar amounts) --
  watchlist: [
    { sym: "NVDA", note: "Reports tonight after the close" },
    { sym: "META", note: "$16.7B addiction-trial settlement" },
    { sym: "SPY",  note: "Broad market proxy" },
    { sym: "IWM",  note: "Small caps - outperforming today" },
    { sym: "TLT",  note: "Long bonds - the hike-risk casualty" },
    { sym: "XLE",  note: "Energy - falling on Hormuz talks" },
    { sym: "XHB",  note: "Homebuilders - rates plus steel tariffs" },
    { sym: "SLX",  note: "Steel - 50% tariffs both directions" }
  ],

  sources: [
    { label: "CNBC - Core PCE 3.3%",      url: "https://www.cnbc.com/2026/08/26/feds-preferred-inflation-gauge-shows-core-prices-rose-3point3percent-annually-in-july.html" },
    { label: "Yahoo - Sticky PCE, split Fed", url: "https://finance.yahoo.com/economy/policy/article/sticky-pce-inflation-leaves-a-divided-central-bank-ahead-of-feds-jackson-hole-retreat-125248345.html" },
    { label: "Yahoo Finance - Aug 26 live", url: "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-august-26-dow-sp-500-nasdaq-081834782.html" },
    { label: "TheStreet - Aug 26",        url: "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-aug-26-2026" },
    { label: "NVDA Q2 preview",           url: "https://investinglive.com/stocks/preview-nvidia-reports-q2-results-today-guidance-implies-revenue-near-91-billion/" },
    { label: "IG - NVDA what to watch",   url: "https://www.ig.com/en/news-and-trade-ideas/nvidia-q2-fy2027-earnings-preview--what-to-watch-260825" },
    { label: "CNBC - US economic power",  url: "https://www.cnbc.com/2026/08/26/cnbc-daily-open-canada-trade-us-iran-strait-of-hormuz.html" },
    { label: "Canada retaliatory tariffs", url: "https://www.wbay.com/2026/08/25/canada-announces-retaliatory-tariffs-including-cheese-paper-pulp-farm-equipment/" },
    { label: "CNBC - Hormuz and oil",     url: "https://www.cnbc.com/2026/08/11/hormuz-oil-prices-us-iran.html" },
    { label: "Fortune - Mortgage rates",  url: "https://fortune.com/article/current-mortgage-rates-08-26-2026/" },
    { label: "Census - Durable goods",    url: "https://www.census.gov/manufacturing/m3/adv/current/index.html" },
    { label: "IRS - 2026 limits",         url: "https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" }
  ]
};
