import { Box, LinearProgress, Typography, linearProgressClasses } from '@mui/material'
import React from 'react'
import '../../assests/css/Skills.css'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import { DataObjSkills } from '../../../utils/DataObj';

const Skills = ({SkillsRef}) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
  return (
    <Box className='main_skills_box'  ref={SkillsRef}>
      <Box className='box_about_heading'>
        <Typography className='what_title'>My skills</Typography>
      </Box>
      <Box className='sub_cls_box_skills'>
        <Box className='sub_cls_wid_50'>
          {/* First Half */}
          {DataObjSkills?.slice(0, DataObjSkills.length / 2).map((item, index) => (
            <Box key={index}>
              <Box className='flex_box_dataobj'>
                <Typography>{item.title}</Typography>
                <Typography>{`${item?.progress}%`}</Typography>
              </Box>
              <ProgressBar
                bgcolor={item?.bgcolor}
                progress={item?.progress}
                height={item?.height}
              />
            </Box>
          ))}
        </Box>
        <Box className='sub_cls_wid_50'>
          {/* Second Half */}
          {DataObjSkills?.slice(DataObjSkills.length / 2, 12).map((item, index) => (
            <Box key={index}>
              <Box className='flex_box_dataobj'>
                <Typography>{item.title}</Typography>
                <Typography>{`${item?.progress}%`}</Typography>
              </Box>
              <ProgressBar
                bgcolor={item?.bgcolor}
                progress={item?.progress}
                height={item?.height}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>

  )
}

export default Skills