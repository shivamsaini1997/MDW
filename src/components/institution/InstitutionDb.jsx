import React from "react";
import HeaderDb from "../include/HeaderDb";
import Sidebar from "../include/Sidebar";
import ContentCard from "../include/ContentCard";
import Contentcardfull from "../include/Contectcardfull";


function Institution() {

    // const userType = localStorage.getItem('User_Type');
    // const userId = localStorage.getItem('User_Id');
    // console.log("userid",userType,userId)
    // if (userType && userId){

    // }
    return (
        <>
            <Sidebar />
            <HeaderDb />
            <div className="body-header pt-5">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Savings</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Investments</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">E-commerce</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <img className="dbbaner" src={"./images/OIP.jpg"} alt="" />
                                        </div>
                                        <div className="col-lg-4">
                                            <img className="dbbaner" src={"./images/bannerdb.jpg"} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <h3>Recommended</h3>
                                        <div className="col-lg-3 col-md-6">
                                            <ContentCard />
                                        </div>
                                        
                                    </div>
                                    <div className="row mt-4">
                                        <h3>Trending</h3>
                                        <div className="col-lg-3 col-md-6">
                                            <ContentCard />
                                        </div>
                                        
                                    </div>
                                    <div className="row mt-4">
                                        <h3>Module</h3>
                                        <div className="col-lg-3 col-md-6">
                                            <ContentCard />
                                        </div>
                                        
                                    </div>
                                    {/* <div className="row">
                                        <Contentcardfull/>
                                    </div> */}
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
                                <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
                            </div>
                        </div>




                    </div>
                </div>

            </div>
        </>
    );
}
export default Institution;