import React from 'react'
import HomePortFolio from './HomePortFolio'
import AboutPortfolio from './AboutPortfolio'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Qualification'
import Footer from '../Footer'

const Portofolio1 = ({
  about,
  Home,
  SkillsRef,
  ProjectsRef,
  ContactRef,
  scrollToSection
}) => {
  return (
    <div style={{width:'100%',height:'100%'}}>
      <HomePortFolio Home={Home} about={about} scrollToSection={scrollToSection}  ContactRef={ContactRef}   />
     <AboutPortfolio about={about}  />
      <Skills SkillsRef={SkillsRef}  />
       <Projects ProjectsRef={ProjectsRef}  />
      <Contact ContactRef={ContactRef}  />
        <Footer />
    </div>
  )
}

export default Portofolio1