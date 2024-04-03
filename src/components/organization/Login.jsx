import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import { Link } from "react-router-dom";
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link} from "react-router-dom";


function Login() {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    

     const validateForm = () => {
        const errors = {};
        if (!email.trim()) {
            errors.email = "Email is required";
        } else {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!emailRegex.test(email)) {
                errors.email = "Enter a valid email address";
            }
        }
        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 5 || password.length > 10) {
            errors.password = "Password must be between 5 and 10 characters long";
        } else {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{5,10}$/;
            if (!passwordRegex.test(password)) {
                errors.password = "Password must contain at least one lowercase letter, one uppercase letter, one special character";
            }
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const Validationemail = (e) => {
        let value = e.target.value;
        value = value.replace(/\s+/g, '');
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!value.trim()) {
            setErrors({ ...errors, email: "Email is required" });
        } else if (!emailRegex.test(value)) {
            setErrors({ ...errors, email: "Enter a valid email address" });
        } else {
            setErrors({ ...errors, email: "" });
        }
        setEmail(value);
    };

    const Validationpassword = (e) => {
        let value = e.target.value;
        value = value.replace(/\s/g, '');
        setPassword(value);
        if (!value.trim()) {
            setErrors({ ...errors, password: "Password is required" });
        } else if (value.length < 5 || value.length > 10) {
            setErrors({ ...errors, password: "Password must be between 5 and 10 characters long" });
        } else {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{5,10}$/;
            if (!passwordRegex.test(value)) {
                setErrors({ ...errors, password: "Password must contain at least one lowercase letter, one uppercase letter, one special character" });
            } else {
                setErrors({ ...errors, password: "" });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) return;
        setIsLoading(true);
       

        try {
            const OrgloginResponse = await axios.post(`${baseUrl}/Organization/Organization_Login`, {
                email: email,
                password: password
            });
            if (OrgloginResponse.data.status === 1) {
                const { id } = OrgloginResponse.data.user_details;
                console.log(OrgloginResponse.data.user_details,"user dftat");
                const userType = 'Organization';
                localStorage.setItem('User_Id', id);
                localStorage.setItem('User_Type', userType);
                // navigate("/organization-dashboard");
                // history.push("/organization-dashboard");
                window.location.assign(
                    "/organization-dashboard"
                   );
            } else {
                toast.error(OrgloginResponse.data.msg);
            }
        } catch (error) {
            console.log("user not login", error);
            toast.error(error.message);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        const userId = localStorage.getItem('User_Id');
        const userType = localStorage.getItem('User_Type');
        if (userId && userType === 'Organization') {
            navigate("/organization-dashboard");
           
        } 
    }, []);
    return (
        <>
            <ToastContainer />
            <section className="formsubmit position-relative">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-6 text-start d-grid">
                            <div>
                                <h2>Literacy Tool</h2>
                                <p>A <b>dynamic and user-friendly skilling platform</b> designed to empower marginalized women and women enterprises.</p>
                            </div>
                            <div className="align-items-end img-form">
                                <img src={"/images/formiamge.png"} alt="logo" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 offset-xl-1">
                            <div className="literacytoolform mt-lg-5">
                                <div className="text-center mb-4">
                                    <h3>Login</h3>
                                </div>
                                <Form onSubmit={handleSubmit}  >
                                    <Row className="mb-3">
                                     <Form.Group as={Col} md="12 position-relative mb-3" >
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={email}
                                                onChange={Validationemail}
                                                autoComplete="off"
                                                placeholder="Enter Email "

                                                
                                            />
                                            
                                            {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                                        </Form.Group>
                                       

                                        <Form.Group as={Col} md="12 position-relative mb-3" >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                               
                                                onChange={Validationpassword}
                                                autoComplete="off"
                                                placeholder="Enter Password"
                                                maxLength={10} 
                                                />
                                            <div className="passwordshowicon" onClick={handleTogglePassword}>
                                                {showPassword ? <EyeFill /> : <EyeSlashFill />}
                                            </div>
                                            
                                            {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                                        </Form.Group>

                                    </Row>

                                    
                                    <Button type="submit" className="formbtn mt-3" disabled={isLoading} >
                                        {isLoading ? "Login...." : "Login"}</Button>

                                    <div className="text-center sig-up mt-4">
                                        <p>Don’t have an account?  <Link to="/organization-signup "><b>Sign up</b></Link> </p>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Login;