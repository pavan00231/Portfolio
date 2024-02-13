import React, { useRef, useEffect, useState } from 'react';
import PortFolioHeader from './PortFolioHeader'
import Footer from './Footer'
import Portofolio1 from './Content/Portofolio1'
import ScrollToTop from './Content/ScrollToTop'

const Portfolio = () => {
  const about = useRef(null);
  const Home = useRef(null);
  const Skills = useRef(null);
  const Projects = useRef(null);
  const Contact = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
     
  const scrollToSection = (elementRef) => {

    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }



  const handleScroll = () => {
    const scrollY = window.scrollY;
    // console.log(scrollY,about.current.offsetTop,"scrollY");
    if (
      scrollY >= about.current.offsetTop &&
      scrollY < Skills.current.offsetTop
    ) {
      setActiveSection('About');
    } else if (
      scrollY >= Home.current.offsetTop &&
      scrollY < about.current.offsetTop
    ) {
      setActiveSection('Home');
    } else if (
      scrollY >= Skills.current.offsetTop &&
      scrollY < Projects.current.offsetTop
    ) {
      setActiveSection('Skills');
    } else if (
      scrollY >= Projects.current.offsetTop &&
      scrollY < Contact.current.offsetTop
    ) {
      setActiveSection('Projects');
    } else if (scrollY >= Contact.current.offsetTop) {
      setActiveSection('Contact');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Ensure the effect runs only once during component mount

  


  return (
    <div style={{width:'100%',height:'100vh'}}>
    {/* <div>Active Section: {activeSection}</div> */}
        <PortFolioHeader
          about={about} 
          Home={Home} 
          Skills={Skills} 
          Projects={Projects} 
          Contact={Contact} 
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        
        />

        <ScrollToTop />


        <Portofolio1 
          about={about} 
          Home={Home} 
          SkillsRef={Skills} 
          ProjectsRef={Projects} 
          ContactRef={Contact}
          scrollToSection={scrollToSection}  />
        {/* <Footer /> */}

    </div>
  )
}

export default Portfolio