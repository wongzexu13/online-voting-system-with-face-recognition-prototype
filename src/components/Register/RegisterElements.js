import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #fff;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

export const IconContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const Icon = styled(Link)`
    // margin-left: 32px;
    // margin-top: 32px;
    // text-decoration: none;
    // color: #fff;
    // font-weight: 700;
    // font-size: 32px;

    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    // @media screen and (max-width: 480px){
    //     margin-left: 16px;
    //     margin-top: 8px;
    // }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 500px;
    max-height: 550px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 60px 80px 60px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    overflow: auto;

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 30px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormH2 = styled.h2`
    margin-bottom:25px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
    text-align: center;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    display: inline;
    text-align: center;
    text-transform: uppercase;
`;

export const FormInputDate = styled.input`
    display: inline;
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    text-align: center;
`;

export const FormInputFile = styled.input`
    padding: 16px 16px 50px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    margin: auto;
    text-align-last: center;
`;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 50px;
    color: #010606;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
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

