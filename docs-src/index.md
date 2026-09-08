# Bob<span style="color:#0f62fe">+</span> IBM Technology Building Blocks

**Bob<span style="color:#0f62fe">+</span> IBM Technology Building Blocks** provide a unified digital experience for discovering, adopting, and implementing IBM technologies across AI and Automation. The Building Blocks encapsulate reusable, enterprise-ready capabilities spanning AI (Agents, Trust, and Data) and Automation (Build, Secure, and Optimize), enabling organizations to rapidly integrate IBM technologies into new and existing applications.

Powered by **IBM Bob**, developers, architects, partners, and technical teams receive AI-assisted guidance throughout the software development lifecycle—from discovering the appropriate Building Blocks and generating solution architectures to accelerating development, application modernization, cloud migration, deployment, and ongoing optimization. This AI-first experience improves developer productivity, promotes consistent engineering practices, reduces implementation risk, and accelerates time-to-value while maintaining enterprise-grade security, governance, scalability, and operational excellence.

# Digital Experience with Bob+

Bob<span style="color:#0f62fe">+</span> delivers an AI-powered digital experience that enables developers, architects, partners, and enterprise teams to discover, build, modernize, migrate, and operate applications using IBM Technology Building Blocks. Rather than searching through multiple product documents, APIs, and best practices, users interact with a single intelligent assistant that understands enterprise architecture and recommends the right IBM capabilities for every stage of the software lifecycle.

Bob<span style="color:#0f62fe">+</span> combines Generative AI with IBM Technology expertise to guide users from initial solution design through deployment and ongoing operations. By abstracting implementation complexity, teams can focus on delivering business value instead of building foundational capabilities from scratch.

Whether building new cloud-native applications, modernizing legacy workloads, migrating infrastructure, or optimizing production environments, Bob+ acts as an intelligent engineering companion that accelerates delivery while ensuring consistency, governance, and security.

<img src="image-1.png"
     alt="Digital Experience with IBM Bob+"
     width="750"
     height="150"
     style="max-width:100%; height:auto;">

## Capability Areas

**[AI Core Capabilities](ai-core/index.md)**

- **[Agents](ai-core/agents/index.md)**
  Enterprise-ready building blocks for creating, orchestrating, and deploying autonomous AI agents that integrate with enterprise systems and business workflows.

    | Building Block | What It Enables |
    |---|---|
    | [Agent Builder](ai-core/agents/agent-builder.md) | Create and deploy LLM-backed, tool-calling agents — from local development to production |
    | [Multi-Agent Orchestration](ai-core/agents/multi-agent-orchestration.md) | Coordinate agents and route LLM calls across providers via open standards (A2A, MCP, AI Gateway) |

- **[AI Control Plane](ai-core/ai-trust/index.md)**
  Evaluate, observe, govern, and enforce policy across every AI agent and model in production — making AI safe and compliant at enterprise scale.

    | Building Block | What It Enables |
    |---|---|
    | [Agent Ops](ai-core/ai-trust/agent-ops.md) | Evaluate, observe, and govern agents — benchmarking, red-teaming, runtime guardrails, cost tracking |
    | [AI Compliance](ai-core/ai-trust/ai-compliance.md) | Map AI use cases to regulations, manage risk assessments, and report compliance posture |
    | [AI Cost Management](ai-core/ai-trust/ai-cost-management.md) | Track, allocate, and optimize the cost of AI workloads across the enterprise |
    | [Lifecycle Management](ai-core/ai-trust/lifecycle-management.md) | Manage AI models and agents from onboarding through retirement |

- **[AI Engineering](ai-core/ai-engineering/index.md)**
  Accelerates every phase of software delivery — building new systems with AI assistance and systematically modernizing legacy applications.

    | Building Block | What It Enables |
    |---|---|
    | [Agentic SDLC](ai-core/ai-engineering/agentic-sdlc.md) | IDE-native AI agent spanning planning, coding, testing, documentation, modernization, and CI/CD |
    | [Code Modernization](ai-core/ai-engineering/code-modernization.md) | Transform legacy Java, mainframe, IBM Z, and IBM i applications into modern cloud-native systems |
    | [Integration as Code](ai-core/ai-engineering/integration-as-code.md) | Connect SaaS apps, on-premise systems, APIs, and event streams through a low-code iPaaS model |
    | [Headless Bob](ai-core/ai-engineering/headless-bob.md) | Run Bob autonomously in CI/CD pipelines, scheduled jobs, and event-driven automations |
    | [Context Engineering](ai-core/ai-engineering/context-engineering.md) | Design and optimise the context agents and LLMs receive — prompt architecture, RAG patterns, context window management |

**[Data Core Capabilities](data-core/index.md)**

