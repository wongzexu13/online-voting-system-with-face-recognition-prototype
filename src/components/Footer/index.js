import React from 'react'
import { FooterContainer, FooterWrap, CopyrightClaimWrap, CopyrightClaim } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <CopyrightClaimWrap>
                <CopyrightClaim>MyVote @ {new Date().getFullYear()} All Rights Reserved.</CopyrightClaim>
            </CopyrightClaimWrap>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer