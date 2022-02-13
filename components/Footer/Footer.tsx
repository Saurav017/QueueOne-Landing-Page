import Link from 'next/link';
import React, {forwardRef} from 'react';
import classes from './Footer.module.css';
import { FaTwitter } from "react-icons/fa";
import {FaFacebookF} from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className={classes.footer__container}>
        <main className={classes.footer__main}>
          <div className={classes.footer__saas__description}>
            <h3>Queue One</h3>
            <p>
              We're passionate about designing and developing innovative
              software platform which helps improve business and drive extra
              dimentional value.
            </p>
            <div className={classes.social__links__container}>
              <div className={classes.social__link}>
                <Link href="https://twitter.com/queueoneapp">
                  <FaTwitter />
                </Link>
              </div>
              <div className={classes.social__link}>
                <Link href="https://twitter.com/queueoneapp">
                  <FaFacebookF />
                </Link>
              </div>
              <div className={classes.social__link}>
                <Link href="https://twitter.com/queueoneapp">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.link__container}>
            <div className={classes.service__links}>
              <p className={classes.link__heading}>Services</p>
              <ul className={classes.service__links}>
                <li className={classes.service__link}>
                  <Link href="/">Pricing</Link>
                </li>
                <li className={classes.service__link}>
                  <Link href="/">Blog</Link>
                </li>
                <li className={classes.service__link}>
                  <Link href="/">FAQs</Link>
                </li>
                <li className={classes.service__link}>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>

            <div className={classes.additional__resources}>
              <p className={classes.additional__links__heading}>
                Additional Resources
              </p>
              <ul className={classes.service__links}>
                <li className={classes.service__link}>
                  <Link href="/">Terms and Conditions</Link>
                </li>
                <li className={classes.service__link}>
                  <Link href="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
        <p className={classes.copyright__text}>© 2022 Copyright Reserved</p>
      </footer>
    ); 
};

export default Footer;
