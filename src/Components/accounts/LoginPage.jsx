import React,{useContext} from 'react'
import '../assests/css/LoginPage.css'
import Qrcode from '../assests/images/Qrcode.png'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { AccountContext } from '../context/AccountProvider';
import { addUser } from '../service/api';

const LoginPage = () => {
    const {setAccount}  = useContext(AccountContext);

    const onLoginSuccess = async (res) =>{
        const decode = jwtDecode(res.credential)
        // console.log("loginsuccess",decode);
        setAccount(decode)
        console.log(decode,"decode");
        await addUser(decode)
    }

    const onLoginErr = (err) =>{
        console.log("login failed",err);

    }

  return (
    <div className='loginDilogue'>
        <div className='login_component'>
            <div className='container'>
                <h3 className='login_h3_title'>To use Whatsup on your Computer</h3>
                <ol>
                    <li className='li_ol_style'>
                        Open Whatsup on your Phone
                    </li>
                    <li className='li_ol_style'>
                        tap menu settings and go to whatsup Web
                    </li>
                    <li className='li_ol_style'>
                    Tap <strong>Linked devices</strong> and then <strong>Link a device</strong>
                    </li>
                    <li className='li_ol_style'>
                        <span>Point your phone to this screen to capture the QR code</span>
                    </li>
                </ol>

            </div>
            <div className='qr_div'>
                <img src={Qrcode} className='img_login' />
                <div className='google_auth_div'>
                <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginErr}
                />

                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default LoginPage