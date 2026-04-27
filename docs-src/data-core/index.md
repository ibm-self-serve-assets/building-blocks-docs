# Data - Building Blocks

Welcome to the **Data Building Blocks** documentation. This collection provides ready-to-use accelerators organized into two main categories: **Enrichment** and **Activation**.

## Overview

This framework provides ready-to-use accelerators that address critical capabilities required to manage, process, and secure data for AI-driven applications. These accelerators are designed to integrate seamlessly with existing enterprise systems, reducing time-to-value for AI projects.

!!! info "GitHub Repository"
    The complete source code and examples are available in the GitHub repository:
    
    **[Building Blocks - Data](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data)**

---

## Architecture

The Data building blocks are organized into three core capabilities:

### 1. Integration
Data ingestion and pipeline automation to bring data into your systems from various sources.

### 2. Intelligence
Data quality, governance, and real-time streaming to ensure trustworthy and timely data.

### 3. Query
Data access, retrieval, and query capabilities that enable AI applications to interact with data.

---

## Integration Building Blocks

Integration capabilities focus on data ingestion and pipeline automation.

### [Automated Data Pipelines](integration/automated-data-pipelines/index.md)

Comprehensive data ingestion solutions for IBM watsonx.data covering unstructured and structured data sources.

**Key Features:**

- Unstructured data ingestion (documents, PDFs, images)
- Structured data ingestion with CDC support
- Batch and streaming ingestion modes
- Integration with IBM watsonx.data

---

## Intelligence Building Blocks

Intelligence capabilities focus on data quality, governance, and streaming.

### [Data Enrichment & Quality](intelligence/data-enrichment-and-quality/index.md)

Data governance, quality controls, and security features to ensure trustworthy AI.

**Key Features:**

- Data privacy and encryption
- Metadata enrichment
- Data quality validation
- Access controls and governance

---

### [Data Streaming](intelligence/data-streaming/index.md)

Real-time data streaming capabilities for continuous data flow into AI pipelines.

**Key Features:**

- Real-time event ingestion
- Stream processing for operational and analytical use cases
- Integration with Apache Kafka and IBM Event Streams

---

## Query Building Blocks

Query capabilities enable AI applications to access and query data.

### [Text-to-SQL](query/text-to-sql/index.md)

Natural language interfaces to interact with data through RAG (Retrieval-Augmented Generation) and Text-to-SQL.

**Key Components:**

- **RAG Accelerator**: Complete RAG pipeline with document processing and semantic search
- **Text-to-SQL**: Convert natural language to executable SQL queries

---

### [Vector Search](query/vector-search/index.md)

Vector-based retrieval service for GenAI pipelines with semantic similarity search.

**Supported Databases:**

- **Milvus**: High-performance vector database (Available Now)
- **OpenSearch**: Hybrid vector and keyword search (Planned)
- **DataStax Astra DB**: Cloud-native vector database (Planned)

---

### [NoSQL Database](query/nosql-database/index.md)

NoSQL database solutions for flexible, scalable data storage and retrieval.

**Key Features:**

- Cassandra-based serverless database
- Large-scale NoSQL storage with Cassandra compatibility
- Vector collections and Data API/CQL support

---

### [Federated Search](query/federated-search/index.md)

Query data across distributed sources without data duplication using zero-copy lakehouse architecture.

**Key Benefits:**

- Eliminates data movement and duplication
- Federated query capability across multiple sources
- Built on open table formats (Iceberg/Delta)
- Cost savings and reduced latency

---

## Getting Started

!!! tip "Quick Start Guide"
    Follow these steps to get started with any building block:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ibm-self-serve-assets/building-blocks.git
   cd building-blocks/data
   ```

2. **Navigate to the specific building block directory**

3. **Follow the README instructions** for setup and configuration

---

## Key Benefits

!!! success "Why Use Data Building Blocks?"
    
    - **Faster Time-to-Value**: Pre-built accelerators reduce development time
    - **Cost Savings**: Eliminate redundant storage and data movement
    - **Enhanced Security**: Built-in governance and data protection
    - **Scalability**: Optimized for enterprise AI workloads
    - **Flexibility**: Modular design allows mix-and-match capabilities

---

## IBM Products Used

These building blocks leverage the following IBM products:

- **[IBM watsonx.ai](https://www.ibm.com/products/watsonx-ai)**: Foundation models and AI services
- **[IBM watsonx.data](https://www.ibm.com/products/watsonx-data)**: Open lakehouse platform
- **[IBM Cloud Object Storage](https://www.ibm.com/cloud/object-storage)**: Scalable object storage
- **[IBM Db2](https://www.ibm.com/products/db2)**: Enterprise database

---

## Contributing

We welcome contributions! Please fork the repository, create a feature branch, and open a pull request with your changes.

!!! note "Contribution Guidelines"
    - Follow existing code style and documentation patterns
    - Include tests for new features
    - Update documentation as needed
    - Ensure all tests pass before submitting

---

## License

This project is licensed under the Apache 2.0 License.