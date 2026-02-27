# DataStax Astra DB for Vector Search

DataStax Astra DB is a fully managed, cloud-native vector database built on Apache Cassandra, providing serverless deployment and built-in vector search capabilities for GenAI applications.

## Overview

Astra DB combines the reliability and scalability of Apache Cassandra with modern vector search capabilities, making it ideal for production RAG (Retrieval-Augmented Generation) applications and semantic search use cases.

## Key Features

### Serverless Architecture
- **Auto-scaling**: Automatically scales based on workload
- **Pay-per-use**: Only pay for what you consume
- **Zero maintenance**: No infrastructure management required
- **Global distribution**: Deploy across multiple regions

### Vector Search Capabilities
- **Native vector support**: Built-in vector data types and indexing
- **Similarity search**: Efficient nearest neighbor search
- **Hybrid search**: Combine vector and traditional queries
- **Multiple distance metrics**: Cosine, Euclidean, dot product

### Enterprise Features
- **High availability**: 99.99% uptime SLA
- **Security**: Encryption at rest and in transit
- **Compliance**: SOC 2, GDPR, HIPAA compliant
- **Monitoring**: Built-in observability and metrics


## Getting Started

### Prerequisites

1. **DataStax Astra DB Account**: Sign up at [astra.datastax.com](https://astra.datastax.com)
2. **Python 3.8+**: For running the vector search API
3. **IBM COS**: For document storage (optional)

### Step 1: Create an Astra DB Database

1. Log in to [Astra DB Console](https://astra.datastax.com)
2. Click "Create Database"
3. Configure your database:
   - **Database name**: Choose a meaningful name
   - **Keyspace**: Default or custom keyspace name
   - **Cloud provider**: AWS, GCP, or Azure
   - **Region**: Select closest to your application

### Step 2: Get Connection Credentials

1. Navigate to your database in the Astra console
2. Click "Connect" tab
3. Download the secure connect bundle (SCB)
4. Generate an application token with appropriate permissions

### Step 3: Configure Vector Search API

1. Clone the repository:
   ```bash
   git clone https://github.com/ibm-self-serve-assets/building-blocks.git
   cd building-blocks/data-for-ai/vector-search/
   ```

2. Install dependencies:
   ```bash
   python3 -m venv virtual-env
   source virtual-env/bin/activate
   pip3 install -r requirements.txt
   ```

3. Configure environment variables in `.env`:
   ```bash
   # Astra DB Configuration
   ASTRA_DB_ID=<your-database-id>
   ASTRA_DB_REGION=<your-region>
   ASTRA_DB_KEYSPACE=<your-keyspace>
   ASTRA_DB_APPLICATION_TOKEN=<your-token>
   ASTRA_DB_SECURE_BUNDLE_PATH=<path-to-secure-connect-bundle>
   
   # IBM COS Configuration (if using)
   IBM_CLOUD_API_KEY=<your-api-key>
   COS_ENDPOINT=<cos-endpoint>
   COS_SERVICE_INSTANCE_ID=<service-instance-id>
   
   # API Configuration
   REST_API_KEY=<your-secret-key>
   ```

### Step 4: Start the Service

```bash
python3 main.py
```

Access the API at: `http://127.0.0.1:4050/docs`

## Using Astra DB with Vector Search

### Creating a Vector Collection

```python
from astrapy.db import AstraDB

# Initialize Astra DB client
db = AstraDB(
    token="<your-token>",
    api_endpoint="<your-api-endpoint>"
)

# Create a collection with vector support
collection = db.create_collection(
    collection_name="documents",
    dimension=1536,  # Embedding dimension
    metric="cosine"  # Distance metric
)
```

### Ingesting Documents

Use the Vector Search API to ingest documents:

```bash
curl -X POST "http://127.0.0.1:4050/ingest-files" \
  -H "REST_API_KEY: <your-secret>" \
  -H "Content-Type: application/json" \
  -d '{
    "bucket_name": "my-documents",
    "collection_name": "documents",
    "chunk_type": "DOCLING_DOCS"
  }'
```

### Performing Vector Search

```python
# Search for similar documents
results = collection.vector_find(
    vector=[0.1, 0.2, ...],  # Query embedding
    limit=5,
    fields=["text", "metadata"]
)

for doc in results:
    print(f"Score: {doc['$similarity']}")
    print(f"Text: {doc['text']}")
```

## Configuration Options

### Vector Index Configuration

```python
# Configure vector index
collection_config = {
    "dimension": 1536,
    "metric": "cosine",  # Options: cosine, euclidean, dot_product
    "indexing": {
        "deny": [],  # Fields to exclude from indexing
        "allow": ["*"]  # Fields to include in indexing
    }
}
```

### Metadata Filtering

```python
# Search with metadata filters
results = collection.vector_find(
    vector=query_embedding,
    limit=5,
    filter={
        "metadata.category": "technical",
        "metadata.date": {"$gte": "2024-01-01"}
    }
)
```

## Best Practices

### Performance Optimization

1. **Batch Operations**: Insert documents in batches for better throughput
2. **Index Strategy**: Only index fields you need to query
3. **Embedding Dimensions**: Balance between accuracy and performance
4. **Connection Pooling**: Reuse connections for better performance

### Data Modeling

1. **Denormalization**: Store related data together for faster queries
2. **Partition Keys**: Choose partition keys that distribute data evenly
3. **Metadata Design**: Keep metadata flat for efficient filtering
4. **Vector Dimensions**: Use consistent dimensions across collections

### Security

1. **Token Management**: Rotate tokens regularly
2. **Least Privilege**: Grant minimum required permissions
3. **Network Security**: Use secure connect bundles
4. **Encryption**: Enable encryption for sensitive data

## Monitoring and Troubleshooting

### Monitoring Metrics

- **Query latency**: Track p50, p95, p99 latencies
- **Throughput**: Monitor reads/writes per second
- **Storage usage**: Track collection sizes
- **Error rates**: Monitor failed operations

### Common Issues

**Connection Errors**:
- Verify secure connect bundle path
- Check token permissions
- Ensure network connectivity

**Slow Queries**:
- Review index configuration
- Check query complexity
- Monitor database load

**Ingestion Failures**:
- Verify document format
- Check embedding dimensions
- Review error logs

## Integration Examples

### With LangChain

```python
from langchain.vectorstores import AstraDB
from langchain.embeddings import OpenAIEmbeddings

# Initialize vector store
vectorstore = AstraDB(
    embedding=OpenAIEmbeddings(),
    collection_name="documents",
    token="<your-token>",
    api_endpoint="<your-endpoint>"
)

# Add documents
vectorstore.add_texts(
    texts=["Document 1", "Document 2"],
    metadatas=[{"source": "doc1"}, {"source": "doc2"}]
)

# Search
results = vectorstore.similarity_search("query", k=5)
```

### With LlamaIndex

```python
from llama_index.vector_stores import AstraDBVectorStore
from llama_index import VectorStoreIndex

# Initialize vector store
vector_store = AstraDBVectorStore(
    token="<your-token>",
    api_endpoint="<your-endpoint>",
    collection_name="documents",
    embedding_dimension=1536
)

# Create index
index = VectorStoreIndex.from_vector_store(vector_store)

# Query
query_engine = index.as_query_engine()
response = query_engine.query("What is the capital of France?")
```

## Pricing

Astra DB offers flexible pricing:

- **Free Tier**: 25GB storage, 25M reads, 5M writes per month
- **Serverless**: Pay-per-use based on storage and operations
- **Enterprise**: Custom pricing with SLA guarantees

For detailed pricing, visit [DataStax Pricing](https://www.datastax.com/products/datastax-astra/pricing)

## Resources

- [DataStax Astra DB Documentation](https://docs.datastax.com/en/astra/home/astra.html)
- [Vector Search Guide](https://docs.datastax.com/en/astra-serverless/docs/vector-search/overview.html)
- [Python SDK Documentation](https://docs.datastax.com/en/astra-serverless/docs/develop/dev-with-python.html)
- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/vector-search)

## Support

For Astra DB support:
- [DataStax Community](https://community.datastax.com/)
- [Support Portal](https://support.datastax.com/)
- [GitHub Issues](https://github.com/datastax/astrapy/issues)

For Vector Search API support:
- [Building Blocks Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/vector-search)