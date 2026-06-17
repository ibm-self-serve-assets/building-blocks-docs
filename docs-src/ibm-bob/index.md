# Customizing IBM Bob to work with the Building Blocks

IBM Bob custom modes allow developers to tailor Bob's behavior by combining reusable Building Blocks. Numerous modes are available to support work in these areas to address specific operational needs and development workflows.

- Building agents
- MCP creation and integration
- Vector Search & Document Processing
- Data Engineering & Knowledge Pipelines
- Application Observability & Monitoring
- Security, Risk & Trust Intelligence

This composable approach enables teams to design highly contextual assistants optimized for specialized tasks and domain-specific scenarios.
      
## Getting started with Building Block modes
Instructions and related files for these custom modes can be found in their respective repository.

#### Building Blocks Explorer
- [Building Blocks Explorer](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/explore-BBs): A generic Bob mode that connects to an MCP server to detect all available Building Blocks. Use it to discover capabilities across the catalog and find the right assets for your use case.

### AI

#### Agents
- [Agent Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/base-modes/agent-builder-base-mode): Foundation mode for agent building workflows, Bob uses wxo's ADK and documentation MCP servers to build custom agents.
- [Domain Agent Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/custom-modes/domain-agent-builder): Bob builds a tool-augmented RAG agent for partner's custom business domain.
- [Voice Agent Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/custom-modes/voice-agent-builder): Build voice-enabled agents (TTS & STT) with multi-channel support (phone, WhatsApp, SMS, Slack)
-  [MCP Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/multi-agent-orchestration/bob-modes/multiagent-orchestration-bob-modes/base-modes): Expands on the Agent Builder mode to build and deploy MCP servers on wxo.
- [Agent-model-gateway-bob-mode](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-gateway/bob-modes/base-modes/agent-model-gateway-bob-mode): Comprehensive mode for integrating third-party LLM models (OpenAI, Anthropic, Google, Azure, AWS Bedrock, and more) into watsonx Orchestrate
- [Agent-Integrate Mode](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/custom-modes/agent-rest-integration): Comprehensive custom mode for integrating IBM watsonx Orchestrate agents into applications via REST API. Provides end-to-end support from agent creation to production-ready code deployment, handling authentication, connection testing, and code generation across all deployment platforms (IBM Cloud, AWS, AWS GovCloud, and On-premises).

#### AI Trust
- [Agent Ops](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/agent-ops/bob-modes/base-modes): Foundation Mode for pre-deployment evaluation of WXO agents. Using WXO ADK, Bob automates benchmark generation and provides a structured workflow for assessing agent behavior across key dimensions, including agent-specific metrics, cost and latency characteristics, and adversarial robustness through red-teaming.
- [Model Evaluation](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/model-evaluation/gen-ai-evaluations/bob-modes/base-modes): Bob helps you evaluate GenAI apps (RAG pipelines, LLM outputs, chatbot safety) using IBM watsonx governance SDK and custom watsonx governance MCP server.


### Data

#### [Data Integration](../data-core/integration/index.md)

- [Data Ingestion](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/integration/data-pipeline-ai-generated/bob-modes): AI-generated data pipeline mode for both structured (DataStage CDC) and unstructured (Docling/UDI) sources. Describe your data source and target — Bob generates the complete ingestion pipeline automatically.
- [Data Observability Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/integration/data-observability/bob-modes): IBM Databand pipeline onboarding, OpenLineage instrumentation for Python/DataStage/Spark, alert policy design and quality threshold tuning, IBM COS report archiving.

#### [Data Intelligence](../data-core/intelligence/index.md)

- [Text-to-SQL](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/text2sql/bob-modes): Natural language to SQL using IBM watsonx.data Intelligence Text2SQL API. Bob helps build the FastAPI application, enrich database metadata (table/column descriptions, synonyms), and evaluate SQL accuracy across Presto, PostgreSQL, Oracle, and Snowflake dialects.
- [Data Lineage Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/data-lineage/bob-modes): End-to-end lineage tracking with IBM Manta and watsonx.data Intelligence. Bob assists with OpenLineage instrumentation, impact analysis, compliance reporting, and lineage visualization.
- [Data Quality Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/data-quality/bob-modes): Data quality rule authoring and monitoring with watsonx.data Intelligence. Bob helps define validation rules, configure profiling, set quality thresholds, and build compliance reports.

#### [Data Retrieval](../data-core/retrieval/index.md)

- [RAG Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/RAG/bob-modes): End-to-end RAG architect — pipeline architecture, hybrid search design, chunking strategy, IBM watsonx.ai embedding model choice, MCP server design, RAG evaluation (RAGAS).
- [RAG Ingestion Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/RAG/bob-modes): Focused ingestion specialist — IBM COS document loading, chunking, watsonx.ai embedding, OpenSearch indexing, MCP ingestion tool design (`ingest_from_cos`).
- [RAG Retrieval Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/RAG/bob-modes): Focused retrieval and generation specialist — hybrid search queries, reranking, watsonx.ai Granite generation, RAGAS evaluation, streaming SSE responses, MCP retrieval tools.
- [OpenSearch Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search/opensearch/bob-modes): IBM watsonx.data OpenSearch k-NN index design, HNSW parameter tuning, hybrid search score fusion, IBM watsonx.ai embedding integration for standalone vector search services.
- [Astra DB Vector Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search/datastax-astradb/bob-modes): DataStax Astra DB (IBM HCD) vector collection design, `astrapy` ANN search patterns, IBM watsonx.ai embedding integration, IBM COS ingestion for serverless global vector storage.


### Automation

#### Build and Deploy
- [Ansible Ops](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/build-and-deploy/Iaas/bob-modes/base-modes): Ansible Operations with Ansible playbook to deploy the Retail Application on RedHat OpenShift Cluster.

#### Optimize
- [Automated Resilience & Compliance](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/optimize/automated-resilience-and-compliance/bob-modes/base-modes/application-resilience.zip): Unified Vulnerability and Certificate Intelligence via IBM Concert.
- [Automated Resource Management](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/optimize/automated-resilience-and-compliance/bob-modes/base-modes/application-resilience.zip): Resource Optimization & Cost Control with IBM Turbonomic.
- [FinOps](https://github.com/ibm-self-serve-assets/building-blocks/blob/finops/optimize/finops/bob-modes/base-modes/cloudability-api.zip): Maximize Cloud Value Through FinOps with IBM Apptio.

#### Secure
- [Secrets Management](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/build-and-deploy/non-human-identity/secrets-management/bob-modes/base-modes): Secrets Management via IBM Hashicorp Vault.

#### Other
- [Application monitoring and observability expert](https://github.com/ibm-self-serve-assets/building-blocks/blob/finops/observe/application-observability/bob-modes/base-modes/application-observability.zip): Connect Bob with the Instana MCP server.
