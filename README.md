# ZahiraCare - Full Stack Project
By David Parsley

## Overview & Description
ZahiraCare is a comprehensive web application designed to enhance hospital operations by connecting doctors, nurses, and patients on a unified platform. The application enables efficient tracking and management of healthcare resources, helping hospitals manage the complex relationships between staff and patients. ZahiraCare streamlines operations, improves communication, and ensures better patient care by centralizing information related to doctors, nurses, and patients.
Problem Statement*

Managing hospital operations is a complex task, particularly in large healthcare systems. Hospitals often struggle with efficiently tracking and managing their doctors, nurses, and patients, leading to miscommunication, delays in care, and poor workflow. ZahiraCare provides an integrated solution to simplify hospital management and improve overall efficiency.
Proposed Solution

ZahiraCare centralizes the management of patients, doctors, and nurses, making it easy to track and update information in real time. The platform features:

* Structured Data Management: Clear relationships between patients, doctors, and nurses, ensuring data    integrity.
* CRUD Operations: User-friendly features for creating, viewing, updating, and deleting data entries.
* Relationships Tracking: Ensures patients are properly linked with their assigned doctors and nurses.
* Scalability: The platform is designed to accommodate future growth and additional features.
* Ease of Use: A simple, intuitive interface for administrators and institutions.

## Table Relationships

* Patients and Doctors: Many-to-one. A patient can have one doctor, but a doctor can manage multiple patients.
  
  doctor_id in the patients table references the id in the doctors table.

* Patients and Nurses: Many-to-one. A patient can have one nurse, but a nurse can handle multiple patients.
  
  nurse_id in the patients table references the id in the nurses table.

* Doctors and Nurses: Indirect relationship, as both interact with patients, but there is no direct relationship between them.

# User Stories
## Patient Management

* Add a new patient: Provide patient details like name, age, email, phone, disease, doctor, and nurse.
* View all patients: See a list of all patients.
* View an individual patient: View detailed information about a specific patient.
* Update patient details: Modify patient information, such as email, phone, or disease.
* Delete a patient: Remove a patient from the system by their ID.

## Doctor Management

* Add a new doctor: Add details like name, email, department, specialization, phone, and duty status.
* View all doctors: See a list of all doctors.
* View an individual doctor: Access detailed information about a specific doctor.
* Update doctor details: Edit details such as department, specialization, phone, or duty status.
* Delete a doctor: Remove a doctor from the system by their ID.

## Nurse Management

* Add a new nurse: Enter nurse details, including name, email, phone, and duty status.
* View all nurses: View a list of all nurses.
* View an individual nurse: Access detailed information about a specific nurse.
* Update nurse details: Modify details such as email, phone, or duty status.
* Delete a nurse: Remove a nurse from the system by their ID.

# Links
Database Diagram Link: https://dbdiagram.io/d/hospital-db-Phase-3-project-675fd432e763df1f000aa077
Excalidraw Link: https://excalidraw.com/#json=XGGYgAKo8nvIHlRlptPw9,J9cQDsab2atCVLcoZh7EOA


# Setup/Installation Instructions

## Fork the GitHub repository.

* Clone the repository to your local machine using the command:

* git clone <repository_url>

## Install dependencies by running:

* npm install in frontend directory

* Start the application: run npm run dev in frontend directory

## In a new terminal, start the backend app:

* cd into the backend folder 

* run fastapi dev app.py 

* The app should now be running on your local server.

# Live Server
* View the live web app on: ZahiraCare Demo

# Features

* Patient Management: Add, update, view, and delete patient records.
* Doctor Management: Add, update, view, and delete doctor profiles.
* Nurse Management: Add, update, view, and delete nurse profiles.
* Centralized Dashboard: Admin dashboard to track and manage patient, doctor, and nurse information.
* Relationship Management: Link patients with doctors and nurses for efficient healthcare delivery.

# Technologies Used

* React: JavaScript library for building the user interface.
* FastApi: A fast web framework for building APIs with Python.
* Alembic: A tool for managing database schema changes.
* SQLAlchemy: A toolkit and ORM for interacting with databases in Python.
* Bootstrap: For responsive and modern UI design.
* CSS: Custom styles for a polished UI.

# Future Plans

* Enhanced Reporting: Add analytics and reporting features for hospital operations.
* User Roles: Implement different user roles (admin, doctor, nurse) with access control.
* Mobile Compatibility: Optimize the application for mobile devices.
* Integration with Third-Party Services: Add integration with electronic health record (EHR) systems.

# Known Bugs

* No known bugs at this time.

# Support and Contact Details

## If you encounter any issues or have questions, feel free to reach out to us:

* David Parsley : davidparsley.kakhayanga@gmail.com

# License
*Licenced under the [MT-licence](https://opensource.org/license/mit)*

Copyright (c) 2024 **David Parsley**