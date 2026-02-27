# Question & Answer (Q&A) Building Block

The Q&A building block delivers natural language interfaces to interact with data, providing two powerful capabilities: RAG Service and Text-to-SQL.

## Overview

This building block enables users to query and interact with data using natural language, making data more accessible to both technical and non-technical users.

## Components

### 1. RAG Service

The RAG Service provides a deployable API for orchestrating RAG (Retrieval-Augmented Generation) pipelines. It simplifies ingestion and querying while offering extensible API parameter-level customization options.

#### Features

- **Ingestion Pipeline**: Chunking, merging, and ingestion into Milvus
- **Embedding**: Dense, hybrid, or dual embeddings with selectable models
- **Retriever & Querying**: Hybrid search, reranking (weighted, RRF, cross-encoder), configurable search parameters
- **LLM Integration**: Configurable models and prompt templates
- **Governance**: Integration with watsonx.governance for build-time and runtime governance

![RAG Architecture](https://github.com/user-attachments/assets/7846b5a7-5e22-45bd-94ea-d0176d7a07fc)

#### Key Capabilities

**Ingestion Customization**:
- Document loaders: HTML, JSON, PDF, Markdown, custom loaders
- Collection schema: Configurable via JSON templates
- Embedding models: Hybrid, dense, dense+sparse (HuggingFace, watsonx.ai, IBM models)
- Document processing: Docling/Markdown processing, picture annotation, table cleanup
- Chunkers: Docling hybrid chunker, Markdown text splitter, recursive text splitter

**Querying Customization**:
- Search parameters: Number of docs retrieved and reranked
- Rerankers: Weighted, RRF, cross-encoding
- LLM models: Configurable by provider and prompt template

#### Prerequisites

1. **Python 3.13** installed locally
2. Milvus DB Credentials
3. IBM watsonx.ai environment with project and necessary access control
4. IBM COS Credentials
5. git installed locally

#### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ibm-self-serve-assets/building-blocks.git
   cd building-blocks/data-for-ai/q-and-a/RAG-Accelerator
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

**Ingestion Endpoint**:
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

**Query Endpoint**:
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

### 2. Text-to-SQL

The Text-to-SQL component converts natural language questions into executable SQL queries using watsonx.data intelligence.

#### Features

- Natural language to SQL conversion
- Metadata enrichment for improved query accuracy
- Integration with watsonx.data and watsonx.ai
- Support for multiple database connections

#### Architecture

![Text-to-SQL Architecture](https://github.com/ibm-self-serve-assets/building-blocks/raw/main/data-for-ai/q-and-a/Text-To-SQL/images/image.png)

#### Prerequisites

- IBM watsonx.data instance
- IBM watsonx.ai access
- Presto connection configured
- Python 3.x environment

#### Getting Started

1. Navigate to the Text-to-SQL directory:
   ```bash
   cd building-blocks/data-for-ai/q-and-a/Text-To-SQL
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

- **IBM Code Engine**: See [Code Engine Setup](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/q-and-a/Text-To-SQL/applications/code-engine-setup)
- **Red Hat OpenShift**: See [OpenShift Setup](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/q-and-a/Text-To-SQL/applications/openshift-setup)

## Use Cases

- **Customer Support**: Enable natural language queries over support documentation
- **Business Intelligence**: Allow business users to query data without SQL knowledge
- **Data Exploration**: Facilitate quick insights from large datasets
- **Knowledge Management**: Build searchable knowledge bases with semantic search

## Coming Soon

- .png and .jpg VLM Support
- Additional docling processing functions (image annotation, table exports)
- Prompt Controls & Guardrails
- Governance SDK with evaluation capabilities
- Memory Layers for multi-turn Q&A
- Enhanced error logging

## Resources

- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/q-and-a)
- [RAG Accelerator Demo](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/q-and-a/RAG-Accelerator/demo)
- [Text-to-SQL Demo](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/q-and-a/Text-To-SQL/demo)

## Team

**Created and Architected By**: Anand Das, Anindya Neogi, Joseph Kim, Shivam Solanki