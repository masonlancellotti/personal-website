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
    desc: "Four programs for identifying and evaluating inefficiencies across Kalshi and Polymarket, spanning strategy backtesting, cross-venue arbitrage detection, live market visualization, weather contract pricing.",
    lang: "Py / TS / JS",
    status: "Research",
    longDesc: "Prediction markets have been the subject of my fascination for multiple years at this point, since they include such a wide, near-ridiculous array of subjects and events that you can “invest” in. It seemed logical to me that since these markets are still new (compared to other, more established financial markets) and attract an abundance of uninformed retail traders, their potential to contain inefficiencies would be high.",
    subs: [
      {
        title: "Crypto Contract Backtesting System",
        text: "This project involved short-term crypto contracts on Kalshi, featuring leakage-safe data handling, purged cross-validation, probability calibration, fee-aware backtesting, and multiple checks against a sealed holdout. 38 strategies, all generated from a data mining-based discovery engine, can be tested, which I did across millions of real trades and just shy of 700 iterations. Small edges were found here and there, but most were unreliable or consumed by fees. In the end, I discovered that the market is indeed efficient. I would like to use this program on other exchanges in the future.",
        link: { label: "github.com/masonlancellotti/crypto-contract-backtesting-system", href: "https://github.com/masonlancellotti/crypto-contract-backtesting-system" }
      },
      {
        title: "Arbitrage Scanner",
        text: "This idea is what originally made me interested in prediction markets; since there are so many venues, there must be price differences between them for the same contracts, even if only for a few seconds. In this project, I graph-based relationship detection and caching, fee-specific edge math, and a layered verification stack with LLMs classifying how two markets or contracts relate, with hard-coded validators preventing them from being overwhelmed or wasting tokens. On a live run, the program passed over 150,000 contracts and 300,000 quotes, identifying 800 pairs and rejecting all of them due to rule mismatches or incomplete outcome sets. In the future, I would like to expand the number of venues this program supports, as well as improve its process and cost so that it can run continuously and more efficiently/accurately identify and potentially autonomously profit off of arbitrage opportunities.",
        link: { label: "github.com/masonlancellotti/prediction-market-arbitrage-scanner", href: "https://github.com/masonlancellotti/prediction-market-arbitrage-scanner" }
      },
      {
        title: "Trading Terminal",
        text: "A Bloomberg-style four-panel desktop app wired to live public data from both Kalshi and Polymarket. The interface includes function keys, full keyboard navigation, most-active and biggest-mover screens, news, charts, order book depth, live latency and connection health indicators, a scrolling ticker tape, world clocks, a watchlist, and a local paper-trading environment that fills simulated orders against the real book. One challenge I was proud of tackling in this project is how Kalshi and Polymarket return data in completely different ways; on the backend, all data is converted into one common format, so contracts from both exchanges can sit side by side in the same list and be compared directly.",
        link: { label: "github.com/masonlancellotti/prediction-market-trading-terminal", href: "https://github.com/masonlancellotti/prediction-market-trading-terminal" }
      },
      {
        title: "Weather Contract Pricing Model",
        text: "This project involved daily high-temperature contracts on Kalshi and Polymarket. It reads contract fine print to determine the exact weather station or sensor a market will settle on and then calculates a machine learning-based fair-value price based on that station's NWS data, building a baseline from recent daily highs, blending in the current forecast, and using historical forecast error to set the spread of the distribution. Because many of these contracts settle on a range rather than a single temperature, it integrates that distribution across each bucket to yield a probability per outcome, which it then conveniently compares against the order book (with prices spanning from zero to one and summing to one, exactly like a probability) to determine edge after fees. In the future, I would like to improve/expand this program’s pricing methodology, as well as create a more concrete, automated trading mechanism.",
        link: { label: "github.com/masonlancellotti/weather-contract-pricing-model", href: "https://github.com/masonlancellotti/weather-contract-pricing-model" }
      }
    ] },

  {
    title: "Market Intelligence Agent",
    name: "market-intelligence-agent",
    desc: "Continuously running research infrastructure for scheduled and on-demand investment briefs, adversarial review, forecast calibration tracking.",
    lang: "Python",
    status: "Complete",
    link: { label: "github.com/masonlancellotti/market-intelligence-agent", href: "https://github.com/masonlancellotti/market-intelligence-agent" },
    longDesc: "A local research system that runs continuously and produces scheduled market briefs as well as ad-hoc investment briefs. It ingests equities, crypto, news, SEC filings, macroeconomic data, and prediction markets, computing a composite risk regime across them, and running an agent pipeline, including data volume filtration, analysts, adversarial review, a dedicated material composition stage, and a fact-checker. This process yields cited morning digests, strategy notes, and hedge ideas. My primary focus here was building a sophisticated challenge stage, since AI is still very susceptible to hallucinating and/or acting as a yes-man." },

  {
    title: "Resale Price Gap Engine",
    name: "resale-price-gap-engine",
    desc: "Automated secondhand marketplace arbitrage covering opportunity identification, seller negotiation, purchasing, listing, fulfillment.",
    lang: "TypeScript",
    status: "Complete",
    link: { label: "github.com/masonlancellotti/resale-price-gap-engine", href: "https://github.com/masonlancellotti/resale-price-gap-engine" },
    longDesc: "Evaluates listings on secondhand markets against recent comparable sales and handles the full transaction workflow if a listing is identified as likely to be profitable. From discovery and valuation through communicating with sellers, purchasing, listing, repricing, and shipping, every action is recorded, and the level of automation is highly customizable by user. The program is also self-training, following the listings it declined through to their eventual sale, scoring valuation error and confidence to tune the opportunity identification system over time." },

  {
    title: "Real Estate Social Marketing App",
    name: "private / employer-owned",
    desc: "End-to-end social media marketing software for real estate development, spanning strategy, content production, scheduling, performance analytics.",
    lang: "Py / TS",
    status: "In production",
    longDesc: "A custom application built for GROWTH Homes that includes the end-to-end path for turning raw property footage into scheduled social media content. It was made with real estate development in mind but could also be generalized for use in any subset of the real estate industry. The app is highly AI driven, with a multitude of APIs making it a one-stop shop for strategy, video storage, content production, post scheduling, and analytics. It also features company- and competitor-based web and social scraping, a notebook that natively integrates into video creation workflows and strategy development, an AI “consultant” trained on 40+ pages of highly specific industry context and reference files, cloud-based media storage, and functional team-based features. Across a pilot batch of seventy-six publication-ready videos it saved an estimated sixty-one hours of manual work. There is no public repository for this project, as it belongs to my employer. Here, you can view screenshots of the software, as well as a few videos and posts it produced, all of which took only a few minutes to create from start to finish. I plan to continue working on this project seriously, making improvements and eventually adding new features." },

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
