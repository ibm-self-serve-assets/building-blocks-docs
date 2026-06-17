# Vector Search Building Block

Build high-performance **hybrid search** solutions — combining **semantic vector search** with **BM25 keyword search** — using **IBM watsonx.data OpenSearch** and **IBM watsonx.ai** embeddings. Ingest documents from **IBM Cloud Object Storage**, parse them with IBM Docling, generate dense embeddings, and run hybrid search queries that outperform pure vector-only search.

!!! info "GitHub Repository"
    The complete source code and examples are available in the GitHub repository:
    
    **[Building Blocks - Vector Search](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search)**

---

## Overview

The Vector Search building block provides standalone ingestion and hybrid search services for GenAI pipelines. Each integration ships a complete FastAPI asset, a Bob Mode, and a Bob Skill — ready to deploy on IBM Cloud, Red Hat OpenShift, or locally.

> **Recommendation**: Use **hybrid search** (vector + BM25) rather than pure vector-only search. Combining dense semantic search with BM25 keyword matching consistently produces superior retrieval accuracy for RAG applications.

---

## When to Use

| Scenario | Building Block |
|---|---|
| Build a standalone search service for documents stored in IBM COS | [OpenSearch](opensearch.md) |
| Best retrieval accuracy with hybrid search (vector + BM25) | [OpenSearch](opensearch.md) — recommended |
| Power the retrieval layer for a RAG pipeline | [OpenSearch](opensearch.md) |
| Need IBM HCD (Astra DB) serverless vector collections | [DataStax Astra DB](datastax-astra-db.md) |

---

## Supported Integrations

!!! info "Available Integrations"
    - **[OpenSearch](opensearch.md)** — IBM watsonx.data managed OpenSearch with k-NN HNSW + BM25 hybrid search ✅ **Available Now**
    - **[DataStax Astra DB](datastax-astra-db.md)** — IBM HCD serverless Cassandra-backed vector storage ✅ **Available Now**

---

## OpenSearch (Recommended)

**Location**: [`opensearch/`](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search/opensearch)
**IBM Products**: IBM watsonx.data (OpenSearch), IBM watsonx.ai, IBM COS

Hybrid search engine on IBM watsonx.data managed OpenSearch — combines k-NN vector search with BM25 keyword search. Uses HNSW indexes via the k-NN plugin. This is the **recommended backend** for all new hybrid search and RAG projects.

**Key Features:**
- OpenSearch data ingestion FastAPI service
- Hybrid search: dense k-NN vector search + BM25 keyword search with score fusion
- IBM watsonx.ai embedding integration (`ibm/slate-125m-english-rtrvr`, dim=768)
- Bob Mode: `opensearch-builder.zip`
- Bob Skill: `opensearch-vector-search.zip`

[View OpenSearch Details →](opensearch.md)

---

## DataStax Astra DB

**Location**: [`datastax-astradb/`](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search/datastax-astradb)
**IBM Products**: IBM HCD (DataStax Astra DB), IBM watsonx.ai, IBM COS

Vector search using **DataStax Astra DB** — part of the IBM Cloud HCD (Hyper-Converged Database) portfolio. Ingest documents from IBM COS, generate dense embeddings with IBM watsonx.ai, and perform ANN cosine similarity search.

**Key Features:**
- Astra DB vector ingestion FastAPI service
- ANN cosine similarity search via `astrapy` Data API
- Globally distributed, serverless Cassandra-backed storage
- Bob Mode: `astradb-vector-builder.zip`
- Bob Skill: `astradb-vector-setup.zip`

[View DataStax Astra DB Details →](datastax-astra-db.md)

---

## Search Strategy Comparison

| Approach | How It Works | Results |
|---|---|---|
| **Hybrid Search** (recommended) | Dense vector + BM25 keyword with score fusion | ✅ Best accuracy — catches both semantic and exact matches |
| Vector-only search | Dense vector similarity (cosine / ANN) | ⚠️ Misses keyword-specific queries |
| Keyword-only (BM25) | Term frequency / inverse document frequency | ⚠️ Misses paraphrase and semantic matches |

---

## OpenSearch vs Astra DB

| | OpenSearch | Astra DB |
|---|---|---|
| **Search type** | Hybrid (vector + BM25) | Vector ANN (cosine) |
| **IBM product** | IBM watsonx.data | IBM HCD |
| **Architecture** | Managed cluster | Serverless |
| **Best for** | RAG + hybrid search | Serverless global vector storage |
| **Recommendation** | ✅ New projects | When IBM HCD is required |

---

## Embedding Models

| Model ID | Dimension | Language | Use Case |
|---|---|---|---|
| `ibm/slate-125m-english-rtrvr` | 768 | English | Recommended for English RAG |
| `ibm/slate-30m-english-rtrvr` | 384 | English | Lightweight English RAG |
| `intfloat/multilingual-e5-large` | 1024 | Multi | Multilingual RAG |

---

## Prerequisites

- **IBM Cloud API key** — [create at IBM Cloud IAM](https://cloud.ibm.com/iam/apikeys)
- **Python 3.10+**
- **IBM watsonx.ai** project — note Project ID and instance URL
- **IBM Cloud Object Storage** bucket with source documents
- **IBM watsonx.data OpenSearch** instance (for OpenSearch) or **Astra DB** instance (for DataStax)

---

## Use Cases

- **Semantic Search** — Find documents based on meaning, not just keywords
- **RAG Pipelines** — Retrieval-augmented generation for LLMs
- **Knowledge Bases** — Build searchable knowledge repositories
- **Document Discovery** — Find similar documents across large collections
- **Question Answering** — Retrieve relevant context for Q&A systems

---

## Resources

- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search)
- [IBM watsonx.data Documentation](https://cloud.ibm.com/docs/watsonxdata)
- [IBM watsonx.ai Embedding Models](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-models-embed.html)
- [OpenSearch k-NN Plugin](https://opensearch.org/docs/latest/search-plugins/knn/)

---

## Support

For issues or questions, please refer to the [GitHub repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search) or open an issue.
