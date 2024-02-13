import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { emptyChatImage } from '../../constants/data'
import { Lock } from '@mui/icons-material'
import styled from 'styled-components'


const Component = styled(Box)`
background:#f8f9fa;
height:100vh;
padding:30px 0;
text-align:center;

`;


const Container = styled(Box)`
padding : 0 130px;

`;

const Title = styled(Typography)`
font-size:32px;
margin:25px 0px 10px 0px;
font-weight:200;
font-family:inherit;
color:#41525d;

`;

const SubTitle = styled(Typography)`
font-size: 14px;
color:#667781;
font-weight:400;
font-family:inherit;
line-height:2
`


const SubTitleIcon = styled(Box)`
font-size: 14px;
color:#667781;
font-weight:400;
font-family:inherit !important;
line-height:2;
display: flex;
align-items: center;
justify-content: center;


& : first-child {
  
  font-size: 15px !important;
  margin-right: 10px !important;
}
`


const Image = styled('img')({
  width:300,
  marginTop:0

})

const StyledDivider = styled(Divider)`
margin:17% 0 !important;
opacity:0.4
`


const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="Image" />
        <Title >WhatsApp Web</Title>
        <SubTitle>Send and receive messages without keeping your phone online.<br/> Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
        <StyledDivider />

        <SubTitleIcon ><Lock /> <SubTitle> Your personal messages are end-to-end encrypted</SubTitle></SubTitleIcon>
      </Container>
    </Component>
  )
}

export default EmptyChat