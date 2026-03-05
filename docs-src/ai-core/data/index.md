# Data - Building Blocks

Welcome to the **Data Building Blocks** documentation. This collection provides ready-to-use accelerators that make it easier to operationalize data for AI/GenAI use cases.

## Overview

This framework provides ready-to-use accelerators that address critical capabilities required to manage, process, and secure data for AI-driven applications. These accelerators are designed to integrate seamlessly with existing enterprise systems, reducing time-to-value for AI projects.

!!! info "GitHub Repository"
    The complete source code and examples are available in the GitHub repository:
    
    **[Building Blocks - Data](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai)**

---

## Available Building Blocks

### [Question & Answer (Q&A)](q-and-a.md)

Natural language interfaces to interact with data through RAG (Retrieval-Augmented Generation) and Text-to-SQL powered by IBM watsonx.

**Key Components:**

- **RAG Accelerator**: Complete RAG pipeline with document processing, embedding, and semantic search
- **Text-to-SQL**: Converts natural language questions into executable SQL queries with metadata enrichment

---

### [Zero-Copy Lakehouse](zero-copy-lakehouse.md)

Enables seamless querying across databases, warehouses, and cloud object stores without data duplication.

**Key Benefits:**

- Reduces costs and latency by eliminating data movement
- Built on open table formats (Iceberg/Delta)
- Provides federated query capability

---

### [Data Ingestion](data-ingestion.md)

Comprehensive data ingestion solutions for IBM watsonx.data covering unstructured and structured data sources.

**Supported Data Types:**

- **Unstructured Data Ingestion**: Process documents, PDFs, images, and unstructured content
- **Structured Data Ingestion**: Database connectors with CDC support for RDBMS platforms

---

### [Vector Search](vector-search/index.md)

Provides a vector-based retrieval service for GenAI pipelines with semantic similarity search capabilities.

**Supported Databases:**

- **[Milvus](vector-search/milvus.md)**: High-performance vector database optimized for billion-scale vector search (Available Now)
- **[OpenSearch](vector-search/opensearch.md)**: Enterprise search with hybrid vector and keyword search capabilities (Planned)
- **[DataStax Astra DB](vector-search/datastax-astra-db.md)**: Cloud-native vector database with global distribution (Planned)

---

### [Data Security and Encryption](data-security-and-encryption.md)

Protects sensitive data through masking, encryption, and access controls.

**Key Features:**

- Data privacy and encryption with watsonx.data Intelligence
- Project & Catalog automation
- Data protection and masking workflows
- Guardium integration (coming soon)

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

!!! success "Why Use Data Building Blocks?"
    
    - **Cost Savings**: Eliminate redundant storage and data movement
    - **Faster Insights**: Reduce ETL delays and processing time
    - **Single Source of Truth**: Maintain data consistency across systems
    - **Enhanced Security**: Protect sensitive data with governance controls
    - **Scalability**: Optimized for enterprise AI workloads

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