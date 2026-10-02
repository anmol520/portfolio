import { Project, SkillGroup, AchievementItem, EducationEntry, BackendPillar } from '@/types';

export const personalInfo = {
  name: 'Anmol',
  role: 'Backend-focused Software Developer',
  email: 'anmolsri520@gmail.com',
  location: 'Noida, Uttar Pradesh, India',
  githubUrl: 'https://github.com/anmol520',
  githubUsername: 'anmol520',
  linkedinUrl: 'https://www.linkedin.com/in/anmol-srivastava-005084294/',
  resumeUrl: '/anmol-resume.pdf',
  photoUrl: '/anmol-profile.jpg',
  headline: 'Backend-focused Software Developer',
  supportingPitch:
    'I enjoy building REST APIs, caching systems, asynchronous background queues, real-time services, and reliable developer infrastructure.',
  aboutBrief:
    'I am a Computer Science & Engineering undergraduate at Galgotias College of Engineering and Technology (Class of 2027), focused on backend software development. I enjoy working on the server side: designing clean RESTful APIs, implementing Redis caching and LRU eviction, handling asynchronous job queues, and optimizing database queries. My goal is to write clean, predictable, and maintainable systems grounded in strong data structures and algorithms.',
  educationSummary: 'B.Tech in Computer Science & Engineering, Expected June 2027',
};

