import React from "react";
import Common from "./Common";
import web from "../src/Pictures/img2.png";

function Home() {
  return (
    <>
      <Common
        name="Build your Career with"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      />
    </>
  );
}

export default Home;
