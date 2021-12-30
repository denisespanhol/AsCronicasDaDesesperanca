import React from "react";
import { Switch, Route } from 'react-router-dom';
import StartPage from "./pages/StartPage";
import ChaptersPage from "./pages/ChaptersPage";
import AuthorsPage from "./pages/AuthorsPage";
import AboutPage from "./pages/AboutPage";
import Prologue from "./pages/Chapters/Prologue";
import Feedback from "./pages/Feedback";

export default function ToRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={ StartPage } />
      <Route path="/chapters/prologue" component={ Prologue } />
      <Route path="/chapters" component={ ChaptersPage } />
      <Route path="/author" component={ AuthorsPage } />
      <Route path="/about" component={ AboutPage } />
      <Route path="/feedback" component={ Feedback } />
    </Switch>
  );
}
