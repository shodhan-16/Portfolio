// Skill levels are intentionally qualitative — no invented percentages.
// "learning"     -> actively studying, early hands-on
// "practicing"   -> comfortable using it, still building depth
// "project"      -> has shipped project work using it

export const skillCategories = [
  {
    id: "cloud",
    label: "Cloud",
    accent: "cyan",
    skills: [
      { name: "AWS", level: "learning" },
      { name: "EC2", level: "learning" },
      { name: "S3", level: "learning" },
      { name: "IAM", level: "learning" },
      { name: "VPC", level: "learning" },
      { name: "Lambda", level: "learning" },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    accent: "cyan",
    skills: [
      { name: "Python", level: "practicing" },
      { name: "JavaScript fundamentals", level: "practicing" },
      { name: "HTML", level: "project" },
      { name: "CSS", level: "project" },
    ],
  },
  {
    id: "database",
    label: "Database",
    accent: "cyan",
    skills: [
      { name: "MySQL", level: "practicing" },
      { name: "SQL", level: "practicing" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    accent: "cyan",
    skills: [
      { name: "Git", level: "practicing" },
      { name: "GitHub", level: "practicing" },
      { name: "Linux", level: "learning" },
      { name: "VS Code", level: "project" },
    ],
  },
  {
    id: "security",
    label: "Security",
    accent: "cyan",
    skills: [
      { name: "JWT", level: "project" },
      { name: "Authentication", level: "project" },
      { name: "Authorization", level: "project" },
      { name: "Input Validation", level: "practicing" },
    ],
  },
  {
    id: "creative",
    label: "Creative",
    accent: "brass",
    skills: [
      { name: "Video Editing", level: "project" },
      { name: "Visual Storytelling", level: "project" },
      { name: "Brand Presentation", level: "project" },
      { name: "UI/UX Exploration", level: "practicing" },
    ],
  },
];

export const levelLabels = {
  learning: "Learning",
  practicing: "Practicing",
  project: "Project Experience",
};
