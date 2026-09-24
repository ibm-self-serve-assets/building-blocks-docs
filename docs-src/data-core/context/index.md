# Context – Building Blocks

The **Context** use case brings together data in motion, data at rest, metadata, governance and observability so applications and AI agents can operate on information that is both **current and understandable**.

!!! note "What makes Context different"
    Most data platforms excel at storing and querying data. Context adds the **when** and **what it means** — live events from the Streamhouse architecture, business definitions from a governed metadata layer, and continuous monitoring to know when something goes wrong.

---

## Available Building Blocks

| Capability | Products | Best Fit |
|---|---|---|
| **[Context Hub](context-hub/index.md)** | IBM Confluent + IBM watsonx.data + IBM watsonx.data intelligence | Build a governed context layer across streaming and enterprise data |
| **[Streamhouse](streamhouse/index.md)** | IBM Confluent — Connect + Kafka + Flink + Stream Governance + Tableflow + Real-Time Context Engine | Capture, transport, transform, govern, and serve continuously changing enterprise data |
| **[Metadata Enrichment & Data Quality](metadata-enrichment/index.md)** | IBM watsonx.data intelligence | Add business meaning, quality rules and governance metadata to technical assets |
| **[Data Observability](data-observability/index.md)** | IBM watsonx.data integration + IBM Data Observability by Databand | Detect anomalies, failures and freshness/SLA issues in data operations |

---

## Business Value

!!! success "Why Context matters"
    - Make real-time operational data usable by analytics and AI without batch delays.
    - Give data consumers a consistent business vocabulary, richer descriptions and governed lineage.
    - Reduce time spent finding the right data or diagnosing broken pipelines.
    - Improve auditability by carrying lineage, policy and metadata context with data products.
    - Allow AI agents to react to live state rather than acting on stale snapshots.

---

## When to Use

| Scenario | Recommended Building Block |
|---|---|
| AI agents need live facts plus historical or reference context | [Context Hub](context-hub/index.md) |
| Need continuously current business state for applications, analytics, or AI | [Streamhouse](streamhouse/index.md) |
| Need CDC, IoT ingestion, stream processing, or governed event pipelines | [Streamhouse](streamhouse/index.md) |
| Column names and schemas are cryptic or missing business context | [Metadata Enrichment](metadata-enrichment/index.md) |
| Pipelines break and the impact is discovered too late | [Data Observability](data-observability/index.md) |
| Text2SQL accuracy is poor because metadata is weak | [Metadata Enrichment](metadata-enrichment/index.md) |

---

## Typical Pattern

```mermaid
flowchart LR
    SRC["Enterprise Data Sources<br/>Databases · SaaS · IoT · Applications"]
    subgraph SH["Streamhouse"]
        CONNECT["Connect"] --> KAFKA["Kafka"] --> FLINK["Apache Flink"]
        FLINK --> GOV["Schema Registry · Stream Lineage<br/>Stream Quality · Data Portal"]
        GOV --> TABLE["Tableflow / Iceberg"]
        GOV --> RTCE["Real-Time Context Engine"]
    end
    SRC --> CONNECT
    W["IBM watsonx.data<br/>Open lakehouse"] --> M["watsonx.data intelligence<br/>Metadata enrichment + governance"]
    TABLE --> W
    RTCE --> AGENTS["Applications / AI Agents"]
    TABLE --> O["Data Observability / Databand"]
    W --> O
    M --> ANALYTICS["Analytics / AI"]
    W --> ANALYTICS
```

---

## IBM Products Used

| Product | Role |
|---|---|
| **[IBM Confluent](https://www.ibm.com/products/confluent)** | Streamhouse — Connect + Kafka + Apache Flink + Schema Registry + Stream Lineage + Stream Quality + Data Portal + Tableflow + Real-Time Context Engine |
| **[IBM watsonx.data](https://www.ibm.com/products/watsonx-data)** | Open hybrid lakehouse — storage, Presto, Spark, Iceberg |
| **[IBM watsonx.data intelligence](https://www.ibm.com/docs/en/watsonx/wdi/2.4.x?topic=data-enriching-your-assets)** | Metadata enrichment, business glossary, classifications, lineage, quality |
| **[IBM Data Observability by Databand](https://www.ibm.com/products/watsonx-data-integration/data-observability)** | Pipeline and dataset monitoring, anomaly detection, alerting |
