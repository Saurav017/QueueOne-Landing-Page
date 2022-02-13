import React from 'react'
import ReactPlayer from 'react-player'
import classes from './VideoSection.module.css'
import LayoutContainer from '../UI/LayoutContainer/LayoutContainer'

const VideoSection = () => {
    return (
      <>
        <LayoutContainer>
          <main className={classes.video__container}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=NTNg5xDKd2I&feature=youtu.be"
              width="100%"
              height="500px"
            />
          </main>
        </LayoutContainer>
      </>
  ); 
  
}

export default VideoSection 