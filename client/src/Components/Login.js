import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

const Login = () => {
    let history = useNavigate();
  return (
    <>
        <section className = "sign-in">
            <div className='container mt-5'>
                <div className='signin-content'>
                        <div>
                            <NavLink to='/upload'>Go to Upload</NavLink>
                        </div>

                    <div className='signin-form'>
                        <h2 className='form-title'>Sign In</h2>
                        <form className='register-form' id='register-form'>

                            <div className='form-group'>
                                <label htmlFor='name'>
                                    <i className='zmdi zmdi-account material-icons-name'></i>
                                </label>
                                <input type= 'text' name="name" id='name' autoComplete='off' placeholder='Your name'/>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>
                                    <i className='zmdi zmdi-account material-icons-name'></i>
                                </label>
                                <input type= 'email' name="email" id='email' autoComplete='off' placeholder='Your email'/> 
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>
                                    <i className='zmdi zmdi-account material-icons-name'></i>
                                </label>
                                <input type= 'password' name="password" id='password' autoComplete='off' placeholder='Your password'/> 
                            </div>

                            <div className='form-group form-button' onClick={ () => {
                                history('./upload')
                            }}>
                                <input type="submit" name='signin' id='signin' className='form-submit' value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login