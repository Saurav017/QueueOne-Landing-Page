import React from 'react';
import Card from '../UI/Card/Card';
import cardAssets from '../UI/Card/CardAssets';
import LayoutContainer from '../UI/LayoutContainer/LayoutContainer';
import SectionHook from '../UI/SectionHook/SectionHook';
import classes from './FeatureSection.module.css';
const FeatureSection = () => {
    return (
      <LayoutContainer>
        <section className={classes.feature__container}>
          <SectionHook
            title="The best solution with all the right tools to start or run
            your online business"
                />
                
            <div className={classes.cards__container}>
                    {
                        cardAssets.map((card, index) => {
                            return (
                                <Card key={index}
                                    logo={card.logo}
                                    title={card.title}
                                    description={card.description}
                                />
                            )
                        })
                    }
                            
            </div>
        </section>
      </LayoutContainer>
    );
};

export default FeatureSection;
