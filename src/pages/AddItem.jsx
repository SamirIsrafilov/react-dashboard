import React, { useEffect } from 'react';
import { BiImages } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai';

import axios from 'axios';
import { useState } from 'react';
import { BsRecordCircle } from "react-icons/bs"
import PageItemtype from '../components/PageItemtype';
import { TfiVideoClapper } from 'react-icons/tfi';



const AddItem = () => {
    const [countries, setCountries] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        axios
            .get("https://restcountries.com/v2/all")
            .then(response => setCountries(response.data));

    }, [])




    return (
        <div className='container'>
            <div className='border-bottom border-secondary py-2' >
                <h2 className='text-white fw-lighter'>Add new item</h2>
            </div>

            <div className='mt-5' id='additem_form' >
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div >
                        <div className="row">
                            <div className="col-12 col-lg-3 mb-2 ">
                                <div className='input-group' id='upload_cover'>
                                    <input type="file" className="form-control rounded-0 border-0 " id="inputGroupFile02" />
                                    <label className="input-group-text rounded-end col-12" htmlFor="inputGroupFile02"><span>Upload cover(270 x 400)</span></label>
                                </div>
                            </div>
                            <div className="col-12 col-lg-9">
                                <div className='row'>
                                    <div className="col-12 mb-2">

                                        <input type="text" className="form-control fw-semibold" id="exampleFormControlInput1" placeholder="Title" />
                                    </div>
                                    <div className="col-12">

                                        <textarea className="form-control fw-semibold fs-6" id="exampleFormControlTextarea1" placeholder='Description' rows={5} />
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className='col-12 col-md-6 col-lg-3 my-1' >
                                        <input type="text" className="form-control fw-semibold" id="exampleFormControlInput1" placeholder="Release year" />
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3 my-1'> <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Running timed in mi" /></div>
                                    <div className='col-12 col-md-6 col-lg-3 my-1'>
                                        <div className="dropdown" id='quality_dropdown'>
                                            <button className="btn text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span className='text-start'> Choose quality </span><AiFillCaretDown style={{ color: "red" }} />

                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">FullHD</a></li>
                                                <li><a className="dropdown-item" href="#">HD</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-12 col-md-6 col-lg-3 my-1'> <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Age" /></div>
                                </div>


                                <div className='row mt-3'>
                                    <div className="col-12 col-md-6 my-2 form_select" >
                                        <div className="dropdown" id='select_dropdown'>
                                            <button className="btn text-start " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Choose country / countries
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li className='dropdown-item'> <input type="text" placeholder='Country name..' /></li>
                                                {countries.map((item, i) => {
                                                    return (
                                                        <li className='dropdown-item' key={i}>
                                                            {item.name}
                                                        </li>
                                                    )

                                                })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 my-2 form_select" >
                                        <div className="dropdown" id='select_dropdown'>
                                            <button className="btn text-start  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Choose genre / genres
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li className='dropdown-item'> <input type="text" placeholder='Genres name..' /></li>
                                                <li className='dropdown-item'>Action</li>
                                                <li className='dropdown-item'>Animatiion</li>
                                                <li className='dropdown-item'>Comedy</li>
                                                <li className='dropdown-item'>Crime</li>
                                                <li className='dropdown-item'>Drama</li>
                                                <li className='dropdown-item'>Fantasy</li>
                                                <li className='dropdown-item'>Historical</li>
                                                <li className='dropdown-item'>Horror</li>
                                                <li className='dropdown-item'>Romance</li>
                                                <li className='dropdown-item'>Science-fiction</li>
                                                <li className='dropdown-item'>Thriller</li>
                                                <li className='dropdown-item'>Western</li>
                                                <li className='dropdown-item'>Otheer</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mt-3'>
                                    <div className="col-12 "  >
                                        <div className='input-group' id='upload_photo'>
                                            <input type="file" className="form-control rounded-0 border-0 " id="inputGroupFile02" />
                                            <label className="input-group-text rounded-end col-12" htmlFor="inputGroupFile02"><span>Upload photos</span><BiImages /></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex' id='input_check'>
                            <h5 className='my-auto'>Item type :</h5>
                            <div>
                                <button className='btn' onClick={toggle}><BsRecordCircle className='circle_btn rounded-circle' /> Movie</button>
                            </div>
                            <div>
                                <button className='btn ' onClick={toggle}><BsRecordCircle className='circle_btn rounded-circle' /> TV Series</button>
                            </div>
                            <div >

                            </div>
                        </div>

                        <div style={{ display: isOpen ? "flex" : "none" }}>
                            <PageItemtype />
                        </div>
                    </div>

                    <div className='row mt-3' style={{ display: isOpen ? "none" : "flex" }}>
                        <div className="col-12 "  >
                            <div className='input-group' id='upload_photo'>
                                <input type="file" className="form-control rounded-0 border-0 " id="inputGroupFile02" />
                                <label className="input-group-text rounded-end col-12" htmlFor="inputGroupFile02"><span>Upload photos</span><TfiVideoClapper /></label>
                            </div>
                        </div>
                    </div>

                    <button className='btn text-white mt-4' id='publish_btn'>PUBLISH</button>
                </form>
            </div>
        </div>
    )
}

export default AddItem