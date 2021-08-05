import React from "react";
import { connect } from "react-redux";
import {
  removeLocationFromFavorites,
  fetchCity,
} from "../actions/weatherActions";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 175,
    width: 100,
    margin: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function FavoritesList({ wetherData, removeFromFavorites }) {
  const classes = useStyles();
  function chooseFav(loc) {
    fetchCity(loc.city.LocalizedName);
  }
  function removeLoc(loc) {
    removeFromFavorites(loc);
    console.log("in remove loc");
  }
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {wetherData.favorites.length > 0 &&
          wetherData.favorites.map((loc, index) => (
            <Card key={index} className={classes.root}>
              <div className="fav-header">
                <FavoriteIcon className="heart"></FavoriteIcon>

                <Link className="arrow-link" to="/weather">
                  <ArrowForwardIcon
                    onClick={() => chooseFav(loc)}
                  ></ArrowForwardIcon>
                </Link>
              </div>

              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  City: {loc.city.LocalizedName}
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Id: {loc.id}
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Temperature: {loc.currWeather.Temperature.Metric.Value}{" "}
                  {loc.currWeather.Temperature.Metric.Unit}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => removeLoc(loc)} size="medium">
                  Remove from favorites
                </Button>
              </CardActions>
            </Card>
          ))}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wetherData: state.weather,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: (location) =>
      dispatch(removeLocationFromFavorites(location)),
    fetchCity: (city) => dispatch(fetchCity(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
