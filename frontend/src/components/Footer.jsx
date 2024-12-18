import React from 'react';

export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer
        className="text-center text-lg-start"
        style={{
          backgroundColor: 'rgb(248,240,240)',
          borderRadius: '10px 10px 0 0', // Add rounded corners to the footer
          overflow: 'hidden' // Ensure that any content that overflows does not break the border radius
        }}
      >
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset" style={{ color: 'rgb(145,5,8)' }}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset" style={{ color: 'rgb(145,5,8)' }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset" style={{ color: 'rgb(145,5,8)' }}>
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset" style={{ color: 'rgb(145,5,8)' }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset" style={{ color: 'rgb(145,5,8)' }}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset" style={{ color: 'rgb(145,5,8)' }}>
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        {/* Section: Links */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'rgb(145,5,8)' }}>
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'rgb(145,5,8)' }}>
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset" style={{ color: 'rgb(145,5,8)' }}>Angular</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ color: 'rgb(145,5,8)' }}>React</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ color: 'rgb(145,5,8)' }}>Vue</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ color: 'rgb(145,5,8)' }}>Laravel</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'rgb(145,5,8)' }}>
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset" style={{ color: 'rgb(145,5,8)' }}>Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ color: 'rgb(145,5,8)' }}>Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ color: 'rgb(145,5,8)' }}>Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ color: 'rgb(145,5,8)' }}>Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{ color: 'rgb(145,5,8)' }}>Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div className="text-center p-4" style={{ color: 'rgb(248,240,240)',backgroundColor: 'rgb(145,5,8)' }}>
          © 2024 Copyright:
        </div>
      </footer>
    </div>
  );
}
