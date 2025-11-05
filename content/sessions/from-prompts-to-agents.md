---
title: 'From Prompts to Agents: Supercharging Spring Boot with AI and MCP'
speakers:
  - thamaraip
  - udayani
topics:
  - Enterprise Java
time: 11:05 AM - 12:45 PM
weight: 1
sessionType: Workshop
duration: 100 min
---

AI in modern applications must go beyond simple prompts to deliver real value—it needs to reason over your data, respect context, and integrate with external systems. In this fast-paced 90-minute workshop, you’ll learn how to power Spring Boot applications with Spring AI.
We’ll start with chat completions using ChatClient, then ground responses with Retrieval-Augmented Generation (RAG). From there, we’ll extend the application with Tools and the Model Context Protocol (MCP)—standardizing how AI models call APIs, query data, and orchestrate real-world workflows.
By the end, you’ll walk away with a working Spring AI project and a clear roadmap for building production-ready AI agents..

Set-up 

1. Prerequisites
Make sure the following are installed on your system:
- Java 21 or higher
- Maven: For building the project
- Git: For cloning the repository
- Docker: We'll use Docker to run the GitHub MCP Server. You can find installation instructions at the official Docker website
- Node.js and npx: We'll use npx to run the MCP Model Inspector. You can install it from the official Node.js website
- An IDE: Your favorite IDE (Spring Tool Suite, IntelliJ IDEA, VS Code with Spring extensions)
- An AI Model Provider Account: You'll need an API key from a provider like OpenAI or Anthropic

2. Configure Your AI Model Provider

- Spring AI supports a wide range of LLM providers. For this workshop, you can use any provider, but we have included instructions for three popular options below. For a complete list of supported providers and their specific configurations, please refer to the official Spring AI documentation.

- Choose one of the following options to configure your connection to a Large Language Model (LLM).
Option A: OpenAI

Get API Key: If you don't have one, create an API key at platform.openai.com/api-keys
Set Environment Variable: Export the key as an environment variable
`export SPRING_AI_OPENAI_API_KEY='<your-openai-api-key>'
Verify Your Key: Run the following curl command to ensure your key is working correctly
```
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $SPRING_AI_OPENAI_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Tell me a joke"}]
  }'
```
You should see a successful JSON response from the API.

Option B: Anthropic

Get API Key: Sign up and get your API key from the Anthropic Console
Set Environment Variable: Export the key as an environment variable
`export SPRING_AI_ANTHROPIC_API_KEY='<your-anthropic-api-key>'`
Verify Your Key: Run the following curl command to test your key
```
curl https://api.anthropic.com/v1/messages \
  --header "x-api-key: $SPRING_AI_ANTHROPIC_API_KEY" \
  --header "anthropic-version: 2023-06-01" \
  --header "content-type: application/json" \
  --data '{
      "model": "claude-sonnet-4-5-20250929",
      "max_tokens": 1024,
      "messages": [
          {"role": "user", "content": "Tell me a joke"}
      ]
  }'
```
A successful response will confirm your key is valid.

3. Configure GitHub Access Token

During the workshop, we will connect our Spring AI application to the GitHub MCP Server to interact with GitHub repositories. This requires a GitHub Personal Access Token (PAT).

Create a Personal Access Token: Follow the official GitHub documentation to create a "classic" token. 

4. Verify npx is installed:
Run the command: `npx –version`

5. Installing PostgreSQL with pgvector Extension
The pgvector extension adds vector data type support to PostgreSQL — required for storing and searching embeddings in AI applications.
Below are instructions to install PostgreSQL with pgvector enabled on Windows, macOS, and Docker.

Verification
To test that vectors work, run in psql:
CREATE TABLE items (id bigserial PRIMARY KEY, embedding vector(3));
INSERT INTO items (embedding) VALUES ('[1,2,3]');
SELECT * FROM items;

If it inserts and selects successfully — your Postgres is now vector-enabled 🎉


You’re Ready!
More details refer: https://docs.google.com/document/d/1t4NLKcxI8DiuKzEOuMVZN6t8Qbz0ML595xrFBr8naYQ/edit?tab=t.0
