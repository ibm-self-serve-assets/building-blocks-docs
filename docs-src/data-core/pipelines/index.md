# Pipelines – Building Blocks

The **Pipelines** use case prepares, transforms, moves and indexes structured and unstructured data for analytics, RAG, search and AI applications.

!!! info "Key principle"
    The quality of AI output depends heavily on the quality of data going in. Pipelines are where that quality is established — through parsing, cleaning, enrichment, chunking and governed transformation before data reaches any retrieval or analytics layer.

---

## Available Building Blocks

| Capability | Products | Best Fit |
|---|---|---|
| **[RAG](rag/index.md)** | IBM watsonx.data OpenRAG + OpenSearch | Enterprise retrieval and agent grounding |
| **[Unstructured Data Integration (UDI)](udi/index.md)** | IBM watsonx.data integration + Docling for IBM watsonx | Document ingestion, parsing, transformation, chunking and enrichment |
| **[Text2SQL](text2sql/index.md)** | IBM watsonx.data intelligence | Natural-language access to governed relational data |
| **[ETL / ELT](etl/index.md)** | IBM watsonx.data integration DataStage + IBM watsonx.data | Batch transformation and data movement |
| **[Data Sync](data-sync/index.md)** | IBM Aspera Sync | High-speed synchronization of files and large repositories over WAN |

---

## Business Value

!!! success "Why Pipelines matter"
    - **Shorten the path from raw data to AI-ready data** — structured pipelines eliminate ad hoc scripts and manual steps between sources and consumers.
    - **Improve RAG retrieval quality** — better extraction, layout preservation, chunking and enrichment directly improve what gets indexed and retrieved.
    - **Enable self-service analytics** — Text2SQL lets business users express queries in plain language while SQL and governance remain the execution layer.
    - **Standardize repeatable integration** — DataStage flows, scheduling and connectors make batch ETL reproducible, governed and auditable.
    - **Move large data globally** — Aspera Sync overcomes WAN latency for large file and repository distribution between sites and clouds.

---

## When to Use

| If you need to… | Use… |
|---|---|
| Ground AI agents in enterprise documents | [RAG](rag/index.md) |
| Ingest and prepare complex PDFs, tables or presentations | [UDI](udi/index.md) |
| Let business users query governed data in plain English | [Text2SQL](text2sql/index.md) |
| Build repeatable batch ETL/ELT across enterprise systems | [ETL / ELT](etl/index.md) |
| Synchronize large file repositories across WAN or cloud sites | [Data Sync](data-sync/index.md) |

---

## Typical Pattern

```mermaid
flowchart LR
    S["Enterprise sources<br/>Files · DBs · SaaS"] --> U["UDI / DataStage<br/>Ingest + transform"]
    U --> R["RAG pipeline<br/>Chunk + embed + index"]
    R --> O["OpenRAG + OpenSearch<br/>Retrieval"]
    S --> E["ETL / ELT<br/>Batch preparation"]
    E --> W["watsonx.data<br/>Governed lakehouse"]
    W --> T["Text2SQL<br/>Natural-language access"]
    W --> O
    O --> A["AI agents / Analytics / Applications"]
    T --> A
```

---

## IBM Products Used

| Product | Role |
|---|---|
| **[IBM watsonx.data OpenRAG](https://www.ibm.com/products/watsonx-data/ai-enterprise-search)** | Managed enterprise RAG service with OpenSearch backend |
| **[IBM watsonx.data integration — UDI](https://www.ibm.com/docs/en/watsonx/wdi/2.4.x?topic=data-integrating-unstructured-documents)** | Visual, drag-and-drop unstructured document pipeline |
| **[Docling for IBM watsonx](https://www.ibm.com/products/docling)** | Advanced document conversion for complex PDFs, tables and layouts |
| **[IBM watsonx.data intelligence](https://www.ibm.com/docs/en/watsonx/wdi/2.4.x?topic=tools-data-intelligence)** | Metadata context for Text2SQL; natural-language query generation |
| **[IBM DataStage](https://www.ibm.com/docs/en/watsonx/wdi/2.4.x?topic=datastage-designing-flows)** | Visual ETL/ELT flow designer with enterprise connectors (part of watsonx.data integration) |
| **[IBM Aspera Sync](https://www.ibm.com/products/aspera/sync)** | High-speed WAN file and repository synchronization |

---

## Design Principles

!!! tip "Build pipelines that last"
    - **Separate preparation from retrieval** — invest in upstream data quality before tuning retrieval or prompting.
    - **Prefer governed pipelines over scripts** — use visual ETL and flow tooling for traceability and operational control.
    - **Keep metadata with data** — always carry source identifiers, document names, permissions and lineage alongside transformed content.
    - **Plan for change** — document updates, schema evolution and deleted records are first-class lifecycle events, not edge cases.
