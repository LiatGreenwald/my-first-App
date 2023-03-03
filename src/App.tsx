import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Main2 from "./Components/Main2/Main2";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main2 />
      <Footer />
    </div>
  );
}

export default App;
