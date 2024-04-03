import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import axios from 'axios';
import ReactPlayer from 'react-player';
import DashboardCard from '../components/organization/DashboardCard';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Grid, Stack } from '@mui/material';
import Slider from 'react-slick';
import DashboardCard1 from '../components/organization/DashboardCard1';

function Dashboard() {

  // states and variables
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [activeTab, setActiveTab] = useState('All');
  const [recomended, setRecomended] = useState([]);
  const [trending, setTrending] = useState([]);
  const [module, setModule] = useState([]);
  const [loading, setLoading] = useState(false)
  const saving = module[0]?.saving_module
 console.log(saving);

  useEffect(() => {
  axios.post(`${baseURL}/Organization/Organization_Dashboard`, { type: "All" }).then((res) => {
      const data = res.data
       console.log(data);
      setRecomended(data?.reomended_obj)
      setTrending(data?.trending_obj)
      setModule(data?.module_list)

  });
  },[])

  const handleTabClick = async (tab) => {
    setLoading(true)
    setActiveTab(tab);

    try {
      const response = await axios.post(`${baseURL}/Organization/Organization_Dashboard`, { type: tab });
      const data = response.data;
      if (data.status === 1 && data.message === "Contributor content") {
        setRecomended(data?.reomended_obj)
        setTrending(data?.trending_obj)
        setModule(data?.module_list)
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }

  };

  //slider settings 
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
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide:1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  
  return (
    <Layout>
      {
        loading ? 
        <Stack display={"flex"} justifyItems={"center"} alignItems={"center"}>
          <Spinner />
        </Stack> :
          <>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              {['All', 'Ecommerce', 'Loan', 'Saving'].map(tab => (
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
            <div className="row">
              <div className="col-lg-9">
                <img className="dbbaner" src={"./images/bannersvg.svg"} alt="" />
              </div>
              <div className="col-lg-3">
                <div className="bannercarvideo position-relative">
                  <div className="card cardcont mb-3"  >
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
              <div className="mt-4">
                <h3>Recommended</h3>
                <Grid container display="flex" direction="row" flexDirection="row" gap={2}>
               {/* <Slider {...videosildercard}>  */}
                  {recomended?.map((item) => (
                    <Grid item >
                      <DashboardCard item={item} />
                    </Grid>
                  ))}
                  {/* </Slider> */}
                </Grid>
              </div>
              <div className="mt-4">
                <h3>Trending</h3>
                <Grid container display="flex" direction="row" flexDirection="row" gap={2}>
               {/* <Slider {...videosildercard}>  */}
                  {trending?.map((item) => (
                    <Grid item >
                      <DashboardCard item={item} />
                    </Grid>
                  ))}
                  {/* </Slider> */}
                </Grid>
              </div>
              <div className="mt-4">
                <h3>Module</h3>
                <Grid container display="flex" direction="row" flexDirection="row" gap={2}>
               {/* <Slider {...videosildercard}>  */}
                    <Grid item >
                      {/* <DashboardCard1 item={saving} /> */}
                    </Grid>
                  {/* </Slider> */}
                </Grid>
              </div>
            </div>
          </>
      }

    </Layout>
  )
}

export default Dashboard