import React from "react";
import Header from "./components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

const App = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-144px)] p-4 lg:p-0 lg:w-5/6 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
