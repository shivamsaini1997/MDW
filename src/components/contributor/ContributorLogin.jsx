import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';



function ConLogin(){
    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [loading,loadingSet] = React.useState("")
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); 


    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(email));
    };

    const validatePassword = () => {
        setIsValidPassword(password.length >= 6); // Set your password validation criteria here
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

//     const details =  `${data.firstname}  ${data.lastname}`;
// console.log("nameee---->",fullname);

//   sessionStorage.setItem('UserName',fullname);

    const Loginpage = async(e)=>{
        // console.log("logindata-->",data)
        e.preventDefault();
        loadingSet(true)
        validateEmail();
        validatePassword();
        setEmail("")
        setPassword("")

        // if (!isValidEmail || !isValidPassword) {
        //     return;
        // }
      
        try{

            const loginResponse = await axios.post("http://192.168.1.79:8000/Contributor/Contributor_Login", {
                email: email,
                password: password}
                )
                console.log("loginResponse-->",loginResponse.data)
                if(loginResponse.data.status === 1 ){

                    const { id} = loginResponse.data.user_details;
                    const userType = 'contributor'

                  
                    localStorage.setItem('User_Id', id);
                   localStorage.setItem('User_Type', userType);
                    navigate("/");

                }
        }
        catch(error){
            console.log("user not login",error)
        }
        loadingSet(false);


    }

    return(
        <>
            <section className="formsubmit p-lg-0 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-start d-grid">
                            <div>
                                <h2>Literacy Tool</h2>
                                <p>A <b>dynamic and user-friendly skilling platform</b> designed to empower marginalized women and women enterprises.</p>
                            </div>
                           <div className="d-grid align-items-end img-form">
                                <img src={"/images/formiamge.png"}  alt="logo" />
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 offset-xl-1 ">
                            <div className="literacytoolform mt-lg-5">
                               <div className="text-center mb-4">
                               <h3>Login</h3>
                               </div>
                            <Form onSubmit={Loginpage}  >
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12 mb-3" controlId="validationCustom01">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        onBlur={validateEmail}
                                        isInvalid={!isValidEmail}

                                  
                                  
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12 position-relative" controlId="validationCustom02">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control className=""
                                            required
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                            onBlur={validatePassword}
                                            isInvalid={!isValidPassword}
                                        />
                                        {/* <Link to="" ><img className="passwordshowicon" src={"/images/password-show.png"} /></Link> */}
                                        <div className="passwordshowicon" onClick={handleTogglePassword}>
                                                {showPassword ? <EyeFill /> : <EyeSlashFill />}
                                            </div>
                                            <Form.Control.Feedback type="invalid">
                                                Password must be at least 6 characters long.
                                            </Form.Control.Feedback>
                                        <div className="forgetpassword text-end mt-0">
                                            <Link to="/">Forgot Password</Link>
                                        </div>
                                    {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                                    </Form.Group>
                                    
                                </Row>
                                
                                <Button type="submit" className="formbtn mt-3">{loading ? 'Logging in...' : 'Log in'}</Button>

                                <div className="text-center sig-up mt-4">
                                    <p>Don’t have an account?  <Link to="/ConritutorSignUp"><b>Sign up</b></Link> </p>
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
export default ConLogin;