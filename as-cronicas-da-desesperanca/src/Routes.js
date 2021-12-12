import React from "react";
import { Route, Switch } from 'react-router-dom';
import StartPage from "./pages/StartPage";
import ChaptersPage from "./pages/ChaptersPage";
import AuthorsPage from "./pages/AuthorsPage";
import AboutPage from "./pages/AboutPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ StartPage } />
      <Route path="/chapters" component={ ChaptersPage } />
      <Route path="/author" component={ AuthorsPage } />
      <Route path="/about" component={ AboutPage } />
    </Switch>
  );
}
