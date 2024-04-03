import React, { useState } from "react";
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom';




function ContentCard() {
  const [isHovered, setIsHovered] = useState(false);
  // const Username = sessionStorage.getItem('UserName'); 
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    navigate('/video', { state: { videoUrl: 'https://www.dropbox.com/scl/fi/y9ga53ae6frxf1s0ymvvw/rand.mp4?rlkey=jhe86mf1rshdvg3bmp3bjeroc&dl=0' } });
  };

  const controls = isHovered ? true : false;
  return (
    <>
     
      <div className="card cardcont mb-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        <ReactPlayer
          url='https://www.dropbox.com/scl/fi/y9ga53ae6frxf1s0ymvvw/rand.mp4?rlkey=jhe86mf1rshdvg3bmp3bjeroc&dl=0'
          muted={true}
          playing={isHovered}

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
        <div class="card-body mt-4 px-1">

          <div className="userimagedb d-flex align-items-center">
            {/* <img src={'./images/usercontent.png'} alt="" /> */}
            <p>Rahul</p>
          </div>
          <p className="titlecard">Make money from money</p>
          <p className="descard">Make money from money</p>

          <div className="d-flex starcard justify-content-between">
            <span className="d-flex ">
              <img src={"./images/star-fill.svg"} alt="" />
              <p>(2.1k)</p>
            </span>
            <span><p>2 Week</p></span>
          </div>
        </div>

      </div>
    </>
  );
}
export default ContentCard;