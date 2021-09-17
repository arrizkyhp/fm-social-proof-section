import React from 'react'

export default function Review({ imageUrl, name, level, review }) {
    return (
      <div className="card-review" key={`review-${name}`} >
        <div className="card-review__profile">
          <img src={imageUrl} alt="profile" />
          <div className="card-review__profile__info">
            <h2>{name}</h2>
            <span>{level}</span>
          </div>
        </div>
        <p className="card-review__description">"{review}""</p>
      </div>
    );
}
