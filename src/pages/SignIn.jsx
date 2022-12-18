import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/header-logo.png'

const SignIn = () => {
    return (
        <div className='sign'>
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <img src={Logo} className="mb-5 ms-4" alt="" />


                <div className="mb-3">
                    <input type="email" className="form-control" placeholder='Email' />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder='Password' />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input me-3" style={{ height: "20px", width: "20px" }} />
                    <label className="form-check-label" >Remember me</label>
                </div>
                <button type="submit" className="btn" id='sign_btn'>SIGN IN</button>
                <p className='text-center my-3'>Don't have an account?<Link to="/signup" className='text-decoration-none' style={{ color: "red" }}>Sign up!</Link></p>
                <p className='text-center'><Link to="forgotpas" className='text-decoration-none' style={{ color: "red" }}> Forgot password?</Link></p>
            </form>
        </div>
    )
}

export default SignIn