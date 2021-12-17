import React from "react";
import { Route, Switch } from 'react-router-dom';
import StartPage from "./pages/StartPage";
import ChaptersPage from "./pages/ChaptersPage";
import AuthorsPage from "./pages/AuthorsPage";
import AboutPage from "./pages/AboutPage";
import Prologue from "./pages/Chapters/Prologue";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ StartPage } />
      <Route exact path="/chapters/prologue" component={ Prologue } />
      <Route path="/chapters" component={ ChaptersPage } />
      <Route path="/author" component={ AuthorsPage } />
      <Route path="/about" component={ AboutPage } />
    </Switch>
  );
}
