import React from 'react'
import classes from './HeroSection.module.css'
import LayoutContainer from '../UI/LayoutContainer/LayoutContainer'
import HeroImage from './heroimage.svg'

const HeroSection = () => {
    return (
        <LayoutContainer>
            <div className={classes.hero__section}>
                <div className={classes.hero__section__intro}>
                <div className={classes.hero__hook}>
                    <p>One Platform for any Business</p>
                </div>
                <h1 className={classes.hero__heading}>
                    A Smart booking tool to grow your online business
                </h1>          
                <p className={classes.hero__subHeading}>
                    Reduces wait-time | Manages queues/crowd | Automate your communication
                    </p>
                </div>
                <div className={classes.hero__section__image}>
                    <HeroImage className={classes.hero__img} />
                </div>
            </div>    
        </LayoutContainer>
    )
}

export default HeroSection