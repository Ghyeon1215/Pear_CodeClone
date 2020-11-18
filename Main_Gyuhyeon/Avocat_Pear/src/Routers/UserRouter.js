import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalFonts from "../GlobalStyle";
import {
  ReportWriting,
  ReportWritingModal,
  TeamStateModal,
  SubmitReportModal,
  SubmitSuccess
} from "../Components/index";

function UserRouter() {
  return (
    <>
      <GlobalFonts />
      <Switch>
        <Route path="/report-writing" component={ReportWriting} exact />
        <Route path="/report-writing-modal" component={ReportWritingModal} exact />
        <Route path="/team-state-modal" component={TeamStateModal} exact />
        <Route path="/submit-report-modal" component={SubmitReportModal} exact />
        <Route path="/submit-success-modal" component={SubmitSuccess} exact />
      </Switch>
    </>
  );
}

export default UserRouter;
