import React,{createContext, useEffect, useRef} from 'react'
import { useState } from 'react';
import {io} from 'socket.io-client'

export const AccountContext = createContext(null);



const AccountProvider = ({children}) => {
  const [newMessageFlag, setNewMessageFlag] = useState(false)
 
    const [account,setAccount] = useState();
    const [person,setPerson] = useState({})

    const [activeUsers,setActiveUsers] = useState([])


    const socket = useRef();

    useEffect(()=>{
      socket.current = io('ws://localhost:9000')
    },[])


  return (
    <AccountContext.Provider value={{
      activeUsers,setActiveUsers,newMessageFlag,setNewMessageFlag,
        account,setAccount,setPerson,person,socket
    }}>
    {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider