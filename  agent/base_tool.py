from abc import ABC, abstractmethod
from typing import Dict, Any

class BaseTool(ABC):

    @abstractmethod
    def get_declaration(self) -> Dict[str, Any]:
        """Return JSON schema for Gemini function calling."""
        pass

    @abstractmethod
    def execute(self, args: Dict[str, Any]) -> Any:
        """Perform tool logic."""
        pass