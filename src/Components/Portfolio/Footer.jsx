import { Copyright } from '@mui/icons-material'
import React from 'react'
import '../assests/css/PortfolioFooter.css'

const Footer = () => {
  return (
    <div className='footer_div'>
      Created By <span className='font_color'>Pavan Kumar</span> | <span style={{display:'flex',alignItems:'center',justifyContent:'center'}}><Copyright style={{fontSize: '17px'}} /></span> 2024 All rights reserved.
    </div>
  )
}

export default Footer