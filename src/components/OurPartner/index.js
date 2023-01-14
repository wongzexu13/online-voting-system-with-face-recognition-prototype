import React from 'react'
import Icon1 from '../../images/logo-1.png'
import Icon2 from '../../images/logo-2.png'
import Icon3 from '../../images/logo-3.png'


import { PartnerContainer, PartnerH1, PartnerWrapper, PartnerCard, PartnerIcon, PartnerH2, PartnerP} from './PartnerElements'

const Partner = () => {
  return (
    <PartnerContainer id='ourpartner'>
        <PartnerH1>Our Partners</PartnerH1>
        <PartnerWrapper>
            <PartnerCard>
                <PartnerIcon src={Icon1}/>
                <PartnerH2>Xiamen University Malaysia</PartnerH2>
                <PartnerP>Our Premium Partner</PartnerP>
            </PartnerCard>
            <PartnerCard>
                <PartnerIcon src={Icon2}/>
                <PartnerH2>Sunway GeoLake Residence</PartnerH2>
                <PartnerP>Coming soon</PartnerP>
            </PartnerCard>
            <PartnerCard>
                <PartnerIcon src={Icon3}/>
                <PartnerH2>University of Malaya</PartnerH2>
                <PartnerP>Coming soon</PartnerP>
            </PartnerCard>
        </PartnerWrapper>
    </PartnerContainer>
  )
}

export default Partner