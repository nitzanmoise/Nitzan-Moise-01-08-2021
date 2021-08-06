import "./App.scss";
import NavBar from "./components/NavBar";
import Weather from "./pages/Weather";
import Favorites from "./pages/Favorites";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "#3f51b5",
    marginTop: "170px",
    position: "fixed",
    bottom: 0,
  },
  link: {
    color: "white",
    background: "none",
  },
});
function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/">
            <Redirect to="/weather" />
          </Route>
        </Switch>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <Link to="/weather">
            <BottomNavigationAction
              className={classes.link}
              icon={<LocationOnIcon />}
              inkBarStyle={{ background: "white" }}
            />
          </Link>

          <Link to="/favorites">
            <BottomNavigationAction
              className={classes.link}
              icon={<FavoriteIcon />}
            />
          </Link>
        </BottomNavigation>{" "}
      </Router>
    </div>
  );
}

export default App;
