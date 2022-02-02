import GoogleMapsReact from "google-map-react";

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./MapStyles";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapsReact
        bootstrapURLKeys={{ key: 'AIzaSyCpJiv7wvMFRU2fM0vOrWYIF6ncRaD-_5c' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      // options={""}
      // onChange={""}
      // onChildClick={""}
      >

      </GoogleMapsReact>
    </div>
  );
};

export default Map;
