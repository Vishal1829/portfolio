export const data = {
  name: "Vishal Gupta",
  title: "Software Development Engineer",
  tagline: "Building the backbone of financial systems — one distributed node at a time.",
  shortBio: "SDE at Goldman Sachs crafting real-time pricing engines and automated trading systems. Previously at Perfios, where I scaled data pipelines across 10M+ accounts in India's Account Aggregator ecosystem.",
  about: `I'm a backend-focused Software Development Engineer currently at Goldman Sachs, Bengaluru, where I architect real-time credit bond pricing and automated trading control systems. My work sits at the intersection of financial infrastructure, distributed systems, and ultra-low-latency design.

Before Goldman Sachs, I spent two years at Perfios building Java microservices and Kafka-driven batch pipelines for India's Account Aggregator ecosystem. I'm drawn to systems that need to be both fast and correct — the kind that handle real money, real-time.

I hold an MCA from NIT Karnataka Surathkal (CGPA: 8.73) and have solved 800+ problems on LeetCode (HackerRank 6★).`,

  contact: {
    email: "vg539616@gmail.com",
    phone: "+91 7987250139",
    linkedin: "https://linkedin.com/in/vishal-gupta",
    github: "https://github.com/vishalgupta",
    leetcode: "https://leetcode.com/vishalgupta",
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
        "Developed the core pricing node for a credit bond auto-quoting system computing bid/ask prices by combining real-time BPE mid prices (RMDS) with quoting strategy offsets (DRA), including staleness detection and price range validation.",
        "Built a suite of real-time Automated Trading Control (ATC) nodes covering notional limits, off-market price checks, frequent fills detection, and size validation — routing to manual trader review on any breach.",
        "Implemented the decision node generating quote, accept, or counter actions per inquiry based on real-time pricing data with configurable risk thresholds.",
        "Built the graph wiring layer that automatically provisions a full pricing, compliance, and trade decision pipeline per bond at runtime as new products are onboarded — no restarts or code changes required.",
      ],
      tech: ["Java", "Distributed Systems", "Real-time Pricing", "ATC", "RMDS"],
    },
    {
      role: "Software Development Engineer",
      company: "Perfios",
      location: "Bengaluru, Karnataka",
      period: "Nov 2023 – Oct 2025",
      tag: "2 yrs",
      color: "#9CA3AF",
      achievements: [
        "Developed a Java-based microservice from scratch for real-time and batch processing of equity transactions within the Account Aggregator ecosystem for a leading Indian bank.",
        "Optimized the bank processor using Kafka for batch data processing — introduced caching, read replicas, and reduced DB calls to improve throughput across 10M+ accounts.",
        "Upgraded batch processing to Java 21 and optimized Kafka workflows with configuration-driven pipelines across deposits, equities, and mutual funds.",
        "Developed a secure document conversion application using Java and ReactJS with Keycloak-based auth, converting bank statements to MT940 and automating delivery via SFTP for a Vietnamese bank.",
        "Led feature development, client issue resolution, pre-launch testing, and release deployments for monolithic and microservice systems.",
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
        "Refactored backend Java modules for enhanced code clarity and maintainability with robust data validation and error handling.",
        "Implemented React Query hooks for efficient async API calls, reducing boilerplate and enhancing data handling.",
        "Created a responsive dashboard page from Figma designs using Material UI across various devices.",
      ],
      tech: ["Java", "React", "React Query", "Material UI", "REST APIs"],
    },
  ],

  skills: {
    Languages: ["Java", "C++", "JavaScript", "SQL"],
    "Frameworks & Libraries": ["Spring Boot", "ReactJS", "Hibernate", "JUnit", "Mockito", "JAX-RS"],
    "Infrastructure & Messaging": ["Apache Kafka", "Docker", "Amazon S3", "Minio", "SFTP", "Tomcat"],
    "Databases & Search": ["MySQL", "ElasticSearch", "DBeaver"],
    "DevOps & Tools": ["Git", "GitLab", "Linux", "Postman", "IntelliJ", "VS Code", "PagerDuty"],
    "Auth & Security": ["Keycloak"],
  },

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "National Institute of Technology Karnataka, Surathkal",
      period: "Dec 2020 – Jul 2023",
      cgpa: "8.73 / 10",
      highlights: ["AIR 135 in NIMCET 2020", "Top-tier NIT postgraduate program"],
    },
  ],

  achievements: [
    { icon: "🏆", title: "3× Pat on the Back", desc: "Goldman Sachs awards for impactful contributions to Techcom Bank" },
    { icon: "⚡", title: "LeetCode 800+", desc: "Consistent competitive programmer with 800+ solved problems" },
    { icon: "⭐", title: "HackerRank 6★", desc: "Six-star rating in problem solving" },
    { icon: "🎯", title: "AIR 135 – NIMCET 2020", desc: "All India Rank 135 in national MCA entrance exam" },
  ],

  projects: [
    {
      title: "Credit Bond Auto-Quoting Engine",
      description: "Real-time pricing system at Goldman Sachs combining BPE mid prices with strategy offsets, staleness detection, and price range validation for automated bond quoting.",
      tech: ["Java", "RMDS", "Distributed Systems", "Real-time"],
      type: "Professional",
      highlight: true,
    },
    {
      title: "Automated Trading Control Suite",
      description: "End-to-end ATC node suite covering notional limits, off-market price checks, frequent fills detection, and size validation for every auto-quote and trade response.",
      tech: ["Java", "ATC", "Risk Systems"],
      type: "Professional",
      highlight: true,
    },
    {
      title: "Account Aggregator Equity Microservice",
      description: "Java microservice from scratch for real-time and batch equity transaction processing in India's Account Aggregator ecosystem, serving 10M+ accounts.",
      tech: ["Java", "Kafka", "Spring Boot", "MySQL"],
      type: "Professional",
    },
    {
      title: "MT940 Document Conversion Platform",
      description: "Secure document conversion service converting bank and ERP statements to MT940 format with Keycloak auth and SFTP delivery for a Vietnamese bank integration.",
      tech: ["Java", "ReactJS", "Keycloak", "SFTP"],
      type: "Professional",
    },
  ],
};
