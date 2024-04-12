import React from 'react';
import './PricingCard.css';

const PricingCard = ({ title, description, price, features }) => {
  return (
    <div className="col-lg-4 col-md-12 mb-4">
      <div className="card h-100 shadow-lg">
        <div className="card-body">
          <div className="text-center p-3">
            <h5 className="card-title">{title}</h5>
            <small>{description}</small>
            <br /><br />
            <span className="h2">${price}</span>/month
            <br /><br />
          </div>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          {features.map((feature, index) => (
            <li key={index} className="list-group-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="card-body text-center">
          <button className="btn btn-outline-primary btn-lg" style={{ borderRadius: '30px' }}>Select</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
