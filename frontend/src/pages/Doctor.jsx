import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Doctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/doctors", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="doctor-container">
      <div className="doctor-cards">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <Link to={`/individualdoctor/${doctor.id}`}  className="card-link">
              <div className="profile">
                <img
                  className="profile-img"
                  src={`https://ui-avatars.com/api/?name=${doctor.name}&background=random`}
                  alt="Profile"
                />
                <div className="details">
                  <h3>{doctor.name}</h3>
                  <p>Email: {doctor.email}</p>
                  <p>Phone: {doctor.phone}</p>
                  <p>Department: {doctor.department}</p>
                  <p>Specialization: {doctor.specialization}</p>
                </div>
              </div>
              <div className="right-info">
                <p>Status: {doctor.on_duty ? "On Duty" : "Off Duty"}</p>
                <p className="created-date">
                  Date created: {new Date(doctor.create_at).toDateString()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
