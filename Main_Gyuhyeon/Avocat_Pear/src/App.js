import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalFonts from "./GlobalStyle";
import ReportWriting from "./Components/ReportWriting/ReportWriting";

function App() {
  return (
    <>
      <GlobalFonts />
      <Router>
        <Switch>
          <Route path="/ReportWriting" component={ReportWriting} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
