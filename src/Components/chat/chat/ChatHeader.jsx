import { MoreVert, Search } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { defaultProfilePicture } from '../../constants/data'
import { AccountContext } from '../../context/AccountProvider'
import pavan from '../../assests/images/pavan.png'


const Header = styled(Box)`
height:65px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;

`
const Image = styled('img')({
    height:45,
    width:45,
    objectFit:'contain',
    borderRadius:'50%',
    aspectRatio:'1/1'


})

const Name = styled(Typography)`
margin-left:12px;

`;

const OnlineStatus = styled(Typography)`
margin-left:12px;
font-size:12px;
color:rgba(0,0,0,0.3)
`;

const RightContainer = styled(Box)`
margin-left:auto;

& > svg {
    padding: 8px ;
    font-size:35px;
    color:black;

}
`;


const ChatHeader = ({person}) => {

    const {activeUsers} = useContext(AccountContext)

    console.log("activeUsers",activeUsers,person);
    return (
        <Header>
        {/* <Image src={person?.picture} alt="dp" /> */}
            <Image src={pavan} alt="dp" />
            <Box>
                <Name>{person?.username}</Name>
                <OnlineStatus>{activeUsers?.find(user =>user.userData === person._id) ? 'Online' : 'Offline'}</OnlineStatus>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader