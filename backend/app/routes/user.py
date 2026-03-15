from fastapi import APIRouter, Depends

from app.dependencies import get_current_user
from app.models.user import User

router = APIRouter()


@router.get('/me')
def me(current_user: User = Depends(get_current_user)):
    return {'user_id': str(current_user.user_id), 'username': current_user.username}
