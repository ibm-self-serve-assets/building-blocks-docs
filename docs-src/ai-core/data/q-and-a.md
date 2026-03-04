# Question & Answer (Q&A) Building Block

Natural language interfaces to interact with data through RAG (Retrieval-Augmented Generation) and Text-to-SQL powered by IBM watsonx.

## Overview

This building block enables users to query and interact with data using natural language, making data more accessible to both technical and non-technical users.

---

## Components

### 1. RAG (Retrieval-Augmented Generation)

#### RAG Accelerator

The RAG Accelerator provides a complete RAG pipeline with document processing, embedding generation, and semantic search capabilities. It's a deployable API that simplifies ingestion and querying while offering extensible customization options.

#### Features

- **Ingestion Pipeline**: Chunking, merging, and ingestion into Milvus
- **Embedding**: Dense, hybrid, or dual embeddings with selectable models
- **Retriever & Querying**: Hybrid search, reranking (weighted, RRF, cross-encoder), configurable search parameters
- **LLM Integration**: Configurable models and prompt templates
- **Governance**: Integration with watsonx.governance for build-time and runtime governance

<p align="center">
  <img src="https://github.com/user-attachments/assets/7846b5a7-5e22-45bd-94ea-d0176d7a07fc" alt="RAG Architecture" />
</p>

#### Key Capabilities

**Ingestion Customization:**

- Document loaders: HTML, JSON, PDF, Markdown, custom loaders
- Collection schema: Configurable via JSON templates
- Embedding models: Hybrid, dense, dense+sparse (HuggingFace, watsonx.ai, IBM models)
- Document processing: Docling/Markdown processing, picture annotation, table cleanup
- Chunkers: Docling hybrid chunker, Markdown text splitter, recursive text splitter

**Querying Customization:**

- Search parameters: Number of docs retrieved and reranked
- Rerankers: Weighted, RRF, cross-encoding
- LLM models: Configurable by provider and prompt template

#### Prerequisites

!!! info "Requirements"
    1. **Python 3.13** installed locally
    2. Milvus DB Credentials
    3. IBM watsonx.ai environment with project and necessary access control
    4. IBM COS Credentials
    5. git installed locally

#### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ibm-self-serve-assets/building-blocks.git
   cd building-blocks/data-for-ai/question-and-answer/rag/assets/rag-accelerator
   ```

2. Create a Python virtual environment:
   ```bash
   python3 -m venv virtual-env
   source virtual-env/bin/activate
   pip3 install -r requirements.txt
   ```

3. Configure environment variables:
   ```bash
   cp env .env
   ```

4. Update `.env` with your credentials:
   - **Milvus credentials**: `WXD_MILVUS_HOST`, `WXD_MILVUS_PORT`, `WXD_MILVUS_USER`, `WXD_MILVUS_PASSWORD`
   - **watsonx.ai credentials**: `WATSONX_MODEL_ID`, `WATSONX_PROJECT_ID`, `WATSONX_APIKEY`, `WATSONX_URL`
   - **IBM COS credentials**: `IBM_CLOUD_API_KEY`, `COS_ENDPOINT`, `COS_AUTH_ENDPOINT`, `COS_SERVICE_INSTANCE_ID`
   - **REST_API_KEY**: Set a unique value for API authentication

#### Running the Service

Start the application:
```bash
python3 main.py
```

Or using Uvicorn:
```bash
uvicorn app.main:app --host 127.0.0.1 --port 4050 --reload
```

Access Swagger UI at: `http://127.0.0.1:4050/docs`

#### API Endpoints

**Ingestion Endpoint:**
```
POST /ingest-files
```

Request body:
```json
{
    "bucket_name": "<cos-bucket>",
    "collection_name": "<milvus-collection>",
    "chunk_type": "DOCLING_DOCS"
}
```

**Query Endpoint:**
```
POST /query
```

Request body:
```json
{
    "collection_name": "<milvus-collection>",
    "query": "<query text>"
}
```

---

### 2. Text-to-SQL

The Text-to-SQL component converts natural language questions into executable SQL queries using watsonx.data intelligence.

#### Features

- Natural language to SQL conversion
- Metadata enrichment for improved query accuracy
- Integration with watsonx.data and watsonx.ai
- Support for multiple database connections

#### Architecture

<p align="center">
  <img src="https://github.com/ibm-self-serve-assets/building-blocks/raw/main/data-for-ai/question-and-answer/text-to-sql/assets/asset-1/images/image.png" alt="Text-to-SQL Architecture" />
</p>

#### Prerequisites

!!! info "Requirements"
    - IBM watsonx.data instance
    - IBM watsonx.ai access
    - Presto connection configured
    - Python 3.x environment

