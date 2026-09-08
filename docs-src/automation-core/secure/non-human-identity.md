# Non-human Identity & Secret Management

## Overview

Non-human Identity delivers enterprise-grade secrets management and machine identity authentication that eliminates hardcoded credentials and centralises access control for automated systems, applications, and services.

### What is Non-human Identity?

Modern enterprise architectures depend on hundreds of automated processes — microservices, CI/CD pipelines, Kubernetes workloads, and cloud services — each requiring credentials to communicate securely. Hardcoding those credentials creates serious security risks: exposed API keys, unrotated passwords, and sprawling secrets scattered across repositories and configuration files.

Non-human Identity solves this through two complementary approaches. **HashiCorp Vault** provides a centralised secrets store with dynamic credential generation, automated rotation, and identity-based access for machine workloads. **IBM Verify** extends the identity layer to cover human identities with SSO, MFA, and risk-based adaptive access — so both human and machine principals are managed under a unified security posture.

This building block is designed for platform engineers, security teams, and DevOps practitioners who need to replace static secrets with short-lived, auditable credentials — and who want a proven, policy-driven framework rather than a bespoke implementation.

### Why Non-human Identity?

- **Eliminate credential sprawl**: Replace hardcoded secrets in code, config files, and CI pipelines with dynamic, on-demand credentials that expire automatically.
- **Reduce blast radius**: Short-lived credentials limit the window of exposure if a token or key is compromised.
- **Enforce policy-based access**: Centralise access decisions so every service authenticates with a verifiable identity and receives only the permissions it needs.
- **Accelerate compliance**: Comprehensive audit logs of every secrets access operation make compliance reporting straightforward.

## Key Features

### Core Capabilities

<details>
<summary><strong>🔒 Dynamic Secrets Generation</strong></summary>

<p><strong>On-demand Credentials</strong>: HashiCorp Vault generates short-lived credentials for databases, cloud platforms, and services at request time — no static passwords required.</p>

<ul>
<li><strong>Database Secrets Engine</strong>: Creates unique, time-limited database credentials per application instance.</li>
<li><strong>Cloud IAM Integration</strong>: Issues temporary AWS, Azure, and GCP credentials scoped to specific roles.</li>
<li><strong>PKI Certificates</strong>: Generates and signs X.509 certificates on demand with configurable TTLs.</li>
</ul>

<p><strong>Use Case</strong>: A Kubernetes microservice requests a PostgreSQL credential at startup, uses it for its session lifetime, and the credential is automatically revoked when the pod terminates.</p>

</details>

<details>
<summary><strong>⚡ Automated Secrets Rotation</strong></summary>

<p><strong>Zero-downtime Rotation</strong>: Vault automatically rotates static credentials on a defined schedule, removing the operational burden of manual rotation.</p>

<ul>
<li><strong>Database Password Rotation</strong>: Rotates database root and service account passwords without application downtime.</li>
<li><strong>API Key Lifecycle</strong>: Manages the renewal and revocation of API keys for third-party services.</li>
<li><strong>Certificate Renewal</strong>: Auto-renews TLS certificates before expiry using the PKI secrets engine.</li>
</ul>

<p><strong>Use Case</strong>: A legacy application relying on a static database password is migrated to Vault-managed rotation, removing the credential from source control entirely.</p>

</details>

<details>
<summary><strong>🎯 Identity-Based Machine Authentication</strong></summary>

<p><strong>Platform-Native Auth Methods</strong>: Applications and services authenticate to Vault using their existing platform identity — no shared secrets needed to bootstrap trust.</p>

<ul>
<li><strong>Kubernetes Auth</strong>: Pods authenticate using their native service account JWT, validated against the Kubernetes API.</li>
<li><strong>AWS IAM Auth</strong>: EC2 instances and Lambda functions authenticate using their IAM instance profile.</li>
<li><strong>AppRole</strong>: Lightweight role-based authentication for CI/CD systems and automation tools.</li>
</ul>

<p><strong>Use Case</strong>: A GitHub Actions workflow authenticates to Vault using JWT OIDC federation and retrieves deployment credentials scoped to a specific environment — no long-lived secrets stored in GitHub.</p>

</details>

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Layer                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Kubernetes  │  │  CI/CD       │  │  Application │      │
│  │  Workloads   │  │  Pipelines   │  │  Services    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│               Authentication & Policy Layer                  │
│  • Platform Identity Verification  • Policy Enforcement      │
│  • Audit Logging  • Token Issuance                           │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  HashiCorp Vault Core                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Secrets     │  │  PKI Engine  │  │  Transit     │      │
│  │  Engines     │  │              │  │  (Encrypt)   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  Target Systems Layer                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Databases   │  │  Cloud APIs  │  │  Certificates│      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### System Components

| Component | Purpose | Technology | Scalability |
|-----------|---------|------------|-------------|
| **Auth Methods** | Verify machine and user identities | Kubernetes, AWS IAM, OIDC, AppRole | Horizontal |
| **Secrets Engines** | Generate and manage secrets | KV, Database, PKI, AWS, Azure | Horizontal |
| **Policy Engine** | Enforce access controls | HCL policies | Horizontal |
| **Audit Backends** | Record all access events | File, Syslog, Socket | Horizontal |
| **IBM Verify** | Human identity & SSO | SAML, OIDC, MFA | Horizontal |

### Data Flow

```mermaid
sequenceDiagram
    participant App as Application / Service
    participant Vault as HashiCorp Vault
    participant Auth as Auth Backend
    participant DB as Target System

    App->>Vault: Authenticate (platform identity)
    Vault->>Auth: Validate identity token
    Auth-->>Vault: Identity confirmed
    Vault-->>App: Issue Vault token (scoped)
    App->>Vault: Request secret / credential
    Vault->>DB: Generate short-lived credential
    DB-->>Vault: Credential issued
    Vault-->>App: Return credential + TTL
    Note over App,DB: Credential expires automatically
```

