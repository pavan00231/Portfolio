import React from 'react'
import '../../assests/css/Skills.css'


const ProgressBar = ({ bgcolor, progress, height }) => {

    const Parentdiv = {
        // height: height,
        // width: '100%',
        // backgroundColor: 'whitesmoke',
        // borderRadius: 40,
        // margin: 50


        height: height,
        width: '100%',
        backgroundColor: 'lightgrey',
        borderRadius: '40px',
        // margin: '12px',
        margin: '12px 0px 20px',
        border: `1px solid ${bgcolor}`
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'
    }

    const progresstext = {
        padding: '4px',
        color: 'black',
        fontWeight: '900',
        fontSize: '10px'
    }


    return (
        <div style={Parentdiv} className='cpp'>
            <div style={Childdiv} className='anim'>
                <span style={progresstext}></span>
            </div>
        </div>
    )
}

export default ProgressBar