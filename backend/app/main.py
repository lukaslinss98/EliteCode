from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.database import BaseDBModel, engine
from app.models import user
from app.routes import auth


@asynccontextmanager
async def lifespan(_: FastAPI):
    with engine.connect():
        print('DB connection established')
    BaseDBModel.metadata.create_all(bind=engine)
    yield


app = FastAPI(lifespan=lifespan)


app.include_router(auth.router, prefix='/api/auth', tags=['auth'])
