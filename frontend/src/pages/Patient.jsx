import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Patient() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/patients", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="patient-container">
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
                  <p>Illness: {patient.illness}</p>
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
