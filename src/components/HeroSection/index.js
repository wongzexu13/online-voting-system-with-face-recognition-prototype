import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElements'

const HeroSection = () => {

const[hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='videp/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Most Secured</HeroH1>
            <HeroP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</HeroP>
            <HeroBtnWrapper>
                <Button to='/register' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Register Now {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection