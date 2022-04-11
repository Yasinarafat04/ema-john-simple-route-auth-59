import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <div className="form-container">
                <div>
                    <h1 className='form-title'>Login</h1>
                    <form>
                        <div className="input-group">
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' id='' required />
                        </div>
                        <div className="input-group">
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' id='' />

                        </div>
                        <input className='form-submit' type='submit' value='login' required />

                    </form>
                    <p className='form-link'>new to ema-john? <Link className='form-link' to="/signup">Create an account</Link></p>
                </div>
            </div>
            {/* <div className='or'>or</div> */}
        </div>
    );
};

export default Login;