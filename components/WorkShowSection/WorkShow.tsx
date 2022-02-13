import React from 'react';
import LayoutContainer from '../UI/LayoutContainer/LayoutContainer';
import SectionHook from '../UI/SectionHook/SectionHook';
import WorkCard from '../UI/WorkCard/WorkCard';
import classes from './WorkShow.module.css';
import workAssets from '../UI/WorkCard/WorkAsset';

const WorkShow = () => {
    return (
      <main className={classes.workshow__section}>
        <LayoutContainer>
          <div className={classes.workshow__container}>
            <SectionHook title="How it Works" />
            <p className={classes.workshow__subhook}>
              Look at a glance how our system works
            </p>

                    <div className={classes.workshow__card__container}>        
                        {
                            workAssets.map((asset, index) => {
                                return (
                                    <WorkCard
                                        key={index}
                                        icon={asset.icon}
                                        description={asset.description} />
                                )
                            })
                        }
                                
             </div>   
          </div>
        </LayoutContainer>
      </main>
    );
};

export default WorkShow;
