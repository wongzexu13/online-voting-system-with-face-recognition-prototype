import React from 'react'
import {Container, FormWrap, IconContainer, Icon, FormContent, Form, FormH1, FormH2,FormLabel, FormInput, FormButton, Text, FooterContainer, FooterWrap, CopyrightClaimWrap, CopyrightClaim} from './OTPElements';


const SinginOTP = () => {
  return (
    <div>
        <Container>
        <FormWrap>
          <IconContainer>
           <Icon to="/">MyVote</Icon>
          </IconContainer>
          <FormContent>
              <Form action="">
                  <FormH1>MyVote Account</FormH1>
                  {/* <FormH2>Face Recognition</FormH2> */}
                  <FormLabel htmlFor='for'>One-Time Passport (OTP)</FormLabel>
                  <FormLabel htmlFor='for'>01x-xxxxx89</FormLabel>
                  <FormInput type='text' required />
                  {/* <FormLabel htmlFor='for'>Password</FormLabel>
                  <FormInput type='password' required /> */}
                  <FormButton type='submit'>Submit</FormButton>
                  <Text to="">Send a new code</Text>
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
    </div>
  )
}

export default SinginOTP