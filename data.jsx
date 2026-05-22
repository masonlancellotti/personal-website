// Resume data for Mason — rewritten in his voice

const JOURNEY = [
  {
    year: '2022',
    place: 'Haymarket, VA',
    org: 'Mathnasium',
    role: 'Math Instructor',
    dateRange: 'Jun 2022 – Mar 2023',
    note: "first job.",
    summary: "Teaching K-12 math at a tutoring center. A lot of it was just sitting with kids who'd decided they were bad at math and slowly talking them out of it.",
    bullets: [
      "Worked with 30+ students through structured sessions and homework help.",
      "Wrote personalized plans for parents; checked in on progress every few weeks.",
      "Around 90% of my students ended the semester with higher grades."
    ],
    aside: null,
    layout: 'small-left',
    stat: { big: '30+', label: 'students, K–12' },
    showPhoto: false,
  },
  {
    year: '2023',
    place: 'Atlanta, GA',
    org: 'Emory University',
    role: "BA · Economics & CS · Minor in Business",
    dateRange: 'Aug 2023 – May 2027',
    note: "moved down south.",
    summary: "Double major, plus the business minor because I kept taking those classes anyway. Staying an extra year for the MS in Economics through the 4+1 program.",
    bullets: [
      "GPA: 3.99",
      "Dean's List — three times.",
      "Omicron Delta Epsilon (econ honor society).",
      "Active in Econ Review, Econ Investment Forum, and CS Club."
    ],
    aside: "the 4+1 means I graduate with a master's in 2028.",
    layout: 'wide-right',
    stat: { big: '3.99', label: 'cumulative GPA' },
    showPhoto: true,
    placeholder: "Emory quad — drop photo here",
  },
  {
    year: '2024',
    place: 'Gainesville, VA',
    org: 'Life Time Fitness',
    role: 'Lifeguard',
    dateRange: 'May 2024 – Aug 2025',
    note: "back home for the summers.",
    summary: "Sat on the stand. Pulled four people out over two summers. Not glamorous but you learn fast when something actually happens.",
    bullets: [
      "Administered first aid on 4 separate occasions; coordinated directly with police / EMS.",
      "~300 members a day. You learn how to talk to everybody.",
      "Helped run aquatics events with management and other departments."
    ],
    aside: "(4 incidents across two summers. I remember every one.)",
    layout: 'small-right',
    stat: null,
    showPhoto: false,
  },
  {
    year: '2024',
    place: 'Atlanta, GA',
    org: 'Emory Club Swimming',
    role: 'Head Captain',
    dateRange: 'Jan 2024 – Present',
    note: "ongoing.",
    summary: "I write the practices, I run the board, I book the buses. The team is 10–20 swimmers with every skill level from rec to D1-lite — the hard part is designing sets that work for both on the same deck.",
    bullets: [
      "4 practices a week — technique for newer swimmers, endurance for the veterans.",
      "6 out-of-state meets a year: itineraries, lodging, transport, budget.",
      "Work with other board members and the club sports office on logistics."
    ],
    aside: null,
    layout: 'wide-left',
    stat: { big: '6', label: 'out-of-state meets / year' },
    showPhoto: true,
    placeholder: "team photo — pool deck",
  },
  {
    year: '2025',
    place: 'Landover, MD',
    org: 'RBmedia',
    role: 'Marketing Intern',
    dateRange: 'Jun 2025 – Aug 2025',
    note: "summer '25.",
    summary: "First time doing data work in a real business context. Pulled monthly and quarterly sales reports for ~2,500 audiobook titles across Audible and Spotify, then figured out how to actually say something useful about them.",
    bullets: [
      "Built reports + visualizations that fed into executive decisions on future titles.",
      "Helped roll out an automated posting workflow across 12 social accounts.",
      "Manually supervised ~1,800 uploads — caught and fixed issues as they surfaced."
    ],
    aside: "Excel + Python + a lot of pivot tables.",
    layout: 'wide-right',
    stat: { big: '2,500', label: 'titles tracked' },
    showPhoto: true,
    placeholder: "dashboard screenshot — coming",
  },
  {
    year: '2025',
    place: 'Atlanta, GA',
    org: 'Emory Economics Dept.',
    role: 'Student Tutor',
    dateRange: 'Sep 2025 – Present',
    note: "current.",
    summary: "Picked as one of 60 out of roughly 800 applicants. Micro, macro, data science, intro CS. Three to five sessions a week, mostly prepping people for midterms and problem sets.",
    bullets: [
      "Build review guides off the syllabus; timeline them backward from exams.",
      "Three to five sessions a week, content mastery + test strategy.",
      "Loop in the professor or TA when I'm not sure about a solution path."
    ],
    aside: "60 / ~800.",
    layout: 'small-left',
    stat: null,
    showPhoto: false,
  },
  {
    year: '2028',
    place: 'Atlanta, GA',
    org: 'Emory — MS Economics',
    role: "Graduate · 4+1 Program",
    dateRange: 'Expected May 2028',
    note: "the one that's still ahead.",
    summary: "Graduate coursework — econometrics, applied micro, advanced modeling. Still figuring out the thesis topic but it'll probably sit somewhere between data and policy.",
    bullets: [
      "Econometrics + applied microeconomics.",
      "Continuing CS electives on the side.",
      "Looking for summer '27 internships — quant / data / research."
    ],
    aside: "(open to talk about this one.)",
    layout: 'wide-left',
    stat: null,
    showPhoto: false,
    future: true,
  },
];

const REPO_PLACEHOLDERS = [
  { name: "project-one", desc: "Description coming soon.", lang: "Python", stars: 0, status: "empty" },
  { name: "project-two", desc: "Description coming soon.", lang: "JavaScript", stars: 0, status: "empty" },
  { name: "project-three", desc: "Description coming soon.", lang: "Java", stars: 0, status: "empty" },
  { name: "project-four", desc: "Description coming soon.", lang: "SQL", stars: 0, status: "empty" },
];

const BLOG_PLACEHOLDERS = [
  { date: "TBD", title: "First post — title goes here", excerpt: "A short excerpt of what this post is about. Once I've written it, the full essay will live here.", tags: ["markets"], read: "— min" },
  { date: "TBD", title: "Second post — draft title", excerpt: "Another placeholder. Markets commentary, a thesis, something worth returning to later to see if I was right.", tags: ["analysis"], read: "— min" },
  { date: "TBD", title: "Third post — working title", excerpt: "Placeholder. Longer-form piece — maybe a deep dive on a single company, a sector, or an idea I've been chewing on.", tags: ["deep-dive"], read: "— min" },
];

Object.assign(window, { JOURNEY, REPO_PLACEHOLDERS, BLOG_PLACEHOLDERS });
