import { Box, Typography } from '@mui/material'
import React from 'react'
import '../../assests/css/Projects.css'
import BasicTabs from './Tabs'

const Projects = ({ProjectsRef}) => {
  return (
    <Box className="main_div_project_box"  ref={ProjectsRef}>
      <Box>

      <Typography className='Project_sec_Heading' data-outline="Projects">PROJECTS</Typography>
      <BasicTabs />
      </Box>
    </Box>
  )
}



export default Projects