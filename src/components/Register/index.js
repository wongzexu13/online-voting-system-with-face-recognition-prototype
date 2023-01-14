import React from 'react'
import {Container, FormWrap, IconContainer, Icon, FormContent, Form, FormH1, FormH2,FormLabel, FormInput, FormInputDate, FormInputFile, FormButton, Text, FooterContainer, FooterWrap, CopyrightClaimWrap, CopyrightClaim} from './RegisterElements';


const Register = () => {
  return (
    <div>
        <Container>
        <FormWrap>
          <IconContainer>
           <Icon to="/">MyVote</Icon>
          </IconContainer>
          <FormContent>
              <Form action="">
                  <FormH1>MyVote Account Registration</FormH1>
                  {/* <FormH2>Failed to recognized</FormH2> */}
                  <FormLabel htmlFor='for'>Full Name (As Per IC or Passport)</FormLabel>
                  <FormInput type='text' placeholder="WONG ZE XU" required />
                  <FormLabel htmlFor='for'>IC or Passport</FormLabel>
                  <FormInput type='text' required />
                  <FormLabel htmlFor='for'>Date of Birth</FormLabel>
                  <FormInputDate type='date' required />
                  <FormLabel htmlFor='for'>Email</FormLabel>
                  <FormInput type='email' required />
                  <FormLabel htmlFor='for'>Password</FormLabel>
                  <FormInput type='password' required />
                  <FormLabel htmlFor='for'>Retype Password</FormLabel>
                  <FormInput type='password' required />
                  <FormLabel htmlFor='for'>Mobile Number</FormLabel>
                  <FormInput type='tel' required />
                  <FormLabel htmlFor='for'>Upload IC or Passport</FormLabel>
                  <FormInputFile type='file' required />
                  

                  <FormButton type='submit'>Register</FormButton>
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

export default Register