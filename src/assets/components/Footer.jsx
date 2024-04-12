import React from 'react';

// Footer Component
const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1E242A',
    color: '#caced1',
  };

  const listStyle = {
    marginTop: '20px',
    marginBottom: '20px',
  };

  const careersStyle = {
    cursor: 'pointer',
    color: '#1E88E5',
  };

  return (
    <div className="container-fluid pb-0 mb-0 justify-content-center text-light">
      <footer style={footerStyle}>
        <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
          <div className="col-12 col-md-9">
            <div className="row row-2">
              <div className="col-md-3 text-md-center">
                <h5><span><i className="fa fa-firefox text-light" aria-hidden="true"></i></span><b> Gold's Gym</b></h5>
              </div>
              <div className="col-md-3 my-3 my-md-0">
                <ul className="list-unstyled" style={listStyle}>
                  <li className="mt-0">Platform</li>
                  <li>Help Center</li>
                  <li>Security</li>
                </ul>
              </div>
              <div className="col-md-3 my-3 my-md-0">
                <ul className="list-unstyled" style={listStyle}>
                  <li className="mt-0">Customers</li>
                  <li>Use Cases</li>
                  <li>Customer Services</li>
                </ul>
              </div>
              <div className="col-md-3 my-3 my-md-0">
                <ul className="list-unstyled" style={listStyle}>
                  <li className="mt-0">Company</li>
                  <li>About</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
          <div className="col-12">
            <div className="row my-4 row-1 no-gutters">
              <div className="col-md-3 col-auto text-center">
                <small>&#9400; Gold's gym Software</small>
              </div>
              <div className="col-md-3 col-auto"></div>
              <div className="col-md-3 col-auto"></div>
              <div className="col-md-3 my-auto text-md-left text-center text-md-right">
                <small>support@goldsgym.com <span><img src="https://i.imgur.com/TtB6MDc.png" className="img-fluid" width="25" alt="email" /></span> <span><img src="https://i.imgur.com/N90KDYM.png" className="img-fluid" width="25" alt="phone" /></span></small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
