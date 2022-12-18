import React from 'react';
import { TfiVideoClapper } from 'react-icons/tfi';

const PageItemtype = () => {
    return (
        <div style={{width:"100%"}}>
            <div className="border border-secondary mt-3 p-3" >
                <div className="row">
                    <h6 className='text-white'>Season #1</h6>
                    <div className="col-12 col-md-6  text-white">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Season title' />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Season info' />
                        </div>
                    </div>
                    <div className="col-12 col-md-2 mb-3 ">
                        <button className='btn border-0 text-white' style={{ backgroundColor: "#ffffff0d", width: "100%", height: "50px",fontSize:"14px" }}>ADD SEASON</button>
                    </div>

                </div>
                <div className="row mt-3 ">
                    <h6 className='text-white'>Episode #1</h6>
                    <div className="col-12 col-md-6 text-white">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Episode title 1' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Air date' />
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className="col-12 "  >
                        <div className='input-group' id='upload_photo'>
                            <input type="file" className="form-control rounded-0 border-0 " id="inputGroupFile02" />
                            <label className="input-group-text rounded-end col-12" htmlFor="inputGroupFile02"><span>Upload episode 1</span><TfiVideoClapper /></label>
                        </div>
                    </div>
                </div>

                <div className="row mt-3 ">
                    <h6 className='text-white'>Episode #2</h6>
                    <div className="col-12 col-md-6 text-white">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Episode title 2' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder='Air date' />
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className="col-12 col-md-10 mb-3"  >
                        <div className='input-group' id='upload_photo'>
                            <input type="file" className="form-control rounded-0 border-0 " id="inputGroupFile02" />
                            <label className="input-group-text rounded-end col-12" htmlFor="inputGroupFile02"><span>Upload episode 1</span><TfiVideoClapper /></label>
                        </div>
                    </div>

                    <div className='col-12 col-md-2'>
                    <button className='btn border-0 text-white' style={{ backgroundColor: "#ffffff0d", width: "100%", height: "50px",fontSize:"14px" }}>ADD EPISODE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageItemtype