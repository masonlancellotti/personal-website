// Ledger data + skills + transcript

const REGISTER = [
  {
    n: 1, start: "2022-06", end: "2023-03",
    period: "Jun '22 – Mar '23",
    kind: "Work",
    org: "Mathnasium",
    role: "Math Instructor",
    place: "Haymarket, VA",
    coords: "38.81°N, 77.64°W",
    note: "This was my first paid role, and served as my introduction into the professional world.",
    bullets: [
      "Taught 30+ K-12 students through structured sessions and one-on-one homework help.",
      "Introduced study techniques and problem-solving strategies to build retention and academic confidence.",
      "Wrote personalized learning plans with regular parent check-ins, with ~90% of students finishing the semester with higher grades."
    ],
    stat: { v: "30", sub: "+", label: "students", fn: 4 },
    photo: null,
    link: { href: "https://www.mathnasium.com/math-centers/haymarket", label: "Mathnasium Haymarket" },
    fn: 1,
    future: false,
    duration: "10 mos."
  },
  {
    n: 2, start: "2024-01", end: null,
    period: "Jan '24 – Present",
    kind: "Leadership",
    org: "Emory Club Swimming",
    role: "Vice President",
    place: "Atlanta, GA",
    coords: "33.79°N, 84.32°W",
    note: "The team spans from beginners to ex-varsity swimmers, requiring me to consider many different perspectives, often different than my own.",
    bullets: [
      "Design and lead 4 practices per week for 10–20 swimmers across every skill level.",
      "Balance technique work for new swimmers with endurance training for more experienced swimmers in the same session.",
      "Coordinate logistics for 6 out-of-state meets per year, managing itineraries, lodging, transportation, and budgeting with the club sports office."
    ],
    stat: { v: "6", sub: "/yr", label: "out-of-state meets", fn: 6 },
    photo: null,
    photos: ["v2/swim-5.jpg", "v2/swim-2.jpg", "v2/swim-3.jpg"],
    fn: 3,
    future: false,
    duration: "Ongoing"
  },
  {
    n: 3, start: "2024-05", end: "2026-08",
    period: "May '24 – Aug '26",
    kind: "Work",
    org: "Life Time Fitness",
    role: "Lifeguard",
    place: "Gainesville, VA",
    coords: "38.79°N, 77.61°W",
    note: "Being a returning seasonal employee for three summers, I underwent repeated certifications and training. This position also bolstered my client communication skills.",
    bullets: [
      "Monitored pool activities and proactively enforced safety guidelines to prevent accidents.",
      "Administered first aid on 6 separate occasions, coordinating directly with police and EMS.",
      "Collaborated with management on aquatics events and served 300+ members daily, resolving issues on the pool deck and locker rooms."
    ],
    stat: { v: "6", sub: "", label: "emergency responses", fn: 5 },
    photo: null,
    link: { href: "https://my.lifetime.life/clubs/va/gainesville/programs/swim.html", label: "Life Time Gainesville" },
    fn: 2,
    future: false,
    duration: "2 yrs. 4 mos."
  },
  {
    n: 4, start: "2025-06", end: "2025-08",
    period: "Jun '25 – Aug '25",
    kind: "Internship",
    org: "RBmedia",
    role: "Business Analytics Intern",
    place: "Landover, MD",
    coords: "38.93°N, 76.87°W",
    note: "This was my first time in a professional setting with a business context. It opened my eyes to the utility of data and how invaluable of a tool it can be for almost any task, goal, or industry.",
    bullets: [
      "Compiled monthly and quarterly sales reports on 2,500+ Audible and Spotify audiobook titles.",
      "Visualized trends with tables and graphs to help guide executive decision-making on a variety of topics.",
      "Assisted in rolling out an automated posting workflow across 12 social media accounts, supervising the first ~1,800 uploads and diagnosing technical issues in real time."
    ],
    stat: { v: "2,500", sub: "+", label: "titles tracked", fn: 7 },
    photo: null,
    link: { href: "https://rbmediaglobal.com/", label: "RBmedia" },
    fn: 4,
    future: false,
    duration: "3 mos."
  },
  {
    n: 5, start: "2025-09", end: null,
    period: "Sep '25 – Present",
    kind: "Leadership",
    org: "Emory Economics Department",
    role: "Student Tutor",
    place: "Atlanta, GA",
    coords: "33.79°N, 84.32°W",
    note: "Having been invited to the program through a GPA-based selection process, students can reach out to me for independent, paid tutoring when in need of homework help or clarity on tricky concepts.",
    bullets: [
      "Offer one-on-one instruction in micro/macroeconomics, data science, and computer science.",
      "Build comprehensive review guides and exam-based timelines from each course's syllabus.",
      "Run 3-5 sessions per week on content mastery, problem sets, and test strategy, looping in professors and TAs when needed to clarify solution methods."
    ],
    stat: { v: "60", sub: "/800", label: "selection ratio", fn: 9 },
    photo: null,
    link: { href: "https://economics.emory.edu/undergraduate/econ-dept-opportunities/tutoring.html", label: "Emory Econ Tutoring" },
    fn: 5,
    future: false,
    duration: "Ongoing"
  },
  {
    n: 6, start: "2026-06", end: null,
    period: "June '26 – Present",
    kind: "Internship",
    org: "GROWTH Homes",
    role: "Digital Marketing Intern",
    place: "Washington, DC",
    coords: "38.91°N, 77.04°W",
    note: "I support ongoing digital marketing, data, and automation projects for a real estate organization on an as-needed basis.",
    bullets: [
      "Developed an industry-specific AI application that saved approximately 61 hours of manual labor over an initial test batch of 76 short-form videos.",
      "Reconciled 4,000+ records for CRM migration, authoring formal documentation to guide adoption, best practices, and efficient utilization.",
      "Retained on an as-needed basis to support ongoing projects and new emerging needs."
    ],
    stat: { v: "61", sub: "hrs.", label: "manual labor saved" },
    photo: null,
    link: null,
    fn: 6,
    future: false,
    duration: "Ongoing"
  }
];

