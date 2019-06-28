import React,{Component} from "react";
import MainButton from "../components/MainButton";
import {Route,Link} from "react-router-dom"
import "./Home.css";


class Home extends Component {
  render(){
  return (
    <div>
      <h1>Finders Keepers</h1>
      <h2>The internet's most comprehensive lost & found web app</h2>
      <div className="button-container">
        <MainButton type="lost" />
        <MainButton type="found" />
      </div>
    </div>
  );
}
}

export default Home;
