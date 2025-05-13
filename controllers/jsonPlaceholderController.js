// controllers/jsonPlaceholderController.js

const axios = require("axios");

const baseURL = "https://jsonplaceholder.typicode.com";

const getPosts = () => axios.get(`${baseURL}/posts`);

const getPostById = (id) => axios.get(`${baseURL}/posts/${id}`);

const getUserById = (id) => axios.get(`${baseURL}/users/${id}`);

const createPost = (post) => axios.post(`${baseURL}/posts`, post);

const createComment = (comment) => axios.post(`${baseURL}/comments`, comment);

module.exports = {
  getPosts,
  getPostById,
  getUserById,
  createPost,
  createComment,
};
