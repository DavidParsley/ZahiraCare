// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function IndividualPatient() {
//   const nav = useNavigate();
//   const { id } = useParams();
//   const [patient, setPatient] = useState({});
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [illness, setIllness] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [doctor_id, setDoctor_id] = useState(0);
//   const [nurse_id, setNurse_id] = useState(0);

//   useEffect(() => {
//     fetch(`https://zahiracare.onrender.com/patients/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setPatient(data);
//         setName(data.name);
//         setAge(data.age);
//         setIllness(data.illness);
//         setEmail(data.email);
//         setPhone(data.phone);
//         setDoctor_id(data.doctor_id);
//         setNurse_id(data.nurse_id);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [id]);

//   function handleDelete() {
//     fetch(`https://zahiracare.onrender.com/patients/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then(() => nav("/patients"))
//       .catch((error) => console.error("Error deleting patient:", error));
//   }

//   function handleUpdate(e) {
//     e.preventDefault();
//     fetch(`https://zahiracare.onrender.com/patients/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name,
//         age,
//         illness,
//         email,
//         phone,
//         doctor_id,
//         nurse_id,
//       }),
//     })
//       .then((res) => res.json())
//       .then(() => nav("/patients"))
//       .catch((error) => console.error("Error updating patient:", error));
//   }

//   return (
//     <div className="patient-container">
//       <div className="patient-card">
//         <div className="card-header">
//           <img
//             className="profile-img"
//             src={`https://ui-avatars.com/api/?name=${patient.name}&background=random`}
//             alt="Profile"
//           />
//           <h3 className="card-title">{patient.name}</h3>
//         </div>
//         <div className="card-body">
//           <ul className="patient-details">
//             <li>
//               <strong>Age:</strong> {patient.age}
//             </li>
//             <li>
//               <strong>Illness:</strong> {patient.illness}
//             </li>
//             <li>
//               <strong>Email:</strong> {patient.email}
//             </li>
//             <li>
//               <strong>Phone:</strong> {patient.phone}
//             </li>
//             <li>
//               <strong>Doctor:</strong> {patient.doctor?.name}
//             </li>
//             <li>
//               <strong>Nurse:</strong> {patient.nurse?.name}
//             </li>
//             <li>
//               <strong> Date created: {new Date(patient.create_at).toDateString()}</strong>
//             </li>
//           </ul>
//         </div>
//         <div className="card-footer">
//           <button className="delete-btn" onClick={handleDelete}>
//             Delete Patient
//           </button>
//         </div>
//       </div>

//       {/* Form for Updating Patient */}
//       <form className="patient-form" onSubmit={handleUpdate}>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="form-input"
//             placeholder="Enter Name"
//           />
//         </div>

//         <div className="form-group">
//           <label>Age</label>
//           <input
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="form-input"
//             placeholder="Enter Age"
//           />
//         </div>

//         <div className="form-group">
//           <label>Illness</label>
//           <input
//             type="text"
//             value={illness}
//             onChange={(e) => setIllness(e.target.value)}
//             className="form-input"
//             placeholder="Enter Illness"
//           />
//         </div>

//         <div className="form-group">
//           <label>Phone</label>
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="form-input"
//             placeholder="Enter Phone"
//           />
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="form-input"
//             placeholder="Enter Email"
//           />
//         </div>

//         <button type="submit" className="update-btn">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function IndividualPatient() {
  const nav = useNavigate();
  const { id } = useParams();
  const [patient, setPatient] = useState({});
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [illness, setIllness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [doctor_id, setDoctor_id] = useState(0);
  const [nurse_id, setNurse_id] = useState(0);

  useEffect(() => {
    fetch(`https://zahiracare.onrender.com/patients/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPatient(data);
        setName(data.name);
        setAge(data.age);
        setIllness(data.illness);
        setEmail(data.email);
        setPhone(data.phone);
        setDoctor_id(data.doctor_id);
        setNurse_id(data.nurse_id);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  // Delete Patient
  function handleDelete() {
    fetch(`https://zahiracare.onrender.com/patients/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => nav("/patients"))
      .catch((error) => console.error("Error deleting patient:", error));
  }

  // Update Patient
  function handleUpdate(e) {
    e.preventDefault();
    
    console.log('Updating with values:', {
      name,
      age,
      illness,
      email,
      phone,
    });

    fetch(`https://zahiracare.onrender.com/patients/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        illness,
        email,
        phone,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update patient");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Patient updated:", data);
        // Refetch data after update to ensure the latest values are displayed
        fetchPatientData();
        nav("/patients");
      })
      .catch((error) => console.error("Error updating patient:", error));
  }

  // Function to refetch patient data after update
  function fetchPatientData() {
    fetch(`https://zahiracare.onrender.com/patients/${id}`)
      .then((response) => response.json())
      .then((data) => setPatient(data))
      .catch((error) => console.error("Error fetching updated patient data:", error));
  }

  return (
    <div className="patient-container">
      <div className="patient-card">
        <div className="card-header">
          <img
            className="profile-img"
            src={`https://ui-avatars.com/api/?name=${patient.name}&background=random`}
            alt="Profile"
          />
          <h3 className="card-title">{patient.name}</h3>
        </div>
        <div className="card-body">
          <ul className="patient-details">
            <li>
              <strong>Age:</strong> {patient.age}
            </li>
            <li>
              <strong>Illness:</strong> {patient.illness}
            </li>
            <li>
              <strong>Email:</strong> {patient.email}
            </li>
            <li>
              <strong>Phone:</strong> {patient.phone}
            </li>
            <li>
              <strong>Doctor:</strong> {patient.doctor?.name}
            </li>
            <li>
              <strong>Nurse:</strong> {patient.nurse?.name}
            </li>
            <li>
              <strong>
                Date created: {new Date(patient.create_at).toDateString()}
              </strong>
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="delete-btn" onClick={handleDelete}>
            Delete Patient
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
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-input"
            placeholder="Enter Age"
          />
        </div>

        <div className="form-group">
          <label>Illness</label>
          <input
            type="text"
            value={illness}
            onChange={(e) => setIllness(e.target.value)}
            className="form-input"
            placeholder="Enter Illness"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
            placeholder="Enter Phone"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Enter Email"
          />
        </div>

        <button type="submit" className="update-btn">
          Update
        </button>
      </form>
    </div>
  );
}
