import React, { useContext, useEffect, useState } from 'react'

import { getUsers } from '../../service/api'
import { Box, Divider } from '@mui/material'
import UserConvo from './userConvo'
import { AccountContext } from '../../context/AccountProvider'
import styled from 'styled-components'

const Componet = styled(Box)`
height:80vh;
overflow:overlay;

`;

const StyledDivider = styled(Divider)`

    margin:0 0 0 0px;
    background:#e9edef;

`;


const Conversation = ({text}) => {

    const {account,socket,setActiveUsers} = useContext(AccountContext)

    const [users,setUsers] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            let res = await getUsers()
            const filteredData = res?.filter((user)=>user?.username?.toLowerCase()?.includes(text?.toLowerCase()) )
            console.log(res,"res");
            setUsers(filteredData)
        }

        fetchData()
    },[text])

    useEffect(()=>{
      socket.current.emit('addUsers',account)
      socket.current.on('getUsers',users => setActiveUsers(users))
    },[account])

    console.log(account,users,"users in convers");
    return (
    <Componet>
          {users?.map((user) => (
            user?._id !== account &&
            <>
              <UserConvo key={user._id} user={user} />
         
            <StyledDivider />
            </>
                 ))}
    </Componet>
  )
}

export default Conversation