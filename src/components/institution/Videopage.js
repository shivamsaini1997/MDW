import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import OrgHeaderDb from '../organization/OrgHeaderDB';


function Videopage() {
          const [isHovered, setIsHovered] = useState(false);
          const location = useLocation();
          const videoUrl = location.state && location.state.videoUrl;

        //   const {storedata} = OrgHeaderDb()
        //   console.log("storedatavideo", storedata)

          const controls = isHovered ? true : false;
          const handleMouseEnter = () => {
                    setIsHovered(true);
          };

          const handleMouseLeave = () => {
                    setIsHovered(false);
          };
          return (
                    <div className="videopage-container">
                    <div className="video-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        
                        <ReactPlayer
                            url={'https://www.dropbox.com/scl/fi/y9ga53ae6frxf1s0ymvvw/rand.mp4?rlkey=jhe86mf1rshdvg3bmp3bjeroc&dl=0'}
                            muted={true}
                            playing={isHovered}
                            controls={controls}
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
                          {/* {videoUrl &&  <ReactPlayer
                            url={'https://www.dropbox.com/scl/fi/y9ga53ae6frxf1s0ymvvw/rand.mp4?rlkey=jhe86mf1rshdvg3bmp3bjeroc&dl=0'}
                            muted={true}
                            playing={isHovered}
                            controls={controls}
                            width="100%"
                            height="100%"
                            config={{
                                file: {
                                    attributes: {
                                        onContextMenu: (e) => e.preventDefault(),
                                    },
                                },
                            }}
                        /> } */}
                    </div>
                    <div className="video-details">
                        <h2>Video Title</h2>
                        <p>Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum tortor non nisl placerat, eu bibendum lectus sollicitudin.</p>
                        <p>Published on January 1, 2023</p>
                        <p>Views: 1000</p>
                    </div>
                </div>
          )
}

export default Videopage