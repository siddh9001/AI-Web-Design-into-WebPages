import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";

const VideoCard = (props) => {
  return (
    <Card raised="true">
      <CardActionArea>
        <CardMedia
          component="iframe"
          height="240"
          src={props.src}
          allowFullScreen
        />
        <CardContent>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoCard;
