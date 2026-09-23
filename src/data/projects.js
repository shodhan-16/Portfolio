// Engineering, cloud, and Python project data.
// github / demo left as empty strings until real links are supplied —
// components should hide the corresponding button when a value is falsy.

export const featuredProject = {
  slug: "smart-village",
  title: "Smart Village Management System",
  description:
    "A web-based platform designed to streamline citizen complaints, evidence submission, department routing, status tracking, and resolution management.",
  technologies: ["React", "Node.js", "MySQL", "JWT", "REST API"],
  image: "/images/projects/smart-village/smart-vilage-mangement.png",
  github: "",
  demo: "",
  category: "Engineering",
  status: "In Development",
};

export const cloudServices = [
  { name: "EC2", description: "Virtual compute instances" },
  { name: "S3", description: "Object storage" },
  { name: "IAM", description: "Identity & access management" },
  { name: "VPC", description: "Isolated network environments" },
  { name: "Lambda", description: "Serverless functions" },
];

export const cloudProjects = [
  {
    slug: "cloud-lab-static-hosting",
    title: "Static Site on S3 + CloudFront",
    problem:
      "Wanted hands-on practice hosting and distributing a static site the way production frontends are actually deployed.",
    architecture: "User → CloudFront → S3",
    services: ["S3", "CloudFront", "IAM"],
    implemented: [
      "Configured an S3 bucket for static website hosting",
      "Set up IAM policies scoped to the bucket",
      "Explored CloudFront distribution basics",
    ],
    learned:
      "How origin access, caching, and bucket policies fit together in a real content-delivery setup.",
    github: "",
    demo: "",
    status: "Concept",
  },
  {
    slug: "cloud-lab-ec2-deployment",
    title: "EC2 Application Deployment Lab",
    problem:
      "Practicing how a backend application actually runs on a cloud virtual machine instead of a local machine.",
    architecture: "User → EC2 → Application → Database",
    services: ["EC2", "VPC", "IAM"],
    implemented: [
      "Launched and configured an EC2 instance",
      "Set up security groups and basic VPC networking",
      "Deployed a small application for testing",
    ],
    learned:
      "The basics of compute provisioning, networking boundaries, and access control on AWS.",
    github: "",
    demo: "",
    status: "In Progress",
  },
];

export const smartVillageCaseStudy = {
  title: "Smart Village Management System",
  subtitle: "In Development",
  architecture: "User → Frontend → REST API → Authentication → Backend → MySQL",
  video: {
    src: "/videos/smart-village-video.mp4",
    title: "Smart Village demo video",
    label: "Project walkthrough video",
  },
  sections: [
    {
      number: "01",
      title: "Overview",
      body: "Smart Village is a web-based platform built to streamline how citizens report issues and how local departments manage them — covering complaint submission, evidence upload, routing, and resolution tracking in one system.",
    },
    {
      number: "02",
      title: "Problem",
      body: "Local civic issues are often reported informally, with no structured way to track status, assign responsibility, or confirm resolution. This makes it hard for both citizens and departments to follow up on what's actually being done.",
    },
    {
      number: "03",
      title: "Solution",
      body: "A structured platform where citizens can log complaints with supporting evidence, have them routed to the right department, and follow progress through clear status states — from submission to resolution.",
    },
    {
      number: "04",
      title: "System Architecture",
      body: "The system follows a standard layered architecture: a React frontend communicates with a REST API, requests pass through an authentication layer, then reach a Node.js backend that reads and writes to a MySQL database.",
      diagram: true,
    },
    {
      number: "05",
      title: "Features",
      body: "",
      list: [
        { label: "User authentication", status: "Completed" },
        { label: "Complaint creation", status: "Completed" },
        { label: "Evidence image upload", status: "Completed" },
        { label: "GPS / location information", status: "In Development" },
        { label: "Complaint categorization", status: "Completed" },
        { label: "Department routing", status: "In Development" },
        { label: "Status tracking", status: "Completed" },
        { label: "Resolution confirmation", status: "Planned" },
        { label: "Notifications", status: "Planned" },
      ],
    },
    {
      number: "06",
      title: "Authentication & Security",
      body: "User sessions are handled with JWT-based authentication, with route-level authorization checks to make sure only the right users and departments can access or modify a given complaint. Input validation is applied on submission forms to reduce malformed or unsafe data.",
    },
    {
      number: "07",
      title: "Database Design",
      body: "MySQL stores users, complaints, categories, and department mappings as related tables, with foreign keys connecting complaints to the citizen who filed them and the department responsible for resolving them.",
    },
    {
      number: "08",
      title: "Technical Challenges",
      body: "Designing a routing structure that maps complaint categories to the right department, and handling image evidence uploads reliably, were the two hardest parts of the build so far.",
    },
    {
      number: "09",
      title: "Implementation",
      body: "Built incrementally: authentication and the complaint data model first, then the submission flow and evidence upload, with status tracking and department routing layered on top.",
    },
    {
      number: "10",
      title: "Result",
      body: "A working core flow — a citizen can register, log in, and submit a categorized complaint with evidence, which is stored and tracked through the system. Department routing and notifications are still being built out.",
    },
    {
      number: "11",
      title: "What I Learned",
      body: "Hands-on experience designing a relational schema for a real workflow, implementing JWT authentication end-to-end, and structuring a REST API around a multi-role system (citizens vs. departments).",
    },
  ],
};

export const pythonProjects = [
  {
    slug: "calculator",
    title: "Calculator",
    description: "A command-line calculator built to practice functions, input handling, and control flow.",
    status: "Completed",
  },
  {
    slug: "atm-simulation",
    title: "ATM Simulation",
    description: "A simulated ATM system covering balance checks, deposits, withdrawals, and basic validation logic.",
    status: "Completed",
  },
  {
    slug: "calendar-system",
    title: "Calendar System",
    description: "A small program for generating and navigating calendar data, used to practice date logic.",
    status: "Completed",
  },
];
