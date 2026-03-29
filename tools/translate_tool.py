from base_tool import BaseTool

class TranslateTool(BaseTool):

    def get_declaration(self):
        return {
            "name": "translate",
            "description": "Translate text to another language",
            "parameters": {
                "type": "object",
                "properties": {
                    "text": {"type": "string"},
                    "target": {"type": "string"}
                },
                "required": ["text", "target"]
            }
        }

    def execute(self, args):
        text = args["text"]
        target = args["target"]

        return f"[Fake translation to {target}]: {text}"