// Skills — pulled directly from resume, in the order listed there
const SKILLS = [
  // Expert
  { skill: "PowerPoint",             level: "Expert",       n: 5, applied: "Stock pitches, mock strategy analysis decks, Experimental Economics final presentation, Econometrics final presentation, Topics in Macroeconomics presentations, other miscellaneous class projects" },
  { skill: "AI automation",          level: "Expert",       n: 5, applied: "Audiobook preview creation/posting workflow (RBmedia), centralized real estate social media marketing app (GROWTH Homes), Data Management & Visualization, various personal projects, daily work streamlining and efficiency" },
  // Advanced
  { skill: "Python",                 level: "Advanced",     n: 4, applied: "All personal projects (see Project Repositories), Computing Methods in Economics, Data Management & Visualization, course labs for Calculus, Linear Algebra, Econometrics, and Data Science for Economists", reposLink: true },
  { skill: "Excel",                  level: "Advanced",     n: 4, applied: "Sales data cleaning and analysis (RBmedia), CRM data restructure and transfer (GROWTH Homes), financial modeling (personal investing), Corporate Finance, Accounting, and Process & Systems Management" },
  { skill: "Financial analysis",     level: "Advanced",     n: 4, applied: "Market research dashboard, Bitcoin price prediction model, Corporate Finance, stock pitches, personal investing" },
  { skill: "Econometrics",           level: "Advanced",     n: 4, applied: "Econometrics final project, Quantitative Methods I, prediction markets trading program, bitcoin price prediction model" },
  { skill: "Forecasting",            level: "Advanced",     n: 4, applied: "Bitcoin price prediction model, Econometrics final project, prediction markets trading program, Process & Systems Management, Corporate Finance" },
  { skill: "Valuation",              level: "Advanced",     n: 4, applied: "Prediction markets trading program, stock pitches, Corporate Finance, personal investing" },
  // Proficient
  { skill: "SQL",                    level: "Proficient",   n: 3, applied: "Market research dashboard, prediction markets trading program, centralized real estate social media marketing app, Database Systems" },
  { skill: "Git",                    level: "Proficient",   n: 3, applied: "All personal projects, Data Management & Visualization" },
  { skill: "Tableau",                level: "Proficient",   n: 3, applied: "Process & Systems Management, Data Management & Visualization" },
  { skill: "Macroeconomic analysis", level: "Proficient",   n: 3, applied: "Market research dashboard (regime analysis and sentiment components), Intermediate Macroeconomics, Topics in Macroeconomics, Emory Economics Review, personal blog" },
  { skill: "Competitive research",   level: "Proficient",   n: 3, applied: "Market research dashboard, ad hoc projects/writeups (RBmedia and GROWTH Homes), Emory Economics Review, personal blog, personal investing" },
  { skill: "Due diligence",          level: "Proficient",   n: 3, applied: "Market research dashboard, stock pitches, personal investing" },
  // Intermediate
  { skill: "Power BI",               level: "Intermediate", n: 2, applied: "Econometrics, trading/pricing program dashboards" },
  { skill: "Stata",                  level: "Intermediate", n: 2, applied: "Data Science for Economists, Econometrics" },
  { skill: "R",                      level: "Intermediate", n: 2, applied: "Econometrics, Data Management & Visualization" },
];

