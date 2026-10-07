# Documentation for the Bob<span style="color:#0f62fe">+</span> IBM Technology Building Blocks.

This repository hosts the source files for the [Building Blocks Documentation website](https://ibm-self-serve-assets.github.io/building-blocks-docs/).

The markdown files located in [docs-src](./docs-src) are used by Github Pages to build that website.

## Capability Areas

### AI Control Plane – Agents, Govern, and Engineering

| Group | Building Block | Primary Products |
|---|---|---|
| **Agents** | [Agent Builder](docs-src/ai-core/agents/agent-builder.md) | IBM watsonx Orchestrate (ADK) |
| **Agents** | [Multi-Agent Orchestration](docs-src/ai-core/agents/multi-agent-orchestration.md) | IBM watsonx Orchestrate |
| **Govern** | [Agent Ops](docs-src/ai-core/govern/agent-ops.md) | IBM watsonx.governance + IBM watsonx Orchestrate |
| **Govern** | [Guardrails](docs-src/ai-core/govern/guardrails.md) | IBM watsonx Orchestrate + IBM watsonx.governance |
| **Govern** | [Cost Management](docs-src/ai-core/govern/cost-management.md) | IBM watsonx.governance |
| **Govern** | [Compliance](docs-src/ai-core/govern/compliance.md) | IBM watsonx.governance |
<!-- Hidden for now: | **Govern** | [Lifecycle Management](docs-src/ai-core/govern/lifecycle-management.md) | IBM watsonx.governance | -->
| **Engineering** | [Agentic SDLC](docs-src/ai-core/engineering/agentic-sdlc.md) | IBM Bob |
| **Engineering** | [Code Modernization](docs-src/ai-core/engineering/code-modernization.md) | IBM Bob |

---

### Streamhouse

| Group | Building Block | Primary Products |
|---|---|---|
| **Real-Time** | [Stream](docs-src/streamhouse-core/real-time/stream/index.md) | IBM Confluent — Connectors and Kafka |
| **Real-Time** | [Transform](docs-src/streamhouse-core/real-time/transform/index.md) | IBM Confluent (Flink) |
| **Real-Time** | [Govern](docs-src/streamhouse-core/real-time/govern/index.md) | IBM Confluent — Stream Governance |
| **Real-Time** | [Serve](docs-src/streamhouse-core/real-time/serve/index.md) | IBM Confluent — RTCE |
| **Pipelines** | [RAG](docs-src/streamhouse-core/pipelines/rag/index.md) | IBM watsonx.data OpenRAG + OpenSearch |
| **Pipelines** | [UDI](docs-src/streamhouse-core/pipelines/udi/index.md) | IBM watsonx.data integration + Docling for IBM watsonx |
| **Pipelines** | [Text2SQL](docs-src/streamhouse-core/pipelines/text2sql/index.md) | IBM watsonx.data intelligence |
| **Pipelines** | [ETL / ELT](docs-src/streamhouse-core/pipelines/etl/index.md) | IBM watsonx.data integration DataStage + IBM watsonx.data |
| **Pipelines** | [Data Sync](docs-src/streamhouse-core/pipelines/data-sync/index.md) | IBM Aspera Sync |
| **Lakehouse** | [Zero-Copy Lakehouse](docs-src/streamhouse-core/lakehouse/zero-copy-lakehouse/index.md) | IBM watsonx.data (Presto + Spark + Iceberg) |
| **Lakehouse** | [Serverless Vector](docs-src/streamhouse-core/lakehouse/serverless-vector/index.md) | IBM watsonx.data + Astra DB Serverless |
| **Lakehouse** | [Meta Data Enrichment and Quality](docs-src/streamhouse-core/lakehouse/metadata-enrichment/index.md) | IBM watsonx.data intelligence |
| **Lakehouse** | [Data Observability](docs-src/streamhouse-core/lakehouse/data-observability/index.md) | IBM watsonx.data integration + IBM Data Observability by Databand |

---

### Automation – Secure Hybrid Automation

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
