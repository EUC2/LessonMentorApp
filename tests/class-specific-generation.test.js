const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appPath = path.join(__dirname, "..", "app.js");
const source = fs.readFileSync(appPath, "utf8");
const context = {
  console,
  Blob,
  TextEncoder,
  crypto: require("node:crypto").webcrypto,
  alert() {},
  confirm() { return true; },
  localStorage: { getItem() { return null; }, setItem() {} },
  navigator: { userAgent: "node" },
  window: { LessonMentorAPI: null, addEventListener() {}, confirm() { return true; } },
  document: {
    addEventListener() {},
    getElementById() { return null; },
    querySelectorAll() { return []; },
    body: { classList: { add() {}, remove() {} } }
  }
};
context.globalThis = context;
vm.createContext(context);
vm.runInContext(`${source}\n;globalThis.__lessonTest = { getMatchingCoursePeriods, getClassProfileSnapshot, buildClassLearningStylePlan, buildClassSpecificSubmission, buildCompleteLessonDocxBody, buildDailyLessonSegments };`, context);

const api = context.__lessonTest;
const targetPeriods = Array.from(api.getMatchingCoursePeriods("1"));
assert.deepEqual(targetPeriods, ["1", "5"], "matching Grade 4 science sections should generate together");

const period1Profile = JSON.parse(JSON.stringify(api.getClassProfileSnapshot("1")));
const period5Profile = JSON.parse(JSON.stringify(api.getClassProfileSnapshot("5")));
assert.notDeepEqual(period1Profile, period5Profile, "each section must retain its own learning profile");

const shared = {
  generationGroupId: "generation-test",
  lessonTitle: "Measuring With Metric Tools",
  educator: "Test Teacher",
  teachingState: "AZ",
  standardsSource: "NGSS",
  grade: "4",
  subject: "science",
  objective: "I can select and use an appropriate metric measurement tool.",
  lessonText: "Introduce metric measurement using balances and hand lenses.",
  lessonContext: {},
  standards: [],
  selectedSystems: ["Kagan", "SIOP"],
  organizers: ["Metric Measurement Lab Sheet"],
  keywords: ["metric", "measurement", "balance"],
  uploadedFiles: []
};

const period1 = api.buildClassSpecificSubmission("1", shared);
const period5 = api.buildClassSpecificSubmission("5", shared);
assert.equal(period1.generationGroupId, period5.generationGroupId);
assert.notEqual(period1.id, period5.id);
assert.notEqual(period1.classCode, period5.classCode);
assert.notDeepEqual(period1.supportIds, period5.supportIds, "IEP supports must come from the target section");
assert.notDeepEqual(period1.classProfile, period5.classProfile);
assert.match(period1.learningStylePlan.summary, /Visual 27%/);
assert.match(period5.learningStylePlan.summary, /Visual 30%/);
assert.equal(period1.learningStylePlan.secondary.name, "Kinesthetic");
assert.equal(period5.learningStylePlan.secondary.name, "Kinesthetic");
assert.ok(period1.strategies.length > 0);
assert.ok(period5.strategies.length > 0);
assert.notStrictEqual(period1.unitDays, period5.unitDays, "each class output must own its lesson package");

const period1Docx = api.buildCompleteLessonDocxBody(period1);
const period5Docx = api.buildCompleteLessonDocxBody(period5);
assert.match(period1Docx, /Class Learning Profile/);
assert.match(period1Docx, /Visual 27%/);
assert.match(period5Docx, /Visual 30%/);
assert.notEqual(period1Docx, period5Docx, "Word packages must contain section-specific content");

const period1Segments = api.buildDailyLessonSegments(period1, period1.unitDays[0]);
assert.ok(period1Segments.every(segment => /visible|visual|model|image|organizer|sketch|chart|diagram/i.test(segment.integration)), "primary Visual pathway should be present in each lesson segment");
assert.ok(period1Segments.some(segment => /hands-on|movement|materials|stations|manipulatives|demonstrated/i.test(segment.integration)), "secondary Kinesthetic pathway should be explicitly integrated");

console.log("Class-specific generation checks passed for Period 1 and Period 5.");
