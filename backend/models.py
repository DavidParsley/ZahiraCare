from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, Text, VARCHAR, Boolean, DateTime, ForeignKey, create_engine
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime

# connect to the hospital.db
engine = create_engine('sqlite:///hospital.db', echo=True)

# create a session
Session = sessionmaker(bind=engine)

# create an instance of the session
def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()    

# create a base mode that all our models are going toinherit from
Base = declarative_base()

# create our model
"""
1. We must provide the table name via the __tablename__ attribute
2. It must have at least one column defined
"""


class Doctor(Base):
    __tablename__ = "doctors"

    id = Column(Integer(), primary_key=True)
    name = Column(Text(), nullable= False)
    department = Column(Text(), nullable=False)
    specialization = Column(Text(), nullable=False)
    email = Column(VARCHAR(), nullable=False, unique=True)
    phone = Column(VARCHAR(), nullable=False, unique=True)
    on_duty = Column(Boolean(), nullable=False)
    create_at = Column(DateTime(), default=datetime.now())

    patients = relationship("Patient", backref="doctor")


class Nurse(Base):
    __tablename__ = "nurses"

    id = Column(Integer(), primary_key=True)
    name = Column(Text(), nullable= False)
    email = Column(VARCHAR(), nullable=False, unique=True)
    phone = Column(VARCHAR(), nullable=False, unique=True)
    on_duty = Column(Boolean(), nullable=False)
    create_at = Column(DateTime(), default=datetime.now())

    patients = relationship("Patient", backref="nurse")
    
class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer(), primary_key=True)
    name = Column(Text(), nullable= False)
    age =Column(Integer(), nullable=False)
    illness = Column(Text(), nullable=False)
    email = Column(VARCHAR(), nullable=True, unique=True)
    phone = Column(VARCHAR(), nullable=False, unique=True)
    create_at = Column(DateTime(), default=datetime.now())
    doctor_id = Column(Integer(), ForeignKey('doctors.id'))
    nurse_id = Column(Integer(), ForeignKey('nurses.id'))
    

    # doctor = relationship("Doctor", back_populates="patients")
    # nurse = relationship("Nurse", back_populates="patients")






