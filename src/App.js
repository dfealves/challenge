import React from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";
import PotionsList from "./components/PotionsList";
import Footer from "./components/Footer";

const App = () => (
  <div className="App">
    <Header />
    <Menu />
    <PotionsList />
    <Footer />
  </div>
);

export default App;
