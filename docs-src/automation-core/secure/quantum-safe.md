# **Quantum-Safe**

[← Back to Secure](index.md)


## **Overview**

IBM Quantum Safe Explorer is a developer-focused tool that scans application source code and binaries to discover cryptographic assets and vulnerabilities. It helps organizations understand where cryptography is being used and identify algorithms that may become vulnerable in the quantum era. It can generate inventories in several formats, including a Cryptography Bill of Materials (CBOM).

---
!!! info "📖 Implementation Resources"

    For detailed implementation guides, code samples, and deployment assets, see:
    
    **[Quantum-Safe](../../../build-and-deploy/quantum-safe/README.md)** - Complete IBM Quantum Safe Explorer integration guide with IBM Bob for quantum-resistant cryptography
---

### **Typical Discoveries**

IBM Quantum Safe Explorer identifies:

- Encryption algorithms (RSA, ECC, AES, SHA, etc.)
- Key sizes and modes
- Cryptographic libraries
- Certificates and protocols
- Locations in code where cryptography is implemented
- Quantum-vulnerable algorithms

---

## **Who Should Use Quantum Safe Explorer?**

### **Target Personas**

IBM Quantum Safe Explorer is designed for technology leaders who need to ensure their products and infrastructure are prepared for the quantum era:

- **VP of Products** - Product leaders responsible for ensuring their software products remain secure and competitive as quantum computing advances
- **Chief Information Security Officer (CISO)** - Security executives tasked with protecting organizational assets and maintaining cryptographic compliance

### **Ideal for Software Companies**

This solution is particularly valuable for software companies across various sectors:

- **SaaS Providers** - Cloud-based software platforms requiring robust cryptographic security
- **Database Vendors** - Companies providing data storage solutions with encryption requirements
- **CRM & ERP Systems** - Enterprise software managing sensitive business data
- **HR Platforms** - Human resources systems handling confidential employee information
- **AI & Machine Learning Companies** - Organizations building AI solutions that require secure data processing

### **IBM Client Zero Success Story**

IBM has successfully implemented Quantum Safe Explorer internally as part of its "Client Zero" initiative, demonstrating the solution's effectiveness in real-world enterprise environments. This internal deployment has enabled IBM to accelerate crypto-agility across its product portfolio and prepare for the post-quantum era.

Learn more about IBM's journey: [Empowering CIOs to Accelerate Crypto-Agility with IBM Quantum Safe Explorer](https://www.ibm.com/new/product-blog/empowering-cios-to-accelerate-crypto-agility-with-ibm-quantum-safe-explorer)

---

## **What is a CBOM?**

A **Cryptography Bill of Materials (CBOM)** provides a standardized inventory of the cryptographic assets used within software and systems, including algorithms, keys, certificates, protocols, and their configurations. As a core capability of the **CycloneDX** standard, CBOM gives organizations visibility into how and where cryptography is deployed across their environments. This visibility enables security teams to identify vulnerable or deprecated cryptographic components, support compliance requirements, and improve cryptographic agility. CBOM also plays a critical role in helping organizations assess and prepare for the transition to post-quantum cryptography.

### **IBM's Leadership in CBOM Standardization**

IBM is at the forefront of advancing the adoption and standardization of the Cryptography Bill of Materials (CBOM), a critical capability within the CycloneDX standard. CBOM provides comprehensive visibility into cryptographic assets, including algorithms, keys, certificates, and protocols. This detailed inventory enables organizations to identify vulnerable or deprecated cryptography, enforce security policies, and prepare for the transition to post-quantum cryptography.

IBM Research has been instrumental in defining the CycloneDX CBOM specification and driving its industry adoption. In 2024, IBM open-sourced **CBOMkit**, a powerful toolkit that enables cryptographic inventory generation, visualization, analysis, and storage. To further advance industry collaboration, IBM contributed these capabilities to the **Post-Quantum Cryptography Alliance (PQCA)** under the Linux Foundation.

As a core capability of the CycloneDX standard, CBOM empowers organizations to:

- **Discover and inventory cryptographic assets** across their application portfolio
- **Identify vulnerable or obsolete algorithms** that pose security risks
- **Assess exposure to emerging quantum threats** and quantum-vulnerable cryptography
- **Support security governance and regulatory compliance** requirements
- **Prioritize and plan cryptographic migration initiatives** for quantum readiness

### **CBOM Contents**

| Information | Example |
|------------|---------|
| Algorithms | RSA-2048, AES-256, SHA-1 |
| Libraries | OpenSSL, BouncyCastle |
| Protocols | TLS 1.2 |
| Certificates | X.509 certificates |
| Key sizes | 1024-bit, 2048-bit |
| Dependencies | Which components use which crypto |

IBM Quantum Safe Explorer automatically generates CBOMs in JSON format whenever a scan is performed.

---

## **Using Quantum Safe Explorer in a CI/CD Pipeline**

Continuously scan applications during CI/CD using IBM Quantum Safe Explorer to automatically create CBOMs, identify vulnerable cryptography, and use IBM BOB Building Blocks to generate code fixes and modernize those cryptographic implementations so applications become crypto-agile and prepared for the post-quantum era.

### **End-to-End Flow**

