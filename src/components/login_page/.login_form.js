import React from 'react'

function LoginForm(){
 return <div className="loginform">
    <div className="loginbg">
    <div className="loginheader"></div>
        
            <div className="email"></div>
            <h2 className="emailtxt">Email</h2>

            <div className="pass"></div>
            <h2 className="passtxt">Paswsord</h2>

            <div className="loginbtn">
                <h2 className="login">Login</h2>
            </div>

            <h2 className="signup">
                dont have a account? Sign Up
            </h2>
        </div>
    </div>
 
}


export default LoginForm;
