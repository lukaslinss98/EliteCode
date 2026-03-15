from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

connection_string = 'postgresql://elitecode:elitecode@localhost:5432/elitecode'

engine = create_engine(connection_string, echo=True)

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

BaseDBModel = declarative_base()
