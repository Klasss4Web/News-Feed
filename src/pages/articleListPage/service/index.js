import { errorNotifier, successNotifier } from "../../../components/NotificationHandler";
import http, { axiosInstance1 } from "../../../services/api";
import { AUTH_ROUTES } from "../../../services/routes.constants";


export const getTechNews = async (setArticles) => {
  try {
    const result = await http.get(AUTH_ROUTES.GET_TECH_CRUNCH);
    setArticles(result?.data?.articles)
  } catch (e) {
    console.log(e)
  }
};


export const getTeslaNews = async (setTeslaArticles, setLoading) => {
  try {
    const result = await http.get(AUTH_ROUTES.GET_TESLA_NEWS);
    setTeslaArticles(result?.data?.articles);
    setLoading(false)
  } catch (e) {
    console.log(e);
    setLoading(false)
  }
};



export const getWallStreetJournals = async (setWallStreetArticles) => {
  try {
    const result = await http.get(AUTH_ROUTES.GET_WALL_STREET_JOURNAL);
    setWallStreetArticles(result?.data?.articles);
  } catch (e) {
    console.log(e);
  }
};

export const postComments = async (payload) => {
  try {
    await axiosInstance1.post(AUTH_ROUTES.ADD_COMMENTS, payload);
    successNotifier("Comment posted successfully")
    // console.log("comments", JSON.stringify(result), result);
  } catch (e) {
    console.log(e);
    errorNotifier("Sorry, we are having issues")
  }
};

export const getComments = async (name, setComments) => {
  try {
    const result = await axiosInstance1.get(AUTH_ROUTES.GET_COMMENTS(name));
    console.log("comments", result);
    setComments(result)
  } catch (e) {
    console.log(e);
  }
};


