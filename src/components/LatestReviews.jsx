import React from 'react';
import { IoMdRefresh } from 'react-icons/io';
import { BsStarHalf } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import dashboardbox from '../data/dashboarddata';

const LatestReviews = () => {
    return (
        <div className='dashboard_box'>
            <div className='d-flex justify-content-between dashboard_box_title'>
                <h3><span className='me-3'><BsStarHalf /></span>Latest reviews</h3>
                <div className='d-flex align-items-center'>
                    <NavLink className="refresh_btn me-3"><IoMdRefresh /></NavLink>
                    <NavLink to="/reviews" className="btn p-0 view_btn">View All</NavLink>
                </div>
            </div>
            <div className='dashboard_table'>
                <table className="table p-3">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">ITEM</th>
                            <th scope="col">AUTHOR</th>
                            <th scope="col">RATING</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            dashboardbox[3].map((fd,i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{fd.id}</th>
                                        <td className='text-nowrap'>{fd.item}</td>
                                        <td className='text-nowrap'>{fd.author}</td>
                                        <td className='d-flex fs-6'><span className='me-1 d-flex align-items-center' style={{color:"red"}}>{fd.ratingIcon}</span>{fd.rating}</td>
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

export default LatestReviews;