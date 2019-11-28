import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
