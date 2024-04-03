import React, { useState, useEffect } from "react";
import Sidebar from "../include/Sidebar";
import ContentCard from "../include/ContentCard";
import axios from "axios";
import OrgHeaderDb from "./OrgHeaderDB";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem } from "../../store/userSlice";
import Slider from "react-slick";
import { Card, CardContent, Typography } from "@mui/material";


function OrganizationDb() {
    
    const baseURL = process.env.REACT_APP_BASE_URL;

    const media_base_url = "http://192.168.1.98:8000/media/"
    const navigate = useNavigate();
    const user = useSelector(state => state);
        console.log(user,"reduxusr");
    const [isHovered, setIsHovered] = useState(false);
    
    const [activeTab, setActiveTab] = useState('All');
    const [hoveredVideoId, setHoveredVideoId] = useState(null);
    const dispatch = useDispatch();
    const [storedata, setStoredata] = useState({
        reomended_obj: [],
        trending_obj: [],
        module_list: []
    });

  const userData = useSelector((state) => state.user.items);
  // console.log("storedata in Searchbardfghj:---->", userData);

  //   {  reactplayer}

  const handleMouseEnter = (itemId) => {
    setHoveredVideoId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredVideoId(null);
  };
  const handleClick = () => {
    navigate("/video", {
      state: {
        videoUrl:
          "https://www.dropbox.com/scl/fi/y9ga53ae6frxf1s0ymvvw/rand.mp4?rlkey=jhe86mf1rshdvg3bmp3bjeroc&dl=0",
      },
    });
  };
  const controls = isHovered ? true : false;

  const handleTabClick = async (tab) => {
    setActiveTab(tab);
    dispatch(addItem(filteredContent));

    try {
      const response = await axios.post(
        `${baseURL}/Organization/Organization_Dashboard`,
        { type: tab }
      );
      const data = response.data;
      if (data.status === 1 && data.message === "Contributor content") {
        let updatedData = {
          reomended_obj: data.reomended_obj || [],
          trending_obj: data.trending_obj || [],
          module_list: data.module_list || [],
        };
        switch (tab) {
          case "All":
            updatedData.module_list = [
              data.module_list.find((item) => item.saving_module) || {},
              data.module_list.find((item) => item.investment_module) || {},
              data.module_list.find((item) => item.loan_module) || {},
              data.module_list.find((item) => item.ecommerce_module) || {},
            ];
            break;
          default:
            break;
        }

        setStoredata(updatedData);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    handleTabClick(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${baseURL}/Organization/Organization_Dashboard`,
          { type: "All" }
        );
        const data = response.data;
        if (data.status === 1 && data.message === "Contributor content") {
          let updatedData = {
            reomended_obj: data.reomended_obj || [],
            trending_obj: data.trending_obj || [],
            module_list: data.module_list || [],
          };

          setStoredata(updatedData);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  const filteredContent =
    activeTab === "All"
      ? storedata
      : {
          reomended_obj: storedata.reomended_obj ?? [],
          trending_obj: storedata.trending_obj ?? [],
          module_list: storedata.module_list ?? [],
        };

  console.log("filteredContent", filteredContent);

  var videosildercard = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
        <>
            <OrgHeaderDb />
            <div className="body-header pt-lg-5 pt-4"></div>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-lg-2 ps-0">
                            <Sidebar />

                        </div>
                        {/* <div className="col-12"> */}
                        <div className="col-lg-10">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                {['All',  'Ecommerce', 'Loan','Saving'].map(tab => (
                                    <li key={tab} className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div class="tab-content dbpage" id="pills-tabContent">


                                <>

                                    {activeTab === 'All' && (
                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">


                                            <div className="row">
                                                <div className="col-lg-9">
                                                    <img className="dbbaner" src={"./images/bannersvg.svg"} alt="" />
                                                </div>
                                                <div className="col-lg-3">

                                                    <div className="bannercarvideo position-relative">

                                                        <div className="card cardcont mb-3" onMouseLeave={handleMouseLeave} >
                                                            <img className="dbbaner1" src={"./images/bannerdb.jpg"} alt="" />
                                                            <ReactPlayer className="videoradias"
                                                                width="100%"
                                                                height="134px"
                                                                url={'https://youtu.be/tA4AFP2aXWA?si=_hxdJKuMt5yB5k0w'}
                                                            />
                                                            <div className="card-body p-2 ">
                                                                <p className="titlecard">Tutorial</p>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <h3>Recommended</h3>
                                                <div className="row">

                                                    <div className="col-12">
                                                        <Slider {...videosildercard}>
                                                            {filteredContent.reomended_obj.map(item => (
                                                            
                                                            <div key={item.id}>
                                                            <Card className="cardcont mb-3" onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave} onClick={() => handleClick( item.file)}>
                                                              <ReactPlayer
                                                                // url={mediaBaseUrl + item.file}
                                                                muted={true}
                                                                playing={hoveredVideoId === item.id}
                                                                light={hoveredVideoId === item.id ? null : + item.thumbnail}
                                                                width="100%"
                                                                height="152px"
                                                                config={{
                                                                  file: {
                                                                    attributes: {
                                                                      onContextMenu: (e) => e.preventDefault(),
                                                                    },
                                                                  },
                                                                }}
                                                              />
                                                              <CardContent>
                                                                <Typography variant="h6" component="p" className="titlecard">
                                                                  {item.type}
                                                                </Typography>
                                                                <Typography variant="body2" component="p" className="descard">
                                                                  {item.description}
                                                                </Typography>
                                                                <Typography variant="body2" component="p" className="videoname">
                                                                  Rahul
                                                                </Typography>
                                                                <div className="d-flex starcard justify-content-between">
                                                                  <span className="d-flex">
                                                                    <Typography variant="body2" component="p">
                                                                      4.2 (7.2k+)
                                                                    </Typography>
                                                                  </span>
                                                                  <span>
                                                                    <Typography variant="body2" component="p">
                                                                      2 weeks ago
                                                                    </Typography>
                                                                  </span>
                                                                </div>
                                                              </CardContent>
                                                            </Card>
                                                          </div>
                                                      
                                                            ))}
                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>

                      <div className="mt-4">
                        <h3>Trending</h3>
                        <div className="row">
                          <div className="col-12">
                            <Slider {...videosildercard}>
                              {filteredContent.reomended_obj.map((item) => (
                                <div key={item.id} className="">
                                  <div
                                    className="card cardcont mb-3"
                                    onMouseEnter={() =>
                                      handleMouseEnter(item.id)
                                    }
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() =>
                                      handleClick(media_base_url + item.file)
                                    }
                                  >
                                    <ReactPlayer
                                      url={media_base_url + item.file}
                                      muted={true}
                                      playing={hoveredVideoId === item.id}
                                      light={
                                        hoveredVideoId === item.id
                                          ? null
                                          : media_base_url + item.thumbnail
                                      }
                                      width="100%"
                                      height="152px"
                                      config={{
                                        file: {
                                          attributes: {
                                            onContextMenu: (e) =>
                                              e.preventDefault(),
                                          },
                                        },
                                      }}
                                    />

                                    <div className="card-body pt-2 px-2 ">
                                      <p className="titlecard">{item.type}</p>

                                      <p className="descard">
                                        {item.description}
                                      </p>
                                      <p className="videoname">Rahul</p>

                                      <div className="d-flex starcard justify-content-between">
                                        <span className="d-flex ">
                                          <p>4.2 (7.2k+)</p>
                                        </span>
                                        <span>
                                          <p>2 weeks ago</p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </Slider>
                          </div>
                          
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3>Module</h3>

                        <div className="row">
                          <div className="col-12">
                            <Slider {...videosildercard}>
                              {filteredContent.module_list.map(
                                (moduleItem, index) => {
                                  const moduleKey = Object.keys(moduleItem)[0];
                                  const item = moduleItem[moduleKey];

                                  // { console.log("item", item.description) }
                                  // { console.log("media_base_url of module + item.file", media_base_url + item.file) }

                                  if (moduleKey === "saving_module") {
                                    return (
                                      <div
                                        key={index}
                                        className="col-lg-3 col-md-6"
                                      >
                                        <div
                                          className="card cardcont mb-3"
                                          onMouseEnter={() =>
                                            handleMouseEnter(item.id)
                                          }
                                          onMouseLeave={handleMouseLeave}
                                          onClick={() =>
                                            handleClick(baseURL + item.file)
                                          }
                                        >
                                          <ReactPlayer
                                            // url={media_base_url + item.file}

                                            url={baseURL + item.file}
                                            muted={true}
                                            light={
                                              hoveredVideoId === item.id
                                                ? null
                                                : baseURL + item.thumbnail
                                            }
                                            playing={hoveredVideoId === item.id}
                                            width="100%"
                                            height="152px"
                                            config={{
                                              file: {
                                                attributes: {
                                                  onContextMenu: (e) =>
                                                    e.preventDefault(),
                                                },
                                              },
                                            }}
                                          />
                                          {/* <div className="card-body pt-2 px-2 ">
                                                                            <div className="userimagedb d-flex align-items-center">
                                                                                <p>{item.type}</p>
                                                                            </div>
                                                                            <div className="title">
                                                                                <p>{item.saving_video_count}</p>
                                                                            </div>
                                                                            <p className="titlecard">{item.title}</p>
                                                                            <p className="descard">{item.description}</p>
                                                                            <div className="d-flex starcard justify-content-between">
                                                                                <span className="d-flex ">
                                                                                    <img src={"./images/star-fill.svg"} alt="" />
                                                                                    <p>({item.level})</p>
                                                                                </span>
                                                                                <span><p>{item.created_date}</p></span>
                                                                            </div>
                                                                        </div> */}
                                          <div className="card-body pt-2 px-2 ">
                                            <p className="titlecard">
                                              {item.type}
                                            </p>

                                            <p className="descard">
                                              {item.description}
                                            </p>
                                            <p className="videoname">Rahul</p>

                                            <div className="d-flex starcard justify-content-between">
                                              <span className="d-flex ">
                                                <p>4.2 (7.2k+)</p>
                                              </span>
                                              <span>
                                                <p>2 weeks ago</p>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }

                                  if (moduleKey === "investment_module") {
                                    return (
                                      <div
                                        key={index}
                                        className="col-lg-3 col-md-6"
                                      >
                                        <div
                                          className="card cardcont mb-3"
                                          onMouseEnter={() =>
                                            handleMouseEnter(item.id)
                                          }
                                          onMouseLeave={handleMouseLeave}
                                          onClick={() =>
                                            handleClick(baseURL + item.file)
                                          }
                                        >
                                          <ReactPlayer
                                            url={baseURL + item.file}
                                            muted={true}
                                            light={
                                              hoveredVideoId === item.id
                                                ? null
                                                : baseURL + item.thumbnail
                                            }
                                            playing={hoveredVideoId === item.id}
                                            width="100%"
                                            height="152px"
                                            config={{
                                              file: {
                                                attributes: {
                                                  onContextMenu: (e) =>
                                                    e.preventDefault(),
                                                },
                                              },
                                            }}
                                          />
                                          {/* <div className="card-body pt-2 px-2 ">
                                                                            <div className="userimagedb d-flex align-items-center">
                                                                                <p>{item.type}</p>
                                                                            </div>
                                                                            <div className="title">
                                                                                <p>{item.investment_video_count}</p>
                                                                            </div>
                                                                            <p className="titlecard">{item.title}</p>
                                                                            <p className="descard">{item.description}</p>
                                                                            <div className="d-flex starcard justify-content-between">
                                                                                <span className="d-flex ">
                                                                                    <img src={"./images/star-fill.svg"} alt="" />
                                                                                    <p>({item.level})</p>
                                                                                </span>
                                                                                <span><p>{item.created_date}</p></span>
                                                                            </div>
                                                                        </div> */}
                                          <div className="card-body pt-2 px-2 ">
                                            <p className="titlecard">
                                              {item.type}
                                            </p>

                                            <p className="descard">
                                              {item.description}
                                            </p>
                                            <p className="videoname">Rahul</p>

                                            <div className="d-flex starcard justify-content-between">
                                              <span className="d-flex ">
                                                <p>4.2 (7.2k+)</p>
                                              </span>
                                              <span>
                                                <p>2 weeks ago</p>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }
                                  if (moduleKey === "loan_module") {
                                    return (
                                      <div
                                        key={index}
                                        className="col-lg-3 col-md-6"
                                      >
                                        <div
                                          className="card cardcont mb-3"
                                          onMouseEnter={() =>
                                            handleMouseEnter(item.id)
                                          }
                                          onMouseLeave={handleMouseLeave}
                                          onClick={() =>
                                            handleClick(baseURL + item.file)
                                          }
                                        >
                                          <ReactPlayer
                                            // url={media_base_url + item.file}
                                            url={baseURL + item.file}
                                            muted={true}
                                            light={
                                              hoveredVideoId === item.id
                                                ? null
                                                : baseURL + item.thumbnail
                                            }
                                            playing={hoveredVideoId === item.id}
                                            width="100%"
                                            height="152px"
                                            config={{
                                              file: {
                                                attributes: {
                                                  onContextMenu: (e) =>
                                                    e.preventDefault(),
                                                },
                                              },
                                            }}
                                          />
                                          {/* <div className="card-body pt-2 px-2 ">
                                                                            <div className="userimagedb d-flex align-items-center">
                                                                                <p>{item.type}</p>
                                                                            </div>
                                                                            <div className="title">
                                                                                <p>{item.loan_video_count}</p>
                                                                            </div>
                                                                            <p className="titlecard">{item.title}</p>
                                                                            <p className="descard">{item.description}</p>
                                                                            <div className="d-flex starcard justify-content-between">
                                                                                <span className="d-flex ">
                                                                                    <img src={"./images/star-fill.svg"} alt="" />
                                                                                    <p>({item.level})</p>
                                                                                </span>
                                                                                <span><p>{item.created_date}</p></span>
                                                                            </div>
                                                                        </div> */}
                                          <div className="card-body pt-2 px-2 ">
                                            <p className="titlecard">
                                              {item.type}
                                            </p>

                                            <p className="descard">
                                              {item.description}
                                            </p>
                                            <p className="videoname">Rahul</p>

                                            <div className="d-flex starcard justify-content-between">
                                              <span className="d-flex ">
                                                <p>4.2 (7.2k+)</p>
                                              </span>
                                              <span>
                                                <p>2 weeks ago</p>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }

                                  if (moduleKey === "ecommerce_module") {
                                    return (
                                      <div
                                        key={index}
                                        className="col-lg-3 col-md-6"
                                      >
                                        <div
                                          className="card cardcont mb-3"
                                          onMouseEnter={() =>
                                            handleMouseEnter(item.id)
                                          }
                                          onMouseLeave={handleMouseLeave}
                                          onClick={() =>
                                            handleClick(baseURL + item.file)
                                          }
                                        >
                                          <ReactPlayer
                                            url={baseURL + item.file}
                                            muted={true}
                                            light={
                                              hoveredVideoId === item.id
                                                ? null
                                                : baseURL + item.thumbnail
                                            }
                                            playing={hoveredVideoId === item.id}
                                            width="100%"
                                            height="152px"
                                            config={{
                                              file: {
                                                attributes: {
                                                  onContextMenu: (e) =>
                                                    e.preventDefault(),
                                                },
                                              },
                                            }}
                                          />
                                          {/* <div className="card-body pt-2 px-2 ">
                                                                            <div className="userimagedb d-flex align-items-center">
                                                                                <p>{item.type}</p>
                                                                            </div>

                                                                            <div className="title">
                                                                                <p>{item.ecommerce_video_count}</p>
                                                                            </div>
                                                                            <p className="titlecard">{item.title}</p>
                                                                            <p className="descard">{item.description}</p>
                                                                            <div className="d-flex starcard justify-content-between">
                                                                                <span className="d-flex ">
                                                                                    <img src={"./images/star-fill.svg"} alt="" />
                                                                                    <p>({item.level})</p>
                                                                                </span>
                                                                                <span><p>{item.created_date}</p></span>
                                                                            </div>
                                                                        </div> */}
                                          <div className="card-body pt-2 px-2 ">
                                            <p className="titlecard">
                                              {item.type}
                                            </p>

                                            <p className="descard">
                                              {item.description}
                                            </p>
                                            <p className="videoname">Rahul</p>

                                            <div className="d-flex starcard justify-content-between">
                                              <span className="d-flex ">
                                                <p>4.2 (7.2k+)</p>
                                              </span>
                                              <span>
                                                <p>2 weeks ago</p>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }

                                  return null;
                                }
                              )}
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>

                {/* {   types Video} */}

                {["Saving", "Investment", "Ecommerce", "Loan"].map((tab) => (
                  <div
                    key={tab}
                    className={`tab-pane fade ${
                      activeTab === tab ? "show active" : ""
                    }`}
                    id={`pills-${tab.toLowerCase()}`}
                    role="tabpanel"
                    aria-labelledby={`pills-${tab.toLowerCase()}-tab`}
                    tabindex="0"
                  >
                    <div className="row">
                      <div className="col-lg-9">
                        <img
                          className="dbbaner"
                          src={"./images/bannersvg.svg"}
                          alt=""
                        />
                      </div>
                      <div className="col-lg-3">
                        <div className="bannercarvideo position-relative">
                          <div
                            className="card cardcont mb-3"
                            onMouseLeave={handleMouseLeave}
                          >
                            <img
                              className="dbbaner1"
                              src={"./images/bannerdb.jpg"}
                              alt=""
                            />
                            <ReactPlayer
                              className="videoradias"
                              width="100%"
                              height="134px"
                              url={
                                "https://youtu.be/tA4AFP2aXWA?si=_hxdJKuMt5yB5k0w"
                              }
                            />
                            <div className="card-body p-2 ">
                              <p className="titlecard">Tutorial</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <h3>Recommended</h3>
                      <div className="row">
                        <Slider {...videosildercard}>
                          {filteredContent.reomended_obj.map((item) => (
                            <div key={item.id} className="col-lg-3 col-md-6">
                              <div
                                className="card cardcont mb-3"
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() =>
                                  handleClick(media_base_url + item.file)
                                }
                              >
                                <ReactPlayer
                                  url={media_base_url + item.file}
                                  muted={true}
                                  light={
                                    hoveredVideoId === item.id
                                      ? null
                                      : media_base_url + item.thumbnail
                                  }
                                  playing={hoveredVideoId === item.id}
                                  width="100%"
                                  height="134px"
                                  config={{
                                    file: {
                                      attributes: {
                                        onContextMenu: (e) =>
                                          e.preventDefault(),
                                      },
                                    },
                                  }}
                                />
                                {/* <div className="card-body pt-2 px-2 ">
                                                                <div className="userimagedb d-flex align-items-center">
                                                                    <p>{item.type}</p>
                                                                </div>
                                                                <p className="titlecard">{item.title}</p>
                                                                <p className="descard">{item.description}</p>
                                                                <div className="d-flex starcard justify-content-between">
                                                                    <span className="d-flex ">
                                                                        <img src={"./images/star-fill.svg"} alt="" />
                                                                        <p>({item.level})</p>
                                                                    </span>
                                                                    <span><p>{item.created_date}</p></span>
                                                                </div>
                                                            </div> */}
                                <div className="card-body pt-2 px-2 ">
                                  <p className="titlecard">{item.type}</p>

                                  <p className="descard">{item.description}</p>
                                  <p className="videoname">Rahul</p>

                                  <div className="d-flex starcard justify-content-between">
                                    <span className="d-flex ">
                                      <p>4.2 (7.2k+)</p>
                                    </span>
                                    <span>
                                      <p>2 weeks ago</p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <h3>Trending</h3>
                      <div className="row">
                        <Slider {...videosildercard}>
                          {filteredContent.trending_obj.map((item) => (
                            <div key={item.id} className="col-lg-3 col-md-6">
                              <div
                                className="card cardcont mb-3"
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() =>
                                  handleClick(media_base_url + item.file)
                                }
                              >
                                <ReactPlayer
                                  url={media_base_url + item.file}
                                  muted={true}
                                  light={
                                    hoveredVideoId === item.id
                                      ? null
                                      : media_base_url + item.thumbnail
                                  }
                                  playing={hoveredVideoId === item.id}
                                  width="100%"
                                  height="134px"
                                  config={{
                                    file: {
                                      attributes: {
                                        onContextMenu: (e) =>
                                          e.preventDefault(),
                                      },
                                    },
                                  }}
                                />
                                {/* <div className="card-body pt-2 px-2 ">
                                                                <div className="userimagedb d-flex align-items-center">
                                                                    <p>{item.type}</p>
                                                                </div>
                                                                <p className="titlecard">{item.title}</p>
                                                                <p className="descard">{item.description}</p>
                                                                <div className="d-flex starcard justify-content-between">
                                                                    <span className="d-flex ">
                                                                        <img src={"./images/star-fill.svg"} alt="" />
                                                                        <p>({item.level})</p>
                                                                    </span>
                                                                    <span><p>{item.created_date}</p></span>
                                                                </div>
                                                            </div> */}
                                <div className="card-body pt-2 px-2 ">
                                  <p className="titlecard">{item.type}</p>

                                  <p className="descard">{item.description}</p>
                                  <p className="videoname">Rahul</p>

                                  <div className="d-flex starcard justify-content-between">
                                    <span className="d-flex ">
                                      <p>4.2 (7.2k+)</p>
                                    </span>
                                    <span>
                                      <p>2 weeks ago</p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <h3>Module</h3>
                      <div className="row">
                        <Slider {...videosildercard}>
                          {storedata.module_list.map((moduleItem, index) => {
                            let item = null;
                            switch (tab) {
                              case "Saving":
                                item = moduleItem.module;
                                break;
                              case "Investment":
                                item = moduleItem.module;
                                break;
                              case "Ecommerce":
                                item = moduleItem.module;
                                break;
                              case "Loan":
                                item = moduleItem.module;
                                break;
                              default:
                                break;
                            }

                            if (item) {
                              return (
                                <div key={index} className="col-lg-3 col-md-6">
                                  <div
                                    className="card cardcont mb-3"
                                    onMouseEnter={() =>
                                      handleMouseEnter(item.id)
                                    }
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() =>
                                      handleClick(baseURL + item.file)
                                    }
                                  >
                                    <ReactPlayer
                                      url={baseURL + moduleItem.module.file}
                                      muted={true}
                                      light={
                                        hoveredVideoId === item.id
                                          ? null
                                          : baseURL + item.thumbnail
                                      }
                                      playing={hoveredVideoId === item.id}
                                      width="100%"
                                      height="134px"
                                      config={{
                                        file: {
                                          attributes: {
                                            onContextMenu: (e) =>
                                              e.preventDefault(),
                                          },
                                        },
                                      }}
                                    />
                                    {/* <div className="card-body pt-2 px-2 ">
                                                                        <p>video count {moduleItem.module.video_count}</p>
                                                                        <p>Type: {moduleItem.module.type}</p>
                                                                        <p className="descard">{moduleItem.module.description}</p>
                                                                        <p className="titlecard">{moduleItem.module.title}</p>
                                                                        <div className="d-flex starcard justify-content-between">
                                                                            <span className="d-flex ">
                                                                                <img src={"./images/star-fill.svg"} alt="" />
                                                                                <p>({moduleItem.module.level})</p>
                                                                            </span>
                                                                            <span><p>{moduleItem.module.created_date}</p></span>
                                                                        </div>
                                                                    </div> */}
                                    <div className="card-body pt-2 px-2 ">
                                      <p className="titlecard">{item.type}</p>

                                      <p className="descard">
                                        {item.description}
                                      </p>
                                      <p className="videoname">Rahul</p>

                                      <div className="d-flex starcard justify-content-between">
                                        <span className="d-flex ">
                                          <p>4.2 (7.2k+)</p>
                                        </span>
                                        <span>
                                          <p>2 weeks ago</p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            } else {
                              return null;
                            }
                          })}
                        </Slider>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default OrganizationDb;
