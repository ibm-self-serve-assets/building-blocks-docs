# Customizing IBM Bob to work with the Building Blocks

IBM Bob custom modes allow developers to tailor Bob's behavior by combining reusable Building Blocks. Numerous modes are available to support work in these areas to address specific operational needs and development workflows.

- Builidng agents 
- MCP creation and integration
- Vector Search & Document Processing
- Data Engineering & Knowledge Pipelines
- Application Observability & Monitoring
- Security, Risk & Trust Intelligence

This composable approach enables teams to design highly contextual assistants optimized for specialized tasks and domain-specific scenarios.
      
## Getting started with Building Block modes
Instructions and related files for these custom modes can be found in their respective repository.

### Agents
- [Agent Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/base-modes/agent-builder-base-mode): Foundation mode for agent building workflows, Bob uses wxo's ADK and documentation MCP servers to build custom agents.
- [Domain Agent Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/custom-modes/domain-agent-builder): Bob builds a tool-augmented RAG agent for partner's custom business domain.
- [Voice Agent Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/custom-modes/voice-agent-builder): Build voice-enabled agents (TTS & STT) with multi-channel support (phone, WhatsApp, SMS, Slack)
-  [MCP Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/multi-agent-orchestration/bob-modes/multiagent-orchestration-bob-modes/base-modes): Expands on the Agent Builder mode to build and deploy MCP servers on wxo.
- [Agent-model-gateway-bob-mode](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-gateway/bob-modes/base-modes/agent-model-gateway-bob-mode): Comprehensive mode for integrating third-party LLM models (OpenAI, Anthropic, Google, Azure, AWS Bedrock, and more) into watsonx Orchestrate

### AI Trust
- [Build-time AgentOps Evaluator](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/agent-ops/bob-modes/base-modes): Foundation Mode for pre-deployment evaluation of WXO agents. Using WXO ADK, Bob automates benchmark generation and provides a structured workflow for assessing agent behavior across key dimensions, including agent-specific metrics, cost and latency characteristics, and adversarial robustness through red-teaming.
- [Build-time GenAI Evaluator](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/model-evaluation/gen-ai-evaluations/bob-modes/base-modes): Bob helps you evaluate GenAI apps (RAG pipelines, LLM outputs, chatbot safety) using IBM watsonx governance SDK and custom watsonx governance MCP server.


### Data
- [Data Ingestion](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data/_archive/data-ingestion/bob-modes/base-modes): Comprehensive data ingestion for structured and unstructured data
- [RAG Accelerator](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data/_archive/question-and-answer/rag/bob-modes/base-modes): Complete RAG pipeline with document processing and semantic search
- [Text-to-SQL](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data/query/text-to-sql/bob-modes/base-modes): Natural language to SQL query conversion with metadata enrichment


### Automation
- [Application monitoring and observability expert](https://github.com/ibm-self-serve-assets/building-blocks/blob/finops/observe/application-observability/bob-modes/base-modes/application-observability.zip): Connect Bob with the Instana MCP server.
- [Automated Resilience & Compliance](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/optimize/automated-resilience-and-compliance/bob-modes/base-modes/application-resilience.zip): Unified Vulnerability and Certificate Intelligence via IBM Concert.
- [Secrets Management](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/build-and-deploy/secrets-management/bob-modes/base-modes/secrets-management.zip): Secrets Management via IBM Hashicorp Vault.
- [Automated Resource Management](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/optimize/automated-resilience-and-compliance/bob-modes/base-modes/application-resilience.zip): Resource Optimization & Cost Control with IBM Turbonomic.
- [FinOps](https://github.com/ibm-self-serve-assets/building-blocks/blob/finops/optimize/finops/bob-modes/base-modes/cloudability-api.zip): Maximize Cloud Value Through FinOps with IBM Apptio.
