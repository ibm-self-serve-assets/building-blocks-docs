# Text2SQL

Convert natural language questions into executable SQL queries using AI-powered query generation with IBM watsonx.

## Overview

Text2SQL enables users to query databases using natural language instead of writing SQL code. This building block leverages IBM watsonx.ai foundation models to understand user intent and generate accurate, optimized SQL queries that can be executed against various database systems.

![Text2SQL Overview](../../images/text2sql.png)

## Key Features

### Natural Language Understanding
- Interpret complex natural language questions
- Handle ambiguous queries with context awareness
- Support for multiple languages
- Conversational query refinement

### SQL Generation
- Generate syntactically correct SQL queries
- Support for complex joins and subqueries
- Optimize query performance
- Handle multiple database dialects (PostgreSQL, MySQL, Db2, etc.)

### Schema Intelligence
- Automatic schema understanding
- Table and column relationship inference
- Semantic mapping of business terms to database objects
- Context-aware query generation

### Query Validation
- Syntax validation before execution
- Security checks to prevent SQL injection
- Query complexity analysis
- Result set size estimation

## IBM Products

- **IBM watsonx.ai**: Foundation models for natural language understanding
- **IBM watsonx.data**: Query execution and data access
- **IBM Db2**: Enterprise database support
- **Presto/Trino**: Distributed SQL query engine

## Use Cases

!!! example "Common Text2SQL Scenarios"
    - **Business Intelligence**: Enable non-technical users to query data
    - **Data Exploration**: Quick ad-hoc analysis without SQL knowledge
    - **Report Generation**: Natural language report requests
    - **Data Quality**: Ask questions about data completeness and accuracy

## Getting Started

### Prerequisites

- IBM watsonx.ai instance with API access
- Database connection (Db2, PostgreSQL, MySQL, etc.)
- Database schema metadata
- Python 3.8 or higher

### Quick Start

1. **Install Dependencies**
   ```bash
   pip install ibm-watsonx-ai sqlalchemy
   ```

2. **Configure Text2SQL**
   ```python
   from ibm_watsonx_ai import Text2SQL
   from sqlalchemy import create_engine
   
   # Initialize Text2SQL
   text2sql = Text2SQL(
       api_key="your-watsonx-api-key",
       project_id="your-project-id",
       model_id="meta-llama/llama-3-70b-instruct"
   )
   
   # Connect to database
   engine = create_engine("postgresql://user:pass@host:5432/dbname")
   text2sql.connect(engine)
   ```

3. **Generate and Execute Queries**
   ```python
   # Ask a question in natural language
   question = "What were the top 5 products by revenue last quarter?"
   
   # Generate SQL query
   result = text2sql.query(question)
   
   print(f"Generated SQL: {result.sql}")
   print(f"Explanation: {result.explanation}")
   print(f"Results:\n{result.data}")
   ```

4. **Advanced Usage with Schema Context**
   ```python
   # Provide schema context for better results
   schema_context = {
       "tables": {
           "sales": "Contains transaction records",
           "products": "Product catalog with pricing",
           "customers": "Customer information"
       },
       "relationships": [
           "sales.product_id -> products.id",
           "sales.customer_id -> customers.id"
       ]
   }
   
   text2sql.set_schema_context(schema_context)
   
   # Now queries will be more accurate
   result = text2sql.query(
       "Show me customers who bought more than $1000 worth of electronics"
   )
   ```

## Architecture

```mermaid
graph TB
    UI[User Interface<br/>Natural Language Input]
    
    subgraph Text2SQL Engine
        NLP[NL Parser]
        Schema[Schema Mapper]
        SQLGen[SQL Generator]
        Validator[Validator]
        Optimizer[Optimizer]
    end
    
    DB[(Database<br/>PostgreSQL, Db2, MySQL)]
    Formatter[Result Formatter<br/>Tables, Charts, Explanations]
    
    UI -->|Natural Language Question| NLP
    NLP --> Schema
    Schema --> SQLGen
    SQLGen --> Validator
    Validator --> Optimizer
    Optimizer -->|SQL Query| DB
    DB -->|Query Results| Formatter
    
    style UI fill:#e1f5ff
    style DB fill:#fff4e1
    style Formatter fill:#e8f5e9
```

