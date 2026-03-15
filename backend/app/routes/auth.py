from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.dependencies import get_db_connection
from app.models.user import User
from app.schemas.auth import LoginRequest, RegisterRequest
from app.utils import create_access_token

router = APIRouter()


@router.post('/register', status_code=201)
def register(body: RegisterRequest, db: Session = Depends(get_db_connection)):
    new_user = User(username=body.username, password=body.password)

    try:
        db.add(new_user)
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=409, detail='Error while creating user')

    return {'user_id': str(new_user.user_id), 'username': new_user.username}


@router.post('/login', status_code=200)
def login(body: LoginRequest, db: Session = Depends(get_db_connection)):
    user = (
        db.query(User)
        .filter(User.username == body.username, User.password == body.password)
        .first()
    )
    if not user:
        raise HTTPException(status_code=401, detail='Invalid credentials')
    access_token = create_access_token(str(user.user_id))
    return {'access_token': access_token}
