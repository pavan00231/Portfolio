
import React, { useContext, useState } from 'react'
import { MoreVert } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'
import styled from 'styled-components'
import { logoutUser } from '../../service/api'
import { AccountContext } from '../../context/AccountProvider'

const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding:15px 20px 5px 24px;
    color:#4A4A4A;
`

const HeaderMenu = ({ setOpenDrawer }) => {
    const [open, setOpen] = useState(null)

    const {account,setAccount,socket,setActiveUsers} = useContext(AccountContext)

    const handleClose = () => {
        setOpen(null)
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }

    const logoutFun = () => {
        handleClose()
        logoutUser()

        socket.current.emit('logout',account)
        socket.current.on('getUsers',users => setActiveUsers(users))
        setAccount()
    }

    return (
        <>
            <MoreVert style={{fontSize:'12px'}} onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEI={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={() => {
                    handleClose();
                    setOpenDrawer(true);
                }}>Profile</MenuOption>
                {/* <MenuOption onClick={handleClose}>My account</MenuOption> */}
                <MenuOption onClick={() => logoutFun()}>Logout</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu