import { makeAutoObservable, runInAction, action } from "mobx";

export class NewsFeedStore {
  newsFeedd = [];
  fetchingData = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadData= action(async () => {
    // this.newsFeedd = [];
    this.fetchingData = true;
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-03-19&sortBy=publishedAt&apiKey=febafd3bf0974d1fb4138c298f6c8771"
    );

    const json = await response.json();
    runInAction(() => {
      this.newsFeedd = json;
      this.fetchingData = false;
    });
    return json;
  })
}
