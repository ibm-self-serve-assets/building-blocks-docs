# Data - Building Blocks

Welcome to the **Data Building Blocks** documentation. This collection provides ready-to-use accelerators that make it easier to operationalize data for AI/GenAI use cases.

## Overview

This framework provides ready-to-use accelerators that address critical capabilities required to manage, process, and secure data for AI-driven applications. These accelerators are designed to integrate seamlessly with existing enterprise systems, reducing time-to-value for AI projects.

![Data Architecture](https://github.com/user-attachments/assets/3c296ea4-b258-4ead-9007-8e750830b0ca)

## GitHub Repository

The complete source code and examples are available in the GitHub repository:

**[Building Blocks - Data](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai)**

## Available Building Blocks

### [Question & Answer (Q&A)](q-and-a.md)
Delivers natural language interfaces to interact with data, including RAG Service and Text-to-SQL capabilities.

- **RAG Service**: Deployable API for orchestrating RAG pipelines with ingestion and querying capabilities
- **Text-to-SQL**: Converts natural language questions into executable SQL queries

### [Zero-Copy Lakehouse](zero-copy-lakehouse.md)
Enables seamless querying across databases, warehouses, and cloud object stores without data duplication.

- Reduces costs and latency by eliminating data movement
- Built on open table formats (Iceberg/Delta)
- Provides federated query capability

### [Vector Search](vector-search/index.md)
Provides a vector-based retrieval service for GenAI pipelines with semantic similarity search capabilities.

- **[DataStax Astra DB](vector-search/datastax-astra-db.md)**: Vector database solution using DataStax Astra
- **[OpenSearch](vector-search/opensearch.md)**: Vector search using OpenSearch

### [Data Security and Encryption](data-security-and-encryption.md)
Protects sensitive data through masking, encryption, and access controls.

- Data privacy and encryption with watsonx.data Intelligence
- Project & Catalog automation
- Data protection and masking workflows
- Guardium integration (coming soon)

## Getting Started

To get started with any building block:

1. Clone the repository:
   ```bash
   git clone https://github.com/ibm-self-serve-assets/building-blocks.git
   cd building-blocks/data-for-ai
   ```

2. Navigate to the specific building block directory
3. Follow the README instructions for setup and configuration

## Key Benefits

- **Cost Savings**: Eliminate redundant storage and data movement
- **Faster Insights**: Reduce ETL delays and processing time
- **Single Source of Truth**: Maintain data consistency across systems
- **Enhanced Security**: Protect sensitive data with governance controls
- **Scalability**: Optimized for enterprise AI workloads

## Contributing

We welcome contributions! Please fork the repository, create a feature branch, and open a pull request with your changes.

## License

This project is licensed under the Apache 2.0 License.