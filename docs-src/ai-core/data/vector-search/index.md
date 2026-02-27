# Vector Search Building Block

The Vector Search building block provides a modular framework for building GenAI pipelines that combine document parsing and extraction with vector databases for semantic search capabilities.

## Overview

This building block offers an ingestion API that simplifies the process of chunking, embedding, and storing documents in vector databases. It's designed to save significant development and testing time by providing ready-to-use pipelines with extensible customization options.

![Vector Search Architecture](https://github.com/user-attachments/assets/b259ff95-163e-427c-93f3-15a99462f777)

## Features

- **Ingestion Pipeline**: Chunking, merging, and ingestion into vector databases
- **Embedding Options**: Dense, hybrid, or dual embeddings with selectable models
- **Document Processing**: Docling-based parsing with support for HTML, JSON, PDF, Markdown
- **Flexible Chunking**: Multiple chunking strategies (Docling hybrid, Markdown text splitter, recursive)
- **REST API**: Easy-to-use API with authentication

## Supported Vector Databases

The building block supports multiple vector database solutions:

### [DataStax Astra DB](datastax-astra-db.md)
A fully managed, cloud-native vector database built on Apache Cassandra, offering:
- Serverless deployment
- Global distribution
- Built-in vector search capabilities
- Seamless scaling

### [OpenSearch](opensearch.md)
An open-source search and analytics suite with vector search capabilities:
- Hybrid search (keyword + vector)
- Flexible deployment options
- Rich query DSL
- Integration with existing OpenSearch clusters

## Key Capabilities

### Document Loaders
- HTML documents
- JSON files
- PDF documents
- Markdown files
- Custom loaders

### Embedding Models
- **Dense embeddings**: Traditional vector representations
- **Hybrid embeddings**: Combination of dense and sparse vectors
- **Dual embeddings**: Separate embeddings for different purposes
- Support for HuggingFace, watsonx.ai, and IBM models

### Document Processing
- Docling/Markdown processing
- Picture annotation
- Table cleanup
- Custom processing pipelines

### Chunking Strategies
- **Docling hybrid chunker**: Intelligent chunking based on document structure
- **Markdown text splitter**: Preserves markdown formatting
- **Recursive text splitter**: Hierarchical text splitting

## Deployment Options

The Vector Search API can be deployed:

- **Locally**: For development and testing
- **IBM Code Engine**: Serverless container platform
- **Red Hat OpenShift**: Enterprise Kubernetes platform
- **Docker**: Containerized deployment

## Getting Started

### Prerequisites

1. watsonx.data environment with vector database (Milvus/Astra DB/OpenSearch)
2. Python 3.13 installed locally
3. git installed locally
4. IBM COS credentials
5. Vector database credentials

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ibm-self-serve-assets/building-blocks.git
   cd building-blocks/data-for-ai/vector-search/
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
   - **Vector DB credentials**: Host, port, username, password
   - **IBM COS credentials**: API key, endpoint, service instance ID
   - **REST_API_KEY**: Set a unique value for API authentication

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

## API Usage

### Ingestion Endpoint

**Endpoint**: `POST /ingest-files`

**Request Body**:
```json
{
    "bucket_name": "<cos-bucket>",
    "collection_name": "<collection-name>",
    "chunk_type": "DOCLING_DOCS"
}
```

**Parameters**:
- `bucket_name`: Name of the S3/COS bucket containing documents
- `collection_name`: Target collection to create or upsert into
- `chunk_type`: Chunking strategy (DOCLING_DOCS, MARKDOWN, RECURSIVE)

**Headers**:
```
REST_API_KEY: <your-secret>
Content-Type: application/json
```

**Example using Python**:
```python
import json, requests

url = "http://127.0.0.1:4050/ingest-files"

payload = json.dumps({
    "bucket_name": "<cos-bucket>",
    "collection_name": "<collection-name>",
    "chunk_type": "DOCLING_DOCS"
})

headers = {
    "REST_API_KEY": "<your-secret>",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, data=payload)
print(response.text)
```

## Use Cases

- **Semantic Search**: Find documents based on meaning, not just keywords
- **RAG Pipelines**: Retrieval-augmented generation for LLMs
- **Knowledge Bases**: Build searchable knowledge repositories
- **Document Discovery**: Find similar documents across large collections
- **Question Answering**: Retrieve relevant context for Q&A systems

## Customization

The API supports extensive customization:

- **Collection Schema**: Configurable via JSON templates
- **Embedding Models**: Choose from multiple providers and models
- **Document Processing**: Custom processing pipelines
- **Chunking Strategies**: Adjust chunk size and overlap
- **Metadata Extraction**: Custom metadata fields

## Coming Soon

- .png and .jpg VLM Support
- Additional docling processing functions (image annotation, table exports)
- Enhanced error logging with structured logs
- Performance optimization for large-scale ingestion
- Additional vector database integrations

## Performance Considerations

- **Batch Processing**: Process multiple documents in parallel
- **Chunk Size**: Balance between context and retrieval precision
- **Embedding Dimensions**: Higher dimensions = more accuracy but slower
- **Index Configuration**: Optimize for your query patterns

## Resources

- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/vector-search)
- [DataStax Astra DB Documentation](datastax-astra-db.md)
- [OpenSearch Documentation](opensearch.md)

## Team

**Created and Architected By**: Anand Das, Anindya Neogi, Joseph Kim, Shivam Solanki

## Support

For issues or questions, please refer to the [GitHub repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/vector-search) or open an issue.