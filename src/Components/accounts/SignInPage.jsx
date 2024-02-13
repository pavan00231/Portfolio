import React, { useContext, useState } from 'react'
import { Box, Button, Input, InputBase, Typography } from '@mui/material'
import '../assests/css/LoginPage.css'
import { loginUser } from '../service/api'
import { AccountContext } from '../context/AccountProvider'


const SignInPage = ({ switchLogin, setSwitchLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setAccount}  = useContext(AccountContext);
    const signUpbtn = async () => {

        await loginUser({
            email: email,
            password: password
        })
            .then((data) => {
                data?.status == 'logged_In' ?

                setAccount(data?.id)
                    :
                    setAccount()
        })
    }


    return (
        // <div className='login_cred_toggle '>

            <Box className="Box_2_login">
                <Typography className='signIN_create_acount'> Sign In </Typography>
                <div className='input_signIN_div'>

                    <InputBase placeholder='Email' className='signIN_input_name'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                    <InputBase placeholder='Password' className='signIN_input_password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                    <Typography className='forget_pass_signup'>Forget Password?</Typography>
                </div>
                {/* <Input />
            <Input /> */}
            <div className='btn_signin_div'>
            <Button className='sign_up_btn_login' onClick={() => signUpbtn()}> SIGN IN </Button>

            </div>
              
{/* <Box className="toggle-panel toggle-left  Box_1_signup">
                <Typography className='login_welc_typo'>Welcome Friend!</Typography>
                <Typography className='login_p_typo'>Register with your personal details to use all of site features</Typography>



                <Button className='login_sigin_btn' onClick={() => setSwitchLogin(!switchLogin)}>SIGN UP</Button>
            </Box> */}
        {/* // </div> */}
            </Box>
            
    )
}

export default SignInPage