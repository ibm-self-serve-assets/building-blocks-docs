# OpenSearch for Vector Search

OpenSearch is an open-source search and analytics suite with powerful vector search capabilities, enabling hybrid search that combines traditional keyword search with semantic vector similarity.

## Overview

OpenSearch provides a flexible, scalable solution for vector search workloads, making it ideal for RAG (Retrieval-Augmented Generation) applications, semantic search, and recommendation systems. Built on Apache Lucene, it offers enterprise-grade features with the flexibility of open source.

## Key Features

### Vector Search Capabilities
- **k-NN Search**: Efficient k-nearest neighbor search
- **Multiple algorithms**: HNSW, IVF, and more
- **Distance metrics**: Cosine similarity, Euclidean, dot product, L1 norm
- **Approximate search**: Fast approximate nearest neighbor (ANN) search
- **Exact search**: Precise k-NN for smaller datasets

### Hybrid Search
- **Combined queries**: Merge vector and keyword search results
- **Score normalization**: Normalize scores across different search types
- **Weighted results**: Adjust importance of vector vs. keyword matches
- **Filter integration**: Apply filters before or after vector search

### Enterprise Features
- **Scalability**: Horizontal scaling across clusters
- **High availability**: Multi-node clusters with replication
- **Security**: Fine-grained access control, encryption
- **Monitoring**: Built-in dashboards and metrics
- **Multi-tenancy**: Isolated indexes and access controls


## Getting Started

### Prerequisites

1. **OpenSearch Cluster**: Self-hosted or managed service
2. **Python 3.8+**: For running the vector search API
3. **IBM COS**: For document storage (optional)
4. **OpenSearch credentials**: Username and password or API key

### Step 1: Set Up OpenSearch

#### Option A: Using Docker

```bash
# Pull OpenSearch image
docker pull opensearchproject/opensearch:latest

# Run OpenSearch with k-NN plugin
docker run -d \
  -p 9200:9200 \
  -p 9600:9600 \
  -e "discovery.type=single-node" \
  -e "OPENSEARCH_INITIAL_ADMIN_PASSWORD=YourPassword123!" \
  --name opensearch-node \
  opensearchproject/opensearch:latest
```

#### Option B: Using IBM Cloud

1. Provision OpenSearch service on IBM Cloud
2. Note the endpoint URL and credentials
3. Configure security settings

#### Option C: Self-Hosted

