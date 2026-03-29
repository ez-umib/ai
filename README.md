# AI Personal Assistant - Python CLI

This project is an **AI Personal Assistant** implemented in Python using the **Google Gemini API**. It follows modern software engineering practices, leveraging **SOLID principles** and well-known design patterns to ensure modularity, maintainability, and extensibility.

The agent maintains conversation history, decides autonomously when to invoke external tools (function calling), and responds adaptively to user requests.

---

## Project Structure


ai_agent/
└── agent/
├── base_tool.py # Abstract base class defining the tool interface
├── tool_registry.py # Manages registration and execution of tools
├── memory_manager.py # Stores conversation history
├── agent.py # Orchestrates the Reason → Act → Observe loop
├── main.py # CLI for user interaction
└── tools/
├── calc_tool.py # Example calculator tool
├── time_tool.py # Example tool for date and time
├── custom_tool1.py # Custom tool example
└── custom_tool2.py # Custom tool example


---

## Development Environment

- **Python:** 3.10+  
- Install required packages:

```bash
pip install google-generativeai requests
Create a Gemini API key via Google AI Studio and set it as an environment variable:
export GOOGLE_GENAI_API_KEY="YOUR_API_KEY"
How to Run
Navigate to the agent directory:
cd ai_agent/agent
Run the Python CLI:
python3.11 main.py
Type exit to quit the application.
 Architecture
BaseTool: Defines the interface for all tools.
ToolRegistry: Dynamically registers and executes tools by name.
MemoryManager: Maintains conversation history within a session.
Agent: Implements the ReAct loop:
Reason – Decide whether to respond directly or call a tool.
Act – Execute the chosen tool if needed.
Observe – Store the tool output and continue the conversation.
 Implemented Features
Natural language CLI interface for user interaction
Contextual conversation memory
Execution of external tools:
Calculator
Time & Date
Two custom tools (e.g., file reading, translation, news retrieval)
Adaptive decision-making on when to use tools
Robust error handling:
API errors
Invalid tool arguments
Unknown tool requests
 References
Google Gemini API Documentation
SOLID Principles in Python
Gang of Four Design Patterns


