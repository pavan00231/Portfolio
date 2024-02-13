import { KeyboardDoubleArrowUp } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import '../../assests/css/scrollTop.css'

const ScrollToTop = () => {

    const [showScrollTopButton, setShowScrollTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',()=> {
            // console.log(window.scrollY,"window.screenY");
            if (window.scrollY > 300) {
                setShowScrollTopButton(true)
            } else {
    
                setShowScrollTopButton(false)
            }
        })
        
    }, [])


    const scrollTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (

        <div className='top_btn_style_div'>
            {
                showScrollTopButton && <KeyboardDoubleArrowUp className='top_btn_style' onClick={(() => scrollTop())} />
            }

        </div>
    )
}

export default ScrollToTop