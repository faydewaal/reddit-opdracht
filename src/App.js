import React from "react";
import './App.css';
import {
  Route,
  Switch
} from "react-router-dom";
import Home
  from "./pages/Home/Home";
import Subreddit
  from "./pages/subreddit/Subreddit";
import Header
  from "./components/header/Header";

function App() {
  return (
    <>

      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/subreddit/:subredditId">
          <Subreddit />
        </Route>

      </Switch>

    </>
  );
}

export default App;
