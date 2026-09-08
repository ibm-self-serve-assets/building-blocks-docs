# Bob<span style="color:#0f62fe">+</span> Skills and Modes – Data

IBM Bob ships with purpose-built **Skills** and **Custom Modes** for every Data building block, giving engineers an AI-assisted workflow to plan, build, configure, and operate data integration, intelligence, and retrieval capabilities directly from their IDE.

## How to install the Skills
The Skills have been packed into a single .zip that you can easily download and install. Go to the [skills.zip page](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills.zip) and click the `Download raw file` icon at the upper-right of the page.  Copy all skill folders at either the global, `~/.bob/skills`, or project-level, `<project>/.bob/skills`

<a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills.zip">
  <img src="../../ibm-bob/skills/images/download-raw-file.png" width="200">
</a>

## Skill Taxonomy

Each Skill for IBM Building Blocks often aligns with an IBM product but not always.  For specifics on how each skill works, read through the associated SKILL.md.
<div class="skills-listing">

  <table class="skill-card" style="--accent:#aacaff; --header:#edf4ff; --th:#dfeaff; --first-td:#f3f7ff; --grid:#c9dcff; --text:#031040;">
    <tbody>
      <thead><tr><th colspan="2">
        <div class="skill-group"><img src="../../ibm-bob/skills/images/data.png" alt="" class="title-icon"><span>Data Skills</span></div>
      </th></tr></thead>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/integration.png" alt="" class="title-icon"><span>Context</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/data-streaming-confluent">Data-streaming: Confluent</a>
            <br>Works with the Confluent Platform for real-time data streaming, Kafka topic management, stream processing configuration, and data pipeline setup for event-driven architectures.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/data-streaming-confluent-terraform/SKILL.md">Data-streaming: Confluent plus Terraform</a>
            <br>Expert guidance for building real-time streaming systems on Confluent Cloud using Infrastructure-as-Code (Terraform), Apache Flink SQL, and Python producers. Adapts to any streaming use case (IoT, finance, retail, healthcare, logistics) while maintaining production-ready quality.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/integration/data-pipeline-ai-generated/bob-skills">Data Ingestion: Structured</a>
            <br>IBM DataStage connector config, CDC pipeline design, schema mapping, DB2/PostgreSQL/MySQL/Oracle patterns, batch and incremental load strategies into IBM watsonx.data.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/integration/data-pipeline-ai-generated/bob-skills">Data Ingestion: Unstructured</a>
            <br>IBM Docling document parsing, UDI pipeline configuration, IBM COS ingestion, multi-format chunking (PDF, DOCX, HTML, images), metadata extraction, Python 3.12 automation scripts.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/integration/data-pipeline-ai-generated/bob-skills">Data Ingestion: UDI + OpenSearch</a>
            <br>IBM UDI + OpenSearch integration, document search pipeline setup, OpenSearch index provisioning for UDI output into IBM watsonx.data.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/integration/data-observability/bob-skills">Data Observability: Databand Pipeline Setup</a>
            <br>IBM Databand pipeline onboarding, OpenLineage event design (START / COMPLETE / FAIL), alert policy authoring (null-rate, schema-drift, SLA-breach), IBM IAM auth patterns.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/intelligence.png" alt="" class="title-icon"><span>Pipelines</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/text2sql/bob-skills">Text2SQL: Metadata Enrichment</a>
            <br>watsonx.data Intelligence project onboarding, table/column description enrichment, synonym design, query example authoring, accuracy measurement. Maximises Text2SQL query accuracy.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/text2sql/bob-skills">Text2SQL: Query Optimizer</a>
            <br>Model selection (Granite vs Llama), SQL safety validation, accuracy evaluation (exact-match + execution accuracy), error pattern diagnosis, SQL dialect tuning (Presto, PostgreSQL, Oracle, Snowflake).</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/data-lineage/bob-skills">Data Lineage: OpenLineage Instrumentation</a>
            <br>OpenLineage event design, Python/DataStage/Spark instrumentation patterns, IBM Databand lineage API integration, lineage graph authoring for end-to-end data traceability.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/data-quality/bob-skills">Data Quality: Rules</a>
            <br>Data quality rule authoring, watsonx.data Intelligence quality checks, profiling automation, threshold design, compliance reporting patterns for AI-ready data.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/query.png" alt="" class="title-icon"><span>Query Engines</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/RAG/bob-skills">RAG Pipeline Builder</a>
            <br>Complete RAG pipeline design — IBM watsonx.ai embedding integration, OpenSearch HNSW + hybrid search design, chunking strategy selection, FastAPI service patterns, RAG evaluation with RAGAS metrics.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/RAG/bob-skills">RAG MCP Server Builder</a>
            <br>MCP server development (SSE transport, FastMCP), RAG ingestion + retrieval tool design (`ingest_from_cos`, `search_documents`, `ask_question`), IBM Bob / Claude integration, deployment to IBM Code Engine.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search/opensearch/bob-skills">Vector Search: OpenSearch</a>
            <br>IBM watsonx.data OpenSearch k-NN index design, HNSW parameter tuning (`ef_construction`, `m`), hybrid search (vector + BM25) score fusion, IBM watsonx.ai embedding integration.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search/datastax-astradb/bob-skills">Vector Search: AstraDB</a>
            <br>Astra DB vector collection creation, IBM watsonx.ai embedding integration, ANN cosine search queries via `astrapy` Data API, IBM COS ingestion patterns for IBM HCD.</p>
        </td>
      </tr>
    </tbody>
  </table>

