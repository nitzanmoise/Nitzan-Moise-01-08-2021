import "./App.scss";
import NavBar from "./components/NavBar";
import Weather from "./pages/Weather";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BottomNavigation } from "@material-ui/core";

function App() {
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
        </Switch>
        <BottomNavigation></BottomNavigation>
      </Router>
    </div>
  );
}

export default App;
