import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/header-logo.png'

const SignUp = () => {
    return (
        <div className='sign'>
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <img src={Logo} className="mb-5 ms-4" alt="" />
                <div className="mb-3">

                    <input type="text" className="form-control" placeholder='Name' />

                </div>

                <div className="mb-3">

                    <input type="email" className="form-control" placeholder='Email' />

                </div>
                <div className="mb-3">

                    <input type="password" className="form-control" placeholder='Password' />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input me-3" style={{ height: "20px", width: "20px" }} />
                    <label className="form-check-label" >I agree to the <Link to="#"  className='text-decoration-none' style={{ color: "red" }}>Privacy Policy</Link></label>
                </div>
                <button type="submit" className="btn" id='sign_btn'>SIGN UP</button>
                <p className='text-center my-3'>Already have an account?<Link to="/signin" className='text-decoration-none' style={{ color: "red" }}>Sign in!</Link></p>
         
            </form>
        </div>
    )
}

export default SignUp;