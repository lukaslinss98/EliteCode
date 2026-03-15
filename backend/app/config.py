from pathlib import Path

from pydantic_settings import BaseSettings

ENV_FILE = Path(__file__).parent.parent / '.env'


class Settings(BaseSettings):
    secret_key: str

    model_config = {'env_file': ENV_FILE}


settings = Settings()  # pyright: ignore[reportCallIssue]
