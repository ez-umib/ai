class ToolRegistry:
    def __init__(self):
        self.tools = {}

    def register(self, tool_name: str, tool_instance):
        self.tools[tool_name] = tool_instance

    def execute(self, tool_name: str, args):
        if tool_name not in self.tools:
            return f"Error: Tool '{tool_name}' not found."
        try:
            return self.tools[tool_name].execute(args)
        except Exception as e:
            return f"Tool execution error: {str(e)}"

    def get_all_declarations(self):
        return [tool.get_declaration() for tool in self.tools.values()]