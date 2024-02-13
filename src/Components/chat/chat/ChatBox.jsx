import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import { AccountCircle } from '@mui/icons-material'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation } from '../../service/api'

const ChatBox = () => {

    const {person ,account} = useContext(AccountContext)
    const [conver,setConver] = useState({})
    useEffect(()=>{
      const getConversationDetails = async() => {

        const data = await getConversation({ senderId: account, recevierId: person._id })

        // let data = await getConversation({
        //   senderId:account.sub,
        //   recevierId:person.sub
        // })
        console.log(data,"getConversation");
        setConver(data)
      }

      getConversationDetails()
    },[person._id])

  return (
    <Box style={{height:'75%'}}>
        <ChatHeader person={person} />
        <ChatMessages person={person} conver={conver} />

    </Box>
  )
}

export default ChatBox