// import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';
function Sidebar() {
    // const [loading, setloading] = useState("")
    const navigate = useNavigate();
    // const handleLogout = async (e) => {
    //     e.preventDefault();
    //     const userType = localStorage.getItem('User_Type');
    //     const userId = localStorage.getItem('User_Id');
    //     let logoutUrl = '';
    //     try {

    //         // const response = await axios.post('http://192.168.1.79:8000/Contributor/Logout_Contributor');/
    //         // const response = await axios.post('http://192.168.1.77:8000/Organization/Logout_Organization');

    //         if (userType === 'Contributor') {
    //             logoutUrl = 'http://192.168.1.77:8000/Contributor/Logout_Contributor';
    //             localStorage.removeItem('User_Id');
    //             localStorage.removeItem('User_Type');

    //             navigate("/ConritutorLogin");
    //         } else if (userType === 'Organization') {
    //             logoutUrl = 'http://192.168.1.77:8000/Organization/Logout_Organization';
    //             localStorage.removeItem('User_Id');
    //             localStorage.removeItem('User_Type'); 

    //             navigate("/login");
    //         }

    //         const response = await axios.post(logoutUrl);


    //     if (response.data.status === 1) {
    //         localStorage.removeItem('User_Id');
    //         localStorage.removeItem('User_Type');
    //         navigate("/login")
    //         }
    //     } catch (error) {
    //         console.error('Error during logout:', error);
    //     }
    // };
    

    const handleLogout = async (e) => {
        e.preventDefault();
        // e.stopPropagation();

        const confirmed = await Swal.fire({
            title: 'Are you sure you want to log out?',
            text: 'You will be logged out of your account.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout',
            allowOutsideClick: false,
            // willClose: (dismiss) => { 
            //     if (!confirmed?.isConfirmed) {
            //         
            //         console.log("Logout canceled by user");
            //     }
            // }
        });

        const userType = localStorage.getItem('User_Type');
        const userId = localStorage.getItem('User_Id');
        console.log("User Type:", userType);
        console.log("User ID:", userId);

        try {
            if (userId) {
                if (confirmed?.value) { 
                    if (userType === 'Organization') {
                        // Swal.fire({
                        //     title: "Logout Successful!",
                        //     text: "Logout Successful",
                        //     icon: "success"
                        // })
                        // .then(() => {
                            localStorage.removeItem('User_Id');
                            localStorage.removeItem('User_Type');
                            navigate("/organization-login");
                        // });
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


    return (
        <>
        

            <div class="sidebar dbsidebar d-lg-block d-none" id="sidebar">
                <div class="slimScrollDiv"><div class="sidebar-inner slimscroll" >
                    <div id="sidebar-menu" class="sidebar-menu">
                        <nav class="greedys sidebar-horizantal submenu">
                            <ul class="list-inline-item list-unstyled links w-100">
                                        <li className="active">
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge homeicon">
                                                        {/* <img src={"/images/home1.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> Home</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge history">
                                                        {/* <img src={"/images/historyi.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> History</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge dissemination">
                                                        {/* <img src={"/images/user-h.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> Disperse Know</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge analytics">
                                                        {/* <img src={"/images/gp.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> Analytics</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge editpanel">
                                                        {/* <img src={"/images/signature.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> Edit Panel</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge cart">
                                                        {/* <img src={"/images/woo.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> Cart</span>
                                                </div>
                                            </a>
                                        </li>




                                        {/* <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge">
                                                        <img src={"/images/notification.svg"} alt="" />
                                                    </div>
                                                    <span className="ms-3"> Notification</span>
                                                </div>
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a href="#" onClick={handleLogout}>
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge">
                                                        <img src={"/images/logout.svg"} alt="" />
                                                    </div>
                                                    <span className="ms-3">Log Out</span>
                                                </div>
                                            </a>
                                        </li> */}

                                        
                            </ul>
                            
                        </nav>
                        <div className="disperse"> 
                                        <div className="text-center mb-3">
                                            <h5>Disperse </h5>
                                        </div>
                                        <p>
                                        Change the behaviour of your people. By subscribing page. 
                                        </p>

                                            <a href="#">Subscribe Now</a>
                            </div>

                    </div>
                </div><div class="slimScrollBar"></div></div>
            </div>
            <div className="mobileSidebar">

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    <nav class="greedys sidebar-horizantal submenu">
                            <ul class="list-inline-item list-unstyled links w-100">
                               
                              
                                  
                                        <li className="active">
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge homeicon">
                                                        {/* <img src={"/images/home1.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> Home</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge history">
                                                        {/* <img src={"/images/historyi.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> History</span>
                                                </div>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge dissemination">
                                                        {/* <img src={"/images/user-h.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> Disperse Know</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge analytics">
                                                        {/* <img src={"/images/gp.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> Analytics</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge editpanel">
                                                        {/* <img src={"/images/signature.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> Edit Panel</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge cart">
                                                        {/* <img src={"/images/woo.svg"} alt="" /> */}
                                                    </div>
                                                    <span className="ms-3"> Cart</span>
                                                </div>
                                            </a>
                                        </li>




                                        {/* <li>
                                            <a href="/">
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge">
                                                        <img src={"/images/notification.svg"} alt="" />
                                                    </div>
                                                    <span className="ms-3"> Notification</span>
                                                </div>
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a href="#" onClick={handleLogout}>
                                                <div className="d-flex align-items-center tabclick">
                                                    <div className="menutabimge">
                                                        <img src={"/images/logout.svg"} alt="" />
                                                    </div>
                                                    <span className="ms-3">Log Out</span>
                                                </div>
                                            </a>
                                        </li> */}

                                        
                            </ul>
                            
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Sidebar;

