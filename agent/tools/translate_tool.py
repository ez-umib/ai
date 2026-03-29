from base_tool import BaseTool
class TranslateTool(BaseTool):
    def get_declaration(self):
        return {"name":"translate","description":"Translate text","parameters":{"type":"object","properties":{"text":{"type":"string"},"target":{"type":"string"}},"required":["text","target"]}}
    def execute(self,args):
        return f"[Fake translation to {args['target']}]: {args['text']}"