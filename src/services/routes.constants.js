export const AUTH_ROUTES = {
  GET_TECH_CRUNCH: `/top-headlines?sources=techcrunch&apiKey=febafd3bf0974d1fb4138c298f6c8771`,
  GET_TESLA_NEWS: `/everything?q=tesla&from=2022-03-19&sortBy=publishedAt&apiKey=febafd3bf0974d1fb4138c298f6c8771`,
  GET_WALL_STREET_JOURNAL: `/everything?domains=wsj.com&apiKey=febafd3bf0974d1fb4138c298f6c8771`,
  ADD_COMMENTS: `https://optimalgun.backendless.app/api/services/CodelessShoppingCartService/item`,
  GET_COMMENTS: (comment) =>
    `https://optimalgun.backendless.app/api/services/CodelessShoppingCartService/Items?cartName=${comment}`,
};
