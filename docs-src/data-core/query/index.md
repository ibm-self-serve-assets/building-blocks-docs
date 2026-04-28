# Query - Building Blocks

Welcome to the **Query Building Blocks** documentation. These accelerators enable AI applications to access, query, and interact with data through various interfaces and storage mechanisms.

## Overview

Query capabilities provide the "data access layer" for AI applications, enabling natural language queries, semantic search, NoSQL storage, and efficient federated data retrieval across multiple sources.

---

## Available Building Blocks

### [Natural Language to Structured Data Query](text-to-sql/index.md)

Natural language interfaces to interact with structured data through advanced query generation, RAG (Retrieval-Augmented Generation), and Text-to-SQL powered by IBM watsonx.

**Key Components:**

- **RAG Accelerator**: Complete RAG pipeline with document processing and semantic search
- **Text-to-SQL**: Convert natural language questions into executable SQL queries
- **Natural Language Query**: Advanced natural language understanding for data queries

**IBM Products:**

- IBM watsonx.ai
- IBM watsonx.data
- IBM watsonx.data Intelligence
- Milvus Vector Database

---

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

### [NoSQL Database](nosql-database/index.md)

Large-scale NoSQL storage with Cassandra compatibility and optional vector capabilities for AI and application workloads.

**Key Features:**

- Apache Cassandra-based serverless database
- Vector collections for AI applications
- Data API and CQL support
- Scalable and highly available

---

### [Federated Search](federated-search/index.md)

Query data across distributed sources with open lakehouse architecture without copying all source data into a single repository.

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

!!! example "Common Query Scenarios"
    - **Semantic Search**: Find documents based on meaning, not just keywords
    - **Question Answering**: Build Q&A systems over enterprise documents
    - **Multi-Cloud Analytics**: Query data across AWS, IBM Cloud, and on-premises
    - **Real-Time Insights**: Access live data without ETL delays
    - **Knowledge Discovery**: Find similar documents across large collections

---

## Resources

- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/query)
- [IBM watsonx.data Documentation](https://www.ibm.com/docs/en/watsonxdata)
- [IBM watsonx.ai Documentation](https://www.ibm.com/docs/en/watsonx-as-a-service)

---

## Support

For issues or questions, please refer to the [GitHub repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/query) or contact IBM support.