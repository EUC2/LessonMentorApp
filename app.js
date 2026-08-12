const styles = {
  V: { name: "Visual", color: "#2563eb", className: "visual", description: "Learns best when ideas are shown through images, charts, models, color, or spatial examples." },
  A: { name: "Auditory", color: "#16855b", className: "auditory", description: "Learns best through listening, discussion, verbal explanation, read-alouds, or teacher modeling with talk." },
  R: { name: "Reading/Writing", color: "#c57919", className: "readwrite", description: "Learns best through written directions, note-taking, lists, sentence frames, reading, and written reflection." },
  K: { name: "Kinesthetic", color: "#c24158", className: "kinesthetic", description: "Learns best through movement, hands-on practice, role play, building, sorting, or manipulating materials." },
  I: { name: "Independent Learner", color: "#7c3aed", className: "independent", description: "Learns best with quiet thinking time, clear goals, self-paced practice, and individual reflection." },
  S: { name: "Social Learner", color: "#0f8f8a", className: "social", description: "Learns best through partner talk, groups, peer coaching, collaboration, and shared problem-solving." }
};

const systems = [
  { id: "cer", label: "CER" },
  { id: "kagan", label: "Kagan" },
  { id: "pbl", label: "PBL" },
  { id: "siop", label: "SIOP" }
];

const systemLabels = {
  cer: "CER",
  iep: "IEP Supports",
  kagan: "Kagan",
  pbl: "PBL",
  siop: "SIOP"
};

const accountProfile = {
  educatorName: "Jennifer Touati",
  organizationName: "Education Under Construction LLC",
  teachingState: "BASE"
};

const copyrightNotice = "© 2026 Lesson Mentor | Education Under Construction LLC. Signature lesson plan template format protected. Do not remove.";

const standardsConfig = {
  baseLabel: "Base Standards",
  statePackages: {
    BASE: { label: "Base: CCSS/NGSS", loaded: true },
    TX: { label: "Texas State Standards", loaded: false },
    MA: { label: "Massachusetts State Standards", loaded: false }
  },
  baseFrameworkBySubject: {
    ela: "CCSS",
    math: "CCSS",
    science: "NGSS",
    "social-studies": "CCSS Literacy",
    art: "National Arts",
    language: "ACTFL",
    "library-makerspace": "AASL",
    music: "National Arts",
    pe: "SHAPE",
    stem: "NGSS/CCSS"
  }
};

const styleOrder = ["A", "I", "K", "R", "S", "V"];

const iepSupports = [
  {
    id: "sentence-frames",
    label: "Sentence frames",
    description: "Ready-to-use writing and speaking frames.",
    insert: "Before the written response, give students two frame choices: \"My idea is ___ because ___\" or \"The source detail shows ___, so I think ___.\""
  },
  {
    id: "chunked-directions",
    label: "Chunked directions",
    description: "Short steps with checkpoints.",
    insert: "Post three steps before station work: 1. Observe the tray. 2. Record one change. 3. Choose the strongest evidence."
  },
  {
    id: "movement-break",
    label: "Movement or regulation break",
    description: "Timed break placed inside the lesson flow.",
    insert: "After the second station rotation, pause for a 90-second reset: stand, stretch, breathe, then point to the next station card."
  },
  {
    id: "teacher-checkin",
    label: "Teacher check-in",
    description: "Intentional checkpoint before independent work.",
    insert: "Before students begin the exit ticket, check in with selected students: \"Show me your evidence first. Which sentence frame will you use?\""
  },
  {
    id: "graphic-organizer",
    label: "Graphic organizer",
    description: "Attach an organizer from the Lesson Mentor library.",
    insert: "Attach the Claim-Evidence-Reasoning organizer and model one row before students work independently."
  },
  {
    id: "read-aloud",
    label: "Read-aloud support",
    description: "Read key prompts and question choices aloud.",
    insert: "Read the station prompt and answer options aloud before students select evidence."
  }
];

const templateLibrary = [
  { title: "Claim-Evidence-Reasoning organizer", subject: "science", grades: ["g35", "g68"], fit: ["R", "V"] },
  { title: "Vocabulary picture-card mat", subject: "science", grades: ["k2", "g35"], fit: ["V", "K"] },
  { title: "Station evidence tracker", subject: "science", grades: ["g35", "g68"], fit: ["K", "R"] }
];

const protectedAssetLibrary = [
  "Lesson Plan Template.doc",
  "Teaching & Learning Moves Matrix template code",
  "3 Circle Venn Diagram.pdf",
  "Alphabet Grid.pdf",
  "Beginning Middle End.png",
  "Blank 3 Details Pointing to Main Idea.pdf",
  "Blank 4 Details Pointing to Main Idea.pdf",
  "Blank 4-Column Topic Grid.pdf",
  "Blank Grid.pdf",
  "Cause Effect 1.png",
  "Cause Effect 2.png",
  "Character 1.png",
  "Character 2.png",
  "Character Setting Plot.pdf",
  "Chapter Notes.pdf",
  "Compare and Contrast.png",
  "Document Analysis.pdf",
  "Drawing Conclusions.pdf",
  "Essay Map.pdf",
  "Event Details.pdf",
  "Evidence of Theme.pdf",
  "Fact-Opinion.png",
  "KWL.png",
  "KWLW.png",
  "Main Idea-Detail.png",
  "Making Generalizations.pdf",
  "Making Predictions.png",
  "Plot Story Map.pdf",
  "Problem Solution Organizer.pdf",
  "Pro-Con.png",
  "Reading Organizer.pdf",
  "Sequence Events 1.png",
  "Sequence Events 2.png",
  "Story Elements.png",
  "Summarize.png",
  "Timeline.pdf",
  "What I learned today.pdf",
  "Word Meaning 1.png",
  "Word Meaning 2.png",
  "Word Web.pdf",
  "Writing Organizer.pdf",
  "Writing Shape set"
];

const standardsLibrary = [
  {
    id: "4-ESS2-1",
    framework: "NGSS",
    grade: "4",
    subject: "science",
    keywords: ["erosion", "weathering", "landforms", "water", "earth", "soil"],
    text: "Make observations and/or measurements to provide evidence of the effects of weathering or the rate of erosion by water, ice, wind, or vegetation."
  },
  {
    id: "4-ESS1-1",
    framework: "NGSS",
    grade: "4",
    subject: "science",
    keywords: ["landforms", "rocks", "fossils", "patterns", "earth"],
    text: "Identify evidence from patterns in rock formations and fossils in rock layers to support an explanation for changes in a landscape over time."
  },
  {
    id: "3-LS4-3",
    framework: "NGSS",
    grade: "3",
    subject: "science",
    keywords: ["habitat", "environment", "survive", "adapt", "ecosystem"],
    text: "Construct an argument with evidence that in a particular habitat some organisms can survive well, some survive less well, and some cannot survive at all."
  },
  {
    id: "5-PS1-3",
    framework: "NGSS",
    grade: "5",
    subject: "science",
    keywords: ["matter", "materials", "properties", "observe", "measure"],
    text: "Make observations and measurements to identify materials based on their properties."
  },
  {
    id: "CCSS.ELA-LITERACY.RI.4.1",
    framework: "Common Core",
    grade: "4",
    subject: "ela",
    keywords: ["evidence", "text", "infer", "details", "explain"],
    text: "Refer to details and examples in a text when explaining what the text says explicitly and when drawing inferences from the text."
  },
  {
    id: "CCSS.ELA-LITERACY.W.4.2",
    framework: "Common Core",
    grade: "4",
    subject: "ela",
    keywords: ["explain", "informative", "write", "evidence", "topic"],
    text: "Write informative/explanatory texts to examine a topic and convey ideas and information clearly."
  },
  {
    id: "CCSS.ELA-LITERACY.SL.4.1",
    framework: "Common Core",
    grade: "4",
    subject: "ela",
    keywords: ["discussion", "partner", "talk", "collaborative", "conversation"],
    text: "Engage effectively in a range of collaborative discussions with diverse partners."
  },
  {
    id: "CCSS.MATH.CONTENT.4.MD.A.3",
    framework: "Common Core",
    grade: "4",
    subject: "math",
    keywords: ["area", "perimeter", "formula", "rectangle", "measurement"],
    text: "Apply the area and perimeter formulas for rectangles in real-world and mathematical problems."
  },
  {
    id: "CCSS.ELA-LITERACY.RI.5.1",
    framework: "Common Core",
    grade: "5",
    subject: "social-studies",
    keywords: ["historical", "figure", "research", "evidence", "source", "details", "quote", "text"],
    text: "Quote accurately from a text when explaining what the text says explicitly and when drawing inferences from the text."
  },
  {
    id: "CCSS.ELA-LITERACY.W.5.7",
    framework: "Common Core",
    grade: "5",
    subject: "social-studies",
    keywords: ["historical", "figure", "research", "project", "sources", "question", "investigate"],
    text: "Conduct short research projects that use several sources to build knowledge through investigation of different aspects of a topic."
  },
  {
    id: "CCSS.ELA-LITERACY.W.5.8",
    framework: "Common Core",
    grade: "5",
    subject: "social-studies",
    keywords: ["notes", "sources", "evidence", "paraphrase", "bibliography", "research"],
    text: "Recall relevant information from experiences or gather relevant information from print and digital sources; summarize or paraphrase information in notes and finished work."
  },
  {
    id: "SHAPE.MS.1",
    framework: "SHAPE America",
    grade: "6",
    subject: "pe",
    keywords: ["soccer", "kick", "kicking", "ball", "pass", "control", "dribble", "movement"],
    text: "Demonstrate competency in motor skills and movement patterns needed to perform a variety of physical activities."
  },
  {
    id: "SHAPE.MS.2",
    framework: "SHAPE America",
    grade: "6",
    subject: "pe",
    keywords: ["soccer", "strategy", "space", "target", "plant foot", "follow-through", "practice"],
    text: "Apply knowledge of concepts, principles, strategies, and tactics related to movement and performance."
  },
  {
    id: "CCSS.ELA-LITERACY.RH.6-8.1",
    framework: "Common Core",
    grade: "6",
    subject: "social-studies",
    keywords: ["historical", "figure", "research", "evidence", "source", "primary", "secondary"],
    text: "Cite specific textual evidence to support analysis of primary and secondary sources."
  },
  {
    id: "CCSS.ELA-LITERACY.WHST.6-8.7",
    framework: "Common Core",
    grade: "6",
    subject: "social-studies",
    keywords: ["historical", "figure", "research", "project", "sources", "question"],
    text: "Conduct short research projects to answer a question, drawing on several sources and generating additional related questions."
  }
];

const classProfiles = {
  "1": {
    name: "Period 1",
    profile: { V: 27, A: 14, I: 11, K: 25, R: 12, S: 11 },
    roster: [
      { id: "48291", grade: "4", primary: "V", secondary: "K", lastAssessment: "Jun 12, 2026", completed: "8/12" },
      { id: "51804", grade: "4", primary: "K", secondary: "V", lastAssessment: "Jun 11, 2026", completed: "12/12" },
      { id: "60418", grade: "4", primary: "A", secondary: "R", lastAssessment: "Jun 10, 2026", completed: "12/12" },
      { id: "77120", grade: "4", primary: "V", secondary: "A", lastAssessment: "Jun 7, 2026", completed: "10/12" },
      { id: "83914", grade: "4", primary: "K", secondary: "R", lastAssessment: "Jun 6, 2026", completed: "12/12" }
    ]
  },
  "2": {
    name: "Period 2",
    profile: { V: 17, A: 25, I: 11, K: 14, R: 22, S: 11 },
    roster: [
      { id: "29310", grade: "5", primary: "A", secondary: "R", lastAssessment: "Jun 9, 2026", completed: "12/12" },
      { id: "41022", grade: "5", primary: "R", secondary: "A", lastAssessment: "Jun 9, 2026", completed: "11/12" },
      { id: "61087", grade: "5", primary: "A", secondary: "S", lastAssessment: "Jun 8, 2026", completed: "12/12" },
      { id: "75922", grade: "5", primary: "R", secondary: "K", lastAssessment: "Jun 8, 2026", completed: "9/12" }
    ]
  },
  "3": {
    name: "Period 3",
    profile: { V: 21, A: 15, I: 10, K: 28, R: 16, S: 10 },
    roster: [
      { id: "10294", grade: "3", primary: "K", secondary: "V", lastAssessment: "Jun 5, 2026", completed: "12/12" },
      { id: "34710", grade: "3", primary: "V", secondary: "K", lastAssessment: "Jun 5, 2026", completed: "12/12" },
      { id: "50218", grade: "3", primary: "K", secondary: "A", lastAssessment: "Jun 4, 2026", completed: "10/12" },
      { id: "65044", grade: "3", primary: "R", secondary: "V", lastAssessment: "Jun 4, 2026", completed: "12/12" }
    ]
  },
  "4": {
    name: "Period 4",
    profile: { V: 16, A: 16, I: 10, K: 20, R: 28, S: 10 },
    roster: [
      { id: "22904", grade: "4", primary: "R", secondary: "K", lastAssessment: "Jun 3, 2026", completed: "12/12" },
      { id: "33018", grade: "4", primary: "K", secondary: "R", lastAssessment: "Jun 3, 2026", completed: "12/12" },
      { id: "44921", grade: "4", primary: "V", secondary: "A", lastAssessment: "Jun 2, 2026", completed: "9/12" }
    ]
  },
  "5": {
    name: "Period 5",
    profile: { V: 30, A: 13, I: 10, K: 22, R: 14, S: 11 },
    roster: [
      { id: "51882", grade: "4", primary: "V", secondary: "K", lastAssessment: "Jun 1, 2026", completed: "12/12" },
      { id: "62810", grade: "4", primary: "V", secondary: "R", lastAssessment: "May 31, 2026", completed: "12/12" },
      { id: "73940", grade: "4", primary: "K", secondary: "V", lastAssessment: "May 30, 2026", completed: "11/12" }
    ]
  },
  "6": {
    name: "Period 6",
    profile: { V: 17, A: 17, I: 16, K: 17, R: 16, S: 17 },
    roster: []
  },
  "7": {
    name: "Period 7",
    profile: { V: 22, A: 19, I: 10, K: 14, R: 25, S: 10 },
    roster: [
      { id: "70014", grade: "5", primary: "R", secondary: "V", lastAssessment: "May 29, 2026", completed: "12/12" },
      { id: "70032", grade: "5", primary: "A", secondary: "R", lastAssessment: "May 29, 2026", completed: "12/12" }
    ]
  },
  "8": {
    name: "Period 8",
    profile: { V: 24, A: 18, I: 10, K: 24, R: 14, S: 10 },
    roster: [
      { id: "81005", grade: "4", primary: "K", secondary: "V", lastAssessment: "May 27, 2026", completed: "10/12" },
      { id: "81016", grade: "4", primary: "V", secondary: "K", lastAssessment: "May 27, 2026", completed: "12/12" }
    ]
  },
  "9": {
    name: "Period 9",
    profile: { V: 15, A: 22, I: 11, K: 12, R: 30, S: 10 },
    roster: [
      { id: "92044", grade: "5", primary: "R", secondary: "A", lastAssessment: "May 25, 2026", completed: "12/12" },
      { id: "92070", grade: "5", primary: "R", secondary: "V", lastAssessment: "May 25, 2026", completed: "12/12" }
    ]
  },
  "10": {
    name: "Period 10",
    profile: { V: 26, A: 18, I: 11, K: 19, R: 16, S: 10 },
    roster: [
      { id: "10411", grade: "4", primary: "V", secondary: "A", lastAssessment: "May 22, 2026", completed: "12/12" },
      { id: "10429", grade: "4", primary: "K", secondary: "V", lastAssessment: "May 22, 2026", completed: "11/12" }
    ]
  }
};

