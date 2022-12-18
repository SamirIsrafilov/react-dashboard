import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from '../img/header-logo.png';
import UserImg from '../img/user.svg';
import { MdExitToApp } from 'react-icons/md';
import { FiGrid } from 'react-icons/fi';
import { FaFilm } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaRegComments } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import { TbFiles } from 'react-icons/tb';
import { FaBars } from 'react-icons/fa';
import { CgCloseR } from 'react-icons/cg';




const SideMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div className='d-flex' >
            <div style={{ display: isOpen ? "flex" : "none" }} id='sidebar'>
          <div className='d-flex flex-column justify-content-between'>
          <div className="d-flex flex-column flex-shrink-0" >
                   <div className='d-flex align-items-center'>
                   <NavLink to="/" id='sidebar_logo' className="d-flex align-items-center text-white text-decoration-none me-2">
                        <img src={Logo} className="img-fluid" alt="" /> 
                    </NavLink>
                    <button className='btn p-0 border-0 d-none' onClick={toggle} style={{height:"20px"}}><CgCloseR className='text-white'/></button>
                   </div>
                    <div className='px-4 py-3 d-flex  align-items-center border-bottom border-secondary'>
                        <img src={UserImg} className="img-fluid rounded-circle" alt="User" style={{ width: "40px", height: "40px" }} />
                        <div className='ms-3'>
                            <span className='text-muted small'>Admin</span>
                            <h6 className='text-white'>John Doe</h6>
                        </div>

                        <button className='btn d-flex justify-content-center align-items-center p-0 ms-5' style={{ width: "40px", height: "40px", backgroundColor: "#ffffff0d" }}><MdExitToApp className='text-light fs-3' /></button>
                    </div>
                    <ul className="nav nav-pills flex-column mb-auto p-4" id='sidebar_menu'>
                        <li className="nav-item">
                            <NavLink to="/" className={`nav-link bg-transparent text-white text-uppercase page_title ${({isActive}) => (isActive ? "active" : 'none')}`}>
                                <FiGrid className='me-2 page_title_btn' /> Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog" className={`nav-link bg-transparent text-white text-uppercase page_title ${ ({isActive}) => (isActive ? "active" : 'none')}`}>
                                <FaFilm className='me-2 page_title_btn' /> Catalog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={`nav-link bg-transparent text-white text-uppercase page_title ${ ({isActive}) => (isActive ? "active" : 'none')}`} >
                                <FaRegUserCircle className='me-2 page_title_btn' />  Users
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/comments" className={`nav-link bg-transparent text-white text-uppercase page_title ${ ({isActive}) => (isActive ? "active" : 'none')}`}>
                                <FaRegComments className='me-2 page_title_btn' /> Comments
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/reviews" className={`nav-link bg-transparent text-white text-uppercase page_title ${ ({isActive}) => (isActive ? "active" : 'none')}`}>
                                <BsStarHalf className='me-2 page_title_btn' /> Reviews
                            </NavLink>
                        </li>


                        <li className="nav-item dropdown">
                            <NavLink to="/pages" className={`nav-link bg-transparent text-white text-uppercase page_title ${ ({isActive}) => (isActive ? "active" : 'none')}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <TbFiles className='me-2 page_title_btn' /> Pages
                            </NavLink>
                            <ul className="dropdown-menu" id='submenu'>
                                <li><Link className="dropdown-item submenu_page" to="/additem">Add item</Link></li>
                                <li><Link className="dropdown-item submenu_page" to="/edituser">Edit user</Link></li>
                                <li><Link className="dropdown-item submenu_page" to="/signin">Sign In</Link></li>
                                <li><Link className="dropdown-item submenu_page" to="/signup">Sign Up</Link></li>
                                <li><Link className="dropdown-item submenu_page" to="/forgotpas">Forgot password</Link></li>
                                <li><Link className="dropdown-item submenu_page" to="/notfoundpage">404 Page</Link></li>

                            </ul>
                        </li>
                    </ul>


                </div>
                <div className='p-4' id='copy_right'>
                    <p className='text-white ' style={{ fontSize: "12px" }}>
                        © AvaStream, 2018—2022.<br />
                        Create by Dmitry Volkov.
                    </p>
                </div>
          </div>
            </div>
            <main>
                <div className=' d-none' id='mobile_toggle'>
                    <NavLink to="/" id='sidebar_logo' className="d-flex align-items-center text-white text-decoration-none p-4">
                        <img src={Logo} className="img-fluid" alt="" />
                    </NavLink>
                    <button onClick={toggle} className='btn text-white fs-4'><FaBars /></button>
                </div>
                {children}</main>
        </div>
    )
}

export default SideMenu