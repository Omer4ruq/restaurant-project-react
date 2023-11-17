import React from "react";
import Navbar from "../layout/Navbar";
import Header from "../layout/Header";
import OrderOnline from "../layout/OrderOnline";

const Home = () => {
  console.log("sdfsdf");
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="mt-10">
        <OrderOnline></OrderOnline>
      </div>
    </div>
  );
};

export default Home;