export const projectsData: Project[] = [
  {
    id: 'applytrack-api',
    title: 'ApplyTrack API',
    tagline: 'Production-oriented job application tracking REST API',
    summary:
      'A structured RESTful backend designed to manage job application workflows. Emphasizes clean controller-service separation, query caching with Redis, JWT authentication with refresh tokens, role-based access control, and containerized deployment.',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'JWT',
      'RBAC',
      'Docker',
      'GitHub Actions',
      'Jest',
      'Supertest',
      'Swagger/OpenAPI',
    ],
    keyEngineeringConcepts: [
      'Structured modular architecture (Controllers, Services, Models)',
      'Redis query caching layer for frequently accessed datasets',
      'Stateless JWT authentication & refresh token rotation',
      'Role-based access control (RBAC) middleware',
      'MongoDB compound indexing, pagination, search, and status filtering',
      'Structured logging, health check endpoints, and graceful server shutdown',
      'Automated testing with Jest & Supertest in Dockerized CI/CD',
    ],
    architectureDetails: [
      'Separation of concerns: routes delegate to controllers, business logic is isolated in services, data access is encapsulated in Mongoose models.',
      'Redis cache-aside pattern reduces database query load for repeated paginated lookups.',
      'Graceful shutdown listens for SIGTERM/SIGINT signals to close database connection pools and finish in-flight requests cleanly.',
      'Containerized with Docker Compose for local development parity and automated GitHub Actions verification.',
    ],
    githubUrl: 'https://github.com/anmol520',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/applications?status=applied&page=1&limit=10',
        description: 'Retrieve paginated and filtered job applications with Redis query caching.',
        sampleResponse: `{\n  "status": "success",\n  "cached": true,\n  "page": 1,\n  "limit": 10,\n  "total": 24,\n  "data": [\n    {\n      "_id": "66f5c801e1b23a0012345678",\n      "company": "TechCorp",\n      "role": "Backend Engineer",\n      "status": "applied",\n      "appliedDate": "2026-09-28T09:00:00.000Z"\n    }\n  ]\n}`,
      },
      {
        method: 'POST',
        path: '/api/v1/auth/refresh',
        description: 'Verify refresh token and issue new short-lived access JWT.',
        samplePayload: `{\n  "refreshToken": "eyJhbGciOiJIUzI1NiIsIn..."\n}`,
        sampleResponse: `{\n  "status": "success",\n  "token": "eyJhbGciOiJIUzI1NiIsIn...",\n  "expiresIn": 900\n}`,
      },
      {
        method: 'GET',
        path: '/health',
        description: 'Health probe reporting database and Redis connectivity.',
        sampleResponse: `{\n  "status": "ok",\n  "uptime": "48h 12m",\n  "services": {\n    "database": "connected",\n    "redis": "connected"\n  }\n}`,
      },
    ],
  },
  {
    id: 'proxycache',
    title: 'ProxyCache',
    tagline: 'HTTP caching proxy server built with Node.js and Express',
    summary:
      'A reverse proxy and caching engine designed to intercept client GET requests, cache origin responses using an in-memory LRU cache, and serve cached responses according to HTTP caching semantics.',
    technologies: [
      'Node.js',
      'Express.js',
      'JavaScript',
      'LRU Cache',
      'REST APIs',
      'HTTP Semantics',
      'Automated Tests',
    ],
    keyEngineeringConcepts: [
      'In-memory Least Recently Used (LRU) cache with size limits and eviction',
      'HTTP caching headers: Cache-Control, ETag validation, and Vary headers',
      'Cache hit vs. cache miss differentiation with X-Cache response headers',
      'Transparent request forwarding to origin servers',
      'Sliding window rate limiting on proxy ingress',
      'Live cache statistics endpoint (/stats) and health monitoring',
      'Structured request logging and automated test suites',
    ],
    architectureDetails: [
      'Checks in-memory LRU store for existing unexpired responses matching normalized request keys.',
      'On cache hit: returns cached payload immediately with "X-Cache: HIT" and preserved origin headers.',
      'On cache miss: forwards request to origin server, captures payload, stores in LRU cache respecting Cache-Control max-age, and responds with "X-Cache: MISS".',
      'Evicts oldest records automatically when capacity limit is reached.',
    ],
    githubUrl: 'https://github.com/anmol520',
    endpoints: [
      {
        method: 'GET',
        path: '/proxy?url=https://api.github.com/users/anmol520',
        description: 'Forward client request to origin server and cache response payload.',
        sampleResponse: `// Headers:\n// X-Cache: HIT\n// Cache-Control: public, max-age=300\n// ETag: W/"4f8a-abc123"\n{\n  "login": "anmol520",\n  "type": "User",\n  "public_repos": 18\n}`,
      },
      {
        method: 'GET',
        path: '/stats',
        description: 'Expose live proxy telemetry, cache hit ratio, and eviction count.',
        sampleResponse: `{\n  "cache": {\n    "size": 340,\n    "capacity": 1000,\n    "hits": 2840,\n    "misses": 412,\n    "hitRatio": "87.33%",\n    "evictions": 18\n  }\n}`,
      },
    ],
  },
  {
    id: 'notification-microservice',
    title: 'Notification Microservice',
    tagline: 'Asynchronous notification distribution system with Redis & BullMQ',
    summary:
      'A decoupled backend notification pipeline built to process email, SMS, and in-app notifications asynchronously. Utilizes Redis queues with BullMQ to isolate long-running delivery tasks from the primary API layer.',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'BullMQ',
      'Nodemailer',
      'REST APIs',
    ],
    keyEngineeringConcepts: [
      'Decoupled producer-consumer pipeline via BullMQ and Redis queues',
      'Asynchronous task processing keeping API response times minimal',
      'Configurable retry strategy with exponential backoff for failed deliveries',
      'Dead-letter queue (DLQ) isolation for permanently failing jobs',
      'Redis in-memory caching to optimize notification delivery lookups and rate limiting',
      'Notification lifecycle tracking in MongoDB (pending, queued, delivered, failed)',
    ],
    architectureDetails: [
      'The REST API validates notification payload and enqueues a job into Redis via BullMQ, returning an immediate acknowledgment.',
      'Worker processes consume queue jobs asynchronously, dispatching emails via Nodemailer or simulated SMS gateways.',
      'Failed jobs retry with exponential backoff up to max attempts before routing to the dead-letter queue for inspection.',
    ],
    githubUrl: 'https://github.com/anmol520',
    endpoints: [
      {
        method: 'POST',
        path: '/api/v1/notifications/send',
        description: 'Enqueue an asynchronous notification job.',
        samplePayload: `{\n  "channel": "email",\n  "recipient": "user@example.com",\n  "subject": "System Alert",\n  "message": "Your background job completed successfully."\n}`,
        sampleResponse: `{\n  "status": "queued",\n  "jobId": "job_bmq_1048",\n  "enqueuedAt": "2026-10-02T16:00:00.000Z"\n}`,
      },
      {
        method: 'GET',
        path: '/api/v1/notifications/job_bmq_1048',
        description: 'Check status and delivery attempts of an enqueued job.',
        sampleResponse: `{\n  "jobId": "job_bmq_1048",\n  "state": "completed",\n  "attemptsMade": 1,\n  "deliveredAt": "2026-10-02T16:00:02.000Z"\n}`,
      },
    ],
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener',
    tagline: 'High-throughput URL shortening and redirection application',
    summary:
      'A full-stack URL shortening service built with Next.js and MongoDB. Generates collision-resistant short identifiers with NanoID, supports custom aliases, tracks click telemetry, and generates dynamic QR codes.',
    technologies: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'NanoID',
      'Tailwind CSS',
    ],
    keyEngineeringConcepts: [
      'Short URL generation with NanoID collision prevention',
      'Custom alias support with unique database index constraints',
      'Click analytics tracking (timestamps, referrers, and user agents)',
      'Dynamic QR code generation for shortened links',
      'Link expiration (TTL) handling',
      'Client IP rate limiting to prevent spam submissions',
      'SEO metadata handling and responsive dark/light UI',
    ],
    architectureDetails: [
      'Mongoose schema enforces unique indexes on short slugs and aliases for fast sub-millisecond redirection queries.',
      'Redirect handler logs analytics asynchronously without blocking the client redirect response.',
    ],
    githubUrl: 'https://github.com/anmol520',
  },
  {
    id: 'crypto-ticker',
    title: 'Crypto Ticker',
    tagline: 'Real-time cryptocurrency ticker with WebSockets and caching',
    summary:
      'A real-time financial tracking application built with Next.js, React, TypeScript, and Socket.IO. Streams live price updates through WebSockets on a custom Node.js server with caching and resilient API fallback handling.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Socket.IO',
      'Node.js Custom Server',
      'In-Memory Caching',
    ],
    keyEngineeringConcepts: [
      'Bi-directional WebSocket connection with Socket.IO',
      'Custom Node.js server coordinating socket broadcasts',
      'In-memory price caching to stay within third-party API rate limits',
      'Fallback polling and graceful reconnection handling on network drops',
      'Real-time state updates with minimal client re-renders',
    ],
    architectureDetails: [
      'Custom server polls upstream data providers at controlled intervals, caches the latest snapshot in memory, and broadcasts diffs to connected WebSocket clients.',
      'Client reconnects with exponential backoff if the socket connection is interrupted.',
    ],
    githubUrl: 'https://github.com/anmol520',
  },
];

