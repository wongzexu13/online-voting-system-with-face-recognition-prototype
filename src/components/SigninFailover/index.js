import React from 'react'
import {Container, FormWrap, IconContainer, Icon, FormContent, Form, FormH1, FormH2,FormLabel, FormInput, FormButton, Text, FooterContainer, FooterWrap, CopyrightClaimWrap, CopyrightClaim} from './FailoverElements';


const SigninFailover = () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <IconContainer>
           <Icon to="/">MyVote</Icon>
          </IconContainer>
          <FormContent>
              <Form action="/signinOTP">
                  <FormH1>MyVote Account</FormH1>
                  <FormH2>Failed to recognized</FormH2>
                  <FormLabel htmlFor='for'>IC or Passport</FormLabel>
                  <FormInput type='text' required />
                  <FormLabel htmlFor='for'>Password</FormLabel>
                  <FormInput type='password' required />
                  <FormButton type='submit'>Sign In</FormButton>
                  <Text to="">Forget password</Text>
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

export default SigninFailover