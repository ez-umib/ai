from agent import Agent
from memory_manager import MemoryManager
from tool_registry import ToolRegistry

from tools.calculator_tool import CalculatorTool
from tools.weather_tool import WeatherTool
from tools.translate_tool import TranslateTool
from tools.file_reader_tool import FileReaderTool

def main():
    registry = ToolRegistry()
    registry.register("calculator", CalculatorTool())
    registry.register("weather", WeatherTool())
    registry.register("translate", TranslateTool())
    registry.register("read_file", FileReaderTool())

    memory = MemoryManager()
    agent = Agent(memory, registry)

    print("AI Agent Ready. Type 'exit' to quit.\n")

    while True:
        user = input("You: ")
        if user == "exit":
            break
        
        response = agent.run(user)
        print("Agent:", response)

if __name__ == "__main__":
    main()