## Use Cases

### Who Should Use Non-human Identity?

#### Target Personas

<details>
<summary><strong>👨‍💻 Platform & DevOps Engineers</strong></summary>

<p>Platform engineers use Non-human Identity to remove static secrets from infrastructure and enable secure, automated credential management.</p>

<p><strong>Common Tasks:</strong></p>

<ul>
<li>Configure Vault auth methods for Kubernetes and CI/CD systems</li>
<li>Define secrets engines and access policies per environment</li>
<li>Integrate Vault into GitOps and IaC workflows</li>
</ul>

<p><strong>Benefits:</strong></p>

<ul>
<li>No secrets in Git repositories or environment variables</li>
<li>Self-service credential access for development teams</li>
</ul>

</details>

<details>
<summary><strong>🏢 Security & Compliance Teams</strong></summary>

<p>Security teams use Non-human Identity to enforce least-privilege access and satisfy audit requirements for credential management.</p>

<p><strong>Common Tasks:</strong></p>

<ul>
<li>Define and review Vault access policies</li>
<li>Monitor audit logs for anomalous secrets access</li>
<li>Drive secrets rotation schedules and compliance reporting</li>
</ul>

<p><strong>Benefits:</strong></p>

<ul>
<li>Complete audit trail of every credential request</li>
<li>Policy-as-code for consistent, reviewable access control</li>
</ul>

</details>

<details>
<summary><strong>🎯 Application Developers</strong></summary>

<p>Developers integrate Non-human Identity to retrieve credentials at runtime rather than managing secrets manually.</p>

<p><strong>Common Tasks:</strong></p>

<ul>
<li>Use Vault SDKs or agent sidecar to fetch credentials</li>
<li>Migrate hardcoded secrets to Vault KV or dynamic engines</li>
<li>Configure application startup to authenticate via platform identity</li>
</ul>

<p><strong>Benefits:</strong></p>

<ul>
<li>No credential management burden in application code</li>
<li>Automatic credential renewal without application restarts</li>
</ul>

</details>

### Real-World Scenarios

#### Scenario 1: Migrate Secrets from Source Control to Vault

**Challenge**: API keys and database passwords are committed to Git repositories, creating a significant security exposure every time code is pushed or cloned.

**Solution**: Use the Vault Secret Migrator Bob skill to identify secrets in existing configuration, write them to Vault KV, and update application configuration to read from Vault at runtime.

**Results**:

- ✅ Zero hardcoded credentials in source repositories
- ✅ Centralized audit trail for all secrets access
- ✅ Secrets rotation without redeploying applications

#### Scenario 2: Dynamic Database Credentials for Microservices

**Challenge**: A Kubernetes-based platform uses a shared database password across all services, making rotation risky and breach impact broad.

**Solution**: Enable the Vault Database secrets engine, configure per-service roles, and have each pod request its own short-lived credential on startup using Kubernetes auth.

**Benefits**:

- Each service gets a unique, time-limited credential
- A compromised credential affects only one service
- Rotation is automatic — no change management required

## Products & Services

#### HashiCorp Vault

**Description**: Enterprise secrets management platform that centrally stores, generates, and controls access to credentials, certificates, and encryption keys for both human and machine identities.

**Key Features:**
- Dynamic secrets generation for databases, cloud, and PKI
- Identity-based authentication for Kubernetes, AWS, Azure, GCP
- Encryption as a service via the Transit secrets engine

**Links:**
- 📖 [Documentation](https://developer.hashicorp.com/vault/docs)
- 🚀 [Get Started](https://developer.hashicorp.com/vault/tutorials)
- 💻 [GitHub Repository](https://github.com/hashicorp/vault)

#### IBM Verify

**Description**: Unified identity and access management platform that secures human identities with SSO, MFA, and risk-based adaptive access across cloud, hybrid, and on-premises environments.

**Key Features:**
- Single sign-on (SSO) across enterprise and SaaS applications
- Multi-factor authentication (MFA) with adaptive risk policies
- Federation support via SAML 2.0 and OIDC

**Links:**
- 📖 [Documentation](https://docs.verify.ibm.com)
- 🚀 [Get Started](https://www.ibm.com/products/verify-identity)
- 💻 [GitHub Repository](https://github.com/ibm-security-verify)

### Demo Videos

#### Getting Started Videos

| Video Title | Description | Link |
|-------------|-------------|------|
| **Vault Secret Migrator Demo** | End-to-end walkthrough of migrating existing secrets into HashiCorp Vault using the Bob custom mode and skill | [▶️ Watch on YouTube](https://www.youtube.com/watch?v=ENm91laCBb8) |

## Additional Resources

### Related Capabilities

**Within Secure:**

- [Cryptographic & Quantum-Safe Readiness](cryptographic-readiness.md) - Cryptographic key management

**Other Building Blocks:**

- [Infrastructure as Code](../operate/infrastructure-as-code.md) - Automated infrastructure with identity controls
- [Configure & Automate](../operate/configure-automate.md) - Inject secrets securely into automation workflows
- [Application Risk & Continuous Compliance](application-risk.md) - Continuous security posture monitoring

## Call to Action

### Ready to Build with Non-human Identity?

Take the next step by choosing the path that best fits your needs:

- **Explore the fundamentals** in the [Overview](#overview), [Architecture](#architecture), and [Key Features](#key-features) sections
- **Watch the demo** in the [Assets](#assets) section to see the Vault Secret Migrator in action

[← Back to Secure](index.md)
