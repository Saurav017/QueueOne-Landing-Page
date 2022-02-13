import React from 'react';
import classes from './Card.module.css';

type Props = {
  logo: any,
  title: string,
  description: string
}


const Card = ({logo, title, description}: Props) => {
    return (
      <main className={classes.card__container}>
        <div className={classes.card__icon__div}>
          {logo}
        </div>
        <div className={classes.card__info__container}>
                <h3 className={classes.card__title}>{title}</h3>
          <p className={classes.card__text}>
            {description}
          </p>
        </div>
      </main>
    );
};

export default Card;
