import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
  FETCH_WEEEKLY_REQUEST,
  FETCH_WEEKLY_SUCCESS,
  FETCH_WEEKLY_FAILURE,
  UPDATE_CURRENT_LOCATION,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/weatherTypes";

const initialState = {
  loading: false,
  city: { Key: "" },
  location: {
    city: { Key: "", LocalizedName: "" },
    currWeather: {
      WeatherText: "",
      Temperature: { Metric: { Value: "", Unit: "" } },
    },
    weeklyWeather: { DailyForecasts: [] },
    id: "",
  },
  currWeather: {},
  weeklyWeather: {},
  favorites: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CITY_SUCCESS:
      return {
        ...state,
        city: action.payload,
      };
    case FETCH_CITY_FAILURE:
      return {
        loading: false,
        ...state,
        city: action.payload,
        error: "error",
      };
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,

        currWeather: action.payload,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        currWeather: action.payload,
        error: "error",
      };
    case FETCH_WEEEKLY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEEKLY_SUCCESS:
      return {
        ...state,

        weeklyWeather: action.payload,
      };
    case FETCH_WEEKLY_FAILURE:
      return {
        ...state,
        weeklyWeather: action.payload,
        error: "error",
      };
    case UPDATE_CURRENT_LOCATION:
      return {
        ...state,
        location: {
          city: state.city,
          currWeather: state.currWeather,
          weeklyWeather: state.weeklyWeather,
          id: state.city.Key,
        },
      };
    case ADD_TO_FAVORITES:
      if (action.payload.id) {
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
