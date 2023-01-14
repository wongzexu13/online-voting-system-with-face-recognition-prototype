import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
    margin-botton: 50 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const UserVoteCard = styled(Link)`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: #000;

    &:hover{
        transform: scale(1.06);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const UserVoteIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`;

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
    margin-bottom: 10px;
`;

export const UserVoteP = styled.p`
    font-size: 1rem;
    text-align: center;
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
