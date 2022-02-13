import React from 'react';
import classes from './TestimonialCard.module.css';

type TestimonialCardProps = {
  testimonial: string,
  ownerName: string,
  ownerPosition: string,
}

const TestimonialCard = ({testimonial, ownerName, ownerPosition}: TestimonialCardProps) => {
    return (
      <main className={classes.testimonial__card__container}>
            <p className={classes.testimonial__text}>
              {testimonial}
        </p>
        <p className={classes.testimonial__owner__name}>{ownerName}</p>
        <p className={classes.testimonial__owner__position}>{ownerPosition}</p>
      </main>
  )
};

export default TestimonialCard;
