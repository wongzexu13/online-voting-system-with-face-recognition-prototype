import React, {useState} from 'react'
import {Button} from '../ButtonElements'
import Candidate from '../../images/candidate-3.jpg'
import { Container, UserVoteContainer, UserVoteH1, UserVoteWrapper, UserVoteDetail, UserVoteH2, UserVoteIcon, UserVoteTable, UserVoteP, FooterContainer, FooterWrap, CopyrightClaimWrap, CopyrightClaim, BtnWrapper, ArrowForward, ArrowRight} from './VoteConfirmElements'


const UserVoteConfirm = () => {

const[hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

  return (
    <Container>
        <UserVoteContainer>
            <UserVoteH1>Vote Confirmation</UserVoteH1>
            <UserVoteIcon src={Candidate}/>
            <UserVoteWrapper>
                <UserVoteDetail>
                    <UserVoteP>Candidate Chosen: </UserVoteP>    
                    <UserVoteP>Position: </UserVoteP>    
                    <UserVoteP>Organization: </UserVoteP>    
                    <UserVoteP>Vote Person: </UserVoteP>  
                    <UserVoteP>Vote Date: </UserVoteP>  
                </UserVoteDetail>  
                <UserVoteDetail>
                    <UserVoteH2>*** [Full Name] ***</UserVoteH2> 
                    <UserVoteH2>President</UserVoteH2> 
                    <UserVoteH2>Xiamen University Malaysia</UserVoteH2> 
                    <UserVoteH2>Wong Ze Xu</UserVoteH2> 
                    <UserVoteH2>{new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}</UserVoteH2>    
                </UserVoteDetail>  

                {/* <UserVoteTable>
                    <tr>
                        <td>Candidate Chosen</td>
                        <td>Name</td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td>President</td>
                    </tr>
                    <tr>
                        <td>Organization</td>
                        <td>Xiamen University Malaysia</td>
                    </tr>
                    <tr>
                        <td>Vote Person</td>
                        <td>Wong Ze Xu</td>
                    </tr>
                    <tr>
                        <td>Vote Date</td>
                        <td>{new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}</td>
                    </tr>

                </UserVoteTable> */}
            </UserVoteWrapper>
            <BtnWrapper>
                <Button to='/'primary="false" dark="false">Cancel</Button>
                <Button to='/userVoteTurnout' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Submit Vote {hover ? <ArrowForward /> : <ArrowRight />}</Button>
            </BtnWrapper>
        </UserVoteContainer>
        <FooterContainer>
            <FooterWrap>
                <CopyrightClaimWrap>
                    <CopyrightClaim>MyVote @ {new Date().getFullYear()} All Rights Reserved.</CopyrightClaim>
                </CopyrightClaimWrap>
            </FooterWrap>
        </FooterContainer>
    </Container>
  )
}

export default UserVoteConfirm