from base_tool import BaseTool
class WeatherTool(BaseTool):
    def get_declaration(self):
        return {"name":"weather","description":"Get weather","parameters":{"type":"object","properties":{"city":{"type":"string"}},"required":["city"]}}
    def execute(self,args):
        return f"Fake weather: It's sunny in {args.get('city')}"