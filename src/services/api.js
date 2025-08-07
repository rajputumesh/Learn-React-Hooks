const apiService = {};

apiService.getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users");
};

apiService.getUsers = (user_id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
};

export default apiService;