// Full academic transcript — every term, every course
const TRANSCRIPT = [
  {
    term: "Fall 2023", termGpa: 4.000, credits: 15, creditsFn: 1,
    courses: [
      { code: "CS 170",   name: "Intro to Computer Science I",                 credits: 4, grade: "A", placeholder: "Learned programming from scratch in Java, starting with simple algorithms, recursion, and turtle graphics." },
      { code: "ECON 101", name: "Principles of Microeconomics",                credits: 3, grade: "A", placeholder: "Covered how markets work through supply, demand, pricing, and consumer/firm behavior." },
      { code: "PSYC 110", name: "Intro Psychology I",                          credits: 3, grade: "A", placeholder: "Focused on the biological side of psychology, including brain structures, animal behavior, and how different parts of the brain control different functions or predispositions." },
      { code: "PSYC 190", name: "Freshman Seminar: Psychology",                credits: 3, grade: "A", placeholder: "Focused on case studies regarding brain disorders like Alzheimer's, face blindness, and aphantasia, concluding with a fifteen-minute final presentation (which I did on CTE)." },
    ]
  },
  {
    term: "Spring 2024", termGpa: 4.000, credits: 13, creditsFn: 1,
    courses: [
      { code: "CS 171",   name: "Intro to Computer Science II",                credits: 3, grade: "A", placeholder: "Built on Java foundation from CS 170 with object-oriented programming, basic data structures, and more complex/efficient problem solving." },
      { code: "CS 224",   name: "Foundations of Computer Science",             credits: 3, grade: "A", placeholder: "Covered discrete math, logic, proofs, and the theory behind how computer science and encryption work." },
      { code: "ECON 112", name: "Principles of Macroeconomics",                credits: 3, grade: "A", placeholder: "Focused on inflation, unemployment, growth, banking, and how the Fed as well as the overall larger economy function." },
      { code: "ENG 205",  name: "Poetry",                                      credits: 3, grade: "A", placeholder: "Focused on reading comprehension and understanding the how and why behind authors' use of varying languages, structures, and tones." },
    ]
  },
  {
    term: "Fall 2024", termGpa: 3.929, credits: 17,
    courses: [
      { code: "CS 253",   name: "Data Structures and Algorithms",              credits: 3, grade: "A",  placeholder: "Learned core data structures and algorithms in both Java and Python, with an emphasis on efficiency and identifying appropriate use cases." },
      { code: "ECON 201", name: "Intermediate Microeconomics",                 credits: 4, grade: "A",  placeholder: "Dove deeper into utility theory, consumer choice dynamics, firm behavior, constrained optimization, and other calculus applications." },
      { code: "ECON 215", name: "Stocks, Bonds & Financial Markets",           credits: 3, grade: "A",  placeholder: "Covered a vast array of financial markets, including stocks, bonds, options, futures, real estate, and other major asset classes." },
      { code: "MATH 221", name: "Linear Algebra",                              credits: 4, grade: "A-", placeholder: "Studied matrices, vector spaces, eigenvalues, transformations, and least-squares methods, learning how to apply these concepts efficiently and in a standardized manner using Python." },
      { code: "SPAN 201", name: "Intermediate Spanish I",                      credits: 3, grade: "A",  placeholder: "Focused on the study of authentic cultural material in order to build more robust speaking, writing, reading, and listening skills." },
    ]
  },
  {
    term: "Spring 2025", termGpa: 4.000, credits: 18,
    courses: [
      { code: "ACT 200",  name: "Accounting: The Language of Business",        credits: 3, grade: "A", placeholder: "Learned how the four financial statements connect and can be used to track performance through transactions, costs, and cash flows, concluding with a final twenty-minute stock pitch (which my group did on Nike, recommending a buy)." },
      { code: "BUS 290",  name: "Tech Toolbox A: Excel",                       credits: 1, grade: "S", placeholder: "Built practical Excel skills through learning formulas, how to create charts, employ pivot tables, utilize VLOOKUP, and conduct basic financial modeling." },
      { code: "ECON 212", name: "Intermediate Macroeconomics",                 credits: 3, grade: "A", placeholder: "A math-heavy class centered on deriving theoretical models for national output, employment, inflation, and monetary policy mechanisms." },
      { code: "ECON 220", name: "Data Science for Economists",                 credits: 4, grade: "A", placeholder: "Covered basic and intermediate probability, statistics, and regression concepts, also including a Python lab component during which we conducted practical economic work using real-world datasets." },
      { code: "MATH 210", name: "Advanced Calculus for Data Sciences",         credits: 4, grade: "A", placeholder: "Focused on multivariable calculus, optimization, integration, Taylor series, and specific data science applications using Python." },
      { code: "SPAN 202", name: "Intermediate Spanish II",                     credits: 3, grade: "A", placeholder: "Continued strengthening Spanish communication skills while further studying Hispanic culture, society, and history." },
    ]
  },
  {
    term: "Fall 2025", termGpa: 4.000, credits: 17,
    courses: [
      { code: "CS 325",   name: "Artificial Intelligence",                     credits: 3, grade: "A", placeholder: "Began with primitive AI concepts and built up to more advanced topics like alpha-beta pruning, CNNs, reinforcement learning, and LLMs, overall covering a wide array of computational techniques and their discrete foundations." },
      { code: "ECON 310W", name: "Experimental Economics",                     credits: 4, grade: "A", placeholder: "Focused on examining a list of the most impactful studies and findings in the field, ending with a capstone project that involved the design of our own economic experiment and a mock academic paper explaining the procedure and analyzing various possible outcomes." },
      { code: "ECON 320", name: "Econometrics",                                credits: 4, grade: "A", placeholder: "Focused on regression-based approaches for modeling economic data, testing relationships, and interpreting results, including a lab section in which we had to design a unique econometric model using real datasets from IPUMS and FRED, presenting our findings and limitations at the conclusion of the course." },
      { code: "FIN 320",  name: "Corporate Finance",                           credits: 3, grade: "A", placeholder: "Covered stock and bond valuation, annuities and perpetuities, risk-return tradeoffs, capital allocation, and general firm-level financial decision-making." },
      { code: "HIST 207", name: "Medieval Europe and the World",               credits: 3, grade: "A", placeholder: "Focused on Catholicism's aggressive expansion and religious dominance through the rigorous study and analysis of primary texts and accounts, emphasizing the suppression of other cultures and belief systems." },
    ]
  },
  {
    term: "Spring 2026", termGpa: 3.600, credits: 12,
    courses: [
      { code: "CS 334",   name: "Machine Learning",                            credits: 3, grade: "A-", placeholder: "Built from foundational ML concepts like decision boundaries, gradient descent, regularization, model selection, and kernels into more advanced topics like neural networks, transformers, clustering, and recommender systems." },
      { code: "CS 377",   name: "Database Systems",                            credits: 3, grade: "A",  placeholder: "A heavily SQL-based class covering database design, relational models, normalization, query processing, and maintenance of data integrity." },
      { code: "ISOM 351", name: "Process & Systems Management",                credits: 3, grade: "B-", placeholder: "Studied how businesses analyze and improve operations, allocate resources, and make process decisions, with an emphasis on performance measurement, forecasting accuracy, and reducing costly inefficiencies." },
      { code: "MKT 340",  name: "Marketing Management",                        credits: 3, grade: "A",  placeholder: "Covered how companies understand customers, position products, and construct marketing strategies, ending with an online, multi-week, simulated internship and group presentation on our decision-making throughout the activity." },
    ]
  },
  {
    term: "Fall 2026", termGpa: null, credits: 13, current: true,
    courses: [
      { code: "ECON 480",  name: "Computing Methods in Economics",  credits: 3, grade: "TBD", placeholder: "Capstone course focused on conducting economic analysis through advanced computational techniques, including a variety of different topics, each covering a unique economic model and its implementation using software tools and programming languages." },
      { code: "ECON 410W", name: "Topics in Macroeconomics",       credits: 4, grade: "TBD", placeholder: "Advanced writing-intensive seminar focused on macroeconomic theory, fiscal policy, and the labor market, bridging the gap between theory and real data, and concluding with a fifteen-page research paper with a defensible position of my own." },
      { code: "ECON 525",  name: "Data Mgmt. & Visualization",     credits: 3, grade: "TBD", placeholder: "A graduate course on building practical skills required for economic analysis and data science, with an emphasis on acquiring, cleaning, and structuring data, development of reproducible research workflows, and hands-on use of Git, Python, R, Stata, and AI." },
      { code: "ECON 526",  name: "Quantitative Methods I",         credits: 3, grade: "TBD", placeholder: "Another graduate course setting the foundation for complex econometric work, covering multivariate and integral calculus, matrix algebra, differential equations, and their applications in both static and dynamic analyses." },
    ]
  }
];

