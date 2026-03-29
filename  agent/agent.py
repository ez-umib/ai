import google.generativeai as genai
import os

class Agent:
    def __init__(self, memory, registry):
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
        self.model = genai.GenerativeModel(
            model_name="gemini-1.5-flash",
            tools=registry.get_all_declarations()
        )
        self.memory = memory
        self.registry = registry

    def run(self, user_input: str):
        self.memory.add("user", user_input)

        response = self.model.generate_content(
            self.memory.get(),
            safety_settings={"HARASSMENT":"BLOCK_NONE"}
        )

        if response.candidates[0].content.parts[0].function_call:
            fn = response.candidates[0].content.parts[0].function_call
            tool_name = fn.name
            args = fn.args
            output = self.registry.execute(tool_name, args)
            self.memory.add("tool", str(output))

            # Continue reasoning
            final = self.model.generate_content(self.memory.get())
            return final.text
        
        return response.text