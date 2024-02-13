import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation, setConversation } from '../../service/api'
import { FormateDate } from '../../../utils/commonUtils'
import pavan from '../../assests/images/pavan.png'

const Compnent = styled(Box)`
display:flex;
height:55px;
padding:13px 0;
cursor:pointer;
align-items:center;


`

const Container = styled(Box)`
display:flex;


`;

const Timestamp = styled(Typography)`
font-size:12px !important;
margin-left:auto !important;
color:#00000099;
margin-right:20px;
`

const Text = styled(Typography)`
font-size:14px !important;
color:rgba(0,0,0,0.9);
`


const Image = styled(`img`)({
    width: 30,
    height: 30,
    borderRadius: '50%',
    padding: '0px 3px', 
    aspectRatio: '1/1',
    objectFit: 'cover',
    marginRight:'10px'
})

const UserNameTypo = styled(Typography)`
padding: 0px;
font-size: 18px;
font-weight: 500;
border: 0px;
`





const UserConvo = ({ user }) => {

    const [message, setMessage] = useState({})

    const { setPerson, account, newMessageFlag } = useContext(AccountContext)


    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account, recevierId: user._id })
            setMessage({ text: data?.message, timestamp: data?.updatedAt })

        }
        getConversationDetails()
    }, [newMessageFlag])


    const getUser = async () => {
        console.log(user,"user in userco");
        setPerson(user)
        await setConversation({
            senderId: account,
            recevierId: user?._id

        })
    }

    console.log(message,"message");

    return (
        <Compnent onClick={() => getUser()}>
            <Box>
                <Image
                    src={pavan}
                //  src={user.picture} 
                 alt="dp" />
            </Box>
            <Box style={{ width: '100%' }}>


                <Container>
                    <UserNameTypo >{user?.username}</UserNameTypo>
                    {
                        message?.text &&
                        <Timestamp >{FormateDate(message?.timestamp)}</Timestamp>
                    }
                </Container>
                <Box>
                    <Text >{message?.text?.includes('localhost') ? 'media' : message.text}</Text>

                </Box>
            </Box>
        </Compnent>
    )
}

export default UserConvo