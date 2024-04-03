import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';



function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    
    const [loading, loadingSet] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!name.trim()) {
            errors.name = "Institution Name is required";
        }

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!email.trim() || !emailRegex.test(email)) {
            errors.email = "Invalid email address";
        }

        const phoneRegex = /^\d{10}$/;
        if (!phone.trim() || !phoneRegex.test(phone)) {
            errors.phone = "Phone number must be 10 digits";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
        if (!passwordRegex.test(password)) {
            errors.password = "Password must contain at least one lowercase letter, one uppercase letter, one special character, and be at least 8 characters long";
        }

        if (password !== confirmpassword) {
            errors.confirmpassword = "Passwords do not match";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        loadingSet(true)

        const isValid = validateForm();
        if (!isValid) return;
       
        const formData = {
            name,
            email,
            phone,
            password,
            confirmpassword
        };
        console.log("formData", formData);
      





        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmpassword("");
        loadingSet(false)
    };

  
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <section className="formsubmit position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-start d-grid">
                            <div>
                                <h2>Literacy Tool</h2>
                                <p>A <b>dynamic and user-friendly skilling platform</b> designed to empower marginalized women and women enterprises.</p>
                            </div>
                            <div className=" align-items-end img-form">
                                <img src={"/images/formiamge.png"} alt="logo" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 offset-xl-1">
                            <div className="literacytoolform">
                                <div className="text-center mb-4">
                                    <h3>Sign Up</h3>
                                </div>
                                <Form onSubmit={handleSubmit}  >
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="12 mb-3">
                                            <Form.Label>Institution Name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                isInvalid={!!errors.name}

 
                                            /> 
                                             <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>

                                            <Form.Group as={Col} md="12 mb-3" ></Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                required
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                isInvalid={!!errors.email}


                                            />
                                               <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                            <Form.Group as={Col} md="12 mb-3" ></Form.Group>
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                required
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                isInvalid={!!errors.phone}


                                            />
                                               <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>

                                        </Form.Group>
                                     
                                       
                                        <Form.Group as={Col} md="12 position-relative mb-3" >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control className=""
                                                required
                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                isInvalid={!!errors.password}
                                            />
                                            {/* <Link  to="" ><img className="passwordshowicon" src={"/images/password-show.png"}/></Link>
                                        
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                            <div className="passwordshowicon" onClick={handleTogglePassword}>
                                                {showPassword ? <EyeFill /> : <EyeSlashFill />}
                                            </div>
                                            {/* <Form.Control.Feedback type="invalid">
                                                Password must be at least 6 characters long.
                                            </Form.Control.Feedback> */}
                                             <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                        </Form.Group>
                                      
                                        <Form.Group as={Col} md="12 position-relative" >
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control className=""
                                                required
                                                type={showPassword ? 'text' : 'password'}
                                                value={confirmpassword}
                                                onChange={(e) => setConfirmpassword(e.target.value)}
                                                isInvalid={!!errors.confirmpassword}
                                            />
                                            {/* <Link  to="" ><img className="passwordshowicon" src={"/images/password-show.png"}/></Link>
                                            
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                            <div className="passwordshowicon" onClick={handleTogglePassword}>
                                                {showPassword ? <EyeFill /> : <EyeSlashFill />}
                                            </div>
                                            {/* <Form.Control.Feedback type="invalid">
                                                Password must be at least 6 characters long.
                                            </Form.Control.Feedback> */}
                                              <Form.Control.Feedback type="invalid">{errors.confirmpassword}</Form.Control.Feedback>
                                        </Form.Group>
                                       

                                    </Row>

                                    <Button type="submit" className="formbtn mt-3" >

                                       Signup</Button>

                                    <div className="text-center sig-up mt-4">
                                        <p>Already have an account?  <Link to="/InstitutionLogin "><b> Sign in  </b></Link> </p>
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
export default SignUp;