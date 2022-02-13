import React from 'react';
import CTAButton from '../UI/CTAButton/CTAButton';
import LayoutContainer from '../UI/LayoutContainer/LayoutContainer';
import classes from './CTASection.module.css';

const CTASection = () => {
    return (
        <LayoutContainer>
        <div className={classes.cta__container}>
                <h1 className={classes.cta__heading}>Create a free Queue One account now!</h1>
                <p className={classes.cta__info}>
                  Sign Up for our 14 day trail and get access to our full premium features.  
                </p>    
                <CTAButton goto="/" title="Start Your Free Trial" />
        </div>    
      </LayoutContainer>
  )
};

export default CTASection;
