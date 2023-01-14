import React, {useState} from 'react'
import Candidate1 from '../../images/candidate-1.jpg'
import Candidate2 from '../../images/candidate-2.jpg'
import Candidate3 from '../../images/candidate-3.jpg'
import Candidate4 from '../../images/candidate-4.jpg'
import {Button} from '../ButtonElements'
import { Container, UserVoteContainer, UserVoteH1, UserVoteWrapper, UserVoteCard, UserVoteIcon, UserVoteH2, UserVoteP, FooterContainer, FooterWrap, CopyrightClaimWrap, CopyrightClaim, BtnWrapper} from './UserVoteSelectionElements'

const UserVoteSelection = () => {

    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <Container>
        <UserVoteContainer>
            <UserVoteH1>President | Student Council | Xiamen University Malaysia</UserVoteH1>
            <UserVoteWrapper>
                <UserVoteCard to="/voteConfirm">
                    <UserVoteIcon src={Candidate1}/>
                    <UserVoteH2>Candidate 1</UserVoteH2>
                    <UserVoteP>Description of candidate</UserVoteP>
                </UserVoteCard>
                <UserVoteCard to="/voteConfirm">
                    <UserVoteIcon src={Candidate2}/>
                    <UserVoteH2>Candidate 2</UserVoteH2>
                    <UserVoteP>Description of candidate</UserVoteP>
                </UserVoteCard>
                <UserVoteCard to="/voteConfirm">
                    <UserVoteIcon src={Candidate3}/>
                    <UserVoteH2>Candidate 3</UserVoteH2>
                    <UserVoteP>Description of candidate</UserVoteP>
                </UserVoteCard>
                <UserVoteCard to="/voteConfirm">
                    <UserVoteIcon src={Candidate4}/>
                    <UserVoteH2>Candidate 4</UserVoteH2>
                    <UserVoteP>Description of candidate</UserVoteP>
                </UserVoteCard>        
            </UserVoteWrapper>
            <BtnWrapper>
                <Button to='/' onMouseEnter={onHover} onMouseLeave={onHover}>Cancel</Button>
                <Button to='/' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Submit</Button>
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

export default UserVoteSelection