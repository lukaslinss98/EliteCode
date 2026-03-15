from datetime import datetime, timedelta

from jose import jwt

from app.config import settings

SECRET_KEY = settings.secret_key


def create_access_token(user_id: str) -> str:
    payload = {'sub': user_id, 'exp': datetime.now() + timedelta(hours=1)}
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')


def decode_token(token: str) -> int:
    payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
    return payload['sub']
