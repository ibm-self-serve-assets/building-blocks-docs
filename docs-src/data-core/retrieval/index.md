# Retrieval - Building Blocks

Welcome to the **Retrieval Building Blocks** documentation. These accelerators enable AI applications to access, query, and interact with data through various interfaces and storage mechanisms.

## Overview

Retrieval capabilities provide the "data access layer" for AI applications, enabling semantic search, NoSQL storage, and efficient federated data retrieval across multiple sources.

---

## Available Building Blocks

### [Vector Search](vector-search/index.md)

Vector ingestion, embedding, and retrieval for semantic similarity search in GenAI pipelines.

**Key Features:**

- Document parsing and extraction
- Multiple embedding strategies (dense, hybrid, dual)
- Flexible chunking strategies
- REST API with authentication

**Supported Databases:**

- **[Milvus](vector-search/milvus.md)**: High-performance vector database
- **[OpenSearch](vector-search/opensearch.md)**: Hybrid vector and keyword search
- **[DataStax Astra DB](vector-search/datastax-astra-db.md)**: Cloud-native vector database

---

### [No SQL Database](no-sql-database/index.md)

Large-scale NoSQL storage with Cassandra compatibility and optional vector capabilities for AI and application workloads.

**Key Features:**

- Apache Cassandra-based serverless database
- Vector collections for AI applications
- Data API and CQL support
- Scalable and highly available

---

### [Zero Copy](zero-copy/index.md)

Federated analytics without copying data. Query data across distributed sources with open lakehouse architecture.

**Key Benefits:**

- **Cost Savings**: No redundant storage costs
- **Faster Insights**: Avoids ETL delays
- **Single Source of Truth**: Reduces data inconsistencies
- **Flexibility**: Multiple engines access the same data
- **Governance**: Centralized access control

**IBM Products:**

- IBM watsonx.data
- IBM Cloud Object Storage (COS)
- IBM Db2 Database
- Presto Query Engine

---

## Use Cases

!!! example "Common Retrieval Scenarios"
    - **Semantic Search**: Find documents based on meaning, not just keywords
    - **Vector Similarity**: Build RAG systems with semantic document retrieval
    - **Multi-Cloud Analytics**: Query data across AWS, IBM Cloud, and on-premises
    - **Real-Time Insights**: Access live data without ETL delays
    - **NoSQL Storage**: Scalable storage for AI application data

---

## Resources

- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval)
- [IBM watsonx.data Documentation](https://www.ibm.com/docs/en/watsonxdata)
- [IBM watsonx.ai Documentation](https://www.ibm.com/docs/en/watsonx-as-a-service)

---

## Support

For issues or questions, please refer to the [GitHub repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval) or contact IBM support.