const REPOS = [
  {
    title: "Prediction Markets",
    name: "four repositories",
    desc: "Trading research across Kalshi and Polymarket: a crypto contract backtesting system, a cross-venue arbitrage scanner, a trading terminal, and a weather contract pricing model.",
    lang: "Py / TS / JS",
    status: "Research",
    longDesc: "A sustained research program built on one thesis: inefficiencies should be easier to identify and more common in prediction markets, which are much less mature than traditional financial markets and are still dominated by a largely non-institutional trader base. Testing that thesis honestly produced four systems, and the recurring finding is that the interesting work is proving which apparent opportunities are real.",
    subs: [
      {
        title: "Crypto Contract Backtesting System",
        text: "Tests whether fifteen-minute crypto contracts on Kalshi can be beaten after costs: leakage-safe point-in-time features, purged cross-validation, calibrated models, and fee-aware backtests that fill at executable prices, across thirty-eight strategy hypotheses and millions of real trade prints. The market won. The one strategy that survived the statistical screen was rejected anyway, because it collected a few cents per trade against a ninety-six cent loss tail the statistics could not see. 677 offline tests, keyless demo.",
        link: { label: "github.com/masonlancellotti/crypto-contract-backtesting-system", href: "https://github.com/masonlancellotti/crypto-contract-backtesting-system" }
      },
      {
        title: "Arbitrage Scanner",
        text: "Builds the logical relationship graph across both venues, prices the bounds those relationships require, and reports live violations with the exact arbitrage construction and fee-adjusted net profit. The second half reconciles which contracts are actually the same bet before believing any price gap: on a recorded live run of 152,000 instruments and 298,000 quotes it rejected 797 arbitrages that only looked riskless. The hard problem is not finding opportunities, it is correctly throwing them away.",
        link: { label: "github.com/masonlancellotti/prediction-market-arbitrage-scanner", href: "https://github.com/masonlancellotti/prediction-market-arbitrage-scanner" }
      },
      {
        title: "Trading Terminal",
        text: "A Bloomberg-style four-panel workspace wired to live public data from both venues: command-line driven with function keys, most-active and biggest-mover screens, news, charts, order book depth, and a local paper-trading blotter that fills simulated orders against the real book. Zero dependencies, no framework, no build step, and it runs fully offline on a recorded snapshot of real API responses.",
        link: { label: "github.com/masonlancellotti/prediction-market-trading-terminal", href: "https://github.com/masonlancellotti/prediction-market-trading-terminal" }
      },
      {
        title: "Weather Contract Pricing Model",
        text: "Prices daily temperature contracts by parsing each market's settlement rules down to the exact National Weather Service station, then running a Gaussian model over forecasts and recent history to produce its own probability for each outcome. Built to refuse rather than guess: unclear rules, an ambiguous station, stale weather data, a thin order book, or insufficient edge all return a skip instead of a signal, and live execution stays disabled behind risk checks and a kill switch. This was the first substantial project I built, and most of what I know about handling real market data started here.",
        link: { label: "github.com/masonlancellotti/weather-contract-pricing-model", href: "https://github.com/masonlancellotti/weather-contract-pricing-model" }
      }
    ] },

  {
    title: "Market Intelligence Agent",
    name: "market-intelligence-agent",
    desc: "Local-first research daemon that produces cited investment briefs and Brier-scores every forecast it makes onto a calibration curve.",
    lang: "Python",
    status: "Complete",
    link: { label: "github.com/masonlancellotti/market-intelligence-agent", href: "https://github.com/masonlancellotti/market-intelligence-agent" },
    longDesc: "A local-first research system that runs continuously and produces structured investment briefs. It ingests equities, crypto, news, SEC filings, macroeconomic data, and prediction markets, computes a composite risk regime across them, and runs an agent pipeline, triage through analysts through red team through fact-checker, that turns the result into cited morning briefs, strategy notes, and hedge ideas. The part that makes it useful is the discipline layer: every forecast is Brier-scored onto a calibration curve, and no trade thesis can be marked live until it passes a ten-item conviction gate and an automated red-team review. It ships with a frozen demo database, so it boots and shows real briefs with no API keys. I built it because research is easy to do inconsistently, and I wanted a standardized process that keeps a running record of how often my own calls are actually right." },

  {
    title: "Resale Price Gap Engine",
    name: "resale-price-gap-engine",
    desc: "Compliance-first resale arbitrage: the full discover, value, underwrite, buy, list, reprice, ship, account loop over an exact double-entry ledger.",
    lang: "TypeScript",
    status: "Complete",
    link: { label: "github.com/masonlancellotti/resale-price-gap-engine", href: "https://github.com/masonlancellotti/resale-price-gap-engine" },
    longDesc: "A secondhand marketplace engine that evaluates listings against recent comparable sales and runs the full transaction workflow behind them, from discovery and valuation through purchasing, listing, repricing, and shipping, with every movement of money recorded in an exact integer-cents double-entry ledger. Every external system it touches, including marketplaces, carriers, and language models, sits behind an interface with a deterministic stand-in, so the entire pipeline runs and is tested offline: 305 tests, no keys, no network, no database. The market for secondhand goods is ripe for mispricing, and flipping done programmatically is effectively a watered-down, ultra-concrete version of financial arbitrage." },

  {
    title: "Real Estate Social Marketing App",
    name: "private / employer-owned",
    desc: "One application that takes a real estate developer from raw walkthrough footage to a scheduled, fact-checked social post.",
    lang: "Py / TS",
    status: "In production",
    longDesc: "A production application built for GROWTH Homes that turns raw property footage into scheduled social media content. It centralizes strategy, content libraries, video production, scheduling, and predictive analytics in one workflow: finding the usable moments in a walkthrough, cutting them, writing copy checked against facts the company has already approved, rendering the video, and handing the finished post to a publishing schedule, with an audit trail on every claim it publishes. Across a pilot batch of seventy-six publication-ready videos it saved an estimated sixty-one hours of manual work. The code is owned by the company, so there is no public repository." },

  {
    title: "Personal Website",
    name: "personal-website",
    desc: "Frontend architecture including modular components and reusable organization systems meant to provide a richer alternative to my resume.",
    lang: "HTML",
    status: "Deployed",
    link: { label: "github.com/masonlancellotti/personal-website", href: "https://github.com/masonlancellotti/personal-website" },
    longDesc: "A modular React-based portfolio website intended to offer a more complete picture of my background and experience, in addition to displaying how I can utilize my skillset in a practical setting to produce a concrete, high-quality deliverable. I used Claude for much of the build process to implement, debug, and refine the frontend while I crafted focused prompts and feedback to ensure the final product reflected my initial vision." }];

