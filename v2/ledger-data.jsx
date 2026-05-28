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
    n: 2, start: "2024-05", end: "2025-08",
    period: "May '24 – Present",
    kind: "Work",
    org: "Life Time Fitness",
    role: "Lifeguard",
    place: "Gainesville, VA",
    coords: "38.79°N, 77.61°W",
    note: "Being a returning seasonal employee for three summers, I have undergone repeated certifications and training. This position has also bolstered my client communication skills.",
    bullets: [
      "Monitored pool activities and proactively enforced safety guidelines to prevent accidents.",
      "Administered first aid on 4 separate occasions, coordinating directly with police and EMS.",
      "Collaborated with management on aquatics events and served 300+ members daily, resolving issues on the deck."
    ],
    stat: { v: "4", sub: "", label: "emergency responses", fn: 5 },
    photo: null,
    link: { href: "https://my.lifetime.life/clubs/va/gainesville/programs/swim.html", label: "Life Time Gainesville" },
    fn: 2,
    future: false,
    duration: "Ongoing"
  },
  {
    n: 3, start: "2024-01", end: null,
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
    n: 4, start: "2025-06", end: "2025-08",
    period: "Jun '25 – Aug '25",
    kind: "Internship",
    org: "RBmedia",
    role: "Marketing Intern",
    place: "Landover, MD",
    coords: "38.93°N, 76.87°W",
    note: "This was my first time in a professional setting with a business context. It opened my eyes to the utility of data and how invaluable of a tool it can be for almost any task, goal, or industry.",
    bullets: [
      "Compiled monthly and quarterly sales reports on 2,500+ Audible and Spotify audiobook titles.",
      "Visualized trends with tables and graphs that guided executive decision-making on future titles.",
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
  }
];

// Skills — pulled directly from resume, in the order listed there
const SKILLS = [
  // Expert
  { skill: "Python",                 level: "Expert",       n: 5, applied: "Linear Algebra, Econometrics, Machine Learning, trading program development" },
  { skill: "Excel",                  level: "Expert",       n: 5, applied: "Accounting, financial modeling, system optimization" },
  { skill: "PowerPoint",             level: "Expert",       n: 5, applied: "Stock pitches, strategy analysis decks, class presentations" },
  { skill: "AI",                     level: "Expert",       n: 5, applied: "RBmedia projects, coding, simple task automation, research, data cleaning" },
  // Advanced
  { skill: "SQL",                    level: "Advanced",     n: 4, applied: "Database Systems, trading program development" },
  { skill: "Statistical modeling",   level: "Advanced",     n: 4, applied: "Econometrics, Intermediate Microeconomics, investment research, trading program development" },
  { skill: "Financial analysis",     level: "Advanced",     n: 4, applied: "Accounting, Corporate Finance, investment research" },
  // Proficient
  { skill: "Tableau",                level: "Proficient",   n: 3, applied: "Process & Systems Management projects, trading program monitoring" },
  { skill: "Java",                   level: "Proficient",   n: 3, applied: "Intro CS, Data Structures and Algorithms" },
  { skill: "Market research",        level: "Proficient",   n: 3, applied: "Emory Economics Review, personal blog writing, Stocks, Bonds, and Financial Markets, personal investing" },
  // Intermediate
  { skill: "Power BI",               level: "Intermediate", n: 2, applied: "Econometrics, trading program development" },
  { skill: "Risk management",        level: "Intermediate", n: 2, applied: "Personal investing, Stocks, Bonds, and Financial Markets, trading program development" },
  { skill: "KPI reporting",          level: "Intermediate", n: 2, applied: "RBmedia ad hoc leadership briefings, Marketing" },
  // Elementary
  { skill: "R",                      level: "Elementary",   n: 1, applied: "Data Science for Economists, Econometrics" },
  { skill: "Predictive forecasting", level: "Elementary",   n: 1, applied: "Process & Systems Management, personal investing" },
  // Languages
  { skill: "Spanish",                level: "Proficient",   n: 3, applied: "Spanish coursework, travel" },
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
  }
];

const REPOS = [
  {
    title: "Prediction Market Trading System",
    name: "prediction-markets-program",
    desc: "Automated prediction market infrastructure for fair value edge identification, orderbook analysis, cross-venue arbitrage evaluation.",
    lang: "Python",
    status: "Development",
    link: { label: "github.com/masonlancellotti/prediction-markets-program", href: "https://github.com/masonlancellotti/prediction-markets-program" },
    longDesc: "A multi-arm trading research system specifically built to trade contracts in prediction markets like Kalshi and Polymarket. It connects live API data, orderbook depth, multiple cross-platform comparisons, paper execution logs, backtesting functionality, and graph-based contract relationships into a single workflow for evaluating whether a profitable opportunity, either through a detected edge, arbitrage opportunity, or liquidity gap, can actually be profitable after fees. I decided to create this program based on the thesis that inefficiencies would be easier to identify and more common in prediction markets, which are much less mature than traditional financial markets and are still dominated by a largely non-institutional trader base." },

  {
    title: "Personal Website",
    name: "personal-website",
    desc: "Frontend architecture including modular components and reusable organization systems meant to provide a richer alternative to my resume.",
    lang: "HTML",
    status: "Deployed",
    link: { label: "github.com/masonlancellotti/personal-website", href: "https://github.com/masonlancellotti/personal-website" },
    longDesc: "A modular React-based portfolio website intended to offer a more complete picture of my background and experience, in addition to displaying how I can utilize my skillset in a practical setting to produce a concrete, high-quality deliverable. I used Claude for much of the build process to implement, debug, and refine the frontend while I crafted focused prompts and feedback to ensure the final product reflected my initial vision." }];

const GOAL_REPOS = [
  { title: "Market Intelligence Agent",           name: "goal-project-01", desc: "Market research system for tracking news, macro data, filings, price movement, and technical signals to produce structured investment briefs, strategy notes, and hedge ideas. Runs continuously on local Mac Mini infrastructure, with important notifications routed to other devices like my phone or laptop.", why: "Technical and fundamental research can be tedious, and it's easy to miss small but important details. Since I find it necessary to build strong conviction before opening a new position in my brokerage account or crypto wallet, I think a program like this would be beneficial in helping to standardize my decision-making process and make me a more disciplined investor.", lang: "—", status: "queued" },
  { title: "Resale Price Gap Engine",             name: "goal-project-03", desc: "Secondhand marketplace scanner that evaluates listings against recent resales, taking into account item condition and price history to identify potentially profitable opportunities and trigger seller outreach or transaction workflows when platform regulations permit.", why: "I like this idea because the market for secondhand goods is ripe for mispricing and inefficiencies. In addition, while flipping has existed for decades, programming can make the process much faster by removing almost all of the manual work and applying a higher standard of analysis to the workflow, greatly increasing potential upside. It intrigues me how this is effectively a watered-down, ultra-concrete version of financial arbitrage.", lang: "—", status: "queued" },
];

const POSTS = [
  { date: "June 4, 2026", title: "Beyond AI: the two forces defining the next tech frontier", excerpt: "As AI dominates the current market narrative, investors are eager to identify the next \"golden ticket,\" so to speak. While sectors like nuclear energy and quantum computing are still in their early stages, some speculate they have the potential to explode alongside rising demands for power and advanced computation.", tags: ["Technology"], len: "— min", upcoming: true },
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



