import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/header-logo.png'

const ForgotPassword = () => {
    return (
        <div className='sign'>
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <img src={Logo} className="mb-5 ms-4" alt="" />
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder='Email' />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input me-3" style={{ height: "20px", width: "20px" }} />
                    <label className="form-check-label" >I agree to the <Link to="#" className='text-decoration-none' style={{ color: "red" }}>Privacy Policy</Link></label>
                </div>
                <button type="submit" className="btn" id='sign_btn'>SIGN IN</button>
                <p className='text-center my-3'>We will send a password to your Email</p>
            </form>
        </div>
    )
}

export default ForgotPassword;