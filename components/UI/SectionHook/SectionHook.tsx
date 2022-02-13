import React from 'react';
import classes from './SectionHook.module.css';

type Props = {
  title: string
}

const SectionHook = ({title}: Props) => {
  return (
      <main className={classes.hook__container}>
          <h1 className={classes.hook__line}>{title}</h1>
      </main>
  )
};

export default SectionHook;
