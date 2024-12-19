import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Patient() {

  const nav = useNavigate();

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]); 
  const [nurses, setNurses] = useState([]);   

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [illness, setIllness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [doctor_id, setDoctor_id] = useState(0);
  const [nurse_id, setNurse_id] = useState(0);

  useEffect(() => {
    fetch("https://zahiracare.onrender.com/patients", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.log(error));

    // Fetching doctors to use in the add patient modal.
    fetch("https://zahiracare.onrender.com/doctors", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.log(error));

    // Fetch nurses to use in the add patient modal.
    fetch("https://zahiracare.onrender.com/nurses", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setNurses(data))
      .catch((error) => console.log(error));
  }, []);

  function handleAddPatient(e) {
    e.preventDefault();
    fetch(`https://zahiracare.onrender.com/patients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        illness,
        email,
        phone,
        doctor_id,
        nurse_id,
      }),
    })
    .then((res) => res.json())
    .then((newPatient) => {
      setPatients([...patients, newPatient]); 
      
      const modal = new window.bootstrap.Modal(document.getElementById('patientModal'));
      modal.hide();
    })
    .then(() => nav("/patients")) 
    .catch((error) => console.error("Error adding patient:", error));
  }

  return (
    <main className="patient-container">
      <button
        className="btn add-patient-btn"
        data-bs-toggle="modal"
        data-bs-target="#patientModal"
        style={{ color: 'rgb(248,240,240)', backgroundColor: 'rgb(145,5,8)' }}
      >
        Add New Patient
      </button>

      {/* Add Patient Modal - Using Bootstrap Modal */}
      <div
        className="modal fade"
        id="patientModal"
        tabIndex="-1"
        aria-labelledby="patientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="patientModalLabel">
                Add New Patient
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleAddPatient}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Enter Name"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="form-control"
                    placeholder="Enter Age"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Illness</label>
                  <input
                    type="text"
                    value={illness}
                    onChange={(e) => setIllness(e.target.value)}
                    className="form-control"
                    placeholder="Enter Illness"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter Email"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    placeholder="Enter Phone"
                    required 
                  />
                </div>

                {/* Dropdown for selecting doctor */}
                <div className="form-group">
                  <label>Doctor</label>
                  <select
                    value={doctor_id}
                    onChange={(e) => setDoctor_id(Number(e.target.value))}
                    className="form-select"
                  >
                    <option value={0}>Select Doctor</option>
                    {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dropdown for selecting nurse */}
                <div className="form-group">
                  <label>Nurse</label>
                  <select
                    value={nurse_id}
                    onChange={(e) => setNurse_id(Number(e.target.value))}
                    className="form-select"
                  >
                    <option value={0}>Select Nurse</option>
                    {nurses.map((nurse) => (
                      <option key={nurse.id} value={nurse.id}>
                        {nurse.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn" style={{ color: 'rgb(248,240,240)', backgroundColor: 'rgb(145,5,8)' }}>
                  Add Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* This is where the patients from the database are being rendered */}
      <div className="patient-cards">
        {patients.map((patient) => (
          <div className="patient-card" key={patient.id}>
            <Link to={`/individualpatient/${patient.id}`} className="card-link">
              <div className="profile">
                <img
                  className="profile-img"
                  src={`https://ui-avatars.com/api/?name=${patient.name}&background=random`}
                  alt="Profile"
                />
                <div className="details">
                  <h3>{patient.name}</h3>
                  <p>Age: {patient.age}</p>
                  <p>Phone: {patient.phone}</p>
                  <p>Illness: {patient.disease}</p>
                  <p>Email: {patient.email}</p>
                </div>
              </div>
              <div className="right-info">
                <p>Doctor: {patient?.doctor?.name}</p>
                <p>Nurse: {patient?.nurse?.name}</p>
                <p className="created-date">
                  Date created: {new Date(patient.create_at).toDateString()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
