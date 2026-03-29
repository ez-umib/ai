import os
from google.genai import Client


api_key = os.getenv("GOOGLE_GENAI_API_KEY")
if not api_key:
    raise ValueError("API key nuk u gjet! Vendos GOOGLE_GENAI_API_KEY.")


client = Client(api_key=api_key)

def main():
    print("🤖 Chatbot Google GenAI (shkruaj 'exit' për të dalë)")
    
    while True:
        user_input = input("Ti: ")
        if user_input.lower() == "exit":
            print("Dalim nga chat. Bye! 👋")
            break

       
        messages = [
            {"author": "user", "content": user_input}
        ]

        
        response = client.chats.create(
            model="gpt-4o-mini",  
            messages=messages
        )

        
        print("🤖 Bot:", response.output_text)

if __name__ == "__main__":
    main()
