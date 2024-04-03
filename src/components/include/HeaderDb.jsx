// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./searchbar";
import '../../assets/css/sidebar.css';

function HeaderDb() {



    return (
        <div className="headerdb py-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-3">
                        <button class="btn position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop"  >
                            {/* <img className="bars" src={"/images/bars-solid.svg"} /> */}
                            <h4>Literacy Tool</h4>
                        </button>
                    </div>

                    <div className="col-lg-6 col-9">
                        <Searchbar />
                    </div>
                    
                    <div className="col-lg-3 col-2 text-end dropdown">
                        {/* <a href="#" class="">
                            <button className="profiletext"  data-bs-toggle="dropdown" aria-expanded="false">
                                <p>AA</p>
                            </button>
                            <ul class="dropdown-menu">
                              
                                <li><Link class="dropdown-item" to="/Orgprofile">Profile</Link></li>
                                <li><Link class="dropdown-item" to="#">Billing</Link></li>
                                <li><Link class="dropdown-item" to="#">Change Password</Link></li>
                                <li><Link class="dropdown-item" to="#">Log out</Link></li>
                            </ul>
                        </a> */}

                        <Link to="#" class="">
                            <button className="profiletext" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>AA</p>
                            </button>
                            <ul class="dropdown-menu">
                                {/* <li><a class="dropdown-item" href="/Orgprofile">Profile</a></li> */}
                                <li><Link class="dropdown-item" to="/organization-profile">Profile</Link></li>
                                <li><Link class="dropdown-item" to="/login">Billing</Link></li>
                                <li><Link class="dropdown-item" to="#">Change Password</Link></li>
                                <li><Link class="dropdown-item" to="#">Log out</Link></li>
                            </ul>
                        </Link>


                    </div>
                </div>
            </div>
        </div>

    );
}

export default HeaderDb;

