# calculator_tool.py
from base_tool import BaseTool
from typing import Dict, Any

class CalculatorTool(BaseTool):
    def get_declaration(self) -> Dict[str, Any]:
        """Return the JSON schema for Gemini function calling"""
        return {
            "name": "calculator",
            "description": "Performs basic math calculations",
            "parameters": {
                "type": "object",
                "properties": {
                    "expression": {"type": "string"}
                },
                "required": ["expression"]
            }
        }

    def execute(self, args: Dict[str, Any]) -> str:
        """Evaluate a math expression safely"""
        expression = args.get("expression", "")
        if not expression:
            return "Error: No expression provided."

        try:
            # Only allow numbers and basic operators
            allowed_chars = "0123456789+-*/(). "
            if any(c not in allowed_chars for c in expression):
                return "Error: Invalid characters in expression."
            
            result = eval(expression)  # Safe because of allowed_chars check
            return str(result)
        except Exception as e:
            return f"Error evaluating expression: {str(e)}"