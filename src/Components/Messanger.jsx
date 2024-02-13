import React, { useContext } from 'react'
import  './assests/css/messanger.css'
import LoginPage from './accounts/LoginPage'
import AccountProvider, { AccountContext } from './context/AccountProvider'
import ChatDialogue from './chat/ChatDialogue'
import LoginCred from './accounts/LoginCred'
import LoginToggle from './accounts/LoginToggle'
import Portfolio from './Portfolio'
import { logoutUser } from './service/api'

const Messanger = () => {



  const {account,setAccount,socket,setActiveUsers,person} = useContext(AccountContext)

  console.log(account,"acc");

  const onWindowReload = async () => {
    console.log("logout");
      await logoutUser()

      await socket.current.emit('logout',account)
      socket.current.on('getUsers',users => setActiveUsers(users))
      await setAccount()
  
  }
  
  // Attach the function to the window.onload event
  // window.onload 
  window.onbeforeunload = onWindowReload;

  return (

    <div className='component'>
      {
        account ? 
        <>

            <header className='header_after_login'>
            
            </header>

        <ChatDialogue /> 
        </>
        :
        <>
        {/* <header className='header'> */}
            
            {/* <Portfolio /> */}
            {/* </header> */}
            <LoginToggle />
            {/* <LoginPage /> */}
        </>

      }

        
    </div>
  )
}

export default Messanger