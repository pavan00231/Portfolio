import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { FormateDate, downloadMedia } from '../../../utils/commonUtils'
import { AccountContext } from '../../context/AccountProvider';
import { GetApp } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { iconPDF } from '../../constants/data';

const Own = styled(Box)`
    background:#dcf8c6;
    max-width:60%;
    margin-left:auto;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius:10px;
    word-break:break-word;


`;

const Text = styled(Typography)`
    font-size: 14px;
    padding:0 25px 0 5px;


`;

const Time = styled(Typography)`
    font-size:9px !important;
    color:#919191;
    margin-top:6px;
    word-break:keep-all;
    margin-top:auto !important;
`

const Wrapper = styled(Box)`
    background:#ffffff;
    max-width:60%;
    padding:5px;
    width:fit-content;
    display:flex;
    border-radius:10px;
    word-break:break-word;
    

`


const Message = ({ mesg }) => {

    const { account } = useContext(AccountContext)
    return (
        <>
            {account === mesg.senderId ?

                <Own>
                    {
                        mesg.type === 'file' ? 
                     <ImageMessage mesg={mesg} />   : <TextMessage mesg={mesg} />

                    }
                </Own>
                :

                <Wrapper>
                    {
                        mesg.type === 'file' ? 
                     <ImageMessage mesg={mesg} />   : <TextMessage mesg={mesg} />

                    }
                    {/* <Text>{mesg?.text}</Text>
                    <Time>{FormateDate(mesg?.createdAt)}</Time> */}
                </Wrapper>

            }

        </>
    )
}

const ImageMessage = ({ mesg }) => {
    return (
        <Box style={{position:'relative'}}>
            {
                mesg?.text?.includes('.pdf') ?
                <Box style={{display:'flex'}}>
                    <img src={iconPDF} alt="pdf" style={{width:'80px'}} />
                    <Typography style={{fontSize:'14px'}}>{mesg?.text?.split('/').pop()}</Typography>
                </Box>
                :
                <img
                   style={{width:300,height:'100%'}}
                    src={mesg?.text}
                    alt={mesg?.text}
                />
            }
            <Time style={{position:'absolute',bottom:0,right:0}}>
                <GetApp onClick={(e)=>downloadMedia(e,mesg?.text)} style={{marginRight:10,border: '1px solid grey',borderRadius:'50%',fontSize:'small'}} />
                {FormateDate(mesg?.createdAt)}</Time> 
        </Box>
    )
}

const TextMessage = ({ mesg }) => {
    return (
        <>
            <Text>{mesg?.text}</Text>
            <Time>{FormateDate(mesg?.createdAt)}</Time>

        </>
    )
}

export default Message