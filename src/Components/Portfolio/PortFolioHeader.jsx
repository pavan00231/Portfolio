import { Box, Typography } from '@mui/material'
import React from 'react'
import '../assests/css/PortfolioHeader.css'


const PortFolioHeader = ({
  about,
  Home,
  Skills,
  Projects,
  Contact,
  activeSection,
  scrollToSection

}) => {
  // console.log(activeSection,"activeSection");
  return (
    <div className='div_nav_main'>

      <header className='header_portfolio'>
        <Box className='box_typo_pavan'>
          <Typography className='typo_pavan'>Pavan Kumar</Typography>
        </Box>
        <Box className='box_box_content_portf'>
          <Box className='box_content_portf'>
            <Typography className={activeSection == 'Home' || activeSection == null ?  'content_portf active_header' : 'content_portf'} onClick={()=>scrollToSection(Home)}>Home</Typography>
            <Typography className={activeSection == 'About'  ?  'content_portf active_header' : 'content_portf'}
             onClick={()=>scrollToSection(about)}>About</Typography>
            <Typography className={activeSection == 'Skills'  ?  'content_portf active_header' : 'content_portf'} onClick={()=>scrollToSection(Skills)}>Skills</Typography>
            {/* <Typography className={activeSection == 'Home'  ?  'content_portf active_header' : 'content_portf'}>Qualifications</Typography> */}
            <Typography className={activeSection == 'Projects'  ?  'content_portf active_header' : 'content_portf'} onClick={()=>scrollToSection(Projects)}>Projects</Typography>
            <Typography className={activeSection == 'Contact'  ?  'content_portf active_header' : 'content_portf'} onClick={()=>scrollToSection(Contact)}>Contact Me</Typography>
          </Box>
        </Box>
      </header>
    </div>
  )
}

export default PortFolioHeader


