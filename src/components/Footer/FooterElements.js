import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 24px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const CopyrightClaimWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 20px auto 20px auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const CopyrightClaim = styled.small`
    color: #fff;
    margin-bottom: 16px;
`