import React from 'react'
import Rating from 'elements/Rating';

import Fade from 'react-reveal/Fade'

export default function Hero({ data }) {
    return (
      <section className="hero">
        <div className="information">

        <Fade bottom>
          <h1 className="text-primary">10,000+ of our users love our products.</h1>
        </Fade>
        <Fade bottom delay={200}>
          <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </Fade>
        </div>
          <Fade bottom >
            <div className="ratings">
                {data.map( (rating, index) => {
                  return (
                      <Rating value={rating.rate} description={rating.desc} key={`rating-${index}`} />
                      );
                      })}
            </div>
          </Fade>
      </section>
    );
}
