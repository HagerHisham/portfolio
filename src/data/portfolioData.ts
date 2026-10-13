import { PersonalInfo, SkillCategory, Project, ExperienceItem, ServiceItem } from '../types/portfolio'

/**
 * =========================================================================
 * PERSONAL PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * You can customize and update all your portfolio information directly in
 * this file without needing to modify any UI components.
 */

export const personalInfo: PersonalInfo = {
  name: "Hager Hesham",
  title: "Computer Science Student | AI & Software Developer",
  university: "Helwan University",
  faculty: "Faculty of Computers and Artificial Intelligence",
  gpa: 3.45,
  maxGpa: 4.0,
  graduationYear: 2027,
  introduction:
    "I'm a Computer Science student interested in Artificial Intelligence, Machine Learning, and Software Development. I enjoy learning new technologies, solving problems, and building practical solutions. I'm continuously developing my technical skills through training programs, projects, and collaborative experiences.",
  location: "Cairo, Egypt",
  // EDIT HERE: Replace with your actual email address
  email: "hager.abdellah.dev@example.com",
  linkedin: "https://www.linkedin.com/in/hagar-abdellah/",
  // EDIT HERE: Replace with your actual GitHub username / URL
  github: "https://github.com/HagerHesham",
  resumeUrl: "#contact", // or path to your /resume.pdf
  statusMessage: "Open for 2026/2027 internships, junior AI/software roles, and collaborative projects."
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core languages used across academic and technical projects.",
    icon: "Code2",
    skills: [
      { name: "Python", detail: "Data analysis, machine learning pipelines, and scripting" },
      { name: "Java", detail: "Object-oriented backend design, Spring framework" },
      { name: "C", detail: "Systems understanding, foundational algorithms, memory concepts" },
      { name: "JavaScript", detail: "Client-side interactivity and web development" },
      { name: "HTML & CSS", detail: "Semantic page structure and responsive styling" },
    ]
  },
  {
    id: "software-dev",
    title: "Software Development",
    description: "Architectural patterns and backend engineering methodologies.",
    icon: "Layers",
    skills: [
      { name: "Spring Boot", detail: "RESTful microservices, Spring Data JPA, dependency injection" },
      { name: "REST API Development", detail: "CRUD endpoints, request validation, error handling" },
      { name: "Object-Oriented Programming", detail: "Layered architecture, design principles, modularity" },
      { name: "Data Structures & Algorithms", detail: "Algorithmic problem solving and complexity analysis" },
      { name: "Microservices Fundamentals", detail: "Decoupled architecture, service communication concepts" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Environments, containerization, databases, and version control.",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", detail: "Branching strategies, pull requests, collaborative workflows" },
      { name: "Docker & Docker Compose", detail: "Containerizing services and multi-container environments" },
      { name: "PostgreSQL", detail: "Relational database schema, relational queries, indexing" },
      { name: "AWS", detail: "Cloud fundamentals and AWS ECS deployment configurations" }
    ]
  },
  {
    id: "ai-data",
    title: "AI & Data Science",
    description: "Machine learning, modern generative AI, and agentic workflows.",
    icon: "BrainCircuit",
    skills: [
      { name: "Machine Learning", detail: "Supervised classification, feature engineering, evaluation" },
      { name: "Data Science", detail: "Data exploration, statistical preprocessing, data wrangling" },
      { name: "Generative AI", detail: "Prompt techniques, generative model architectures" },
      { name: "Large Language Models (LLMs)", detail: "Foundational LLM concepts and prompt structuring" },
      { name: "Agentic AI", detail: "Autonomous agent workflows, task orchestration concepts" }
    ]
  }
]

