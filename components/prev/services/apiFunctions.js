import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const instance = axios.create();

// function to post data to api using axios
export const postApiData = async (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(apiUrl + ".json", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
};

// function to update data using axios
export const putApiData = (url, taskId, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(apiUrl + "/" + taskId + ".json", { data })
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
};

// function to delete data using axios
export const deleteApiData = (url, taskId) => {
  axios({
    url: url + taskId + ".json",
    method: "DELETE",
  });
};
