import React from "react";
import { Route, Switch } from 'react-router-dom';
import StartPage from "./pages/StartPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ StartPage } />
    </Switch>
  );
}
