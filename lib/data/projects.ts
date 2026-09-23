import { Project } from "@/types";

export const projects: Project[] = [
// {
//   slug: "secondbrain-ai",
//   name: "SecondBrain AI",
//   tagline:
//     "An AI-powered personal knowledge management platform that transforms scattered information into a searchable second brain.",

//   overview:
//     "SecondBrain AI is a modern personal knowledge management platform that helps users collect, organize, and interact with their information through artificial intelligence. Users can save notes, PDFs, web pages, images, bookmarks, and other resources in one centralized workspace. Every piece of content is automatically processed using AI to generate summaries, meaningful tags, semantic embeddings, and searchable metadata, allowing users to retrieve information naturally instead of relying on folders or filenames.",

//   problem:
//     "People consume information from dozens of different sources every day, but existing note-taking applications still rely heavily on manual organization. As knowledge grows, finding relevant information becomes increasingly difficult because users must remember where something was saved or which keywords were used. Traditional search often fails when users cannot recall the exact wording of their notes.",

//   solution:
//     "I designed SecondBrain AI as an AI-first knowledge management system where organization happens automatically. Every uploaded resource is analyzed using large language models to generate summaries, extract keywords, create semantic embeddings, and classify content into collections. Instead of searching with exact text, users can ask natural language questions, and a Retrieval-Augmented Generation (RAG) pipeline retrieves the most relevant documents from their personal knowledge base before generating accurate, source-backed answers.",

//   features: [
//     "Rich text note editor with autosave, markdown support, favorites, archive, and trash management.",
//     "Upload and process PDFs, images, websites, text files, and bookmarks with automatic AI-generated summaries and tags.",
//     "Semantic search powered by pgvector embeddings that understands user intent instead of relying on exact keyword matching.",
//     "AI chat assistant built with Retrieval-Augmented Generation (RAG) that answers questions using only the user's saved knowledge while providing source citations.",
//     "Organize knowledge using collections, intelligent categorization, authentication, and a modern dashboard displaying recent activity, storage usage, and AI usage statistics.",
//   ],

//   challenges: [
//     {
//       challenge:
//         "Performing semantic search across thousands of documents while maintaining fast response times and relevant search results.",
//       solution:
//         "Integrated PostgreSQL with pgvector to store document embeddings and implemented vector similarity search, allowing natural language queries to retrieve contextually related documents without depending on exact keyword matches.",
//     },
//     {
//       challenge:
//         "Generating trustworthy AI responses without allowing hallucinations or unrelated information to appear in answers.",
//       solution:
//         "Built a Retrieval-Augmented Generation (RAG) workflow that first retrieves the most relevant documents from the user's own knowledge base before passing only that context to the language model, ensuring responses remain grounded in user-owned data.",
//     },
//     {
//       challenge:
//         "Processing uploaded content such as PDFs, images, websites, and notes through a unified AI pipeline while maintaining a consistent user experience.",
//       solution:
//         "Designed a modular ingestion pipeline that extracts content from multiple source types, generates summaries, embeddings, metadata, and tags, then stores everything in a standardized format for search, retrieval, and future AI processing.",
//     },
//   ],

//   stack: [
//     "Next.js 15",
//     "React",
//     "TypeScript",
//     "PostgreSQL",
//     "Prisma",
//     "pgvector",
//     "Better Auth",
//     "OpenAI",
//     "Tailwind CSS",
//     "shadcn/ui",
//     "TipTap",
//     "Zod",
//     "React Hook Form",
//   ],

//   role:
//     "Solo Developer — Product Design, System Architecture, Frontend Development, Backend Development, Database Design, and AI Integration",

//   year: "2026",

//   status: "flagship",

//   github: "https://github.com/anzalnakainat/secondbrain-ai",

//   demo: "https://secondbrain-ai.vercel.app",

//   accent: "blue",
// },

// {
//   slug: "feature-flag-management-system",

//   name: "Feature Flag Management System",

//   tagline:
//     "A production-inspired platform for safely rolling out, targeting, and managing application features without redeployment.",

//   overview:
//     "The Feature Flag Management System is an enterprise-style platform that enables development teams to release features safely without deploying new code. It provides a centralized dashboard where administrators can create, configure, and monitor feature flags, define rollout strategies, target specific user segments, and instantly enable or disable functionality across environments. Inspired by modern feature management platforms, the application demonstrates how organizations progressively deliver software while minimizing deployment risk.",

//   problem:
//     "Modern software teams deploy continuously, but releasing unfinished or risky features to every user at once can introduce bugs, poor user experiences, and difficult rollbacks. Hardcoded feature toggles require new deployments for every change, making experimentation, staged rollouts, and emergency feature disabling both slow and error-prone.",

//   solution:
//     "I built a centralized feature management platform that separates feature releases from application deployments. Administrators can create feature flags, configure rollout percentages, define targeting rules based on user attributes, and manage different deployment environments from a single dashboard. The backend evaluates each request in real time, allowing features to be enabled, disabled, or gradually rolled out without modifying application code.",

//   features: [
//     "Complete feature flag lifecycle including creation, editing, deletion, activation, and deactivation.",
//     "Percentage-based progressive rollouts for gradually releasing new features to selected users.",
//     "Advanced targeting rules based on user role, country, browser, environment, and custom attributes.",
//     "Analytics dashboard displaying feature usage, rollout statistics, evaluation counts, and recent activity.",
//     "Role-based administration with secure authentication, environment management, and audit-ready flag configuration.",
//   ],

//   challenges: [
//     {
//       challenge:
//         "Ensuring feature evaluations remain consistent while supporting percentage rollouts across thousands of users.",
//       solution:
//         "Implemented deterministic hashing based on unique user identifiers, guaranteeing that users consistently receive the same feature experience while respecting rollout percentages.",
//     },
//     {
//       challenge:
//         "Building a flexible rule engine capable of evaluating multiple targeting conditions without hardcoding business logic.",
//       solution:
//         "Designed a modular rule evaluation engine that combines user attributes, environments, rollout percentages, and conditional operators into reusable evaluation pipelines.",
//     },
//     {
//       challenge:
//         "Allowing administrators to modify production feature configurations without requiring application redeployment.",
//       solution:
//         "Separated feature configuration from application logic through REST APIs backed by Spring Boot and PostgreSQL, enabling real-time updates that applications consume dynamically.",
//     },
//   ],

//   stack: [
//     "React",
//     "TypeScript",
//     "Java",
//     "Spring Boot",
//     "Spring Security",
//     "PostgreSQL",
//     "Spring Data JPA",
//     "Docker",
//     "Tailwind CSS",
//   ],

//   role:
//     "Solo Developer — System Design, Frontend Development, Backend Development, Database Design, API Development, and Deployment",

//   year: "2026",

//   status: "flagship",

//   github: "https://github.com/anzalnakainat/feature-flag-management-system",

//   demo: "https://feature-flags.vercel.app",

//   accent: "amber",
// },

{
  slug: "collaborative-livedocs",

  name: "Collaborative LiveDocs",

  tagline:
    "A real-time collaborative document editor that enables teams to write, review, and discuss documents together.",

  overview:
    "Collaborative LiveDocs is a modern document management and collaboration platform that allows multiple users to work on the same document simultaneously. Built with real-time synchronization, presence awareness, and a rich text editing experience, the platform enables teams to create, edit, share, and discuss documents without refreshing the page. Users can collaborate seamlessly through live cursors, threaded comments, document sharing, and activity notifications.",

  problem:
    "Traditional document editors often struggle with real-time collaboration, leading to conflicting edits, outdated document versions, and disconnected communication. Teams need a workspace where multiple users can contribute simultaneously while maintaining document consistency and clear collaboration workflows.",

  solution:
    "I developed a collaborative editing platform powered by Liveblocks and the Lexical Editor to provide instant synchronization between connected users. The application supports secure authentication, live presence indicators, threaded discussions, document sharing, and real-time notifications, allowing teams to collaborate naturally without worrying about version conflicts or manual refreshes.",

  features: [
    "Real-time collaborative editing with instant document synchronization across multiple connected users.",
    "Rich text document editor supporting formatting, document creation, updates, and deletion.",
    "Live collaborator presence with active cursors, avatars, and online status indicators.",
    "Threaded comments and discussion system for contextual document feedback and collaboration.",
    "Secure document sharing, authentication, collaborator invitations, and real-time activity notifications.",
  ],

  challenges: [
    {
      challenge:
        "Synchronizing document changes between multiple users while maintaining a smooth editing experience.",
      solution:
        "Leveraged Liveblocks' real-time collaboration infrastructure together with Lexical Editor to synchronize document state instantly, allowing multiple users to edit simultaneously without manual refreshes.",
    },
    {
      challenge:
        "Keeping collaboration features such as comments, presence indicators, and notifications synchronized without affecting editor performance.",
      solution:
        "Separated collaborative presence, document editing, and notification events into independent real-time channels, ensuring UI responsiveness while reducing unnecessary client updates.",
    },
    {
      challenge:
        "Managing secure document sharing while restricting access to authorized collaborators.",
      solution:
        "Integrated Clerk authentication with role-based document permissions, allowing users to securely invite collaborators via email while protecting private documents.",
    },
  ],

  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Liveblocks",
    "Lexical Editor",
    "Clerk",
    "Tailwind CSS",
    "shadcn/ui",
  ],

  role:
    "Solo Developer — Frontend Development, Real-time Collaboration, Authentication, and UI/UX Implementation",

  year: "2026",

  status: "shipped",

  github: "https://github.com/anzalnakainat/collaborative-livedocs",

  demo: "https://livedocs.vercel.app",

  accent: "green",
},