</div>

---

## Data Modes

Instructions and related files for these custom modes can be found in their respective repository.

<div class="skills-listing">

  <table class="skill-card" style="--accent:#aacaff; --header:#edf4ff; --th:#dfeaff; --first-td:#f3f7ff; --grid:#c9dcff; --text:#031040;">
    <tbody>
      <thead><tr><th colspan="2">
        <div class="skill-group"><img src="../../ibm-bob/skills/images/data.png" alt="" class="title-icon"><span>Data Modes</span></div>
      </th></tr></thead>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/integration.png" alt="" class="title-icon"><span>Context</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/integration/data-pipeline-ai-generated/bob-modes">Data Ingestion</a>
            <br>AI-generated data pipeline mode for both structured (DataStage CDC) and unstructured (Docling/UDI) sources. Describe your data source and target — Bob generates the complete ingestion pipeline automatically.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/integration/data-observability/bob-modes">Data Observability Builder</a>
            <br>IBM Databand pipeline onboarding, OpenLineage instrumentation for Python/DataStage/Spark, alert policy design and quality threshold tuning, IBM COS report archiving.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/intelligence.png" alt="" class="title-icon"><span>Pipelines</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/text2sql/bob-modes">Text-to-SQL</a>
            <br>Natural language to SQL using IBM watsonx.data Intelligence Text2SQL API. Bob helps build the FastAPI application, enrich database metadata (table/column descriptions, synonyms), and evaluate SQL accuracy across Presto, PostgreSQL, Oracle, and Snowflake dialects.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/data-lineage/bob-modes">Data Lineage Builder</a>
            <br>End-to-end lineage tracking with IBM Manta and watsonx.data Intelligence. Bob assists with OpenLineage instrumentation, impact analysis, compliance reporting, and lineage visualization.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/data-quality/bob-modes">Data Quality Builder</a>
            <br>Data quality rule authoring and monitoring with watsonx.data Intelligence. Bob helps define validation rules, configure profiling, set quality thresholds, and build compliance reports.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/query.png" alt="" class="title-icon"><span>Query Engines</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/RAG/bob-modes">RAG Builder</a>
            <br>End-to-end RAG architect — pipeline architecture, hybrid search design, chunking strategy, IBM watsonx.ai embedding model choice, MCP server design, RAG evaluation (RAGAS).</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/RAG/bob-modes">RAG Ingestion Builder</a>
            <br>Focused ingestion specialist — IBM COS document loading, chunking, watsonx.ai embedding, OpenSearch indexing, MCP ingestion tool design (`ingest_from_cos`).</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/RAG/bob-modes">RAG Retrieval Builder</a>
            <br>Focused retrieval and generation specialist — hybrid search queries, reranking, watsonx.ai Granite generation, RAGAS evaluation, streaming SSE responses, MCP retrieval tools.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search/opensearch/bob-modes">OpenSearch Builder</a>
            <br>IBM watsonx.data OpenSearch k-NN index design, HNSW parameter tuning, hybrid search score fusion, IBM watsonx.ai embedding integration for standalone vector search services.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/retrieval/vector-search/datastax-astradb/bob-modes">Astra DB Vector Builder</a>
            <br>DataStax Astra DB (IBM HCD) vector collection design, `astrapy` ANN search patterns, IBM watsonx.ai embedding integration, IBM COS ingestion for serverless global vector storage.</p>
        </td>
      </tr>
    </tbody>
  </table>

</div>

---

For the complete list of all Building Block skills across AI, Data, and Automation, see the [Bob<span style="color:#0f62fe">+</span> Skills page](../ibm-bob/skills/index.md).
