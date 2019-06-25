import React from "react";
import MainButton from "../components/MainButton";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Finder's Keepers</h1>
      <h2>The internet's most comprehensive lost & found web app</h2>
      <div class="button-container">
        <MainButton type="lost" />
        <MainButton type="found" />
      </div>
    </div>
  );
}

export default Home;