#### Getting Started

1. Navigate to the Text-to-SQL directory:
   ```bash
   cd building-blocks/data-for-ai/question-and-answer/text-to-sql/assets/asset-1
   ```

2. Set up metadata enrichment:
   ```bash
   cd metadata_enrichment_text2sql
   pip install -r requirements.txt
   ```

3. Configure `config.py` with your credentials and connection details

4. Run the metadata enrichment:
   ```bash
   python main.py
   ```

#### Deployment Options

The Text-to-SQL application can be deployed on:

- **IBM Code Engine**: See [Code Engine Setup](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/question-and-answer/text-to-sql/assets/asset-1/applications/code-engine-setup)
- **Red Hat OpenShift**: See [OpenShift Setup](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/question-and-answer/text-to-sql/assets/asset-1/applications/openshift-setup)

---

## Use Cases

- **Customer Support**: Enable natural language queries over support documentation
- **Business Intelligence**: Allow business users to query data without SQL knowledge
- **Data Exploration**: Facilitate quick insights from large datasets
- **Knowledge Management**: Build searchable knowledge bases with semantic search

---

## Coming Soon

!!! note "Upcoming Features"
    - .png and .jpg VLM Support
    - Additional docling processing functions (image annotation, table exports)
    - Prompt Controls & Guardrails
    - Governance SDK with evaluation capabilities
    - Memory Layers for multi-turn Q&A
    - Enhanced error logging

---

## IBM Products Used

This building block leverages the following IBM products and services:

### IBM watsonx.ai
Enterprise-ready AI and data platform for building, deploying, and managing AI models.

- **Purpose**: LLM integration for RAG and Text-to-SQL generation
- **Documentation**: [IBM watsonx.ai Documentation](https://www.ibm.com/docs/en/watsonx-as-a-service)
- **Getting Started**: [watsonx.ai Quick Start](https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/welcome-main.html)

### IBM watsonx.data
Open, hybrid, and governed data store built on an open lakehouse architecture.

- **Purpose**: Vector database (Milvus) hosting and data management
- **Documentation**: [IBM watsonx.data Documentation](https://www.ibm.com/docs/en/watsonxdata)
- **Getting Started**: [watsonx.data Getting Started](https://cloud.ibm.com/docs/watsonxdata?topic=watsonxdata-getting-started)

### IBM watsonx.data Intelligence
AI-powered data intelligence and governance platform.

- **Purpose**: Text-to-SQL generation with metadata enrichment
- **Documentation**: [watsonx.data Intelligence Documentation](https://www.ibm.com/docs/en/watsonx/wdi/saas)
- **Getting Started**: [Setting up watsonx.data Intelligence](https://www.ibm.com/docs/en/watsonx/wdi/saas?topic=cloud-setting-up-watsonxdata-intelligence)

### IBM Cloud Object Storage (COS)
Scalable, secure object storage for unstructured data.

- **Purpose**: Document storage for RAG ingestion pipeline
- **Documentation**: [IBM COS Documentation](https://cloud.ibm.com/docs/cloud-object-storage)
- **Getting Started**: [COS Getting Started](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage)

### Milvus Vector Database
Open-source vector database for AI applications (hosted on watsonx.data).

- **Purpose**: Vector storage and semantic search for RAG
- **Documentation**: [Milvus Documentation](https://milvus.io/docs)
- **Integration**: [Milvus on watsonx.data](https://www.ibm.com/docs/en/watsonxdata?topic=services-milvus)

---

## Demo Videos

### RAG Accelerator Demo

Watch the RAG Accelerator in action, demonstrating the complete RAG pipeline from document ingestion to semantic question answering:

<video width="100%" controls>
  <source src="../demos/rag-accelerator-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

**Demo Highlights:**

- Document ingestion from IBM Cloud Object Storage (COS)
- Docling-based document parsing and chunking
- Embedding generation using IBM watsonx.ai
- Vector storage and indexing in Milvus
- Semantic search and retrieval
- RAG-powered question answering with LLM

### Text-to-SQL Demo

Watch the Text-to-SQL application convert natural language questions into executable SQL queries using metadata-enriched prompts:

<video width="100%" controls>
  <source src="../demos/text-to-sql-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

**Demo Highlights:**

- Natural language question input
- Metadata enrichment from watsonx.data Intelligence
- SQL query generation using IBM watsonx.ai
- Query execution against watsonx.data
- Result display and formatting
- Error handling and query refinement

---

## Team

**Created and Architected By**: Anand Das, Anindya Neogi, Joseph Kim, Shivam Solanki