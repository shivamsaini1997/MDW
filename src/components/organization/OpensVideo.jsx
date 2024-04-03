import React, { useState ,useEffect } from "react";
import HeaderDb from "../include/HeaderDb";
import Sidebar from "../include/Sidebar";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ContentCard from "../include/ContentCard";
import OrgHeaderDb from "./OrgHeaderDB";
import Accordion from 'react-bootstrap/Accordion';

function OpensVideo() {
        var moreModules = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        };
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [isHovered, setIsHovered] = useState(false);
        // const Username = sessionStorage.getItem('UserName');
        const navigate = useNavigate();
        const handleMouseEnter = () => {
        setIsHovered(true);
        };
        const handleMouseLeave = () => {
        setIsHovered(false);
        };
        // const handleClick = () => {
        //   navigate('/video', { state: { videoUrl: 'https://www.dropbox.com/scl/fi/y9ga53ae6frxf1s0ymvvw/rand.mp4?rlkey=jhe86mf1rshdvg3bmp3bjeroc&dl=0' } });
        // };

        const [isNavVisible, setIsNavVisible] = useState(true);
        const [activeTab, setActiveTab] = useState('Home');


return (
<>
<OrgHeaderDb />
<div className="body-header pt-5">
    <div className="container-fluid mt-5 ps-0 orgprofile">
        <div className="row">
            <div className="col-lg-2">
                <Sidebar />
            </div>
            <div className="col-lg-10">
                <nav className="breadcrumbox" style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home <span><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.6 5.672L5.124 3.788L0.6 1.64V0.704L6.252 3.524V4.124L0.6 6.608V5.672Z" fill="black"/>
                            </svg></span></li>
                        <li className="breadcrumb-item " aria-current="page">Savings <span>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.6 5.672L5.124 3.788L0.6 1.64V0.704L6.252 3.524V4.124L0.6 6.608V5.672Z" fill="black"/>
                            </svg>
                            </span>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">Make Money<span>
                            
                            </span></li>
                    </ol>
                </nav>
                <section className="opensmodulebanner">
                    <div className="orgProfile ">
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2>Make money from money money from money</h2>
                                    <span className="d-flex gap-4 sechyt-3">
                                    <p style={{ margin: "0px" }}>Pawan</p>
                                    <p style={{ margin: "0px" }}> 4.2 <span className="viewers">(7.2k+)</span></p>
                                    <p style={{ margin: "0px" }}>2 weeks ago</p>
                                    </span>
                                    <p className="mt-5">
                                        Build an exciting, profitable e-commerce business from scratch that can fund your life from anywhere on the planet! 35 FREE student-exclusive tools & resources. Build an exciting, profitable e-commerce business.
                                    </p>
                                    <div className="row">
                                        <div className="col-12">
                                            <div class="btngroup mt-5">
                                                <button class="btn btn-first1 "><span>Add to Edit Panel</span></button>
                                                <button class="btn btn-first3 ">See All Videos</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
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
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                        centered
                                        size="lg"
                                        >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal title</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className="p-0">
                                            <div
                                            className="cardcont mb-3"
                                            onClick={handleShow}
                                            style={{ textAlign: "-webkit-right" }}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            >
                                            <ReactPlayer
                                            url="https://www.dropbox.com/scl/fi/y9ga53ae6frxf1s0ymvvw/rand.mp4?rlkey=jhe86mf1rshdvg3bmp3bjeroc&dl=0"
                                            muted={true}
                                            controls
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
                                </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
            </div>
            </section>
            <section className="modulnamefoure pt-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="modulnamefoureboc">
                                <span className="">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3996 1.87261C14.3996 1.37596 14.2023 0.899655 13.8511 0.548474C13.4999 0.197292 13.0236 0 12.527 0C12.0303 0 11.554 0.197292 11.2029 0.548474C10.8517 0.899655 10.6544 1.37596 10.6544 1.87261V5.01359C7.64862 5.08078 4.64879 5.3125 1.66837 5.70771C1.42458 5.74017 1.18958 5.82033 0.976777 5.94361C0.763973 6.06689 0.577535 6.23088 0.428108 6.42621C0.278681 6.62154 0.16919 6.8444 0.105888 7.08205C0.0425863 7.31969 0.0267125 7.56748 0.0591732 7.81127C0.0916339 8.05505 0.171793 8.29005 0.295075 8.50286C0.418356 8.71566 0.582345 8.9021 0.777679 9.05153C0.973012 9.20095 1.19587 9.31044 1.43351 9.37374C1.67116 9.43705 1.91895 9.45292 2.16273 9.42046C7.00416 8.77818 11.8948 8.5876 16.7716 8.85119C15.7383 12.3418 14.3144 15.7046 12.527 18.8759C11.5934 17.2202 10.7581 15.5111 10.0252 13.7574C9.82542 13.3122 9.45976 12.9626 9.00607 12.783C8.55238 12.6033 8.0465 12.6079 7.59611 12.7956C7.14573 12.9834 6.78642 13.3396 6.5947 13.7883C6.40297 14.237 6.39397 14.7428 6.5696 15.1981C7.62 17.7134 8.86555 20.1427 10.2948 22.4638C7.62608 26.3641 4.40677 29.8576 0.737057 32.8355C0.537706 32.9876 0.370912 33.1781 0.246566 33.3958C0.122219 33.6135 0.0428521 33.8539 0.0131704 34.1029C-0.0165112 34.3518 0.00409697 34.6042 0.0737732 34.845C0.143449 35.0858 0.260775 35.3102 0.418792 35.5048C0.57681 35.6995 0.772301 35.8604 0.993676 35.9781C1.21505 36.0958 1.4578 36.1678 1.70753 36.1899C1.95726 36.212 2.20888 36.1837 2.44748 36.1067C2.68608 36.0298 2.9068 35.9057 3.09654 35.7418C6.65949 32.8506 9.82976 29.5065 12.527 25.7945C12.7642 26.1241 13.0064 26.4487 13.2511 26.7708C13.5524 27.1661 13.9984 27.4256 14.491 27.4921C14.9835 27.5585 15.4824 27.4266 15.8777 27.1253C16.273 26.824 16.5325 26.378 16.599 25.8854C16.6655 25.3928 16.5336 24.894 16.2323 24.4987C15.7233 23.8335 15.2321 23.155 14.7591 22.4638C17.3126 18.3197 19.2733 13.8386 20.5842 9.1508C21.3582 9.22821 22.1272 9.32059 22.8912 9.42046C23.3836 9.48602 23.8818 9.35331 24.2763 9.05153C24.6708 8.74974 24.9292 8.30361 24.9948 7.81127C25.0604 7.31892 24.9277 6.82071 24.6259 6.42621C24.3241 6.03172 23.878 5.77326 23.3856 5.70771C20.4053 5.31172 17.4054 5.08 14.3996 5.01359V1.87261Z" fill="url(#paint0_linear_1778_22416)"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5096 14.9779C27.8575 14.9779 28.1986 15.0749 28.4945 15.2579C28.7905 15.4409 29.0295 15.7028 29.1849 16.0141L39.7964 37.237C39.9085 37.4572 39.9759 37.6975 39.9947 37.9439C40.0135 38.1903 39.9834 38.4381 39.906 38.6728C39.8286 38.9075 39.7055 39.1245 39.5438 39.3115C39.3822 39.4984 39.1851 39.6515 38.964 39.7619C38.7429 39.8722 38.5021 39.9378 38.2555 39.9547C38.009 39.9716 37.7615 39.9395 37.5274 39.8603C37.2933 39.7811 37.0772 39.6563 36.8915 39.4932C36.7059 39.3301 36.5543 39.1318 36.4457 38.9098L34.4682 34.9524H20.5535L18.5735 38.9098C18.4648 39.1318 18.3133 39.3301 18.1277 39.4932C17.942 39.6563 17.7259 39.7811 17.4918 39.8603C17.2577 39.9395 17.0102 39.9716 16.7636 39.9547C16.5171 39.9378 16.2763 39.8722 16.0552 39.7619C15.8341 39.6515 15.637 39.4984 15.4753 39.3115C15.3137 39.1245 15.1906 38.9075 15.1132 38.6728C15.0358 38.4381 15.0057 38.1903 15.0245 37.9439C15.0433 37.6975 15.1107 37.4572 15.2228 37.237L25.8342 16.0141C25.9896 15.7028 26.2287 15.4409 26.5247 15.2579C26.8206 15.0749 27.1616 14.9779 27.5096 14.9779ZM32.5956 31.2072L27.5096 21.0377L22.4261 31.2072H32.5956Z" fill="url(#paint1_linear_1778_22416)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_1778_22416" x1="25.0112" y1="5.66943" x2="-0.520351" y2="22.803" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#6E1FD8"/>
                                                <stop offset="1" stop-color="#A66DEA"/>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1778_22416" x1="40.0001" y1="18.8906" x2="20.9675" y2="37.3752" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#6E1FD8"/>
                                                <stop offset="1" stop-color="#A66DEA"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <p>
                                    English
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="modulnamefoureboc">
                                <span className="">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.0876 31.6945L2.08782 31.6968C2.27993 33.746 4.00857 35.4125 6.12488 35.4125H33.8749C35.9912 35.4125 37.7198 33.746 37.912 31.6968L37.9121 31.6949L39.0371 16.5074L39.0372 16.5059C39.1013 15.4163 38.7169 14.3276 37.9491 13.4954C37.4524 12.9369 36.8351 12.5583 36.0999 12.3602V11.9375C36.0999 9.69477 34.3051 7.9 32.0624 7.9H16.7282L13.8866 5.12019C13.6125 4.7811 13.2065 4.65 12.8124 4.65H7.99988C5.75715 4.65 3.96238 6.44477 3.96238 8.6875V12.3618C3.28523 12.5595 2.61155 12.9358 2.1146 13.4939C1.34345 14.2664 0.96114 15.4193 1.02506 16.5059L1.02505 16.5059L1.02513 16.507L2.0876 31.6945ZM4.99988 15.1625H5.09988V15.1H34.9374C35.2255 15.1 35.5051 15.2154 35.6699 15.435L35.6741 15.4407L35.6792 15.4457C35.9016 15.6682 35.9619 15.948 35.9624 16.2465L34.9004 31.4276C34.9003 31.428 34.9003 31.4285 34.9002 31.429C34.842 32.0039 34.3838 32.4 33.8749 32.4H6.12488C5.61589 32.4 5.15761 32.0038 5.09951 31.4288L3.97489 16.3088C3.97568 15.9639 4.08905 15.7353 4.26738 15.4975C4.43212 15.2779 4.71178 15.1625 4.99988 15.1625ZM33.0249 11.875V12.15H6.97488V8.625C6.97488 8.05523 7.43011 7.6 7.99988 7.6H12.2085L14.9878 10.3794C15.262 10.7188 15.6681 10.85 16.0624 10.85H31.9999C32.5697 10.85 33.0249 11.3052 33.0249 11.875Z" fill="url(#paint0_linear_1778_22422)" stroke="url(#paint1_linear_1778_22422)" stroke-width="0.2"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_1778_22422" x1="38.9441" y1="9.5369" x2="16.0381" y2="37.0704" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#EE4F5A"/>
                                                <stop offset="1" stop-color="#DE8B8E"/>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1778_22422" x1="38.9441" y1="9.5369" x2="16.0381" y2="37.0704" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#EE4F5A"/>
                                                <stop offset="1" stop-color="#DE8B8E"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <p>
                                    Savings
                                </p>
                            </div>
                        </div>
                     
                        <div className="col-lg-3 col-md-6">
                            <div className="modulnamefoureboc">
                                <span className="">
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37.7266 31.4375H37.3516V17.6875C37.3516 16.25 36.1641 15 34.6641 15H31.2891C29.8516 15 28.6016 16.1875 28.6016 17.6875V31.4375H24.6016V23.75C24.6016 22.3125 23.4141 21.0625 21.9141 21.0625H18.5391C17.1016 21.125 15.8516 22.3125 15.8516 23.75V31.4375H11.7891V8.375C11.7891 6.9375 10.6016 5.6875 9.10156 5.6875H5.72656C4.28906 5.6875 3.03906 6.875 3.03906 8.375V31.4375H2.72656C1.97656 31.4375 1.28906 32.0625 1.28906 32.875C1.28906 33.6875 1.91406 34.3125 2.72656 34.3125H37.7266C38.4766 34.3125 39.1641 33.6875 39.1641 32.875C39.1641 32.0625 38.4766 31.4375 37.7266 31.4375ZM5.91406 31.4375V8.5625H8.97656V31.5H5.91406V31.4375ZM18.6641 31.4375V23.9375H21.7266V31.5H18.6641V31.4375ZM31.4766 31.4375V17.875H34.5391V31.4375H31.4766Z" fill="url(#paint0_linear_1778_22435)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_1778_22435" x1="39.1641" y1="10.1709" x2="18.0145" y2="37.349" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#4172EB"/>
                                                <stop offset="1" stop-color="#42A7E9"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <p>
                                    Beginners
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tabsopenmoduls">
                <div className="container-fluid">
        
                    <div className="row fiexdheader-da">
                             <div className="col-12">
                                <div class="tab-pane fade" id="Home" role="tabpanel" aria-labelledby="Home-tab" tabindex="0">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane marginBottom" id="About" role="tabpanel" aria-labelledby="About-tab" tabindex="0">
                                    <div className="row mb-5">
                                        <div className="col-md-6 text-center px-lg-5">
                                            <h3>Description</h3>
                                            <p className="mb-0">Online e-commerce courses teach business management and marketing strategy skills, which are key to successfully operating an online business with an e-commerce storefront. </p><br />
                                            <p>Online e-commerce courses teach business management and marketing strategy skills, which are key to successfully operating an online business with an e-commerce storefront.</p> <br />
                                            <p>successfully operating an online business with an e-commerce storefront. </p>
                                        </div>
                                        <div className="col-md-6 text-center position-relative">
                                                <img className="about-img" src="./images/certification-course.jpg" alt="" />
                                                <div className="borderiamges"></div>
                                                <button class="btn btn-first1 mt-3"><span>Add to Card</span></button>

                                        </div>
                                    </div>



                                </div>
                 
                                <div class="tab-pane marginBottom FAQtabs" id="FAQ" role="tabpanel" aria-labelledby="FAQ-tab" tabindex="0">
                                    <div className="container-fluid">
                                  
                                        <div className="row">
                                        
                                            <div className="col-12">
                                                
                                                <div className="d-flex w-100 commentsshow">
                                                    <div className="userImage">
                                                        <img src="./images/avatarimaeg.jpg" alt="" />
                                                    </div>
                                                    <div className="w-100 ms-3">
                                                        <div>
                                                            <span className="namecommenters">Vinh Bui</span>
                                                            <span className="commentsdays">1 day ago</span>
                                                        </div>
                                                   
                                                    <p className="comments-text mb-0">Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>

                                                    </div>
                                                    
                                                </div>
                                                <div className="d-flex ms-5  comments-like align-items-center">
                                                        <a href="#">
                                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_1810_830)">
                                                            <path d="M6.64751 0.0355397C5.93051 -0.14371 5.26451 0.39854 5.21651 1.10054C5.16251 1.88879 5.04401 2.61254 4.89551 3.04304C4.80176 3.31304 4.53626 3.80279 4.11551 4.27229C3.69776 4.73954 3.15401 5.15579 2.51726 5.32979C2.01326 5.46704 1.49951 5.90354 1.49951 6.54104V9.54179C1.49951 10.1755 2.01101 10.6398 2.58551 10.7005C3.38801 10.786 3.75851 11.0118 4.13651 11.2428L4.17251 11.2653C4.37651 11.389 4.60601 11.5263 4.90001 11.6283C5.19776 11.7303 5.54576 11.791 5.99951 11.791H8.62451C9.32726 11.791 9.82376 11.4333 10.075 10.993C10.1964 10.7853 10.2621 10.5497 10.2655 10.309C10.2655 10.195 10.2483 10.075 10.2078 9.96104C10.3585 9.76379 10.4928 9.52754 10.5738 9.28529C10.6563 9.03779 10.7028 8.71379 10.5768 8.42354C10.6285 8.32604 10.6668 8.22179 10.696 8.12129C10.7538 7.91879 10.7808 7.69529 10.7808 7.47854C10.7808 7.26254 10.7538 7.03979 10.696 6.83654C10.6698 6.7431 10.6351 6.65223 10.5925 6.56504C10.7238 6.37819 10.8083 6.16252 10.8389 5.93619C10.8694 5.70987 10.8451 5.47951 10.768 5.26454C10.6135 4.82054 10.2565 4.43954 9.86801 4.31054C9.23276 4.09904 8.51576 4.10354 7.98101 4.15229C7.86999 4.16228 7.75921 4.17478 7.64876 4.18979C7.90894 3.07558 7.89298 1.91468 7.60226 0.80804C7.55168 0.630732 7.45466 0.470154 7.32122 0.342912C7.18778 0.21567 7.02277 0.126385 6.84326 0.0842897L6.64751 0.0355397ZM8.62451 11.0418H5.99951C5.61701 11.0418 5.35226 10.99 5.14451 10.9188C4.93376 10.846 4.76501 10.7478 4.56251 10.624L4.53251 10.606C4.11626 10.3518 3.63401 10.0578 2.66501 9.95504C2.41526 9.92804 2.24951 9.73754 2.24951 9.54254V6.54104C2.24951 6.35054 2.41901 6.13379 2.71451 6.05354C3.53576 5.82854 4.19726 5.30654 4.67501 4.77254C5.15126 4.24004 5.47301 3.66629 5.60351 3.28904C5.78576 2.76404 5.90876 1.96304 5.96501 1.15154C5.98376 0.88004 6.23501 0.70604 6.46526 0.76304L6.66176 0.81254C6.78176 0.84254 6.85526 0.91979 6.87776 1.00379C7.18405 2.17081 7.14628 3.4015 6.76901 4.54754C6.74766 4.61128 6.74383 4.67959 6.75793 4.74532C6.77203 4.81104 6.80353 4.87177 6.84915 4.92115C6.89477 4.97052 6.95282 5.00673 7.01723 5.02597C7.08164 5.04522 7.15003 5.04679 7.21526 5.03054L7.21751 5.02979L7.22801 5.02754L7.27151 5.01704C7.52798 4.96258 7.78743 4.92326 8.04851 4.89929C8.54576 4.85429 9.14126 4.85879 9.63101 5.02229C9.76226 5.06579 9.96851 5.24729 10.0585 5.50979C10.1388 5.74079 10.1238 6.01229 9.85901 6.27629L9.59426 6.54104L9.85901 6.80654C9.89126 6.83879 9.93776 6.91229 9.97451 7.04279C10.0105 7.16804 10.0308 7.32029 10.0308 7.47854C10.0308 7.63754 10.0105 7.78904 9.97451 7.91504C9.93701 8.04554 9.89126 8.11904 9.85901 8.15129L9.59426 8.41604L9.85901 8.68154C9.89426 8.71679 9.94076 8.81429 9.86276 9.04754C9.78148 9.27373 9.65229 9.47968 9.48401 9.65129L9.21926 9.91604L9.48401 10.1815C9.48851 10.1853 9.51476 10.219 9.51476 10.309C9.51144 10.419 9.48021 10.5264 9.42401 10.621C9.30026 10.837 9.04676 11.041 8.62451 11.041V11.0418Z" fill="#6C757D"/>
                                                            </g>
                                                            <defs>
                                                            <clipPath id="clip0_1810_830">
                                                            <rect width="12" height="12" fill="white" transform="translate(0 0.00195312)"/>
                                                            </clipPath>
                                                            </defs>
                                                            </svg>
                                                        </a>
                                                        <span>0</span>
                                                        <a href="#"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_1810_812)">
                                                            <path d="M6.64751 11.7567C5.93051 11.9367 5.26526 11.3937 5.21651 10.6917C5.16251 9.90422 5.04401 9.18047 4.89551 8.74922C4.80176 8.47922 4.53626 7.99022 4.11551 7.52072C3.69776 7.05272 3.15401 6.63647 2.51726 6.46322C2.01326 6.32522 1.49951 5.88872 1.49951 5.25122V2.25122C1.49951 1.61747 2.01101 1.15322 2.58551 1.09172C3.38801 1.00697 3.75851 0.780471 4.13651 0.549471L4.17251 0.527721C4.37651 0.403221 4.60601 0.265971 4.90001 0.164721C5.19776 0.0612207 5.54576 0.0012207 5.99951 0.0012207H8.62451C9.32726 0.0012207 9.82376 0.359721 10.075 0.799221C10.198 1.01447 10.2655 1.25447 10.2655 1.48397C10.2655 1.59797 10.2483 1.71797 10.2078 1.83197C10.3585 2.02847 10.4928 2.26472 10.5738 2.50697C10.6563 2.75447 10.7028 3.07847 10.5768 3.36947C10.6285 3.46697 10.6668 3.57047 10.696 3.67172C10.7538 3.87422 10.7808 4.09697 10.7808 4.31372C10.7808 4.53047 10.7538 4.75322 10.696 4.95572C10.6698 5.04572 10.636 5.13872 10.5925 5.22797C10.888 5.65622 10.906 6.12797 10.768 6.52772C10.6135 6.97172 10.2565 7.35272 9.86801 7.48172C9.23276 7.69397 8.51576 7.68872 7.98101 7.63997C7.86999 7.62997 7.75922 7.61747 7.64876 7.60247C7.9091 8.71692 7.89313 9.8781 7.60226 10.985C7.49876 11.366 7.18976 11.621 6.84326 11.708L6.64751 11.7567ZM8.62451 0.751221H5.99951C5.61701 0.751221 5.35226 0.802221 5.14451 0.873471C4.93376 0.946221 4.76501 1.04522 4.56251 1.16822L4.53251 1.18697C4.11626 1.44047 3.63401 1.73447 2.66501 1.83797C2.41526 1.86422 2.24951 2.05547 2.24951 2.25047V5.25122C2.24951 5.44247 2.41901 5.65847 2.71451 5.73872C3.53576 5.96372 4.19726 6.48647 4.67501 7.02047C5.15126 7.55297 5.47301 8.12672 5.60351 8.50322C5.78576 9.02822 5.90876 9.82922 5.96501 10.6407C5.98376 10.9122 6.23501 11.087 6.46526 11.0292L6.66176 10.9805C6.78176 10.9505 6.85526 10.8725 6.87776 10.7892C7.1842 9.62197 7.14643 8.39099 6.76901 7.24472C6.74783 7.18102 6.74414 7.11281 6.75832 7.0472C6.7725 6.98159 6.80403 6.92099 6.84962 6.87172C6.89521 6.82245 6.95319 6.78632 7.01751 6.76711C7.08182 6.74789 7.15012 6.74629 7.21526 6.76247H7.21751L7.22801 6.76547L7.27151 6.77522C7.52798 6.82968 7.78743 6.86899 8.04851 6.89297C8.54576 6.93797 9.14126 6.93347 9.63101 6.77072C9.76226 6.72647 9.96851 6.54497 10.0585 6.28247C10.1388 6.05147 10.1238 5.77997 9.85901 5.51672L9.59426 5.25122L9.85901 4.98572C9.89126 4.95422 9.93776 4.88072 9.97451 4.74947C10.0105 4.62422 10.0308 4.47197 10.0308 4.31372C10.0308 4.15547 10.0105 4.00322 9.97451 3.87797C9.93701 3.74747 9.89126 3.67322 9.85901 3.64172L9.59426 3.37622L9.85901 3.11072C9.89426 3.07547 9.94076 2.97872 9.86276 2.74472C9.78139 2.5188 9.65219 2.31311 9.48401 2.14172L9.21926 1.87622L9.48401 1.61072C9.48851 1.60697 9.51476 1.57322 9.51476 1.48322C9.51131 1.37347 9.48009 1.26638 9.42401 1.17197C9.29951 0.955221 9.04676 0.751221 8.62451 0.751221Z" fill="#6C757D"/>
                                                            </g>
                                                            <defs>
                                                            <clipPath id="clip0_1810_812">
                                                            <rect width="12" height="12" fill="white" transform="translate(0 0.00195312)"/>
                                                            </clipPath>
                                                            </defs>
                                                            </svg>
                                                            </a>
                                                            <span>0</span>
                                                            <a href="#"> Reply to</a>
                                                    </div>
                                                    <div className="d-flex w-100 mt-5">
                                                        <div className="userImage">
                                                            <img src="./images/avatarimaeg.jpg" alt="" />
                                                        </div>
                                                        <div className="w-100 ms-3">
                                                            <textarea className="w-100 form-control" name="" id="" cols="30" rows="1" placeholder="Add comment"></textarea>
                                                            <p className="textarea-words mb-0">0 / 100</p>
                                                            <button className="btn btn-first1 com-width" ><span>Add Comment</span></button>
                                                    </div>
                                                </div>
                                                      
                                                   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
</div>
</>
);
}
export default OpensVideo;