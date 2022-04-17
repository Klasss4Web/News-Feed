import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// import { Provider } from "react-redux";
// import store from "./store";

  import { makeAutoObservable } from "mobx";


  // Model the application state.
  class Articles {
    articles=[]

    constructor() {
      makeAutoObservable(this);
    }

    addData(data, dataTwo, dataThree) {
      this.articles=[...data, ...dataTwo, dataThree]
    }

    increase() {
      this.secondsPassed += 1;
    }

    reset() {
      this.secondsPassed = 0;
    }
  }

  const allArticles = new Articles();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <App articles={allArticles?.articles} addData={allArticles?.addData} />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
