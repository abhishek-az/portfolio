// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Ayyagari Abhishek',
  first: 'Ayyagari',
  last: 'Abhishek',
  title: 'Staff DevOps Engineer',
  company: 'Grid Dynamics',
  location: 'Hyderabad, India',
  phone: '+91 99626 46878',
  phoneHref: 'tel:+919962646878',
  // TODO: replace these three with your real links
  email: 'your.email@example.com',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
}

export const typedRoles = [
  'AI platforms on AWS Bedrock.',
  'Kubernetes at scale.',
  'Terraform that writes itself.',
  'GitOps pipelines.',
  'agentic AI workflows.',
  'observable systems.',
]

export const marquee = ['Amazon Bedrock', 'Kubernetes', 'Terraform', 'GitOps', 'Agentic AI', 'Azure', 'GCP', 'Helm', 'OpenTelemetry', 'Prometheus', 'MCP', 'GitHub Actions']

export const stats = [
  { v: 9, suffix: '+', l: 'Years in cloud & DevOps' },
  { v: 3, suffix: '', l: 'Clouds: AWS · Azure · GCP' },
  { v: 4, suffix: '', l: 'Professional certifications' },
  { v: 30, suffix: '%', l: 'IaC head start from diagrams' },
]

export const skillGroups = [
  { icon: 'spark', feature: true, title: 'AI & GenAI Platform', tags: ['Amazon Bedrock', 'Bedrock Guardrails', 'Amazon Comprehend', 'Amazon Textract', 'Claude', 'Foundation Models', 'LLM Integration', 'Prompt Engineering', 'Agentic AI', 'MCP', 'Agent Factory', 'AI Governance', 'Responsible AI', 'Azure → AWS AI Migration', 'AI Workflow Automation'] },
  { icon: 'cloud', title: 'Cloud Platforms', tags: ['AWS EKS', 'Lambda', 'Step Functions', 'EventBridge', 'API Gateway', 'Azure AKS', 'Azure Functions', 'GCP GKE', 'IAM / VPC'] },
  { icon: 'box', title: 'Containers & Orchestration', tags: ['Kubernetes', 'Docker', 'Helm Charts', 'Microservices', 'Multi-cloud clusters'] },
  { icon: 'lines', title: 'Infrastructure as Code', tags: ['Terraform', 'Terraform Cloud', 'Ansible', 'ARM / Bicep', 'Modular IaC'] },
  { icon: 'git', title: 'CI/CD & GitOps', tags: ['GitHub Actions', 'Azure Pipelines', 'GitLab CI/CD', 'Jenkins', 'Tekton', 'YAML pipelines'] },
  { icon: 'pulse', title: 'Observability', tags: ['Prometheus', 'Grafana', 'Alertmanager', 'OpenTelemetry', 'Jaeger', 'ELK / EFK', 'Azure Monitor'] },
  { icon: 'shield', title: 'Reliability & Automation', tags: ['SLO / SLI / SLA', 'Incident Response', 'RCA', '24/7 On-call', 'Cost Optimization', 'Python', 'Bash', 'PowerShell'] },
]

export const depth = [
  ['Kubernetes & Helm', 95],
  ['Terraform / IaC', 95],
  ['CI/CD & GitOps', 92],
  ['AWS AI (Bedrock)', 88],
  ['Observability', 90],
]

// [label, orbit ring (1-3), starting angle in degrees]
export const orbitItems = [
  ['Helm', 1, 0], ['Docker', 1, 180],
  ['Terraform', 2, 0], ['GitOps', 2, 120], ['Grafana', 2, 240],
  ['Bedrock', 3, 0], ['AKS', 3, 90], ['GKE', 3, 200], ['EKS', 3, 300],
]

