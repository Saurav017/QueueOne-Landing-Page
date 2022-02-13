import React from "react";
import Image from 'next/image'
import LayoutContainer from "../UI/LayoutContainer/LayoutContainer";
import classes from './AttributeSection.module.css';
import Queueline from '../../public/images/queueline.jpg'
import Crowd from '../../public/images/Crowd.jpg'
import RealTimeChat from '../../public/images/RealTImeChat.jpg'

const AttributeSection = () => {
    return (
      <LayoutContainer>
        <main className={classes.attribute__container}>
          <div className={classes.attribute__sub__container}>
            <div className={classes.attribute__image}>
              <Image src={Crowd} layout="responsive" alt="Crowd Management" />
            </div>
            <div className={classes.attribute__text}>
              <h2 className={classes.attribute__title}>
                Reduce queues and manage customer engagement
              </h2>
              {/* <p className={classes.attribute__description}> */}
                <ul className={classes.attribute__list}>
                  <li className={classes.attribute__links}>
                    Get a custom capacity management solution to suit your
                    business needs
                  </li>
                  <li className={classes.attribute__links}>
                    Create and manage digital queue
                  </li>
                  <li className={classes.attribute__links}>
                    Manage flexible time schedules for your employees
                  </li>
                  <li className={classes.attribute__links}>
                    Automate your internal communication and engagement
                  </li>
                </ul>
              {/* </p> */}
            </div>
          </div>

          {/* -----Attribute 2 */}
          <div className={classes.attribute__sub__container}>
            <div className={classes.attribute__text}>
              <h2 className={classes.attribute__title}>Avoid Physical Wait</h2>
              {/* <p className={classes.attribute__description}> */}
                <ul className={classes.attribute__list}>
                  <li className={classes.attribute__links}>
                    Get a custom capacity management solution to suit your
                    business needs
                  </li>
                  <li className={classes.attribute__links}>
                    Create and manage digital queue
                  </li>
                  <li className={classes.attribute__links}>
                    Manage flexible time schedules for your employees
                  </li>
                  <li className={classes.attribute__links}>
                    Automate your internal communication and engagement
                  </li>
                </ul>
              {/* </p> */}
            </div>
            <div className={classes.attribute__image}>
              <Image src={Queueline} layout="responsive" alt="Queue Line" />
            </div>
          </div>

          {/* Attribute 3 */}
          <div className={classes.attribute__sub__container}>
            <div className={classes.attribute__image}>
              <Image src={RealTimeChat} layout="responsive" alt="Real Time Communication" />
            </div>
            <div className={classes.attribute__text}>
              <h2 className={classes.attribute__title}>
                Real-time Communication
              </h2>
              {/* <p className={classes.attribute__description}> */}
                <ul className={classes.attribute__list}>
                  <li className={classes.attribute__links}>
                    Get real-time communication via SMS and App notification
                    about the Queue Progress and also receive hail notifications
                    from the Digital Queue Providers.
                  </li>
                  <li className={classes.attribute__links}>
                    Customize your alert preference
                  </li>
                  <li className={classes.attribute__links}>
                    Receive real-time communication on the Queue Progress
                  </li>
                  <li className={classes.attribute__links}>
                    Need additional time to reach the store/facility? no worries
                    you can request for wait-time.
                  </li>
                  <li className={classes.attribute__links}>
                    Get live updates and many more...
                  </li>
                </ul>
              {/* </p> */}
            </div>
          </div>

          {/* ----------------------------------- */}
        </main>
      </LayoutContainer>
    );
};

export default AttributeSection;
