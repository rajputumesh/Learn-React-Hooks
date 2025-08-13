import { BASE_URL } from "../utils/config";

const apiService = {};

apiService.getUsers = () => {
  return fetch(`${BASE_URL}/users`);
};

apiService.getUsers = (user_id) => {
  return fetch(`${BASE_URL}/${user_id}`);
};

export default apiService;
