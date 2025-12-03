import React from "react";
import Header from "../compoments/Header";
import { Outlet } from "react-router";
import Footer from "../compoments/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
