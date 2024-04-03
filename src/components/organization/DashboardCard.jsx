import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

function DashboardCard({ item }) {
  const baseURL = process.env.REACT_APP_BASE_URL;


  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = async () => {
      
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Card className="cardcont mb-3" sx={{
      maxWidth: "220px"
    }} >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <ReactPlayer
            url={`${baseURL}/media/${item.file}`}
            width="100%"
            height="172px"
            playing={true}
            controls={true}
            muted={true}
            config={{
              file: {
                attributes: {
                  onContextMenu: (e) => e.preventDefault(),
                },
              },
            }}
          />
        ) : (
          <img src={`${baseURL}/media/${item.thumbnail}`} alt="Thumbnail" height="172px" />
        )}
      </div>
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
  )
}

export default DashboardCard