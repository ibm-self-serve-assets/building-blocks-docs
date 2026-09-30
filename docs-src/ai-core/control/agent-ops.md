# Agent Ops

AI agents don't behave like traditional software — they can respond differently every time. That makes them harder to test, trust, and troubleshoot. **Agent Ops** is a framework for testing, monitoring, and improving AI agents from development through production. Once an agent is in production, the companion [Guardrails](guardrails.md) building block keeps it within policy at runtime.

The capabilities below are built for **watsonx Orchestrate agents** using the Agent Development Kit (ADK). For LangGraph/LangChain agents, see [LangGraph Agent Evaluation](#langgraph-agent-evaluation) at the bottom of this page.

![Evaluate, observe, and optimize your agents using the Agent Ops Building Block](images/agent-ops-overview.png)

## Why This Matters

- **Agents are non-deterministic.** The same input can produce different outputs, making traditional testing insufficient.
- **Failures are hard to diagnose.** When an agent calls the wrong tool or hallucinates a response, tracing the root cause requires structured analysis.
- **Manual testing doesn't scale.** Testing every user scenario by hand creates bottlenecks that slow deployment.
- **Latency and failures hide in production.** Without traces, agents can slow down or quietly take the wrong path without anyone noticing.
- **Testing alone isn't enough in production.** Agents process thousands of unsupervised interactions a day — a single unguarded output containing PII, credentials, or harmful content creates risk that must be blocked at runtime, not found afterwards. That is what [Guardrails](guardrails.md) are for.

## Capabilities

| Capability | What It Does |
|-----------|-------------|
| **Evaluate** | Simulate real users at scale to verify the agent does what it's supposed to do |
| **Analyze** | Pinpoint exactly where and why an agent went wrong |
| **Quick-Eval** | Fast sanity check — catch structural issues early without writing full test cases |
| **Generate** | Turn plain-English user stories into automated test scenarios |
| **Red-Team** | Stress-test agent security against prompt injection, social engineering, and jailbreaking |
| **Observe** | Trace tool calls, routing, and latency per interaction with full traceability |

For runtime enforcement — PII filters, content guardrails, rate limits, model fallback, and Pass/Flag/Block checks — see [Guardrails](guardrails.md). For cost and token spend per agent, see [Cost Management](cost-management.md).

## Evaluation Workflow

```mermaid
graph LR
    A["Quick-Eval<br>Sanity check"] --> B["Generate<br>Create benchmarks"]
    B --> C["Evaluate<br>Full testing"]
    C --> D["Analyze<br>Diagnose failures"]
    D --> E["Red-Team<br>Security testing"]
    E --> F["Observe<br>Traces & latency"]
```

1. **Quick-Eval** — Fast referenceless validation to catch tool schema issues
2. **Generate** — Auto-create benchmarks from plain-English user stories
3. **Evaluate** — Run full evaluation with LLM-simulated users
4. **Analyze** — Diagnose failures with default and enhanced analysis modes
5. **Red-Team** — Test against 15 adversarial attack types
6. **Observe** — Trace tool calls, routing, and latency via Langfuse

!!! tip "From evaluation to governance evidence"
    Evaluation metrics from watsonx Orchestrate agents can be automatically captured as governance evidence and tracked against policy thresholds — see [Enforcement Tracking](compliance.md#enforcement-tracking-for-watsonx-orchestrate) under Compliance.

## Metrics Reference

### Agent Metrics

| Metric | Target | What It Measures |
|--------|--------|-----------------|
| Journey Success | 1.0 | All goals completed (binary) |
| Journey Completion % | 100% | Percentage of goals met |
| Tool Call Precision | >= 0.5 | Correct calls / total calls made |
| Tool Call Recall | >= 0.9 | Expected calls made / total expected |
| Agent Routing F1 | >= 0.9 | Harmonic mean of precision and recall |

### RAG Metrics

| Metric | Target | What It Measures |
|--------|--------|-----------------|
| Faithfulness | >= 0.8 | Answer grounded in retrieved docs |
| Answer Relevancy | >= 0.7 | Answer addresses the question |
| Response Confidence | > 0.5 | LLM confidence in generated response |

### Red-Teaming Attack Types

| Category | Attacks |
|----------|---------|
| On-policy | instruction_override, emotional_appeal, role_playing, hypothetical_scenario, authority_impersonation, crescendo_attack |
| Off-policy | jailbreaking, prompt_leakage, topic_derailment, social_engineering, data_extraction |

## LangGraph Agent Evaluation

For teams building agents with **LangGraph or LangChain**, a Python SDK package (`wx_gov_agent_eval`) is also available. It provides three evaluator classes — BasicRAG, ToolCalling, and AdvancedRAG — integrated with IBM watsonx governance for metrics and factsheet tracking.

[LangGraph Agent Evaluation Assets](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai/control/agent-ops/assets/langgraph-agents)

## Bob Skills

A [Bob skill for Agent Ops](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/agent-ops) is available, giving Bob the expertise to plan and run evaluations, red-teaming, and runtime observability for watsonx Orchestrate agents across Developer Edition and SaaS — benchmark authoring, metric diagnosis, attack catalog, and traces. Its Langfuse cost analysis is covered under [Cost Management](cost-management.md).

A [Bob skill for Model Evaluation](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/build-time-gen-ai-evals) is available, giving Bob the expertise to evaluate GenAI models and applications — prompts, RAG pipelines, LLM outputs, and agentic tool-calling — using watsonx.governance metrics.

Bob skills for Agent Controls and Real-Time Guardrails are listed on the [Guardrails](guardrails.md#bob-skills) page.

## Bob Modes

A [Bob mode for Agent Ops evaluation](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai/control/agent-ops/bob-modes) is available, providing an AI-assisted workflow for automated agent evaluation with WXO agents in Bob.

!!! info "GitHub Repository"
    [Agent Ops Assets](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai/control/agent-ops)
