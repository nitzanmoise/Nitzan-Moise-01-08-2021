import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FETCH_WEEEKLY_REQUEST,
  FETCH_WEEKLY_SUCCESS,
  FETCH_WEEKLY_FAILURE,
  UPDATE_CURRENT_LOCATION,
} from "./weatherTypes";

const key = "gHA6iqGvA52XLn2GWhVSUTrPWIMmHqzB";

export const fetchCity = (city) => {
  const url =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

  const query = `?apikey=${key}&q=${city}`;

  return (dispatch) => {
    dispatch(fetchCityRequest());
    fetch(url + query)
      .then((response) => response.json())

      .then((data) => {
        // response.data is the city
        const city = data[0];
        let stringyCity = JSON.stringify(city);

        localStorage.setItem("city", stringyCity);

        dispatch(fetchCitySuccess(city));
        dispatch(fetchWeather(city.Key));
      })

      .catch((error) => {
        // error.message is the error message
        dispatch(fetchCityFailure(error.message));
        dispatch(fetchWeather(city.Key));
      });
  };
};

export const fetchWeather = (id) => {
  const url = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  return (dispatch) => {
    dispatch(fetchWeatherRequest());
    fetch(url + query)
      .then((response) => response.json())

      .then((data) => {
        // response.data is the weather
        const weather = data[0];
        let stringyWeather = JSON.stringify(weather);
        localStorage.setItem("weather", stringyWeather);
        dispatch(fetchWeatherSuccess(weather));
        dispatch(fetchWeeklyWeather(id));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchWeatherFailure(id));
        dispatch(fetchWeeklyWeather(id));
      });
  };
};

export const fetchWeeklyWeather = (id) => {
  const url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  const query = `${id}?apikey=${key}`;

  return (dispatch) => {
    dispatch(fetchWeeklyWeatherRequest());
    fetch(url + query)
      .then((response) => response.json())

      .then((data) => {
        let stringyWeeklyWeather = JSON.stringify(data);
        localStorage.setItem("weekly", stringyWeeklyWeather);
        dispatch(fetchWeeklyWeatherSuccess(data));
        dispatch(updateCurrLocation());
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchWeeklyWeatherFailure(error.message));
        dispatch(updateCurrLocation());
      });
  };
};

export const fetchCityRequest = () => {
  return {
    type: FETCH_CITY_REQUEST,
  };
};

export const fetchCitySuccess = (city) => {
  return {
    type: FETCH_CITY_SUCCESS,
    payload: city,
  };
};

export const fetchCityFailure = (error) => {
  const cityStorage = JSON.parse(localStorage.getItem("city"));

  return {
    type: FETCH_CITY_FAILURE,
    payload: cityStorage,
  };
};

export const fetchWeatherRequest = () => {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
};

export const fetchWeatherSuccess = (Weather) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: Weather,
  };
};

export const fetchWeatherFailure = (key) => {
  const weatherStorage = JSON.parse(localStorage.getItem("weather"));
  fetchWeather(key);
  return {
    type: FETCH_WEATHER_FAILURE,
    payload: weatherStorage,
  };
};

export const fetchWeeklyWeatherRequest = () => {
  return {
    type: FETCH_WEEEKLY_REQUEST,
  };
};

export const fetchWeeklyWeatherSuccess = (Weather) => {
  return {
    type: FETCH_WEEKLY_SUCCESS,
    payload: Weather,
  };
};

export const fetchWeeklyWeatherFailure = (error) => {
  const wweeklyStorage = JSON.parse(localStorage.getItem("weekly"));
  return {
    type: FETCH_WEEKLY_FAILURE,
    payload: wweeklyStorage,
  };
};

export const updateCurrLocation = () => {
  return {
    type: UPDATE_CURRENT_LOCATION,
  };
};

export const addLocationToFavorites = (location) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: location,
  };
};

export const removeLocationFromFavorites = (location) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: location,
  };
};
