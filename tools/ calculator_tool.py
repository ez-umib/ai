from base_tool import BaseTool

class CalculatorTool(BaseTool):

    def get_declaration(self):
        return {
            "name": "calculator",
            "description": "Perform basic math operations",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {"type": "string"}
                },
                "required": ["expression"]
            }
        }

    def execute(self, args):
        expression = args.get("expression")
        try:
            return str(eval(expression))
        except:
            return "Invalid math expression"