import React from "react"
import OrgHeaderDb from "./OrgHeaderDB";
import Sidebar from "../include/Sidebar";
import { useState } from "react";
import ReactPlayer from "react-player";


function VideoOpenDetails() {
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseLeave = () => {
         setIsHovered(false);
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const [CheckChecked, setCheckChecked] = useState(true);

    const handleCheck1Change = () => {
        setCheckChecked(!CheckChecked);
    };
    const [CheckChecked2, setCheckChecked2] = useState(true);

    const handleCheck2Change = () => {
        setCheckChecked2(!CheckChecked2);
    };
    const [CheckChecked3, setCheckChecked3] = useState(true);

    const handleCheck3Change = () => {
        setCheckChecked3(!CheckChecked3);
    };
    const [CheckChecked4, setCheckChecked4] = useState(true);

    const handleCheck4Change = () => {
        setCheckChecked4(!CheckChecked4);
    };
    const [CheckChecked5, setCheckChecked5] = useState(true);

    const handleCheck5Change = () => {
        setCheckChecked5(!CheckChecked5);
    };

    return(
        <>
            <OrgHeaderDb />
            <div className="body-header pt-lg-5 pt-4">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-lg-2 ps-0">
                            <Sidebar />
                        </div>
                        <div className="col-lg-10">
                           <div className="videoOpen">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="videoBox position-relative">
                                            <div
                                                className="cardcont"
                                                onClick={handleShow}
                                                onMouseLeave={handleMouseLeave}
                                                >
                                                <ReactPlayer
                                                onMouseEnter={handleMouseEnter}
                                                className="reactplayercss"
                                                url="https://www.dropbox.com/scl/fi/y9ga53ae6frxf1s0ymvvw/rand.mp4?rlkey=jhe86mf1rshdvg3bmp3bjeroc&dl=0"
                                                muted={true}
                                                playing={isHovered}
                                                width="100%"
                                                height="100%"
                                                config={{
                                                file: {
                                                attributes: {
                                                onContextMenu: (e) => e.preventDefault(),
                                                },
                                                },
                                                }}
                                                />
                                            </div>
                                        </div>
                                        <div className="content-box">
                                            <h5>Welcome to the course</h5>
                                            <p>Hi ! I am Thomas Wayne, your React.js Instructor for this course. Let me tell  you this, i am super happy to help you understand the core basics and advance topics of React. <br /> <br />

                                                In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth. This will be a 4 hour course divided in 8 chapters and 36 lessons that includes articles, video lessons as well as assignments to help you test yourself. <br /> <br />

                                                Lets start now with out getting any further late. lets dive in.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                    <div className="courseContent">
                                        <div className="courseContentHeader">
                                            <h5>Course Content</h5>
                                        </div>
                                        <div className="courseContemtBody">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"checked={CheckChecked} 
                                                                onChange={handleCheck1Change} value="" id="flexCheckChecked"/>
                                                               
                                                            </div>
                                                        </div>
                                                        <div for="">Welcome to the course <br /> <span>(3:36)</span></div>
                                                    </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <span>
                                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M22.5 10.99V4.67C22.5 3.47 21.52 2.58 20.33 2.68H20.27C18.17 2.86 14.98 3.93 13.2 5.05L13.03 5.16C12.74 5.34 12.26 5.34 11.97 5.16L11.72 5.01C9.94 3.9 6.76 2.84 4.66 2.67C3.47 2.57 2.5 3.47 2.5 4.66V16.74C2.5 17.7 3.28 18.6 4.24 18.72L4.53 18.76C6.7 19.05 10.05 20.15 11.97 21.2L12.01 21.22C12.28 21.37 12.71 21.37 12.97 21.22C14.89 20.16 18.25 19.05 20.43 18.76L20.76 18.72C21.72 18.6 22.5 17.7 22.5 16.74V15.02" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M12.5 5.49V20.49" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M8.25 8.49H6" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M9 11.49H6" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </span>
                                                            <p>In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                                        <div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"checked={CheckChecked2} 
                                                                onChange={handleCheck2Change} value="" id="flexCheckChecked"/>
                                                               
                                                            </div>
                                                        </div>
                                                        <div for="">Welcome to the course <br /> <span>(3:36)</span></div>
                                                    </button>
                                                    </h2>
                                                    <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <span>
                                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M22.5 10.99V4.67C22.5 3.47 21.52 2.58 20.33 2.68H20.27C18.17 2.86 14.98 3.93 13.2 5.05L13.03 5.16C12.74 5.34 12.26 5.34 11.97 5.16L11.72 5.01C9.94 3.9 6.76 2.84 4.66 2.67C3.47 2.57 2.5 3.47 2.5 4.66V16.74C2.5 17.7 3.28 18.6 4.24 18.72L4.53 18.76C6.7 19.05 10.05 20.15 11.97 21.2L12.01 21.22C12.28 21.37 12.71 21.37 12.97 21.22C14.89 20.16 18.25 19.05 20.43 18.76L20.76 18.72C21.72 18.6 22.5 17.7 22.5 16.74V15.02" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M12.5 5.49V20.49" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M8.25 8.49H6" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M9 11.49H6" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </span>
                                                            <p>In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapseOne">
                                                        <div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"checked={CheckChecked3} 
                                                                onChange={handleCheck3Change} value="" id="flexCheckChecked"/>
                                                               
                                                            </div>
                                                        </div>
                                                        <div for="">Welcome to the course <br /> <span>(3:36)</span></div>
                                                    </button>
                                                    </h2>
                                                    <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <span>
                                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M22.5 10.99V4.67C22.5 3.47 21.52 2.58 20.33 2.68H20.27C18.17 2.86 14.98 3.93 13.2 5.05L13.03 5.16C12.74 5.34 12.26 5.34 11.97 5.16L11.72 5.01C9.94 3.9 6.76 2.84 4.66 2.67C3.47 2.57 2.5 3.47 2.5 4.66V16.74C2.5 17.7 3.28 18.6 4.24 18.72L4.53 18.76C6.7 19.05 10.05 20.15 11.97 21.2L12.01 21.22C12.28 21.37 12.71 21.37 12.97 21.22C14.89 20.16 18.25 19.05 20.43 18.76L20.76 18.72C21.72 18.6 22.5 17.7 22.5 16.74V15.02" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M12.5 5.49V20.49" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M8.25 8.49H6" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M9 11.49H6" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </span>
                                                            <p>In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                                        <div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"checked={CheckChecked4} 
                                                                onChange={handleCheck4Change} value="" id="flexCheckChecked"/>
                                                               
                                                            </div>
                                                        </div>
                                                        <div for="">Welcome to the course <br /> <span>(3:36)</span></div>
                                                    </button>
                                                    </h2>
                                                    <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <span>
                                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M22.5 10.99V4.67C22.5 3.47 21.52 2.58 20.33 2.68H20.27C18.17 2.86 14.98 3.93 13.2 5.05L13.03 5.16C12.74 5.34 12.26 5.34 11.97 5.16L11.72 5.01C9.94 3.9 6.76 2.84 4.66 2.67C3.47 2.57 2.5 3.47 2.5 4.66V16.74C2.5 17.7 3.28 18.6 4.24 18.72L4.53 18.76C6.7 19.05 10.05 20.15 11.97 21.2L12.01 21.22C12.28 21.37 12.71 21.37 12.97 21.22C14.89 20.16 18.25 19.05 20.43 18.76L20.76 18.72C21.72 18.6 22.5 17.7 22.5 16.74V15.02" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M12.5 5.49V20.49" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M8.25 8.49H6" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M9 11.49H6" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </span>
                                                            <p>In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                                        <div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"checked={CheckChecked5} 
                                                                onChange={handleCheck5Change} value="" id="flexCheckChecked"/>
                                                               
                                                            </div>
                                                        </div>
                                                        <div for="">Welcome to the course <br /> <span>(3:36)</span></div>
                                                    </button>
                                                    </h2>
                                                    <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <span>
                                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M22.5 10.99V4.67C22.5 3.47 21.52 2.58 20.33 2.68H20.27C18.17 2.86 14.98 3.93 13.2 5.05L13.03 5.16C12.74 5.34 12.26 5.34 11.97 5.16L11.72 5.01C9.94 3.9 6.76 2.84 4.66 2.67C3.47 2.57 2.5 3.47 2.5 4.66V16.74C2.5 17.7 3.28 18.6 4.24 18.72L4.53 18.76C6.7 19.05 10.05 20.15 11.97 21.2L12.01 21.22C12.28 21.37 12.71 21.37 12.97 21.22C14.89 20.16 18.25 19.05 20.43 18.76L20.76 18.72C21.72 18.6 22.5 17.7 22.5 16.74V15.02" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M12.5 5.49V20.49" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M8.25 8.49H6" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path d="M9 11.49H6" stroke="#656565" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </span>
                                                            <p>In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                        <button class="btn btn-first1 w-100 mt-3"><span>Add to Edit Panel</span></button>
                                </div>
                                </div>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </div>    

        </>
    )
};
export default VideoOpenDetails;