export const projects: Project[] = [
  {
    id: "gotrack",
    title: "GoTrack — Logistics Management Platform",
    subtitle: "Microservices-Based Enterprise Logistics Platform",
    category: "Software & Backend",
    shortDescription:
      "A collaborative logistics management platform engineered using a microservices architecture to manage logistics operations, branches, and user roles.",
    fullDescription:
      "GoTrack is an end-to-end logistics platform developed collaboratively by a team of university developers. I designed and implemented the User & Branch microservice using Java, Spring Boot, and PostgreSQL. The service delivers enterprise-grade REST APIs supporting profile and branch operations, soft deletion, role-based access control, and dynamic multi-criteria search.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JPA Specifications",
      "Docker Compose",
      "AWS ECS",
      "REST APIs",
      "Git"
    ],
    keyContributions: [
      "Designed and implemented the standalone User & Branch microservice following layered architecture principles.",
      "Developed robust REST APIs for profile and branch management, complete with CRUD operations and validation.",
      "Implemented Role-Based Access Control (RBAC) ensuring secure authorization per endpoint.",
      "Built soft-deletion mechanisms to preserve audit histories without data corruption.",
      "Engineered paginated dynamic search queries utilizing Spring Data JPA Specifications.",
      "Configured multi-service containerization with Docker Compose and prepared deployment configs for AWS ECS.",
      "Collaborated smoothly with team members via structured Git workflows and code reviews."
    ],
    architectureHighlights: [
      "Controller-Service-Repository layered architecture",
      "Decoupled User & Branch domain logic",
      "Spring Data JPA dynamic predicate builders",
      "Dockerized microservice environment"
    ],
    githubUrl: "https://github.com/HelwanDevs/GoTrack-Logistic-System",
    demoUrl: undefined,
    isPlaceholderLinks: false,
    graphicType: "gotrack"
  },
  {
    id: "nlp-search-engine",
    title: "NLP Search Engine",
    subtitle: "Information Retrieval & Semantic Text Processing",
    category: "AI & ML",
    shortDescription:
      "An academic Natural Language Processing project focusing on text search, document indexing, and retrieval using TF-IDF and recurrent neural network approaches.",
    fullDescription:
      "An academic NLP project exploring information retrieval principles and semantic text matching. The system indexes document corpora and computes document relevance utilizing TF-IDF vectorization alongside an RNN-based sequence representation approach to evaluate retrieval precision against query queries.",
    technologies: [
      "Python",
      "NLP",
      "TF-IDF",
      "RNN (Recurrent Neural Networks)",
      "Text Preprocessing",
      "Information Retrieval"
    ],
    keyContributions: [
      "Preprocessed textual corpora through tokenization, stop-word removal, and normalization.",
      "Constructed a TF-IDF vector space model for document indexing and frequency weighting.",
      "Explored an RNN-based sequence model to capture semantic context beyond keyword matching.",
      "Evaluated retrieval effectiveness and ranking across test queries."
    ],
    academicDetails: {
      problem: "Text search, document indexing, and semantic ranking in corpus retrieval.",
      dataset: "[Add dataset name or corpus source, e.g., Academic text dataset]",
      preprocessing: "Tokenization, lowercasing, stop-word filtering, text normalization.",
      modelArchitecture: "TF-IDF vector space model alongside RNN-based sequential representation.",
      evaluationMetrics: "[Add evaluation metrics, e.g., Mean Average Precision, Precision@K]",
      results: "[Add exact experimental results or accuracy when available]",
      isPendingUserSpecs: true
    },
    githubUrl: undefined, // PLACEHOLDER: Hager will insert repository link
    demoUrl: undefined,
    isPlaceholderLinks: true,
    placeholderNote: "Academic project under final documentation — repository link and detailed evaluation benchmarks to be added.",
    graphicType: "nlp"
  },
  {
    id: "ml-classification",
    title: "Machine Learning Classification",
    subtitle: "Supervised Learning & Predictive Modeling",
    category: "AI & ML",
    shortDescription:
      "An academic classification project encompassing structured data exploration, feature preprocessing, model training, and performance validation.",
    fullDescription:
      "An academic machine learning project built to explore end-to-end classification pipelines. The work covers raw data exploration, outlier handling, feature scaling, model selection, hyperparameter tuning, and cross-validated evaluation on structured problem domains.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Model Evaluation"
    ],
    keyContributions: [
      "Conducted exploratory data analysis (EDA) to inspect class distributions and correlations.",
      "Designed preprocessing pipelines including handling missing values, encoding, and feature scaling.",
      "Trained and compared classification algorithms to assess bias-variance tradeoffs.",
      "Employed classification metrics including confusion matrices, precision, recall, and F1-score."
    ],
    academicDetails: {
      problem: "Supervised classification on tabular feature dataset.",
      dataset: "[Add dataset name / source]",
      preprocessing: "Data cleaning, feature scaling/normalization, categorical encoding, train-test split.",
      modelArchitecture: "[Add specific classifier model, e.g., Logistic Regression / Random Forest / SVM]",
      evaluationMetrics: "[Add evaluation metrics, e.g., Precision, Recall, F1-Score, AUC-ROC]",
      results: "[Add verified test accuracy and validation scores]",
      isPendingUserSpecs: true
    },
    githubUrl: undefined, // PLACEHOLDER: Hager will insert repository link
    demoUrl: undefined,
    isPlaceholderLinks: true,
    placeholderNote: "Academic classification pipeline — update with your specific dataset and metric results.",
    graphicType: "ml-classification"
  },
  {
    id: "courses-website",
    title: "Courses Educational Website",
    subtitle: "Responsive Educational & Course Browsing Interface",
    category: "Web",
    shortDescription:
      "A frontend web application designed with clean HTML, CSS, and vanilla JavaScript for browsing and exploring educational course offerings.",
    fullDescription:
      "A responsive website developed using foundational web standards (HTML5, CSS3, and JavaScript). Focused on clean semantic markup, intuitive navigation hierarchies, course catalog views, interactive filtering, and mobile-friendly layouts.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Responsive Web Design",
      "DOM Manipulation"
    ],
    keyContributions: [
      "Developed semantic HTML structure and CSS styling for course catalogs.",
      "Implemented responsive layouts ensuring smooth viewing across mobile, tablet, and desktop viewports.",
      "Built client-side JavaScript interactivity for dynamic filtering and navigation elements.",
      "Optimized page accessibility and styling consistency without heavy external libraries."
    ],
    githubUrl: undefined, // PLACEHOLDER: Hager will insert repository or live URL
    demoUrl: undefined,
    isPlaceholderLinks: true,
    placeholderNote: "Frontend course portal — insert your repository link or live demo URL here.",
    graphicType: "courses"
  }
]

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "gci-tokyo",
    title: "GCI Global Program 2026 Trainee",
    organization: "Matsuo-Iwasawa Laboratory, The University of Tokyo",
    subOrganization: "Fully Funded International Program",
    period: "September 2026 – Present",
    isOngoing: true,
    statusBadge: "Selected · In Progress",
    type: "Global Program",
    highlights: [
      "Selected for a highly competitive, fully funded international program conducted by the renowned Matsuo-Iwasawa Laboratory.",
      "Immersed in advanced studies across Data Science, Machine Learning, and Applied Artificial Intelligence.",
      "Engaging with cutting-edge academic methodologies, algorithmic problem solving, and research-grade ML workflows."
    ],
    skillsApplied: ["Data Science", "Machine Learning", "Applied AI", "Scientific Computing"]
  },
  {
    id: "depi-trainee",
    title: "Agentic & Generative AI Trainee",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    subOrganization: "Ministry of Communications and Information Technology (MCIT)",
    period: "July 2026 – Present",
    isOngoing: true,
    statusBadge: "In Progress",
    type: "Initiative",
    highlights: [
      "Participating in specialized national initiative track focusing on Generative AI, Large Language Models (LLMs), and Agentic AI architectures.",
      "Gaining hands-on familiarity with prompt engineering, LLM orchestration, and modern agent paradigms.",
      "Collaborating on technical exercises centered on practical AI solution design."
    ],
    skillsApplied: ["Generative AI", "LLMs", "Agentic AI", "Prompt Engineering", "Python"]
  },
  {
    id: "nti-itida",
    title: "Summer Training Program Trainee",
    organization: "National Telecommunication Institute (NTI) & ITIDA",
    subOrganization: "Professional Technical Training Track",
    period: "August 2025 – September 2025",
    isOngoing: false,
    statusBadge: "Completed (120 Hours)",
    type: "Training",
    highlights: [
      "Completed 120 intensive hours of structured Machine Learning and professional software skills development.",
      "Mastered foundational ML algorithms, data preprocessing pipelines, and practical implementation in Python.",
      "Developed communication, technical documentation, and professional engineering practices."
    ],
    skillsApplied: ["Machine Learning", "Python", "Data Preprocessing", "Professional Skills"]
  },
  {
    id: "ieee-helwan-hr",
    title: "Human Resources Member",
    organization: "IEEE Helwan Student Branch",
    subOrganization: "Student Activities & Branch Management",
    period: "October 2025 – Present",
    isOngoing: true,
    statusBadge: "Active Member",
    type: "Extracurricular",
    highlights: [
      "Conducted candidate recruitment interviews and contributed objectively to member evaluation criteria.",
      "Coordinated committee operations and supervised scheduled developmental sessions.",
      "Calculated, tracked, and reported member KPIs for the committee under my direct responsibility.",
      "Maintained operational alignment and supported collaborative team culture across student branch activities."
    ],
    skillsApplied: ["Interviewing", "KPI Tracking", "Supervision", "Team Coordination", "Communication"],
    note: "Dates subject to confirmation of the current season's academic calendar."
  },
  {
    id: "ieee-ras-volunteer",
    title: "Technical Volunteer",
    organization: "IEEE Robotics and Automation Society (RAS) Helwan",
    subOrganization: "Technical Committee",
    period: "October 2024 – August 2025",
    isOngoing: false,
    statusBadge: "Completed",
    type: "Volunteer",
    highlights: [
      "Delivered instructional technical sessions on fundamental robotics and embedded systems concepts.",
      "Designed and built an interactive hardware game utilizing Arduino, integrating analog sensors, a buzzer, and LCD displays.",
      "Mentored peers and junior participants on microcontrollers, basic C programming, and circuit debugging."
    ],
    skillsApplied: ["Arduino", "Embedded Systems", "Hardware Prototyping", "Technical Instruction", "C"]
  },
  {
    id: "enactus-asliva",
    title: "Project Management Member (ASLIVA)",
    organization: "Enactus Helwan University",
    subOrganization: "Social Entrepreneurship & Innovation",
    period: "Completed Project",
    isOngoing: false,
    statusBadge: "Completed",
    type: "Extracurricular",
    highlights: [
      "Led team coordination and facilitated collaborative sessions during the project brainstorming phase.",
      "Conducted problem space research, stakeholder needs analysis, and early-stage concept feasibility studies.",
      "Managed deliverable milestones and aligned team members toward cohesive project targets."
    ],
    skillsApplied: ["Project Management", "Brainstorming Leadership", "Problem Analysis", "Cross-Functional Coordination"]
  }
]

