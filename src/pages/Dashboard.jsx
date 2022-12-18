import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsBarChart } from 'react-icons/bs';
import { FaFilm } from 'react-icons/fa';
import { FaRegComments } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import CountUp from 'react-countup';
import TopItems from '../components/TopItems';
import LatestItems from '../components/LatestItems';
import LatestUsers from '../components/LatestUsers';
import LatestReviews from '../components/LatestReviews';

const Dashboard = () => {
    return (
        <div className='container dashboard'>
            <div className='dashboard_header py-2 d-flex justify-content-between' >
                <h2 className='text-white fw-normal'>Dashboard</h2>
                <NavLink to="#" className="btn" id='add_item'>ADD ITEM</NavLink>
            </div >

            <div className="mt-3 statistics">
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-3 p-3">
                        <div className=' rounded p-2 stats'>
                            <p>Unique views this month</p>
                            <div className='d-flex justify-content-between'>
                                <CountUp start={0} end={5678} delay={.5}>
                                    {({ countUpRef }) => (
                                        <span className='fs-1' ref={countUpRef} />
                                    )}
                                </CountUp>
                                <BsBarChart className='stats_icon' />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3  p-3  ">
                        <div className=' rounded p-2 stats'>
                            <p>Items added this month</p>
                            <div className='d-flex justify-content-between'>
                                <CountUp start={0} end={172} delay={.5}>
                                    {({ countUpRef }) => (
                                        <span className='fs-1' ref={countUpRef} />
                                    )}
                                </CountUp>
                                <FaFilm className='stats_icon' />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3  p-3  ">
                        <div className=' rounded p-2 stats'>
                            <p>New comments</p>
                            <div className='d-flex justify-content-between'>
                                <CountUp start={0} end={2573} delay={.5}>
                                    {({ countUpRef }) => (
                                        <span className='fs-1' ref={countUpRef} />
                                    )}
                                </CountUp>
                                <FaRegComments className='stats_icon' />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3  p-3  ">
                        <div className=' rounded p-2 stats'>
                            <p>New reviews</p>
                            <div className='d-flex justify-content-between'>
                                <CountUp start={0} end={1021n} delay={.5}>
                                    {({ countUpRef }) => (
                                        <span className='fs-1' ref={countUpRef} />
                                    )}
                                </CountUp>
                                <BsStarHalf className='stats_icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section>
                <div >
                    <div className="row row-cols-2">
                        <div className="col-12 col-xl-6 mt-3">
                            <TopItems/>
                        </div>
                        <div className="col-12 col-xl-6 mt-3">
                            <LatestItems/>
                        </div>
                        <div className="col-12 col-xl-6 mt-3">
                            <LatestUsers/>
                        </div>
                        <div className="col-12 col-xl-6 mt-3">
                            <LatestReviews/>
                        </div>
                    </div>
               </div>
            </section>
        </div >
    )
}

export default Dashboard