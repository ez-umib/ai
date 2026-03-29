from base_tool import BaseTool

class FileReaderTool(BaseTool):

    def get_declaration(self):
        return {
            "name": "read_file",
            "description": "Read content from a local file",
            "parameters": {
                "type": "object",
                "properties": {
                    "path": {"type": "string"}
                },
                "required": ["path"]
            }
        }

    def execute(self, args):
        path = args.get("path")
        try:
            with open(path, "r") as f:
                return f.read()
        except:
            return "File not found or cannot be opened."