import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// function to get data from api using axios
export const getApiData = (lang, url, query) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrl}/${lang}/${url}/?${query}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
};

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
