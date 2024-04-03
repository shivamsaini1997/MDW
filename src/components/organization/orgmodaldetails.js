
import React, { useState } from 'react';
import Orgpmodalphone from './orgpmodalphone';

function Orgmodaldetails() {
  const [phone, setPhone] = useState("");
  const [org, setOrg] = useState("");
  const [errors, setErrors] = useState({});
  const [showPhoneVerification, setShowPhoneVerification] = useState(false);

  const handleSubmitOrg = (e) => {
    e.preventDefault();
    let errors = {};
    if (!org.trim()) {
      errors.org = "Organization Name is required";
    }
    if (!phone) {
      errors.phone = "Phone number is required";
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form Data:", { org, phone });
      resetOrg();
    }
  };

  const resetOrg = () => {
    setOrg("");
    setPhone("");
    setErrors({});
  };

  const handleOrg = (e) => {
    let { value } = e.target;
    value = value.replace(/\s+/g, '');
    if (!value.trim()) {
      setErrors({ ...errors, org: "Organization Name is required" });
    } else {
      setErrors({ ...errors, org: "" });
    }
    setOrg(value);
  };

  const handlePhoneChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\s+/g, '');
    const phoneRegex = /^\d{0,10}$/;
    if (!value.trim()) {
      setErrors({ ...errors, phone: "Phone number is required" });
    } else if (phoneRegex.test(value) || value === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: value.length === 10 ? '' : 'Phone number must be 10 digits'
      }));
    } else {
      return;
    }

    setPhone(value);
  };

  const handleVerifyPhone = (e) => {
    e.preventDefault();
    setShowPhoneVerification(true);
  };

  const handleCancelPhoneVerification = () => {
    setShowPhoneVerification(false);
  };

  return (
    <>
      <div className="popup modalcreate">
        <div className="modalpopup">
          <div className="text-center mb-4">
            <h4 className="text-center mb-4">Enter Your Details</h4>
            <p>Please enter your new details. Ensure it's accurate for communication.</p>
          </div>

          <form className="text-start" onSubmit={handleSubmitOrg}>
            <div className="col-12 mb-3">
              <label htmlFor="validationDefault02" className="form-label">Name of Organization</label>
              <input type="text" className="form-control" value={org} onChange={handleOrg} placeholder="Assist" />
              {errors.org && <span className="text-danger">{errors.org}</span>}
            </div>
            <div className="col-12 position-relative">
              <label htmlFor="validationDefault02" className="form-label">Phone No.</label>
              <input type="text" className="form-control" value={phone} onChange={handlePhoneChange} placeholder="8800880088" autoComplete="off" />
              {errors.phone && <span className="text-danger">{errors.phone}</span>}
              <a href="#" className="verifyphonenumber" onClick={handleVerifyPhone}>Verify</a>
            </div>

            <div className="btngroup">
              <button className="btn btn-first2" type="button" onClick={handleCancelPhoneVerification}>Discard</button>
              <button className="btn btn-first1" type="submit" onClick={handleCancelPhoneVerification}><span>Update</span></button>
            </div>
          </form>
        </div>
      </div>

      <Orgpmodalphone handleCancel={handleCancelPhoneVerification} show={showPhoneVerification} />
    </>
  );
}

export default Orgmodaldetails;