Follow the [OpenSearch installation guide](https://opensearch.org/docs/latest/install-and-configure/install-opensearch/index/)

### Step 2: Enable k-NN Plugin

The k-NN plugin is typically included by default. Verify it's enabled:

```bash
curl -X GET "https://localhost:9200/_cat/plugins?v" \
  -u admin:YourPassword123! \
  --insecure
```

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
   # OpenSearch Configuration
   OPENSEARCH_HOST=localhost
   OPENSEARCH_PORT=9200
   OPENSEARCH_USER=admin
   OPENSEARCH_PASSWORD=YourPassword123!
   OPENSEARCH_USE_SSL=true
   OPENSEARCH_VERIFY_CERTS=false
   
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

## Using OpenSearch with Vector Search

### Creating a Vector Index

```python
from opensearchpy import OpenSearch

# Initialize OpenSearch client
client = OpenSearch(
    hosts=[{'host': 'localhost', 'port': 9200}],
    http_auth=('admin', 'password'),
    use_ssl=True,
    verify_certs=False
)

# Create index with k-NN mapping
index_body = {
    "settings": {
        "index": {
            "knn": True,
            "knn.algo_param.ef_search": 100
        }
    },
    "mappings": {
        "properties": {
            "vector": {
                "type": "knn_vector",
                "dimension": 1536,
                "method": {
                    "name": "hnsw",
                    "space_type": "cosinesimil",
                    "engine": "nmslib",
                    "parameters": {
                        "ef_construction": 128,
                        "m": 24
                    }
                }
            },
            "text": {"type": "text"},
            "metadata": {"type": "object"}
        }
    }
}

client.indices.create(index="documents", body=index_body)
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

#### Pure Vector Search

```python
# k-NN search query
query = {
    "size": 5,
    "query": {
        "knn": {
            "vector": {
                "vector": [0.1, 0.2, ...],  # Query embedding
                "k": 5
            }
        }
    }
}

response = client.search(index="documents", body=query)
```

#### Hybrid Search (Vector + Keyword)

```python
# Hybrid search combining vector and text
query = {
    "size": 5,
    "query": {
        "bool": {
            "should": [
                {
                    "knn": {
                        "vector": {
                            "vector": [0.1, 0.2, ...],
                            "k": 10
                        }
                    }
                },
                {
                    "match": {
                        "text": "search query"
                    }
                }
            ]
        }
    }
}

response = client.search(index="documents", body=query)
```

#### Search with Filters

```python
# Vector search with metadata filters
query = {
    "size": 5,
    "query": {
        "bool": {
            "must": [
                {
                    "knn": {
                        "vector": {
                            "vector": [0.1, 0.2, ...],
                            "k": 10
                        }
                    }
                }
            ],
            "filter": [
                {"term": {"metadata.category": "technical"}},
                {"range": {"metadata.date": {"gte": "2024-01-01"}}}
            ]
        }
    }
}

response = client.search(index="documents", body=query)
```

## Configuration Options

### k-NN Algorithm Selection

**HNSW (Hierarchical Navigable Small World)**:
- Best for: High recall, fast search
- Parameters:
  - `ef_construction`: Build-time accuracy (higher = better, slower)
  - `m`: Number of connections per node
  - `ef_search`: Query-time accuracy

```python
"method": {
    "name": "hnsw",
    "space_type": "cosinesimil",
    "engine": "nmslib",
    "parameters": {
        "ef_construction": 128,
        "m": 24
    }
}
```

**IVF (Inverted File Index)**:
- Best for: Large datasets, memory efficiency
- Parameters:
  - `nlist`: Number of clusters
  - `nprobes`: Number of clusters to search

```python
"method": {
    "name": "ivf",
    "space_type": "l2",
    "engine": "faiss",
    "parameters": {
        "nlist": 128,
        "nprobes": 10
    }
}
```

### Distance Metrics

- **cosinesimil**: Cosine similarity (best for normalized vectors)
- **l2**: Euclidean distance
- **l1**: Manhattan distance
- **linf**: Chebyshev distance
- **innerproduct**: Dot product

## Best Practices

### Performance Optimization

1. **Index Settings**:
   - Set appropriate `ef_construction` and `m` values
   - Use `refresh_interval` to batch updates
   - Configure shard count based on data size

2. **Query Optimization**:
   - Use filters to reduce search space
   - Adjust `k` value based on needs
   - Consider using approximate search for speed

3. **Hardware**:
   - Allocate sufficient memory for vector indexes
   - Use SSDs for better I/O performance
   - Scale horizontally for large datasets

### Data Modeling

1. **Vector Dimensions**: Balance between accuracy and performance
2. **Metadata Design**: Keep metadata flat for efficient filtering
3. **Index Strategy**: Separate indexes for different document types
4. **Sharding**: Distribute data evenly across shards

### Security

1. **Authentication**: Use strong passwords or API keys
2. **Encryption**: Enable TLS for data in transit
3. **Access Control**: Implement role-based access control (RBAC)
4. **Network Security**: Restrict access to trusted networks

## Monitoring and Troubleshooting

### Key Metrics to Monitor

- **Query latency**: Track p50, p95, p99 latencies
- **Indexing rate**: Monitor documents indexed per second
- **Memory usage**: Watch heap and k-NN memory usage
- **CPU utilization**: Track CPU usage during queries
- **Disk I/O**: Monitor read/write operations

### Common Issues

**Slow Queries**:
- Increase `ef_search` for better accuracy
- Reduce `k` value if possible
- Add filters to narrow search space
- Check cluster health and resources

**High Memory Usage**:
- Reduce vector dimensions
- Use IVF instead of HNSW
- Increase shard count
- Add more nodes to cluster

**Indexing Failures**:
- Check vector dimensions match mapping
- Verify data format
- Review error logs
- Check disk space

## Integration Examples

### With LangChain

```python
from langchain.vectorstores import OpenSearchVectorSearch
from langchain.embeddings import OpenAIEmbeddings

# Initialize vector store
vectorstore = OpenSearchVectorSearch(
    opensearch_url="https://localhost:9200",
    index_name="documents",
    embedding_function=OpenAIEmbeddings(),
    http_auth=("admin", "password"),
    use_ssl=True,
    verify_certs=False
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
from llama_index.vector_stores import OpensearchVectorStore
from llama_index import VectorStoreIndex

# Initialize vector store
vector_store = OpensearchVectorStore(
    endpoint="https://localhost:9200",
    index="documents",
    http_auth=("admin", "password"),
    use_ssl=True,
    verify_certs=False
)

# Create index
index = VectorStoreIndex.from_vector_store(vector_store)

# Query
query_engine = index.as_query_engine()
response = query_engine.query("What is the capital of France?")
```

## Deployment Options

### Self-Hosted
- Full control over configuration
- Custom hardware optimization
- No vendor lock-in

### IBM Cloud
- Managed service
- Automatic updates and patches
- Built-in monitoring

### AWS OpenSearch Service
- Fully managed
- Integration with AWS services
- Auto-scaling capabilities

## Resources

- [OpenSearch Documentation](https://opensearch.org/docs/latest/)
- [k-NN Plugin Guide](https://opensearch.org/docs/latest/search-plugins/knn/index/)
- [Performance Tuning](https://opensearch.org/docs/latest/tuning-your-cluster/)
- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/vector-search)

## Support

For OpenSearch support:
- [OpenSearch Forum](https://forum.opensearch.org/)
- [GitHub Issues](https://github.com/opensearch-project/OpenSearch/issues)
- [Slack Community](https://opensearch.org/slack.html)

For Vector Search API support:
- [Building Blocks Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/vector-search)