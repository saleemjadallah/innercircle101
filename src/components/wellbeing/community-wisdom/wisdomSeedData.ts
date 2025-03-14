
import { WisdomItem } from "@/types/community-wisdom";
import { v4 as uuidv4 } from 'uuid';

// Helper function to generate a random date within the last month
const getRandomRecentDate = () => {
  const now = new Date();
  const pastDate = new Date(now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000);
  return pastDate.toISOString();
};

// Helper function to generate a random number of helpful votes
const getRandomHelpfulCount = () => Math.floor(Math.random() * 50);

export const generateSeedWisdom = (): WisdomItem[] => {
  return [
    {
      id: uuidv4(),
      content: "I schedule 'recovery time' after social events. For every hour of social interaction, I give myself at least 30 minutes of solitude afterward to recharge. This has dramatically improved my ability to enjoy social gatherings without dreading them.",
      category: "practical-strategies",
      situation: "social",
      energyLevel: "medium",
      tags: ["boundaries", "recharging", "planning"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [
        {
          id: uuidv4(),
          text: "I've started doing this too and it makes such a difference!",
          dateSubmitted: getRandomRecentDate(),
        }
      ],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "At work meetings, I prepare notes beforehand with points I want to make. This helps me contribute without having to think on the spot, which I find draining. My colleagues now appreciate my thoughtful insights.",
      category: "practical-strategies",
      situation: "work",
      energyLevel: "low",
      tags: ["meetings", "preparation", "speaking"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "I use the 'arrival technique' at parties: I arrive slightly early, help the host with setup, and get comfortable in the space before it fills with people. This gives me a sense of purpose and eases my social anxiety.",
      category: "coping-techniques",
      situation: "social",
      energyLevel: "medium",
      tags: ["anxiety", "parties", "arrival"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "When I need to decline an invitation, I pair it with an alternative suggestion. 'I can't make dinner Friday, but would love to have coffee next Tuesday.' This preserves the relationship while respecting my need for space.",
      category: "coping-techniques",
      situation: "social",
      energyLevel: "low",
      tags: ["boundaries", "declining", "alternatives"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "I created a 'social energy budget' for each week. I allocate 'tokens' to different activities based on how draining they are, and when I'm out of tokens, I allow myself to say no without guilt.",
      category: "personal-insights",
      situation: "daily-life",
      energyLevel: "low",
      tags: ["boundaries", "planning", "guilt-free"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "After years of self-judgment, I've realized my introversion is a strength in my analytical role. While my extraverted colleagues excel at brainstorming, I shine in deep problem-solving and identifying issues others miss.",
      category: "personal-insights",
      situation: "work",
      energyLevel: "medium",
      tags: ["self-acceptance", "strengths", "career"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "I turned my introversion into a career advantage by specializing in detailed financial analysis. My ability to work independently and focus deeply for hours has helped me advance faster than many of my more extraverted peers.",
      category: "success-stories",
      situation: "work",
      energyLevel: "high",
      tags: ["career", "focus", "strengths"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "I connect with my extended family through a shared digital photo album instead of frequent calls. I contribute thoughtful comments on their photos, which they appreciate more than forced conversations.",
      category: "success-stories",
      situation: "family",
      energyLevel: "low",
      tags: ["family", "digital", "connection"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "The book 'Quiet: The Power of Introverts in a World That Can't Stop Talking' by Susan Cain completely changed how I view myself. It's full of strategies for navigating an extrovert-centric world.",
      category: "resources",
      situation: "daily-life",
      energyLevel: "low",
      tags: ["books", "self-understanding", "advocacy"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "The '5-minute rule' has saved me in countless social situations. I promise myself I only need to engage actively for 5 minutes, then I can take a break. Often, I get comfortable and continue longer naturally.",
      category: "practical-strategies",
      situation: "social",
      energyLevel: "medium",
      tags: ["anxiety", "small-talk", "pacing"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "As a teacher, I schedule 'reflection breaks' between classes. Even 5 minutes of alone time helps me reset before dealing with another room full of students.",
      category: "practical-strategies",
      situation: "work",
      energyLevel: "high",
      tags: ["teaching", "breaks", "recharging"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "I found a volunteer role doing trail maintenance. It lets me contribute to my community while working mostly independently in nature - perfect for recharging my introvert batteries while still feeling connected.",
      category: "success-stories",
      situation: "social",
      energyLevel: "medium",
      tags: ["volunteering", "nature", "balance"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "The podcast 'The Introvert Entrepreneur' has fantastic advice for building a business that works with your introvert strengths rather than fighting against your nature.",
      category: "resources",
      situation: "work",
      energyLevel: "low",
      tags: ["podcasts", "business", "strengths"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "In group projects, I've learned to take on the research or writing roles that play to my strengths, rather than forcing myself into presentation roles that drain me completely.",
      category: "personal-insights",
      situation: "education",
      energyLevel: "medium",
      tags: ["teamwork", "strengths", "boundaries"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
    {
      id: uuidv4(),
      content: "The 'virtual first, in-person second' approach has transformed my networking. I connect with people online initially, then meet in person once there's already a foundation. This removes the awkward small talk phase.",
      category: "practical-strategies",
      situation: "work",
      energyLevel: "medium",
      tags: ["networking", "digital", "relationships"],
      helpfulCount: getRandomHelpfulCount(),
      comments: [],
      dateSubmitted: getRandomRecentDate(),
    },
  ];
};