const GOAL_REPOS = [];

const POSTS = [
  { date: "June 4, 2026", title: "Beyond AI: the two forces defining the next tech frontier", excerpt: "As AI dominates the current market narrative, investors are eager to identify the next \"golden ticket,\" so to speak. While sectors like nuclear energy and quantum computing are still in their early stages, some speculate they have the potential to explode alongside rising demands for power and advanced computation.", tags: ["Technology"], len: "7 min", href: "/beyond-ai-the-two-forces-defining-the-next-tech-frontier/" },
  { date: "May 28, 2026", title: "The quiet pressure of higher yields", excerpt: "While investors focus on earnings, tariffs, the Fed, and political headlines, many overlook the impact of heightened Treasury yields. Elevated yields may not draw much attention, but they can slowly weigh on valuations and decrease collective risk appetite, leaving the market in a fragile state.", tags: ["Interest rates"], len: "6 min", href: "/the-quiet-pressure-of-higher-yields/" },
  { date: "May 21, 2026", title: "Why you should watch Nvidia earnings even if you don't own the stock",  excerpt: "With tech stocks dominating the market, megacap earnings reports like Nvidia's have the potential to shift sentiment across AI, semiconductors, and broader indexes, creating a ripple effect that reaches far beyond direct stock exposure.", tags: ["Stock market"], len: "5 min", href: "/why-you-should-watch-nvidia-earnings-even-if-you-dont-own-the-stock/" },
];

