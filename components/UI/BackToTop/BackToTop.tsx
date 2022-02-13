import React, { useState, useEffect } from 'react'
import { RiArrowUpSLine } from 'react-icons/ri'
import classes from './BackToTop.module.css'
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";


const BackToTop = () => {

  const [isDisplay, setIsDisplay] = useState<boolean>(false)

  // display on scrolling to 600px height
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setIsDisplay(true)
      } else {
        setIsDisplay(false)
      }
    })
  
  }, [])



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
     <>
      {isDisplay && (
        <main className={classes.main__container} onClick={scrollToTop} >
        <RiArrowUpSLine />
        </main>
      )}
    </>
    
  )
}

export default BackToTop