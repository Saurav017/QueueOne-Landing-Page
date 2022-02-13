import React from 'react';
import Link from 'next/link';
import classes from './CTAButton.module.css';


type Props = {
    title: string
    goto: string
}

const CTAButton = ({title, goto}: Props) => {
    return (
        <main className={classes.cta__button__container}>
        <button className={classes.cta__button}>
            <Link href={goto}>{title}</Link>
            </button>
            </main>
    )
};

export default CTAButton;
