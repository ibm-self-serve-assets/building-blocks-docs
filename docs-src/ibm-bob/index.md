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
- [Agent Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/ibm-bob/modes): Bob uses wxo's ADK and documentation MCP servers to build custom agents.
- [MCP Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/ibm-bob/modes): Expands on the Agent Builder mode to build and deploy MCP servers on wxo.
- [Domain Agent Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/ibm-bob/modes/domain-agent-builder): Bob builds a tool-augmented RAG agent for partner's custom specific domain.

### Data
- [Data Ingestion](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data-for-ai/data-ingestion/bob-modes/base-modes/.bob/ingestion.yaml): Comprehensive data ingestion for structured and unstructured data
- [Data Security and Encryption](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data-for-ai/data-security-and-encryption/bob-modes/base-modes/.bob/data-security.yaml): Data protection, masking, and encryption workflows
- [Zero-Copy Lakehouse](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data-for-ai/zero-copy-lakehouse/bob-modes/base-modes/.bob/zero-copy-lakehouse.yaml): Federated query across databases and cloud object stores
- [RAG Accelerator](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data-for-ai/question-and-answer/rag/bob-modes/base-modes/.bob/rag-builder.yaml): Complete RAG pipeline with document processing and semantic search
- [Text-to-SQL](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data-for-ai/question-and-answer/text-to-sql/bob-modes/base-modes/.bob/text-to-sql.yaml): Natural language to SQL query conversion with metadata enrichment
- [Milvus Vector Search](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data-for-ai/vector-search/milvus/bob-modes/base-modes/.bob/milvus.yaml): High-performance vector database for billion-scale search
- [OpenSearch Vector Search](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data-for-ai/vector-search/opensearch/bob-modes/base-modes/.bob/opensearch.yaml): Enterprise search with hybrid vector and keyword capabilities
- [DataStax Astra DB](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/data-for-ai/vector-search/datastax-astradb/bob-modes/base-modes/.bob/astradb.yaml): Cloud-native vector database with global distribution

### Automation
- [Application monitoring and observability expert](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/observe/application-observability/bob-modes/base-modes/application-observability.yaml): Connect Bob with the Instana MCP server.
- [Automated Resilience & Compliance](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/optimize/automated-resilience-and-compliance/bob-modes/base-modes/application-resilience.yaml): Unified Vulnerability and Certificate Intelligence via IBM Concert.