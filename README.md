# Documentation for the Bob<span style="color:#0f62fe">+</span> IBM Technology Building Blocks.

This repository hosts the source files for the [Building Blocks Documentation website](https://ibm-self-serve-assets.github.io/building-blocks-docs/).

The markdown files located in [docs-src](./docs-src) are used by Github Pages to build that website.

## Capability Areas

### AI – Agentic AI Build and Control

| Group | Building Block | Primary Products |
|---|---|---|
| **Agents** | [Agent Builder](docs-src/ai-core/agents/agent-builder.md) | IBM watsonx Orchestrate (ADK) |
| **Agents** | [Multi-Agent Orchestration](docs-src/ai-core/agents/multi-agent-orchestration.md) | IBM watsonx Orchestrate |
| **Control Plane** | [Agent Controls](docs-src/ai-core/agents/agent-controls.md) | IBM watsonx Orchestrate |
| **Control Plane** | [Model Evaluation](docs-src/ai-core/ai-trust/model-evaluation.md) | IBM watsonx.governance |
| **Control Plane** | [Agent Ops](docs-src/ai-core/ai-trust/agent-ops.md) | IBM watsonx.governance |
| **Control Plane** | [Real-Time Guardrails](docs-src/ai-core/ai-trust/real-time-guardrails.md) | IBM watsonx.governance |
| **Control Plane** | [AI Compliance](docs-src/ai-core/ai-trust/ai-compliance.md) | IBM watsonx.governance |
| **Engineering** | [Agentic SDLC](docs-src/ai-core/ai-engineering/agentic-sdlc.md) | IBM Bob |
| **Engineering** | [Code Modernization](docs-src/ai-core/ai-engineering/code-modernization.md) | IBM Bob |

---

### Data – Intelligent Data Platform

| Group | Building Block | Primary Products |
|---|---|---|
| **Context** | [Context Hub](docs-src/data-core/context/context-hub/index.md) | IBM Confluent + IBM watsonx.data + IBM watsonx.data intelligence |
| **Context** | [Real-Time Streaming](docs-src/data-core/context/real-time-streaming/index.md) | IBM Confluent |
| **Context** | [Metadata Enrichment & Data Quality](docs-src/data-core/context/metadata-enrichment/index.md) | IBM watsonx.data intelligence |
| **Context** | [Data Observability](docs-src/data-core/context/data-observability/index.md) | IBM watsonx.data integration + IBM Data Observability by Databand |
| **Pipelines** | [RAG](docs-src/data-core/pipelines/rag/index.md) | IBM watsonx.data OpenRAG + OpenSearch |
| **Pipelines** | [UDI](docs-src/data-core/pipelines/udi/index.md) | IBM watsonx.data integration + Docling for IBM watsonx |
| **Pipelines** | [Text2SQL](docs-src/data-core/pipelines/text2sql/index.md) | IBM watsonx.data intelligence |
| **Pipelines** | [ETL / ELT](docs-src/data-core/pipelines/etl/index.md) | IBM watsonx.data integration DataStage + IBM watsonx.data |
| **Pipelines** | [Data Sync](docs-src/data-core/pipelines/data-sync/index.md) | IBM Aspera Sync |
| **Query Engines** | [Zero-Copy Lakehouse](docs-src/data-core/query-engines/zero-copy-lakehouse/index.md) | IBM watsonx.data (Presto + Spark + Iceberg) |
| **Query Engines** | [Serverless Vector](docs-src/data-core/query-engines/serverless-vector/index.md) | IBM watsonx.data + Astra DB Serverless |

---

### Automation – Intelligent Hybrid Application

| Group | Building Block | Primary Products |
|---|---|---|
| **Operate** | [Infrastructure as Code](docs-src/automation-core/operate/infrastructure-as-code.md) | HashiCorp Terraform |
| **Operate** | [Configure & Automate](docs-src/automation-core/operate/configure-automate.md) | Red Hat Ansible Automation Platform |
| **Operate** | [Workload Orchestration & Scheduling](docs-src/automation-core/operate/workload-orchestration.md) | HashiCorp Nomad |
| **Secure** | [Non-human Identity & Secret Management](docs-src/automation-core/secure/non-human-identity.md) | IBM Verify + HashiCorp Vault |
| **Secure** | [Application Risk & Continuous Compliance](docs-src/automation-core/secure/application-risk.md) | IBM Concert |
| **Secure** | [Cryptographic & Quantum-Safe Readiness](docs-src/automation-core/secure/cryptographic-readiness.md) | IBM Guardium Cryptography Manager |
| **Optimize** | [Full-Stack Application Observability](docs-src/automation-core/optimize/full-stack-observability.md) | IBM Instana |
| **Optimize** | [Application Performance](docs-src/automation-core/optimize/application-performance.md) | IBM Turbonomic |
| **Optimize** | [Technology Financial Management & FinOps](docs-src/automation-core/optimize/technology-financial-management.md) | IBM Cloudability / Apptio |
| **Optimize** | [Network Performance Management](docs-src/automation-core/optimize/network-performance.md) | IBM SevOne Network Performance Management |

---

## Local Development

To test the documentation site locally:

1. Install MkDocs Material:
```bash
pip install mkdocs-material
```

2. Run the development server:
```bash
mkdocs serve
```

3. Open your browser to `http://127.0.0.1:8000`

The site will automatically reload when you make changes to the documentation files.

## Building the Site

To build the static site:
```bash
mkdocs build
```

The built site will be in the `site/` directory.
