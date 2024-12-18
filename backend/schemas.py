from pydantic import BaseModel


# Patient Section
class CreatePatientSchema(BaseModel):
    name: str
    age: int
    illness: str
    email: str
    phone: str
    doctor_id: int
    nurse_id: int

class UpdatePatientSchema(BaseModel):
    name: str 
    age: int 
    illness: str 
    email: str 
    phone: int
    doctor_id: int 
    nurse_id: int 



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


