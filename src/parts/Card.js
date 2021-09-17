import React from 'react'

import Review from 'elements/Review';
import Fade from "react-reveal/Fade";

export default function Card({ data }) {

    return (
        <Fade bottom delay={300} >
            <section className="reviews">
                {data.map((review, index) => {
                    return (
                        <Review
                            imageUrl={review.imageUrl}
                            name={review.name}
                            level={review.level}
                            review={review.review}
                            key={`review-${index}`}
                        />
                        );
                    })}
            </section>
        </Fade>
    )
}
