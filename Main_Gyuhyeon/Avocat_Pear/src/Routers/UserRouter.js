import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFonts from "../GlobalStyle";
import { ReportWriting } from "../components/index";

function UserRouter() {
  return (
    <>
      <GlobalFonts />
      <Switch>
        <Route path="/report-writing" component={ReportWriting} exact />
      </Switch>
    </>
  );
}

export default UserRouter;
