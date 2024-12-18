import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nurse() {
  const [nurses, setNurses] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/nurses", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setNurses(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="nurse-container">
      <div className="nurse-cards">
        {nurses.map((nurse) => (
          <div className="nurse-card" key={nurse.id}>
              <Link to={`/individualnurse/${nurse.id}`}  className="card-link">
            <div className="profile">
              <img
                className="profile-img"
                src={`https://ui-avatars.com/api/?name=${nurse.name}&background=random`}
                alt="Profile"
              />
              <div className="details">
                <h3>{nurse.name}</h3>
                <p>Email: {nurse.email}</p>
                <p>Phone: {nurse.phone}</p>
              </div>
            </div>
            <div className="right-info">
              <p>Status: {nurse.on_duty ? "On Duty" : "Off Duty"}</p>
              <p className="created-date">
                Date created: {new Date(nurse.create_at).toDateString()}
              </p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
