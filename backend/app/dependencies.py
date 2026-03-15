from fastapi import Depends, HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.utils import decode_token

bearer_scheme = HTTPBearer()


def get_db_connection():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_current_user(
    credentials: HTTPAuthorizationCredentials = Security(bearer_scheme),
    db: Session = Depends(get_db_connection),
):
    from app.models.user import User

    user_id = decode_token(credentials.credentials)
    print('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
    print(user_id)
    user = db.query(User).filter(User.user_id == user_id).first()
    if not user:
        raise HTTPException(status_code=401, detail='Invalid token')
    return user
