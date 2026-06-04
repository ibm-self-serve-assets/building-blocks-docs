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

## **What is a CBOM?**

**CBOM (Cryptography Bill of Materials)** is a structured inventory of all cryptographic components used by an application.

It is similar to an SBOM (Software Bill of Materials), but focuses specifically on cryptography.

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