## Example Queries

### Simple Queries
```python
# Count records
text2sql.query("How many customers do we have?")
# Generated: SELECT COUNT(*) FROM customers

# Filter and sort
text2sql.query("Show me the 10 most expensive products")
# Generated: SELECT * FROM products ORDER BY price DESC LIMIT 10
```

### Complex Queries
```python
# Aggregation with grouping
text2sql.query("What is the average order value by customer segment?")
# Generated: 
# SELECT c.segment, AVG(o.total_amount) as avg_order_value
# FROM customers c
# JOIN orders o ON c.id = o.customer_id
# GROUP BY c.segment

# Time-based analysis
text2sql.query("Compare monthly sales for this year vs last year")
# Generated:
# SELECT 
#   DATE_TRUNC('month', order_date) as month,
#   SUM(CASE WHEN YEAR(order_date) = YEAR(CURRENT_DATE) 
#       THEN total_amount ELSE 0 END) as current_year,
#   SUM(CASE WHEN YEAR(order_date) = YEAR(CURRENT_DATE) - 1 
#       THEN total_amount ELSE 0 END) as last_year
# FROM orders
# GROUP BY DATE_TRUNC('month', order_date)
```

## Best Practices

1. **Provide Schema Context**: Include table descriptions and relationships for better accuracy
2. **Start Simple**: Begin with straightforward questions and gradually increase complexity
3. **Review Generated SQL**: Always review generated queries before execution in production
4. **Use Query Limits**: Add result limits to prevent overwhelming responses
5. **Cache Common Queries**: Store frequently used query patterns for faster response
6. **Monitor Performance**: Track query generation time and database execution time

## Security Considerations

- **SQL Injection Prevention**: All queries are validated and parameterized
- **Access Control**: Respect database user permissions
- **Query Complexity Limits**: Prevent resource-intensive queries
- **Audit Logging**: Track all generated and executed queries
- **Data Masking**: Apply data privacy rules to query results

## Integration Examples

### With Jupyter Notebooks
```python
from ibm_watsonx_ai import Text2SQL
import pandas as pd

text2sql = Text2SQL(api_key="...", project_id="...")
text2sql.connect(engine)

# Use in notebook
def ask(question):
    result = text2sql.query(question)
    print(f"SQL: {result.sql}\n")
    return pd.DataFrame(result.data)

# Interactive querying
df = ask("What are the top selling products this month?")
df.plot(kind='bar')
```

### With Web Applications
```python
from flask import Flask, request, jsonify
from ibm_watsonx_ai import Text2SQL

app = Flask(__name__)
text2sql = Text2SQL(api_key="...", project_id="...")

@app.route('/query', methods=['POST'])
def query():
    question = request.json['question']
    result = text2sql.query(question)
    return jsonify({
        'sql': result.sql,
        'data': result.data,
        'explanation': result.explanation
    })
```

## Demo Videos

### Text-to-SQL Demo

Watch the Text-to-SQL application convert natural language questions into executable SQL queries:

<video width="100%" controls>
  <source src="demos/text-to-sql-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

**Demo Highlights:**

- Natural language question input
- SQL query generation using IBM watsonx.ai
- Query execution and result display
- Error handling and query refinement

### RAG Accelerator Demo

Watch the RAG Accelerator demonstrate document-based question answering:

<video width="100%" controls>
  <source src="demos/rag-accelerator-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

**Demo Highlights:**

- Document ingestion and processing
- Semantic search and retrieval
- Context-aware question answering
- Integration with watsonx.ai

## Resources

- [GitHub Repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/text2sql)
- [IBM watsonx.ai Documentation](https://www.ibm.com/docs/en/watsonx-as-a-service)
- [SQL Best Practices Guide](https://www.ibm.com/docs/en/db2)

## Support

For issues or questions, please refer to the [GitHub repository](https://github.com/ibm-self-serve-assets/building-blocks/tree/main/data/intelligence/text2sql) or contact IBM support.