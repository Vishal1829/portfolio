export const data = {
  name: "Vishal Gupta",
  title: "Software Development Engineer",
  tagline: "I build backend systems at the edge of real-time — where latency and correctness are equally non-negotiable.",
  shortBio: "Backend engineer at Goldman Sachs. Real-time pricing systems, distributed architecture, financial infrastructure.",
  about: `SDE at Goldman Sachs, Bengaluru. I build real-time bond pricing engines and automated trading systems for global credit desks.

Previously at Perfios (2 years), working on Java microservices and Kafka-based pipelines in India's Account Aggregator ecosystem.

MCA, NIT Karnataka Surathkal — CGPA 8.73. LeetCode 800+, HackerRank 6★.`,

  contact: {
    email: "vg539616@gmail.com",
    phone: "+91 7987250139",
    linkedin: "https://www.linkedin.com/in/vishal1829/",
    github: "https://github.com/Vishal1829",
    leetcode: "https://leetcode.com/u/vishal1829/",
  },

  experience: [
    {
      role: "Software Development Engineer",
      company: "Goldman Sachs",
      location: "Bengaluru, Karnataka",
      period: "Oct 2025 – Present",
      tag: "Current",
      color: "#FBBF24",
      achievements: [
        "Migrated the Bond PRS auto-quoting platform from legacy Slang to Java on the firm's reactive graph framework, modernizing a high-volume production trading system that prices and responds to millions of client inquiries daily across global credit trading desks.",
        "Built the core pricing node that calculates per-inquiry bid/ask prices in real time by combining BPE mid prices from RMDS with quoting offsets from QS, validates prices against configured bounds, and falls back to manual trader routing on any error.",
        "Built the per-inquiry decision node that emits QUOTE, ACCEPT, REJECT, COUNTER, or ROUTE_MANUAL actions from live pricing and inquiry streams, with real-time price-to-spread conversion off a CBBT benchmark and structured-reason manual fallback on any failure.",
        "Integrated the firm's Fetch reference-data store to dynamically load the daily tradable bond universe and per-product config (RTL limits, GS trade history), scaling across thousands of bonds with day-over-day refreshes and zero static configuration.",
        "Authored a thorough unit and end-to-end test suite covering every pricing, action, ATC, and event-source node and validating the full inquiry-to-quote flow, gating every merge through Maven/JaCoCo-based CI/CD pipelines.",
      ],
      tech: ["Java", "Distributed Systems", "Bond Trading", "FinTech", "Reactive Graph", "Low-Latency System", "System Design"],
    },
    {
      role: "Software Development Engineer",
      company: "Perfios",
      location: "Bengaluru, Karnataka",
      period: "Nov 2023 – Oct 2025",
      tag: "2 yrs",
      color: "#9CA3AF",
      achievements: [
        "Developed a Java-based microservice from scratch for real-time and batch processing of equity transactions, enabling scalable and robust data flows within the Account Aggregator ecosystem for a leading Indian bank.",
        "Optimized the bank processor which uses Kafka for batch data processing by introducing caching, leveraging read replicas, and reducing database calls to improve throughput across 10M+ accounts.",
        "Upgraded batch processing to Java 21 and optimized event-driven Kafka workflows with configuration-driven pipelines, improving performance across deposits, equities, and mutual funds.",
        "Developed a secure document conversion application using Java and ReactJS, with Keycloak-based authentication. Converted bank and ERP statements into MT940 and client-specific formats, and automated delivery via SFTP for integration with a Vietnamese bank.",
        "Led feature development and system improvements for monolithic and microservice systems, addressing client issues, testing features pre-launch, deploying releases, and enhancing performance for better client satisfaction.",
      ],
      tech: ["Java", "Apache Kafka", "Spring Boot", "ReactJS", "Keycloak", "MySQL"],
    },
    {
      role: "Software Development Engineer Intern",
      company: "Infoworks.io",
      location: "Bengaluru, Karnataka",
      period: "Jan 2023 – Jun 2023",
      tag: "Internship",
      color: "#6B7280",
      achievements: [
        "Refactored backend Java modules for enhanced code clarity and maintainability, while implementing data validation and error handling aligned with user experience goals.",
        "Implemented React Query hooks to efficiently handle asynchronous API calls, reducing boilerplate code and enhancing data handling.",
        "Engineered a responsive dashboard page from Figma design using Material UI, ensuring an intuitive user interface and smooth user experience across various devices.",
      ],
      tech: ["Java", "React", "React Query", "Material UI", "REST APIs"],
    },
  ],

  skills: {
    Languages: ["Java", "C++", "JavaScript", "SQL"],
    "Frameworks & Libraries": ["Spring Boot", "ReactJS", "Hibernate", "JUnit", "Mockito", "JAX-RS"],
    "Infrastructure & Messaging": ["Apache Kafka", "Docker", "Amazon S3", "Minio", "SFTP", "Tomcat"],
    "Databases & Search": ["MySQL", "ElasticSearch"],
    "DevOps & Tools": ["Git", "GitLab", "Linux", "Postman", "IntelliJ", "VS Code", "PagerDuty", "Prometheus", "Grafana"],
    "AI Tools": ["GitHub Copilot", "Claude Code", "ChatGPT"],
    "Core Expertise": [
      "Backend Development",
      "Distributed Systems",
      "Microservices",
      "Event-Driven Architecture",
      "REST APIs",
      "Kafka-based Data Pipelines",
      "Concurrent Processing",
      "System Design",
      "Low-Level Design",
      "Design Patterns",
    ],
  },

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "National Institute of Technology Karnataka, Surathkal",
      period: "Dec 2020 – Jul 2023",
      cgpa: "8.73 / 10",
      highlights: ["AIR 135 in NIMCET 2020", "Specialized in distributed systems & backend engineering"],
    },
  ],

  achievements: [
    { icon: "🏆", title: "3× Pat on the Back", desc: "Perfios recognition for impactful contributions including investment data processing and batch pipeline redesign." },
    { icon: "⚡", title: "LeetCode 800+", desc: "800+ problems solved across data structures, algorithms, and system design." },
    { icon: "⭐", title: "HackerRank 6★", desc: "Six-star rating in problem solving" },
    { icon: "🎯", title: "AIR 135 – NIMCET 2020", desc: "All India Rank 135 in national MCA entrance exam" },
  ],

  projects: [
    {
      title: "Bond PRS Auto-Quoting Platform",
      description:
          "Migrated Goldman Sachs' Bond PRS auto-quoting platform from legacy Slang to Java, building the end-to-end pricing and trade decision pipeline handling millions of client inquiries daily across global credit desks.",
      tech: ["Java", "Reactive Graph", "Distributed Systems", "Real-time"],
      type: "Professional",
      highlight: true,
    },
    {
      title: "Batch & Real-time Data Processing Service",
      description:
          "Java microservice from scratch for real-time and batch equity transaction processing in India's Account Aggregator ecosystem, serving 10M+ accounts.",
      tech: ["Java", "Kafka", "Spring Boot", "MySQL"],
      type: "Professional",
    },
    {
      title: "MT940 Document Conversion Platform",
      description:
          "Secure document conversion service converting bank and ERP statements to MT940 and client-specific formats with Keycloak auth and automated SFTP delivery for a Vietnamese bank integration.",
      tech: ["Java", "ReactJS", "Keycloak", "SFTP"],
      type: "Professional",
    },
  ],
};