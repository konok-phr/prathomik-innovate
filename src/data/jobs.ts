export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    slug: "senior-full-stack-developer",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Dhaka",
    experience: "4+ years",
    summary:
      "We're looking for an experienced Full-Stack Developer to design, build, and maintain scalable web applications. You'll work closely with product and design teams to deliver high-quality features end-to-end.",
    responsibilities: [
      "Architect and build scalable web applications using React and Laravel/Node.js",
      "Write clean, maintainable, and well-tested code",
      "Collaborate with designers and product managers on feature requirements",
      "Mentor junior developers through code reviews and pair programming",
      "Optimize application performance and ensure high availability",
    ],
    requirements: [
      "4+ years of experience in full-stack web development",
      "Proficiency in React/TypeScript and a backend framework (Laravel, Node.js)",
      "Strong understanding of RESTful APIs and database design",
      "Experience with cloud services (AWS, GCP, or Azure)",
      "Familiarity with CI/CD pipelines and version control (Git)",
    ],
    niceToHave: [
      "Experience with Docker and Kubernetes",
      "Contributions to open-source projects",
      "Familiarity with microservices architecture",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Flexible remote work policy",
      "Annual learning & conference budget",
      "Health insurance coverage",
    ],
  },
  {
    slug: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    department: "AI/ML",
    type: "Full-time",
    location: "Remote",
    experience: "3+ years",
    summary:
      "Join our AI/ML team to build intelligent systems that power our products. You'll develop, train, and deploy machine learning models that solve real-world problems at scale.",
    responsibilities: [
      "Design and implement ML models for production use cases",
      "Build and maintain data pipelines for model training",
      "Collaborate with engineering teams to integrate ML into products",
      "Monitor model performance and iterate on improvements",
      "Stay current with the latest ML research and techniques",
    ],
    requirements: [
      "3+ years of experience in machine learning or data science",
      "Proficiency in Python, TensorFlow or PyTorch",
      "Experience with NLP, computer vision, or recommendation systems",
      "Strong foundation in statistics and linear algebra",
      "Experience deploying models to production",
    ],
    niceToHave: [
      "Published research papers in ML conferences",
      "Experience with MLOps tools (MLflow, Kubeflow)",
      "Familiarity with large language models and generative AI",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Fully remote work environment",
      "Annual learning & conference budget",
      "Health insurance coverage",
    ],
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Dhaka",
    experience: "2+ years",
    summary:
      "We need a talented UI/UX Designer to craft intuitive and visually stunning interfaces for our SaaS products. You'll own the design process from research to high-fidelity prototypes.",
    responsibilities: [
      "Conduct user research and translate insights into design solutions",
      "Create wireframes, prototypes, and high-fidelity UI designs",
      "Maintain and evolve our design system across products",
      "Collaborate closely with developers for pixel-perfect implementation",
      "Run usability tests and iterate based on feedback",
    ],
    requirements: [
      "2+ years of experience in product/UI/UX design",
      "Proficiency in Figma and prototyping tools",
      "Strong portfolio demonstrating web/mobile design work",
      "Understanding of design systems and component libraries",
      "Excellent visual design sense and attention to detail",
    ],
    niceToHave: [
      "Experience with motion design (After Effects, Lottie)",
      "Basic knowledge of HTML/CSS/React",
      "Experience designing for SaaS products",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Modern office in Dhaka with hybrid flexibility",
      "Annual learning & conference budget",
      "Health insurance coverage",
    ],
  },
  {
    slug: "flutter-developer",
    title: "Flutter Developer",
    department: "Mobile",
    type: "Full-time",
    location: "Remote / Dhaka",
    experience: "2+ years",
    summary:
      "We're looking for a skilled Flutter Developer to build and maintain cross-platform mobile applications. You'll create smooth, performant apps that delight our users.",
    responsibilities: [
      "Develop and maintain cross-platform mobile apps using Flutter",
      "Implement pixel-perfect UI from design specifications",
      "Integrate RESTful APIs and manage app state efficiently",
      "Write unit and integration tests for reliability",
      "Publish and maintain apps on App Store and Google Play",
    ],
    requirements: [
      "2+ years of experience with Flutter and Dart",
      "Published apps on App Store or Google Play",
      "Experience with state management (Bloc, Riverpod, or Provider)",
      "Strong understanding of mobile UI/UX principles",
      "Familiarity with RESTful APIs and JSON parsing",
    ],
    niceToHave: [
      "Experience with native Android (Kotlin) or iOS (Swift)",
      "Knowledge of Firebase services",
      "Experience with CI/CD for mobile apps",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Flexible remote work policy",
      "Annual learning & conference budget",
      "Health insurance coverage",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    type: "Full-time",
    location: "Remote",
    experience: "3+ years",
    summary:
      "Help us build and maintain robust infrastructure that powers our products. You'll work on automation, monitoring, and ensuring our systems are reliable and scalable.",
    responsibilities: [
      "Design and maintain CI/CD pipelines for multiple projects",
      "Manage cloud infrastructure on AWS using IaC (Terraform, CDK)",
      "Implement monitoring, alerting, and logging solutions",
      "Ensure security best practices across all environments",
      "Optimize costs and performance of cloud resources",
    ],
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Strong experience with AWS services and Linux administration",
      "Proficiency with Docker and container orchestration",
      "Experience with IaC tools (Terraform, CloudFormation)",
      "Knowledge of networking, security, and monitoring tools",
    ],
    niceToHave: [
      "Kubernetes certification (CKA/CKAD)",
      "Experience with multi-cloud environments",
      "Scripting skills in Python or Bash",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Fully remote work environment",
      "Annual learning & conference budget",
      "Health insurance coverage",
    ],
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    department: "Quality",
    type: "Full-time",
    location: "Dhaka",
    experience: "2+ years",
    summary:
      "Ensure the quality and reliability of our products. You'll design test strategies, automate testing workflows, and work with developers to ship bug-free software.",
    responsibilities: [
      "Design and execute comprehensive test plans and test cases",
      "Build and maintain automated test suites (Cypress, Playwright)",
      "Perform regression, performance, and security testing",
      "Collaborate with developers to identify and resolve issues early",
      "Document bugs and track resolution through to completion",
    ],
    requirements: [
      "2+ years of experience in QA or software testing",
      "Experience with test automation frameworks (Cypress, Playwright, Selenium)",
      "Understanding of software development lifecycle (SDLC)",
      "Strong analytical and problem-solving skills",
      "Familiarity with bug tracking tools (Jira, Linear)",
    ],
    niceToHave: [
      "ISTQB certification",
      "Experience with API testing (Postman, REST Assured)",
      "Knowledge of performance testing tools (k6, JMeter)",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Modern office in Dhaka with hybrid flexibility",
      "Annual learning & conference budget",
      "Health insurance coverage",
    ],
  },
];
