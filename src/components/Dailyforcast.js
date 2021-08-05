import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 105,
    width: "80%",
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

function Dailyforcast({ day, index }) {
  const classes = useStyles();
  const [temprature, setTemprature] = useState("");
  const [isCelius, setIsCelsius] = useState(false);
  const [weekday, setWeekday] = useState("");
  const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const fahrenheitToCelsius = (fahrenheit) =>
    Math.floor(((fahrenheit - 32) * 5) / 9);
  const celsiusToFahrenheit = (celsius) => Math.floor((celsius * 9) / 5 + 32);

  useEffect(() => {
    const degrees = day.Temperature.Maximum.Value;
    const currDay = dayOfWeek.filter((item, i) => i === index);
    setTemprature(degrees);
    setWeekday(currDay);
  }, []);

  function changeTemprature() {
    if (isCelius) {
      setTemprature(celsiusToFahrenheit(temprature));
      setIsCelsius(false);
    } else {
      setTemprature(fahrenheitToCelsius(temprature));
      setIsCelsius(true);
    }
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {weekday}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {temprature}
            {isCelius ? "C" : "F"}
          </Typography>
          <Button onClick={changeTemprature} color="primary">
            {isCelius ? "Ferenite" : "Celsius"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dailyforcast;
