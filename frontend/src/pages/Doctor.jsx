import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Doctor() {
  const [doctors, setDoctors] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [on_duty, setOn_duty] = useState(false);

  useEffect(() => {
    fetch("http://http://127.0.0.1:8000/doctors", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.log(error));
  }, []);

  function handleAddDoctor(e) {
    e.preventDefault();
    fetch(`http://http://127.0.0.1:8000/doctors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        department,
        specialization,
        on_duty,
      }),
    })
      .then((res) => res.json()) // Parse the response
      .then((newDoctor) => {
        setDoctors([...doctors, newDoctor]);
      })
      .then(() => nav("/doctors")) // Navigate to /patients page
      .catch((error) => console.error("Error adding Doctor:", error));
  }

  return (
    <main className="doctor-container">
      <button
        className="btn  add-patient-btn"
        data-bs-toggle="modal"
        data-bs-target="#patientModal"
        style={{ color: "rgb(248,240,240)", backgroundColor: "rgb(145,5,8)" }}
      >
        Add New Doctor
      </button>

      {/* Add Doctor Modal*/}
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
                Add New Doctor
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleAddDoctor}>
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
                <div className="form-group">
                  <label>Department</label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="form-control"
                    placeholder="Enter Department"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Specialization</label>
                  <input
                    type="text"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    className="form-control"
                    placeholder="Enter Specialization"
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label>Status</label>
                  <input
                    type="checkbox"
                    checked={on_duty}
                    onChange={(e) => setOn_duty(e.target.checked)}
                    className="form-check-input"
                    style={{ marginLeft: '10px' }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    color: "rgb(248,240,240)",
                    backgroundColor: "rgb(145,5,8)",
                  }}
                >
                  Add Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* This where the doctors fromthe database are being rendered */}
      <div className="doctor-cards">
        {doctors.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <Link to={`/individualdoctor/${doctor.id}`} className="card-link">
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