const INVOLVEMENT = [
  {
    org: "Emory Economics Review",
    role: "Contributor",
    desc: "Emory's undergraduate economics publication. I am part of the organization as an author and write long-form pieces on unique economics topics of my choice, with selected work published in an annual print magazine.",
    article: {
      title: "Peptide Pricing Power: The GLP-1 Duopoly",
      author: "Mason Lancellotti",
      date: "March 7, 2026",
      href: "https://emoryeconomicsreview.org/articles/2026/3/3/peptide-pricing-power-the-glp-1-duopoly"
    },
    fn: 2
  },
  {
    org: "Omicron Delta Epsilon",
    letters: "ΟΔΕ",
    role: "Member",
    desc: "International economics honor society. Merit-based invitation extended to students in the top of their economics class.",
    meta: "Academic distinction",
    since: "Inducted 2025",
    aside: true
  }
];

const FOOTNOTES = [
  { n: 1, text: "I left off a few required first-year courses because they were general education requirements and do not add any meaningful information to the academic background presented in this section." },
  { n: 2, text: "I only included certain extracurricular involvement in this section, focusing on the clubs where I have had the most relevant or impactful experience." }
];

Object.assign(window, { REGISTER, SKILLS, TRANSCRIPT, REPOS, GOAL_REPOS, POSTS, INVOLVEMENT, FOOTNOTES });
