# AI Control Plane

**The AI Control Plane** is a practical, composable foundation for building, controlling, and engineering enterprise AI systems. It brings together three groups of building blocks:

- **[Agents](agents/index.md)** — build, orchestrate, and deploy autonomous AI agents that act across business systems.
- **[Govern](govern/index.md)** — evaluate, observe, enforce policy on, and govern every agent and model in production, including cost and compliance.
- **[Engineering](engineering/index.md)** — accelerate software delivery with IBM Bob, from new builds to legacy modernization and integration.

!!! info "How to use this section"
    Start with the business outcome you need, then choose the smallest building block that solves it. The blocks are designed to work independently or together across the full AI lifecycle — from building agents to governing them in production to accelerating the engineering work itself.

![AI Control Plane Architecture](agents/images/AI_BB_Architecture.png)

---

## Building Block Map

| Group | Building Block | Primary Products | What It Enables |
|---|---|---|---|
| **Agents** | [Agent Builder](agents/agent-builder.md) | IBM watsonx Orchestrate (ADK) | Create and deploy LLM-backed, tool-calling agents — from local development to production |
| **Agents** | [Multi-Agent Orchestration](agents/multi-agent-orchestration.md) | IBM watsonx Orchestrate, A2A, AI Gateway | Coordinate wxO agents with external agents via open standards and route LLM calls across providers |
| **Govern** | [Agent Ops](govern/agent-ops.md) | IBM watsonx.governance, IBM watsonx Orchestrate | Evaluate and observe agents — benchmarking, red-teaming, failure analysis, traces and latency |
| **Govern** | [Guardrails](govern/guardrails.md) | IBM watsonx Orchestrate, IBM watsonx.governance | Enforce runtime policy on agents, tools, and models — PII filters, content safety, secrets detection, rate limits, model fallback, and Pass/Flag/Block checks for any framework |
| **Govern** | [Cost Management](govern/cost-management.md) | IBM watsonx Orchestrate, IBM watsonx.governance | Track what watsonx Orchestrate agents cost — tokens per agent and conversation in the platform, and cost in dollars per trace, session, and evaluation scenario with Langfuse |
| **Govern** | [Compliance](govern/compliance.md) | IBM watsonx.governance | Map AI use cases to regulations, manage risk assessments, and report compliance posture |
| **Engineering** | [Agentic SDLC](engineering/agentic-sdlc.md) | IBM Bob | IDE-native AI agent spanning planning, coding, testing, documentation, modernization, and CI/CD |
| **Engineering** | [Code Modernization](engineering/code-modernization.md) | IBM Bob | Transform legacy Java, mainframe, IBM Z, and IBM i applications into modern cloud-native systems |
| **Engineering** | [Integration as Code](engineering/integration-as-code.md) | IBM webMethods | Connect SaaS apps, on-premise systems, APIs, and event streams through a low-code iPaaS model |
| **Engineering** | [Headless Bob](engineering/headless-bob.md) | IBM Bob | Run Bob autonomously in CI/CD pipelines, scheduled jobs, and event-driven automations |

<!-- Hidden for now — restore to the Govern rows above:
| **Govern** | [Lifecycle Management](govern/lifecycle-management.md) | IBM watsonx.governance | Manage AI models and agents from onboarding through retirement |
-->

---

## 1. Agents

> **Goal:** give enterprises a governed, production-ready platform for creating, orchestrating, and deploying autonomous AI agents that act across business systems.

!!! success "Business Value"
    - **From prototype to production without rebuilding infrastructure** — the ADK handles authentication, tool registration, versioning, and deployment so teams focus on business logic.
    - **One platform for all agent types** — single agents, multi-agent systems, voice agents, and external agents (LangChain, OpenAI, CrewAI) all managed through a unified layer.
    - **Open ecosystem** — A2A and Chat Completions standards mean existing agent investments don't have to be rebuilt; external agents plug in without framework lock-in.
    - **Governed at enterprise scale** — centralized visibility into which agents exist, what tools they access, and whether they stay within authorization boundaries.

**Use Agents when:**

- You need to **automate a business workflow** that spans multiple enterprise systems (CRM, ERP, ITSM, databases).
- You have **multiple specialized agents** that need to coordinate and delegate tasks to each other.
- You need to **connect external agents** (built on LangChain, OpenAI, or custom frameworks) into a governed enterprise platform.
- Voice, chat, or API channels need to be connected to the same underlying agent without duplicating logic.

[Explore Agents →](agents/index.md)

---

## 2. Govern

> **Goal:** enforce, evaluate, and govern every AI agent and model in production — making AI safe to operate at enterprise scale.

