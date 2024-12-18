from pydantic import BaseModel
from typing import Optional



# Patient Section
class CreatePatientSchema(BaseModel):
    name: str
    age: int
    illness: str
    email: str
    phone: int
    doctor_id: int
    nurse_id: int

class UpdatePatientSchema(BaseModel):
    name: Optional[str] = None 
    age: Optional[int] = None
    disease: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[int] = None
    doctor_id: Optional[int] = None
    nurse_id: Optional[int] = None



# Doctor Section
class CreateDoctorSchema(BaseModel):
    name: str
    department: str
    specialization: str
    email: str
    phone: str
    on_duty: bool

class UpdateDoctorSchema(BaseModel):
    name: str
    department: str
    specialization: str
    email: str
    phone: str
    on_duty: bool    


#Nurses section

class CreateNurseScheme(BaseModel):
    name: str
    email: str
    phone: str
    on_duty: bool

class UpdateNurseScheme(BaseModel):
    name: str
    email: str
    phone: str
    on_duty: bool


