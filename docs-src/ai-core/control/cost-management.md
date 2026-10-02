# Cost Management

AI agents turn every interaction into model calls, tool calls, and tokens. Without visibility, spend grows quietly: a looping agent, a verbose prompt, or an oversized model can burn through a budget before anyone notices. **Cost Management** gives you that visibility, starting at the level of each agent interaction.

## Why This Matters

- **Agent cost is hard to predict.** The same request can take one model call or ten, depending on how the agent reasons and which tools it calls.
- **Token budgets burn silently.** Without per-interaction tracking, runaway loops and oversized prompts show up only on the invoice.
- **Cost has to be weighed against quality.** Choosing a smaller model or a shorter prompt only makes sense when you can see both the cost and the evaluation results.

## Available Today — Agent Cost and Token Tracking

For **watsonx Orchestrate agents** there are three places to look, from tokens to dollars:

| Source | What you get |
|---|---|
| **Agentic Control Plane** (product UI) | Token consumption, model usage, and call volume per agent; a FinOps view in preview |
| **Platform traces** | Tokens and model per generation inside every conversation's span tree — see [Agent Ops](agent-ops.md) |
| **Langfuse** | **Cost in dollars** per trace, session, model, and tag, once the integration is configured and the models are priced |

| Capability (Langfuse) | What It Does |
|---|---|
| **Cost per scenario** | See tokens, cost, and pass or fail for every evaluation scenario, so expensive paths show up before production |
| **Context growth per turn** | See how cost climbs as multi-turn conversations grow, the main driver of multi-turn cost |
| **Cost patterns** | Base cost, growth rate, input-to-output token ratio, and spend wasted on failed runs |
| **Production projection** | Project cost at your expected conversation volume, with data-driven recommendations |

Langfuse receives traces through the instance's Langfuse integration (`orchestrate settings observability langfuse configure …` on SaaS; `orchestrate server start -l` on Developer Edition). The integration is one setting per instance, so on a shared instance it belongs to the instance owner. Cost appears when Langfuse has pricing for the agent's model; watsonx-served models need their pricing registered first. Latency and tokens are always recorded.

## Coming Soon — Enterprise Cost Management

- **Allocation** of AI spend by team, use case, or model.
- **Budgets and alerts** before costs become unmanageable.
- **Optimization** — identifying waste and cost per outcome across AI workloads.

## Bob Skills

A [Bob skill for Cost Management](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/cost-management) is available, giving Bob the expertise to answer *what does this agent cost, why, and what would change it*: tokens and dollars from platform traces with an indicative price table, the Langfuse integration and model pricing, the five-layer cost report with cost per successful journey, and the optimization levers with their re-test. Bob emits the commands and never configures an instance you do not own.

For evaluation, rubrics, red-teaming, and reading traces for correctness use the [Bob skill for Agent Ops](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/agent-ops).

!!! info "GitHub Repository"
    [Cost Management assets — trace cost script and price table, Langfuse setup, model pricing, cost report, analysis guide](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ai/control/cost-management)
