from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session, joinedload
from models import get_db, Patient, Doctor, Nurse
from schemas import CreatePatientSchema, UpdatePatientSchema, CreateDoctorSchema, UpdateDoctorSchema, CreateNurseScheme,UpdateNurseScheme

# create an instnace of fastapi
app = FastAPI()

# very impotant. middleware allows you to navigate / bypass the blocked fetch request from your fast api to your react
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_methods = ['*'])

# defining routes 
@app.get('/')
def index():
    return {"messeage": "Welcome to my hospital app"}

# GET -> retrive  resources
@app.get('/patients')
def patients(session: Session = Depends(get_db)):
    # logic to retrive all patients
    patients = session.query(Patient).options(joinedload(Patient.doctor),joinedload(Patient.nurse)).all()
    #The options(joinload()) is to join the relationship between our patients and there doctors from the table    

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
    patient = session.query(Patient).options(joinedload(Patient.doctor), joinedload(Patient.nurse)).filter(Patient.id == patient_id).first()
    #The options(joinload()) is to join the relationship between our patients and there doctors from the table

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


     #############################################################################################################################

# defining route(s)
@app.get('/')
def index():
    return {"messeage": "Welcome to my hospital app"}

# GET -> retrive all resources
@app.get('/doctors')
def doctors(session: Session = Depends(get_db)):
    doctors = session.query(Doctor).all()
    # logic to retrive doctors
    return doctors

# POST -> create a resource INSERT INTO doctors ()  VALUES ()
@app.post('/doctors')
def create_doctor(doctor: CreateDoctorSchema, session: Session = Depends(get_db)):
    # logic to create doctor
    new_doctor = Doctor(**doctor.model_dump())
    session.add(new_doctor)
    session.commit()
    # retrive the inserted doctor
    session.refresh(new_doctor)
    return  {"messeage": "doctor created successfully", "doctor": new_doctor}

# GET -> retrive a single resourse
@app.get('/doctors/{doctor_id}')
def get_doctor(doctor_id: int, session: Session = Depends(get_db)):
    # logic to update doctor
    doctor = session.query(Doctor).filter(Doctor.id == doctor_id).first()
    
    print(doctor_id)    
    return  doctor


# PUT/PATCH -> update a resource
@app.patch('/doctors/{doctor_id}')
def update_doctor(doctor_id: int, update_doctor: UpdateDoctorSchema, session: Session = Depends(get_db)):
    #  logic to update a doctor
    doctor = session.query(Doctor).filter(Doctor.id == doctor_id).first()

    if update_doctor.name:
        doctor.name = update_doctor.name
    if update_doctor.email:
        doctor.email = update_doctor.email
    if update_doctor.department:
        doctor.department = update_doctor.department
    if update_doctor.specialization:
        doctor.specialization = update_doctor.specialization
    if update_doctor.phone:
        doctor.phone = update_doctor.phone
    if update_doctor.on_duty is not None:
        doctor.on_duty = update_doctor.on_duty                    

    session.commit()
    session.refresh(doctor)
    print(doctor_id)    
    return doctor

# DELETE -> delete a resource
@app.delete('/doctors/{doctor_id}')
def delete_doctor(doctor_id: int, session: Session = Depends(get_db)):
    # logic to delete a doctor 
    doctor = session.query(Doctor).filter(Doctor.id == doctor_id).first()
    if doctor is None:
        return  {"messeage": "Doctor Not Found !"}
    
    session.delete(doctor)
    session.commit()

    print(doctor_id)   
    return  {"messeage": f"{doctor.name} Deleted successfully"}
    

              #############################################################################################################################

# defining route(s)
@app.get('/')
def index():
    return {"messeage": "Welcome to my hospital app"}

# GET -> retrive  resources
@app.get('/nurses')
def nurses(session: Session = Depends(get_db)):
    # logic to  retrive all nurses
    nurses = session.query(Nurse).all()
    return nurses

# POST -> create a resource
@app.post('/nurses')
def create_nurse(nurse: CreateNurseScheme, session: Session = Depends(get_db)):
    # logic to create a nurse
    new_nurse = Nurse(**nurse.model_dump())

    session.add(new_nurse)
    session.commit()
    # retrive the inserted nurse
    session.refresh(new_nurse)
    return  {"messeage": "Nurse created successfully", "nurse": new_nurse}

# GET -> retrive a single resourse
@app.get('/nurses/{nurse_id}')
def get_nurse(nurse_id: int, session: Session = Depends(get_db) ):
    #logic to getting a single nurse
    nurse = session.query(Nurse).filter(Nurse.id == nurse_id).first()
    print(nurse_id)    
    return  nurse


# PUT/PATCH -> update a resource
@app.patch('/nurses/{nurse_id}')
def update_nurse(nurse_id: int, update_nurse:UpdateNurseScheme, session: Session = Depends(get_db)):
    #logic to update a nurse
    nurse = session.query(Nurse).filter(Nurse.id == nurse_id).first()
    
    if nurse is None:
        return {"messeage": "Patient Not Found !"}
    
    if update_nurse.name:
        nurse.name = update_nurse.name
    if update_nurse.email:
        nurse.email = update_nurse.email
    if update_nurse.phone:
        nurse.phone = update_nurse.phone
    if update_nurse.on_duty is not None:
        nurse.on_duty = update_nurse.on_duty

    session.commit()
    session.refresh(nurse)                
   
    print(nurse_id)    
    return nurse 

# DELETE -> delete a resource(s)
@app.delete('/nurses/{nurse_id}')
def delete_nurse(nurse_id: int, session: Session = Depends(get_db)):
    #logic to delete a nurse 
    nurse = session.query(Nurse).filter(Nurse.id == nurse_id).first()
    if nurse is None:
        return {"messeage": "Nurse Not Found !"}

    # If nurse exists, delete it its the oposite of  session.add(new_patient) in create patient
    session.delete(nurse)
    session.commit()
    print(nurse_id)   
    return  {"messeage": f"{nurse.name} deleted successfully"}