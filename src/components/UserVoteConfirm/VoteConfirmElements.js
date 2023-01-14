import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: auto;
    background: #fff;
`;

export const UserVoteContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const UserVoteWrapper = styled.div`
    max-width: 100%;
    margin-top: 20px;
    margin-botton: 50 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0 50px;
    grid-gap: 15px;
`;

export const UserVoteDetail = styled.div`
    display: inline;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
`

export const UserVoteTable = styled.table`
    width: 500px;
    background: #000;
    color: #fff;
    margin: auto;
`

export const UserVoteH1 = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const UserVoteH2 = styled.h2`
    font-size: 1rem;
    color: #fff;
    text-align: left;
    padding: 2px;
`;

export const UserVoteIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`;

export const UserVoteP = styled.p`
    font-size: 1rem;
    text-align: right;
    color: #fff;
    padding: 2px;
`;

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
    margin: 5px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const CopyrightClaim = styled.small`
    color: #fff;
    margin-bottom: 16px;
`
export const BtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