const classAccessCodes = {
  "1": { code: "LM-P1-SCI", gradeBand: "g35", grade: "4", subject: "science", supports: ["sentence-frames", "chunked-directions", "movement-break", "teacher-checkin", "graphic-organizer"] },
  "2": { code: "LM-P2-ELA", gradeBand: "g35", grade: "5", subject: "ela", supports: ["sentence-frames", "chunked-directions", "teacher-checkin", "graphic-organizer", "read-aloud"] },
  "3": { code: "LM-P3-SCI", gradeBand: "g35", grade: "3", subject: "science", supports: ["chunked-directions", "movement-break", "teacher-checkin", "graphic-organizer"] },
  "4": { code: "LM-P4-MATH", gradeBand: "g35", grade: "4", subject: "math", supports: ["chunked-directions", "movement-break", "teacher-checkin"] },
  "5": { code: "LM-P5-SCI", gradeBand: "g35", grade: "4", subject: "science", supports: ["sentence-frames", "teacher-checkin", "graphic-organizer"] },
  "6": { code: "LM-P6-PLAN", gradeBand: "g35", grade: "4", subject: "stem", supports: [] },
  "7": { code: "LM-P7-SS", gradeBand: "g35", grade: "5", subject: "social-studies", supports: ["sentence-frames", "chunked-directions", "teacher-checkin", "graphic-organizer", "read-aloud"] },
  "8": { code: "LM-P8-ENR", gradeBand: "g35", grade: "4", subject: "stem", supports: ["movement-break", "graphic-organizer"] },
  "9": { code: "LM-P9-READ", gradeBand: "g35", grade: "5", subject: "ela", supports: ["sentence-frames", "chunked-directions", "teacher-checkin", "read-aloud"] },
  "10": { code: "LM-P10-HR", gradeBand: "g35", grade: "4", subject: "social-studies", supports: ["sentence-frames", "teacher-checkin"] }
};

// Full build: replace this demo flag with the teacher launch lookup from Supabase.
// Example future check: const studentAssessmentDemoOpen = activeAssessmentLaunch?.status === "open";
const studentAssessmentDemoOpen = true;

const strategyLibrary = [
  {
    system: "kagan",
    title: "RallyCoach",
    modalities: ["A", "K", "S"],
    keywords: ["partner", "practice", "math", "coach"],
    description: "Pairs take turns solving or explaining while the partner coaches with prompts and feedback."
  },
  {
    system: "kagan",
    title: "Quiz-Quiz-Trade",
    modalities: ["A", "K", "R", "S"],
    keywords: ["vocabulary", "review", "cards", "question"],
    description: "Students circulate with prompt cards, answer, coach each other, then trade cards for repeated practice."
  },
  {
    system: "kagan",
    title: "Timed Pair Share",
    modalities: ["A", "S"],
    keywords: ["discuss", "partner", "explain", "talk"],
    description: "Students explain thinking to a partner in equal timed turns before whole-class sharing."
  },
  {
    system: "siop",
    title: "Content and Language Objectives",
    modalities: ["V", "R"],
    keywords: ["objective", "vocabulary", "language", "lesson"],
    description: "Post and revisit the content goal and the language students will use to show understanding."
  },
  {
    system: "siop",
    title: "Comprehensible Input",
    modalities: ["V", "A", "K"],
    keywords: ["model", "visual", "photograph", "demonstration"],
    description: "Use modeling, visuals, gestures, and clear pacing so academic content is accessible."
  },
  {
    system: "siop",
    title: "Practice and Application",
    modalities: ["K", "A", "R"],
    keywords: ["station", "hands-on", "notebook", "practice"],
    description: "Give students structured chances to use reading, writing, listening, speaking, and hands-on practice together."
  },
  {
    system: "cer",
    title: "Claim Evidence Reasoning Frame",
    modalities: ["R", "V"],
    keywords: ["claim", "evidence", "reasoning", "explain", "data"],
    description: "Students answer with a claim, support it with data or observations, and connect the evidence with reasoning."
  },
  {
    system: "cer",
    title: "Evidence Sort",
    modalities: ["V", "K", "R", "S"],
    keywords: ["evidence", "data", "sort", "observe"],
    description: "Students sort observations into useful evidence, weak evidence, and unrelated details before writing."
  },
  {
    system: "pbl",
    title: "Driving Question Launch",
    modalities: ["A", "I", "S", "V"],
    keywords: ["project", "question", "problem", "design", "investigate"],
    description: "Students begin with a meaningful question or problem that gives the lesson a clear purpose for inquiry."
  },
  {
    system: "pbl",
    title: "Product With Audience",
    modalities: ["K", "R", "S", "V"],
    keywords: ["project", "create", "present", "audience", "share"],
    description: "Students create a product, explanation, model, or presentation for a defined audience beyond just completing the worksheet."
  },
  {
    system: "iep",
    title: "Chunked Directions",
    modalities: ["V", "R"],
    keywords: ["directions", "steps", "station", "task"],
    description: "Break tasks into short visible steps with one clear checkpoint before students move on."
  },
  {
    system: "iep",
    title: "Sentence Frames",
    modalities: ["R", "A"],
    keywords: ["sentence", "frame", "writing", "explain"],
    description: "Provide partial language frames so students can focus on reasoning without losing the structure of the response."
  },
  {
    system: "iep",
    title: "Reduced-Distraction Choice",
    modalities: ["I", "K", "R"],
    keywords: ["exit ticket", "assessment", "independent"],
    description: "Offer a quieter or simplified response format for students who need less visual or social load."
  }
];

const strategyDetails = {
  RallyCoach: { grades: ["g35", "g68"], subjects: ["math", "science"], use: "Best when students need guided practice with immediate peer feedback.", avoid: "Avoid when students have not seen a model yet." },
  "Quiz-Quiz-Trade": { grades: ["g35", "g68", "g912"], subjects: ["ela", "science", "social-studies"], use: "Best for vocabulary, review, and repeated retrieval practice.", avoid: "Avoid for brand-new content students cannot answer yet." },
  "Timed Pair Share": { grades: ["k2", "g35", "g68", "g912"], subjects: ["math", "ela", "science", "social-studies"], use: "Best when students need oral rehearsal before writing or whole-class sharing.", avoid: "Avoid when the task requires quiet independent processing first." },
  "Content and Language Objectives": { grades: ["k2", "g35", "g68", "g912"], subjects: ["math", "ela", "science", "social-studies"], use: "Best for lessons with new academic vocabulary or multilingual learner supports.", avoid: "Avoid treating it as a wall decoration; it needs to be revisited." },
  "Comprehensible Input": { grades: ["k2", "g35", "g68"], subjects: ["math", "science", "social-studies"], use: "Best when students need modeling, visuals, or demonstration before practice.", avoid: "Avoid overexplaining after students are ready to try the task." },
  "Practice and Application": { grades: ["k2", "g35", "g68"], subjects: ["math", "science"], use: "Best when students can apply the concept with hands-on or language-integrated practice.", avoid: "Avoid when the lesson only has enough time for direct instruction." },
  "Claim Evidence Reasoning Frame": { grades: ["g35", "g68", "g912"], subjects: ["science", "ela", "social-studies"], use: "Best when students must explain a conclusion with evidence.", avoid: "Avoid when there is no evidence source for students to use." },
  "Evidence Sort": { grades: ["g35", "g68", "g912"], subjects: ["science", "social-studies", "ela"], use: "Best before writing, when students need to choose which details truly support a claim.", avoid: "Avoid when the teacher already gave students the exact evidence to use." },
  "Driving Question Launch": { grades: ["g35", "g68", "g912"], subjects: ["science", "social-studies", "ela", "stem"], use: "Best when the lesson can be framed around a meaningful question, problem, or investigation.", avoid: "Avoid when the objective is a short skill check with no room for inquiry." },
  "Product With Audience": { grades: ["g35", "g68", "g912"], subjects: ["science", "social-studies", "ela", "stem", "art"], use: "Best when students can show learning through a product, model, explanation, or presentation.", avoid: "Avoid when the product would take over the learning goal instead of supporting it." },
  "Chunked Directions": { grades: ["k2", "g35", "g68", "g912"], subjects: ["math", "ela", "science", "social-studies"], use: "Best for multi-step tasks, stations, projects, and independent work.", avoid: "Avoid making too many micro-steps that slow fluent students down." },
  "Sentence Frames": { grades: ["k2", "g35", "g68", "g912"], subjects: ["ela", "science", "social-studies"], use: "Best when the thinking is strong but language structure is a barrier.", avoid: "Avoid requiring every student to use the same frame if they can write independently." },
  "Reduced-Distraction Choice": { grades: ["k2", "g35", "g68", "g912"], subjects: ["math", "ela", "science", "social-studies"], use: "Best for assessment moments, written response, or tasks with heavy sensory load.", avoid: "Avoid separating students in a way that feels punitive or public." }
};

strategyLibrary.forEach(strategy => Object.assign(strategy, strategyDetails[strategy.title]));

