import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalFonts from "./GlobalStyle";
import ReportWriting from "./Components/ReportWriting/ReportWriting";

function App() {
  return (
    <>
      <GlobalFonts />
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/UserProfile" component={UserProfile} />
        <Route path="/ReportWriting" component={ReportWriting} />
      </BrowserRouter>
    </>
  );
}

export default App;
