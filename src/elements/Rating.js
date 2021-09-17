import React from 'react'

import Star from "elements/Star";

export default function Rating({ value, description }) {
  return (
    <div className="rating">
      <Star value={value} width={25} height={20} spacing={4.5} />
      <span className="rating__description text-primary">{description}</span>
    </div>
  );
}
