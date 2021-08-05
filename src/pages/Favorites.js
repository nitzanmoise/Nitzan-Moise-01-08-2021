import FavoritesList from "../containers/FavoritesList";
import { Grid } from "@material-ui/core";

function Favorites() {
  return (
    <div className="Favorites">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <h1>Favorites</h1>
        </Grid>
      </Grid>
      <FavoritesList></FavoritesList>
    </div>
  );
}

export default Favorites;
