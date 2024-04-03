
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Searchbar from "../include/searchbar";
import { useNavigate } from "react-router-dom";
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';
import '../../assets/css/Header.css';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const baseURL = "http://192.168.1.71:8000";

function OrgHeaderDb() {
    const navigate = useNavigate();
    const userId = localStorage.getItem('User_Id');
    const [profiledata, setProfileData] = useState("");

    const handleLogout = async (e) => {
        e.preventDefault();
        const confirmed = await Swal.fire({
            title: 'Are you sure you want to log out?',
            text: 'You will be logged out of your account.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout',
            allowOutsideClick: false,
        });

        const userType = localStorage.getItem('User_Type');
        const userId = localStorage.getItem('User_Id');

        try {
            if (userId) {
                if (confirmed?.value) {
                    if (userType === 'Organization') {
                        localStorage.removeItem('User_Id');
                        localStorage.removeItem('User_Type');
                        navigate("/organization-login");
                    } else {
                        Swal.fire({
                            title: "Logout Failed!",
                            text: "Logout Failed",
                            icon: "error"
                        });
                    }
                } else {
                    console.log("Logout canceled by user");
                }
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Organization not logged in.",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Error during logout:', error);
            Swal.fire({
                title: "Logout Error!",
                text: "An error occurred while logging out.",
                icon: "error"
            });
        }
    };


  
    const handleProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/Organization/Get_Organization_Details`, {
                user_id: userId
            });
    
            console.log("API Response:", response); 
            if (response.data) {
                console.log("Organization details:", response.data);
                const profile = response.data;
                console.log("Profile before state update:", profile);
                setProfileData(profile);
                console.log("Profile data after state update:", profiledata);
            } else {
                console.error("Empty response data");
            }
    
            if (response.status === 200) {
                navigate("/organization-profile");
            } else {
                console.error("Error fetching organization details");
            }
        } catch (error) {
            console.error('Error during profile fetch:', error);
        }
    };

    useEffect(() => {
        console.log("Profile data after Arti state update:", profiledata);
    }, [profiledata]);

    return (
        <>
            <div className="headerdb py-3 d-lg-block d-none">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-2">
                        <button class="btn position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            <h4>Literacy Tool</h4>
                        </button>
                    </div>
                    <div className="col-lg-3 ps-3">
                        <h4 className="">Home</h4>
                    </div>
                    <div className="col-lg-4 col-9">
                        <Searchbar />
                    </div>
                    <div className="col-lg-3 col-2 text-end dropdown">
                        <div className="d-flex justify-content-end">
                            <Link to="#" className="">
                                <img className="notif" src="../images/notif.gif" alt="notification" />
                            </Link>
                            <Link to="#" class="">
                                <button className="profiletext" data-bs-toggle="dropdown" aria-expanded="false">
                                    <p>AA</p>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/organization-profile" onClick={handleProfile}>Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/organization-login">Billing</Link></li>
                                    <li><Link className="dropdown-item" to="#">Change Password</Link></li>
                                    <li><Link className="dropdown-item" to="#" onClick={handleLogout}>Log out</Link></li>
                                </ul>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        <div className="mobileHeader py-2 position-fixed w-100 top-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="SidebarIcon">
                                <FontAwesomeIcon data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" icon={faBars} />
                            </div>
                            <div className="col-lg-5 col-9">
                                <Searchbar />
                            </div>
                            <div className="d-flex justify-content-end">
                            <Link to="#" className="">
                                <img className="notif" src="../images/notif.gif" alt="notification" />
                            </Link>
                            <Link to="#" class="">
                                <button className="profiletext" data-bs-toggle="dropdown" aria-expanded="false">
                                    <p>AA</p>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/organization-profile" onClick={handleProfile}>Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/organization-login">Billing</Link></li>
                                    <li><Link className="dropdown-item" to="#">Change Password</Link></li>
                                    <li><Link className="dropdown-item" to="#" onClick={handleLogout}>Log out</Link></li>
                                </ul>
                            </Link>
                        </div>
                        </div>

                    </div>
                </div>
            </div>

        
        </div>
        </>
    );
}

export default OrgHeaderDb;


