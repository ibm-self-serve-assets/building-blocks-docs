# Data for AI - Building Blocks

Welcome to the **Data for AI Building Blocks** documentation. This collection provides ready-to-use accelerators organized into two main categories: **Enrichment** and **Activation**.

## Overview

This framework provides ready-to-use accelerators that address critical capabilities required to manage, process, and secure data for AI-driven applications. These accelerators are designed to integrate seamlessly with existing enterprise systems, reducing time-to-value for AI projects.

!!! info "GitHub Repository"
    The complete source code and examples are available in the GitHub repository:
    
    **[Building Blocks - Data for AI](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai)**

---

## Architecture

The Data for AI building blocks are organized into two core capabilities:

### 1. Enrichment
Data preparation, transformation, and quality enhancement capabilities that prepare data for AI workloads.

### 2. Activation
Data access, retrieval, and query capabilities that enable AI applications to interact with prepared data.

---

## Enrichment Building Blocks

Enrichment capabilities focus on preparing and enhancing data for AI use cases.

### [Automated Data Pipelines](enrichment/automated-data-pipelines/index.md)

Comprehensive data ingestion solutions for IBM watsonx.data covering unstructured and structured data sources.

**Key Features:**

- Unstructured data ingestion (documents, PDFs, images)
- Structured data ingestion with CDC support
- Batch and streaming ingestion modes
- Integration with IBM watsonx.data

---

### [Data Streaming](enrichment/data-streaming/index.md)

Real-time data streaming capabilities for continuous data flow into AI pipelines.

**Key Features:**

- Real-time event ingestion
- Stream processing for operational and analytical use cases
- Integration with Apache Kafka and IBM Event Streams

---

### [Data Enrichment & Quality](enrichment/data-enrichment-and-quality/index.md)

Data governance, quality controls, and security features to ensure trustworthy AI.

**Key Features:**

- Data privacy and encryption
- Metadata enrichment
- Data quality validation
- Access controls and governance

---

## Activation Building Blocks

Activation capabilities enable AI applications to access and query prepared data.

### [Question & Answer (Q&A)](activation/q-and-a/index.md)

Natural language interfaces to interact with data through RAG (Retrieval-Augmented Generation) and Text-to-SQL.

**Key Components:**

- **RAG Accelerator**: Complete RAG pipeline with document processing and semantic search
- **Text-to-SQL**: Convert natural language to executable SQL queries

---

### [Vector Search](activation/vector-search/index.md)

Vector-based retrieval service for GenAI pipelines with semantic similarity search.

**Supported Databases:**

- **Milvus**: High-performance vector database (Available Now)
- **OpenSearch**: Hybrid vector and keyword search (Planned)
- **DataStax Astra DB**: Cloud-native vector database (Planned)

---

### [No SQL Database](activation/no-sql-database/index.md)

NoSQL database solutions for flexible, scalable data storage and retrieval.

**Key Features:**

- Cassandra-based serverless database
- Large-scale NoSQL storage with Cassandra compatibility
- Vector collections and Data API/CQL support

---

### [Zero-Copy Lakehouse](activation/zero-copy-lakehouse/index.md)

Query across databases, warehouses, and cloud object stores without data duplication.

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
   cd building-blocks/data-for-ai
   ```

2. **Navigate to the specific building block directory**

3. **Follow the README instructions** for setup and configuration

---

## Key Benefits

!!! success "Why Use Data for AI Building Blocks?"
    
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