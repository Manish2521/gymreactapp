import React from 'react';


function Card() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade mt-0" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="gym2.jpg" className="d-block w-100" style={{ maxHeight: '700px', objectFit: 'cover' }} alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="gym1.jpg" className="d-block w-100" style={{ maxHeight: '700px', objectFit: 'cover' }} alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="gym3.jpg" className="d-block w-100" style={{ maxHeight: '700px', objectFit: 'cover' }} alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Card;
