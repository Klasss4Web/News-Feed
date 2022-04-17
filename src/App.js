import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { Box } from "@chakra-ui/react";
import ArticleListPage from "./pages/articleListPage/ArticleListPage";

import ArticlePage from "./pages/articlePage/ArticlePage";
import { getTeslaNews } from "./pages/articleListPage/service";
import FullPageLoader from "./components/full-page-loader";
import { Footer } from "./components/Footer";
export const UserContext = createContext();

const App = ({ articles, addData }) => {
  const [teslaArticles, setTeslaArticles] = useState([11]);
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    getTeslaNews(setTeslaArticles, setLoading);
  }, []);

  return loading ? (
    <FullPageLoader />
  ) : (
    <UserContext.Provider value={teslaArticles}>
      <Router>
        <NavBar articles={articles} addData={addData} />
        <Box className="App" mb="150px">
          <Switch>
            <Route path="/" component={ArticleListPage} exact />
            <Route path="/articles" component={ArticleListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            {/* <Route component={PageNotFound} />  */}
          </Switch>
        </Box>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
};

export default App;
