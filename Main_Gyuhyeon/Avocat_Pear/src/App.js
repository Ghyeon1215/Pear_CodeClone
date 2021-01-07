import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalFonts from "./GlobalStyle";
import UserRouter from "./Routers/UserRouter";

const App = () => {
  return (
    <>
      <GlobalFonts />
      <BrowserRouter>
        <Route path="/" component={UserRouter} />
      </BrowserRouter>
    </>
  );
};

export default App;
