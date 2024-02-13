import { ArrowDownwardRounded, GitHub, Instagram, LinkedIn, MouseRounded, Send, WhatsApp } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react';
import '../../assests/css/homePortFolio.css'
import bitmoji from '../../assests/images/bitmoji.png'
import { ReactTyped } from 'react-typed';

const HomePortFolio = ({Home,scrollToSection,ContactRef,about}) => {
  return (
    <Box className='main_box_home_port' ref={Home} >
      <Box className='box_home_portfolio'>
        <Box style={{ gridColumn: 'initial' }}>

          <Typography className='typo_hi_pavan'>Hi, I'm
          </Typography>
          <Typography className='typo_hi_pavan'>Pavan Kumar</Typography>
          <Typography class="subtitle_home_typo">I am <ReactTyped
      strings={[
        "Web Developer",
        "React Developer",
        "Full Stack Developer",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
     /></Typography>

          <Typography class="home_description_home_typo">
            Open-Source enthusiast and self learner, believes in the power of community.
          </Typography>
          <Box className='profile_links_box'>
            <GitHub className='github_font_35' />
            <LinkedIn className='github_font_35' />
            <Instagram className='github_font_35' />
            <WhatsApp className='github_font_35' />
          </Box>
          <Box>
            <Button className='contact_home_port_btn'  onClick={()=>scrollToSection(ContactRef)}>Contact Me <Send /></Button>
          </Box>

        </Box>
        <Box className='img_home_portfolio'>
          <img src={bitmoji} className='img_how_animaate' />
        </Box>
      </Box>

      <Box className='sub_main_box_home_port'>
        <Box className='mouseHover'>
          <Box className='mouse_box_main_home'   onClick={()=>scrollToSection(about)} >
            <MouseRounded className='icon_font_color' />
            <Typography className='scroll_text_font'>Scroll Down</Typography>
            <ArrowDownwardRounded className='icon_font_color' />

          </Box>
        </Box>

      </Box>
    </Box>

  )
}

export default HomePortFolio