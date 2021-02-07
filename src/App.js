import React from "react";
import Menu from "./components/Menu/menu";
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/footer'
import Aboutpage from './components/AboutPage/AboutPage'

function App() {
  return (
    <div>
      <Menu />
      <Homepage />
      {/* <Aboutpage /> */}
      <Footer />
    </div>
  );
}

export default App;
