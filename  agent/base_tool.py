from abc import ABC, abstractmethod
from typing import Dict, Any

class BaseTool(ABC):
    @abstractmethod
    def get_declaration(self) -> Dict[str, Any]:
        pass

    @abstractmethod
    def execute(self, args: Dict[str, Any]) -> Any:
        pass