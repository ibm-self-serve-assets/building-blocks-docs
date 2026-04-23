# Agent Ops

AI agents don't behave like traditional software — they can respond differently every time. That makes them harder to test, trust, and troubleshoot. **Agent Ops** is a framework for testing, monitoring, and improving AI agents from development through production.

## Why This Matters

- **Agents are non-deterministic.** The same input can produce different outputs, making traditional testing insufficient.
- **Failures are hard to diagnose.** When an agent calls the wrong tool or hallucinates a response, tracing the root cause requires structured analysis.
- **Manual testing doesn't scale.** Testing every user scenario by hand creates bottlenecks that slow deployment.
- **Cost and latency are unpredictable.** Without observability, agents can burn through token budgets or create unacceptable latency without anyone noticing.

## Capabilities

| Capability | What It Does |
|-----------|-------------|
| **Evaluate** | Simulate real users at scale to verify the agent does what it's supposed to do |
| **Analyze** | Pinpoint exactly where and why an agent went wrong |
| **Quick-Eval** | Fast sanity check — catch structural issues early without writing full test cases |
| **Generate** | Turn plain-English user stories into automated test scenarios |
| **Red-Team** | Stress-test agent security against prompt injection, social engineering, and jailbreaking |
| **Observe** | Track cost, latency, and token usage per interaction with full traceability |

## Two Evaluation Paths

Agent Ops supports two different agent frameworks with dedicated tooling for each:

```mermaid
graph TD
    subgraph agents["Your AI Agents"]
        WXO["watsonx Orchestrate<br>Agents"]
        LG["LangGraph / LangChain<br>Agents"]
    end

    subgraph wxo_eval["WXO Agent Evaluation"]
        ADK["ADK CLI<br>evaluate · analyze<br>quick-eval · generate<br>red-team"]
        LF["Langfuse<br>Observability"]
    end

    subgraph lg_eval["LangGraph Agent Evaluation"]
        SDK["Python SDK<br>wx_gov_agent_eval<br>BasicRAG · ToolCalling<br>AdvancedRAG"]
        WGV["watsonx.governance<br>Metrics · Factsheets"]
    end

    WXO --> wxo_eval
    LG --> lg_eval
    ADK --> LF
    SDK --> WGV
```

| Path | Framework | Tooling | Assets |
|------|-----------|---------|--------|
| **[WXO Agents](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/agent-ops/assets/wxo-agents)** | watsonx Orchestrate | ADK CLI (evaluate, analyze, quick-eval, generate, red-team) + Langfuse | 6 Python scripts + sample agent |
| **[LangGraph Agents](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/agent-ops/assets/langgraph-agents)** | LangGraph / LangChain | Python SDK (`wx_gov_agent_eval`) + watsonx governance | Importable package with 3 evaluator classes |

## Recommended Evaluation Workflow

```mermaid
graph LR
    A["Quick-Eval<br>Sanity check"] --> B["Generate<br>Create benchmarks"]
    B --> C["Evaluate<br>Full testing"]
    C --> D["Analyze<br>Diagnose failures"]
    D --> E["Red-Team<br>Security testing"]
    E --> F["Observe<br>Cost & latency"]
```

1. **Quick-Eval** — Fast referenceless validation to catch tool schema issues
2. **Generate** — Auto-create benchmarks from plain-English user stories
3. **Evaluate** — Run full evaluation with LLM-simulated users
4. **Analyze** — Diagnose failures with default and enhanced analysis modes
5. **Red-Team** — Test against 15 adversarial attack types
6. **Observe** — Track cost, latency, and token usage via Langfuse

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

## Bob Modes

A [Bob mode for Agent Ops evaluation](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/agent-ops/bob-modes) is available, providing an AI-assisted workflow for automated agent evaluation with WXO agents.

!!! info "GitHub Repository"
    [Agent Ops Assets](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai-trust/agent-ops)
