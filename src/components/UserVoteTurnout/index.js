import React, {useState} from 'react'
import {Button} from '../ButtonElements'
import CountUp from 'react-countup'
import { Container, UserVoteContainer, UserVoteH1, UserVoteH2, UserVoteH3, UserVoteP, FooterContainer, FooterWrap, CopyrightClaimWrap, CopyrightClaim, BtnWrapper, ArrowForward, ArrowRight} from './UserVoteTurnoutElements'


const UserVoteTurnout = () => {

  const[hover, setHover] = useState(false)

const onHover = () => {
    setHover(!hover)
}

  return (
    <Container>
        <UserVoteContainer>
            <UserVoteH1>Vote Turnout</UserVoteH1>
            <UserVoteH2>President | Student Council | Xiamen University Malaysia</UserVoteH2>
            <UserVoteH3><CountUp start={0} end={143} duration={1} delay={0} /> votes / <CountUp start={0} end={97} duration={1} delay={0} />%</UserVoteH3>
            <BtnWrapper>
                <Button to='/'primary="false" dark="false">Back</Button>
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

export default UserVoteTurnout