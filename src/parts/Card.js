import Rating from 'elements/Rating';
import Review from 'elements/Review';
import React from 'react'

export default function Card({ data }) {

    return (
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
    )
}