export const skillsData: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication',
      'JWT',
      'Microservices',
      'Queues (BullMQ / Redis)',
    ],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Infrastructure & Tools',
    items: ['Docker', 'Git', 'GitHub', 'Linux', 'AWS'],
  },
  {
    category: 'DSA & Foundations',
    items: [
      'Data Structures & Algorithms',
      '500+ Problems Solved',
      'System Design Fundamentals',
      'Object-Oriented Programming',
    ],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    title: '500+ DSA Problems Solved',
    eventOrIssuer: 'LeetCode, GeeksforGeeks & CodeChef',
    highlight: '500+ Solved',
    details:
      'Solved over 500 algorithmic challenges spanning Dynamic Programming, Graph Traversals, Trees, Heaps, and Sliding Window techniques.',
  },
  {
    title: 'Runner-up — HACKBASE 2026',
    eventOrIssuer: 'HACKBASE 2026 Hackathon',
    highlight: 'Runner-up',
    details:
      'Secured runner-up position in a competitive 24-hour hackathon for building and deploying a resilient, high-speed backend application.',
  },
  {
    title: 'Microsoft Azure Cloud Fundamentals',
    eventOrIssuer: 'Microsoft',
    highlight: 'AZ-900 Certified',
    details:
      'Demonstrated foundational understanding of cloud concepts, Azure architectural services, security, privacy, and compliance.',
  },
  {
    title: 'Salesforce 10+ Badges',
    eventOrIssuer: 'Salesforce Trailhead',
    highlight: '10+ Badges',
    details:
      'Completed practical modules covering cloud architecture, database relationships, and process automation.',
  },
  {
    title: 'Database Management System (DBMS)',
    eventOrIssuer: 'Infosys Springboard',
    highlight: 'Certified',
    details:
      'Covered relational schema design, normalization (1NF-BCNF), indexing strategies, and transaction ACID properties.',
  },
];

