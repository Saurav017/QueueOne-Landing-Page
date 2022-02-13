import React, { useState } from "react";
import Link from "next/link";
import { Link as LinkS, animateScroll as scroll, scrollSpy} from 'react-scroll'

import Image from "next/image"
import classes from "./Navbar.module.css";
import { VscChevronDown } from "react-icons/vsc";
import { VscThreeBars } from "react-icons/vsc";
import queueOneLogo from '../../public/images/queueone_logo.png'
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const Navbar = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  const navMenuOpenHandler = () => {
    setIsMenuToggle((prevState) => !prevState);
    console.log(" Clicked");
  }

  const navMenuCloseHandler = () => {
    setIsMenuToggle(false);
  }


  const showDropDown = () => {
    setDropdown(true);
  };

  const hideDropDown = () => {
    setDropdown(false);
  };

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dropdownClasses = isClick
    ? classes.dropdown__menu + " " + classes.clicked
    : classes.dropdown__menu;

  const navMenuClasses = isMenuToggle ? classes.nav__menu + " " + classes.active : classes.nav__menu;
  
    
  // const navClasses = window.pageYOffset > 100 ? classes.navbar + " " + classes.scroll: classes.navbar; 


  return (
    <nav className={classes.navbar}>
      <div className={classes.nav__container}>
        <div className={classes.nav__logo}>
          <Link href="/">
            
            <Image
              src={queueOneLogo}
              alt="Queue One Logo"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <div
          className={classes.mobile__menu__icon}
          onClick={navMenuOpenHandler}
        >
          <VscThreeBars />
        </div>
        <div className={navMenuClasses}>
          <div className={classes.nav__links}>
            <li className={classes.nav__link}>
              <Link href="/">Home</Link>
            </li>
            <li className={classes.nav__link}>
              <Link href="/">About</Link>
            </li>
            <li className={classes.nav__link}>
              <Link href="/">Blog</Link>
            </li>
            <li className={classes.nav__link}>
              <Link href="/">Contact</Link>
            </li>
            <li
              className={`${classes.nav__link} ${classes.drop__down}`}
              onMouseEnter={showDropDown}
              onMouseLeave={hideDropDown}
            >
              Show More
              <span
                style={{
                  position: "absolute",
                  right: "-5px",
                  top: "55%",
                  transform: "translateY(-50%)",
                }}
              >
                <VscChevronDown />
              </span>
              {dropdown && (
                <div
                  className={dropdownClasses}
                  onClick={() => setIsClick(!isClick)}
                >
                  <li
                    className={classes.dropdown__link}
                    onClick={() => setIsClick(false)}
                  >
                    <Link href="/">About</Link>
                  </li>
                  <li
                    className={classes.dropdown__link}
                    onClick={() => setIsClick(false)}
                  >
                    <Link href="/">Blog</Link>
                  </li>
                  <li
                    className={classes.dropdown__link}
                    onClick={() => setIsClick(false)}
                  >
                    <Link href="/">Contact</Link>
                  </li>
                </div>
              )}
            </li>
          </div>
          <div className={classes.nav__buttons}>
            <button className={classes.auth__button}>
              <Link href="/">Sign Up</Link>
            </button>
            <button className={classes.getStarted__button}>
              <Link href="/">Book a Demo</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