{
  slug: "fullstack-blog-platform",

  name: "Full-Stack Blog Platform",

  tagline:
    "A modern publishing platform with a rich writing experience, secure authentication, and an optimized reading experience.",

  overview:
    "The Full-Stack Blog Platform is a production-ready content management system that enables users to create, manage, and publish articles through an intuitive dashboard. It provides a distraction-free writing experience, secure authentication, category and tag management, draft support, and a fast, SEO-friendly public website. Designed with performance and scalability in mind, the platform delivers an enjoyable experience for both content creators and readers.",

  problem:
    "Many blogging platforms either prioritize flexibility at the cost of complexity or focus on simplicity while sacrificing customization and performance. Writers need a platform that combines an intuitive authoring experience with fast content delivery, secure user management, and modern publishing workflows.",

  solution:
    "I built a full-stack blogging platform using Next.js and PostgreSQL, providing authenticated content management alongside a highly optimized public-facing website. Authors can write, edit, organize, and publish articles through a clean dashboard, while readers benefit from responsive layouts, search functionality, categorized content, and SEO-friendly pages that load quickly across devices.",

  features: [
    "Secure authentication with protected dashboard for managing blog content.",
    "Rich text editor supporting article creation, editing, drafts, and publishing workflows.",
    "Category and tag management with full-text search for discovering relevant content.",
    "SEO-optimized blog pages featuring reading time estimation, metadata generation, and responsive layouts.",
    "Modern admin dashboard for managing posts, categories, and publishing status from a single interface.",
  ],

  challenges: [
    {
      challenge:
        "Balancing an intuitive writing experience with fast page performance for readers.",
      solution:
        "Separated the content management interface from the public website, allowing authors to access powerful editing tools while delivering lightweight, optimized pages to visitors.",
    },
    {
      challenge:
        "Designing a scalable content model capable of supporting drafts, published posts, categories, and future platform growth.",
      solution:
        "Created a normalized PostgreSQL schema with Prisma ORM to efficiently manage relationships between posts, users, categories, and metadata while maintaining clean, type-safe database access.",
    },
    {
      challenge:
        "Providing a consistent user experience across the dashboard and public website.",
      solution:
        "Developed reusable UI components and shared design patterns using Tailwind CSS, ensuring visual consistency, responsiveness, and maintainable frontend architecture.",
    },
  ],

  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Better Auth",
    "Tailwind CSS",
    "shadcn/ui",
  ],

  role:
    "Solo Developer — Product Design, Full-Stack Development, Database Design, Authentication, and Deployment",

  year: "2026",

  status: "shipped",

  github: "https://github.com/anzalnakainat/fullstack-blog-platform",

  demo: "https://blog-platform.vercel.app",

  accent: "rose",
},
  {
  slug: "job-tracker",

  name: "Job Tracker",

  tagline:
    "A modern job application tracking dashboard designed to organize applications, visualize progress, and simplify the job search process.",

  overview:
    "Job Tracker is a responsive frontend application that helps job seekers manage their entire application pipeline through an intuitive dashboard experience. Instead of relying on spreadsheets, users can organize applications, monitor progress, filter opportunities, and visualize key metrics through interactive charts. The application focuses on clean UI architecture, reusable components, efficient state management, and a modern user experience inspired by products such as Linear, Notion, and Stripe Dashboard.",

  problem:
    "Managing dozens of job applications using spreadsheets quickly becomes difficult as opportunities, interview schedules, notes, and application statuses continue to grow. Users need a centralized interface that provides better organization, filtering, and visual insights into their job search.",

  solution:
    "I designed and developed a modern dashboard interface that centralizes every stage of the job search. Using Redux Toolkit for global state management and a modular React architecture, the application provides responsive job management, advanced filtering, analytics dashboards, and reusable UI components that create a fast and scalable frontend experience.",

  features: [
    "Interactive dashboard displaying application statistics, recent activity, and visual progress summaries.",
    "Complete job management interface with create, edit, delete, search, filter, and status tracking capabilities.",
    "Analytics dashboard built with Recharts to visualize application trends, interview ratios, and status distributions.",
    "Responsive dashboard layout featuring reusable components, animated interactions, and mobile-first design.",
    "Scalable frontend architecture using Redux Toolkit, React Router, Axios, and reusable UI patterns.",
  ],

  challenges: [
    {
      challenge:
        "Managing shared application state across multiple dashboard pages while keeping components reusable and maintainable.",
      solution:
        "Structured the application using Redux Toolkit slices with centralized state management, asynchronous actions, and reusable selectors to simplify data flow throughout the application.",
    },
    {
      challenge:
        "Creating a dashboard that remained responsive and easy to navigate across desktop, tablet, and mobile devices.",
      solution:
        "Designed a mobile-first layout using Tailwind CSS with responsive grids, adaptive navigation, reusable cards, and consistent spacing to provide an optimal experience across all screen sizes.",
    },
    {
      challenge:
        "Presenting job search data in a meaningful way without overwhelming users with unnecessary information.",
      solution:
        "Built interactive charts and summary cards using Recharts, allowing users to quickly understand application trends, interview performance, and overall job search progress.",
    },
  ],

  stack: [
    "React",
    "JavaScript",
    "Redux Toolkit",
    "React Router",
    "Tailwind CSS",
    "Axios",
    "Framer Motion",
    "React Hot Toast",
    "Recharts",
    "Lucide React",
  ],

  role:
    "Frontend Developer — UI Architecture, State Management, Dashboard Design, Responsive Development, and Data Visualization",

  year: "2025",

  status: "shipped",

  github: "https://github.com/anzalnakainat/job-tracker",

  demo: "https://job-tracker.vercel.app",

  accent: "amber",
},
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