export const services: ServiceItem[] = [
  {
    id: "backend-dev",
    title: "Backend Development",
    subtitle: "REST API & Database Engineering",
    description:
      "Design and implementation of well-structured RESTful APIs, clean CRUD endpoints, and database interactions using Java and Spring Boot.",
    deliverables: [
      "Clean RESTful endpoints with input validation",
      "Relational data persistence with PostgreSQL & Spring Data JPA",
      "Basic Role-Based Access Control (RBAC) and security logic",
      "Layered architecture (Controller, Service, Repository)"
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Docker"],
    icon: "Server"
  },
  {
    id: "data-ml",
    title: "Data Analysis & Machine Learning",
    subtitle: "Exploratory Analysis & Foundational Models",
    description:
      "Assistance with data cleaning, exploratory data analysis (EDA), feature preprocessing, and baseline machine learning classification models.",
    deliverables: [
      "Exploratory data analysis with summary statistics & visualizations",
      "Data cleaning, missing value imputation, and feature scaling",
      "Supervised baseline classification models in Python",
      "Structured performance evaluation (Accuracy, Confusion Matrix, F1)"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    icon: "BarChart3"
  },
  {
    id: "ai-prototyping",
    title: "AI Application Prototyping",
    subtitle: "Generative AI & LLM Experiments",
    description:
      "Rapid prototyping of practical AI-assisted tools using prompt engineering, LLM interfaces, and emerging agentic concepts.",
    deliverables: [
      "Proof-of-concept prototypes leveraging LLM APIs",
      "Structured prompt design and response validation",
      "Integration of AI endpoints with simple backend services",
      "Technical feasibility assessment for practical use cases"
    ],
    technologies: ["Python", "Prompt Engineering", "LLM APIs", "Agentic Workflows"],
    icon: "Sparkles"
  },
  {
    id: "portfolio-design",
    title: "Portfolio & Technical Presentation",
    subtitle: "Clean Web Interfaces & Clear Documentation",
    description:
      "Crafting clean, accessible, and minimalist web pages for personal portfolios, student projects, or structured technical presentations.",
    deliverables: [
      "Responsive, accessible web layouts (HTML, CSS, JavaScript, React)",
      "Clean typography and structured visual hierarchy",
      "Clear technical project documentation and README files",
      "Fast-loading, minimalist aesthetic suitable for recruiters"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    icon: "Layout"
  }
]
