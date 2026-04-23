# Data Security and Encryption Building Block

The Data Security and Encryption building block combines critical capabilities for protecting sensitive data through masking, encryption, and access controls, ensuring data governance and regulatory compliance.

## Overview

This building block provides comprehensive data protection capabilities using IBM watsonx.data Intelligence, combining automated project and catalog management with advanced data masking and governance workflows.

---

## Key Components

### 1. Project & Catalog Automation
Automated creation and configuration of IBM Cloud projects and catalogs using Python and IBM Cloud APIs.

### 2. Data Protection & Masking
REST API-based workflows for creating categories, business terms, data protection rules, and policies that enforce masking.

### 3. Guardium Integration (Coming Soon)
Advanced data security, monitoring, and encryption enforcement with IBM Guardium.

---

## Features

### Data Governance

- **Automated Setup**: Python scripts for project and catalog creation
- **Category Management**: Organize data by sensitivity levels
- **Business Terms**: Define and manage business vocabulary
- **Policy Enforcement**: Automated policy application

### Data Protection

- **Data Masking**: Redact sensitive information (email, SSN, etc.)
- **Access Controls**: Role-based data access
- **Encryption**: Data encryption at rest and in transit
- **Audit Trails**: Track data access and modifications

### Compliance

- **Regulatory Support**: GDPR, CCPA, HIPAA compliance
- **Data Classification**: Automatic data sensitivity classification
- **Policy Management**: Centralized policy administration
- **Reporting**: Compliance reporting and monitoring

---

## Prerequisites

!!! info "Requirements"
    - IBM Cloud account with access to watsonx.data Intelligence
    - IBM Cloud Object Storage instance and credentials
    - IBM API Key with sufficient permissions
    - Installed: `curl`, `jq`, Python 3.x, `requests` library
    - Correct service endpoints for your IBM Cloud region

---

## Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/ibm-self-serve-assets/building-blocks.git
cd building-blocks/data-for-ai/data-security-and-encryption/assets/data-protection-automation
```

### Step 2: Configure Input JSON

Create or update `input.json` with your configuration:

```json
{
  "ibm_api_key": "YOUR_IBM_API_KEY",
  "region": "eu-de",
  "project": {
    "name": "Demo-Project-for-watsonx.data-Intelligence",
    "description": "Demo project",
    "type": "wx",
    "generator": "Projects-for-Intelligence",
    "public": false,
    "storage": {
      "type": "bmcos_object_storage",
      "resource_crn": "YOUR_COS_CRN",
      "guid": "YOUR_COS_GUID",
      "delegated": false
    }
  },
  "catalog": {
    "name": "Demo-Catalog-for-watsonx.data-Intelligence",
    "bss_account_id": "YOUR_ACCOUNT_ID",
    "is_governed": true,
    "cos_bucket": {
      "bucket_name": "bucket-xyz",
      "bucket_location": "eu-de",
      "endpoint_url": "s3.eu-de.cloud-object-storage.appdomain.cloud",
      "resource_instance_id": "YOUR_RESOURCE_INSTANCE_ID"
    }
  }
}
```

### Step 3: Run Automation Script

```bash
python setup_ibm_projects_catalog.py
```

This will:

- Authenticate with IBM Cloud IAM
- Create a project with configured storage
- Create a catalog with governance enabled
- Print responses for verification

---

## Data Protection Workflow

### Step 1: Get IAM Token

```bash
export API_KEY="YOUR_IBM_API_KEY"
export TOKEN=$(curl -s -X POST "https://iam.cloud.ibm.com/identity/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}" | jq -r .access_token)
```

### Step 2: Create Category

```bash
curl -X POST "${WATSONDATA_API_BASE}/v2/categories" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "PII",
    "description": "Personally Identifiable Information",
    "short_description": "PII data"
  }'
```

### Step 3: Create Business Term

```bash
curl -X POST "${WATSONDATA_API_BASE}/v2/terms" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Email Address",
    "short_description": "User email address",
    "description": "Business term for email",
    "categories": ["<CATEGORY_ID>"]
  }'
