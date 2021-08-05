import React from "react";
import { Toolbar, Button, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="NavBar">
      <AppBar position="static">
        <Toolbar>
          <Link to="/weather">
            <Button>Weather</Button>
          </Link>
          <Link to="/favorites">
            <Button>Favorites</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
