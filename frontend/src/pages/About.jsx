import React from "react";

export default function About() {
  return (
    <div className="about-container">
      {/* Main Title */}
      <h1 className="about-title">About</h1>
      <br />

      {/* Introduction Section */}
      <section className="about-section intro-section">
        <h2 className="section-title">ZahiraCare</h2>
        <p className="section-content">
          ZahiraCare is a web application designed to streamline hospital
          operations by connecting doctors, nurses, and patients in a single
          platform. It allows hospitals to keep better track of their employees
          and patients, ensuring efficient management of healthcare resources.
          ZahiraCare helps manage the hundreds, if not thousands, of people
          involved in a single hospital or healthcare system, improving
          communication, patient care, and operational efficiency.
        </p>
      </section>
      <br />

      {/* Purpose Section */}
      <section className="about-section purpose-section">
        <h2 className="section-title">Our Purpose</h2>
        <p className="section-content">
          Managing hospital operations is a complex task, especially in large
          healthcare systems. Hospitals struggle with efficiently tracking and
          managing their doctors, nurses, and patients, leading to
          miscommunication, delays in care, and poor workflow. ZahiraCare aims
          to eliminate these inefficiencies and provide a comprehensive solution
          for better hospital management.
        </p>
      </section>
      <br />

      {/* Solution Section */}
      <section className="about-section solution-section">
        <h2 className="section-title">Our Solution</h2>
        <p className="section-content">
          ZahiraCare is designed to simplify and organize hospital operations.
          By centralizing the management of doctors, nurses, and patients,
          ZahiraCare ensures real-time updates, better coordination and it helps
          hospitals manage staff patient information better. Structured Data
          Management: Centralized management of Patients, Doctors, and Nurses.
          Associate Patients with Doctors and Nurses to maintain data integrity.
        </p>
      </section>
      <br />

      {/* Future Plans Section */}
      <section className="about-section future-section">
        <h2 className="section-title">Future Plans</h2>
        <p className="section-content">
          A flexible design that can accommodate future growth, such as
          additional fields, features, or more administrative tools. A simple,
          intuitive interface for administrators / institutions to minimize
          complex management.
        </p>
      </section>
      <br />
      <br />
    </div>
  );
}
