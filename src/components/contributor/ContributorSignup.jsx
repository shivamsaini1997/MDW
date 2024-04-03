import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import axios from "axios";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from "@mui/material/Slide";
import CloseIcon from '@mui/icons-material/Close';

import { useNavigate } from "react-router-dom";
function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}


function ConSignUp() {
    // const [password, setPassword] = useState("")
    // const [email, setEmail] = useState("")
    const [confirmpassword, setConfrirmpassword] = useState("")
    const [showPass, setShowPass] = useState(false);
    const [loading, loadingSet] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm({
        defaultValues: {

        },
    })
    const password = watch('password', '');
    const confirmPassword = watch('confirmPassword', '');

    // const [org, setOrg] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);


    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    const onSubmit = async (data, e) => {
        console.log('Form data submitted:', data);
        e.preventDefault();
        loadingSet(true)
// const fullname =  `${data.firstname}  ${data.lastname}`;
// console.log("nameee---->",fullname);

//   sessionStorage.setItem('UserName',fullname);

//   const isLogin = {
//     email: data.email,
//     password: data.password

//   }

//   console.log("hello-->",isLogin)
//  sessionStorage.setItem('loginData', JSON.stringify(isLogin));
        try {

            const res = await axios.post("http://192.168.1.79:8000/Contributor/Contributor_Registraion", {
                first_name: data.firstname,
                last_name: data.lastname,
                email: data.email,
                mobile_no: data.mobile,
                password: data.password
            })


            console.log("messagesdfgh", res.data.msg)
            console.log("status---->", res.data.status)

            if (res.data.status) {

                handleClick();
                setMessage(res.data.msg);
                const loginResponse = await axios.post("http://192.168.1.79:8000/Contributor/Contributor_Login", {
                    email: data.email,
                    password: data.password
                });

                console.log(loginResponse.data);
                if (loginResponse.data.status) {
                    // Redirect to the dashboard
                    navigate("/");
                }
            } else {
                if (res.data.msg) {
                    setOpen(true);
                    setMessage(res.data.msg);
                }
            }


            // } else {

            //     if (res.data.msg) {

            //         setOpen(true);
            //         setMessage(res.data.msg); 
            //     }
            // }
            // navigate("/");

        } catch (error) {
            console.error("Error during registration:", error);

        }
        loadingSet(false)



        reset();
    };

    const handleClick = () => {
        setOpen(true)
       
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={10000}
                onClose={(e) => setOpen(false)}
                message={message}
                TransitionComponent={TransitionUp}
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={(e) => setOpen(false)}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
            <section className="formsubmit position-relative">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 text-start d-grid">
                            <div>
                                <h2>Literacy Tool</h2>
                                <p>A <b>dynamic and user-friendly skilling platform</b> designed to empower marginalized women and women enterprises.</p>
                            </div>
                            <div className="align-items-end img-form">
                                <img src={"/images/formiamge.png"} alt="logo" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 offset-xl-1 ">
                            <div className="literacytoolform ">
                                <div className="text-center mb-4">
                                    <h3>Sign Up</h3>
                                </div>
                                <Form onSubmit={(e) => handleSubmit((data) => onSubmit(data, e))(e)}>
                                    <Row className="mb-3">
                                        {/* <Form.Group as={Col} md="12 mb-3" controlId="validationCustom01">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                  
                                  
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group> */}
                                        <Box display={"flex"}  className="p-0"
                                        >
                                            <TextField className="w-100 rounded-circle"
                                              
                                                label="First Name"
                                                {...register('firstname', {
                                                    required: 'firstname is required',
                                                    minLength: {
                                                        value: 3,
                                                        message: 'firstname must be at least 3 characters',
                                                    },
                                                })}
                                                error={Boolean(errors.firstname)}
                                                helperText={errors.firstname?.message}
                                                margin="normal"
                                                sx={{ borderRadius: '50%', marginRight: 2 }}

                                            />
                                            <TextField className="w-100 me-0"
                                                
                                                label="Last Name"
                                                {...register('lastname', {
                                                    required: 'lastname is required',
                                                    minLength: {
                                                        value: 3,
                                                        message: 'lastname must be at least 3 characters',
                                                    },
                                                })}
                                                error={Boolean(errors.lastname)}
                                                helperText={errors.lastname?.message}
                                                margin="normal"
                                                sx={{ borderRadius: '50%', marginRight: 2 }}

                                            />
                                        </Box>

                                        <TextField
                                            fullWidth
                                            type="email"
                                            label="Email"
                                          
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,  
                                                    message: 'Invalid email',
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: 'Email must be at least 3 characters',
                                                },
                                            })}
                                            error={Boolean(errors.email && errors.email.type === 'pattern')}
                                            helperText={errors.email?.message}
                                            margin="normal"
                                        />
                                        {/* <Form.Group as={Col} md="12 position-relative mb-3" controlId="validationCustom02">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control className=""
                                                required
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />





                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group> */}
                                      

                                        <TextField
                                            fullWidth
                                            type="tel"
                                            label="Mobile"
                                            {...register('mobile', {
                                                required: 'Mobile Number is required',
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: 'Mobile Number must contain only numeric digits',
                                                },
                                              
                                                maxLength: {
                                                    value: 10,
                                                    message: 'Mobile Number must be exactly 10 digits',
                                                },
                                            })}
                                            error={Boolean(errors.mobile)}
                                            helperText={errors.mobile?.message}
                                            margin="normal"   
                                            inputProps={{
                                                maxLength: 10,
                                                
                                            }}
                                        />

                                        <TextField
                                            fullWidth
                                            type={showPassword ? 'text' : 'password'}
                                            label="Password"
                                            {...register('password', {
                                                required: 'Password is required',
                                                minLength: {
                                                    value: 6,
                                                    message: 'Password must be at least 6 characters',
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
                                                    message: 'Password must contain at least one uppercase letter, one lowercase letter, and special characters',
                                                },
                                            })}
                                            error={Boolean(errors.password)}
                                            helperText={errors.password?.message}
                                            margin="normal"
                                            sx={{ mt: 2 }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        {/* <Form.Group as={Col} md="12 position-relative" controlId="validationCustom02">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control className=""
                                                required
                                                type="password"
                                                value={confirmpassword}
                                                onChange={(e) => setConfrirmpassword(e.target.value)}
                                            />
                                            <Link  to="" ><img className="passwordshowicon" src={"/images/password-show.png"}/></Link> 


                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>


                                        </Form.Group> */}

                                        <TextField
                                            fullWidth
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            label="Confirm Password"
                                            {...register('confirmPassword', {
                                                required: 'Confirm Password is required',
                                                validate: (value) => value === password || 'Passwords do not match',
                                            })}
                                            error={Boolean(errors.confirmPassword)}
                                            helperText={errors.confirmPassword?.message}
                                            margin="normal"
                                            sx={{ mt: 2 }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={handleToggleConfirmPasswordVisibility} edge="end">
                                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />


                                    </Row>

                                    <Button type="submit"
                                        className="formbtn mt-3 btn btn-primary text-white"
                                        disabled={loading}>

                                        {loading ? "Please wait.." : "Sign Up"}
                                    </Button>


                                    <div className="text-center sig-up mt-4">
                                        <p>Already have an account?  <Link to="/ConritutorLogin "><b> Sign in  </b></Link> </p>
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
export default ConSignUp;