const questionBank = {
  k2: [
    { text: "How do you want to learn about a butterfly?", options: [{ m: "V", t: "Look at pictures" }, { m: "K", t: "Act out the life cycle" }] },
    { text: "How do you want to remember a new word?", options: [{ m: "A", t: "Say it out loud" }, { m: "R", t: "Trace or write it" }] },
    { text: "How do you want to learn a pattern?", options: [{ m: "V", t: "See the shapes" }, { m: "A", t: "Clap the rhythm" }] },
    { text: "How do you want to learn about weather?", options: [{ m: "K", t: "Use tools and move pieces" }, { m: "R", t: "Match labels to pictures" }] },
    { text: "How do you want to share what you know?", options: [{ m: "A", t: "Tell someone" }, { m: "K", t: "Build or point to it" }] },
    { text: "How do you want to solve a story problem?", options: [{ m: "V", t: "Draw it" }, { m: "R", t: "Use words and numbers" }] },
    { text: "How do you want to learn a song?", options: [{ m: "A", t: "Sing it together" }, { m: "K", t: "Move with the beat" }] },
    { text: "How do you want to learn about shapes?", options: [{ m: "V", t: "See the shapes sorted" }, { m: "K", t: "Build them with blocks" }] },
    { text: "How do you want to remember classroom steps?", options: [{ m: "R", t: "Look at a picture list" }, { m: "A", t: "Hear the steps again" }] },
    { text: "How do you want to learn about animals?", options: [{ m: "V", t: "Look at animal cards" }, { m: "A", t: "Talk about animal sounds" }] },
    { text: "How do you want to practice counting?", options: [{ m: "K", t: "Move counters" }, { m: "R", t: "Mark the numbers" }] },
    { text: "How do you want to show the ending of a story?", options: [{ m: "R", t: "Choose words for it" }, { m: "V", t: "Pick a picture for it" }] },
    { text: "How do you want to start a tricky puzzle?", options: [{ m: "I", t: "Try it quietly first" }, { m: "S", t: "Work with a friend" }] },
    { text: "How do you want to fix a mistake?", options: [{ m: "I", t: "Check your own work" }, { m: "S", t: "Ask a partner to help" }] },
    { text: "How do you want to learn a new game?", options: [{ m: "I", t: "Try one round by yourself" }, { m: "S", t: "Play with a small group" }] },
    { text: "How do you want to practice letters?", options: [{ m: "I", t: "Use your own practice card" }, { m: "S", t: "Practice with a partner" }] },
    { text: "How do you want to clean up centers?", options: [{ m: "I", t: "Follow your own checklist" }, { m: "S", t: "Work with your table team" }] },
    { text: "How do you want to learn a classroom job?", options: [{ m: "I", t: "Try the job step by step" }, { m: "S", t: "Do the job with a helper" }] },
    { text: "How do you want to read a new book?", options: [{ m: "I", t: "Look through it alone first" }, { m: "S", t: "Read it with a buddy" }] },
    { text: "How do you want to build something new?", options: [{ m: "I", t: "Make your own plan" }, { m: "S", t: "Share ideas with a group" }] },
    { text: "How do you want to answer a question?", options: [{ m: "I", t: "Think before you share" }, { m: "S", t: "Talk it out with a friend" }] },
    { text: "How do you want to practice a new skill?", options: [{ m: "I", t: "Practice at your own spot" }, { m: "S", t: "Practice with classmates" }] }
  ],
  g35: [
    { text: "Your class is learning about ecosystems. Rank what would help you most.", options: rankedOptions("See a food web diagram", "Talk through examples", "Read a short article", "Build a model habitat", "Try the first question on my own", "Work with a small group") },
    { text: "You need to remember a new math process. Rank your choices.", options: rankedOptions("Watch the steps color-coded", "Hear the teacher explain", "Write the steps in your notebook", "Practice with tiles or tools", "Try a few problems quietly first", "Solve examples with a partner") },
    { text: "You are preparing for a quiz. Rank your study plan.", options: rankedOptions("Use charts and drawings", "Study with a partner out loud", "Make written notes", "Play a review game", "Use a solo practice checklist", "Quiz a classmate and trade roles") },
    { text: "You are starting a writing project. Rank what helps first.", options: rankedOptions("Look at an example organizer", "Discuss ideas", "Read the rubric", "Move cards into order", "Plan quietly before drafting", "Brainstorm with a partner") },
    { text: "You are learning geography. Rank what helps most.", options: rankedOptions("Study a map", "Listen to clues", "Read place descriptions", "Make a floor map", "Try the map task independently", "Compare answers with a group") },
    { text: "You are learning symmetry. Rank what helps most.", options: rankedOptions("See mirror images", "Explain the rule aloud", "Write definitions", "Fold and test paper shapes", "Try several shapes by myself", "Test examples with a partner") },
    { text: "You are learning a new science word. Rank your choices.", options: rankedOptions("See a labeled picture", "Repeat and use it in a sentence", "Write a definition", "Act it out", "Make my own example first", "Practice the word with a partner") },
    { text: "You need to show your learning. Rank what feels best.", options: rankedOptions("Create a poster", "Give a short talk", "Write an explanation", "Build a demonstration", "Complete an independent response", "Work on a shared product") },
    { text: "You are learning a new reading skill. Rank what helps first.", options: rankedOptions("See the strategy marked on a page", "Hear someone think aloud", "Read the steps on a bookmark", "Practice with sticky notes", "Try the strategy alone first", "Practice with a reading partner") },
    { text: "You are solving a science problem. Rank what helps most.", options: rankedOptions("Look at the data chart", "Discuss what the data means", "Write a claim and evidence", "Sort evidence cards", "Think through the problem independently", "Compare evidence with a group") },
    { text: "You are learning a new classroom routine. Rank your choices.", options: rankedOptions("Watch the routine modeled", "Hear the directions repeated", "Read a checklist", "Practice the routine", "Follow the routine card on my own", "Practice the routine with classmates") },
    { text: "You are working with a partner. Rank what helps you learn.", options: rankedOptions("Use a shared drawing or chart", "Talk through each step", "Write notes together", "Use cards or tools together", "Think quietly before partner work", "Build the answer together") }
  ],
  g612: [
    { text: "You are learning a complex historical event. Rank what helps most.", options: rankedOptions("Study a timeline or map", "Listen to a discussion", "Read primary source notes", "Role-play decision points", "Process the evidence independently", "Debrief with a small group") },
    { text: "You are preparing a presentation. Rank your process.", options: rankedOptions("Storyboard slides", "Rehearse aloud", "Write speaker notes", "Practice moving through demos", "Draft the plan independently", "Rehearse with peer feedback") },
    { text: "You are learning geometry volume. Rank your choices.", options: rankedOptions("View 3D diagrams", "Hear an explanation", "Read formulas and examples", "Use physical models", "Try practice problems alone first", "Work through examples with a partner") },
    { text: "You are analyzing a novel. Rank what helps first.", options: rankedOptions("Map character relationships", "Join a discussion", "Annotate passages", "Act out a scene", "Reflect in a reading journal", "Discuss interpretations with a group") },
    { text: "You are learning web coding. Rank your choices.", options: rankedOptions("See layout examples", "Talk through the logic", "Read docs and comments", "Edit and test code", "Debug independently before asking", "Pair-program with a classmate") },
    { text: "You are studying a historic speech. Rank what helps most.", options: rankedOptions("Watch the speaker", "Listen to the rhythm", "Read and annotate the text", "Perform a section", "Write a private reflection first", "Analyze the speech with a group") },
    { text: "You need to organize research. Rank what helps.", options: rankedOptions("Use a visual board", "Explain sources to a peer", "Make written source cards", "Sort printed evidence", "Set up my own research plan", "Compare sources with a team") },
    { text: "You are checking your understanding. Rank your choices.", options: rankedOptions("Use a concept map", "Answer aloud", "Write a summary", "Create a sample problem", "Self-check with a rubric", "Teach the idea to a peer") },
    { text: "You are learning a new lab procedure. Rank what helps first.", options: rankedOptions("Watch a diagram or demo video", "Hear the safety steps explained", "Read the procedure sheet", "Practice with the materials", "Review the steps independently", "Run a practice check with a lab partner") },
    { text: "You are revising an essay. Rank what helps most.", options: rankedOptions("Color-code the draft", "Conference with someone", "Use a written revision checklist", "Move paragraphs or evidence cards", "Revise quietly with a checklist", "Peer review with a partner") },
    { text: "You are learning a new equation. Rank your choices.", options: rankedOptions("See worked examples", "Talk through why it works", "Read the rule and notes", "Use a model or simulation", "Try a set independently first", "Compare strategies with a partner") },
    { text: "You are preparing for a debate or discussion. Rank what helps.", options: rankedOptions("Map the argument visually", "Practice speaking with a partner", "Write evidence notes", "Stand and rehearse positions", "Prepare notes independently", "Practice with a discussion team") }
  ]
};

function rankedOptions(v, a, r, k, i, s) {
  return [
    { m: "V", t: v },
    { m: "A", t: a },
    { m: "R", t: r },
    { m: "K", t: k },
    { m: "I", t: i },
    { m: "S", t: s }
  ];
}

const appState = {
  activePeriod: "1",
  enabledSystems: { kagan: true, siop: true, cer: true, pbl: false, iep: true },
  selectedSupports: { "sentence-frames": true, "chunked-directions": true, "movement-break": true, "teacher-checkin": true, "graphic-organizer": true, "read-aloud": false },
  lessonText: "",
  uploadedFiles: [],
  lessonKeywords: [],
  selectedAvatar: "",
  gradeBand: "g35",
  questionIndex: 0,
  answers: {},
  submissions: []
};

const avatars = [
  "Fox", "Owl", "Turtle", "Rabbit", "Otter", "Hedgehog", "Deer", "Bee", "Bear", "Panda",
  "Koala", "Penguin", "Dolphin", "Octopus", "Narwhal", "Axolotl", "Komodo Dragon", "Chameleon",
  "Toucan", "Elephant", "Flamingo", "Raccoon", "Wolf", "Sloth", "Seahorse"
];

document.addEventListener("DOMContentLoaded", () => {
  setupMobileWarning();
  applyPortalMode();
  bindNavigation();
  bindTeacher();
  bindStudent();
  bindAdmin();
  bindQuestions();
  bindLibrary();
  renderConnectionStatus();
  renderAll();
  applyInitialHashRoute();
});

function on(id, eventName, handler) {
  document.getElementById(id)?.addEventListener(eventName, handler);
}

function setupMobileWarning() {
  const warning = document.getElementById("mobile-use-warning");
  if (!warning) return;

  const userAgent = navigator.userAgent || "";
  const mobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const coarseSmallScreen = window.matchMedia?.("(pointer: coarse)")?.matches && window.matchMedia?.("(max-width: 900px)")?.matches;
  let dismissed = false;

  try {
    dismissed = window.sessionStorage.getItem("lessonmentor-mobile-warning-dismissed") === "true";
  } catch {
    dismissed = false;
  }

  if ((mobileUserAgent || coarseSmallScreen) && !dismissed) {
    document.body.classList.add("is-mobile-device");
  }
}

function getPortalMode() {
  const hash = window.location.hash.replace("#", "");
  if (hash === "student-view") return "student";
  if (hash === "admin-view") return "admin";
  return "teacher";
}

function applyPortalMode() {
  const portalMode = getPortalMode();
  document.body.dataset.portal = portalMode;
  document.querySelectorAll(".nav-button").forEach(button => {
    button.hidden = button.dataset.view !== portalMode;
  });
}

function bindNavigation() {
  document.getElementById("dismiss-mobile-warning")?.addEventListener("click", () => {
    document.getElementById("mobile-use-warning")?.classList.add("is-dismissed");
    document.body.classList.remove("is-mobile-device");
    try {
      window.sessionStorage.setItem("lessonmentor-mobile-warning-dismissed", "true");
    } catch {
      // Session storage can be blocked in strict browser settings.
    }
  });

  document.querySelectorAll(".nav-button").forEach(button => {
    button.addEventListener("click", () => {
      setActiveView(button.dataset.view);
    });
  });

  on("reset-demo", "click", () => {
    appState.lessonText = "";
    appState.uploadedFiles = [];
    appState.lessonKeywords = [];
    appState.questionIndex = 0;
    appState.answers = {};
    const lessonText = document.getElementById("lesson-text");
    if (lessonText) lessonText.value = "";
    renderAll();
  });

  on("logout-demo", "click", () => {
    window.location.href = "/";
  });

  on("go-home", "click", () => {
    setActiveView("teacher");
  });

  on("open-student-profiles", "click", () => {
    document.getElementById("student-profiles-modal")?.showModal();
  });
  on("open-launch-assessment", "click", () => {
    document.getElementById("launch-assessment-modal")?.showModal();
  });
  on("open-library-modal", "click", () => {
    document.getElementById("library-modal")?.showModal();
  });
  on("open-settings-modal", "click", () => {
    document.getElementById("settings-modal")?.showModal();
  });
  on("open-strategy-library", "click", () => {
    document.getElementById("library-modal")?.close();
    setActiveView("library");
  });
  on("open-question-bank", "click", () => {
    document.getElementById("library-modal")?.close();
    setActiveView("questions");
  });
}

function setActiveView(viewKey) {
  document.querySelectorAll(".nav-button").forEach(item => {
    item.classList.toggle("active", item.dataset.view === viewKey);
  });
  document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
  document.getElementById(`${viewKey}-view`)?.classList.add("active");
  const titles = { teacher: "Teacher Dashboard", student: "Student Dashboard", library: "Strategy Library", admin: "School Dashboard", questions: "Question Bank" };
  const viewTitle = document.getElementById("view-title");
  if (viewTitle && titles[viewKey]) viewTitle.textContent = titles[viewKey];
}

function applyInitialHashRoute() {
  const target = window.location.hash.replace("#", "");
  const view = target ? target.replace("-view", "") : getPortalMode();
  const button = document.querySelector(`.nav-button[data-view="${view}"]`);
  if (button) button.click();
  else setActiveView(view);
}

function bindTeacher() {
  on("class-select", "change", event => {
    appState.activePeriod = event.target.value;
    syncLessonPeriodControls(appState.activePeriod);
    renderTeacher();
    renderStrategies();
    renderStandardsPreview();
    renderIepSupports();
  });

  on("self-contained-toggle", "change", event => {
    const profile = classProfiles[appState.activePeriod];
    if (event.target.checked) {
      profile.roster = profile.roster.slice(0, 1);
    } else {
      Object.assign(classProfiles, JSON.parse(JSON.stringify(defaultProfiles)));
    }
    renderTeacher();
  });

  on("lesson-file", "change", async event => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    const textArea = document.getElementById("lesson-text");
    const textFiles = files.filter(file => file.type.startsWith("text/") || /\.(txt|md|csv)$/i.test(file.name));
    appState.uploadedFiles = files.map(file => ({
      name: file.name,
      type: file.type || "unknown",
      size: file.size || 0
    }));

    if (!textArea) return;
    if (textFiles.length && textFiles.length === files.length) {
      textArea.value = (await Promise.all(textFiles.map(file => file.text()))).join("\n\n--- Next Uploaded Text File ---\n\n");
    } else if (!textArea.value.trim()) {
      textArea.value = "";
    }
  });

  on("analyze-lesson", "click", analyzeLesson);
  on("generate-lesson", "click", generateLessonPlan);
  document.getElementById("submission-history")?.addEventListener("click", handleSubmissionAction);
  on("launch-class-assessment", "click", () => launchAssessment("class"));
  on("launch-student-assessment", "click", () => launchAssessment("student"));
  on("open-iep-modal", "click", () => {
    document.getElementById("settings-modal")?.close();
    document.getElementById("iep-modal")?.showModal();
  });
  on("save-iep-supports", "click", renderStrategies);
  on("lesson-period", "change", event => {
    appState.activePeriod = event.target.value;
    syncLessonPeriodControls(appState.activePeriod);
    renderTeacher();
    renderStrategies();
    renderStandardsPreview();
    renderIepSupports();
  });

  ["lesson-grade", "lesson-subject", "objective-style"].forEach(id => {
    on(id, "change", () => {
      if (id === "lesson-grade" || id === "lesson-subject") clearLessonPeriodForManualDetails();
      renderStandardsPreview();
      renderStrategies();
    });
  });

  on("teacher-state", "change", event => {
    accountProfile.teachingState = event.target.value || "BASE";
    renderStandardsPreview();
  });
}

function getClassConfig(period = appState.activePeriod) {
  return classAccessCodes[period] || classAccessCodes["1"];
}

function hasConfiguredClasses() {
  return Object.keys(classAccessCodes).length > 0;
}

function setLessonDetailMode() {
  const savedClassMode = hasConfiguredClasses();
  const metaGrid = document.querySelector(".lesson-meta-grid");
  const orDivider = document.querySelector(".lesson-or-divider");
  document.querySelectorAll(".saved-class-field").forEach(field => {
    field.hidden = !savedClassMode;
  });
  document.querySelectorAll(".manual-lesson-field").forEach(field => {
    field.hidden = savedClassMode;
  });
  if (orDivider) orDivider.hidden = true;
  metaGrid?.classList.toggle("saved-class-only", savedClassMode);
}

