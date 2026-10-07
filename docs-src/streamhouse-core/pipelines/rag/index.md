# RAG

Use **IBM watsonx.data (OpenRAG / OpenSearch)** to ground AI applications and agents in enterprise knowledge using document processing, semantic/vector retrieval, keyword search, hybrid retrieval, and agentic retrieval patterns.

!!! info "Product mapping"
    **IBM watsonx.data (OpenRAG / OpenSearch)** — OpenSearch is automatically provisioned when OpenRAG is enabled in supported watsonx.data environments and serves as the required search backend.

!!! info "GitHub Repository"
    The complete source code and examples are available in the GitHub repository:

    [Building Blocks - RAG](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag)

!!! warning "Architecture note"
    The RAG Building Block is a reusable accelerator and may implement a custom RAG pipeline rather than **OpenRAG** specifically. The current recommended product architecture is **IBM watsonx.data OpenRAG** — a managed enterprise RAG capability provisioned directly from watsonx.data. Refer to the [IBM OpenRAG provisioning documentation](https://www.ibm.com/docs/en/watsonxdata/saas?topic=openrag-provisioning) for details.

---

## Included Assets

| Asset | Description |
|---|---|
| **[rag-accelerator](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/assets/rag-accelerator)** | Combined ingestion, vector search, and Q&A FastAPI service — start here for a full end-to-end RAG pipeline |
| **[opensearch-data-ingestion](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/assets/opensearch-data-ingestion)** | IBM COS → chunk → watsonx.ai embedding → OpenSearch ingestion pipeline |
| **[rag-ingestion-sse-mcp-server](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/assets/rag-ingestion-sse-mcp-server)** | MCP server exposing RAG ingestion as tools for AI agents |
| **[rag-retrieval-fastapi-server](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/assets/rag-retrieval-fastapi-server)** | Standalone REST retrieval service |
| **[rag-retrieval-sse-mcp-server](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/assets/rag-retrieval-sse-mcp-server)** | MCP server exposing RAG retrieval as tools for AI agents |

---

## Bob Modes

| Mode | Description |
|---|---|
| **[RAG Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/bob-modes)** | End-to-end RAG architect — pipeline architecture, hybrid search design, chunking strategy, watsonx.ai embedding model choice, MCP server design, and RAG evaluation (RAGAS) |
| **[RAG Ingestion Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/bob-modes)** | Focused ingestion specialist — IBM COS document loading, chunking, watsonx.ai embedding, OpenSearch indexing, and MCP ingestion tool design |
| **[RAG Retrieval Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/bob-modes)** | Focused retrieval and generation specialist — hybrid search, reranking, watsonx.ai Granite generation, RAGAS evaluation, and MCP retrieval tools |
| **[OpenSearch Builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/bob-modes)** | IBM watsonx.data OpenSearch k-NN index design, HNSW parameter tuning, and hybrid search score fusion |

---

## Bob Skills

| Skill | Description |
|---|---|
| **[rag-pipeline-builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/bob-skills)** | Complete RAG pipeline design — watsonx.ai embedding integration, OpenSearch HNSW + hybrid search design, chunking strategy selection, and evaluation with RAGAS metrics |
| **[rag-mcp-server-builder](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/bob-skills)** | MCP server development (SSE transport, FastMCP), RAG ingestion + retrieval tool design, IBM Bob / Claude integration, and deployment to IBM Code Engine |
| **[opensearch-vector-search](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/bob-skills)** | IBM watsonx.data OpenSearch k-NN index design, HNSW parameter tuning, and hybrid search (vector + BM25) score fusion |

!!! tip "Installing skills and modes"
    Download the `.zip` files and copy the folders to `~/.bob/skills` or `~/.bob/modes` (global) or `<project>/.bob/skills` / `<project>/.bob/modes` (project-level). See the [Data Skills and Modes](../../../streamhouse-core/bob-skills-and-modes.md) page for full installation instructions.

---

## Quick Start

Pick an asset based on your need:

- Full ingestion + retrieval + Q&A in one service? Start with **rag-accelerator**.
- Focused OpenSearch ingestion pipeline only? Use **opensearch-data-ingestion**.
- Retrieval as a REST API? Use **rag-retrieval-fastapi-server**.
- Tool access for Bob or Claude agents? Use one of the **MCP server** assets.

```bash
cd data/pipelines/rag/assets/rag-accelerator
cp .env.example .env
# Configure IBM Cloud, watsonx.ai, COS, and your selected vector store
pip install -r requirements.txt
python main.py
```

Read [`assets/rag-accelerator/README.md`](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/streamhouse/pipelines/rag/assets/rag-accelerator) before running — required variables differ by vector-store choice.

---

## Model Defaults

!!! warning "Verify before production"
    Model IDs in `.env.example` files are current defaults, not permanent. Confirm availability for your region and deployment before provisioning indexes or deploying an application.

    ```
    WATSONX_EMBEDDING_MODEL_ID=ibm/granite-embedding-278m-multilingual
    WATSONX_GENERATION_MODEL_ID=ibm/granite-4-h-small
    ```

    - [Supported foundation models](https://www.ibm.com/docs/en/watsonx/saas?topic=solutions-supported-foundation-models)
    - [Supported embedding models](https://www.ibm.com/docs/en/watsonx/saas?topic=models-supported-embedding)
    - [Foundation model lifecycle](https://www.ibm.com/docs/en/watsonx/saas?topic=model-foundation-lifecycle)

---

## Why It Matters

AI applications and agents that rely only on model memory will hallucinate, miss recent information and lack the specifics of your enterprise. RAG grounds every response in evidence retrieved from your own documents and data — making answers more accurate, explainable and trustworthy.

---

## Business Value

!!! success "Key outcomes"
    | Outcome | What It Means |
    |---|---|
    | **Ground AI in enterprise knowledge** | Retrieve evidence from business documents and data instead of relying on model memory alone |
    | **Improve answer relevance** | Use vector, keyword, hybrid and multi-step retrieval to find the most relevant content |
    | **Reduce custom RAG plumbing** | Provision an integrated enterprise retrieval capability instead of assembling every component manually |
    | **Support governed AI** | Combine retrieval with watsonx.data's broader data, access and governance foundation |
    | **Accelerate enterprise search** | Use the same retrieval foundation for search experiences and AI agents |

---

## When to Use

Use this building block when:

- Users ask questions over large document collections or enterprise knowledge bases.
- An AI agent needs **evidence-backed context** before taking an action.
- Keyword-only search misses semantically relevant content.
- You need a managed path from enterprise data to retrieval rather than a bespoke vector-only stack.

---

## Core Capabilities

| Capability | Description |
|---|---|
| **Enterprise document retrieval** | OpenSearch as the managed search and retrieval backend |
| **Semantic / vector search** | Meaning-based retrieval that goes beyond keyword matching |
| **Keyword search** | Exact terminology, identifiers and lexical matching |
| **Hybrid retrieval** | Combines lexical and semantic signals for higher-quality results |
| **Agentic retrieval** | Patterns that allow agents to select or sequence retrieval approaches |

---

## RAG Pattern

```mermaid
flowchart LR
    D["Documents / enterprise content"] --> U["UDI / Docling<br/>parse + chunk + enrich"]
    U --> E["Embeddings"]
    E --> O["OpenRAG + OpenSearch"]
    Q["User / Agent question"] --> O
    O --> R["Relevant context / evidence"]
    R --> L["LLM / Agent"]
    L --> A["Grounded answer / action"]
```

---

## What to Demonstrate

1. Provision or open the OpenRAG service.
2. Ingest a small, business-relevant document set.
3. Ask a question that keyword search alone would struggle with.
4. Show retrieved passages and evidence.
5. Compare keyword, semantic or hybrid behavior where the UI/API supports it.
6. Show the grounded response and source context.

---

## Demo Video

<video width="100%" controls>
  <source src="demos/rag-accelerator-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## RAG Quality Considerations

!!! tip "Quality starts upstream"
    - Retrieval quality starts with document preparation — use UDI/Docling for complex documents.
    - Preserve document structure and meaningful metadata during chunking.
    - Evaluate retrieval **separately from generation** so poor answers can be traced to the right stage.
    - Use access controls appropriate to the source documents and downstream application.
    - Maintain an evaluation set of representative questions and expected supporting evidence.

---

## IBM Products Used

| Product | Role |
|---|---|
| **[IBM watsonx.data OpenRAG](https://www.ibm.com/products/watsonx-data/ai-enterprise-search)** | Managed enterprise RAG service — orchestrates retrieval, embedding and grounding |
| **[OpenSearch](https://www.ibm.com/docs/en/watsonxdata/saas?topic=openrag-provisioning)** | Search and vector retrieval backend, provisioned alongside OpenRAG |
| **[IBM watsonx.data](https://www.ibm.com/products/watsonx-data)** | Data platform foundation — governance, access control and broader data context |
