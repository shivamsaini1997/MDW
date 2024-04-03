import React, { useState, useEffect } from "react";
import HeaderDb from "../include/HeaderDb";
import Sidebar from "../include/Sidebar";
import OrgHeaderDb from "./OrgHeaderDB";
import axios from "axios";
import OrgProfile from "../../assets/css/OrgProfile.css";
import Form from "react-bootstrap/Form";
import Orgmodaldetails from "./orgmodaldetails";
import { Col } from "react-bootstrap";

function Organizationprofile() {
  const [gst, setGst] = useState("");
  const [pan, setPan] = useState("");
  const [orgtype, setOrgtype] = useState("");
  const [subtype, setSubType] = useState("");
  const [weburl, setWeburl] = useState("");
  const [errors, setErrors] = useState({});
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [insta, setInsta] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [organizationType, setOrganizationType] = useState("");
  const [name, setName] = useState("");
  const [ngoName, setNgoName] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedBankName, setSelectedBankName] = useState("");
  const [bankName, setBankName] = useState([]);
  const [ngoType, setNgoType] = useState([]);
  const [bankType, setBankType] = useState([]);
  const baseURL = "http://192.168.1.83:8000";
  const handleSubmit = async (e) => {
    alert("hello Arti");
    console.log("Form Data:", {
      gst,
      pan,
      orgtype,
      subtype,
      weburl,
      linkedin,
      twitter,
      insta,
      house,
      city,
      state,
      pincode,
      street,
      ngoName,
      ngoType,
      bankType,
    });

    e.preventDefault();
    let errors = {};

    if (!pan) {
      errors.pan = "PAN number is required";
    }
    if (!orgtype) {
      errors.orgtype = "Organization type is required";
    }
    if (!subtype) {
      errors.subtype = "Organization subtype is required";
    }

    if (!linkedin.trim()) {
      errors.linkedin = "LinkedIn is required";
    }
    if (!twitter.trim()) {
      errors.twitter = "Twitter is required";
    }
    if (!insta.trim()) {
      errors.insta = "Facebook is required";
    }
    if (!house.trim()) {
      errors.house = "House number is required";
    }
    if (!street.trim()) {
      errors.street = "Street address is required";
    }
    if (!city.trim) {
      errors.city = "City is required";
    }
    if (!state) {
      errors.state = "State is required";
    }
    if (!pincode.trim()) {
      errors.pincode = "Pin code is required";
    } else if (!/^\d{6}$/.test(pincode)) {
      errors.pincode = "Pin code must be 6 digits";
    }

    if (!name && orgtype === "Institution") {
      errors.name = "Institution name is required";
    }
    if (!ngoName && orgtype === "NGO") {
      errors.ngoName = "NGO name is required";
    }
    if (!selectedBankName && orgtype === "Bank") {
      errors.bankName = "Bank name is required";
    }
    setErrors(errors);

    resetForm();
  };

  const resetForm = () => {
    setGst("");
    setPan("");
    setOrgtype("");
    setSubType("");
    setWeburl("");
    setLinkedin("");
    setTwitter("");
    setInsta("");
    setErrors({});
    setHouse("");
    setCity("");
    setState("");
    setPincode("");
    setStreet("");
    setNgoName("");
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/Organization/Get_Organization_Details`,
        {
          user_id: localStorage.getItem("User_Id"),
        }
      );
      console.log("API Response:", response.data);

      if (response.data && response.data.status === 1) {
        const organizationData = response.data.data;
        setGst(organizationData.gst_no || "");
        setPan(organizationData.pan_card_number || "");
        setOrgtype(organizationData.org_type || "");
        setSubType(
          organizationData.fk_ngo_type || organizationData.fk_bank_type || ""
        );
        setLinkedin(organizationData.linkedin_url || "");
        setTwitter(organizationData.twiter_url || "");
        setInsta(organizationData.facebook_url || "");
        setHouse(organizationData.house_no || "");
        setCity(organizationData.fk_city || "");
        setState(organizationData.fk_state || "");
        setPincode(organizationData.pincode || "");
        setStreet(organizationData.street_address || "");
        setName(organizationData.name || "");
        setNgoName(organizationData.name || "");
        setBankName(organizationData.name || "");
        setNgoType(organizationData.fk_ngo_type || "");
      } else {
        console.error(
          "Error fetching organization details:",
          response.data.msg
        );
      }
    } catch (error) {
      console.error("Error during organization details fetch:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleEditClick = () => {};

  const handleOrganizationTypeChange = (e) => {
    setOrganizationType(e.target.value);
    setErrors({ ...errors, orgtype: "" });
    setSelectedValue("");
    setSelectedBankName("");
    setNgoName("");
  };

  const handlePanChange = (e) => {
    const value = e.target.value.toUpperCase().replace(/\s+/g, "");
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    const error = !value.trim()
      ? "PAN number is required"
      : value.length !== 10
      ? "PAN number must be 10 characters"
      : !panRegex.test(value)
      ? "Invalid PAN format"
      : "";

    setErrors({ ...errors, pan: error });
    setPan(value);
  };

  const handleHouseChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\s+/g, "");
    const houseRegex = /^[a-zA-Z0-9\s]*$/;
    if (!value.trim()) {
      setErrors({ ...errors, house: "House number is required" });
    } else if (!houseRegex.test(value)) {
      setErrors({ ...errors, house: "Invalid house number" });
    } else {
      setErrors({ ...errors, house: "" });
    }
    setHouse(value);
  };

  const handleStreetChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\s+/g, "");

    const streetRegex = /^[a-zA-Z0-9\s]*$/;
    if (!value.trim()) {
      setErrors({ ...errors, street: "Street address is required" });
    } else if (!streetRegex.test(value)) {
      setErrors({ ...errors, street: "Invalid street address" });
    } else {
      setErrors({ ...errors, street: "" });
    }
    setStreet(value);
  };

  const handleCityChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\s+/g, "");

    const cityRegex = /^[a-zA-Z0-9\s]*$/;
    if (!value.trim()) {
      setErrors({ ...errors, city: "City address is required" });
    } else if (!cityRegex.test(value)) {
      setErrors({ ...errors, city: "Invalid city address" });
    } else {
      setErrors({ ...errors, city: "" });
    }
    setCity(value);
  };
  const handlePincodeChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\s+/g, "");
    const pincodeRegex = /^\d{6}$/;
    if (!value.trim()) {
      setErrors({ ...errors, pincode: "Pin code is required" });
    } else if (!pincodeRegex.test(value)) {
      setErrors({ ...errors, pincode: "Pin code must be 6 digits" });
    } else {
      setErrors({ ...errors, pincode: "" });
    }
    setPincode(value);
  };

  const handleLinkedInChange = (e) => {
    let value = e.target.value.trim();
    value = value.replace(/\s+/g, "");
    if (!value) {
      setErrors({ ...errors, linkedin: "LinkedIn is required" });
    } else {
      setErrors({ ...errors, linkedin: "" });
    }
    setLinkedin(value);
  };

  const handleTwitterChange = (e) => {
    let value = e.target.value.trim();
    value = value.replace(/\s+/g, "");
    if (!value) {
      setErrors({ ...errors, twitter: "Twitter is required" });
    } else {
      setErrors({ ...errors, twitter: "" });
    }
    setTwitter(value);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setShowPopup(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInstaChange = (e) => {
    let value = e.target.value.trim();
    value = value.replace(/\s+/g, "");
    if (!value) {
      setErrors({ ...errors, insta: "Facebook is required" });
    } else {
      setErrors({ ...errors, insta: "" });
    }
    setInsta(value);
  };

  const handleSave = () => {
    setShowPopup(false);
  };

  const handleCancel = () => {
    setSelectedImage(null);
    setShowPopup(false);
  };

  const handleUploadIconClick = () => {
    const fileInput = document.getElementById("uploadimgpp");
    fileInput.click();
  };
  const [showModal, setShowModal] = useState(false);

  const handleCancel1 = () => {
    setShowModal(false);
  };

  const handleSave1 = () => {
    setShowModal(false);
  };
  const [showModal2, setShowModal2] = useState(false);

  const handleCancel2 = () => {
    setShowModal2(false);
  };

  const handleSave2 = () => {
    setShowModal2(false);
  };
  const [showModal3, setShowModal3] = useState(false);

  const handleCancel3 = () => {
    setShowModal3(false);
  };

  const handleSave3 = () => {
    setShowModal3(false);
  };

  const [switch1Checked, setSwitch1Checked] = useState(false);
  const [switch2Checked, setSwitch2Checked] = useState(true);
  const [switch3Checked, setSwitch3Checked] = useState(true);
  const [switch4Checked, setSwitch4Checked] = useState(true);
  const [switch5Checked, setSwitch5Checked] = useState(true);
  const [switch6Checked, setSwitch6Checked] = useState(true);
  const [switch7Checked, setSwitch7Checked] = useState(false);
  const [switch8Checked, setSwitch8Checked] = useState(true);

  const handleSwitch1Change = () => {
    setSwitch1Checked(!switch1Checked);
  };

  const handleSwitch2Change = () => {
    setSwitch2Checked(!switch2Checked);
  };
  const handleSwitch3Change = () => {
    setSwitch3Checked(!switch3Checked);
  };

  const handleSwitch4Change = () => {
    setSwitch4Checked(!switch4Checked);
  };
  const handleSwitch5Change = () => {
    setSwitch5Checked(!switch5Checked);
  };
  const handleSwitch6Change = () => {
    setSwitch6Checked(!switch6Checked);
  };
  const handleSwitch7Change = () => {
    setSwitch7Checked(!switch7Checked);
  };
  const handleSwitch8Change = () => {
    setSwitch8Checked(!switch8Checked);
  };

  const handleBankName = (e) => {
    const selectedBank = e.target.value;
    setSelectedBankName(selectedBank);
    console.log("selectedBankName", selectedBank);
  };
  const Validationngoname = (e) => {
    let value = e.target.value;
    value = value.replace(/\s+/g, "");
    setNgoName(value);
    if (!value.trim()) {
      setErrors({ ...errors, ngoName: "NGO name is required" });
    } else {
      setErrors({ ...errors, ngoName: "" });
    }
  };

  return (
    <>
      <OrgHeaderDb />

      <div className="body-header pt-5">
        <div className="container-fluid mt-5 ps-0 orgprofile">
          <div className="row">
            <div className="col-lg-2">
              <Sidebar />
            </div>

            <div className="col-lg-10">
              <nav>
                <div class="nav nav-tabs border-0" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="true"
                  >
                    Profile
                  </button>
                  <button
                    class="nav-link"
                    id="billing-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#billing"
                    type="button"
                    role="tab"
                    aria-controls="billing"
                    aria-selected="false"
                  >
                    Billing
                  </button>
                  <button
                    class="nav-link"
                    id="change-password-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#change-password"
                    type="button"
                    role="tab"
                    aria-controls="change-password"
                    aria-selected="false"
                  >
                    Change Password
                  </button>
                  <button
                    class="nav-link"
                    id="setting-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#setting"
                    type="button"
                    role="tab"
                    aria-controls="setting"
                    aria-selected="false"
                  >
                    Setting
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabindex="0"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-8">
                        <form
                          className="g-3 basicstyle"
                          onSubmit={handleSubmit}
                        >
                          <div className="row bgrow mb-4">
                            <div className="col-12">
                              <h4>Organization Information</h4>
                              <div className="border-bottom-style"></div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label
                                for="validationDefault01"
                                class="form-label"
                              >
                                GST
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                id="gst"
                                value={gst}
                                placeholder="GST No"
                                onChange={(e) =>
                                  setGst(e.target.value.replace(/\s+/g, ""))
                                }
                              />
                            </div>
                            <div className="col-md-6 mb-3">
                              <label
                                for="validationDefault02"
                                className="form-label"
                              >
                                PAN
                              </label>

                              <input
                                type="text"
                                id="pan"
                                className="form-control"
                                value={pan}
                                maxLength={10}
                                onChange={handlePanChange}
                                placeholder="PAN"
                              />
                              {errors.pan && (
                                <span className="text-danger">
                                  {errors.pan}
                                </span>
                              )}
                            </div>

                            {orgtype && (
                              <div className="col-md-6 mb-3">
                                <label htmlFor="orgType" className="form-label">
                                  Organization Type
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="orgType"
                                  value={orgtype}
                                  disabled
                                />
                              </div>
                            )}

                            {orgtype === "Institution" ? (
                              <div className="col-md-6 mb-3">
                                <label
                                  htmlFor="institutionName"
                                  className="form-label"
                                >
                                  Institution Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="institutionName"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  placeholder="Enter Institution Name"
                                />
                                {errors.name && (
                                  <span className="text-danger">
                                    {errors.name}
                                  </span>
                                )}
                              </div>
                            ) : (
                              <div className="col-md-6 mb-3">
                                <label htmlFor="orgName" className="form-label">
                                  {orgtype === "NGO" ? "NGO Name" : "Bank Name"}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="orgName"
                                  value={
                                    orgtype === "NGO"
                                      ? ngoName
                                      : selectedBankName
                                  }
                                  onChange={(e) =>
                                    orgtype === "NGO"
                                      ? setNgoName(e.target.value)
                                      : setSelectedBankName(e.target.value)
                                  }
                                />
                                {errors.orgName && (
                                  <span className="text-danger">
                                    {errors.orgName}
                                  </span>
                                )}
                              </div>
                            )}

                            {orgtype !== "Institution" && (
                              <div className="col-md-6 mb-3">
                                <label
                                  htmlFor="selectedValue"
                                  className="form-label"
                                >
                                  {orgtype === "NGO" ? "NGO Type" : "Bank Type"}
                                </label>
                                {orgtype === "NGO" ? (
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="selectedValue"
                                    value={ngoType}
                                    onChange={(e) => setNgoType(e.target.value)}
                                  />
                                ) : (
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="bankType"
                                    value={bankType}
                                    onChange={(e) =>
                                      setBankType(e.target.value)
                                    }
                                  />
                                )}
                                {orgtype === "NGO" &&
                                  !selectedValue &&
                                  errors &&
                                  errors.ngoType && (
                                    <span className="text-danger">
                                      {errors.ngoType}
                                    </span>
                                  )}
                                {orgtype === "Bank" &&
                                  !selectedValue &&
                                  errors &&
                                  errors.bankType && (
                                    <span className="text-danger">
                                      {errors.bankType}
                                    </span>
                                  )}
                              </div>
                            )}
                          </div>
                          <div className="row bgrow mb-4">
                            <div className="col-12">
                              <h4>Address</h4>
                              <div className="border-bottom-style"></div>
                            </div>
                            <div class="col-md-6 mb-3">
                              <label
                                for="validationDefault01"
                                class="form-label"
                              >
                                House No.
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                value={house}
                                placeholder="House No"
                                onChange={handleHouseChange}
                              />
                              {errors.house && (
                                <span className="text-danger">
                                  {errors.house}
                                </span>
                              )}
                            </div>
                            <div class="col-md-6 mb-3">
                              <label
                                for="validationDefault02"
                                class="form-label"
                              >
                                Street Address
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                value={street}
                                placeholder="Street Address"
                                onChange={handleStreetChange}
                              />
                              {errors.street && (
                                <span className="text-danger">
                                  {errors.street}
                                </span>
                              )}
                            </div>
                            <div class="col-md-6 mb-3">
                              <label
                                for="validationDefault02"
                                class="form-label"
                              >
                                City
                              </label>

                              <input
                                type="text"
                                class="form-control"
                                value={city}
                                placeholder="City"
                                onChange={handleCityChange}
                              />
                              {errors.city && (
                                <span className="text-danger">
                                  {errors.city}
                                </span>
                              )}
                            </div>

                            <div class="col-md-6 mb-3">
                              <label
                                for="validationDefault04"
                                class="form-label"
                              >
                                State
                              </label>

                              <select
                                className="form-select"
                                value={state}
                                onChange={(e) => {
                                  setState(e.target.value);

                                  setErrors({ ...errors, state: "" });
                                }}
                              >
                                <option value="">Select State</option>
                                <option value="state1">State 1</option>
                                <option value="state2">State 2</option>
                                <option value="state3">State 3</option>
                              </select>
                              {errors.state && (
                                <span className="text-danger">
                                  {errors.state}
                                </span>
                              )}
                            </div>
                            <div class="col-md-6 mb-3">
                              <label
                                for="validationDefault02"
                                class="form-label"
                              >
                                Pin code
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                value={pincode}
                                placeholder="Pin code"
                                maxLength={6}
                                onChange={handlePincodeChange}
                              />
                              {errors.pincode && (
                                <span className="text-danger">
                                  {errors.pincode}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="row bgrow mb-4">
                            <div className="col-12">
                              <h4>Social Profile</h4>
                              <div className="border-bottom-style"></div>
                            </div>
                            <div class="col-md-6 mb-3">
                              <label
                                for="validationDefault01"
                                class="form-label"
                              >
                                LinkedIn
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                value={linkedin}
                                placeholder="Enter your link"
                                onChange={handleLinkedInChange}
                              />
                              {errors.linkedin && (
                                <span className="text-danger">
                                  {errors.linkedin}
                                </span>
                              )}
                            </div>
                            <div class="col-md-6 mb-3">
                              <label
                                for="validationDefault02"
                                class="form-label"
                              >
                                Twitter
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                value={twitter}
                                onChange={handleTwitterChange}
                                placeholder="Enter Twitter"
                              />
                              {errors.twitter && (
                                <span className="text-danger">
                                  {errors.twitter}
                                </span>
                              )}
                            </div>
                            <div class="col-md-6 mb-3">
                              <label
                                for="validationDefault02"
                                class="form-label"
                              >
                                Facebook
                              </label>

                              <input
                                type="text"
                                className="form-control"
                                value={insta}
                                onChange={handleInstaChange}
                                placeholder="Enter your ID"
                              />
                              {errors.insta && (
                                <span className="text-danger">
                                  {errors.insta}
                                </span>
                              )}
                            </div>
                            <div class="col-md-6 mb-3">
                              <label
                                for="validationDefault02"
                                class="form-label"
                              >
                                Website Url
                              </label>
                              <input
                                type="url"
                                class="form-control"
                                id="validationDefault02"
                                placeholder="Link"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="col-4">
                        <div className="position-relative">
                          <div className="profileimageupload position-relative">
                            {selectedImage ? (
                              <img src={selectedImage} alt="Uploaded" />
                            ) : (
                              <p>AA</p>
                            )}
                          </div>
                          <a
                            href="#"
                            className="uploadicon"
                            onClick={handleUploadIconClick}
                          >
                            <svg
                              width="19"
                              height="18"
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 3.17157L15 6.17157M10 17.1716H18M2 13.1716L1 17.1716L5 16.1716L16.586 4.58557C16.9609 4.21052 17.1716 3.7019 17.1716 3.17157C17.1716 2.64124 16.9609 2.13263 16.586 1.75757L16.414 1.58557C16.0389 1.21063 15.5303 1 15 1C14.4697 1 13.9611 1.21063 13.586 1.58557L2 13.1716Z"
                                stroke="#6E1FD8"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                        <input
                          id="uploadimgpp"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                        />
                        {showPopup && (
                          <div className="popup modalcreate">
                            <div className="modalpopup">
                              <a
                                href="#"
                                className="btnclose-x"
                                onClick={handleCancel}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_1643_53770)">
                                    <path
                                      d="M12 0.675049C5.73755 0.675049 0.675049 5.73755 0.675049 12C0.675049 18.2626 5.73755 23.3625 12 23.3625C18.2626 23.3625 23.3625 18.2626 23.3625 12C23.3625 5.73755 18.2626 0.675049 12 0.675049ZM12 21.675C6.67505 21.675 2.36255 17.325 2.36255 12C2.36255 6.67505 6.67505 2.36255 12 2.36255C17.325 2.36255 21.675 6.71255 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                                      fill="#111928"
                                    />
                                    <path
                                      d="M15.4501 8.51252C15.1126 8.17502 14.5876 8.17502 14.2501 8.51252L12.0001 10.8L9.71265 8.51252C9.37515 8.17502 8.85015 8.17502 8.51265 8.51252C8.17515 8.85002 8.17515 9.37502 8.51265 9.71252L10.8001 12L8.51265 14.2875C8.17515 14.625 8.17515 15.15 8.51265 15.4875C8.66265 15.6375 8.88765 15.75 9.11265 15.75C9.33765 15.75 9.56265 15.675 9.71265 15.4875L12.0001 13.2L14.2876 15.4875C14.4376 15.6375 14.6626 15.75 14.8876 15.75C15.1126 15.75 15.3376 15.675 15.4876 15.4875C15.8251 15.15 15.8251 14.625 15.4876 14.2875L13.2001 12L15.4876 9.71252C15.7876 9.37502 15.7876 8.85002 15.4501 8.51252Z"
                                      fill="#111928"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1643_53770">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </a>
                              <img src={selectedImage} alt="Uploaded" />
                              <div className="btngroup">
                                <button
                                  className="btn btn-first2"
                                  onClick={handleCancel}
                                >
                                  Discard
                                </button>
                                <button
                                  className="btn btn-first1"
                                  onClick={handleSave}
                                  // onClick={handleSubmit}
                                >
                                  <span>Updated</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="boxprofle">
                          <div className="d-flex justify-content-between">
                            <p>Assist</p>

                            <a
                              href="#"
                              className="proedit"
                              onClick={handleEditClick}
                            >
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 3.17157L15 6.17157M10 17.1716H18M2 13.1716L1 17.1716L5 16.1716L16.586 4.58557C16.9609 4.21052 17.1716 3.7019 17.1716 3.17157C17.1716 2.64124 16.9609 2.13263 16.586 1.75757L16.414 1.58557C16.0389 1.21063 15.5303 1 15 1C14.4697 1 13.9611 1.21063 13.586 1.58557L2 13.1716Z"
                                  stroke="black"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </a>
                          </div>
                          <div className="d-flex detailsorg">
                            <span className="me-2">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.5001 1.8H1.5001C0.862598 1.8 0.318848 2.325 0.318848 2.98125V9.05625C0.318848 9.69375 0.843848 10.2375 1.5001 10.2375H10.5001C11.1376 10.2375 11.6813 9.7125 11.6813 9.05625V2.9625C11.6813 2.325 11.1376 1.8 10.5001 1.8ZM10.5001 2.64375C10.5188 2.64375 10.5376 2.64375 10.5563 2.64375L6.0001 5.56875L1.44385 2.64375C1.4626 2.64375 1.48135 2.64375 1.5001 2.64375H10.5001ZM10.5001 9.35625H1.5001C1.3126 9.35625 1.1626 9.20625 1.1626 9.01875V3.46875L5.5501 6.28125C5.68135 6.375 5.83135 6.4125 5.98135 6.4125C6.13135 6.4125 6.28135 6.375 6.4126 6.28125L10.8001 3.46875V9.0375C10.8376 9.225 10.6876 9.35625 10.5001 9.35625Z"
                                  fill="#111928"
                                />
                              </svg>
                            </span>
                            <span>demo@accessassist.in</span>
                          </div>
                          <div className="d-flex mt-2 detailsorg">
                            <span className="me-2">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.11249 11.4188C7.59374 11.4188 5.43749 10.3313 3.44999 8.45625C0.749995 5.86875 -0.393755 2.98125 0.806245 1.70625C0.862495 1.65 0.937495 1.59375 1.01249 1.55625L2.53124 0.693753C2.92499 0.468753 3.41249 0.581253 3.67499 0.956253L4.78124 2.53125C4.91249 2.71875 4.96875 2.94375 4.9125 3.16875C4.875 3.375 4.74374 3.5625 4.55624 3.69375L3.89999 4.125C4.40624 4.85625 5.77499 6.675 7.95 7.96875C7.96874 7.9875 7.98749 7.96875 7.98749 7.96875L8.45624 7.33125C8.71874 6.975 9.22499 6.88125 9.61874 7.125L11.2687 8.175C11.6625 8.41875 11.775 8.925 11.5312 9.31875L10.6312 10.7625C10.575 10.8375 10.5187 10.9125 10.4625 10.9688C10.125 11.2688 9.65624 11.4188 9.11249 11.4188ZM2.96249 1.425C2.94374 1.425 2.96249 1.425 2.96249 1.425L1.42499 2.2875C0.712495 3.05625 1.59374 5.5125 4.04999 7.8375C6.54375 10.2 9.11249 11.0438 9.93749 10.3313L10.8375 8.8875L9.18749 7.8375C9.16874 7.8375 9.14999 7.8375 9.14999 7.8375L8.68124 8.475C8.41874 8.83125 7.91249 8.925 7.53749 8.7C5.19374 7.29375 3.73125 5.34375 3.20624 4.575C3.075 4.3875 3.03749 4.1625 3.07499 3.95625C3.11249 3.73125 3.24374 3.54375 3.43124 3.43125L4.08749 3L2.99999 1.44375C2.98124 1.44375 2.96249 1.425 2.96249 1.425Z"
                                  fill="#111928"
                                />
                              </svg>
                            </span>
                            <span>8800880088</span>
                          </div>
                        </div>
                        <div
                          class="progress mt-4 mb-5"
                          style={{ borderRadius: "50px", height: "9px" }}
                        >
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-label="Basic example"
                            style={{
                              width: "50%",
                              background:
                                "linear-gradient(225.84deg, #4172EB 7.72%, #42A7E9 82.82%)",
                            }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div className="btngroup mt-5 pt-5">
                          <button
                            className="btn btn-first2 mt-5"
                            onClick={handleCancel}
                          >
                            Discard Changes
                          </button>
                          <button
                            className="btn btn-first1 mt-5"
                            // onClick={handleSave}
                            onClick={handleSubmit}
                          >
                            <span>Updateggg</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="billing"
                  role="tabpanel"
                  aria-labelledby="billing-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="change-password"
                  role="tabpanel"
                  aria-labelledby="change-password-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade settingtabs"
                  id="setting"
                  role="tabpanel"
                  aria-labelledby="setting-tab"
                  tabindex="0"
                >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12">
                        <form class="g-3 basicstyle">
                          <div className="row bgrow mb-4">
                            <div className="col-12">
                              <h4>Notifications</h4>
                              {/* <div className="border-bottom-style"></div> */}
                              <p className="title-subtext">
                                If your account has been logged into on multiple
                                devices, you can log out from here.
                              </p>
                            </div>
                            <div className="row mt-3">
                              <div className="col-4"></div>
                              <div className="col-4">
                                <p className="notifheadign">
                                  Email Notifications
                                </p>
                              </div>
                              <div className="col-3">
                                <p className="notifheadign">
                                  Push Notifications
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-4">
                                <p className="notificationlable">
                                  New Video Alert
                                </p>
                              </div>
                              <div className="col-4">
                                <div className="form-check form-switch">
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch1"
                                    checked={switch1Checked}
                                    onChange={handleSwitch1Change}
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="form-check form-switch">
                                  <Form.Check
                                    type="switch"
                                    id="custom-switch2"
                                    checked={switch2Checked}
                                    onChange={handleSwitch2Change}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-4">
                                <p className="notificationlable">New Updates</p>
                              </div>
                              <div className="col-4">
                                <div class="form-check form-switch">
                                  <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch3"
                                    checked={switch3Checked}
                                    onChange={handleSwitch3Change}
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <div class="form-check form-switch">
                                  <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch4"
                                    checked={switch4Checked}
                                    onChange={handleSwitch4Change}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-4">
                                <p className="notificationlable">
                                  Subscription Alert
                                </p>
                              </div>
                              <div className="col-4">
                                <div class="form-check form-switch">
                                  <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch5"
                                    checked={switch5Checked}
                                    onChange={handleSwitch5Change}
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <div class="form-check form-switch">
                                  <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch6"
                                    checked={switch6Checked}
                                    onChange={handleSwitch6Change}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-4">
                                <p className="notificationlable">Cart Alerts</p>
                              </div>
                              <div className="col-4">
                                <div class="form-check form-switch">
                                  <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch7"
                                    checked={switch7Checked}
                                    onChange={handleSwitch7Change}
                                  />
                                </div>
                              </div>
                              <div className="col-3">
                                <div class="form-check form-switch">
                                  <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch8"
                                    checked={switch8Checked}
                                    onChange={handleSwitch8Change}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row bgrow mb-4">
                            <div className="col-12">
                              <h4>Connected Devices</h4>
                              <p className="title-subtext">
                                If your account has been logged into on multiple
                                devices, you can log out from here.
                              </p>

                              <a
                                className="btn btn-first4"
                                onClick={() => setShowModal(true)}
                              >
                                Logout from all the Devices{" "}
                              </a>
                            </div>
                          </div>
                          <div className="row bgrow mb-4">
                            <div className="col-12">
                              <h4>Subscription</h4>
                              <p className="title-subtext">
                                If you delete your account, your personal
                                information will be wiped from our server, all
                                of your course activity will be anonymized. This
                                action cannot be undone! Cancel any active
                                subscriptions before you delete your account.
                              </p>

                              <a
                                className="btn btn-first4"
                                onClick={() => setShowModal2(true)}
                              >
                                Cancel Subscription
                              </a>
                            </div>
                          </div>
                          <div className="row bgrow mb-4">
                            <div className="col-12">
                              <h4>Deleted Account</h4>
                              <p className="title-subtext">
                                If you delete your account, your personal
                                information will be wiped from our server, all
                                of your course activity will be anonymized. This
                                action cannot be undone! Cancel any active
                                subscriptions before you delete your account.
                              </p>

                              <a
                                className="btn btn-first4"
                                onClick={() => setShowModal3(true)}
                              >
                                Delete Account{" "}
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*modal details*/}
      {isModalOpen && (
        <Orgmodaldetails
          handleCancel={() => setIsModalOpen(false)}
          handleSave={() => setIsModalOpen(true)}
        />
      )}

      {/* Logout from all the devices  */}
      {showModal && (
        <div className="popup modalcreate">
          <div className="modalpopup">
            <a href="#" className="btnclose-x" onClick={handleCancel1}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.675049C5.73755 0.675049 0.675049 5.73755 0.675049 12C0.675049 18.2626 5.73755 23.3625 12 23.3625C18.2626 23.3625 23.3625 18.2626 23.3625 12C23.3625 5.73755 18.2626 0.675049 12 0.675049ZM12 21.675C6.67505 21.675 2.36255 17.325 2.36255 12C2.36255 6.67505 6.67505 2.36255 12 2.36255C17.325 2.36255 21.675 6.71255 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                  fill="#111928"
                />
                <path
                  d="M15.4501 8.51252C15.1126 8.17502 14.5876 8.17502 14.2501 8.51252L12.0001 10.8L9.71265 8.51252C9.37515 8.17502 8.85015 8.17502 8.51265 8.51252C8.17515 8.85002 8.17515 9.37502 8.51265 9.71252L10.8001 12L8.51265 14.2875C8.17515 14.625 8.17515 15.15 8.51265 15.4875C8.66265 15.6375 8.88765 15.75 9.11265 15.75C9.33765 15.75 9.56265 15.675 9.71265 15.4875L12.0001 13.2L14.2876 15.4875C14.4376 15.6375 14.6626 15.75 14.8876 15.75C15.1126 15.75 15.3376 15.675 15.4876 15.4875C15.8251 15.15 15.8251 14.625 15.4876 14.2875L13.2001 12L15.4876 9.71252C15.7876 9.37502 15.7876 8.85002 15.4501 8.51252Z"
                  fill="#111928"
                />
              </svg>
            </a>
            <span>
              <img
                className="imagelogout"
                src="./images/Logoutq.svg"
                alt="Uploaded"
              />
            </span>
            <div className="text-center mb-4">
              <h4 className="text-center mb-4">Are you sure?</h4>
              <p>
                Are you sure, you wanna <b>Logout from all the devices</b>. You
                will be logged out from all the devices including this.
              </p>
            </div>
            <div className="btngroup">
              <button className="btn btn-first1" onClick={handleSave1}>
                <span>Yes</span>
              </button>
              <button className="btn btn-first2" onClick={handleCancel1}>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subscription  */}
      {showModal2 && (
        <div className="popup modalcreate">
          <div className="modalpopup">
            <a href="#" className="btnclose-x" onClick={handleCancel2}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.675049C5.73755 0.675049 0.675049 5.73755 0.675049 12C0.675049 18.2626 5.73755 23.3625 12 23.3625C18.2626 23.3625 23.3625 18.2626 23.3625 12C23.3625 5.73755 18.2626 0.675049 12 0.675049ZM12 21.675C6.67505 21.675 2.36255 17.325 2.36255 12C2.36255 6.67505 6.67505 2.36255 12 2.36255C17.325 2.36255 21.675 6.71255 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                  fill="#111928"
                />
                <path
                  d="M15.4501 8.51252C15.1126 8.17502 14.5876 8.17502 14.2501 8.51252L12.0001 10.8L9.71265 8.51252C9.37515 8.17502 8.85015 8.17502 8.51265 8.51252C8.17515 8.85002 8.17515 9.37502 8.51265 9.71252L10.8001 12L8.51265 14.2875C8.17515 14.625 8.17515 15.15 8.51265 15.4875C8.66265 15.6375 8.88765 15.75 9.11265 15.75C9.33765 15.75 9.56265 15.675 9.71265 15.4875L12.0001 13.2L14.2876 15.4875C14.4376 15.6375 14.6626 15.75 14.8876 15.75C15.1126 15.75 15.3376 15.675 15.4876 15.4875C15.8251 15.15 15.8251 14.625 15.4876 14.2875L13.2001 12L15.4876 9.71252C15.7876 9.37502 15.7876 8.85002 15.4501 8.51252Z"
                  fill="#111928"
                />
              </svg>
            </a>
            <span>
              <img
                className="imagelogout mb-3"
                src="./images/delete.svg"
                alt="Uploaded"
              />
            </span>
            <div className="text-center mb-4">
              <h4 className="text-center mb-4">Are you sure?</h4>
              <p>
                Are you sure, you wanna <b> cancel subscription</b>. You wont be
                able to see the Analytics section and the behavior change.
              </p>
            </div>
            <div className="btngroup">
              <button className="btn btn-first1" onClick={handleSave2}>
                <span>Yes</span>
              </button>
              <button className="btn btn-first2" onClick={handleCancel2}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Deleted Account  */}
      {showModal3 && (
        <div className="popup modalcreate">
          <div className="modalpopup">
            <a href="#" className="btnclose-x" onClick={handleCancel3}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.675049C5.73755 0.675049 0.675049 5.73755 0.675049 12C0.675049 18.2626 5.73755 23.3625 12 23.3625C18.2626 23.3625 23.3625 18.2626 23.3625 12C23.3625 5.73755 18.2626 0.675049 12 0.675049ZM12 21.675C6.67505 21.675 2.36255 17.325 2.36255 12C2.36255 6.67505 6.67505 2.36255 12 2.36255C17.325 2.36255 21.675 6.71255 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                  fill="#111928"
                />
                <path
                  d="M15.4501 8.51252C15.1126 8.17502 14.5876 8.17502 14.2501 8.51252L12.0001 10.8L9.71265 8.51252C9.37515 8.17502 8.85015 8.17502 8.51265 8.51252C8.17515 8.85002 8.17515 9.37502 8.51265 9.71252L10.8001 12L8.51265 14.2875C8.17515 14.625 8.17515 15.15 8.51265 15.4875C8.66265 15.6375 8.88765 15.75 9.11265 15.75C9.33765 15.75 9.56265 15.675 9.71265 15.4875L12.0001 13.2L14.2876 15.4875C14.4376 15.6375 14.6626 15.75 14.8876 15.75C15.1126 15.75 15.3376 15.675 15.4876 15.4875C15.8251 15.15 15.8251 14.625 15.4876 14.2875L13.2001 12L15.4876 9.71252C15.7876 9.37502 15.7876 8.85002 15.4501 8.51252Z"
                  fill="#111928"
                />
              </svg>
            </a>
            <span>
              <img
                className="imagelogout mb-3"
                src="./images/Deleteall.svg"
                alt="Uploaded"
              />
            </span>
            <div className="text-center mb-4">
              <h4 className="text-center mb-4">Are you sure?</h4>
              <p>
                Are you sure, you wanna <b>delete your account</b>.
              </p>
            </div>
            <div className="btngroup">
              <button className="btn btn-first1" onClick={handleSave3}>
                <span>Yes</span>
              </button>
              <button className="btn btn-first2" onClick={handleCancel3}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Organizationprofile;
