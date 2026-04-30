# Milvus Vector Search

High-performance vector database optimized for billion-scale vector search with IBM watsonx integration.

## Overview

Milvus is an open-source vector database built for AI applications, offering high-performance similarity search and analytics for embedding vectors. This building block provides a complete FastAPI service for ingesting documents from IBM Cloud Object Storage (COS) into Milvus with Docling-based parsing and IBM Watsonx embeddings.

---

## IBM Products Used

This building block leverages the following IBM products and services:

- **[watsonx.data](https://www.ibm.com/products/watsonx-data)**: Data lakehouse platform with integrated Milvus vector database support
- **[watsonx.ai](https://www.ibm.com/products/watsonx-ai)**: Foundation models and embedding services for document vectorization
- **[IBM Cloud Object Storage (COS)](https://www.ibm.com/cloud/object-storage)**: Scalable object storage for document repositories
- **[Milvus](https://milvus.io/)**: Open-source vector database for semantic search (integrated with watsonx.data)

---

## Features

### Data Ingestion Service

- FastAPI-based REST API for document ingestion
- Docling-based document parsing and processing
- IBM Watsonx embedding generation
- Automatic vector storage and indexing in Milvus
- Interactive Swagger UI for API testing

### Document Processing

- Support for multiple document formats (PDF, HTML, JSON, Markdown)
- Intelligent chunking strategies:
  - **DOCLING_DOCS**: Structure-aware chunking based on document layout
  - **MARKDOWN**: Preserves markdown formatting during chunking
  - **RECURSIVE**: Hierarchical text splitting
- Metadata extraction and preservation

### Vector Operations

- Automatic collection creation and schema management
- Efficient vector upsert operations
- Configurable embedding dimensions
- Index optimization for fast similarity search

---

## Architecture

```
IBM COS → FastAPI Service → Docling Parser → Watsonx Embeddings → Milvus DB
```

The service pulls documents from COS, processes them with Docling, generates embeddings using Watsonx, and stores the vectors in Milvus for semantic search.

---

## Getting Started

### Prerequisites

!!! info "Requirements"
    1. watsonx.data environment with Milvus database configured
       - [Setup Guide](https://cloud.ibm.com/docs/watsonxdata?topic=watsonxdata-adding-milvus-service)
    2. Python 3.12 installed locally
    3. git installed locally
    4. Milvus credentials (host, port, username, password)
    5. IBM COS credentials (API key, endpoint, service instance ID)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ibm-self-serve-assets/building-blocks.git
   cd building-blocks/data/retrieval/vector-search/milvus/assets/data-ingestion-asset/
   ```

2. Create a Python virtual environment:
   ```bash
   python3 -m venv virtual-env
   source virtual-env/bin/activate
   pip3 install -r requirements.txt
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your credentials:

   **Milvus Credentials:**
   - `WXD_MILVUS_HOST`: Milvus host URL from watsonx.data UI
   - `WXD_MILVUS_PORT`: Milvus port from watsonx.data UI
   - `WXD_MILVUS_USER`: Set to 'ibmlhapikey'
   - `WXD_MILVUS_PASSWORD`: IBM Cloud API Key for Milvus service account

   **IBM COS Credentials:**
   - `IBM_CLOUD_API_KEY`: IBM Cloud API Key for COS access
   - `COS_ENDPOINT`: Service endpoint URL for your COS instance
   - `COS_SERVICE_INSTANCE_ID`: CRN value of COS instance

   **API Security:**
   - `REST_API_KEY`: Set a unique value for API authentication

### Starting the Application

Start the application locally:
```bash
python3 main.py
```

Or using Uvicorn:
```bash
uvicorn app.main:app --host 127.0.0.1 --port 4050 --reload
```

Access Swagger UI at: `http://127.0.0.1:4050/docs`

---

## API Usage

### Ingestion Endpoint

**Endpoint**: `POST /ingest-files`

**Request Body:**
```json
{
    "bucket_name": "<cos-bucket>",
    "collection_name": "<milvus-collection>",
    "chunk_type": "DOCLING_DOCS"
}
```

**Parameters:**

- `bucket_name`: Name of the S3/COS bucket containing documents
- `collection_name`: Target Milvus collection to create or upsert into
- `chunk_type`: Chunking strategy (DOCLING_DOCS, MARKDOWN, RECURSIVE)

**Headers:**
```
REST_API_KEY: <your-secret>
Content-Type: application/json
```

**Example using Python:**
```python
import json, requests

url = "http://127.0.0.1:4050/ingest-files"

payload = json.dumps({
    "bucket_name": "<cos-bucket>",
    "collection_name": "<milvus-collection>",
    "chunk_type": "DOCLING_DOCS"
})

headers = {
    "REST_API_KEY": "<your-secret>",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, data=payload)
print(response.text)
```

### Testing via Swagger UI

1. Navigate to `http://127.0.0.1:4050/docs`
2. Expand **POST /ingest-files**
3. Click `Try it out`
4. Fill in **bucket_name**, **collection_name**, and **chunk_type**
5. Click `Execute`
6. Verify the 200 response and review ingestion statistics

---

## Use Cases

- **Semantic Search**: Find documents based on meaning, not just keywords
- **RAG Pipelines**: Retrieval-augmented generation for LLMs
- **Knowledge Bases**: Build searchable knowledge repositories
- **Document Discovery**: Find similar documents across large collections
- **Question Answering**: Retrieve relevant context for Q&A systems
- **Content Recommendation**: Suggest similar content based on embeddings

---

## Chunking Strategies

### DOCLING_DOCS

- Structure-aware chunking based on document layout
- Preserves document hierarchy (headings, sections, paragraphs)
- Optimal for well-structured documents
- Best for maintaining context across document sections

### MARKDOWN

- Preserves markdown formatting during chunking
- Respects markdown structure (headers, lists, code blocks)
- Ideal for markdown-formatted documentation
- Maintains formatting for better readability

### RECURSIVE

- Hierarchical text splitting with configurable chunk size
- Splits on multiple separators (paragraphs, sentences, words)
- Flexible for various document types
- Good for general-purpose chunking

---

## Performance Considerations

!!! tip "Optimization Guidelines"
    - **Batch Processing**: Process multiple documents in parallel for faster ingestion
    - **Chunk Size**: Balance between context preservation and retrieval precision
    - **Embedding Dimensions**: Higher dimensions provide more accuracy but slower search
    - **Index Type**: Choose appropriate index type (IVF_FLAT, HNSW) based on use case
    - **Collection Sharding**: Distribute data across multiple shards for scalability

---

## Coming Soon

!!! note "Upcoming Features"
    - .png and .jpg VLM (Vision Language Model) support
    - Additional Docling processing functions:
      - Image annotation
      - Table exports
    - Enhanced error logging with structured logs
    - Performance optimization for large-scale ingestion

---

## Resources

- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search)
- [Milvus Documentation](https://milvus.io/docs)
- [watsonx.data Milvus Setup](https://cloud.ibm.com/docs/watsonxdata?topic=watsonxdata-adding-milvus-service)

---

## Team

**Created and Architected By**: Anand Das, Anindya Neogi, Joseph Kim, Shivam Solanki

---

## Support

For issues or questions, please refer to the [GitHub repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search) or open an issue.