function syncLessonPeriodControls(period = appState.activePeriod) {
  const config = getClassConfig(period);
  const classSelect = document.getElementById("class-select");
  const lessonPeriod = document.getElementById("lesson-period");
  const lessonGrade = document.getElementById("lesson-grade");
  const lessonSubject = document.getElementById("lesson-subject");
  if (classSelect) classSelect.value = period;
  if (lessonPeriod) lessonPeriod.value = period;
  if (lessonGrade && config.grade) lessonGrade.value = config.grade;
  if (lessonSubject && config.subject) lessonSubject.value = config.subject;
  setLessonDetailMode();
}

function clearLessonPeriodForManualDetails() {
  const lessonPeriod = document.getElementById("lesson-period");
  if (lessonPeriod) lessonPeriod.value = "";
}

function getSelectedSupportIds(period = appState.activePeriod) {
  const configured = getClassConfig(period).supports;
  if (Array.isArray(configured)) return configured;
  return Object.entries(appState.selectedSupports)
    .filter(([, selected]) => selected)
    .map(([id]) => id);
}

const defaultProfiles = JSON.parse(JSON.stringify(classProfiles));

function renderConnectionStatus() {
  const status = document.querySelector(".status-box p");
  if (!status) return;
  const api = window.LessonMentorAPI;
  status.textContent = api && !api.isDemoMode()
    ? "Connected to Supabase."
    : "Demo mode until Supabase is configured.";
}

function bindStudent() {
  on("student-teacher-code", "input", event => {
    appState.gradeBand = gradeBandFromTeacherCode(event.target.value);
    appState.answers = {};
    renderAssessment();
  });

  on("submit-assessment", "click", () => {
    const studentId = document.getElementById("student-id")?.value || "student";
    const message = document.getElementById("assessment-submit-status");
    if (message) {
      message.textContent = `Assessment submitted for ID # ${studentId}.`;
    }
  });

  on("student-logout", "click", () => {
    window.location.href = "/";
  });
}

function bindAdmin() {
  on("question-filter", "change", renderQuestions);
}

function bindQuestions() {}

function bindLibrary() {
  ["library-system-filter", "library-grade-filter", "library-subject-filter"].forEach(id => {
    on(id, "change", renderLibrary);
  });
}

function renderAll() {
  renderTeacher();
  renderSystemToggles();
  renderStrategies();
  renderStandardsPreview();
  renderSubmissionHistory();
  renderStudent();
  renderAdmin();
  renderQuestions();
  renderLibrary();
  renderIepSupports();
}

function renderTeacher() {
  if (!document.getElementById("teacher-view")) return;
  syncLessonPeriodControls(appState.activePeriod);
  const profile = classProfiles[appState.activePeriod];
  const classCode = getClassConfig(appState.activePeriod)?.code || "LM-CLASS";
  paintCompass("teacher-compass", profile.profile);
  renderStats("teacher-profile-stats", profile.profile);
  const codeEl = document.getElementById("teacher-class-code");
  if (codeEl) codeEl.textContent = classCode;
  const stateSelect = document.getElementById("teacher-state");
  if (stateSelect) stateSelect.value = accountProfile.teachingState || "BASE";
  const classInsight = document.getElementById("class-insight");
  if (classInsight) classInsight.textContent = buildInsight(profile.profile);
  const rosterCount = document.getElementById("roster-count");
  if (rosterCount) rosterCount.textContent = `${profile.roster.length} students`;
  const rosterTabCount = document.getElementById("roster-tab-count");
  if (rosterTabCount) rosterTabCount.textContent = `${profile.roster.length} students`;
  const rosterList = document.getElementById("roster-list");
  if (!rosterList) return;
  rosterList.innerHTML = profile.roster.map(student => `
    <div class="roster-item student-profile-row">
      <div class="student-profile-string">
        <strong>ID # ${student.id}</strong>
        <span>|</span>
        <strong>Grade ${student.grade}</strong>
      </div>
      <div class="student-style-cell">
        <div class="pill-row primary-secondary-pills">${stylePill(student.primary)}${stylePill(student.secondary)}</div>
        <button class="secondary-button" data-profile-id="${student.id}">View profile</button>
      </div>
    </div>
  `).join("") || `<div class="analysis-card"><strong>No student profiles loaded</strong><p>This class can be hidden or treated as planning time.</p></div>`;
  if (profile.roster.length) {
    rosterList.insertAdjacentHTML("beforeend", `
      <div class="analysis-card">
        <strong>Data retention</strong>
        <p>Student assessment data permanently deletes after 365 days or when the teacher starts a new school year.</p>
      </div>
    `);
  }
  document.querySelectorAll("[data-profile-id]").forEach(button => {
    button.addEventListener("click", () => openStudentProfile(button.dataset.profileId));
  });
}

function renderSystemToggles() {
  const container = document.getElementById("system-toggles");
  if (!container) return;
  container.innerHTML = systems.map(system => `
    <label class="system-toggle">
      <span>${system.label}</span>
      <input type="checkbox" data-system="${system.id}" ${appState.enabledSystems[system.id] ? "checked" : ""}>
    </label>
  `).join("");

  document.querySelectorAll("[data-system]").forEach(input => {
    input.addEventListener("change", event => {
      appState.enabledSystems[event.target.dataset.system] = event.target.checked;
      renderStrategies();
      renderLibrary();
    });
  });
}

function renderIepSupports() {
  const container = document.getElementById("iep-supports");
  if (!container) return;
  const selectedSupportIds = new Set(getSelectedSupportIds(appState.activePeriod));
  container.innerHTML = iepSupports.map(support => `
    <label class="support-card">
      <input type="checkbox" data-support="${support.id}" ${selectedSupportIds.has(support.id) ? "checked" : ""}>
      <span>
        <strong>${support.label}</strong>
        <p>${support.description}</p>
      </span>
    </label>
  `).join("");

  document.querySelectorAll("[data-support]").forEach(input => {
    input.addEventListener("change", event => {
      const config = getClassConfig(appState.activePeriod);
      const next = new Set(getSelectedSupportIds(appState.activePeriod));
      if (event.target.checked) next.add(event.target.dataset.support);
      else next.delete(event.target.dataset.support);
      config.supports = [...next];
      appState.selectedSupports[event.target.dataset.support] = event.target.checked;
    });
  });
}

function openStudentProfile(studentId) {
  const student = classProfiles[appState.activePeriod].roster.find(item => item.id === studentId);
  if (!student) return;
  const questions = questionBank.g35.slice(0, 3);
  const modal = document.getElementById("student-profile-modal");
  const body = document.getElementById("student-profile-modal-body");
  if (!modal || !body) return;
  body.innerHTML = `
    <div class="student-profile-summary">
      <div>
        <span class="roster-label">ID #</span>
        <strong>${student.id}</strong>
      </div>
      <div>
        <span class="roster-label">Grade</span>
        <strong>${student.grade}</strong>
      </div>
      <div>
        <span class="roster-label">Last Assessment</span>
        <strong>${student.lastAssessment || "Not started"}</strong>
        <p>${student.completed || "0/12"} questions complete</p>
      </div>
      <div>
        <span class="roster-label">Primary - Secondary</span>
        <div class="pill-row">${stylePill(student.primary)}${stylePill(student.secondary)}</div>
      </div>
    </div>
    <div class="lesson-block">
      <h5>Instruction notes</h5>
      <p>Prioritize ${styles[student.primary].name} access first, then add ${styles[student.secondary].name} as the second pathway. Generated lessons should give this student a clear way into the same task without watering down the objective.</p>
    </div>
    <div class="lesson-block">
      <h5>Recent response evidence</h5>
      <p>Teachers can review what each selected answer measured after the student responds. Students do not see these mappings.</p>
      ${questions.map(question => {
        const options = question.options.filter(option => [student.primary, student.secondary].includes(option.m)).slice(0, 2);
        return `<div class="mini-review"><span>${question.text}</span>${options.map(option => `<b>${option.t}</b>${stylePill(option.m)}`).join("")}</div>`;
      }).join("")}
    </div>
    <div class="lesson-block">
      <h5>Data retention</h5>
      <p>This profile data is scheduled to permanently delete after 365 days or when the teacher starts a new school year.</p>
    </div>
  `;
  modal.showModal();
}

function analyzeLesson() {
  const lessonText = document.getElementById("lesson-text");
  if (!lessonText) return;
  appState.lessonText = lessonText.value.trim();
  const sourceText = getAnalyzableLessonText();
  const words = sourceText.toLowerCase().match(/[a-z]{4,}/g) || [];
  const useful = words.filter(word => !["with", "from", "that", "this", "students", "lesson", "teacher"].includes(word));
  appState.lessonKeywords = [...new Set(useful)].slice(0, 18);
  renderLessonAnalysis();
  renderStrategies();
}

function renderLessonAnalysis() {
  const panel = document.getElementById("lesson-analysis");
  if (!panel) return;
  if (!appState.lessonText) {
    panel.innerHTML = "";
    return;
  }

  panel.innerHTML = `
    <strong>Detected lesson signals</strong>
    <p>${appState.lessonKeywords.length ? appState.lessonKeywords.join(", ") : "No strong keywords found yet."}</p>
  `;
}

function renderStandardsPreview() {
  const matches = getStandardMatches();
  const templateCount = document.getElementById("template-count");
  if (templateCount) {
    templateCount.textContent = matches.length ? "Ready to preview/download" : "Preview/download";
  }
}

function getTeachingState() {
  return document.getElementById("teacher-state")?.value || accountProfile.teachingState || "BASE";
}

function getStandardsPackage(state = getTeachingState()) {
  return standardsConfig.statePackages[state] || standardsConfig.statePackages.BASE;
}

function baseFrameworkForSubject(subject) {
  return standardsConfig.baseFrameworkBySubject[subject] || "CCSS";
}

function scoreStandards(candidates, words) {
  return candidates
    .map(item => ({ ...item, score: item.keywords.filter(keyword => words.includes(keyword)).length }))
    .sort((a, b) => b.score - a.score);
}

function markStandardsSource(matches, state, subject, sourceType) {
  const statePackage = getStandardsPackage(state);
  const baseFramework = baseFrameworkForSubject(subject);
  return matches.map(item => ({
    ...item,
    sourceState: state,
    sourceType,
    sourceLabel: sourceType === "state" ? statePackage.label : `${standardsConfig.baseLabel}: ${baseFramework}`,
    fallbackNote: sourceType === "base-fallback" && state !== "BASE"
      ? `${statePackage.label} package not loaded yet; using ${baseFramework} base standards.`
      : ""
  }));
}

function getStandardMatches() {
  const grade = document.getElementById("lesson-grade")?.value || "4";
  const subject = document.getElementById("lesson-subject")?.value || "science";
  const words = appState.lessonKeywords.length ? appState.lessonKeywords : (getAnalyzableLessonText().toLowerCase().match(/[a-z]{4,}/g) || []);
  const state = getTeachingState();
  const statePackage = getStandardsPackage(state);
  const stateCandidates = standardsLibrary.filter(item => item.state === state && item.grade === grade && item.subject === subject);
  if (state !== "BASE" && statePackage.loaded && stateCandidates.length) {
    const stateMatches = scoreStandards(stateCandidates, words).filter(item => item.score > 0).slice(0, 2);
    return markStandardsSource(stateMatches.length ? stateMatches : stateCandidates.slice(0, 2), state, subject, "state");
  }

  const baseCandidates = standardsLibrary.filter(item => !item.state && item.grade === grade && item.subject === subject);
  const primary = scoreStandards(baseCandidates, words)
    .filter(item => item.score > 0)
    .slice(0, 2);

  const baseMatches = primary.length ? primary : baseCandidates.slice(0, 2);
  return markStandardsSource(baseMatches, state, subject, state === "BASE" ? "base" : "base-fallback");
}

function buildObjectiveStatement() {
  const style = document.getElementById("objective-style")?.value || "ican";
  const subject = document.getElementById("lesson-subject")?.value || "science";
  const title = deriveLessonTitle().toLowerCase();
  const context = inferLessonContext();
  let objective = context.objective || "use evidence and academic language to explain my thinking";
  let language = context.language || "claim, evidence, explain, detail";
  if (context.topic === "the submitted lesson topic" && subject === "science") {
    objective = "explain how evidence from observations supports a scientific claim";
    language = "claim, evidence, reasoning, observe";
  } else if (context.topic === "the submitted lesson topic" && subject === "social-studies" && /historical|figure|research/.test(title)) {
    objective = "research a historical figure and explain their impact using evidence from sources";
    language = "historical figure, source, evidence, impact, explain";
  } else if (context.topic === "the submitted lesson topic" && subject === "social-studies") {
    objective = "explain a social studies idea using evidence from sources";
    language = "source, evidence, event, impact, explain";
  } else if (context.topic === "the submitted lesson topic" && subject === "math") {
    objective = "solve the problem and explain the strategy I used";
    language = "strategy, model, equation, explain";
  }
  const iCan = `I can ${objective}.`;
  const student = `Today I will use ${language} to ${objective}.`;
  if (style === "both") return `${iCan} ${student}`;
  return style === "student" ? student : iCan;
}

