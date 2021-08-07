import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import WeatherList from "../containers/WeatherList";
import SearchIcon from "@material-ui/icons/Search";
import { fetchCity } from "../actions/weatherActions";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";

function Weather({ fetchCity, wetherData }) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    // Setting default city
    if (wetherData.city.Key === "") {
      fetchCity("Tel Aviv");
    }
  }, []);

  function handleChange(e) {
    let value = e.target.value;
    // Only English characters
    value = value.replace(/[^A-Za-z]/gi, "");

    setValue(value);
    fetchCity(e.target.value);
    if (wetherData.error) {
      handleOpen();
    }
  }

  return (
    <div className="Weather">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <h1 className="weather-title">Search for locations</h1>
        </Grid>
        <Grid item xs={12}>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            value={value}
            onChange={handleChange}
          />
          <button onClick={handleChange}>
            <SearchIcon className="search"></SearchIcon>
          </button>
        </Grid>
      </Grid>{" "}
      <WeatherList></WeatherList>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal-panal">
          <p>No more api requests left, wait for tomorrow</p>
        </div>
      </Modal>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
