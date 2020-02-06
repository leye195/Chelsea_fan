import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import "./Slide.css";
import "./Footer.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../routes/Home";
import About from "../routes/About";
import Team from "../routes/Team";
import Stats from "../routes/Stats";
import Player from "../routes/Player";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header></Header>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/team" component={Team}></Route>
        <Route path="/stats" component={Stats}></Route>
        <Route path="/players" component={Player}></Route>
        <Footer></Footer>
      </HashRouter>
    </div>
  );
}

export default App;
