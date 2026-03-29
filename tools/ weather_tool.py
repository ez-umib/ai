from base_tool import BaseTool

class WeatherTool(BaseTool):

    def get_declaration(self):
        return {
            "name": "weather",
            "description": "Get weather for a city",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {"type": "string"}
                },
                "required": ["city"]
            }
        }

    def execute(self, args):
        city = args.get("city")
        return f"Fake weather: It's sunny in {city} (example)"