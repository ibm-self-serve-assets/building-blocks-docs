# Bob<span style="color:#0f62fe">+</span> Skills and Modes – AI

IBM Bob ships with purpose-built **Skills** and **Custom Modes** for every AI building block, giving engineers an AI-assisted workflow to plan, build, configure, and operate agents, trust frameworks, and engineering capabilities directly from their IDE.

## How to install the Skills
The Skills have been packed into a single .zip that you can easily download and install. Go to the [skills.zip page](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills.zip) and click the `Download raw file` icon at the upper-right of the page.  Copy all skill folders at either the global, `~/.bob/skills`, or project-level, `<project>/.bob/skills`

<a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills.zip">
  <img src="../../ibm-bob/skills/images/download-raw-file.png" width="200">
</a>

## Skill Taxonomy

Each Skill for IBM Building Blocks often aligns with an IBM product but not always.  For specifics on how each skill works, read through the associated SKILL.md.
<div class="skills-listing">

  <table class="skill-card" style="--accent:#6adada; --header:#e8fbfb; --th:#d7f7f7; --first-td:#f0fdfd; --grid:#b8eeee; --text:#021f1f;">
    <tbody>
      <thead><tr><th colspan="2">
        <div class="skill-group"><img src="../../ibm-bob/skills/images/ai.png" alt="" class="title-icon"><span>AI Skills</span></div>
      </th></tr></thead>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/agents.png" alt="" class="title-icon"><span>Agents</span></div></td>
        <td>
            <a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/agent">Agent Skills</a>
            <br>Build and deploy enterprise-ready AI agents that automate business workflows, orchestrate complex tasks, and accelerate software development through intelligent automation.
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/ai-trust.png" alt="" class="title-icon"><span>AI Control Plane</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/real-time-guardrails">Real-Time Guardrails</a>
            <br>Add runtime safety and quality guardrails to Gen AI, RAG agents, and watsonx Orchestrate tools using watsonx.governance. Pass/Flag/Block at input, retrieval, generation, and output.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/agent-ops">Agent Ops</a>
            <br>Plan and run evaluations, red-teaming, and runtime observability for watsonx Orchestrate agents across Developer Edition and SaaS — benchmark authoring, metric diagnosis, attack catalog, traces, Langfuse cost analysis.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/build-time-gen-ai-evals">Model Evaluation</a>
            <br>Evaluate GenAI models and applications — prompts, RAG pipelines, LLM outputs, agentic tool-calling — using watsonx.governance metrics.</p>
        </td>
      </tr>
    </tbody>
  </table>

</div>

---

## AI Modes

Instructions and related files for these custom modes can be found in their respective repository.

<div class="skills-listing">

  <table class="skill-card" style="--accent:#6adada; --header:#e8fbfb; --th:#d7f7f7; --first-td:#f0fdfd; --grid:#b8eeee; --text:#021f1f;">
    <tbody>
      <thead><tr><th colspan="2">
        <div class="skill-group"><img src="../../ibm-bob/skills/images/ai.png" alt="" class="title-icon"><span>AI Modes</span></div>
      </th></tr></thead>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/agents.png" alt="" class="title-icon"><span>Agents</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/base-modes/agent-builder-base-mode">Agent Builder</a>
            <br>Foundation mode for agent building workflows. Bob uses watsonx Orchestrate's ADK and documentation MCP servers to build custom agents.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/custom-modes/domain-agent-builder">Domain Agent Builder</a>
            <br>Bob builds a tool-augmented RAG agent for a partner's custom business domain.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/custom-modes/voice-agent-builder">Voice Agent Builder</a>
            <br>Build voice-enabled agents (TTS &amp; STT) with multi-channel support (phone, WhatsApp, SMS, Slack).</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/multi-agent-orchestration/bob-modes/multiagent-orchestration-bob-modes/base-modes">MCP Builder</a>
            <br>Expands on the Agent Builder mode to build and deploy MCP servers on watsonx Orchestrate.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-gateway/bob-modes/base-modes/agent-model-gateway-bob-mode">Agent Model Gateway</a>
            <br>Comprehensive mode for integrating third-party LLM models (OpenAI, Anthropic, Google, Azure, AWS Bedrock, and more) into watsonx Orchestrate.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/agents/agent-builder/bob-modes/agent-builder-bob-modes/custom-modes/agent-rest-integration">Agent Integrate</a>
            <br>End-to-end support for integrating watsonx Orchestrate agents into applications via REST API — authentication, connection testing, and code generation across IBM Cloud, AWS, AWS GovCloud, and on-premises.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/ai-trust.png" alt="" class="title-icon"><span>AI Control Plane</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/agent-ops/bob-modes/base-modes">Agent Ops</a>
            <br>Foundation mode for pre-deployment evaluation of watsonx Orchestrate agents. Bob automates benchmark generation and provides a structured workflow for assessing agent behavior across key dimensions — agent-specific metrics, cost and latency, and adversarial robustness through red-teaming.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/model-evaluation/gen-ai-evaluations/bob-modes/base-modes">Model Evaluation</a>
            <br>Bob helps you evaluate GenAI apps (RAG pipelines, LLM outputs, chatbot safety) using IBM watsonx governance SDK and custom watsonx governance MCP server.</p>
        </td>
      </tr>
    </tbody>
  </table>

</div>

---

For the complete list of all Building Block skills across AI, Data, and Automation, see the [Bob<span style="color:#0f62fe">+</span> Skills page](../ibm-bob/skills/index.md).
