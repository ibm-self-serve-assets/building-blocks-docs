# Integration - Building Blocks

Welcome to the **Integration Building Blocks** documentation. These accelerators focus on data ingestion and pipeline automation to bring data into your systems.

## Overview

Integration capabilities provide the foundation for data movement, enabling seamless ingestion of both structured and unstructured data from various sources into your data platform.

---

## Available Building Blocks

### [Data Pipeline (AI Generated)](data-pipeline-ai-generated/index.md)

AI-powered data pipeline generation and automation for IBM watsonx.data covering unstructured and structured data sources.

**Key Features:**

- **AI-Powered Pipeline Generation**: Automatically generate data pipelines using AI
- **Unstructured Data Ingestion**: Process documents, PDFs, images, and media files
- **Structured Data Ingestion**: RDBMS connectors with CDC support
- **Batch and Streaming**: Support for both batch and real-time ingestion
- **Integration**: Seamless integration with IBM watsonx.data

**IBM Products:**

- IBM watsonx.data
- IBM watsonx.ai
- IBM Cloud Object Storage (COS)
- IBM UDI (Unstructured Data Ingestion)
- IBM Db2

---

### [Data Streaming](data-streaming/index.md)

Real-time data streaming capabilities powered by Confluent Platform for continuous data flow into AI pipelines.

**Key Features:**

- **Real-time Event Ingestion**: Capture and process events as they occur
- **Advanced Stream Processing**: ksqlDB, Kafka Streams, and Flink integration
- **Confluent Platform**: Complete data streaming solution by Kafka creators
- **Schema Registry**: Centralized schema management for data governance
- **200+ Connectors**: Pre-built integrations via Kafka Connect

**Products:**

- Confluent Platform
- Confluent Cloud
- Apache Kafka
- IBM watsonx.data

---

### [Data Observability](data-observability/index.md)

Monitor and ensure data pipeline quality and reliability with comprehensive observability capabilities.

**Key Features:**

- **Pipeline Monitoring**: Real-time pipeline execution tracking and performance metrics
- **Data Quality Validation**: Automated quality checks and anomaly detection
- **Alerting System**: Configurable alerts with multi-channel notifications
- **Integration**: Native integration with IBM watsonx.data and popular orchestration tools

**Products:**

- Databand
- IBM watsonx.data

---

## Use Cases

!!! example "Common Integration Scenarios"
    - **Data Lake Population**: Ingest diverse data sources into watsonx.data
    - **Real-time Pipelines**: Stream data from operational systems
    - **Document Processing**: Extract and index document content
    - **Database Migration**: Move data from legacy systems

---

## Resources

- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/integration)
- [IBM watsonx.data Documentation](https://www.ibm.com/docs/en/watsonxdata)

---

## Support

For issues or questions, please refer to the [GitHub repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/integration) or contact IBM support.