function inferLessonContext(text = getAnalyzableLessonText()) {
  const lower = String(text || "").toLowerCase();
  if (/soccer|kicking a ball|kick a ball/.test(lower)) {
    return {
      topic: "introductory soccer skills",
      objective: "build background knowledge about soccer and demonstrate the basics of kicking a ball with control",
      language: "soccer, control, pass, plant foot, inside of the foot, target, follow-through",
      hook: "Show a soccer ball and ask students what they already know about moving, stopping, and passing the ball.",
      directTeach: "Model a safe inside-of-the-foot kick: plant the non-kicking foot beside the ball, point toes toward the target, contact the ball with the inside of the foot, and follow through.",
      guidedPractice: "Partners practice stationary passes to a target, using teacher cues before adding movement.",
      independentPractice: "Students rotate through short kicking stations: target pass, gentle dribble-and-stop, and partner return pass.",
      assessment: "Observe whether students can name two kicking cues and complete a controlled pass toward a target.",
      grouping: "Whole group for safety/background, partners for passing practice, small groups for station rotation."
    };
  }
  if (/historical figure|research project/.test(lower)) {
    return {
      topic: "historical figure research",
      objective: "research a historical figure and explain their impact using evidence from sources",
      language: "historical figure, source, evidence, impact, contribution, explain",
      hook: "Build background before students research: show a picture, name, or short fact about the historical figure, then ask, \"What do we already know, what do we wonder, and what kind of source could help us prove it?\" Prompt students to connect the person to a time period, place, problem, or contribution before they open the full research task.",
      directTeach: "Use a short teacher-created source sample: \"Maria Tallchief grew up in Oklahoma and became one of America's first major prima ballerinas. She helped change how people viewed American ballet because she proved that dancers trained in the United States could perform at the highest level.\" Model underlining one fact, boxing one source detail, and writing one impact note: Fact - Maria Tallchief was a ballerina. Evidence - she became one of America's first major prima ballerinas. Impact - she helped change how people viewed American ballet.",
      guidedPractice: "Give students a second short reference paragraph and a sorting sheet. Students sort details into three labeled columns: Facts About The Person, Evidence From The Source, and Why It Matters. Directions on the student sheet: Read the source. Cut or copy each detail into the best column. Be ready to explain why one detail shows impact.",
      independentPractice: "Students complete the Historical Figure Research Organizer with these sections: name, time/place, three key facts, two source details, one contribution or impact, and one question for more research. Include a completed sample row for the teacher and students to reference.",
      assessment: "Collect the organizer row or exit response showing one accurate fact, one source detail, and one impact explanation. Students should be able to explain what the person did and why it mattered using evidence from a source.",
      grouping: "Whole group background builder and teacher model, partner source sort for guided practice, then independent organizer work with teacher check-ins."
    };
  }
  if (/erosion|weathering|landforms?/.test(lower)) {
    return {
      topic: "erosion and landform change",
      objective: "explain how evidence from observations supports a claim about how land changes over time",
      language: "erosion, weathering, landform, evidence, observation, claim",
      hook: "Show two images of landforms before and after water or wind changes and ask students what changed.",
      directTeach: "Model how to connect one visible change to a claim about erosion.",
      guidedPractice: "Students examine a shared image or station and choose the strongest evidence.",
      independentPractice: "Students write a claim using evidence from the observation.",
      assessment: "Collect a written response or exit ticket naming the idea and supporting evidence.",
      grouping: "Whole group model, station or partner evidence talk, independent written explanation."
    };
  }
  return {
    topic: "the submitted lesson topic",
    objective: "use the lesson content, academic language, and selected strategies to meet the stated objective",
    language: "content vocabulary, evidence, explain, practice, reflect",
    hook: "Connect the lesson to students' prior knowledge with a short question, image, or example.",
    directTeach: "Model the key concept or skill with explicit teacher language.",
    guidedPractice: "Guide students through one shared example before release.",
    independentPractice: "Students complete the aligned task using the provided supports.",
    assessment: "Collect a short response or performance check aligned to the objective.",
    grouping: "Whole group model, partner or small-group practice, independent evidence of learning."
  };
}

function getAnalyzableLessonText() {
  const pasted = document.getElementById("lesson-text")?.value.trim() || "";
  if (pasted) return pasted;
  const filenameText = appState.uploadedFiles.map(file => readableTitleFromFilename(file.name)).join(" ");
  const subject = subjectLabel(document.getElementById("lesson-subject")?.value || "");
  const grade = document.getElementById("lesson-grade")?.value || "";
  return [filenameText, subject, grade ? `Grade ${grade}` : ""].filter(Boolean).join(" ");
}

function readableTitleFromFilename(filename = "") {
  const base = filename
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
  return titleCase(base || "Uploaded Lesson");
}

function getEducatorName() {
  return accountProfile.educatorName || accountProfile.organizationName || "Lesson Mentor Teacher";
}

