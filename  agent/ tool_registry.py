# tool_registry.py
from typing import Dict, Any

class ToolRegistry:
    def __init__(self):
        self.tools: Dict[str, object] = {}

    def register(self, tool_name: str, tool_instance):
        """Register a new tool"""
        self.tools[tool_name] = tool_instance

    def execute(self, tool_name: str, args: Dict[str, Any]):
        """Execute a registered tool safely"""
        if tool_name not in self.tools:
            return f"Error: Tool '{tool_name}' not found."

        try:
            result = self.tools[tool_name].execute(args)
            return result
        except Exception as e:
            return f"Tool execution error: {str(e)}"

    def get_all_declarations(self):
        """Return declaration of all tools for LLM function calling"""
        return [tool.get_declaration() for tool in self.tools.values()]