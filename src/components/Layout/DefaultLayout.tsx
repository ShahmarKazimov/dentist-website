import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import "./DefaultLayout.scss";

function DefaultLayout(props: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div style={{ flex: 1 }}>
        {props.children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
