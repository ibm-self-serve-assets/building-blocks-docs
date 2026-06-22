# Contributing your own Skills for the Bob<span style="color:#0f62fe">+</span> IBM Technology Building Blocks

Start by reading [Bob's Skills documentation](https://bob.ibm.com/docs/ide/features/skills) plus these [skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices).

Skills are not meant to restate generic programming, architecture or cloud development concepts. IBM Bob is a frontier model with PhD-level knowledge across most engineering domains, so these Skills skip reiterating the basics.

Instead, these Skills encode the local, up-to-date know-how that does-not-yet reside in Bob's memory, mostly because it's too new, like code library updates, API endpoints or CLI command syntax for IBM' latest product releases.

<img src="../images/writing-good-skills.png" width="1000">

A well-written skill captures the parts of engineering practice that are usually scattered across docs, repos, examples, Slack threads, and senior-engineer muscle memory. A good Skill tells Bob what inputs are required, what rules to follow, necessary syntax elements, but most important, a good skill ensures Bob let's IBM engineers, partners and customers focus more on the use case and less on the underlying complexity of modern agentic applications.

If you want to contribute to Skills for Bob<span style="color:#0f62fe">+</span> IBM Technology Building Blocks, please open a pull request with your edits/submissions. Any other questions, contact us on [#build-engineering-ww](https://ibm.enterprise.slack.com/archives/C08HV6MN4RE)

## Skills vs Modes

IBM Bob uses both [Modes](https://bob.ibm.com/docs/ide/features/modes) and [Skills](https://bob.ibm.com/docs/ide/features/skills), but they solve different problems.

A **Mode** defines the role Bob is operating in. It sets the posture, behavior, tool usage, and level of autonomy Bob should apply to the work. A Mode answers the question: *What kind of engineer is Bob acting as right now?*

A **Skill** defines the specific engineering knowledge Bob should use while doing the work. It provides task-level instructions, implementation patterns, examples, constraints, and known-good approaches for a particular Building Block. A Skill answers the question: *What does Bob need to know to do this task correctly?*

<img src="../images/modes-and-skills.png" width="700">

Put another way: **Modes shape how Bob thinks. Skills shape what Bob knows how to do.** For example, an `AI Solution Architect` mode could use multiple Building Block Skills to design an agentic application architecture: `agent-builder + agent-ops` and `no-sql-astradb`. A `Data Engineer` mode might also use the `no-sql-astradb` skill but also use the `data-pipeline-wxdata` and `data-streaming-confluent` skills too.
