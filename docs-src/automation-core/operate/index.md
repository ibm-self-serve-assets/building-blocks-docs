# **Operate**

Operate focuses on provisioning, configuring, and scheduling the infrastructure and workloads that power intelligent hybrid applications. This building block enables organizations to automate infrastructure lifecycle management, enforce consistent configuration at scale, and orchestrate dynamic workloads—reducing manual toil and creating repeatable, auditable delivery pipelines across hybrid cloud environments.

## **Core Capabilities**

| Capability | Technology | Description |
|------------|-----------|-------------|
| **[Infrastructure as Code](infrastructure-as-code.md)** | HashiCorp Terraform | Declarative, version-controlled infrastructure provisioning across cloud and on-premises environments |
| **[Configure & Automate](configure-automate.md)** | Red Hat Ansible Automation Platform | Agentless configuration management, application deployment, and IT automation at enterprise scale |
| **[Workload Orchestration & Scheduling](workload-orchestration.md)** | HashiCorp Nomad | Flexible, lightweight workload scheduler for containers, VMs, and batch jobs across hybrid infrastructure |

## **Github Repository**
Code for these accelerators can be found in the [Operate - Automation Building Blocks repo](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/operate).

## **Key Use Cases**

### **[Infrastructure as Code (HashiCorp Terraform)](infrastructure-as-code.md)**
Common use cases involve automated infrastructure provisioning, environment standardization, configuration management, deployment automation, drift prevention, multi-cloud orchestration, and repeatable DevOps pipelines.

### **[Configure & Automate (Red Hat Ansible Automation Platform)](configure-automate.md)**
Organizations leverage this capability to enforce consistent configuration across thousands of nodes, automate patching and compliance remediation, orchestrate multi-tier application deployments, and integrate automation into CI/CD pipelines without agents.

### **[Workload Orchestration & Scheduling (HashiCorp Nomad)](workload-orchestration.md)**
Typical scenarios include scheduling containerized and non-containerized workloads across hybrid infrastructure, batch job management, blue/green deployments, and running mixed workload types (Docker, Java, binaries) under a single control plane.

---

## **Related Building Blocks**

- **[Secure](../secure/index.md)** - Identity, secrets management, and cryptographic readiness
- **[Optimize](../optimize/index.md)** - Observability, performance, and financial management

---

Together, these capabilities create a cohesive Operate model that automates infrastructure provisioning, configuration, and workload scheduling—enabling teams to deliver consistently and reliably across hybrid cloud environments.
