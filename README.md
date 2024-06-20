# MongoDB MAAP Chatbot Framework

The MongoDB MAAP Chatbot Framework is a set of libraries that you can use to build your RAG Application
using MongoDB and [Atlas Vector Search](https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-overview/). and associated MAAP partners

The repo offers the flexibility to its user to set up the rag application by simiply configuring a yaml file(details see below). The repo offers the users the flexibilty to choose from various option available through partners program. The following modules of rag are made configurable

1. Data loaders
2. Embedding Models
3. Chat LLM Models
4. Post query Reranker

# Demo Video: https://www.youtube.com/watch?v=-r824BdVZt0

# Steps to run the application

1. Clone the project to you machine install dependencies

```sh
git clone https://github.com/mongodb-partners/maap-chatbot-builder.git
```

## Installation

From the root of the project run the following command to install the dependencies:

```sh
npm install && npm run build
```

2. Configure RAG application

# Configuration

```
ingest:
    source: 'sitemap'
    source_path: 'https://www.careinsurance.com/sitemap.xml'
    chunk_size: 1000
    chunk_overlap: 100
embedding:
    class_name: Nomic-v1.5
vector_store:
    connectionString: '<mongodb connection string>'
    dbName: '<db_name>'
    collectionName: 'embedded_content'
    embeddingKey: 'embedding'
    textKey: 'text'
    vectorSearchIndexName: 'vector_index'
llms:
    class_name: Fireworks
    model_name: 'accounts/fireworks/models/mixtral-8x22b-instruct'
    temprature: ''
    top_p: ''
    top_k: ''
# rag_pipeline:
#     - vs: ''
#       embedding: embedding
#     - retriver:
#           class_name: multiqueryretriver
#           vs: vs
#           llm: llm
#     - chat_engine: llm
# ingest_pipeline: []

```

Also make a copy of the `examples/partnerproduct/example.env` as `.env` to folder where you are running and added the API Keys | URL | Connection Strings | other secrets used in your application.

3. Once configured you can use the yaml file you just created say as in example `examples/partnerproduct/src/config_1.yaml`

## Ingest Data

```
npm install
npm run ingest ./src/config_1.yaml
```

## Run the server

```
npm run start ./src/config_1.yaml
```

4. You can start your UI client application by running the following command

## Start your application UI

```
cd ui
npm install
npm run start
```

Your application ui will be running at `http://localhost:3000`
