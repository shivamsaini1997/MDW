
import React, { useState } from 'react';

function Orgpmodalphone({ handleCancel, show }) {
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});

  const handlephoneDetails = (e) => {
    e.preventDefault();
    let errors = {};

    if (!otp) {
      errors.otp = "otp is required";
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form Data:", { otp });
      resetOTP();
    }
  };

  const resetOTP = () => {
    setOtp("");
    setErrors({});
  };

  const handleotpChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\s+/g, '');
    const otpRegex = /^\d{0,6}$/;
    if (!value.trim()) {
      setErrors({ ...errors, otp: "otp number is required" });
    } else if (otpRegex.test(value) || value === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        otp: value.length === 6 ? '' : 'otp number must be 6 digits'
      }));
    } else {
      return;
    }

    setOtp(value);
  };

  return (
    <>
      {show && (
        <div className="popup modalcreate">
          <div className="modalpopup">
            <div className="text-center mb-4">
              <h4 className="text-center mb-4">Enter Your OTP</h4>
              <p>Please enter your OTP sent on number 88********23. Wait for 60 sec before resending OTP.</p>
            </div>

            <form onSubmit={handlephoneDetails} className="text-start">
              <div className="col-12 mb-3">
                <label htmlFor="validationDefault02" className="form-label">OTP</label>
                <input type="text" className="form-control" value={otp} onChange={handleotpChange} placeholder="Assist" autoComplete="off" />
                {errors.otp && <span className="text-danger">{errors.otp}</span>}
                <button className="btn btn-first3" type="submit">Resend</button>
              </div>

              <div className="btngroup">
                <button className="btn btn-first3" type='button' onClick={handleCancel}>Change Number</button>
                <button className="btn btn-first1" type='submit' onClick={handleCancel}><span>OK</span></button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Orgpmodalphone;

