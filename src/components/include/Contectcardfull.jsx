import React,  { useState } from "react";

import ReactPlayer from 'react-player'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Contentcardfull(props) {
    const userData = useSelector(state => state.user.items);
   
    const baseURL = "http://192.168.1.87:8000";
    const media_base_url = "http://192.168.1.87:8000/media/";
    const [hoveredVideoId, setHoveredVideoId] = useState(null);

    const videodata = props.data
    console.log("Arti patwa", videodata)

  
    const handleClick = () => {
      

    }
    const handleMouseEnter = (itemId) => {
        setHoveredVideoId(itemId);
    };

    const handleMouseLeave = () => {
        setHoveredVideoId(null);
    };

    return (
        <>
            <div class="card mb-3" >
                {/* <div class="row g-0"> */}

                {/* {videodata.map(item => ( */}
                {props.data && props.data.map(item => (

                    <div key={item.id} className="col-lg-3 col-md-6">
                        <div className="card cardcont mb-3" onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave} onClick={() => handleClick(media_base_url + item.file)}>

                            {console.log("videochecking", media_base_url + item.file)}
                            <ReactPlayer
                                url={media_base_url + item.file}
                                muted={true}
                                light={hoveredVideoId === item.id ? null : media_base_url + item.thumbnail}
                                playing={hoveredVideoId === item.id}
                                width="100%"
                                height="100%"
                                config={{
                                    file: {
                                        attributes: {
                                            onContextMenu: (e) => e.preventDefault(),
                                        },
                                    },
                                }}
                            />
                            <div className="card-body pt-0 px-2">
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
                            </div>
                        </div>
                    </div>
                ))}
                {/* </div> */}
            </div>
        </>
    );
}
export default Contentcardfull;