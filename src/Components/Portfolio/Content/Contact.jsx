import { Box, Button, InputBase, TextField, Typography } from '@mui/material'
import '../../assests/css/Contact.css'
import React, { useState } from 'react'
import { Email, Person, PinDrop } from '@mui/icons-material'
import { contactUs } from '../../service/api'

const Contact = ({ ContactRef }) => {
  const [username, setUserName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = async () => {
    if(email && username ){
      await contactUs({
        email: email,
        username: username,
        company: company,
        message: message
      })
        .then((data) => {
          console.log('SSSSSSSSs',data.status);
          if(data.status === 'success'){
            alert("Acknowledgement mail has been sent successfully")
            setUserName('')
            setCompany('')
            setEmail('')
            setMessage('')
          }else{
            alert("Please recheck the data and check your network connection")
  
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
    else if(email){
      
      alert('Please Enter a valid Username')
    }else if(username) {

      alert('Please Enter a valid Email id')
    }
    else{
      alert('Please Enter a valid Email Id and username')
    }

    

  }

  return (
    <Box className='main_content_div_contact' ref={ContactRef}>
      <Box className='flex_main_contact'>
        <Typography className='get_title' >Contact me</Typography>
      </Box>
      <Box className='div_half_contact'>
        <Box style={{ width: '40%' }}>
          <Box><Typography className='in_touch_typo'>Get in Touch</Typography></Box>
          <Box><Typography className='desc_typo__inTouch'>Thank you for visiting out my profile. If you would like to get into contact with me, please fill out the form below. or mail me at pavankumarbondili@gmail.com</Typography></Box>
          <Box className='main_svg_Typo_class'>
            <Box className='svg_touch_typo_class'>
              <Person className='svg_in_touch_typo' />
            </Box>
            <Box>
              <Typography className='font_wt_600'>Name</Typography>
              <Typography className='font_wt_400'>Pavan Kumar</Typography>
            </Box>
          </Box>
          <Box className='main_svg_Typo_class'>
            <Box className='svg_touch_typo_class'>
              <PinDrop className='svg_in_touch_typo' />
            </Box>
            <Box>
              <Typography className='font_wt_600'>Address</Typography>
              <Typography className='font_wt_400'>Kondapur,Hyderabad</Typography>
            </Box>

          </Box>
          <Box className='main_svg_Typo_class'>
            <Box className='svg_touch_typo_class'>
              <Email className='svg_in_touch_typo' />
            </Box>
            <Box>
              <Typography className='font_wt_600'>Email</Typography>
              <Typography className='font_wt_400'>pavankumarbondili@gmail.com</Typography>

            </Box>
          </Box>

        </Box>
        <Box style={{ width: '50%' }}>
          <Typography className='in_touch_typo'>Message me</Typography>
          <Box className='Name_box_mesg_me'>
            <InputBase className='border_mesg_cont' placeholder='Username *' style={{ width: '45%' }} value={username} onChange={(e) => setUserName(e.target.value)} />
            <InputBase className='border_mesg_cont' placeholder='Company' style={{ width: '52%' }} value={company} onChange={(e) => setCompany(e.target.value)} />
          </Box>

          <InputBase className='border_mesg_cont' placeholder='Email *' value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea className='border_mesg_cont' placeholder='Message' style={{ minHeight: '100px', padding: '10px' }} value={message} onChange={(e) => setMessage(e.target.value)} />
          <Box>
            <Button className='btn_contact_send_mesg' onClick={() => sendMessage()}>
              Send message
            </Button>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default Contact