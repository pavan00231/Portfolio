import React, { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../context/AccountProvider'
import { Box, Typography } from '@mui/material'
import styled from 'styled-components'
import Projectk from '../assests/images/project-k.jpg'
import { getUsers } from '../service/api'

const ImageContainer = styled(Box)`
display:flex;
justify-content:center;

`;

const Image = styled('img')({
    width:160,
    height:200,
    borderRadius:'50%',
    padding:'25px 0',
    aspectRatio:'1/1'
});
const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);

    & : first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200
    }
    
    &:last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`;

const DescContainer = styled(Box)({

    padding:'15px 20px 28px 30px',

    '& > p' : {
        fontSize:'13px',
        color:'#8686a0'
    }

})


const Profile = () => {

    const {account} = useContext(AccountContext)
    const [users,setUsers] = useState([])


    useEffect(()=>{
        const fetchData = async () =>{
            let res = await getUsers()
            const filteredData = res?.filter((user)=> user?._id == account )
            console.log(filteredData,"res o=in profile");
            setUsers(filteredData)
        }

        fetchData()
    },[])


    return (
        <>
        <ImageContainer>
            <Image src={Projectk} alt="dp" />
        </ImageContainer>
        <BoxWrapper>
            <Typography>Your Name</Typography>
            <Typography>{users.length > 0 && users[0]?.username}</Typography>
        </BoxWrapper>
        <DescContainer>
            <Typography >This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
        </DescContainer>
        <BoxWrapper>
            <Typography>About</Typography>
            <Typography>Do what your heart says</Typography>
        </BoxWrapper>
        </>
    )
}

export default Profile