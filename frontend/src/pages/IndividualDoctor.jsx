import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function IndividualDoctor() {
  const nav = useNavigate();
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [on_duty, setOn_duty] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/doctors/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDoctor(data);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setDepartment(data.department);
        setSpecialization(data.specialization);
        setOn_duty(data.on_duty);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  function handleDelete() {
    fetch(`http://127.0.0.1:8000/doctors/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => nav("/doctors"))
      .catch((error) => console.error("Error deleting patient:", error));
  }

  function handleUpdate(e) {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/doctors/${id}`, {
      method: "PATCH",
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
      .then((res) => res.json())
      .then(() => nav("/doctors"))
      .catch((error) => console.error("Error updating patient:", error));
  }
  return (
    <div className="patient-container">
      <div className="patient-card">
        <div className="card-header">
          <img
            className="profile-img"
            src={`https://ui-avatars.com/api/?name=${doctor.name}&background=random`}
            alt="Profile"
          />
          <h3 className="card-title">{doctor.name}</h3>
        </div>
        <div className="card-body">
          <ul className="patient-details">
            <li>
              <strong>Email</strong> {doctor.email}
            </li>
            <li>
              <strong>Phone:</strong> {doctor.phone}
            </li>
            <li>
              <strong>Department:</strong> {doctor.department}
            </li>
            <li>
              <strong>Specialization:</strong> {doctor.specialization}
            </li>
            <li>
              <strong>Status:</strong> {doctor.on_duty ? "On Duty" : "Off Duty"}
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="delete-btn" onClick={handleDelete}>
            Delete Doctor
          </button>
        </div>
      </div>

      {/* Form for Updating Patient */}
      <form className="patient-form" onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setAge(e.target.value)}
            className="form-input"
            placeholder="Enter Email"
          />
        </div>

        <div className="form-group">
          <label></label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDisease(e.target.value)}
            className="form-input"
            placeholder="Enter Department"
          />
        </div>

        <div className="form-group">
          <label>Specialization</label>
          <input
            type="text"
            value={specialization}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
            placeholder="Enter Specialization"
          />
        </div>
        <div className="mb-3">
          <label>Status</label>
          <input
            type="checkbox"
            checked={on_duty}
            onChange={(e) => setOn_duty(e.target.checked)}
            className="form-check-input"
          />
        </div>
        <button type="submit" className="update-btn">
          Update
        </button>
      </form>
    </div>
  );
}