function titleFromPrompt(text = "") {
  const compact = String(text)
    .replace(/\s+/g, " ")
    .replace(/^[\s"'`]+|[\s"'`]+$/g, "")
    .trim();
  const lower = compact.toLowerCase();
  if (/soccer|kicking a ball|kick a ball/.test(lower)) {
    return "Introductory Soccer Unit: Background Knowledge And Kicking Basics Lesson Plan";
  }
  if (/historical figure|research project/.test(lower)) {
    return "Historical Figure Research Project Lesson Plan";
  }
  if (/erosion|weathering|landforms?/.test(lower)) {
    return "Erosion And Landform Change Lesson Plan";
  }
  const cleaned = compact
    .replace(/^(i'?m|i am)\s+looking\s+for\s+(an?|the)?\s*/i, "")
    .replace(/^please\s+(create|make|build|generate)\s+(an?|the)?\s*/i, "")
    .replace(/^i\s+need\s+(an?|the)?\s*/i, "")
    .split(/[.;!?]/)[0]
    .slice(0, 90)
    .trim();
  return `${titleCase(cleaned || "Generated Lesson")} Lesson Plan`;
}

function deriveLessonTitle() {
  const pasted = document.getElementById("lesson-text")?.value.trim() || "";
  if (pasted) return titleFromPrompt(pasted);
  const fileTitle = appState.uploadedFiles[0]?.name ? readableTitleFromFilename(appState.uploadedFiles[0].name) : "";
  if (fileTitle) return `${fileTitle} Lesson Plan`;
  const text = getAnalyzableLessonText();
  const firstMeaningfulLine = text
    .split(/\n+/)
    .map(line => line.trim())
    .find(line => line && !line.startsWith("-"));
  if (firstMeaningfulLine) {
    return `${titleCase(firstMeaningfulLine.replace(/^grade\s+\d+\s*/i, "").split(/[.:;]/)[0].slice(0, 80))} Lesson Plan`;
  }
  return `${subjectLabel(document.getElementById("lesson-subject")?.value || "lesson")} Lesson Plan`;
}

function subjectLabel(value) {
  const labels = {
    art: "Art",
    ela: "ELA",
    language: "Languages",
    "library-makerspace": "Library/Makerspace",
    math: "Math",
    music: "Music",
    pe: "PE",
    science: "Science",
    "social-studies": "Social Studies",
    stem: "STEM"
  };
  return labels[value] || titleCase(String(value || "Lesson").replace(/-/g, " "));
}

function titleCase(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\b[a-z]/g, letter => letter.toUpperCase())
    .replace(/\bIep\b/g, "IEP")
    .replace(/\bEla\b/g, "ELA")
    .replace(/\bStem\b/g, "STEM");
}

async function generateLessonPlan() {
  const hasUpload = appState.uploadedFiles.length > 0;
  const lessonText = document.getElementById("lesson-text");
  if (!lessonText) return;
  if (!lessonText.value.trim() && !hasUpload) {
    appState.lessonText = "";
    renderLessonAnalysis();
    const submissionHistory = document.getElementById("submission-history");
    if (submissionHistory) {
      submissionHistory.innerHTML = `
        <div class="history-row muted-row">
          <div>
            <strong>No lesson submitted yet</strong>
            <p>Upload a file or paste lesson text before generating.</p>
          </div>
        </div>
      `;
    }
    return;
  }

  analyzeLesson();
  const profile = classProfiles[appState.activePeriod].profile;
  const matched = strategyLibrary
    .filter(strategy => appState.enabledSystems[strategy.system])
    .map(strategy => ({ ...strategy, score: strategyScore(strategy, profile) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
  const primaryMove = matched[0]?.title || "a visual model";
  const secondaryMove = matched[1]?.title || "structured partner talk";
  const selectedSupportIds = new Set(getSelectedSupportIds(appState.activePeriod));
  const supportInserts = iepSupports.filter(support => selectedSupportIds.has(support.id));
  const organizers = selectOrganizers();
  const standards = getStandardMatches();
  const objectiveStatement = buildObjectiveStatement();
  const lessonTitle = deriveLessonTitle();
  const lessonContext = inferLessonContext();
  const teachingState = getTeachingState();
  const grade = document.getElementById("lesson-grade")?.value || "";
  const subject = document.getElementById("lesson-subject")?.value || "";
  const selectedSystemLabels = systems
    .filter(system => appState.enabledSystems[system.id])
    .map(system => system.label);
  if (supportInserts.length) selectedSystemLabels.push("IEP Supports");

  const submission = {
    id: `submission-${Date.now()}`,
    title: lessonTitle,
    period: classProfiles[appState.activePeriod].name,
    classCode: getClassConfig(appState.activePeriod).code,
    systems: selectedSystemLabels,
    status: "ready",
    date: "Today",
    expires: "15 days",
    expired: false,
    educator: getEducatorName(),
    teachingState,
    standardsSource: standards[0]?.sourceLabel || getStandardsPackage(teachingState).label,
    grade,
    subject,
    objective: objectiveStatement,
    lessonText: appState.lessonText,
    lessonContext,
    standards: standards.map(item => ({
      id: item.id,
      framework: item.framework,
      text: item.text,
      sourceLabel: item.sourceLabel,
      fallbackNote: item.fallbackNote
    })),
    supportInserts: supportInserts.map(item => ({ label: item.label, insert: item.insert })),
    organizers,
    strategies: matched.map(item => item.title),
    keywords: appState.lessonKeywords,
    uploadedFiles: [...appState.uploadedFiles]
  };

  appState.submissions.unshift(submission);
  renderSubmissionHistory();
  await persistLessonSubmission(submission, standards, supportInserts, organizers);
}

async function persistLessonSubmission(submission, standards, supportInserts, organizers) {
  const api = window.LessonMentorAPI;
  if (!api) return;

  const payload = {
    title: submission.title,
    class_period: classProfiles[appState.activePeriod].name,
    grade: document.getElementById("lesson-grade")?.value || null,
    subject: document.getElementById("lesson-subject")?.value || null,
    objective_style: document.getElementById("objective-style")?.value || null,
    selected_systems: submission.systems,
    matched_standards: standards.map(item => ({
      id: item.id,
      framework: item.framework,
      text: item.text,
      source: item.sourceLabel,
      fallback_note: item.fallbackNote
    })),
    standards_state: submission.teachingState,
    standards_source: submission.standardsSource,
    selected_supports: supportInserts.map(item => item.id),
    teacher_code: getClassConfig(appState.activePeriod).code,
    recommended_organizers: organizers,
    lesson_text: appState.lessonText,
    uploaded_files: appState.uploadedFiles,
    output_template: "Lesson Mentor Signature Template",
    output_formats: ["pdf", "docx", "google_docs_future"],
    document_status: "available",
    expires_at: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString()
  };

  const { error } = await api.createLessonSubmission(payload);
  if (error) {
    const submissionHistory = document.getElementById("submission-history");
    if (submissionHistory) {
      submissionHistory.insertAdjacentHTML("afterbegin", `<div class="history-row muted-row"><strong>Saved locally; Supabase error</strong></div>`);
    }
    console.error("Lesson submission save failed", error);
  }
}

async function launchAssessment(scope) {
  const api = window.LessonMentorAPI;
  const profile = classProfiles[appState.activePeriod];
  const gradeBand = classAccessCodes[appState.activePeriod]?.gradeBand || "g35";
  const questions = questionBank[gradeBand] || questionBank.g35;
  const target = scope === "student" ? "one student" : "selected class";
  const payload = {
    class_period: profile.name,
    grade_band: gradeBand,
    target_scope: scope,
    question_count: questions.length,
    same_order: true,
    read_aloud_enabled: gradeBand === "k2",
    teacher_display_enabled: true,
    status: "open"
  };

  const status = document.getElementById("active-assessment-status");
  if (status) {
    status.textContent = `Open for ${target}: ${questions.length} questions, same order for everyone, teacher display view enabled.`;
  }

  if (!api) return;
  const { error } = await api.createAssessmentLaunch(payload);
  if (error) {
    if (status) {
      status.textContent = `Open in demo view for ${target}; Supabase save needs attention.`;
    }
    console.error("Assessment launch save failed", error);
  }
}

function selectOrganizers() {
  const subject = document.getElementById("lesson-subject")?.value || "science";
  const sourceText = getAnalyzableLessonText().toLowerCase();
  const scienceSet = ["KWL.png", "Word Web.pdf", "Drawing Conclusions.pdf", "What I learned today.pdf", "Blank 4-Column Topic Grid.pdf"];
  const elaSet = ["Story Elements.png", "Character Setting Plot.pdf", "Essay Map.pdf", "Evidence of Theme.pdf", "Summarize.png"];
  const mathSet = ["Blank Grid.pdf", "Problem Solution Organizer.pdf", "Blank 4 rows.pdf", "Pro-Con.png"];
  const socialSet = /historical|figure|research/.test(sourceText)
    ? ["Historical Figure Research Organizer", "Fact-Evidence-Impact Sorting Sheet", "Completed Research Organizer Sample", "Timeline.pdf", "Document Analysis.pdf"]
    : ["Timeline.pdf", "Document Analysis.pdf", "Compare and Contrast.png", "Event Details.pdf"];
  const generalSet = ["What I learned today.pdf", "KWL.png", "Word Web.pdf", "Blank Grid.pdf"];
  return ({ science: scienceSet, ela: elaSet, math: mathSet, "social-studies": socialSet }[subject] || generalSet).slice(0, 5);
}

function getDaysAvailable(item) {
  if (item.expired) return 0;
  if (/^\d+\s*days?$/i.test(item.expires)) return parseInt(item.expires, 10);
  const currentYear = new Date().getFullYear();
  const target = new Date(`${item.expires}, ${currentYear}`);
  if (Number.isNaN(target.getTime())) return 15;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);
  return Math.max(0, Math.ceil((target - today) / 86400000));
}

function availabilityPill(item) {
  if (item.expired) return `<span class="access-pill danger">Expired</span>`;
  const days = getDaysAvailable(item);
  const tone = days <= 5 ? "danger" : days <= 10 ? "warning" : "success";
  const label = days === 1 ? "1 Day Left" : `${days} Days Left`;
  return `<span class="access-pill ${tone}">${label}</span>`;
}

function isSubmissionVisibleToTeacher(item) {
  return !item.teacherHidden && !item.expired && getDaysAvailable(item) > 0;
}

function renderSubmissionHistory() {
  const submissionHistory = document.getElementById("submission-history");
  if (!submissionHistory) return;
  const visibleSubmissions = appState.submissions.filter(isSubmissionVisibleToTeacher);
  if (!visibleSubmissions.length) {
    submissionHistory.innerHTML = `
      <div class="history-row muted-row">
        <div>
          <strong>No generated lessons yet</strong>
          <p>Generate a plan and it will appear at the top of this history.</p>
        </div>
      </div>
    `;
    return;
  }

  submissionHistory.innerHTML = visibleSubmissions.map(item => `
    <div class="history-row" data-submission-row="${item.id || ""}">
      <div>
        <strong>${item.title}</strong>
        <p>${item.date} · ${item.period} · ${item.systems.join(", ")}</p>
      </div>
      <div class="document-actions">
        ${availabilityPill(item)}
        ${item.expired ? "" : `
          <button class="secondary-button" data-output-action="preview" data-submission-id="${item.id}">Preview PDF</button>
          <button class="secondary-button" data-output-action="pdf" data-submission-id="${item.id}">Download PDF</button>
          <button class="secondary-button" data-output-action="docx" data-submission-id="${item.id}">Word .docx</button>
          <button class="secondary-button muted-action" data-output-action="gdocs" data-submission-id="${item.id}" title="Google Docs export will require Google Drive authorization">Google Docs</button>
          <button class="secondary-button destructive-action" data-output-action="clear" data-submission-id="${item.id}" title="Remove this lesson from teacher history">Clear</button>
        `}
      </div>
    </div>
  `).join("");

  submissionHistory.querySelectorAll("[data-output-action]").forEach(button => {
    button.addEventListener("click", handleSubmissionAction);
  });
}

function handleSubmissionAction(event) {
  const button = event.target.closest("[data-output-action]");
  if (!button) return;
  const item = appState.submissions.find(submission => submission.id === button.dataset.submissionId);
  if (!item) return;
  const action = button.dataset.outputAction;
  if (action === "preview") previewGeneratedLesson(item);
  if (action === "pdf") downloadGeneratedPdf(item);
  if (action === "docx") downloadGeneratedDocx(item);
  if (action === "clear") clearTeacherSubmission(item);
  if (action === "gdocs") {
    alert("Google Docs export will connect after Google Drive authorization is added. For now, use the Word .docx download.");
  }
}

function clearTeacherSubmission(item) {
  const shouldClear = window.confirm(`Remove "${item.title}" from the teacher submission history?`);
  if (!shouldClear) return;
  item.teacherHidden = true;
  item.teacherHiddenAt = new Date().toISOString();
  renderSubmissionHistory();
}

function buildGeneratedLessonLines(item) {
  const context = item.lessonContext || inferLessonContext(item.lessonText || item.title || getAnalyzableLessonText());
  const standards = formatStandardsForOutput(item.standards, item.subject);
  const standardsSource = item.standardsSource || item.standards?.[0]?.sourceLabel || `${standardsConfig.baseLabel}: ${baseFrameworkForSubject(item.subject)}`;
  const standardsNote = item.standards?.find(standard => standard.fallbackNote)?.fallbackNote || "";
  const strategies = item.strategies?.length
    ? item.strategies.join(", ")
    : item.systems?.filter(system => system !== "IEP Supports").join(", ") || "Selected strategies";
  const supports = item.supportInserts?.length
    ? item.supportInserts.map(support => `${support.insert} (${support.label})`)
    : ["Class IEP supports will be inserted here after the full generator is connected."];
  const organizers = item.organizers?.length ? item.organizers.join(", ") : "Organizer recommendations will appear here.";
  const files = item.uploadedFiles?.length ? item.uploadedFiles.map(file => file.name).join(", ") : "No uploaded file recorded.";
  return [
    "Lesson Mentor Generated Draft",
    item.title,
    "",
    `Educator: ${item.educator || getEducatorName()}`,
    `Class: ${item.period || classProfiles[appState.activePeriod].name}`,
    `Teacher Code: ${item.classCode || getClassConfig(appState.activePeriod).code}`,
    `Grade: ${item.grade || document.getElementById("lesson-grade")?.value || ""}`,
    `Subject: ${subjectLabel(item.subject || document.getElementById("lesson-subject")?.value || "")}`,
    `Uploaded file(s): ${files}`,
    `Lesson Focus: ${titleCase(context.topic)}`,
    "",
    "Auto Standards",
    `Source: ${standardsSource}`,
    standardsNote ? `Note: ${standardsNote}` : "",
    standards,
    "",
    "Teacher-Ready Standard Expectation",
    summarizeStandardsExpectation(item.standards, context, item.subject),
    "",
    "Board Language",
    item.objective || buildObjectiveStatement(),
    "",
    "Strategies To Include",
    strategies,
    "",
    "Strategy Integrations/IEP",
    ...supports.map(support => `- ${support}`),
    "",
    "Recommended Graphic Organizers",
    organizers,
    "",
    "Lesson-Specific Teaching Flow",
    `- Background Builder: ${context.hook}`,
    `- Teacher Model: ${context.directTeach}`,
    `- Guided Practice: ${context.guidedPractice}`,
    `- Independent/Station Practice: ${context.independentPractice}`,
    `- Evidence Of Learning: ${context.assessment}`,
    "",
    "Prototype Note",
    "This static preview uses the selected class, subject, filename, pasted text, and strategy settings. The full build will replace this draft with AI-generated content in the Lesson Mentor signature template.",
    "",
    copyrightNotice
  ];
}

function formatStandardsForOutput(standards = [], subject = "") {
  if (!standards.length) return "Standards will be finalized after AI standards matching.";
  return standards.map(standard => `${standard.framework}: ${standard.id} - ${standard.text}`).join("\n");
}

function summarizeStandardsExpectation(standards = [], context = {}, subject = "") {
  if (standards.length) {
    const standardText = standards.map(standard => standard.text).join(" ").toLowerCase();
    if (/research|source|quote|paraphrase|textual evidence|primary|secondary/.test(standardText)) {
      return "Students are expected to gather information from more than one source, quote or paraphrase accurately, identify relevant evidence, and explain how that evidence supports what the historical figure did and why it mattered.";
    }
    if (/motor skills|movement patterns|movement and performance|physical activities/.test(standardText)) {
      return "Students are expected to demonstrate safe, controlled movement skills and explain or apply the cues that improve performance during the physical activity.";
    }
    if (/observations|measurements|evidence|argument|claim/.test(standardText)) {
      return "Students are expected to use observations or evidence to support an explanation, claim, argument, or conclusion connected to the lesson content.";
    }
  }
  if (subject === "social-studies" || /historical figure|research/.test(context.topic || "")) {
    return "Students should research with sources, collect accurate facts, organize evidence, and explain historical impact in their own words.";
  }
  if (subject === "pe" || /soccer|kicking|physical/.test(context.topic || "")) {
    return "Students should build background knowledge, practice controlled movement, use teacher cues, and demonstrate the skill safely during an activity task.";
  }
  return "Students should show the selected grade-level expectation through the lesson task, academic language, and evidence of learning.";
}

function strategyIntegrationLabel(strategyName, selectedSystems = []) {
  const normalized = String(strategyName || "").toLowerCase();
  const hasSystem = id => selectedSystems.includes(systemLabels[id]) || selectedSystems.includes(id.toUpperCase());
  if (/claim|evidence|reason|cer/.test(normalized) && hasSystem("cer")) return "CER";
  if (/rally|quiz|pair|coach|share/.test(normalized) && hasSystem("kagan")) return "Kagan";
  if (/question|product|project/.test(normalized) && hasSystem("pbl")) return "PBL";
  if (/input|objective|practice|language/.test(normalized) && hasSystem("siop")) return "SIOP";
  return "Strategy";
}

function safeFilename(title, extension) {
  const clean = String(title || "lesson-mentor-output")
    .replace(/lesson plan$/i, "")
    .trim()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return `${clean || "lesson-mentor-output"}.${extension}`;
}

function previewGeneratedLesson(item) {
  let modal = document.getElementById("generated-preview-modal");
  if (!modal) {
    modal = document.createElement("dialog");
    modal.id = "generated-preview-modal";
    modal.className = "modal dashboard-modal generated-preview-modal";
    modal.innerHTML = `
      <form method="dialog">
        <div class="panel-title-row">
          <h3 id="generated-preview-title">Generated Lesson Preview</h3>
          <button class="icon-button" value="close">Close</button>
        </div>
        <div class="generated-preview-body" id="generated-preview-body"></div>
      </form>
    `;
    document.body.appendChild(modal);
  }
  document.getElementById("generated-preview-title").textContent = item.title;
  document.getElementById("generated-preview-body").innerHTML = `
    <div class="analysis-card">
      <strong>Draft Preview</strong>
      <p>Full AI/template generation is still a backend build item. This preview reflects the selected class, subject, filename/pasted text, strategies, and settings.</p>
    </div>
    <pre>${escapeHtml(buildGeneratedLessonLines(item).join("\n"))}</pre>
  `;
  modal.showModal();
}

function downloadGeneratedPdf(item) {
  const pdfBlob = makeLessonPlanPdf(item);
  downloadBlob(pdfBlob, safeFilename(item.title, "pdf"));
}

function downloadGeneratedDocx(item) {
  const xmlLines = buildGeneratedLessonLines(item).map(line => {
    const escaped = escapeXml(line || " ");
    if (!line) return `<w:p/>`;
    const isHeading = !line.startsWith("-") && ["Lesson Mentor Generated Draft", item.title, "Auto Standards", "Teacher-Ready Standard Expectation", "Board Language", "Strategies To Include", "Strategy Integrations/IEP", "Recommended Graphic Organizers", "Lesson-Specific Teaching Flow", "Prototype Note"].includes(line);
    const isCopyright = line === copyrightNotice;
    return `<w:p><w:r><w:rPr>${isHeading ? "<w:b/>" : ""}${isCopyright ? '<w:color w:val="8A94A6"/><w:sz w:val="16"/>' : ""}</w:rPr><w:t xml:space="preserve">${escaped}</w:t></w:r></w:p>`;
  }).join("");
  const files = {
    "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`,
    "_rels/.rels": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`,
    "word/document.xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${xmlLines}<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="720" w:right="720" w:bottom="720" w:left="720"/></w:sectPr></w:body></w:document>`
  };
  downloadBlob(makeZip(files), safeFilename(item.title, "docx"));
}

function makeLessonPlanPdf(item) {
  const pdf = createPdfWriter({ width: 792, height: 612 });
  const accent = "1F5C5C";
  const lightAccent = "EAF2F2";
  const amber = "B8862E";
  const paleAmber = "F7EBD2";
  const ink = "202938";
  const muted = "4B5D78";
  const watermark = "8A94A6";
  const border = "9CA3AF";
  const margin = 30;
  const pageWidth = 792;
  const contentWidth = pageWidth - margin * 2;
  const standards = formatStandardsForOutput(item.standards, item.subject);
  const standardsSource = item.standardsSource || item.standards?.[0]?.sourceLabel || `${standardsConfig.baseLabel}: ${baseFrameworkForSubject(item.subject)}`;
  const grade = item.grade || document.getElementById("lesson-grade")?.value || "";
  const subject = subjectLabel(item.subject || document.getElementById("lesson-subject")?.value || "");
  const periodLabel = item.period || classProfiles[appState.activePeriod]?.name || "Selected class";
  const objective = item.objective || buildObjectiveStatement();
  const context = item.lessonContext || inferLessonContext(item.lessonText || item.title || getAnalyzableLessonText());
  const keywords = context.language || (item.keywords?.length ? item.keywords.slice(0, 8).join(", ") : "academic vocabulary from uploaded lesson");
  const materials = [
    item.uploadedFiles?.length ? item.uploadedFiles.map(file => file.name).join(", ") : "Uploaded lesson materials",
    item.organizers?.length ? `Organizers: ${item.organizers.join(", ")}` : ""
  ].filter(Boolean).join("; ");

  pdf.addPage();
  pdf.text("Teaching & Learning Moves Matrix", margin, 28, { size: 18, bold: true, color: accent });
  pdf.text("A reciprocal planning grid - what the teacher does, what students do, and how language is supported, segment by segment", margin, 45, { size: 8.5, color: muted });
  pdf.text("Lesson Mentor Generated Output", pageWidth - margin - 150, 30, { size: 9, bold: true, color: accent });

  const headerY = 62;
  const headerH = 48;
  drawFieldTable(pdf, margin, headerY, contentWidth, headerH, [
    ["Educator", item.educator || getEducatorName()],
    ["Date", new Date().toLocaleDateString()],
    ["Grade / Course", `${periodLabel} - Grade ${grade} ${subject}`],
    ["Standard(s)", `${standardsSource} - ${standards}`]
  ], { accent, border, ink });

  drawBox(pdf, margin, 122, contentWidth, 54, {
    title: "Lesson Objective And Board Language",
    body: objective,
    accent,
    border,
    fill: "FFFFFF"
  });

  drawTwoColumnFields(pdf, margin, 188, contentWidth, 38, [
    ["Vocabulary", keywords],
    ["Materials", materials]
  ], { accent, border, ink });

  const segments = buildTemplateSegments(item);
  drawLessonMatrix(pdf, margin, 240, contentWidth, 318, segments, { accent, lightAccent, amber, paleAmber, border, ink, muted });

  pdf.text("Generated by Lesson Mentor - differentiated planning, teacher-ready language, and intentional supports.", margin, 582, { size: 7.2, color: muted });
  pdf.text(copyrightNotice, margin, 594, { size: 6.8, color: watermark });

  pdf.addPage();
  pdf.text("Teaching & Learning Moves Matrix", margin, 30, { size: 16, bold: true, color: accent });
  pdf.text(item.title || "Generated Lesson Plan", margin, 47, { size: 9, color: muted });

  const footerSections = [
    ["Grouping Used Today", buildGroupingText(item)],
    ["Assessment Evidence - What Will You Collect Or Observe To Know Students Learned It?", buildAssessmentEvidenceText(item)],
    ["Differentiation Notes", buildDifferentiationText(item)],
    ["Reflection (Complete After Teaching)", "What worked? Which students still need another access point? What should be adjusted before teaching this lesson again?"]
  ];
  let y = 70;
  footerSections.forEach(([title, body]) => {
    drawBox(pdf, margin, y, contentWidth, 105, { title, body, accent, border, fill: "FFFFFF" });
    y += 122;
  });
  pdf.text(copyrightNotice, margin, 584, { size: 6.8, color: watermark });

  return pdf.toBlob();
}

function buildTemplateSegments(item) {
  const strategyList = item.strategies?.length ? item.strategies : item.systems?.filter(system => system !== "IEP Supports") || [];
  const supportList = item.supportInserts?.length
    ? item.supportInserts.map(support => `${support.insert} (${support.label})`)
    : ["Use selected class IEP supports at the point where they match the task demand. (IEP)"];
  const context = item.lessonContext || inferLessonContext(item.lessonText || item.title || getAnalyzableLessonText());
  const objective = item.objective || buildObjectiveStatement();
  const primaryStrategy = strategyList[0] || "Comprehensible Input";
  const secondaryStrategy = strategyList[1] || "Structured Partner Talk";
  const selectedSystems = item.systems || [];
  const cerSelected = selectedSystems.includes("CER");
  const evidenceStrategy = strategyList.find(strategy => /claim|evidence|reason/i.test(strategy));
  const finalStrategy = evidenceStrategy && cerSelected ? evidenceStrategy : (strategyList[2] || secondaryStrategy || primaryStrategy);
  return [
    {
      segment: "Hook & Background Building",
      teacher: context.hook,
      student: "Activate prior knowledge, notice key details, and make an initial prediction or connection.",
      language: `Preview vocabulary: ${context.language || item.keywords?.slice(0, 5).join(", ") || "content vocabulary"}.`,
      integration: `${primaryStrategy} (${strategyIntegrationLabel(primaryStrategy, selectedSystems)}). Give the teacher exact launch language and a visible anchor before directions.`
    },
    {
      segment: "Direct Teach (I do)",
      teacher: context.directTeach,
      student: "Track the model, annotate or sketch the key step, and rehearse one academic phrase.",
      language: `Teacher language: "Watch for ___." / "I know I am successful when ___."`,
      integration: `${supportList[0]}`
    },
    {
      segment: "Guided Work (We do)",
      teacher: context.guidedPractice,
      student: "Work with a partner or small group to sort, discuss, or apply evidence to the shared task.",
      language: "Require students to say the evidence before writing it. Capture one shared response.",
      integration: `${secondaryStrategy} (${strategyIntegrationLabel(secondaryStrategy, selectedSystems)}). Add teacher check-in for students needing support.`
    },
    {
      segment: "Independent Work (You do)",
      teacher: context.independentPractice,
      student: "Complete the task using the model, sentence frame, organizer, and evidence gathered during guided work.",
      language: cerSelected ? "Students write or present using claim, evidence, and explanation language." : "Students write or present using source, detail, and explanation language.",
      integration: `${finalStrategy} (${strategyIntegrationLabel(finalStrategy, selectedSystems)}). ${supportList[1] || supportList[0]}`
    },
    {
      segment: "Wrap-Up & Check",
      teacher: context.assessment,
      student: "Submit an exit response, explain one piece of evidence, or reflect on the strategy that helped most.",
      language: cerSelected ? "Board-ready closure: Today I learned ___ because the evidence showed ___." : "Board-ready closure: Today I learned ___ from the source detail ___. This matters because ___.",
      integration: `${supportList[2] || "Offer a short break or reduced-response option when appropriate. (IEP)"}`
    }
  ];
}

function buildGroupingText(item) {
  const strategies = item.strategies?.join(", ") || "teacher-selected strategies";
  const context = item.lessonContext || inferLessonContext(item.lessonText || item.title || getAnalyzableLessonText());
  return `${context.grouping} Use ${strategies} where they fit the class profile and task.`;
}

function buildAssessmentEvidenceText(item) {
  const context = item.lessonContext || inferLessonContext(item.lessonText || item.title || getAnalyzableLessonText());
  return `${context.assessment} This evidence should connect to the board language: ${item.objective || buildObjectiveStatement()}`;
}

function buildDifferentiationText(item) {
  const supports = item.supportInserts?.length
    ? item.supportInserts.map(support => support.insert).join(" ")
    : "Apply selected IEP supports only where they are used in the lesson.";
  const organizers = item.organizers?.length ? `Attach or offer: ${item.organizers.join(", ")}.` : "";
  return `${supports} ${organizers}`.trim();
}

function drawFieldTable(pdf, x, y, width, height, fields, options) {
  const firstRowH = height * 0.5;
  const colW = width / 3;
  fields.slice(0, 3).forEach(([label, value], index) => {
    drawLabeledCell(pdf, x + colW * index, y, colW, firstRowH, label, value, options);
  });
  drawLabeledCell(pdf, x, y + firstRowH, width, height - firstRowH, fields[3][0], fields[3][1], options);
}

function drawTwoColumnFields(pdf, x, y, width, height, fields, options) {
  const colW = width / 2;
  fields.forEach(([label, value], index) => {
    drawLabeledCell(pdf, x + colW * index, y, colW, height, label, value, options);
  });
}

function drawLabeledCell(pdf, x, y, width, height, label, value, { accent, border, ink }) {
  pdf.rect(x, y, width, height, { stroke: border, fill: "FFFFFF" });
  pdf.rect(x, y, 74, height, { stroke: border, fill: accent });
  pdf.wrap(label, x + 6, y + 12, 62, { size: 7.5, bold: true, color: "FFFFFF", maxLines: 2 });
  pdf.wrap(value || " ", x + 82, y + 12, width - 90, { size: 8.5, color: ink, maxLines: 2 });
}

function drawBox(pdf, x, y, width, height, { title, body, accent, border, fill }) {
  pdf.rect(x, y, width, height, { stroke: border, fill });
  pdf.rect(x, y, width, 18, { stroke: accent, fill: accent });
  pdf.text(title, x + 8, y + 13, { size: 8.5, bold: true, color: "FFFFFF" });
  pdf.wrap(body || " ", x + 8, y + 34, width - 16, { size: 9, color: "202938", lineHeight: 11, maxLines: Math.max(2, Math.floor((height - 35) / 11)) });
}

function drawLessonMatrix(pdf, x, y, width, height, segments, colors) {
  const columns = [
    { label: "Segment", width: 116 },
    { label: "Teacher Moves", width: 144 },
    { label: "Student Moves", width: 144 },
    { label: "Language & Support Notes", width: 154 },
    { label: "Strategy Integrations/IEP", width: width - 116 - 144 - 144 - 154 }
  ];
  const headerH = 24;
  const rowH = (height - headerH) / segments.length;
  let cursor = x;
  columns.forEach((column, index) => {
    const fill = index === 4 ? colors.amber : colors.accent;
    pdf.rect(cursor, y, column.width, headerH, { stroke: colors.border, fill });
    pdf.wrap(column.label, cursor + 5, y + 15, column.width - 10, { size: 7.5, bold: true, color: "FFFFFF", maxLines: 2 });
    cursor += column.width;
  });
  segments.forEach((segment, rowIndex) => {
    let colX = x;
    const rowY = y + headerH + rowH * rowIndex;
    const rowValues = [segment.segment, segment.teacher, segment.student, segment.language, segment.integration];
    columns.forEach((column, colIndex) => {
      const fill = colIndex === 0 ? colors.lightAccent : colIndex === 4 ? colors.paleAmber : "FFFFFF";
      pdf.rect(colX, rowY, column.width, rowH, { stroke: colors.border, fill });
      pdf.wrap(rowValues[colIndex], colX + 5, rowY + 13, column.width - 10, {
        size: colIndex === 0 ? 7.8 : 7.2,
        bold: colIndex === 0,
        color: colors.ink,
        lineHeight: 8.7,
        maxLines: Math.max(2, Math.floor((rowH - 10) / 8.7))
      });
      colX += column.width;
    });
  });
}

function createPdfWriter({ width, height }) {
  const pages = [];
  let current = [];
  const writer = {
    addPage() {
      current = [];
      pages.push(current);
    },
    text(text, x, y, options = {}) {
      current.push("BT");
      current.push(`/${options.bold ? "F2" : "F1"} ${options.size || 10} Tf`);
      current.push(`${pdfColor(options.color || "000000")} rg`);
      current.push(`${x.toFixed(2)} ${(height - y).toFixed(2)} Td`);
      current.push(`(${escapePdf(pdfSafeText(text))}) Tj`);
      current.push("ET");
    },
    wrap(text, x, y, boxWidth, options = {}) {
      const size = options.size || 10;
      const lineHeight = options.lineHeight || size + 2;
      const maxLines = options.maxLines || 3;
      const lines = wrapPdfText(text, boxWidth, size, maxLines);
      lines.forEach((line, index) => {
        writer.text(line, x, y + index * lineHeight, options);
      });
    },
    rect(x, y, w, h, options = {}) {
      if (options.fill) current.push(`${pdfColor(options.fill)} rg`);
      if (options.stroke) current.push(`${pdfColor(options.stroke)} RG`);
      current.push(`${x.toFixed(2)} ${(height - y - h).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re ${options.fill && options.stroke ? "B" : options.fill ? "f" : "S"}`);
    },
    toBlob() {
      return buildPdfBlob(pages, width, height);
    }
  };
  return writer;
}

function wrapPdfText(text, boxWidth, size, maxLines) {
  const clean = pdfSafeText(text);
  const maxChars = Math.max(8, Math.floor(boxWidth / (size * 0.48)));
  const words = clean.split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  words.forEach(word => {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    const clipped = lines.slice(0, maxLines);
    clipped[maxLines - 1] = clipped[maxLines - 1].replace(/\.*$/, "") + "...";
    return clipped;
  }
  return lines.length ? lines : [" "];
}

function buildPdfBlob(pageStreams, width, height) {
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pageStreams.map((_, index) => `${3 + index * 2} 0 R`).join(" ")}] /Count ${pageStreams.length} >>`
  ];
  pageStreams.forEach((stream, index) => {
    const pageObjectNumber = 3 + index * 2;
    const contentObjectNumber = pageObjectNumber + 1;
    const content = stream.join("\n");
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /Font << /F1 ${3 + pageStreams.length * 2} 0 R /F2 ${4 + pageStreams.length * 2} 0 R >> >> /Contents ${contentObjectNumber} 0 R >>`);
    objects.push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
  });
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach(offset => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function pdfColor(hex) {
  const clean = String(hex || "000000").replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
}

function pdfSafeText(text) {
  return String(text || "")
    .replace(/[–—]/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[•]/g, "-")
    .normalize("NFKD")
    .replace(/[^\x20-\x7E]/g, "");
}

function makeZip(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  Object.entries(files).forEach(([name, content]) => {
    const nameBytes = encoder.encode(name);
    const data = encoder.encode(content);
    const crc = crc32(data);
    const local = concatBytes(
      u32(0x04034b50), u16(20), u16(0), u16(0), u16(0), u16(0), u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0), nameBytes, data
    );
    localParts.push(local);
    const central = concatBytes(
      u32(0x02014b50), u16(20), u16(20), u16(0), u16(0), u16(0), u16(0), u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset), nameBytes
    );
    centralParts.push(central);
    offset += local.length;
  });
  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const end = concatBytes(u32(0x06054b50), u16(0), u16(0), u16(centralParts.length), u16(centralParts.length), u32(centralSize), u32(offset), u16(0));
  return new Blob([...localParts, ...centralParts, end], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
}

function crc32(bytes) {
  let crc = -1;
  for (const byte of bytes) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ byte) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function u16(value) {
  const bytes = new Uint8Array(2);
  new DataView(bytes.buffer).setUint16(0, value, true);
  return bytes;
}

function u32(value) {
  const bytes = new Uint8Array(4);
  new DataView(bytes.buffer).setUint32(0, value >>> 0, true);
  return bytes;
}

function concatBytes(...parts) {
  const length = parts.reduce((sum, part) => sum + part.length, 0);
  const output = new Uint8Array(length);
  let offset = 0;
  parts.forEach(part => {
    output.set(part, offset);
    offset += part.length;
  });
  return output;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function escapeHtml(text) {
  return String(text || "").replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character]));
}

