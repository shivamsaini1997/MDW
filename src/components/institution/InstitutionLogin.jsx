import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';



function Login() {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        const errors = {};



        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!email.trim() || !emailRegex.test(email)) {
            errors.email = "Invalid email address";
        }


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
        if (!passwordRegex.test(password)) {
            errors.password = "Password must contain at least one lowercase letter, one uppercase letter, one special character, and be at least 8 characters long";
        }



        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // loadingSet(true)

        const isValid = validateForm();
        if (!isValid) return;

        const formData = {
           
            email,
          
            password,
            
        };
        console.log("formData", formData);

        setEmail("");

        setPassword("");

    };


    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <section className="formsubmit position-relative">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-6 text-start d-grid">
                            <div>
                                <h2>Literacy Tool</h2>
                                <p>A <b>dynamic and user-friendly skilling platform</b> designed to empower marginalized women and women enterprises.</p>
                            </div>
                            <div className="d-grid align-items-end img-form">
                                <img src={"/images/formiamge.png"} alt="logo" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 offset-xl-1">
                            <div className="literacytoolform">
                                <div className="text-center mb-4">
                                    <h3>Login</h3>
                                </div>
                                <Form onSubmit={handleSubmit} >
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="12 mb-3" controlId="validationCustom01">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                required
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                isInvalid={!!errors.email}


                                            />
                                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12 position-relative" controlId="validationCustom02">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control className=""
                                                required
                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                isInvalid={!!errors.password}
                                            />
                                            {/* <Link to="" ><img className="passwordshowicon" src={"/images/password-show.png"} /></Link> */}
                                            <div className="passwordshowicon" onClick={handleTogglePassword}>
                                                {showPassword ? <EyeFill /> : <EyeSlashFill />}
                                            </div>

                                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                            <div className="forgetpassword text-end mt-0">
                                                <Link to="/">Forgot Password</Link>
                                            </div>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>

                                    </Row>

                                    <Button type="submit" className="formbtn mt-3">Log in</Button>

                                    <div className="text-center sig-up mt-4">
                                        <p>Don’t have an account?  <Link to="/institutionSignup "><b>Sign up</b></Link> </p>
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