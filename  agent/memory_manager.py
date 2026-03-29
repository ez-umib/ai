class MemoryManager:
    def __init__(self):
        self.history = []

    def add(self, role: str, msg: str):
        self.history.append({"role": role, "content": msg})

    def get(self):
        return self.history