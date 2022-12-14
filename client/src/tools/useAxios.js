import axios from "axios";

const REACT_API = "http://localhost:3001";

function signUp(data) {
  return axios.post(`${REACT_API}/signup`, data);
}

function login(data) {
  return axios.post(`${REACT_API}/login`, data);
}

export { signUp, login };
