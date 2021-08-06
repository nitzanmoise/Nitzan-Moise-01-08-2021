import React from "react";
import { Toolbar, Button, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  barWeapper: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
const NavBar = () => {
  const classes = useStyles();

  return (
    <div className="NavBar">
      <AppBar position="static">
        <Toolbar className={classes.barWeapper}>
          <h3>Heoloweather</h3>
          <div>
            <Link to="/weather">
              <Button>Weather</Button>
            </Link>
            <Link to="/favorites">
              <Button>Favorites</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
