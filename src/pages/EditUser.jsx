import React from 'react';
import UserImg from '../img/user.svg';
import { SlLock } from 'react-icons/sl';
import { AiOutlineDelete } from 'react-icons/ai';

const EditUser = () => {
    return (
        <div className='container edit_user'>
            <div className='border-bottom border-secondary py-2' >
                <h2 className='text-white fw-lighter'>Edit user</h2>
            </div>
            <div className='mt-5 p-3  d-flex justify-content-between row' style={{ backgroundColor: "#28282d" }}>
                <div className='col-12 col-md-10'>
                    <div className='d-flex flex-column flex-md-row'>
                        <div className='d-flex'>
                            <div className='me-3 d-flex align-items-center'><img src={UserImg} className="rounded-circle" alt="" /></div>
                            <div className='me-5 d-flex justify-content-center flex-column'>
                                <h6 className='text-white fw-semibold'>Username <span className='text-success'>(Approved)</span></h6>
                                <p className='text-muted m-0'>FlixGo ID: 23562</p>
                            </div>
                        </div>
                        <div>
                            <button className='btn text-white mx-2 py-3 border-0'>PROFILE</button>

                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-center col-12 col-md-2'>
                    <button className='btn text-success bg-success bg-opacity-25 d-flex align-items-center mx-2' style={{ width: "40px", height: "40px" }}><SlLock /></button>
                    <button className='btn text-danger bg-danger bg-opacity-25 d-flex align-items-center mx-2' style={{ width: "40px", height: "40px" }}><AiOutlineDelete /></button>
                </div>
            </div>

            <div className='mt-5'>
                <div >
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-4">
                            <form id='profile_form' onSubmit={(e) => { e.preventDefault(); }}>
                                <h6 className='text-white mb-4'>Profile details</h6>
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <input type="text" className="form-control" placeholder='Username' />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" placeholder='First Name' />
                                        </div>
                                        <div>
                                            <label className='mb-3'>Subscription</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option value={1}>Basic</option>
                                                <option value={2}>Premium</option>
                                                <option value={3}>Cinematic</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="text" className="form-control" placeholder='Email' />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" placeholder='Last Name' />
                                        </div>
                                        <div>
                                            <label className='mb-3'>Rights</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option value={1}>User</option>
                                                <option value={2}>Moderator</option>
                                                <option value={3}>Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button className='btn fw-semibold mt-4' id='save_btn'>SAVE</button>
                            </form>
                        </div>
                        <div className="col-12 col-lg-6">
                            <form id='profile_form' onSubmit={(e) => { e.preventDefault(); }}>
                                <h6 className='text-white mb-4'>Change password</h6>
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Old Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Confirm New Password</label>
                                            <input type="password" className="form-control" />
                                        </div>

                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">New Password</label>
                                            <input type="password" className="form-control" />
                                        </div>

                                    </div>
                                </div>
                                <button className='btn fw-semibold mt-4' id='save_btn'>Change</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser