# Enrichment - Building Blocks

Welcome to the **Enrichment Building Blocks** documentation. These accelerators focus on data preparation, transformation, and quality enhancement to prepare data for AI workloads.

## Overview

Enrichment capabilities provide the foundation for trustworthy AI by ensuring data is properly ingested, transformed, and validated before being used in AI applications. These building blocks handle the critical "data preparation" phase of the AI lifecycle.

---

## Available Building Blocks

### [Automated Data Pipelines](automated-data-pipelines/index.md)

Build and run batch, real-time, replication, and unstructured data pipelines with observability and hybrid integration support.

**Key Features:**

- **Unstructured Data Ingestion**: Process documents, PDFs, images, and media files
- **Structured Data Ingestion**: RDBMS connectors with CDC support
- **Batch and Streaming**: Support for both batch and real-time ingestion
- **Integration**: Seamless integration with IBM watsonx.data

**IBM Products:**

- IBM watsonx.data
- IBM Cloud Object Storage (COS)
- IBM UDI (Unstructured Data Ingestion)
- IBM Db2

---

### [Data Streaming](data-streaming/index.md)

Supports real-time event ingestion, streaming pipelines, and stream processing for operational and analytical use cases.

**Key Features:**

- Real-time data ingestion
- Event-driven architectures
- Stream processing capabilities
- Integration with Apache Kafka

**IBM Products:**

- IBM Event Streams (Apache Kafka)
- IBM Cloud Pak for Data

---

### [Data Enrichment & Quality](data-enrichment-and-quality/index.md)

Text-to-sql, NLQ-to-SQL, governed RAG/Q&A, Open RAG. Improves trust and usability of enterprise data through cataloging, governance, quality controls, lineage, metadata enrichment, and discovery.

**Key Features:**

- **Data Privacy & Encryption**: Protect sensitive data with watsonx.data Intelligence
- **Metadata Enrichment**: Enhance data with business context
- **Quality Controls**: Validate and ensure data quality
- **Governance**: Access controls and compliance features

**IBM Products:**

- IBM watsonx.data Intelligence
- IBM Governance and Catalog
- IBM Data Quality
- IBM Guardium (coming soon)

---

## Use Cases

!!! example "Common Enrichment Scenarios"
    - **Data Lake Population**: Ingest diverse data sources into watsonx.data
    - **Real-time Pipelines**: Stream data from operational systems
    - **Document Processing**: Extract and index document content
    - **Data Quality Assurance**: Validate and cleanse data before AI consumption
    - **Metadata Management**: Enrich data with business context and lineage

---

## Getting Started

!!! tip "Quick Start"
    1. Choose the building block that matches your use case
    2. Follow the specific setup instructions in each building block
    3. Configure your IBM watsonx environment
    4. Start ingesting and enriching your data

---

## Key Benefits

!!! success "Why Use Enrichment Building Blocks?"
    - **Data Quality**: Ensure high-quality data for AI models
    - **Governance**: Built-in compliance and security features
    - **Scalability**: Handle enterprise-scale data volumes
    - **Flexibility**: Support for multiple data sources and formats
    - **Integration**: Seamless integration with IBM watsonx platform

---

## Resources

- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai)
- [IBM watsonx.data Documentation](https://www.ibm.com/docs/en/watsonxdata)
- [IBM watsonx.ai Documentation](https://www.ibm.com/docs/en/watsonx-as-a-service)

---

## Support

For issues or questions, please refer to the [GitHub repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai) or contact IBM support.