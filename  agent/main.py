# main.py
from agent import Agent
from memory_manager import MemoryManager
from tool_registry import ToolRegistry
from tools.calculator_tool import CalculatorTool  # ose çdo tool që ke

# Inicializo memory dhe registry
memory = MemoryManager()
registry = ToolRegistry()

# Shto tools
registry.register("calculator", CalculatorTool())

# Inicializo agentin
agent = Agent(memory, registry)

print("AI Agent është gati! Shkruaj 'exit' për të dalë.\n")

while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        break

    # Kjo thërret agentin dhe e kthen bisedën tek ti
    response = agent.run(user_input)
    print(f"Agent: {response}\n")