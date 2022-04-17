export const AUTH_ROUTES = {
  GET_TECH_CRUNCH: `/top-headlines?sources=techcrunch&apiKey=febafd3bf0974d1fb4138c298f6c8771`,
  GET_TESLA_NEWS: `/everything?q=tesla&from=2022-03-16&sortBy=publishedAt&apiKey=178f7c29aa0e4a0aa9cce3aca50ff10a`,
  GET_WALL_STREET_JOURNAL: `/everything?domains=wsj.com&apiKey=febafd3bf0974d1fb4138c298f6c8771`,
  ADD_COMMENTS: `https://optimalgun.backendless.app/api/services/CodelessShoppingCartService/item`,
  GET_COMMENTS: (comment) => `https://optimalgun.backendless.app/api/services/CodelessShoppingCartService/Items?cartName=${comment}`
};
