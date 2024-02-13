import React from 'react'
import { Box, Drawer, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import styled from 'styled-components'
import Profile from './Profile';

const Header = styled(Box)`
background:#3a8d7a;
height:100px;
color:white;
display:flex;
& > svg , & > p {
    margin-top:auto;
    padding: 15px;
    font-weight:600

}

`;


const Component = styled(Box)`
background:#ededed;
height:85%;

`;



const drawerStyle = {
    left: 21,
    top: 21,
    height: '94%',
    boxShadow: 'none',
    width: '450px'

}

const Text = styled(Typography)`
font-size:18px

`;

const InfoDrawer = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{
                zIndex: 3000,
            }}
        >
            <Header>
                <ArrowBack onClick={()=>setOpen(false)} />
                <Text>Profile</Text>

            </Header>
            <Component>
                <Profile />

            </Component>
        </Drawer>
    )
}

export default InfoDrawer