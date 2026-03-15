from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db_connection
from app.models.user import User
from app.schemas.auth import RegisterRequest

router = APIRouter()


@router.post('/register')
def register(body: RegisterRequest, db: Session = Depends(get_db_connection)):
    db.add(User(username=body.username, password=body.password))
    db.commit()
    return {'message': 'created'}
