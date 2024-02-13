import React, { useContext, useState } from 'react'
import '../../assests/css/headerComp.css'
import { AccountContext } from '../../context/AccountProvider'
import { Chat, MoreHoriz } from '@mui/icons-material'
import HeaderMenu from './HeaderMenu'
import InfoDrawer from '../../drawer/InfoDrawer'
import projectK from '../../assests/images/project-k.jpg'

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext)

    const toggleDrawer = () => {
        setOpenDrawer(true)
    }


    return (
        <>
            <div className='headerComp'>
                <img src={projectK} className='chat_header_img' onClick={() => toggleDrawer()} />
                <div className='chatHeader_wrapper'>
                    <Chat />
                    <HeaderMenu setOpenDrawer={setOpenDrawer}  />
                    {/* <MoreHoriz /> */}
                </div>

            </div>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>

    )
}

export default Header