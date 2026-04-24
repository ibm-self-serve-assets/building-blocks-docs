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
