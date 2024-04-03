import React, { useEffect, useState } from "react";

import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';

import Contentcardfull from "./Contectcardfull";
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import ReactPlayer from "react-player";

function Searchbar() {


    // const userData = useSelector((state) => state.user.items);
    // console.log("storedata in Searchbar:---->", userData);

    const [inputValue, setInputValue] = useState("");

    const [show, setShow] = useState(false);
    const [titles, setTitles] = useState([]);
    const [loginUserData, setloginUserData] = useState([]);

    const [status, setstatus] = useState("");
    const [files, setFiles] = useState([])
    const [datalist, setDatalist] = useState("")
    // const [apiresponse, setapiresponse] = useState("");

    const baseURL = "http://192.168.1.83:8000";
    const media_base_url = "http://192.168.1.83:8000/media/"



    // console.log("videolistttttttttt->", files)
    const handleInputChange = async (event) => {
        const value = event.target.value;
        setInputValue(value);
        if (value) {
            setShow(true);
            setstatus('');
        }
        else {
            setShow(false);
        }
        try {
            const res = await axios.post(`${baseURL}/Contributor/Filter_Suggetions_By_Title`, {
                title: value
            });
            if (res.data.title_list) {
                const items = res.data.title_list.map(titleObject => titleObject.title);
                setTitles(items);
                // console.log("Titles:", items);
            } else {
                console.log("No titles found in the response");
            }
            console.log("API Response:", res.data);
        } catch (error) {
            console.error('Error making axios request:', error);
        }
    };
    const handleSearch = async (e) => {

        const responseSearch = await axios.post(`${baseURL}/Contributor/Get_Contributor_Content`, {
            title: inputValue
        });
        console.log("second title =>", inputValue)

        // setstatus(1);

        // console.log("responseSearch.data", responseSearch.data)

        setstatus(responseSearch.data.status);
        setShow(false)

        const videoList = responseSearch.data.content_list.map(filelist => ({
            item: filelist.file
        }));
        setFiles(videoList)
        console.log("videoList-->", videoList)
        // console.log("sdfghjkkjhgffbnm--->", files)


        if (responseSearch.data.status === 1) {
            // setapiresponse(responseSearch.data)
            setDatalist(responseSearch.data.content_list)
            const items = responseSearch.data.content_list.map(titleObject => titleObject.title);
            console.log("responseSearch.data.content_lis", responseSearch.data.content_list)
            setloginUserData(items)
            console.log("responseSearch.data.content_list", responseSearch.data.content_list)

        }
        setShow(false)
        console.log("searchValue---->", responseSearch.data.content_list)

    };

    useEffect(() => {
        // console.log("Updated files:", files);
    }, [files]);

    const handleTitleClick = (selectedTitle) => {
        setInputValue(selectedTitle)
    };

    const handleClose = () => {
        setInputValue("")
        setShow(false)
        setDatalist([]);
    }



    return (

        <div className="search-container position-relative ms-lg-1 ms-4">
            {/* <form action="/action_page.php"> */}
            <form onSubmit={(e) => (e.preventDefault())}>
                {/* <input
                        type="text"
                        className="form-control indbsearch"
                        name="search"
                        onFocus={handleSearchFocus}
                        onBlur={handleSearchBlur}
                        autoComplete="off"
                    /> */}

                <input className="form-control indbsearch"
                    type="text"
                    name="search"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search"
                    autoComplete="off"
                />

                {/* <Link to="/searchvideopage"> */}
                    {inputValue ? <button className="searchbtn " type="button" onClick={handleClose} style={{ marginRight: '40px' }} ><CloseIcon /></button> : ''}
                    <button className="searchbtn " type="button" onClick={handleSearch} ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4 14.6L11.4 10.6C13.425 8.17499 13.3 4.54999 11.025 2.24999C9.85001 1.07499 8.30001 0.424988 6.65001 0.424988C4.97501 0.449988 3.42501 1.07499 2.25001 2.24999C1.07501 3.42499 0.450012 4.97499 0.450012 6.62499C0.450012 8.27499 1.10001 9.82499 2.27501 11C3.47501 12.2 5.07501 12.8 6.65001 12.8C8.05001 12.8 9.47501 12.325 10.625 11.375L14.625 15.375C14.725 15.475 14.875 15.55 15.025 15.55C15.175 15.55 15.325 15.5 15.425 15.375C15.625 15.175 15.625 14.825 15.4 14.6ZM3.05001 10.225C2.10001 9.24999 1.57501 7.97499 1.57501 6.62499C1.57501 5.27499 2.10001 3.99999 3.05001 3.04999C4.00001 2.09999 5.27501 1.57499 6.62501 1.57499C7.97501 1.57499 9.25001 2.09999 10.2 3.04999C12.175 5.02499 12.175 8.24999 10.2 10.225C8.25001 12.2 5.02501 12.2 3.05001 10.225Z" fill="#111928" />
                    </svg>
                    </button>


                    {show && status === '' && (
                        <div className="searchbox-history">

                            {titles.length > 0 && (


                                <ul>
                                    {titles.map((item, index) => (
                                        <li key={index}>
                                            <button onClick={() => handleTitleClick(item)}>{item}</button>
                                        </li>
                                    ))}
                                </ul>

                            )}

                        </div>
                    )}

                    {status === 1 && (
                        <div className="searchbox-history">

                            {/* {loginUserData.length > 0 && (

                            <ul>
                                {loginUserData.map((item, index) => (
                                    <li key={index}>
                                        <button onClick={() => handleTitleClick(item)}>{item}</button>


                                    </li>
                                ))}
                            </ul>

                        )} */}




                            {/* {status === 1 && */}


                            <Contentcardfull data={datalist} />
                            <button className="searchbtn" type="button" onClick={handleClose}>
                                <CloseIcon />
                            </button>




                            {/* }  */}


                        </div>
                    )}  
                {/* </Link> */}
            </form>

        </div>
    );
}

export default Searchbar;

