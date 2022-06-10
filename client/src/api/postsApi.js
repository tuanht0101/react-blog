import axiosClient from "./axiosClient";
const postsApi = {
  getAllBook: () => {
    const url = "/posts";
    return axiosClient.get(url);
  },
};
export default postsApi;