export const jobs = [
  {
    company: 'Grid Dynamics', when: 'Dec 2022 — Present', title: 'Staff DevOps Engineer · Hyderabad',
    points: [
      ['AI-driven infrastructure', 'Designed and built an R&D canvas tool, similar to draw.io, that parses architecture diagrams in real time and generates valid Terraform. New cloud projects start about 30% complete instead of from scratch.'],
      ['Enterprise AI migration', 'Leading the migration of large-scale GenAI workloads from Azure to AWS on Amazon Bedrock, with Bedrock Guardrails for secure, responsible AI across foundation models.'],
      ['Agentic AI & governance', 'Leading the AgentFactory framework and AI workflows. Working with enterprise architecture teams on AI security patterns, LLM management and model lifecycle governance.'],
    ],
    more: [
      ['Solution architecture', 'Modular Terraform for cloud AI services, plus API and event-driven integration, all deployed through GitOps pipelines.'],
      ['Cloud-native orchestration', 'Run multi-cloud production Kubernetes clusters (AKS/GKE) with standardized enterprise Helm charts.'],
      ['Observability & tracing', 'Built end-to-end observability with Prometheus, Grafana, Alertmanager and OpenTelemetry tracing, cutting time to resolution during incidents.'],
      ['Cost & performance', 'Wrote Python and Bash automation that analyzes cloud usage to cut infrastructure costs.'],
      ['Incident management', 'Led cross-functional incident response and 24/7 on-call rotations for global applications.'],
    ],
  },
  {
    company: 'EPAM Systems', when: 'Aug 2021 — Dec 2022', title: 'Systems Engineer (DevOps) · Hyderabad',
    points: [
      ['Legacy modernization', 'Led the upgrade of legacy Terraform from v0.11 to v0.12, splitting it into modules that are much easier to maintain.'],
      ['Microservices deployment', 'Built and maintained Helm charts for continuous deployment on enterprise Kubernetes.'],
      ['Centralized logging', 'Designed EFK-based logging with alerting through PagerDuty and Opsgenie.'],
      ['Configuration management', 'Wrote Ansible playbooks and Bash scripts that automated routine environment setup.'],
    ],
  },
  {
    company: 'West Agile Labs', when: 'Dec 2019 — Aug 2021', title: 'DevOps Engineer · Hyderabad',
    points: [
      ['Multi-cloud', 'Provisioned secure production environments on AWS and GCP with Terraform and Ansible.'],
      ['Client onboarding', 'Moved enterprise clients onto GCP and managed Kubernetes.'],
      ['Observability', 'Set up Prometheus and Grafana monitoring to track infrastructure metrics and keep uptime high.'],
      ['Build pipelines', 'Maintained high-availability Jenkins and GitLab CI/CD pipelines for engineering teams around the world.'],
    ],
  },
  {
    company: 'TA Digital', when: 'Nov 2017 — Dec 2019', title: 'Associate Software Engineer · Hyderabad',
    points: [
      ['Azure infrastructure', 'Provisioned and managed Azure resources behind resilient enterprise web services.'],
      ['CI/CD', 'Maintained build and release pipelines in Azure DevOps.'],
      ['Automation', 'Wrote PowerShell automation to cut down manual configuration and setup errors.'],
    ],
  },
]

export const certs = [
  { badge: 'AZ', bg: 'linear-gradient(135deg,#0078d4,#50e6ff)', name: 'Microsoft Azure Architect Technologies', sub: 'AZ-300' },
  { badge: 'AWS', bg: 'linear-gradient(135deg,#ff9900,#ffb84d)', name: 'AWS Certified Cloud Practitioner', sub: 'Amazon Web Services' },
  { badge: '533', bg: 'linear-gradient(135deg,#0078d4,#7b5cff)', name: 'Implementing Azure Infrastructure Solutions', sub: 'Microsoft Exam 533' },
  { badge: 'OCA', bg: 'linear-gradient(135deg,#c74634,#f80000)', name: 'Oracle Certified Associate', sub: 'Java SE 8' },
]

export const education = [
  { badge: '🎓', bg: 'var(--grad)', name: 'B.Tech, Computer Science', sub: 'SRM University' },
  { badge: 'Aa', bg: 'linear-gradient(135deg,#2ee6a6,#4cc9f0)', name: 'Languages', sub: 'English: C1 (Advanced Professional) · Hindi: C2 (Native)' },
]

export const pipelineStages = ['commit', 'build', 'test', 'terraform', 'helm', 'observe']
export const pipelineLogs = [
  ['info', '▸ git push origin main  →  webhook received'],
  ['info', '▸ docker build -t platform/api:sha-7f3c1e'],
  ['ok', '✔ 214 tests passed · coverage 91%'],
  ['info', '▸ terraform plan  →  +12 ~3 -0  (bedrock, eks, vpc)'],
  ['ok', '✔ helm upgrade --install api  →  rollout complete (6/6 pods)'],
  ['ok', '✔ SLO 99.95% · p95 latency 142ms · 0 alerts firing'],
]
