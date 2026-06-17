<link rel="stylesheet" href="./skills.css">

# Skills for the IBM Building Blocks

This collection of [Skills for IBM Bob](https://bob.ibm.com/docs/ide/features/skills) provides IBM Bob with the expertise to quickly build applications using the [IBM Building Blocks](../../index.md).   Each skill focuses on a specific Building Block and contains task-specific instructions, code patterns, examples and constraints Bob should follow when doing engineering work.

 The Building Blocks are a community effort.  Learn more about [contributing your Skills for IBM Building Blocks.](contributing_to_skills.md)

## How to install the Skills
The Skills have been packed into a single .zip that you can easily download and install.
  
1. Go to the [skills.zip page](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills.zip) and click the `Download raw file` icon at the upper-right of the page.
  
      <img src="images/download-raw-file.png" width="200">

2. Copy all skill folders at either the global, `~/.bob/skills`, or project-level, `<project>/.bob/skills`

## Skill Taxonomy

Each Skill for IBM Building Blocks often aligns with an IBM product but not always.  For specifics on how each skill works, read through the associated SKILL.md.  
<div class="skills-listing">

  <table class="skill-card" style="--accent:#6adada; --header:#e8fbfb; --th:#d7f7f7; --first-td:#f0fdfd; --grid:#b8eeee; --text:#021f1f;">
    <tbody>
      <thead><tr><th colspan="2">
        <div class="skill-group"><img src="images/ai.png" alt="" class="title-icon"><span>AI Skills</span></div>
      </th></tr></thead>
      <tr>
        <td><div class="skill-subgroup"><img src="images/agents.png" alt="" class="title-icon"><span>Agents</span></div></td>
        <td>
            <a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/agent-builder/SKILL.md">Agent Builder</a>
            <br>Build and deploy multi-agent systems with tools (MCP servers) using watsonx Orchestrate's Agent Development Kit (ADK), CLI and REST API.
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="images/ai-trust.png" alt="" class="title-icon"><span>AI Trust</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/real-time-guardrails">Real-Time Guardrails</a>
            <br>Add runtime safety and quality guardrails to Gen AI, RAG agents, and watsonx Orchestrate tools using watsonx.governance, Pass/Flag/Block at input, retrieval, generation, and output.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/agent-ops">Agent Ops</a>
            <br>Plan and run evaluations, red-teaming, and runtime observability for watsonx Orchestrate agents across Developer Edition and SaaS — benchmark authoring, metric diagnosis, attack catalog, traces, Langfuse cost analysis.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/build-time-gen-ai-evals">Model Evaluation</a>
            <br>Evaluate GenAI models and applications — prompts, RAG pipelines, LLM outputs, agentic tool-calling — using watsonx.governance metrics.</p>
        </td>
      </tr>
    </tbody>
  </table>

  <table class="skill-card" style="--accent:#aacaff; --header:#edf4ff; --th:#dfeaff; --first-td:#f3f7ff; --grid:#c9dcff; --text:#031040;">
    <tbody>
      <thead><tr><th colspan="2">
        <div class="skill-group"><img src="images/data.png" alt="" class="title-icon"><span>Data Skills</span></div>
      </th></tr></thead>
      <tr>
        <td><div class="skill-subgroup"><img src="images/integration.png" alt="" class="title-icon"><span>Integration</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/data-streaming-confluent">Data-streaming: Confluent</a>
            <br>Works with the Confluent Platform for real-time data streaming, Kafka topic management, stream processing configuration, and data pipeline setup for event-driven architectures.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/data-streaming-confluent-terraform/SKILL.md">Data-streaming: Confluent plus Terraform</a>
            <br>Expert guidance for building real-time streaming systems on Confluent Cloud using Infrastructure-as-Code (Terraform), Apache Flink SQL, and Python producers. Adapts to any streaming use case (IoT, finance, retail, healthcare, logistics) while maintaining production-ready quality.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="images/intelligence.png" alt="" class="title-icon"><span>Intelligence</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/data-enrichment/SKILL.md">Data Enrichment</a>
            <br>Coming soon</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="images/query.png" alt="" class="title-icon"><span>Query</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/no-sql-astradb/SKILL.md">No-SQL: AstraDB</a>
            <br>Coming soon</p>
        </td>
      </tr>
    </tbody>
  </table>

  <table class="skill-card" style="--accent:#d5acff; --header:#f7efff; --th:#eedcff; --first-td:#fbf6ff; --grid:#e4c9ff; --text:#160040;">
    <tbody>
      <thead><tr><th colspan="2">
        <div class="skill-group"><img src="images/automation.png" alt="" class="title-icon"><span>Automation Skills</span></div>
      </th></tr></thead>
      <tr>
        <td><div class="skill-subgroup"><img src="images/build.png" alt="" class="title-icon"><span>Build</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/infrastructure-as-code-ansible/SKILL.md">Infrastructure-as-code: Ansible</a>
            <br>Use for any Ansible-related tasks including playbook development, shell script conversion, debugging failures, or interactive setup. This is the parent skill that provides access to specialized Ansible workflows.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/infrastructure-as-code-terraform/SKILL.md">Infrastructure-as-code: Terraform</a>
            <br>Use when writing, reviewing, or debugging Terraform/OpenTofu modules, tests, CI/CD pipelines, or state operations. Diagnoses failure modes (identity churn, secrets, blast radius, CI drift, state corruption) with version-aware guidance.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/code-modernization-expert/SKILL.md">Code Modernization Expert</a>
            <br>Modernize legacy code using enterprise patterns, automated refactoring, technical debt analysis, and incremental migration with zero downtime.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/maximo-code-optimization">Maximo Code Optimization</a>
            <br>Modernize and optimize Maximo automation scripts by analyzing legacy code patterns, identifying performance bottlenecks, and applying best practices for script efficiency. Transforms outdated automation scripts into maintainable, performant code while preserving business logic and ensuring compatibility with current Maximo versions.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="images/modernize.png" alt="" class="title-icon"><span>Optimize</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/automated-resource-mgmt-turbonomic/SKILL.md">Automated Resource Management (ARM): Turbonomic</a>
            <br>Automates application resource management at scale with the precision required to assure application performance. It continuously analyzes and optimizes compute, storage, and network resources in real time, helping organizations improve application resiliency, maximize infrastructure utilization, reduce operational costs, and ensure applications always receive the resources.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="images/optimize.png" alt="" class="title-icon"><span>Secure</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/non-human-identity-vault/SKILL.md">Non-human Identity: Vault</a>
            <br>Coming soon</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>