export const educationData: EducationEntry[] = [
  {
    institution: 'Galgotias College of Engineering and Technology',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    period: 'Oct 2023 – June 2027 (Expected)',
    location: 'Noida, Uttar Pradesh, India',
    notes: [
      'Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming.',
      'Current Academic Status: Undergraduate student, graduating in June 2027.',
    ],
  },
  {
    institution: 'Sri Krishna Children Secondary Academy',
    degree: 'Higher Secondary Certificate (CBSE)',
    period: 'Completed 2022',
    location: 'Ayodhya, Uttar Pradesh, India',
    notes: [
      'Rigorous foundation in Physics, Chemistry, Mathematics, and Computer Science.',
    ],
  },
];

export const backendPillars: BackendPillar[] = [
  {
    title: 'RESTful API & Modular Architecture',
    tag: 'Layered Design',
    description:
      'Clear separation of concerns across controllers, business services, and data models. Incorporates input validation, centralized error handling, and Swagger/OpenAPI documentation.',
    metrics: ['Controllers / Services / Models', 'Centralized Error Middleware', 'Swagger / OpenAPI Specs'],
  },
  {
    title: 'Caching Semantics & Invalidation',
    tag: 'Performance Engineering',
    description:
      'Implementing Redis query caching and custom in-memory LRU eviction. Complying with HTTP caching semantics including Cache-Control, ETag validation, and Vary headers.',
    metrics: ['Redis Cache-Aside Pattern', 'In-Memory LRU Eviction', 'ETag & Cache-Control Semantics'],
  },
  {
    title: 'Asynchronous Queues & Jobs',
    tag: 'Background Processing',
    description:
      'Decoupling long-running operations like email dispatch through Redis and BullMQ queues, featuring exponential backoff retries and dead-letter queue (DLQ) containment.',
    metrics: ['BullMQ + Redis Worker Pipeline', 'Exponential Backoff Retries', 'Dead-Letter Queue Isolation'],
  },
  {
    title: 'Database Modeling & Index Optimization',
    tag: 'Data Persistence',
    description:
      'Structuring Mongoose schemas with compound and unique indexes to prevent unindexed collection scans during pagination, search, and status filtering.',
    metrics: ['Compound Index Tuning', 'Efficient Pagination & Filtering', 'Referential Schema Design'],
  },
  {
    title: 'Authentication & Access Control',
    tag: 'Security Layer',
    description:
      'Stateless JWT authentication with short-lived tokens, refresh token rotation, and granular Role-Based Access Control (RBAC) middleware for protected resources.',
    metrics: ['JWT Auth & Refresh Rotation', 'Role-Based Access Control (RBAC)', 'Sliding-Window Rate Limiting'],
  },
  {
    title: 'Containerization & Developer Tooling',
    tag: 'DevOps & Reliability',
    description:
      'Containerizing environments with Docker and Docker Compose for consistent local development, alongside automated Jest and Supertest workflows in GitHub Actions.',
    metrics: ['Docker Compose Environments', 'Automated Jest & Supertest Tests', 'Linux & Git Workflows'],
  },
];
