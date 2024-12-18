from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models import get_db, Patient, Doctor, Nurse
from schemas import CreatePatientSchema, UpdatePatientSchema, CreateDoctorSchema, UpdateDoctorSchema, CreateNurseScheme,UpdateNurseScheme

# create an instnace of fastapi
app = FastAPI()

# very impotant. middleware allows you to navigate / bypass the blocked fetch request from your fast api to your react
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_methods = '*')

# defining routes 
@app.get('/')
def index():
    return {"messeage": "Welcome to my hospital app"}

# GET -> retrive  resources
@app.get('/patients')
def patients(session: Session = Depends(get_db)):
    # logic to retrive all patients
    patients = session.query(Patient).all()
    # patients = session.query(Patient).all().join(Doctor)

    return patients

# POST -> create a resource -> INSERT INTO patients ()  VALUES ()
@app.post('/patients')
def create_patient(patient: CreatePatientSchema, session: Session = Depends(get_db)):
    # logic to create patient

    new_patient = Patient(**patient.model_dump())
    # Insted of Patient(name = patient.name, age = patient.age, illness = patient.illness, email = patient.email, phone = patient.phone, doctor = patient.doctor, nurse = patient.nurse)
    
    session.add(new_patient)
    session.commit()
    # retrive the inserted patient
    session.refresh(new_patient)
    return  {"messeage": "Patient created successfully", "patient": new_patient}

# GET -> retrive a single resourse -> SELECT * FROM patients  WHERE id = {patient_id}
@app.get('/patients/{patient_id}')
def get_patient(patient_id: int, session: Session = Depends(get_db)):
     # logic to getting a single patient
    patient = session.query(Patient).filter(Patient.id == patient_id).first()
   
    print(patient_id)    
    return  patient

# PUT/PATCH -> update a resource  -> UPDATE  patients WHERE id = {patient_id}
@app.patch('/patients/{patient_id}')
def update_patient(patient_id: int,  update_data: UpdatePatientSchema, session: Session = Depends(get_db)):
     # logic to update a patient
    patient = session.query(Patient).filter(Patient.id == patient_id).first()
    
    if patient is None:
        return {"messeage": "Patient not found"}
    
    if update_data.name:
        patient.name = update_data.name
    if update_data.age:
        patient.age = update_data.age
    if update_data.illness:
        patient.illness = update_data.illness
    if update_data.email:
        patient.email = update_data.email
    if update_data.phone:
        patient.phone = update_data.phone
    if update_data.doctor_id:
        patient.doctor_id = update_data.doctor_id
    if update_data.nurse_id:
        patient.nurse_id = update_data.nurse_id

    session.commit()
    session.refresh(patient)    
    
    print(patient_id)    
    return  patient

# DELETE -> delete a resource(s)  -> DELETE patient WHERE id = {patient_id}
@app.delete('/patients/{patient_id}')
def delete_patient(patient_id: int, session: Session = Depends(get_db)):
    # logic to delete a patient
    patient = session.query(Patient).filter(Patient.id == patient_id).first()
    if patient is None:
        return {"message": "Patient not found"}
    
    # If patient exists, delete it its the oposite of  session.add(new_patient) in create patient
    session.delete(patient)
    session.commit()
 
    print(patient_id)   
    return  {"messeage": f"{patient.name} deleted successfully"}
