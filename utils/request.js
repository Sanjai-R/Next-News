const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "#Trending",
    url: `https://newsapi.org/v2/everything?q=Trending&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  fetchTechnology: {
    title: "Technology",
    url: `https://newsapi.org/v2/everything?q=Technology&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  fetchSports: {
    title: "Sports",
    url: `https://newsapi.org/v2/everything?q=Sports&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  fetchEntertainment: {
    title: "Entertainment",
    url: `https://newsapi.org/v2/everything?q=Entertainment&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  fetchDaily: {
    title: "Daily",
    url: `https://newsapi.org/v2/everything?q=Trending&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  fetchBusiness: {
    title: "Business",
    url: `https://newsapi.org/v2/everything?q=Business&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  fetchHealth: {
    title: "Health",
    url: `https://newsapi.org/v2/everything?q=health&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  fetchPolitics: {
    title: "Politics",
    url: `https://newsapi.org/v2/everything?q=Politics&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  fetchEntertainment: {
    title: "Entertainment",
    url: `https://newsapi.org/v2/everything?q=Entertainment&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  fetchCovid: {
    title: "Covid",
    url: `https://newsapi.org/v2/everything?q=Covid&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
  fetchDevelopment: {
    title: "Development",
    url: `https://newsapi.org/v2/everything?q=Development&sortBy=publishedAt&apiKey=${API_KEY}`,
  },
};