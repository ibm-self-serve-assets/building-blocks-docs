# Query Engines – Building Blocks

The **Query Engines** use case provides fit-for-purpose execution for SQL analytics, large-scale processing, open lakehouse interoperability and vector retrieval — matching the engine to the workload rather than routing everything through a single technology.

!!! info "Core principle"
    Do not force every workload through one engine. Use **Presto** for interactive SQL, **Spark** for distributed processing and complex transformation, and a **vector engine** for similarity retrieval. Apache Iceberg keeps analytic data interoperable across all of them.

---

## Available Building Blocks

| Capability | Products | Best Fit |
|---|---|---|
| **[Zero-Copy Lakehouse](zero-copy-lakehouse/index.md)** | IBM watsonx.data: Presto + Spark + Apache Iceberg | Federated access, interactive SQL, large-scale processing and open tables |
| **[Serverless Vector](serverless-vector/index.md)** | IBM watsonx.data + Astra DB Serverless | Vector similarity search for RAG, semantic search and AI applications |

---

## Business Value

!!! success "Why Query Engines matter"
    - **Reduce unnecessary data movement** — query supported external platforms in place, removing ETL hops that exist only to make data accessible elsewhere.
    - **Use the right engine for each workload** — Presto for interactive SQL, Spark for distributed processing, a vector engine for similarity retrieval.
    - **Preserve open interoperability** — Apache Iceberg lets multiple engines share the same governed tables without proprietary lock-in.
    - **Elastic vector capacity** — serverless vector databases scale with application demand without requiring teams to provision and tune clusters.
    - **Lower total cost of ownership** — avoid duplicated storage and redundant copies of the same dataset.

---

## When to Use

| If you need to… | Use… |
|---|---|
| Query distributed data across platforms without copying it | [Zero-Copy Lakehouse](zero-copy-lakehouse/index.md) |
| Run interactive SQL analytics across a governed lakehouse | [Zero-Copy Lakehouse](zero-copy-lakehouse/index.md) — Presto |
| Large-scale data processing, transformation or ML preparation | [Zero-Copy Lakehouse](zero-copy-lakehouse/index.md) — Spark |
| Store embeddings and run vector similarity search for RAG | [Serverless Vector](serverless-vector/index.md) |
| Elastic, API-driven vector storage without cluster management | [Serverless Vector](serverless-vector/index.md) |

---

## Typical Pattern

```mermaid
flowchart TB
    EXT["External data platforms<br/>Databases · Warehouses · SaaS"] --> PRE["Presto federation<br/>(Zero-Copy Lakehouse)"]
    OBJ["Object storage<br/>Apache Iceberg tables"] --> PRE
    OBJ --> SPK["Spark processing<br/>(Large-scale / ML)"]
    SPK --> OBJ
    PRE --> BI["BI / SQL analytics"]
    SPK --> ML["Data engineering / ML"]
    EMB["Documents + Embeddings"] --> VEC["Astra DB Serverless<br/>(Serverless Vector)"]
    VEC --> RAG["RAG / Semantic search / Agents"]
```

---

## IBM Products Used

| Product | Role |
|---|---|
| **[IBM watsonx.data](https://www.ibm.com/products/watsonx-data)** | Unified data platform hosting Presto, Spark, Iceberg and Astra DB |
| **[Presto](https://www.ibm.com/docs/en/watsonxdata/saas?topic=overview)** | Interactive, distributed SQL query engine for analytics across connected sources |
| **[Apache Spark](https://www.ibm.com/docs/en/watsonxdata/saas?topic=spark-introduction-watsonxdata)** | Distributed processing for large-scale transformations, ingestion and ML workloads |
| **[Apache Iceberg](https://www.ibm.com/docs/en/watsonxdata/saas?topic=components-accessing-data-in-external-data-platforms)** | Open table format enabling multi-engine access with schema evolution and ACID properties |
| **[Astra DB Serverless](https://docs.datastax.com/en/astra-db-serverless/databases/create-database.html)** | Serverless vector database for embeddings, similarity search and RAG |

---

!!! warning "When not to use federation"
    Federation is not always the right choice. For highly repeated, latency-sensitive queries — or when a source system cannot efficiently push down predicates — **materialize, cache or ingest the data instead**. Query engines complement a well-designed data pipeline; they do not replace it.
