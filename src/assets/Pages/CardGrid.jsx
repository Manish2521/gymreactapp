import React from 'react';

import './CardGrid.css';


function Card({ title, copy, button }) {
  return (
    <div className="card">
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <button className="btn">{button}</button>
      </div>
    </div>
  );
}

function PageContent() {
  const cards = [
    { 
      title: 'Gym Motivation', 
      copy: 'Push yourself beyond limits.', 
      button: 'Explore', 
      imagePath: '/feature-1.jpg' 
    },
    { 
      title: 'Exercise', 
      copy: 'Commit to consistency and dedication.', 
      button: 'Start Now', 
      imagePath: '/feature-2.jpg' 
    },
    { 
      title: 'Gym Motivation', 
      copy: 'Fuel your passion and ignite your fire within.', 
      button: 'Join Us', 
      imagePath: '/feature-3.jpg' 
    },
    { 
      title: 'Exercise', 
      copy: 'Embrace the discomfort of growth and the euphoria of progress.', 
      button: 'Get Started', 
      imagePath: '/feature-4.jpg' 
    }
  ];

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          copy={card.copy}
          button={card.button}
        />
      ))}
    </div>
  );
}

export default PageContent;
