# Bob<span style="color:#0f62fe">+</span> Skills and Modes – Automation

IBM Bob ships with purpose-built **Skills** and **Custom Modes** for every Automation building block, giving engineers an AI-assisted workflow to plan, build, configure, and operate infrastructure, security, and optimization capabilities directly from their IDE.

## How to install the Skills
The Skills have been packed into a single .zip that you can easily download and install. Go to the [skills.zip page](https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills.zip) and click the `Download raw file` icon at the upper-right of the page.  Copy all skill folders at either the global, `~/.bob/skills`, or project-level, `<project>/.bob/skills`

<a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills.zip">
  <img src="../../ibm-bob/skills/images/download-raw-file.png" width="200">
</a>

## Skill Taxonomy

Each Skill for IBM Building Blocks often aligns with an IBM product but not always.  For specifics on how each skill works, read through the associated SKILL.md.
<div class="skills-listing">

  <table class="skill-card" style="--accent:#d5acff; --header:#f7efff; --th:#eedcff; --first-td:#fbf6ff; --grid:#e4c9ff; --text:#160040;">
    <tbody>
      <thead><tr><th colspan="2">
        <div class="skill-group"><img src="../../ibm-bob/skills/images/automation.png" alt="" class="title-icon"><span>Automation Skills</span></div>
      </th></tr></thead>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/build.png" alt="" class="title-icon"><span>Operate</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/ibm-cloud/SKILL.md">Using the IBM Cloud CLI; ibmcloud</a>
            <br>Work with IBM Cloud by using the stand-alone `ibmcloud` CLI or IBM Cloud Shell.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/infrastructure-as-code-ansible/SKILL.md">Infrastructure-as-code: Ansible</a>
            <br>Use for any Ansible-related tasks including playbook development, shell script conversion, debugging failures, or interactive setup. This is the parent skill that provides access to specialized Ansible workflows.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/infrastructure-as-code-terraform/SKILL.md">Infrastructure-as-code: Terraform</a>
            <br>Use when writing, reviewing, or debugging Terraform/OpenTofu modules, tests, CI/CD pipelines, or state operations. Diagnoses failure modes (identity churn, secrets, blast radius, CI drift, state corruption) with version-aware guidance.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/ibm-bob/skills/maximo-code-optimization">Maximo Code Optimization</a>
            <br>Modernize and optimize Maximo automation scripts by analyzing legacy code patterns, identifying performance bottlenecks, and applying best practices for script efficiency. Transforms outdated automation scripts into maintainable, performant code while preserving business logic and ensuring compatibility with current Maximo versions.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/build-and-deploy/asset-management/bob-skills">Maximo Java Conversion</a>
            <br>Convert legacy Maximo Java classes to automation scripts (Python/Jython, JavaScript, Nashorn, ECMAScript, MBR). Preserves business logic, generates test scripts, enforces MXLoggerFactory error handling and MboSet lifecycle patterns, and produces before/after conversion reports.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/optimize.png" alt="" class="title-icon"><span>Secure</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/non-human-identity-vault/SKILL.md">Non-human Identity: Vault</a>
            <br>Coming soon</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/raw/main/optimize/automated-resilience-and-compliance/bob-skills/automated-resilience-concert.zip">Application Risk & Continuous Compliance</a>
            <br>Unified Vulnerability and Certificate Intelligence via IBM Concert.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/raw/main/optimize/automated-resilience-and-compliance/bob-skills/automated-resilience-concert.zip">Cryptographic & Quantum-Safe Readiness</a>
            <br>Discover, govern, and migrate cryptographic assets to quantum-safe algorithms using IBM Guardium Cryptography Manager.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/modernize.png" alt="" class="title-icon"><span>Optimize</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/ibm-bob/skills/automated-resource-mgmt-turbonomic/SKILL.md">Automated Resource Management (ARM): Turbonomic</a>
            <br>Automates application resource management at scale with the precision required to assure application performance. It continuously analyzes and optimizes compute, storage, and network resources in real time, helping organizations improve application resiliency, maximize infrastructure utilization, reduce operational costs, and ensure applications always receive the resources.</p>
            <p><a href="">Full-Stack Application Observability</a>
            <br>Connect Bob with the Instana MCP server for automated, real-time visibility across every tier of hybrid applications.</p>
        </td>
      </tr>
    </tbody>
  </table>

</div>

---

## Automation Modes

Instructions and related files for these custom modes can be found in their respective repository.

<div class="skills-listing">

  <table class="skill-card" style="--accent:#d5acff; --header:#f7efff; --th:#eedcff; --first-td:#fbf6ff; --grid:#e4c9ff; --text:#160040;">
    <tbody>
      <thead><tr><th colspan="2">
        <div class="skill-group"><img src="../../ibm-bob/skills/images/automation.png" alt="" class="title-icon"><span>Automation Modes</span></div>
      </th></tr></thead>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/build.png" alt="" class="title-icon"><span>Operate</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/build-and-deploy/Iaas/bob-modes/base-modes">Ansible Ops</a>
            <br>Ansible Operations with Ansible playbook to deploy the Retail Application on RedHat OpenShift Cluster.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/optimize.png" alt="" class="title-icon"><span>Secure</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/tree/main/build-and-deploy/non-human-identity/secrets-management/bob-modes/base-modes">Secrets Management</a>
            <br>Secrets Management via IBM Hashicorp Vault.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/raw/main/optimize/automated-resilience-and-compliance/bob-modes/base-modes/application-resilience.zip">Application Risk & Continuous Compliance</a>
            <br>Unified Vulnerability and Certificate Intelligence via IBM Concert.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/raw/main/optimize/automated-resilience-and-compliance/bob-modes/base-modes/application-resilience.zip">Cryptographic & Quantum-Safe Readiness</a>
            <br>Discover, govern, and migrate cryptographic assets to quantum-safe algorithms using IBM Guardium Cryptography Manager.</p>
        </td>
      </tr>
      <tr>
        <td><div class="skill-subgroup"><img src="../../ibm-bob/skills/images/modernize.png" alt="" class="title-icon"><span>Optimize</span></div></td>
        <td>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/optimize/automated-resilience-and-compliance/bob-modes/base-modes/application-resilience.zip">Automated Resilience & Compliance</a>
            <br>Unified Vulnerability and Certificate Intelligence via IBM Concert.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/main/optimize/automated-resilience-and-compliance/bob-modes/base-modes/application-resilience.zip">Automated Resource Management</a>
            <br>Resource Optimization & Cost Control with IBM Turbonomic.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/finops/optimize/finops/bob-modes/base-modes/cloudability-api.zip">Technology Financial Management & FinOps</a>
            <br>Maximize Cloud Value Through FinOps with IBM Apptio.</p>
            <p><a href="https://github.com/ibm-self-serve-assets/building-blocks/blob/finops/observe/application-observability/bob-modes/base-modes/application-observability.zip">Full-Stack Application Observability</a>
            <br>Connect Bob with the Instana MCP server for automated, real-time visibility across every tier of hybrid applications.</p>
        </td>
      </tr>
    </tbody>
  </table>

</div>

---

For the complete list of all Building Block skills across AI, Data, and Automation, see the [Bob<span style="color:#0f62fe">+</span> Skills page](../ibm-bob/skills/index.md).
