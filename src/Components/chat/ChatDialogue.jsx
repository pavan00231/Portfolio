import React, { useContext } from 'react'
import '../assests/css/chatDialogue.css'
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat'
import ChatBox from './chat/ChatBox'
import { AccountContext } from '../context/AccountProvider'
import { logoutUser } from '../service/api'

const ChatDialogue = () => {


  const {account,setAccount,socket,setActiveUsers,person} = useContext(AccountContext)


  const onWindowReload = async () => {
    console.log("logout");
      await logoutUser()

      await socket.current.emit('logout',account)
      socket.current.on('getUsers',users => setActiveUsers(users))
      await setAccount()
  
  }
  
  // Attach the function to the window.onload event
  window.onload = onWindowReload;



  return (
    <div className='chatDilogue'>
        <div className="chatComp">
          <div className='leftComponent'>
            <Menu />
          </div>
          <div className='rightComponent'>
            {/*  */}
            {Object.keys(person)?.length ? <ChatBox /> :  <EmptyChat />}
            
          </div>
        </div>
        
        
        </div>
  )
}

export default ChatDialogue