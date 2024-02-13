import { Box, Button, Input, InputBase, Typography } from '@mui/material'
import '../assests/css/LoginPage.css'
import React, { useContext, useState } from 'react'
import { registerUser } from '../service/api';
import { AccountContext } from '../context/AccountProvider';

const LoginCred = ({ switchLogin, setSwitchLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {setAccount}  = useContext(AccountContext);


    const signUpbtn = async () => {

        await registerUser({
            email: email,
            password: password,
            username: username
        })
            .then((data) => {
                data?.status == 'saved' ?

                    setAccount(data?.id)
                    :
                    setAccount()
        })
    }

    return (

        <Box className=" Box_2_login">
            {/* // <div className='login_cred_toggle '> */}
            {/* <Box className="toggle-panel toggle-right Box_1_login">
                <Typography className='login_welc_typo'>Welcome Back!</Typography>
                <Typography className='login_p_typo'>Enter your personal details to use all of site features</Typography>
// </div>input_login_div
                <Button className='login_sigin_btn' onClick={() => setSwitchLogin(!switchLogin)}> SIGN IN </Button>
            </Box> */}
            <Typography className='signIN_create_acount'> Create Account </Typography>
            <div className='input_signIN_div'>
                <InputBase
                    placeholder='Username'
                    className='signIN_input_name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputBase
                    placeholder='Email'
                    className='signIN_input_name'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputBase
                    placeholder='Password'
                    className='signIN_input_name'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputBase
                    placeholder='Confirm password'
                    className='signIN_input_name'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>

            <div className='btn_signin_div'>
                <Button className='sign_up_btn_login' onClick={() => signUpbtn()}> SIGN UP </Button>
            </div>
            {/* <Button className='login_sign_up_btn'> SIGN UP </Button> */}
        </Box>

    )
}

export default LoginCred