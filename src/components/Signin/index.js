import React from 'react'
import Video from '../../videos/video.mp4'
import {Container, FormWrap, HeroBg, VideoBg, IconContainer, Icon, FormContent, Form, FormH1, FormH2,FormLabel, FormInput, FormButton, Text, FooterContainer, FooterWrap, CopyrightClaimWrap, CopyrightClaim} from './SigninElements';

const SignIn = () => {
  return (
    <Container>
      {/* <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='videp/mp4' />
        </HeroBg> */}
        <FormWrap>
          <IconContainer>
           <Icon to="/">MyVote</Icon>
          </IconContainer>
          <FormContent>
              <Form action="/signinFailover">
                  <FormH1>MyVote Account</FormH1>
                  <FormH2>Face Recognition</FormH2>
                  <FormButton type='submit'>Sign In</FormButton>
                  <Text to="/register">Register Now</Text>
              </Form>
          </FormContent>
            <FooterContainer>
              <FooterWrap>
                  <CopyrightClaimWrap>
                      <CopyrightClaim>MyVote @ {new Date().getFullYear()} All Rights Reserved.</CopyrightClaim>
                  </CopyrightClaimWrap>
              </FooterWrap>
          </FooterContainer>
        </FormWrap>
    </Container>
  )
}

export default SignIn