```

### Step 4: Create Data Protection Rule

```bash
curl -X POST "${CATALOG_API_BASE}/v3/enforcement/rules" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Redact Email Rule",
    "description": "Mask email columns for Business Users",
    "assetTypes": ["table","view"],
    "masking": {
      "method": "redact",
      "preserveFormat": false
    },
    "criteria": [
      {
        "columnProperty": "columnName",
        "values": ["email"]
      }
    ],
    "targetUsers": {
      "roles": ["Business User"]
    }
  }'
```

### Step 5: Create Policy

```bash
curl -X POST "${WATSONDATA_API_BASE}/v2/policies" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "PII Redaction Policy",
    "description": "Policy to enforce email redaction",
    "assetTypes": ["table","view"],
    "rules": ["<RULE_ID>"],
    "terms": ["<TERM_ID>"]
  }'
```

### Step 6: Validate Masking

```bash
curl -X GET "${CATALOG_API_BASE}/v2/assets/<ASSET_ID>/data" \
  -H "Authorization: Bearer ${BUSINESS_USER_TOKEN}" \
  -H "Accept: application/json"
```

!!! success "Expected Result"
    Email column is masked (e.g., `***` or `xxxxx`)

---

## Configuration Reference

### Input JSON Structure

| Section | Key | Description | Example |
|---------|-----|-------------|---------|
| **Root** | `ibm_api_key` | IBM Cloud API key | `XXXXXXXXXXXX` |
| | `region` | Target IBM region | `eu-de` |
| **Project** | `name` | Project name | `Demo-Project` |
| | `description` | Project description | `Demo project` |
| | `type` | Project type | `wx` |
| **Storage** | `type` | Storage type | `bmcos_object_storage` |
| | `resource_crn` | COS resource CRN | `crn:v1:...` |
| **Catalog** | `name` | Catalog name | `Demo-Catalog` |
| | `is_governed` | Governance enabled | `true` |
| **COS Bucket** | `bucket_name` | COS bucket name | `bucket-xyz` |
| | `endpoint_url` | COS endpoint | `s3.eu-de.cloud-object-storage...` |

---

## Masking Methods

### Redaction
Completely masks sensitive data with a fixed character or pattern.

```json
{
  "masking": {
    "method": "redact",
    "preserveFormat": false
  }
}
```

### Tokenization
Replaces sensitive data with a token that can be reversed with proper authorization.

```json
{
  "masking": {
    "method": "tokenize",
    "tokenType": "reversible"
  }
}
```

### Format-Preserving Encryption
Encrypts data while maintaining its format (e.g., credit card numbers remain 16 digits).

```json
{
  "masking": {
    "method": "fpe",
    "algorithm": "FF3-1"
  }
}
```

---

## Use Cases

### Healthcare (HIPAA Compliance)

- Mask patient identifiers (SSN, medical record numbers)
- Protect PHI (Protected Health Information)
- Audit access to sensitive medical data

### Financial Services (PCI DSS)

- Mask credit card numbers
- Protect account information
- Secure transaction data

### Retail (GDPR/CCPA)

- Mask customer email addresses
- Protect personal information
- Enable data subject rights

### Enterprise Data Governance

- Classify data by sensitivity
- Enforce role-based access
- Track data lineage and usage

---

## Best Practices

### Security

!!! tip "Security Guidelines"
    1. **Rotate API Keys**: Regularly rotate IBM Cloud API keys
    2. **Least Privilege**: Grant minimum required permissions
    3. **Audit Logs**: Enable and monitor audit logs
    4. **Encryption**: Use encryption for data at rest and in transit

### Governance

1. **Data Classification**: Classify all sensitive data
2. **Policy Review**: Regularly review and update policies
3. **Access Control**: Implement role-based access control
4. **Compliance**: Maintain compliance documentation

### Operations

1. **Automation**: Automate policy deployment
2. **Monitoring**: Monitor policy violations
3. **Testing**: Test masking rules before production
4. **Documentation**: Document all governance rules

---

## Guardium Integration (Coming Soon)

The next iteration will add IBM Guardium capabilities:

### Data Activity Monitoring

- Track sensitive data access in real-time
- Detect anomalous access patterns
- Generate security alerts

### Encryption & Key Management

- Enforce encryption policies consistently
- Centralized key management
- Automated key rotation

### Compliance Reporting

- Automate reporting for GDPR, CCPA, HIPAA
- Generate audit trails
- Track compliance metrics

### Integration with watsonx.data

- Unified data protection and governance
- Seamless policy enforcement
- Centralized monitoring

Learn more: [IBM Guardium Documentation](https://www.ibm.com/docs/en/gdp/12.x)

---

## Troubleshooting

### Common Issues

!!! warning "Common Problems and Solutions"
    
    **Authentication Errors:**
    
    - Verify API key is valid
    - Check token expiration
    - Ensure proper permissions
    
    **Policy Not Applied:**
    
    - Verify rule and term IDs are correct
    - Check policy is activated
    - Confirm user roles match target roles
    
    **Masking Not Working:**
    
    - Verify column names match criteria
    - Check rule is linked to policy
    - Confirm policy is applied to asset

---

## IBM Products Used

This building block leverages the following IBM products and services:

### IBM watsonx.data Intelligence
AI-powered data intelligence and governance platform for enterprise data management.

- **Purpose**: Data governance, catalog management, and policy enforcement
- **Documentation**: [watsonx.data Intelligence Documentation](https://www.ibm.com/docs/en/watsonx/wdi/saas)
- **API Reference**: [watsonx.data API](https://cloud.ibm.com/apidocs/watson-data-api)
- **Getting Started**: [Setting up watsonx.data Intelligence](https://www.ibm.com/docs/en/watsonx/wdi/saas?topic=cloud-setting-up-watsonxdata-intelligence)

### IBM Cloud Object Storage (COS)
Scalable, secure object storage for unstructured data with built-in encryption.

- **Purpose**: Secure data storage with encryption at rest
- **Documentation**: [IBM COS Documentation](https://cloud.ibm.com/docs/cloud-object-storage)
- **Security Features**: [COS Security](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-security)
- **Getting Started**: [COS Getting Started](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage)

### IBM Knowledge Catalog
Enterprise catalog for discovering, curating, and governing data assets.

- **Purpose**: Data classification, business terms, and policy management
- **Documentation**: [Knowledge Catalog Documentation](https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=services-watson-knowledge-catalog)
- **API Reference**: [Knowledge Catalog API](https://cloud.ibm.com/apidocs/knowledge-catalog)
- **Data Protection**: [Data Protection Rules](https://www.ibm.com/docs/en/cloud-paks/cp-data/4.8.x?topic=catalog-data-protection-rules)

### IBM Guardium Data Protection (Coming Soon)
Comprehensive data security and compliance solution.

- **Purpose**: Advanced data activity monitoring, encryption, and compliance reporting
- **Documentation**: [IBM Guardium Documentation](https://www.ibm.com/docs/en/gdp/12.x)
- **Product Page**: [IBM Guardium](https://www.ibm.com/products/guardium-data-protection)
- **Integration**: Seamless integration with watsonx.data for unified data protection

### IBM Cloud IAM
Identity and Access Management for secure authentication and authorization.

- **Purpose**: API key management and access control
- **Documentation**: [IBM Cloud IAM Documentation](https://cloud.ibm.com/docs/account?topic=account-iamoverview)
- **API Keys**: [Managing API Keys](https://cloud.ibm.com/docs/account?topic=account-userapikey)

---

## Resources

- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data-for-ai/data-security-and-encryption)
- [watsonx.data API Documentation](https://cloud.ibm.com/apidocs/watson-data-api)
- [Knowledge Catalog API](https://cloud.ibm.com/apidocs/knowledge-catalog)
- [IBM Guardium](https://www.ibm.com/products/guardium-data-protection)

---

## Support

For issues or questions:

- [GitHub Issues](https://github.com/ibm-self-serve-assets/building-blocks/issues)
- [IBM Cloud Support](https://cloud.ibm.com/unifiedsupport/supportcenter)
- [watsonx.data Documentation](https://www.ibm.com/docs/en/watsonxdata)