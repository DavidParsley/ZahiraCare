import React from 'react';

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="text-center text-lg-start">
        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* ZahiraCare Section */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'rgb(145,5,8)' }}>
                  ZahiraCare
                </h6>
                <p className="slogan">
                  "Caring Beyond Boundaries, Huduma Kwa Wote!"
                  <br />
                  <br />
                  "Care for All!"
                </p>
              </div>

              {/* Useful Links Section */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'rgb(145,5,8)' }}>
                  Useful links
                </h6>
                <p>
                  <a href="/" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/patients" className="text-reset">
                    Patients
                  </a>
                </p>
                <p>
                  <a href="/doctors" className="text-reset">
                    Doctors
                  </a>
                </p>
                <p>
                  <a href="/nurses" className="text-reset">
                    Nurses
                  </a>
                </p>
              </div>

              {/* Contact Section */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'rgb(145,5,8)' }}>
                  Contact
                </h6>
                {/* Using flexbox to align icons and text */}
                <p className="d-flex align-items-center">
                  <i className="fas fa-home me-3" style={{ color: 'rgb(145,5,8)' }}></i>
                  Nairobi, NB 10012, Kenya
                </p>
                <p className="d-flex align-items-center">
                  <i className="fas fa-envelope me-3" style={{ color: 'rgb(145,5,8)' }}></i>
                  ZahiraCare@david.com
                </p>
                <p className="d-flex align-items-center">
                  <i className="fas fa-phone me-3" style={{ color: 'rgb(145,5,8)' }}></i>
                  + 254 701698098
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="text-center p-4">
          © 2024 Copyright: David Parsley
        </div>
      </footer>
    </div>
  );
}
