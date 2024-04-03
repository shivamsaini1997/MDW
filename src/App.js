// import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/organization/Login';
import SignUp from './components/organization/Signup';
import ConSignUp from './components/contributor/ContributorSignup';
import ConLogin from './components/contributor/ContributorLogin';
import Institution from './components/institution/InstitutionDb';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'react-toastify/dist/ReactToastify.css';
import InstitutionLogin from './components/institution/InstitutionLogin';
import InstitutionSignup from './components/institution/InstitutionSignup';
import Searchvideopage from './components/institution/SearchvideoCard';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from './components/Errorpage.js';
import ContentList from './components/include/ContentList.js';
import Videopage from './components/institution/Videopage.js';
import OrganizationDb from './components/organization/OrganizationDb.jsx';
import Organizationprofile from './components/organization/organizationProfile.jsx';
import OpensModule from './components/organization/OpensModule.jsx';
import Contentcardfull from './components/include/Contectcardfull.jsx';
import Orgmodaldetails from './components/organization/orgmodaldetails.js';
import VideoOpenDetails from './components/organization/VideoOpenDetails.jsx';
import OpensVideo from './components/organization/OpensVideo.jsx';
import EditPanelCard from './components/organization/EditPanelCard.jsx';
import EditPanelList from './components/organization/EditPanelList.jsx';

import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard.jsx';


//created a hoc function for authentication
function PrivateRoute({ element: Element, ...rest }) {
  const userType = localStorage.getItem('User_Type');
  const userId = localStorage.getItem('User_Id');

  // Redirect to login if user is not authenticated
  if (!userType || !userId) {
    return <Navigate to="/organization-login" />;
  }

  // Otherwise, render the protected component
  return Element;
}



function App() {
  const userType = localStorage.getItem('User_Type');
  const userId = localStorage.getItem('User_Id');
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={!userId && !userType ? <Login /> : <OrganizationDb />} />
          <Route exact path="/Dashboard" element={ <Dashboard />} />
          <Route exact path="/institution-dashboard" element={<Institution />} />
          <Route exact path="/organization-dashboard" element={<PrivateRoute element={<OrganizationDb />} />} />
          <Route exact path="/organization-login" element={<Login />} />
          <Route exact path="/organization-signup" element={<SignUp />} />
          <Route exact path="/ConritutorSignUp" element={<ConSignUp />} />
          <Route exact path="/ConritutorLogin" element={<ConLogin />} />
          <Route exact path="/InstitutionLogin" element={<InstitutionLogin />} />
          <Route exact path="/InstitutionSignup" element={<InstitutionSignup />} />
          <Route exact path="/searchvideopage" element={<Searchvideopage />} />
          <Route exact path="/" element={<Contentcardfull />} />
          <Route exact path="/organization-profile" element={<PrivateRoute element={<Organizationprofile />} />} />
          <Route exact path="/video" element={<Videopage />} />
          <Route exact path="/opensmodule" element={<OpensModule />} />
          <Route exact  path="/opens-video" element={<OpensVideo />} /> 
          <Route exact path = "/listvideo"  element={Contentcardfull}/>
          <Route exact path ="/video-open-details" element={<VideoOpenDetails/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
  
    
      <ToastContainer />
    </>
  );
}

export default App;
