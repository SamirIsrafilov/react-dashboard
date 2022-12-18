import React from 'react';
import { BiSearch } from "react-icons/bi";
import { BsFilterLeft } from 'react-icons/bs';
import { SlLock } from 'react-icons/sl';
import { AiOutlineEye } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { NavLink } from 'react-router-dom';
import catalogdata from '../data/catalogdata';

const Comments = () => {
    return (
        <div className='container catalog'>
            <div className='catalog_header'>
                <nav className="navbar">
                    <div className="container-fluid">
                        <h2 className="navbar-brand text-white">Comments <span>21,356 Total</span> </h2>
                        <div className='d-flex flex-column flex-md-row catalog_form'>
                            <div className='me-5'>
                                <h6 className='m-0'>Sort by:</h6>
                                <div className="dropdown catalog_filter" >
                                    <button className="btn ps-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Date created <BsFilterLeft />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">DATE CREATED</a></li>
                                        <li><a className="dropdown-item" href="#">RATING</a></li>
                                        <li><a className="dropdown-item" href="#">VIEWS</a></li>
                                    </ul>
                                </div>
                            </div>
                            <form className="d-flex catalog_search" role="search">
                                <input className="form-control" type="search" placeholder="Key word.." aria-label="Search" />
                                <button className="btn" type="submit"><BiSearch id='search_icon' /></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='mt-3 catalog_table'>
                <table className="table text-nowrap">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">ITEM</th>
                            <th scope="col">AUTHOR</th>
                            <th scope="col">TEXT</th>
                            <th scope="col">LIKE / DISLIKE</th>
                            <th scope="col">CRAETED DATE</th>
                            <th scope="col">ACTIONS</th>


                        </tr>
                    </thead>
                    <tbody >
                        {
                            catalogdata.map((fd,i) => {
                                return (
                                    <tr key={i}>
                                        <td className='align-middle' scope="row">{fd.id}</td>
                                        <td className='align-middle'>{fd.title}</td>
                                        <td className='align-middle my-auto'>John Doe</td>
                                        <td className='align-middle'>Lorem Ipsum is simply dummy text...</td>
                                        <td className='align-middle'>{fd.dis_like}</td>
                                        <td className='align-middle'>{fd.date}</td>
                                        <td>
                                            <ul className='list-unstyled d-flex m-0'>
                                               
                                                <li className='me-2' id='eye_btn'>
                                                    <button className='btn d-flex justify-content-center align-items-center  p-0'><AiOutlineEye /></button>

                                                </li>
                                                <li >

                                                    <button type="button" className="btn d-flex justify-content-center align-items-center p-0"
                                                        style={{ width: "30px", height: "30px", color: "#ec547a", backgroundColor: "#ec547a14" }}>
                                                        <AiOutlineDelete className='fs-6' />
                                                    </button>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>
            <div className='catalog_footer my-4 d-flex justify-content-between'>
                <div className='d-none d-md-flex align-items-center px-3 py-2' style={{ backgroundColor: "#28282d" }}>
                    <p className='m-0' style={{ fontSize: "12px", color: "#ffffff80" }}>10 from 21 356</p>
                </div>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group me-2 border-0 rounded-0" role="group" aria-label="First group" id='next_btns' >
                        <button type="button" className="btn border-0 rounded-0 d-flex align-items-center justify-content-center fs-5 p-0"><MdKeyboardArrowLeft /></button>
                        <button type="button" className="btn border-0">1</button>
                        <button type="button" className="btn border-0">2</button>
                        <button type="button" className="btn border-0">3</button>
                        <button type="button" className="btn border-0">4</button>
                        <button type="button" className="btn border-0 rounded-0 d-flex align-items-center justify-content-center fs-5 p-0"><MdKeyboardArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;