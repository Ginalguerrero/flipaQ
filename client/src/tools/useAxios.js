import axios from "axios";

const REACT_API = "https://flipaq-app.herokuapp.com/api";

function signUp(data) {
  return axios.post(`${REACT_API}/signup`, data);
}

function login(data) {
  return axios.post(`${REACT_API}/login`, data);
}

export { signUp, login };
