import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { Box } from "@chakra-ui/react";
import ArticleListPage from "./pages/articleListPage/ArticleListPage";

import ArticlePage from "./pages/articlePage/ArticlePage";
import { Footer } from "./components/Footer";
import { observer } from "mobx-react-lite";



export const UserContext = createContext();

const App = observer(({ articles, addData }) => {

  return(
    // <UserContext.Provider value={teslaArticles}>
      <Router>
        <NavBar articles={articles} addData={addData} />
        <Box className="App" mb="150px">
          <Switch>
            <Route path="/" component={ArticleListPage} exact />
            <Route path="/news-feed" component={ArticleListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            {/* <Route component={PageNotFound} />  */}
          </Switch>
        </Box>
        <Footer />
      </Router>
    // </UserContext.Provider>
  );
});

export default App;
