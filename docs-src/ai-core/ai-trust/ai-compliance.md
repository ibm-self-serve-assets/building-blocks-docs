# AI Compliance

AI regulations are multiplying fast and every AI use case may fall under different rules. Without a systematic approach, compliance becomes a bottleneck to deploying AI — or a risk if missed entirely.

## Why This Matters

- **Regulatory pressure is growing.** The EU AI Act, NIST AI RMF, ISO 42001, and other frameworks impose concrete requirements on AI transparency, risk assessment, and human oversight.
- **Manual compliance is unsustainable.** Assembling evaluation results, monitoring logs, and risk documentation by hand for every model doesn't scale.
- **Hidden compliance gaps create risk.** Without a centralized view of which regulations apply to which AI use cases, gaps go undetected until an audit.
- **Compliance is continuous.** Models change, data drifts, and regulations evolve. Organizations need a governance posture that stays current automatically.

## Key Capabilities

| Capability | What It Does |
|-----------|-------------|
| **Map AI use cases to regulations** | Compliance plans identify which rules apply by use case and region |
| **Position reporting** | Surface potential compliance gaps across the enterprise |
| **Configurable assessment workflows** | Streamline the review cycle for use case owners and compliance teams |
| **Enforcement tracking** | Automatically capture agent evaluation metrics as governance evidence and track pass/breach results against policy thresholds |

## Two Layers: Policy and Proof

AI compliance in watsonx.governance operates at two complementary layers:

| Layer | What It Answers | Evidence |
|-------|----------------|----------|
| **Policy — Governance Console (OpenPages)** | Which regulations apply? What are the risks? Who assessed and approved? | Human-generated and periodic: risk assessments, questionnaires, attestations, sign-offs |
| **Proof — Enforcement Tracking** | Is the deployed AI actually behaving within the defined policies? | Machine-generated and continuous: agent evaluation metrics scored as pass/breach against control thresholds |

The two compose into a closed loop: controls are defined and mapped to regulations in the Governance Console, Enforcement Tracking automatically supplies the operational evidence that those controls are holding, and breaches surface back into governance workflows for teams to act on. Without the proof layer, a use case can be fully documented and approved while the deployed agent drifts out of policy — compliance on paper, but not in production.

## Enforcement Tracking for watsonx Orchestrate

Defining governance policies is no longer enough — organizations need ongoing proof that those policies are actually being enforced. **Enforcement Tracking** connects agent evaluations from watsonx Orchestrate directly to governance controls in watsonx.governance, turning documented policy into continuous, evidence-backed verification. With this capability, watsonx.governance provides enforcement tracking across traditional ML, LLMs, and agents.

It works in three steps:

1. **Connect operational AI to governance controls** — Link watsonx Orchestrate to watsonx.governance, then associate each AI agent with the governance use cases and controls it must satisfy across development and production.
2. **Continuously collect evidence of enforcement** — Evaluation metrics such as hallucination, helpfulness, and toxicity are captured automatically and stored as governance evidence: on a schedule for production agents, on demand for agents still in development. No manual evidence gathering.
3. **Verify controls with automated pass and breach tracking** — Collected metrics are checked against thresholds set by the business, and each result is recorded as a pass or breach in watsonx.governance — giving governance teams, compliance leaders, and auditors a single, continuously updated source of evidence.

The evaluation metrics themselves come from agent evaluations — see the [Agent Ops](agent-ops.md) building block for how watsonx Orchestrate agents are evaluated, red-teamed, and observed.

!!! tip "Learn More"
    - [Announcement: From governance policies to governance proof with Enforcement Tracking](https://www.ibm.com/new/announcements/from-governance-policies-to-governance-proof-with-enforcement-tracking-for-watsonx-orchestrate)
    - [Documentation: Configuring metrics synchronization for watsonx Orchestrate agents](https://www.ibm.com/docs/en/watsonx/saas?topic=console-configuring-metrics-synchronization-watsonx-orchestrate-agents)

## Available Assets

| Script | What It Does |
|--------|-------------|
| **Use Case Inventory Management** | Create and manage AI use cases in the watsonx governance inventory, add compliance metadata (risk level, regulations, ownership) |
| **Governed Tool Catalog** | Register, list, and manage AI tools in the watsonx governance tool catalog |

## Compliance Workflows (OpenPages Governance Console)

For full compliance lifecycle management — regulation mapping, risk assessment, and position reporting — use the **IBM OpenPages Governance Console** integrated with watsonx governance.

| Workflow | What It Does |
|----------|-------------|
| **Regulatory Compliance Management** | Map AI use cases to regulations (EU AI Act, NIST AI RMF), track regulatory changes |
| **Risk Identification & Assessment** | Run risk assessments with configurable questionnaires |
| **Position Reporting** | Dashboard-based visibility into compliance posture across the enterprise |
| **AI Risk Atlas** | Built-in guide to AI risks for planning risk mitigation |

### Setting Up OpenPages Integration

1. Provision an OpenPages instance with "Model Risk Governance" solution
2. Integrate with watsonx governance (API key + fixed URL)
3. Load solution files (questionnaire templates, risk atlas content, sample AI mandates)
4. Create AI use cases in the Governance Console to access compliance workflows

!!! tip "Learn More"
    - [Integrating watsonx governance with OpenPages](https://www.ibm.com/docs/en/openpages/9.2.0?topic=governance-integrating-watsonxgovernance)
    - [Managing risk with Governance Console](https://dataplatform.cloud.ibm.com/docs/content/svc-watsonxgov/wxgov-console.html?context=wx)
    - [Creating use cases in Governance Console](https://dataplatform.cloud.ibm.com/docs/content/svc-watsonxgov/wxgov-model-use-cases.html?context=wx)
    - [IBM AI Governance Facts Client samples](https://github.com/IBM/ai-governance-factsheet-samples)

!!! info "GitHub Repository"
    [AI Compliance Assets](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/ai-compliance)
