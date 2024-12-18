import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{
              fontWeight: "bolder", // Make the brand text bolder
            }}
          >
            ????
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Centering navbar links by using mx-auto on the ul */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Patients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Doctors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nurses
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline" type="submit" style={{ color:  'rgb(248,240,240)', backgroundColor: 'rgb(145,5,8)',  }}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
