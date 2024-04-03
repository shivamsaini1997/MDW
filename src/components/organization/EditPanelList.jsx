import React from "react";
import OrgHeaderDb from "./OrgHeaderDB";
import Sidebar from "../include/Sidebar";
function EditPanelList () {
    return(
            <>
            <OrgHeaderDb />
            <div className="body-header pt-5 editpanelList">
                <div className="container-fluid mt-5 ps-0 orgprofile">
                    <div className="row">
                        <div className="col-lg-2">
                            <Sidebar />
                        </div>
                        <div className="col-lg-10">
                            <div className="bannerEditpanel bannerpanel bannersection"> 
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <img className="bannerimageEditpanel" src="../images/editpanelbanner.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="editPanelvideos">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex mb-5">
                                                <div className="search-container position-relative ms-lg-1 ms-4">
                                                    <form>
                                                        <input class="form-control videosearcheditpanel" type="text" placeholder="Search Videos" autocomplete="off"/>
                                                        <button class="searchbtn " type="button">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M15.4 14.6L11.4 10.6C13.425 8.17499 13.3 4.54999 11.025 2.24999C9.85001 1.07499 8.30001 0.424988 6.65001 0.424988C4.97501 0.449988 3.42501 1.07499 2.25001 2.24999C1.07501 3.42499 0.450012 4.97499 0.450012 6.62499C0.450012 8.27499 1.10001 9.82499 2.27501 11C3.47501 12.2 5.07501 12.8 6.65001 12.8C8.05001 12.8 9.47501 12.325 10.625 11.375L14.625 15.375C14.725 15.475 14.875 15.55 15.025 15.55C15.175 15.55 15.325 15.5 15.425 15.375C15.625 15.175 15.625 14.825 15.4 14.6ZM3.05001 10.225C2.10001 9.24999 1.57501 7.97499 1.57501 6.62499C1.57501 5.27499 2.10001 3.99999 3.05001 3.04999C4.00001 2.09999 5.27501 1.57499 6.62501 1.57499C7.97501 1.57499 9.25001 2.09999 10.2 3.04999C12.175 5.02499 12.175 8.24999 10.2 10.225C8.25001 12.2 5.02501 12.2 3.05001 10.225Z" fill="#111928"></path>
                                                            </svg>
                                                        </button>
                                                    </form>
                                                </div>
                                                <a href="#" className="iconBg">
                                                    <img src="../images/girdicon.svg" alt=""style={{width: '22px'}} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="videoroweditPanel">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item mb-4">
                                           <div className="px-3 d-flex justify-content-between align-items-center">
                                           <h3>Recently Added</h3>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            </button>
                                           </div>
                                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                            <div class="accordion-body px-0">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="editvideocardsBox">
                                                                <div className="videoTextbox">
                                                                    <div className="videobox position-relative">
                                                                        <img className="w-100" src="../images/Navigating.jpg" alt="" />
                                                                    </div>
                                                                    <div className="w-100">
                                                                       <div className="position-relative ms-4">
                                                                            <div className="mb-2">
                                                                                <span className="labletagtime">
                                                                                <img style={{width:'21px'}} src="../images/ion_time-outline.svg" alt="" /> Will be Deleted 7 days</span>
                                                                                <span className="edittime mb-5 ms-2">Edited : 43 minutes ago</span>
                                                                            </div>
                                                                            <p className="mb-0">Navigating the Digital Landscape : A Comprehensive Guide to E Commerce Success</p>
                                                                       </div>
                                                                    </div>
                                                                    <div className="w-25 text-center">
                                                                        <a href="#" className="" data-bs-toggle="dropdown" aria-expanded="false" >
                                                                                <img style={{width:'37px'}} src="../images/threedot.svg" alt="" />
                                                                        </a>
                                                                        <ul class="dropdown-menu videodropdown">
                                                                            <li><a class="dropdown-item" href="#">Edit </a></li>
                                                                            <li><a class="dropdown-item" href="#">Copy </a></li>
                                                                            <li><a class="dropdown-item" href="#">Add to cart</a></li>
                                                                            <li><a class="dropdown-item" href="#">Remove </a></li>
                                                                            <li><a class="dropdown-item" href="#">Details </a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <button class="btn btn-first1 w-50"><span><img style={{width:'16px'}} src="../images/editvideo.svg" alt="" />Edit Video</span></button>
                                                                </div>
                                                                <div className="videoTextbox">
                                                                    <div className="videobox position-relative">
                                                                        <img className="w-100" src="../images/Navigating.jpg" alt="" />
                                                                    </div>
                                                                    <div className="w-100">
                                                                       <div className="position-relative ms-4">
                                                                            <div className="mb-2">
                                                                                <span className="labletagtime">
                                                                                <img style={{width:'21px'}} src="../images/ion_time-outline.svg" alt="" /> Will be Deleted 7 days</span>
                                                                                <span className="edittime mb-5 ms-2">Edited : 43 minutes ago</span>
                                                                            </div>
                                                                            <p className="mb-0">Navigating the Digital Landscape : A Comprehensive Guide to E Commerce Success</p>
                                                                       </div>
                                                                    </div>
                                                                    <div className="w-25 text-center">
                                                                        <a href="#" className="" data-bs-toggle="dropdown" aria-expanded="false" >
                                                                                <img style={{width:'37px'}} src="../images/threedot.svg" alt="" />
                                                                        </a>
                                                                        <ul class="dropdown-menu videodropdown">
                                                                            <li><a class="dropdown-item" href="#">Edit </a></li>
                                                                            <li><a class="dropdown-item" href="#">Copy </a></li>
                                                                            <li><a class="dropdown-item" href="#">Add to cart</a></li>
                                                                            <li><a class="dropdown-item" href="#">Remove </a></li>
                                                                            <li><a class="dropdown-item" href="#">Details </a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <button class="btn btn-first1 w-50"><span><img style={{width:'16px'}} src="../images/editvideo.svg" alt="" />Edit Video</span></button>
                                                                </div>
                                                                <div className="videoTextbox">
                                                                    <div className="videobox position-relative">
                                                                        <img className="w-100" src="../images/Navigating.jpg" alt="" />
                                                                    </div>
                                                                    <div className="w-100">
                                                                       <div className="position-relative ms-4">
                                                                            <div className="mb-2">
                                                                                <span className="labletagtime">
                                                                                <img style={{width:'21px'}} src="../images/ion_time-outline.svg" alt="" /> Will be Deleted 7 days</span>
                                                                                <span className="edittime mb-5 ms-2">Edited : 43 minutes ago</span>
                                                                            </div>
                                                                            <p className="mb-0">Navigating the Digital Landscape : A Comprehensive Guide to E Commerce Success</p>
                                                                       </div>
                                                                    </div>
                                                                    <div className="w-25 text-center">
                                                                        <a href="#" className="" data-bs-toggle="dropdown" aria-expanded="false" >
                                                                                <img style={{width:'37px'}} src="../images/threedot.svg" alt="" />
                                                                        </a>
                                                                        <ul class="dropdown-menu videodropdown">
                                                                            <li><a class="dropdown-item" href="#">Edit </a></li>
                                                                            <li><a class="dropdown-item" href="#">Copy </a></li>
                                                                            <li><a class="dropdown-item" href="#">Add to cart</a></li>
                                                                            <li><a class="dropdown-item" href="#">Remove </a></li>
                                                                            <li><a class="dropdown-item" href="#">Details </a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <button class="btn btn-first1 w-50"><span><img style={{width:'16px'}} src="../images/editvideo.svg" alt="" />Edit Video</span></button>
                                                                </div>
                                                                <div className="videoTextbox">
                                                                    <div className="videobox position-relative">
                                                                        <img className="w-100" src="../images/Navigating.jpg" alt="" />
                                                                    </div>
                                                                    <div className="w-100">
                                                                       <div className="position-relative ms-4">
                                                                            <div className="mb-2">
                                                                                <span className="labletagtime">
                                                                                <img style={{width:'21px'}} src="../images/ion_time-outline.svg" alt="" /> Will be Deleted 7 days</span>
                                                                                <span className="edittime mb-5 ms-2">Edited : 43 minutes ago</span>
                                                                            </div>
                                                                            <p className="mb-0">Navigating the Digital Landscape : A Comprehensive Guide to E Commerce Success</p>
                                                                       </div>
                                                                    </div>
                                                                    <div className="w-25 text-center">
                                                                        <a href="#" className="" data-bs-toggle="dropdown" aria-expanded="false" >
                                                                                <img style={{width:'37px'}} src="../images/threedot.svg" alt="" />
                                                                        </a>
                                                                        <ul class="dropdown-menu videodropdown">
                                                                            <li><a class="dropdown-item" href="#">Edit </a></li>
                                                                            <li><a class="dropdown-item" href="#">Copy </a></li>
                                                                            <li><a class="dropdown-item" href="#">Add to cart</a></li>
                                                                            <li><a class="dropdown-item" href="#">Remove </a></li>
                                                                            <li><a class="dropdown-item" href="#">Details </a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <button class="btn btn-first1 w-50"><span><img style={{width:'16px'}} src="../images/editvideo.svg" alt="" />Edit Video</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                 
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item mb-4">
                                           <div className="px-3 d-flex justify-content-between align-items-center">
                                           <h3>Save for money</h3>
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                            </button>
                                           </div>
                                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                                                <div class="accordion-body px-0">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-12">
                                                            <div className="editvideocardsBox">
                                                                <div className="videoTextbox">
                                                                    <div className="videobox position-relative">
                                                                        <img className="w-100" src="../images/Navigating.jpg" alt="" />
                                                                    </div>
                                                                    <div className="w-100">
                                                                       <div className="position-relative ms-4">
                                                                            <div className="mb-2">
                                                                                <span className="labletagtime">
                                                                                <img style={{width:'21px'}} src="../images/ion_time-outline.svg" alt="" /> Will be Deleted 7 days</span>
                                                                                <span className="edittime mb-5 ms-2">Edited : 43 minutes ago</span>
                                                                            </div>
                                                                            <p className="mb-0">Navigating the Digital Landscape : A Comprehensive Guide to E Commerce Success</p>
                                                                       </div>
                                                                    </div>
                                                                    <div className="w-25 text-center">
                                                                        <a href="#" className="" data-bs-toggle="dropdown" aria-expanded="false" >
                                                                                <img style={{width:'37px'}} src="../images/threedot.svg" alt="" />
                                                                        </a>
                                                                        <ul class="dropdown-menu videodropdown">
                                                                            <li><a class="dropdown-item" href="#">Edit </a></li>
                                                                            <li><a class="dropdown-item" href="#">Copy </a></li>
                                                                            <li><a class="dropdown-item" href="#">Add to cart</a></li>
                                                                            <li><a class="dropdown-item" href="#">Remove </a></li>
                                                                            <li><a class="dropdown-item" href="#">Details </a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <button class="btn btn-first1 w-50"><span><img style={{width:'16px'}} src="../images/editvideo.svg" alt="" />Edit Video</span></button>
                                                                </div>
                                                                <div className="videoTextbox">
                                                                    <div className="videobox position-relative">
                                                                        <img className="w-100" src="../images/Navigating.jpg" alt="" />
                                                                    </div>
                                                                    <div className="w-100">
                                                                       <div className="position-relative ms-4">
                                                                            <div className="mb-2">
                                                                                <span className="labletagtime">
                                                                                <img style={{width:'21px'}} src="../images/ion_time-outline.svg" alt="" /> Will be Deleted 7 days</span>
                                                                                <span className="edittime mb-5 ms-2">Edited : 43 minutes ago</span>
                                                                            </div>
                                                                            <p className="mb-0">Navigating the Digital Landscape : A Comprehensive Guide to E Commerce Success</p>
                                                                       </div>
                                                                    </div>
                                                                    <div className="w-25 text-center">
                                                                        <a href="#" className="" data-bs-toggle="dropdown" aria-expanded="false" >
                                                                                <img style={{width:'37px'}} src="../images/threedot.svg" alt="" />
                                                                        </a>
                                                                        <ul class="dropdown-menu videodropdown">
                                                                            <li><a class="dropdown-item" href="#">Edit </a></li>
                                                                            <li><a class="dropdown-item" href="#">Copy </a></li>
                                                                            <li><a class="dropdown-item" href="#">Add to cart</a></li>
                                                                            <li><a class="dropdown-item" href="#">Remove </a></li>
                                                                            <li><a class="dropdown-item" href="#">Details </a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <button class="btn btn-first1 w-50"><span><img style={{width:'16px'}} src="../images/editvideo.svg" alt="" />Edit Video</span></button>
                                                                </div>
                                                                <div className="videoTextbox">
                                                                    <div className="videobox position-relative">
                                                                        <img className="w-100" src="../images/Navigating.jpg" alt="" />
                                                                    </div>
                                                                    <div className="w-100">
                                                                       <div className="position-relative ms-4">
                                                                            <div className="mb-2">
                                                                                <span className="labletagtime">
                                                                                <img style={{width:'21px'}} src="../images/ion_time-outline.svg" alt="" /> Will be Deleted 7 days</span>
                                                                                <span className="edittime mb-5 ms-2">Edited : 43 minutes ago</span>
                                                                            </div>
                                                                            <p className="mb-0">Navigating the Digital Landscape : A Comprehensive Guide to E Commerce Success</p>
                                                                       </div>
                                                                    </div>
                                                                    <div className="w-25 text-center">
                                                                        <a href="#" className="" data-bs-toggle="dropdown" aria-expanded="false" >
                                                                                <img style={{width:'37px'}} src="../images/threedot.svg" alt="" />
                                                                        </a>
                                                                        <ul class="dropdown-menu videodropdown">
                                                                            <li><a class="dropdown-item" href="#">Edit </a></li>
                                                                            <li><a class="dropdown-item" href="#">Copy </a></li>
                                                                            <li><a class="dropdown-item" href="#">Add to cart</a></li>
                                                                            <li><a class="dropdown-item" href="#">Remove </a></li>
                                                                            <li><a class="dropdown-item" href="#">Details </a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <button class="btn btn-first1 w-50"><span><img style={{width:'16px'}} src="../images/editvideo.svg" alt="" />Edit Video</span></button>
                                                                </div>
                                                                <div className="videoTextbox">
                                                                    <div className="videobox position-relative">
                                                                        <img className="w-100" src="../images/Navigating.jpg" alt="" />
                                                                    </div>
                                                                    <div className="w-100">
                                                                       <div className="position-relative ms-4">
                                                                            <div className="mb-2">
                                                                                <span className="labletagtime">
                                                                                <img style={{width:'21px'}} src="../images/ion_time-outline.svg" alt="" /> Will be Deleted 7 days</span>
                                                                                <span className="edittime mb-5 ms-2">Edited : 43 minutes ago</span>
                                                                            </div>
                                                                            <p className="mb-0">Navigating the Digital Landscape : A Comprehensive Guide to E Commerce Success</p>
                                                                       </div>
                                                                    </div>
                                                                    <div className="w-25 text-center">
                                                                        <a href="#" className="" data-bs-toggle="dropdown" aria-expanded="false" >
                                                                                <img style={{width:'37px'}} src="../images/threedot.svg" alt="" />
                                                                        </a>
                                                                        <ul class="dropdown-menu videodropdown">
                                                                            <li><a class="dropdown-item" href="#">Edit </a></li>
                                                                            <li><a class="dropdown-item" href="#">Copy </a></li>
                                                                            <li><a class="dropdown-item" href="#">Add to cart</a></li>
                                                                            <li><a class="dropdown-item" href="#">Remove </a></li>
                                                                            <li><a class="dropdown-item" href="#">Details </a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <button class="btn btn-first1 w-50"><span><img style={{width:'16px'}} src="../images/editvideo.svg" alt="" />Edit Video</span></button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                         
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        </div>
                                </div>
                               
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}
export default EditPanelList;