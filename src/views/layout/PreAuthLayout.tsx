import Header from "../../composites/header/Header";
import Grid from "../pages/grid/Grid";
import Login from "../pages/login/Login";

function PreAuthLayout() {
  return (
    <div>
      {/* <Header />
      <Outlet />
      <Footer /> */}
      {/* <Header></Header> */}
      {/* <Login></Login> */}
      <Grid></Grid>
    </div>
  );
}

export default PreAuthLayout;
