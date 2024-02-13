import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import '../../assests/css/TabsCss.css'
import image from '../../assests/images/project-k.jpg'
import { ArrowRightAlt } from '@mui/icons-material'
import { goToTab } from '../../../utils/commonUtils'
import { useHistory, useNavigate } from 'react-router-dom';

const TabsData = ({data}) => {
    
    const navigate = useNavigate();

    const gotoRoute = () =>{
        console.log('ss');
        if(data?.links == 'portfolio'){
            navigate('/');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }else if(data?.links == 'Whatsup'){
            navigate('/whatsup');

        }
    }



    return (
        <Box className='main_box_tabs'>
            <Box className='team_main_tabs_card'>
                <Box>
                    <img src={image} className='img_tabs' />
                </Box>
                <Box>
                    <Typography className='Protofilo_title_typo'>{data?.name}</Typography>
                    <Typography className='Protofilo_text_typo'>{data?.desc}</Typography>
                </Box>
                {
                    data?.type == 'personal' &&
                    <Box className='checkout_button_tabs_box'>
                    <Button className='checkout_button_tabs' onClick={()=>gotoRoute(data?.type)}>Check out <ArrowRightAlt style={{marginLeft:'10px'}} /></Button>
                </Box>
                }
                
            </Box>

        </Box>
    )
}

export default TabsData