```
Developer
    ↓
Git Push
    ↓
CI/CD Pipeline
    ↓
Build + Tests
    ↓
IBM Quantum Safe Explorer
    ↓
Generate CBOM
    ↓
Detect weak algorithms
    ↓
IBM BOB
    ↓
Code remediation suggestions
    ↓
Pull Request created
    ↓
Developer approval
    ↓
Re-scan with Explorer
    ↓
Updated CBOM
    ↓
Application becomes Quantum Ready
```

---

## **Step-by-Step Process**

### **Step 1: Developer pushes code**

Code is committed to version control systems:
- GitHub / GitLab
- Triggers CI/CD Pipeline

**CI/CD Platform Examples:**
- GitHub Actions
- Jenkins
- Tekton
- Azure DevOps

### **Step 2: Run IBM Quantum Safe Explorer**

During the pipeline execution:

```
Build
 ↓
Unit Tests
 ↓
Quantum Safe Explorer Scan
 ↓
Generate CBOM
 ↓
Publish Artifacts
```

Explorer scans the source code and produces:
- `findings.json`
- CSV reports
- `CBOM.json`

**Example discovery:**
```json
{
  "algorithm": "RSA",
  "key_size": 1024,
  "location": "auth-service.java:120",
  "risk": "High"
}
```

### **Step 3: Identify vulnerable cryptography**

Suppose the scan finds:

| Algorithm | Risk |
|-----------|------|
| RSA-1024 | High |
| SHA-1 | High |
| TLS 1.0 | High |
| ECC P-256 | Medium |

These become entries in the generated CBOM.

### **Step 4: Feed CBOM into IBM BOB**

IBM BOB (Building Blocks) is IBM's AI-assisted engineering platform that can consume reports and code repositories and help developers modernize or remediate code.

**BOB can:**
- Read the CBOM
- Understand where weak cryptography exists
- Generate pull requests
- Suggest replacement APIs
- Produce migration guides
- Update code automatically

### **Step 5: Remediate cryptography**

#### **Example 1: Hash Algorithm Update**

**Before:**
```java
MessageDigest md = MessageDigest.getInstance("SHA-1");
```

**BOB suggests:**
```java
MessageDigest md = MessageDigest.getInstance("SHA-256");
```

#### **Example 2: RSA Key Size Update**

**Before (1024-bit keys):**
```java
KeyPairGenerator.getInstance("RSA");
```

**BOB updates to:**
```java
KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
keyGen.initialize(3072);
```

#### **Example 3: TLS Protocol Update**

**Old:**
```
TLS 1.0
```

**Updated:**
```
TLS 1.3
```

#### **Example 4: Post-Quantum Algorithms**

Eventually, BOB may recommend migration to NIST PQC algorithms such as:
- **ML-KEM (Kyber)** - Key encapsulation
- **ML-DSA (Dilithium)** - Digital signatures

---

## **Benefits**

This integrated approach provides:

- **Continuous cryptographic inventory** - Always know what crypto is in use
- **Automatic CBOM generation** - No manual tracking required
- **Early detection of weak algorithms** - Find issues before production
- **AI-assisted remediation** - Faster fixes with BOB suggestions
- **Faster transition to post-quantum cryptography** - Automated migration paths
- **Improved crypto agility** - Easy algorithm updates across codebase

---

## **Getting Started**

To implement IBM Quantum Safe Explorer in your CI/CD pipeline:

1. Review the [complete implementation guide](../../../build-and-deploy/quantum-safe/README.md)
2. Integrate IBM Quantum Safe Explorer into your CI/CD pipeline
3. Configure automated CBOM generation and vulnerability scanning
4. Set up IBM BOB for AI-assisted cryptographic remediation
5. Implement continuous monitoring and re-scanning after remediation
6. Establish workflows for pull request review and approval

---

## **Best Practices**

- **Integrate Explorer Early** - Add IBM Quantum Safe Explorer to CI/CD pipelines from the start
- **Automate CBOM Generation** - Generate CBOMs automatically with every build
- **Start with Risk Assessment** - Use Explorer to evaluate quantum vulnerability of existing cryptographic implementations
- **Leverage AI Remediation** - Use IBM BOB to automatically generate fixes for vulnerable cryptography
- **Continuous Scanning** - Re-scan applications after remediation to verify fixes
- **Maintain Audit Trails** - Keep records of all cryptographic changes and remediations
- **Prioritize High-Risk Findings** - Address critical vulnerabilities first
- **Test Thoroughly** - Validate all cryptographic changes in non-production environments
- **Plan for Post-Quantum** - Prepare migration paths to NIST PQC algorithms

---

## **Related Capabilities**

**Within Secure:**

- [Non-human Identity](non-human-identity.md) - Identity and access management

**Other Building Blocks:**

- [Infrastructure as Code](../build/infrastructure-as-code.md) - Automated infrastructure provisioning
- [iPaaS](../build/ipaas.md) - Integration platform capabilities
- [Code Modernization](../build/middleware-modernization.md) - Modernize security middleware
- [Automated Resilience & Compliance](../optimize/automated-resilience.md) - Ensure cryptographic compliance

---

[← Back to Secure](index.md)