function escapeXml(text) {
  return escapeHtml(text);
}

function escapePdf(text) {
  return String(text || "").replace(/[\\()]/g, "\\$&");
}

function renderStrategies() {
  const countEl = document.getElementById("strategy-count");
  const resultsEl = document.getElementById("strategy-results");
  if (!countEl || !resultsEl) return;

  const profile = classProfiles[appState.activePeriod].profile;
  const enabled = Object.keys(appState.enabledSystems).filter(id => appState.enabledSystems[id]);
  const scored = strategyLibrary
    .filter(strategy => enabled.includes(strategy.system))
    .map(strategy => ({ ...strategy, score: strategyScore(strategy, profile) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 9);

  countEl.textContent = `${scored.length} matches`;
  resultsEl.innerHTML = scored.map(strategy => `
    <article class="strategy-card">
      <div class="panel-title-row">
        <strong>${strategy.title}</strong>
        <span class="score">${strategy.score}</span>
      </div>
      <div class="pill-row system-line"><span class="tag-pill">${systemLabels[strategy.system]}</span></div>
      <div class="pill-row style-line">${sortStyles(strategy.modalities).map(stylePill).join("")}</div>
      <p>${strategy.description}</p>
      <p><strong>Use when:</strong> ${strategy.use}</p>
    </article>
  `).join("");
}

function strategyScore(strategy, profile) {
  const modalityFit = strategy.modalities.reduce((sum, modality) => sum + profile[modality], 0);
  const keywordFit = appState.lessonKeywords.filter(word => strategy.keywords.includes(word)).length * 12;
  return Math.round(modalityFit + keywordFit);
}

function renderStudent() {
  renderAvatars();
  renderAssessment();
}

function renderAvatars() {
  const grid = document.getElementById("avatar-grid");
  if (!grid) return;
  grid.innerHTML = avatars.map((avatar, index) => `
    <button class="avatar-button ${avatar === appState.selectedAvatar ? "active" : ""}" data-avatar="${avatar}" title="${avatar}">
      ${badgeSvg(avatar, index)}
      <span>${avatar}</span>
    </button>
  `).join("");

  document.querySelectorAll("[data-avatar]").forEach(button => {
    button.addEventListener("click", () => {
      appState.selectedAvatar = button.dataset.avatar;
      renderStudent();
    });
  });
}

function renderAssessment() {
  const panel = document.getElementById("student-assessment-panel");
  const card = document.getElementById("assessment-card");
  const progress = document.getElementById("assessment-progress");
  if (!panel || !card || !progress) return;

  const teacherCode = document.getElementById("student-teacher-code")?.value || "";
  appState.gradeBand = gradeBandFromTeacherCode(teacherCode);
  const questions = questionBank[appState.gradeBand];

  if (!appState.selectedAvatar) {
    panel.hidden = true;
    progress.textContent = "";
    card.innerHTML = "";
    return;
  }

  panel.hidden = false;

  if (!studentAssessmentDemoOpen) {
    panel.classList.remove("is-locked");
    progress.textContent = "Closed";
    card.innerHTML = `
      <div class="question-card">
        <strong>No Assessment Is Open Right Now</strong>
        <p>Your teacher has not launched the learning-style survey for this class yet.</p>
      </div>
    `;
    return;
  }

  panel.classList.remove("is-locked");
  progress.textContent = `${questions.length} Questions`;
  card.innerHTML = `
    <div class="survey-stack">
      ${questions.map((question, qIndex) => `
        <div class="question-card">
          <strong>${qIndex + 1}. ${question.text}</strong>
          <p>${appState.gradeBand === "k2" ? "Choose the one that helps you most." : "Rank each option from 1, most helpful, to 6, least helpful."}</p>
          <div class="question-options">
            ${question.options.map((option, index) => optionInput(option, qIndex, index)).join("")}
          </div>
        </div>
      `).join("")}
      <p class="assessment-submit-status" id="assessment-submit-status" aria-live="polite"></p>
    </div>
  `;

  document.querySelectorAll("[data-answer-index]").forEach(input => {
    input.addEventListener("change", event => {
      const key = `${appState.gradeBand}-${event.target.dataset.questionIndex}-${event.target.dataset.answerIndex}`;
      appState.answers[key] = Number(event.target.value);
    });
  });
}

function optionInput(option, qIndex, index) {
  const key = `${appState.gradeBand}-${qIndex}-${index}`;
  if (appState.gradeBand === "k2") {
    return `
      <label class="option-row">
        <input type="radio" name="k2-question-${qIndex}" data-question-index="${qIndex}" data-answer-index="${index}" value="1" ${appState.answers[key] ? "checked" : ""}>
        <span>${option.t}</span>
      </label>
    `;
  }

  return `
    <label class="option-row">
      <select data-question-index="${qIndex}" data-answer-index="${index}">
        <option value="0">-</option>
        <option value="1" ${appState.answers[key] === 1 ? "selected" : ""}>1</option>
        <option value="2" ${appState.answers[key] === 2 ? "selected" : ""}>2</option>
        <option value="3" ${appState.answers[key] === 3 ? "selected" : ""}>3</option>
        <option value="4" ${appState.answers[key] === 4 ? "selected" : ""}>4</option>
        <option value="5" ${appState.answers[key] === 5 ? "selected" : ""}>5</option>
        <option value="6" ${appState.answers[key] === 6 ? "selected" : ""}>6</option>
      </select>
      <span>${option.t}</span>
    </label>
  `;
}

function gradeBandFromTeacherCode(rawCode) {
  const normalized = String(rawCode || "").trim().toUpperCase();
  const match = Object.values(classAccessCodes).find(item => item.code === normalized);
  return match?.gradeBand || "g35";
}

function readCurrentQuestion() {
  const question = questionBank[appState.gradeBand][appState.questionIndex];
  const text = `${question.text}. ${question.options.map((option, index) => `Choice ${index + 1}: ${option.t}.`).join(" ")}`;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
  }
}

function renderStudentProfile() {
  // Future middle-school feature: re-enable student-facing learning profile and study tips here.
  if (!document.getElementById("student-compass") || !document.getElementById("student-profile-stats") || !document.getElementById("study-tips")) return;
  const profile = calculateStudentProfile();
  paintCompass("student-compass", profile);
  renderStats("student-profile-stats", profile);
  const strongest = Object.keys(profile).sort((a, b) => profile[b] - profile[a])[0];
  document.getElementById("study-tips").innerHTML = `
    <div class="tip-card"><strong>${styles[strongest].name} study tip</strong><p>${studyTip(strongest)}</p></div>
    <div class="tip-card"><strong>Privacy note</strong><p>This prototype keeps the student-facing identity to an ID number only.</p></div>
  `;
}

function calculateStudentProfile() {
  const scores = { V: 0, A: 0, I: 0, K: 0, R: 0, S: 0 };
  const questions = questionBank[appState.gradeBand];
  questions.forEach((question, qIndex) => {
    question.options.forEach((option, oIndex) => {
      const value = appState.answers[`${appState.gradeBand}-${qIndex}-${oIndex}`] || 0;
      if (!value) return;
      scores[option.m] += appState.gradeBand === "k2" ? 4 : 7 - value;
    });
  });

  const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
  if (!total) return { V: 17, A: 17, I: 16, K: 17, R: 16, S: 17 };
  return Object.fromEntries(Object.entries(scores).map(([key, value]) => [key, Math.round((value / total) * 100)]));
}

function studyTip(modality) {
  const tips = {
    V: "Use diagrams, color-coding, sketches, and before/after examples before writing.",
    A: "Talk through the idea with a partner, then repeat the key vocabulary out loud.",
    R: "Use a short written checklist, sentence frame, or summary box to lock in the idea.",
    K: "Build, sort, move, model, or test the idea before answering on paper.",
    I: "Preview the task, try the first step quietly, then check in with the teacher or a trusted peer.",
    S: "Use structured partner talk, small-group roles, or peer teaching before completing the final response."
  };
  return tips[modality];
}

function renderAdmin() {
  const adminStudents = document.getElementById("admin-students");
  const assignmentGrid = document.getElementById("assignment-grid");
  if (!adminStudents || !assignmentGrid) return;
  const students = Object.values(classProfiles).flatMap(group => group.roster);
  adminStudents.innerHTML = students.map(student => `
    <div class="student-row">
      <div>
        <strong>ID ${student.id}</strong>
        <div class="pill-row">${stylePill(student.primary)}${stylePill(student.secondary)}</div>
      </div>
      <span class="small-pill">Grade ${student.grade}</span>
    </div>
  `).join("");

  const slots = Array.from({ length: 10 }, (_, index) => `
    <div class="assignment-row">
      <strong>Teacher ${index + 1}</strong>
      <span class="small-pill">${index < 4 ? "Assigned" : "Open"}</span>
    </div>
  `).join("");
  assignmentGrid.innerHTML = slots;
}

function renderQuestions() {
  const filterControl = document.getElementById("question-filter");
  const questionGrid = document.getElementById("question-grid");
  if (!filterControl || !questionGrid) return;
  const filter = filterControl.value;
  const entries = Object.entries(questionBank).filter(([band]) => filter === "all" || filter === band);
  questionGrid.innerHTML = entries.flatMap(([band, questions]) => questions.map((question, index) => `
    <article class="question-card">
      <strong>${bandLabel(band)} Q${index + 1}</strong>
      <p>${question.text}</p>
      <div class="pill-row">${question.options.map(option => stylePill(option.m)).join("")}</div>
    </article>
  `)).join("");
}

function renderLibrary() {
  const systemControl = document.getElementById("library-system-filter");
  const gradeControl = document.getElementById("library-grade-filter");
  const subjectControl = document.getElementById("library-subject-filter");
  const results = document.getElementById("library-results");
  if (!systemControl || !gradeControl || !subjectControl || !results) return;
  const system = systemControl.value;
  const grade = gradeControl.value;
  const subject = subjectControl.value;
  const filtered = strategyLibrary.filter(strategy => {
    const systemOk = system === "all" || strategy.system === system;
    const gradeOk = grade === "all" || strategy.grades.includes(grade);
    const subjectOk = subject === "all" || strategy.subjects.includes(subject);
    return systemOk && gradeOk && subjectOk;
  });

  results.innerHTML = filtered.map(strategy => `
    <article class="strategy-card">
      <div class="panel-title-row">
        <strong>${strategy.title}</strong>
        <span class="tag-pill">${systemLabels[strategy.system]}</span>
      </div>
      <p>${strategy.description}</p>
      <p><strong>Best fit:</strong> ${strategy.use}</p>
      <p><strong>Use carefully:</strong> ${strategy.avoid}</p>
      <div class="pill-row system-line"><span class="tag-pill">${systemLabels[strategy.system]}</span></div>
      <div class="pill-row style-line">${sortStyles(strategy.modalities).map(stylePill).join("")}</div>
    </article>
  `).join("") || `<div class="analysis-card"><strong>No matches yet</strong><p>Try a broader filter.</p></div>`;
}

function badgeSvg(name, index) {
  const colors = [
    ["#f3a391", "#8a4b3d"], ["#a8cfe8", "#345b78"], ["#a6cf91", "#456b3f"], ["#c9b1e8", "#6e4f8b"],
    ["#a9d8d2", "#40726d"], ["#d6b65c", "#735c22"], ["#e9a0a8", "#7b4450"], ["#f4d36a", "#8a6b10"],
    ["#d9b46f", "#704f26"], ["#f2f2ed", "#34383f"], ["#cfd4d3", "#6f7675"], ["#d7e5f0", "#243a54"],
    ["#a8d9ee", "#246f91"], ["#d2a8de", "#674273"], ["#b6dceb", "#2f6880"], ["#efa6bc", "#8c3f5a"],
    ["#b1ca8a", "#586f36"], ["#b3e1b7", "#397843"], ["#f19843", "#1f2937"], ["#c7d0d7", "#67727a"],
    ["#f4a9c8", "#a33c67"], ["#dad8cf", "#333333"], ["#c9ccd3", "#4b5563"], ["#d7c08c", "#6b5b2f"],
    ["#a8d4e6", "#39738d"]
  ];
  const [fill, dark] = colors[index % colors.length];
  const initials = name.split(" ").map(part => part[0]).join("").slice(0, 2);
  return `
    <svg class="badge-svg" viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="36" fill="#f7f5ef" stroke="#ddd8ce" stroke-width="2"/>
      <circle cx="40" cy="42" r="20" fill="${fill}"/>
      <circle cx="31" cy="37" r="4" fill="${dark}"/>
      <circle cx="49" cy="37" r="4" fill="${dark}"/>
      <path d="M31 51 Q40 58 49 51" fill="none" stroke="${dark}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="24" cy="22" r="9" fill="${fill}" opacity="0.88"/>
      <circle cx="56" cy="22" r="9" fill="${fill}" opacity="0.88"/>
      <text x="40" y="47" text-anchor="middle" font-size="13" font-weight="800" fill="${dark}" opacity="0.32">${initials}</text>
    </svg>
  `;
}

function paintCompass(id, profile) {
  const compass = document.getElementById(id);
  if (!compass) return;
  const values = styleOrder.map(key => Math.max(0, profile[key] || 0));
  const total = values.reduce((sum, value) => sum + value, 0) || 100;
  let cursor = 0;
  const stops = styleOrder.map((key, index) => {
    const start = cursor;
    cursor += (values[index] / total) * 100;
    return `${styles[key].color} ${start}% ${cursor}%`;
  });
  compass.style.background = `conic-gradient(${stops.join(", ")})`;
}

function renderStats(id, profile) {
  const container = document.getElementById(id);
  if (!container) return;
  const orderedStyles = Object.keys(profile).sort((a, b) => {
    const difference = (profile[b] || 0) - (profile[a] || 0);
    return difference || styleOrder.indexOf(a) - styleOrder.indexOf(b);
  });
  container.innerHTML = orderedStyles.map(key => `
    <div class="stat-row">
      <span class="stat-label" tabindex="0" title="${styles[key].description}" data-tooltip="${styles[key].description}">${styles[key].name}</span>
      <div class="bar"><span style="width:${profile[key] || 0}%;background:${styles[key].color}"></span></div>
      <strong>${profile[key] || 0}%</strong>
    </div>
  `).join("");
}

function stylePill(key) {
  return `<span class="style-pill ${styles[key].className}">${styles[key].name}</span>`;
}

function sortStyles(modalities) {
  return [...modalities].sort((a, b) => styleOrder.indexOf(a) - styleOrder.indexOf(b));
}

function buildInsight(profile) {
  const ordered = Object.keys(profile).sort((a, b) => profile[b] - profile[a]);
  return `${profile[ordered[0]]}% of this class leans ${styles[ordered[0]].name}, with ${styles[ordered[1]].name} close behind. Recommendations prioritize those styles while still offering whole-class access points.`;
}

function topTwoStyles(profile) {
  return Object.keys(profile).sort((a, b) => profile[b] - profile[a]).slice(0, 2).map(key => styles[key].name);
}

function bandLabel(band) {
  return { k2: "K-2", g35: "Grades 3-5", g612: "Grades 6-12" }[band];
}
