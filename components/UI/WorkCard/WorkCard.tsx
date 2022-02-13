import React from 'react';
import { FaChrome } from 'react-icons/fa';
import classes from './WorkCard.module.css'


type Props = {
  icon: any,
  description: string;
};

const WorkCard = ({icon, description} : Props) => {
    return (
    <main className={classes.card__container}>
        <div className={classes.card__icon__div}>
            {icon}
        </div>
        <div className={classes.card__info__container}>
          <p className={classes.card__text}>
            {description}
          </p>
        </div>
      </main>      
  )
};

export default WorkCard;
