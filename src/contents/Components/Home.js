import React from "react";
import NavBar from "./NavBar";
import BDropdown from "./BDropdown";
import MDropdown from "./MDropdown";
import CakeHome from "./cakeHome";
import UserContainer from "./UserContainer";
import "./Home.css";

export default function Home(props) {
  return (
    <>
      <NavBar />
      {/* <CakeHome cake /> */}
      <UserContainer />
      <div className="wrapper">
        {props.show ? <BDropdown /> : <MDropdown />}
      </div>
    </>
  );
}
