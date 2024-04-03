import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, Navigate } from "react-router-dom";
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";


import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import OrganizationDb from "./OrganizationDb";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [organizationType, setOrganizationType] = useState("Institution");
   
    const [bankType, setBankType] = useState([]);
    const [ngoType, setNgoType] = useState([]);
    const [selectedBankName, setSelectedBankName] = useState("");
    const [message, setMessage] = useState("");
    const [bankName, setBankName] = useState([]);
    const [ngoName, setNgoName] = useState("");
    const [ngoNameError, setNgoNameError] = useState("");
   
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('');
  
    const [isLoading, setIsLoading] = useState(false);
    const baseURL = process.env.REACT_APP_BASE_URL;



    const validateForm = () => {
        const errors = {};
        if (!organizationType) {
            errors.organizationType = "Please select an option";
        }
        if (organizationType === "Institution") {
            if (!name.trim()) {
                errors.name = "Institution name is required";
            }
        }
        else if (organizationType === "NGO") {
            if (!selectedValue) {
                errors.ngoType = "NGO type is required";
            }
            if (!ngoName.trim()) {
                errors.ngoName = "NGO name is required";
            }
            else {
                setNgoNameError("");
            }
        }
        if (organizationType === "Bank" && !selectedValue) {
            errors.bankType = "Bank type is required";
        }

        if (organizationType === "Bank" && !selectedBankName) {
            errors.bankName = " Bank name is required";
        }
        if (!email.trim()) {
            errors.email = "Email is required";
        } else {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!emailRegex.test(email)) {
                errors.email = "Enter a valid email address";
            }
        }

        if (!phone) {
            errors.phone = "Phone number is required";
        } else if (phone.length !== 10) {
            errors.phone = "Phone number must be 10 digits";
        }


        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 5) {
            errors.password = "Password must be at least 5 characters long";
        } else {

       
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{5,10}$/;
            if (!passwordRegex.test(password)) {
                errors.password = "Password must contain at least one lowercase letter, one uppercase letter, one special character, and be 5 to 10 characters";
            }
        }



        if (!confirmPassword.trim()) {
            errors.confirmPassword = " Confirm Password is required ";
        } else if (password !== confirmPassword) {
            errors.confirmPassword = "Confirm password does not match";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

 

    const NGOBankData = async () => {
        try {
           
            const response = await axios.post(`${baseURL}/Organization/Get_Bank_NGO_Type`);
            
            if (response.data.bank_type_list) {
                setBankType(response.data.bank_type_list);
            }
            if (response.data.ngo_type_list) {
                setNgoType(response.data.ngo_type_list);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        NGOBankData();
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
    }, [organizationType]);

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (!isValid) return;
        setIsLoading(true);

        if (organizationType === 'NGO') {

            setName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setConfirmPassword("");
            setNgoType("");
            setNgoName("");
        }

        if (organizationType === 'Institution') {
            setName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setConfirmPassword("");
            setOrganizationType("");
        }
        if (organizationType === 'Bank') {
            setPhone("");
            setPassword("");
            setConfirmPassword("");
            setOrganizationType("");
            setBankType("");
            setBankName("");

        }
        let data = {
            org_type: organizationType,
            name: name,
            mobile_no: phone,
            email: email,
            password: password,
            bank_type: "",
            ngo_type: ""
        };
        if (organizationType === 'NGO') {
            setSelectedValue(selectedValue);
            data = {
                ...data,
                ngo_type: selectedValue,
                name: ngoName
            };
        } else if (organizationType === 'Bank') {
            setSelectedValue(selectedValue);
            let selectedBank = '';
            if (selectedBankName) {
                selectedBank = selectedBankName;
            }
            data = {
                ...data,
                bank_type: selectedValue,
                name: selectedBank,
            };
        }
        try {
            const res = await axios.post(`${baseURL}/Organization/Organization_Registraion`, data)

            console.log("resssssssdata->",  res.data)

            if (res.data.status) {
             
                setMessage(res.data.msg);
               

                const OrgloginResponse = await axios.post(`${baseURL}/Organization/Organization_Login`, {
                    email: data.email,
                    password: data.password
                });
                console.log(OrgloginResponse.data.msg);
              

                if (OrgloginResponse.data.status === 1) {
                    const { id } = OrgloginResponse.data.user_details;
                    const userType = 'Organization'
                    localStorage.setItem('User_Id', id);
                    localStorage.setItem('User_Type', userType);

                  
                    window.location.assign(
                        " /organization-dashboard"
                       );

                }
            } else {
                if (res.data.msg) {
                    setMessage(res.data.msg);
                    toast.error(res.data.msg);
                    setOrganizationType("Institution");
                }
            }

        } catch (error) {
            console.error("Error during registration:", error);
        }
        setIsLoading(false);
    };
   

    useEffect(() => {
        const userId = localStorage.getItem('User_Id');
        const userType = localStorage.getItem('User_Type');
        if (userId && userType === 'Organization') {
            // navigate("/organization-dashboard")
            window.location.assign(
                " /organization-dashboard"
               );
        }
    }, []);

   

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleOrganizationTypeChange = (e) => {
        const type = e.target.value;
        setOrganizationType(type);
        setErrors({});
        if (type === 'NGO') {
            setNgoName("");
        } else if (type === 'Bank') {
            setBankName("");
            setSelectedBankName("");
        }
    };



    const Validationsetname = (e) => {

        let value = e.target.value;

        value = value.replace(/\s+/g, '');
        setName(value);


        if (!value.trim()) {
            setErrors({ ...errors, name: "Institution Name is required" });
        } else {

            setErrors({ ...errors, name: "" });
        }
    };

    const Validationngoname = (e) => {
        let value = e.target.value;
        value = value.replace(/\s+/g, '');
        setNgoName(value);
        if (!value.trim()) {
            setErrors({ ...errors, ngoName: "NGO name is required" });
        } else {

            setErrors({ ...errors, ngoName: "" });
        }
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

    const handlePhoneChange = (e) => {
        let { value } = e.target;
        value = value.replace(/\s+/g, '');
        const phoneRegex = /^\d{0,10}$/;
        if (!value.trim()) {
            setErrors({ ...errors, phone: "Phone number is required" });
        }
        else if (phoneRegex.test(value) || value === '') {

            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: value.length === 10 ? '' : 'Phone number must be 10 digits'
            }));
        }
        else {
            return;
        }
        setPhone(value);
    };
    const handleBankTypeChange = async (e) => {
        const selectedBankType = e.target.value;

        setSelectedValue(selectedBankType);

        try {
            const response = await axios.post(`${baseURL}/Organization/Get_Bank_Name_list`, {
                fk_bank_type_id: selectedBankType
            });
            if (response.data.status === 1 && Array.isArray(response.data.bank_name_list)) {
                setBankName(response.data.bank_name_list);
                const selectedBank = response.data.bank_name_list.find(bank => bank.bank_name === selectedBankName);
                if (selectedBank) {
                    setSelectedBankName(selectedBank.bank_name);

                } else {
                    setSelectedBankName('');
                }
            } else {
                setBankName([]);
            }
        } catch (error) {
            console.error("Error fetching bank names:", error);
        }
    };

    const handleNgoTypeChange = (e) => {
        const selectedNgoType = e.target.value;
        console.log("selectedNgoType---->", selectedNgoType);
        setSelectedValue(selectedNgoType);
    };

    const Validationpassword = (e) => {
        let value = e.target.value;
        value = value.replace(/\s/g, '');
        setPassword(value);
        if (!value.trim()) {
            setErrors({ ...errors, password: "Password is required" });
        } else if (value.length < 5) {
            setErrors({ ...errors, password: "Password must be at least 5 characters long" });
        } else if (value.length > 10) {
            setErrors({ ...errors, password: "Password must not exceed 10 characters long" });
        } else {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{5,10}$/;
            if (!passwordRegex.test(value)) {
                setErrors({ ...errors, password: "Password must contain at least one lowercase letter, one uppercase letter, one special character, and be 5 to 10 characters" });
            } else {

                setErrors({ ...errors, password: "" });
            }
        }
    };
    const handleBankName = (e) => {
        const selectedBank = e.target.value;
        setSelectedBankName(selectedBank);
        console.log("selectedBankName", selectedBank);
        validateForm();
    };
    const ValidationConfirmpassword = (e) => {
        let confirmPasswordValue = e.target.value;
        confirmPasswordValue = confirmPasswordValue.replace(/\s+/g, '');
        setConfirmPassword(confirmPasswordValue);
        if (!confirmPasswordValue.trim()) {
            setErrors({ ...errors, confirmPassword: "Confirm password is required" });
        } else if (password !== confirmPasswordValue) {
            setErrors({ ...errors, confirmPassword: "Confirm password does not match" });
        } else {

            setErrors({ ...errors, confirmPassword: "" });
        }
    };
    return (
        <>
            <ToastContainer />
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
                        <div className="col-xl-4 col-lg-6 offset-xl-1 ">
                            <div className="literacytoolform">
                                <div className="text-center mb-4">
                                    <h3>Sign Up</h3>
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="12 mb-3">
                                            <Form.Label>Who are you?</Form.Label>
                                            <div className="d-flex justify-content-between w-100">
                                                {['Institution', 'NGO', 'Bank'].map((type) => (
                                                    <Form.Check
                                                        key={type}
                                                        label={type}
                                                        name="organizationType"
                                                        type="radio"
                                                        id={`reverse-radio-${type}`}
                                                        value={type}
                                                        checked={organizationType === type}
                                                        onChange={handleOrganizationTypeChange}

                                                    />
                                                ))}
                                            </div>
                                            {errors.organizationType && <div className="invalid-feedback d-block">{errors.organizationType}</div>}
                                        </Form.Group>
                                        {organizationType === 'Institution' && (
                                            <Form.Group as={Col} md="12 mb-3" controlId="validationCustom01">
                                                <Form.Label>Institution Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value={name}
                                                    onChange={Validationsetname}
                                                    autoComplete="off"
                                                    placeholder="Enter Institution Name"
                                                  
                                                />
                                               
                                                {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                                            </Form.Group>
                                        )}
                                        {(organizationType !== 'Institution') && (
                                            <>
                                                <Form.Group as={Col} md="12 mb-3" >
                                                    <Form.Control
                                                        as="select"
                                                        onChange={organizationType === 'NGO' ? handleNgoTypeChange : handleBankTypeChange}
                                                        value={selectedValue}
                                                    >
                                                        <option value="">Select {organizationType === 'NGO' ? 'NGO' : 'Bank'} Type</option>
                                                        {organizationType === 'NGO' && Array.isArray(ngoType) ? (
                                                            ngoType.map((ngo) => (
                                                                <option key={ngo.id} value={ngo.ngo_type}>{ngo.ngo_type}</option>
                                                            ))
                                                        ) : organizationType === 'Bank' && Array.isArray(bankType) ? (
                                                            bankType.map((bank) => (
                                                                <option key={bank.id} value={bank.id}>{bank.bank_type}</option>

                                                            ))
                                                        ) : null}
                                                    </Form.Control>

                                                    {organizationType === 'NGO' && !selectedValue && errors && errors.ngoType &&
                                                        <div className="invalid-feedback d-block">{errors.ngoType}</div>
                                                    }


                                                    {organizationType === 'Bank' && !selectedValue && errors && errors.bankType &&
                                                        <div className="invalid-feedback d-block">{errors.bankType}</div>
                                                    }

                                                </Form.Group>
                                                {organizationType === 'NGO' && (
                                                    <Form.Group as={Col} md="12 mb-3" >
                                                        <Form.Label>NGO Name</Form.Label>

                                                        <Form.Control
                                                            type="text"
                                                            value={ngoName}
                                                            onChange={Validationngoname}
                                                            autoComplete="off"
                                                            placeholder="Enter NGO Name"

                                                           
                                                        />
                                                        {errors.ngoName && <div className="invalid-feedback d-block">{errors.ngoName}</div>}
                                                    </Form.Group>

                                                )}
                                                {organizationType === 'Bank' && (
                                                    <Form.Group as={Col} md="12 mb-3">
                                                        <Form.Label>Bank Name</Form.Label>

                                                        <Form.Control as="select" value={selectedBankName}

                                                            onChange={handleBankName}
                                                        >
                                                            <option value="">Select Bank Name</option>
                                                            {Array.isArray(bankName) ? (
                                                                bankName.map((bank) => (
                                                                    <option key={bank.id} value={bank.bank_name}>{bank.bank_name}</option>
                                                                ))
                                                            ) : (
                                                                <option value="">Loading...</option>

                                                            )}
                                                        </Form.Control>
                                                        {organizationType === 'Bank' && !selectedBankName && errors && errors.bankName &&
                                                            <div className="invalid-feedback d-block">{errors.bankName}</div>
                                                        }
                                                    </Form.Group>
                                                )}

                                            </>
                                        )}
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
                                            <Form.Label>Phone Number</Form.Label>
                                            <input
                                                className="form-control"
                                                id="mobile_number"
                                                type="text"
                                                value={phone}
                                                onChange={handlePhoneChange}
                                                placeholder="Enter Phone Number"
                                                autoComplete="off"
                                                />
                                            {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}


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
                                        <Form.Group as={Col} md="12 position-relative mb-3">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                value={confirmPassword}
                                                onChange={ValidationConfirmpassword}
                                                autoComplete="off"
                                                placeholder="Enter Confirm Password"
                                                maxLength={10}

                                            />
                                            <div className="passwordshowicon" onClick={handleToggleConfirmPasswordVisibility}>
                                                {showConfirmPassword ? <EyeFill /> : <EyeSlashFill />}
                                            </div>
                                          
                                            {errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div>}
                                        </Form.Group>
                                    </Row>
                                    <Button type="submit" className="formbtn mt-3" disabled={isLoading}>
                                        {isLoading ? "Signup...." : "Signup"}</Button>
                                    <div className="text-center sig-up mt-4">
                                        <p>Already have an account? <Link to="/organization-login"><b>Sign in</b></Link></p>
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


