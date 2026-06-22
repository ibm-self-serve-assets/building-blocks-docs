# Documentation for the Bob<span style="color:#0f62fe">+</span> IBM Technology Building Blocks.

This repository hosts the source files for the [Building Blocks Documentation website](https://ibm-self-serve-assets.github.io/building-blocks-docs/).

The markdown files located in [docs-src](./docs-src) are used by Github Pages to build that website.

## Local Development

To test the documentation site locally:

1. Install MkDocs Material:
```bash
pip install mkdocs-material
```

2. Run the development server:
```bash
mkdocs serve
```

3. Open your browser to `http://127.0.0.1:8000`

The site will automatically reload when you make changes to the documentation files.

## Building the Site

To build the static site:
```bash
mkdocs build
```

The built site will be in the `site/` directory.
