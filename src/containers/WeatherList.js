import React, { useState } from "react";
import { connect } from "react-redux";
import {
  fetchCity,
  addLocationToFavorites,
  removeLocationFromFavorites,
} from "../actions/weatherActions";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Dailyforcast from "../components/Dailyforcast";

function WeatherList({ wetherData, addToFavorites, removeFromFavorites }) {
  const [isFav, setIsFav] = useState(false);

  function toggleFavoriteLocation() {
    if (isFav) {
      setIsFav(false);
      removeFromFavorites(wetherData.location);
    } else {
      setIsFav(true);

      addToFavorites(wetherData.location);
    }
  }
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <div className="weather-panal">
          <header>
            <section>
              <h3>{wetherData.location.city.LocalizedName}</h3>
              <p>
                {wetherData.location.currWeather.Temperature.Metric.Value}
                {wetherData.location.currWeather.Temperature.Metric.Unit}
              </p>
            </section>
            <section>
              <FavoriteIcon
                style={{ color: isFav ? "gold" : "black" }}
                className="heart"
              ></FavoriteIcon>
              <Button onClick={toggleFavoriteLocation} size="medium">
                {isFav ? "Remove from favorites" : "Add to favorites"}
              </Button>
            </section>
          </header>
          <h1>{wetherData.location.currWeather.WeatherText}</h1>
          <div className="daily-list">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              {wetherData.location.weeklyWeather.DailyForecasts.map(
                (item, index) => (
                  <Dailyforcast key={index} day={item}></Dailyforcast>
                )
              )}
            </Grid>
          </div>
        </div>
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
    fetchCity: (city) => dispatch(fetchCity(city)),
    addToFavorites: (location) => dispatch(addLocationToFavorites(location)),
    removeFromFavorites: (location) =>
      dispatch(removeLocationFromFavorites(location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