- **[Context](data-core/context/index.md)**  
  Where data is brought together and made trusted — combining real-time events, metadata enrichment, lineage, quality signals, and observability to give applications and AI the business context they need.

    | Building Block | What It Enables |
    |---|---|
    | [Context Hub](data-core/context/context-hub/index.md) | Combine real-time events, enterprise data, metadata, lineage and policy context for AI and analytics |
    | [Real-Time Streaming](data-core/context/real-time-streaming/index.md) | Stream, transform and govern continuously changing data |
    | [Metadata Enrichment & Data Quality](data-core/context/metadata-enrichment/index.md) | Add business meaning, quality rules, descriptions, terms, classifications and relationships to technical data |
    | [Data Observability](data-core/context/data-observability/index.md) | Detect pipeline and dataset issues before downstream users and AI are impacted |

- **[Pipelines](data-core/pipelines/index.md)**  
  Where data is prepared and moved into forms that applications, search systems, analytics, and AI can consume — covering RAG, document ingestion, Text2SQL, ETL/ELT, and large-file synchronization.

    | Building Block | What It Enables |
    |---|---|
    | [RAG](data-core/pipelines/rag/index.md) | Ground applications and agents with governed enterprise knowledge |
    | [UDI](data-core/pipelines/udi/index.md) | Ingest, parse, cleanse, chunk, enrich and prepare documents for RAG and AI |
    | [Text2SQL](data-core/pipelines/text2sql/index.md) | Convert natural-language questions into SQL using enriched metadata as context |
    | [ETL / ELT](data-core/pipelines/etl/index.md) | Build governed batch integration flows across source, transformation and target stages |
    | [Data Sync](data-core/pipelines/data-sync/index.md) | Synchronize large file sets and repositories securely across WAN and hybrid environments |

- **[Query Engines](data-core/query-engines/index.md)**  
  The consumption layer — enabling users, applications, analytics, and AI to access the right data through federated SQL, vector retrieval, and serverless compute without unnecessary data movement.

    | Building Block | What It Enables |
    |---|---|
    | [Zero-Copy Lakehouse](data-core/query-engines/zero-copy-lakehouse/index.md) | Query data across distributed platforms without unnecessary copying |
    | [Serverless Vector](data-core/query-engines/serverless-vector/index.md) | Elastic vector storage for semantic search, RAG and agent memory patterns |

---

**[Automation Core Capabilities](automation-core/index.md)**

- **[Operate](automation-core/operate/index.md)**
  Automates infrastructure provisioning, configuration management, and workload scheduling to deliver consistent, repeatable pipelines across hybrid cloud environments — reducing manual toil and enabling teams to focus on higher-value work.

    | Building Block | What It Enables |
    |---|---|
    | [Infrastructure as Code](automation-core/operate/infrastructure-as-code.md) | Declarative, version-controlled provisioning across hybrid and multi-cloud environments |
    | [Configure & Automate](automation-core/operate/configure-automate.md) | Agentless, idempotent configuration management and IT automation at enterprise scale |
    | [Workload Orchestration & Scheduling](automation-core/operate/workload-orchestration.md) | Unified scheduling of containers, VMs, batch jobs, and binaries under a single control plane |

- **[Secure](automation-core/secure/index.md)**
  Protects enterprise applications, data, and infrastructure through comprehensive identity management, continuous compliance monitoring, and quantum-safe cryptographic capabilities.

    | Building Block | What It Enables |
    |---|---|
    | [Non-human Identity & Secret Management](automation-core/secure/non-human-identity.md) | Centralized identity governance and dynamic secrets management across hybrid environments |
    | [Application Risk & Continuous Compliance](automation-core/secure/application-risk.md) | Unified application risk visibility, CVE monitoring, and automated compliance posture management |
    | [Cryptographic & Quantum-Safe Readiness](automation-core/secure/cryptographic-readiness.md) | Discover, govern, and migrate cryptographic assets to quantum-safe algorithms |

- **[Optimize](automation-core/optimize/index.md)**
  Continuously improves observability, application performance, cost efficiency, and network health through intelligent automation and analytics across hybrid cloud environments.

    | Building Block | What It Enables |
    |---|---|
    | [Full-Stack Application Observability](automation-core/optimize/full-stack-observability.md) | Automated, real-time visibility across every tier of hybrid applications |
    | [Application Performance](automation-core/optimize/application-performance.md) | Demand-driven resource optimization balancing performance and cost continuously |
    | [Technology Financial Management & FinOps](automation-core/optimize/technology-financial-management.md) | Granular cloud spend visibility, cost allocation, and forecasting |
    | [Network Performance Management](automation-core/optimize/network-performance.md) | High-frequency network monitoring, capacity planning, and AI-powered anomaly detection |
