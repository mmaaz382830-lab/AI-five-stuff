// Basic templates for Version 1 offline generation

export const hooks = [
  "When your code works but you don't know why.",
  "That moment you realize the deadline is tonight.",
  "Me pretending to understand what the senior dev is saying.",
  "AI is taking our jobs? Bro, AI can't even center a div.",
  "My brain at 3 AM: Let's refactor the whole codebase."
];

export const scripts = [
  "I started programming to make games. Now I just look at a black screen and cry. But hey, the coffee is good.",
  "They said 'Just learn React, it will be fun'. They lied. Now I have 500 node_modules and no sanity.",
  "Me trying to explain my bugs to ChatGPT like it's my therapist. ChatGPT: 'I understand your frustration.' No you don't, you are a machine!",
  "Student life is basically: Wake up, stress about exams, ignore exams, sleep, repeat.",
  "When you finally fix a bug after 5 hours and feel like a god, only to find 3 new bugs right after."
];

export const scenesList = [
  [
    "Scene 1: Stickman sitting at a computer, looking extremely tired.",
    "Scene 2: Screen turns red with a giant 'ERROR' message.",
    "Scene 3: Stickman throws the computer out the window.",
    "Scene 4: Stickman smiles and drinks coffee."
  ],
  [
    "Scene 1: Stickman walking into an exam hall confidently.",
    "Scene 2: Looks at the first question, eyes go wide.",
    "Scene 3: Stickman starts sweating profusely.",
    "Scene 4: Stickman draws a tiny flower on the paper and leaves."
  ],
  [
    "Scene 1: Two stickmen talking. One is holding a glowing orb (AI).",
    "Scene 2: The orb starts growing and takes over the desk.",
    "Scene 3: The stickmen bow down to the glowing orb.",
    "Scene 4: Screen text: 'All hail our robot overlords'."
  ]
];

export const screenTexts = [
  ["POV: You are a junior dev", "Error 404: Sleep not found", "Just let it crash"],
  ["Exam tomorrow?", "I haven't even opened the book", "Guess I'll fail"],
  ["AI in 2023: I can write code", "AI in 2026: I own your house", "Send help"]
];

export const voiceovers = [
  "It was at this exact moment that he knew... he messed up.",
  "Have you ever looked at something and wondered: How did it get this bad?",
  "I don't need sleep, I need answers!",
  "Nobody panic, everything is completely under control. *narrator: it was not under control.*"
];

export const videoPrompts = [
  "Vertical 9:16 format, stickman animation style, clean background, funny expressions, fast pacing, no complex camera movement, stickman programmer crying at a laptop, Instagram Reel style",
  "Vertical 9:16 format, stickman animation style, clean background, funny expressions, fast pacing, no complex camera movement, stickman running away from a giant glowing robot, Instagram Reel style",
  "Vertical 9:16 format, stickman animation style, clean background, funny expressions, fast pacing, no complex camera movement, stickman sleeping on a pile of books, Instagram Reel style"
];

export const captions = [
  "Relatable? Let me know in the comments 😂👇",
  "Tag a friend who does this exactly! 💀",
  "I feel personally attacked by this... 🤡",
  "If this isn't me I don't know what is. 🚀"
];

export const hashtagsList = [
  ["#codinglife", "#programmerhumor", "#devlife", "#techmemes", "#fivestuff"],
  ["#studentlife", "#examstress", "#relatable", "#collegememes", "#fivestuff"],
  ["#aitools", "#techhumor", "#ai", "#futuretech", "#fivestuff"]
];

// Helper to get random item
export const getRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
