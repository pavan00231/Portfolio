import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import '../../assests/css/AboutPortolio.css'
import Photo from '../../assests/images/pavan.png'
import { ReactTyped } from 'react-typed'
import Pavan_Resume from '../../assests/pdf/Pavan_Resume.pdf'

const AboutPortfolio = ({about}) => {

  const downloadFile = () => {
    window.open(Pavan_Resume,"_blank")
    // window.location.href = Pavan_Resume
  }

  return (
    <Box className="main_box"  ref={about}>
      <Box className='box_about_heading'>
        {/* <Typography>About me</Typography> */}
        <Typography className='who_title'>About Me</Typography>
      </Box>
      <Box className='sub_main_1_box'>
        <Box className='sub_main_img_box'>
          <img src={Photo} className='main_img' />
        </Box>
        <Box className='dob_pavan_text_box_main'>
          <Box>
            <Typography className='pavan_text_typo_css'>I'm Pavan Kumar and I'm a <ReactTyped
      strings={[
        "Web Developer",
        "React Developer",
        "Full Stack Developer",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
     /></Typography>
          </Box>
          <Box className='dob_box_main'>
            <Box>

              <Typography className='mag_b_10'><span className='font_bolder'>Degree:</span> Btech</Typography>
              <Typography className='mag_b_10'><span className='font_bolder'>Age:</span> 26</Typography>
            </Box>
            <Box>
              <Typography className='mag_b_10'><span className='font_bolder'>Institute:</span> IIT,Madras</Typography>
              <Typography className='mag_b_10'><span className='font_bolder'>Birthday:</span> 20/09/1998</Typography>
            </Box>

          </Box>
          <Box>
            <Typography style={{textAlign:'justify'}}>I am a software engineer passionate about creating accessible software. I enjoy working with technologies such as ReactJS, React Native, and NodeJS. Every day, I love learning new things, and my current focus is on mastering React Native and Node.js.</Typography>
          </Box>
          <Box>
            <Button className='download_cv' onClick={()=>downloadFile()}>Download CV</Button>
          </Box>



        </Box>
      </Box>


    </Box>
  )
}

export default AboutPortfolio