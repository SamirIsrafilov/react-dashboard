import React from 'react';
import { IoMdRefresh } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import dashboardbox from '../data/dashboarddata';

const LatestUsers = () => {
  return (
    <div className='dashboard_box'>
            <div className='d-flex justify-content-between dashboard_box_title'>
                <h3><span className='me-3'><FaRegUserCircle /></span>Latest users</h3>
                <div className='d-flex align-items-center'>
                    <NavLink className="refresh_btn me-3"><IoMdRefresh /></NavLink>
                    <NavLink to="/users" className="btn p-0 view_btn">View All</NavLink>
                </div>
            </div>
            <div className='dashboard_table'>
                <table className="table p-3">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">FULL NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">USERNAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dashboardbox[2].map((fd,i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{fd.id}</th>
                                        <td className='text-nowrap'>{fd.fullname}</td>
                                        <td className='text-nowrap text-muted'>{fd.email}</td>
                                        <td >{fd.username}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

  )
}

export default LatestUsers;