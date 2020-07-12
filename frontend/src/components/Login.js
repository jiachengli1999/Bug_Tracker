import React, { Component } from 'react'
import '../styles/Login.css'

class Login extends Component{
    render(){
        return(
            <div className='LoginContent'>
                <div>
                    {/* <!-- Tell the browser to be responsive to screen width --> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </div>
                <form className='LoginContainer'>
                    <div className='LoginName'>Login</div>
                    <div className='LoginInfo'>
                        <input className='Username' placeholder='Username' />
                        <input className='Password' placeholder='Password' />
                        <input className='btn' type='submit' value='Login'/>
                    </div>
                    <div className='etc'>
                        <div className='ForgotPass'>
                            Forgot Your Password? <a href='Register.js'>Click Here</a>
                        </div>
                        <div className='SignUp'>
                            Create An Account? <a href='Register.js'>Sign Up</a>
                        </div>
                        <div className='DemoLogin'>
                            Login as a Demo User? <a href='Register.js'>Demo Login</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login