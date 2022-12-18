import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className='NotFoundPage'>

            <div id='notFoundPageInfo'>
                <h1>404</h1>
                <p className='my-3'>The page you are looking for not available!</p>
                <div className=' d-flex align-items-center justify-content-center my-3'>
                    <Link to="/" className='btn d-flex align-items-center justify-content-center' id='go_back_btn'>GO BACK</Link>
                </div>
            </div>


        </div>
    )
}

export default NotFoundPage;