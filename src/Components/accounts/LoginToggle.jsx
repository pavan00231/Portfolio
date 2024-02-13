import React, { useState } from 'react'
import LoginCred from './LoginCred'
import SignInPage from './SignInPage'
import '../assests/css/LoginPage.css'

const LoginToggle = () => {
  const [switchLogin, setSwitchLogin] = useState(false)
  console.log(switchLogin, "switchLogin");
  return (
    <div >
      

      <div className={`container ${switchLogin ? 'active' : ''}`}>
      {
      
      switchLogin ?
        <div class="form-container sign-up">
       <LoginCred
              />
        </div>
        :

        <div class="form-container sign-in">
        
        <SignInPage />
        </div>
      }
        
        <div class="toggle-container">
          <div className={`toggle ${switchLogin ? 'active' : ''}`}>
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="login" onClick={()=>setSwitchLogin(!switchLogin)}>Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Welcome, Friend!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="register"  onClick={()=>setSwitchLogin(!switchLogin)}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>

    </div>

  )
}

export default LoginToggle



// import React, { useState } from 'react'
// import LoginCred from './LoginCred'
// import SignInPage from './SignInPage'
// import '../assests/css/LoginPage.css'

// const LoginToggle = () => {
//   const [switchLogin, setSwitchLogin] = useState(false)
//   console.log(switchLogin, "switchLogin");
//   return (
//     <div >
//       <div>
//         <div>
//           {
//             switchLogin ?
//               <LoginCred
//                 switchLogin={switchLogin}
//                 setSwitchLogin={setSwitchLogin}
//               />
//               :
//               <SignInPage
//                 switchLogin={switchLogin}
//                 setSwitchLogin={setSwitchLogin}

//               />
//           }


//         </div>
//       </div>

//     </div>

//   )
// }

// export default LoginToggle