import { Route, Routes } from "react-router-dom";
// import Login from "../components/Login";
import { Fragment } from "react";
import Alltweets from "../../components/tweets/Alltweets";
const Dashboard = () => {
  return (
    <Fragment>
      <Routes>
        
        <Route path="/timeLine" element={<Alltweets />} />
        <Route path="/" exact={true} element={<Alltweets />} />
        {/* <Route
          path="dashboard/product_detail/:id"
          exact={true}
          element={<ProductDetails />}
        /> */}
        {/* <Route path="grand_profit" exact={true} element={<GrandProfit />} /> */}

        {/* <Route path="product_detail/:id" exact={true} element={<Cart />} /> */}
      </Routes>
    </Fragment>
  );
};

export default Dashboard;