!!! success "Business Value"
    - **Policy without code changes** — attach PII filters, content guardrails, secrets detection, rate limits, and model fallback to any agent as configuration, updated without redeploy.
    - **Full observability before and after deployment** — benchmark agents, run red-team attacks, trace tool calls, and track cost and latency from one place.
    - **Regulatory confidence** — map AI use cases to EU AI Act, NIST AI RMF, and other frameworks; generate evidence for audits; manage risk assessments at the portfolio level.
    - **Cost accountability** — allocate AI spend by team, use case, or model; identify waste and set budgets before costs become unmanageable.

**Use Govern when:**

- Agents handle sensitive data and need **PII filtering, content guardrails, or secrets detection** enforced at runtime.
- You need to **evaluate agent quality and safety** before deployment — benchmarking, red-teaming, and adversarial testing.
- AI workloads are subject to **regulatory requirements** (GDPR, EU AI Act, HIPAA, NIST AI RMF) that require documented risk assessments and compliance evidence.
- **AI costs are growing** and you need visibility, allocation, and control across teams and workloads.
- Models need **reliability engineering** — fallback routing, load balancing, and retry policies when primary endpoints degrade.

[Explore Govern →](govern/index.md)

---

## 3. Engineering

> **Goal:** accelerate every phase of software delivery — building new systems with AI assistance and systematically modernizing the legacy systems that hold enterprises back.

!!! success "Business Value"
    - **Full SDLC acceleration** — planning, architecture, code generation, testing, documentation, and CI/CD all assisted by IBM Bob, not just code completion.
    - **Legacy modernization at scale** — structured, repeatable AI-driven workflows for Java, mainframe, IBM Z, and IBM i transformation that preserve business logic while eliminating technical debt.
    - **Enterprise integration without custom code** — a cloud-native iPaaS connecting SaaS, on-premise systems, APIs, and event streams through a low-code model, reducing bespoke integration sprawl.
    - **Agentic workflows in the delivery pipeline** — headless Bob brings AI-assisted automation directly into CI/CD, code review, and scheduled engineering tasks.

**Use Engineering when:**

- Development teams need an **AI partner across the full SDLC** — not just code generation, but planning, testing, documentation, and CI/CD.
- The enterprise has **legacy applications** (Java monoliths, mainframe COBOL, IBM Z, IBM i) that need systematic modernization without business logic loss.
- Integrations between SaaS platforms, on-premise systems, and APIs need to be built, governed, and maintained **without heavy custom code**.
- You want **Bob running autonomously** in pipelines and scheduled jobs — code reviews, security scans, documentation updates — without a developer actively in the loop.

[Explore Engineering →](engineering/index.md)

---

## End-to-End Pattern

![AI Control Plane end-to-end pattern — Control, Agents, and Engineering, with users, applications, and foundation models](images/ai-control-plane.png)

!!! note
    This is a **reference composition**, not a requirement to use every building block. Select only the capabilities needed for your use case.

---

## Selection Guide

| If your primary problem is… | Start with… |
|---|---|
| "I need to automate a multi-step business workflow" | [Agent Builder](agents/agent-builder.md) |
| "I have multiple agents that need to work together" | [Multi-Agent Orchestration](agents/multi-agent-orchestration.md) |
| "My agent is producing harmful or non-compliant output" | [Agent Ops](govern/agent-ops.md) |
| "I need PII filtering or content guardrails on my agent" | [Guardrails](govern/guardrails.md) |
| "AI costs are growing and I can't see where" | [Cost Management](govern/cost-management.md) |
| "AI regulation requires documented risk assessments" | [Compliance](govern/compliance.md) |
| "My development team needs an AI partner across the full SDLC" | [Agentic SDLC](engineering/agentic-sdlc.md) |
| "We have legacy Java / mainframe / IBM Z apps that need modernizing" | [Code Modernization](engineering/code-modernization.md) |
| "We need enterprise integrations without heavy custom code" | [Integration as Code](engineering/integration-as-code.md) |
| "I want Bob running unattended in CI/CD, scheduled jobs, or event-driven automations" | [Headless Bob](engineering/headless-bob.md) |

---

## IBM Products Used

| Product | Role |
|---|---|
| **[IBM watsonx Orchestrate](https://www.ibm.com/products/watsonx-orchestrate)** | Agent development and orchestration — ADK, multi-agent coordination, runtime policy controls, and AI Gateway |
| **[IBM watsonx.ai](https://www.ibm.com/products/watsonx-ai)** | Foundation models and AI services — powers LLM reasoning across agents and evaluations |
| **[IBM watsonx.governance](https://www.ibm.com/products/watsonx-governance)** | AI governance — agent evaluation, observability, compliance mapping, and cost management |
| **[IBM Bob](https://bob.ibm.com/)** | AI Agent purpose-built for the Software Development Lifecycle — the development partner across every building block |
| **[IBM webMethods](https://www.ibm.com/products/webmethods-integration)** | Cloud-native iPaaS — hybrid integration, API management, B2B/EDI, and event-driven architectures |

!!! info "GitHub Repository"
    [AI Control Plane Building Blocks](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai)
