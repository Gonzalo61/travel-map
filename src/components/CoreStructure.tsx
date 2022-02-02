import Grid from "@material-ui/core/Grid";
import useStyles from "./CoreStructureStyles";

import Header from "./Header/Header";
import List from "./List/List";
import Map from "./Map/Map";

const CoreStructure = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default CoreStructure;
