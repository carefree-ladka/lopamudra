import type { ValentineConfig } from '../types';


const messages = [
  {
    title: "Hey Lopamudra... 🌹",
    message: "From the moment I met you, I knew you were different. Your smile lights up every room, and your laugh is the most beautiful sound I've ever heard. You're not just cool and funny—you're incredibly smart, kind, and you have this amazing way of making everyone around you feel special. I love how we can talk about books for hours and then switch to discussing the latest romcom we watched.",
  },
  {
    title: "What I Love About You 💫",
    message: "Lopamudra, you make me smile even on my worst days. Your sense of humor is infectious, and the way you understand me without me having to explain everything is magical. I love how passionate you get when talking about a book you've just finished, and how you cry at the same romcom scenes every time we watch them together. You're genuine, loving, and absolutely wonderful.",
  },
  {
    title: "Our Perfect Connection 💭",
    message: "We share so much, Lopamudra—our love for books, our appreciation for good stories, our ability to laugh together until our stomachs hurt. You get my jokes, you understand my thoughts, and somehow you always know exactly what to say. Whether we're discussing the latest novel we've read or debating which romcom couple is the cutest, every conversation with you feels like home.",
  },
  {
    title: "You Make Me Better 💕",
    message: "Lopamudra, you inspire me to be a better person every single day. Your kindness, your intelligence, your way of seeing the world—it all makes me want to grow and become someone worthy of your amazing heart. You make me laugh when I'm sad, you listen when I need to talk, and you understand me in ways I never thought possible.",
  },
  {
    title: "My Heart's Truth 🌟",
    message: "I love everything about you, Lopamudra. I love how you get excited about new book releases, how you quote your favorite movies, how you make even the simplest moments feel special. You're cool without trying, funny without forcing it, and loving in the most natural way. You've become such an important part of my life, and I can't imagine it without you.",
  },
  {
    title: "Our Beautiful Moments 💬",
    message: "Every moment we've shared has been precious, Lopamudra. From our book discussions to our movie marathons, from our inside jokes to our comfortable silences—each memory is a treasure. You make ordinary days extraordinary just by being yourself. Your presence in my life has brought so much joy, laughter, and love.",
  },
  {
    title: "This Valentine's Day 💝",
    message: "Lopamudra, I'm here with my heart wide open, asking you to be my Valentine. Not just for today, but for all the days to come. I want to share more books with you, watch more romcoms together, create more inside jokes, and build beautiful memories. You're amazing, and I'd be the luckiest person in the world if you'd be mine. Will you be my Valentine, Lopamudra? 🌹",
  }
];

const noButtonTexts = [
  "Let me think... 🌹",
  "Are you sure about this?",
  "Really? 🥺",
  "This is so sudden...",
  "I need more time, Lopamudra 💐",
  "You're so sweet though!",
  "Can I think about it? 😊",
  "You're amazing but...",
  "This is unexpected 🌹",
  "You're making me blush! 🙈",
  "I'm flattered 😊",
  "You're so thoughtful...",
  "This is really sweet 💕",
  "You put so much effort into this! 🌟",
  "I appreciate this so much 💝",
  "You're incredible 🌈",
  "This is beautiful 🥀",
  "You're so creative 💪",
  "This means a lot 🌍",
  "You're too good to me 🚶",
  "I'm touched by this ⏳",
  "You're wonderful 💯",
  "This is so romantic 🔄",
  "You're special 👫",
  "I'm speechless 🧭",
  "You have a beautiful heart 💘",
  "This is amazing 📝",
  "You're perfect 🧩",
  "You make me happy 💓",
  "Let me process this 🤔",
];

export const CONFIG: ValentineConfig = {
  colors: {
    background: "#0a0a0a",
    heartPrimary: "#ff0844",
    heartSecondary: "#ff6b9d",
    particleColor: "#ff1744",
    textGlow: "rgba(255, 8, 68, 0.8)",
  },
  text: {
    question: "Lopamudra... Will You Be My",
    valentine: "Valentine? 💝",
    yesButton: "Yes, I will! 💕",
    maybeButton: "Let me think... 🌹",
    noButtonTexts,
    successTitle: "🎉 You Just Made Me The Happiest Person Alive! 🎉",
    successMessages: [
      "Thank you for saying yes, Lopamudra! You've made my heart so full of joy 💕",
      "I promise to cherish every moment we share together ✨",
      "You're the most amazing person I know, and I'm so lucky 🌹",
      "I can't wait to create beautiful memories with you, Lopamudra 💖",
      "You've just made this the best Valentine's Day ever! 🙏",
    ],
    apologyReasons:[],
    compliments: messages.map((msg, index) => ({
      title: msg.title,
      message: msg.message,
      delay: index * 8000
    })),
  },
  animation: {
    heartbeatSpeed: 1.5,
    particleCount: 1000,
    confettiPieces: 400,
    messageDelay: 1000,
    complimentDuration: 56000,
  },
};
