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
        <Route path="/report-writing" component={ReportWriting} />
          {/* uri 명명 규칙은 카멜이나 스네이크등의 케이스보단 케밥 케이스를 선호 */}        </Switch>
      </Router>
    </>
  );
}

export default App;
