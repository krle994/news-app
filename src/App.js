import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";

import TopNews from "./pages/TopNews";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Article from "./pages/Article";

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: minmax(0, 1fr);
`;

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/news">
            <Article />
          </Route>
          <Route exact path="/">
            <TopNews />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
