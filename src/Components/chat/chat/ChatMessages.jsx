import { Box } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { emptyChatImage } from '../../constants/data';
import ChatFooter from './ChatFooter';
import { AccountContext } from '../../context/AccountProvider';
import { getMessages, newMessage } from '../../service/api';
import Message from './Message';

// background-image:url(${emptyChatImage});

const Wrapper = styled(Box)`
background-size:50%;

background-color: #f4f1eb;
object-fit: cover;
background-repeat: no-repeat;
background-position: center;

background-size: inherit;
`;

const Component = styled(Box)`
height:77vh;
overflow-y:auto;

`;

const Container = styled(Box)`
padding:1px 80px;

`

const ChatMessages = ({ person, conver }) => {

  const [incomingMesg,setIncomingMesg] = useState(null)
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([])
   const [image,setImage] = useState('');
  const [file, setFile] = useState();

  const scrollRef = useRef()

  const { account,socket ,newMessageFlag,setNewMessageFlag } = useContext(AccountContext)


  useEffect(()=>{
    socket.current.on('getMessage',data =>{
      setIncomingMesg({
        ...data,
        createdAt : Date.now()
      })
    })
  },[])


  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conver?._id);
      console.log(data, conver, "datadata");
      setMessages(data)
    }
    conver?._id && getMessageDetails()
  }, [conver?._id, person?._id, newMessageFlag])


  const sendText = async (e) => {
    console.log(e);
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {}
      if (!file) {
        message = {
          senderId: account,
          receiverId: person._id,
          conversationId: conver?._id,
          type: 'text',
          text: value
        }
      } else {
        message = {
          senderId:account,
          receiverId: person._id,
          conversationId:conver?._id,
          type:'file',
          text:image
        }
      }

      socket.current.emit('sendMessage',message)

      await newMessage(message)

      setValue('');
      setFile('');
      setImage('');
      setNewMessageFlag((prev) => !prev)
    }
  }

  const sendTextFunc = async () => {
    
      let message = {}
      if (!file) {
        message = {
          senderId: account,
          receiverId: person._id,
          conversationId: conver?._id,
          type: 'text',
          text: value
        }
      } else {
        message = {
          senderId:account,
          receiverId: person._id,
          conversationId:conver?._id,
          type:'file',
          text:image
        }
      }

      socket.current.emit('sendMessage',message)

      await newMessage(message)

      setValue('');
      setFile('');
      setImage('');
      setNewMessageFlag((prev) => !prev)
    
  }



  useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition:'smooth'})
  },[messages])


  useEffect(()=>{
    incomingMesg && conver?.members?.includes(incomingMesg.senderId) && setMessages(prev => [...prev,incomingMesg])
  },[incomingMesg,conver])
  
  return (
    <Wrapper>
      <Component >
        {
          messages && messages?.map((mesg) => (
            <Container ref={scrollRef}>

              <Message mesg={mesg} />
            </Container>
          ))
        }
      </Component>
      <ChatFooter
        value={value}
        sendText={sendText}
        setValue={setValue}
        file={file}
        setFile={setFile}
        setImage={setImage}
        sendTextFunc={sendTextFunc}
      />
    </Wrapper>
  )
}

export default ChatMessages