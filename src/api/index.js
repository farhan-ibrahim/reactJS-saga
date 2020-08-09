import fetchApi from "./helper";

// login
export const login = (data) => {
  return fetchApi("post", "api/login", data);
};

//register
export const register = (data) => {
  return fetchApi("post","api/register", data);
}

// create new task
export const create = (data, headers) => {
  return fetchApi("post","api/list", data, headers);
}

//get all task
export const getAll = (headers) => {
  return fetchApi("get","api/list/all",null, headers);
}

//get completed task
export const getCompleted = (headers) => {
  return fetchApi("get","api/list/archive",null, headers);
}

//delete task
export const deleteTask = (id, headers) => {
  console.log("api", id)
  return fetchApi("post",`api/dashboard/delete/${id}`, null, headers);
}

//delete task
export const update = ( id, data, headers) => {
  console.log("api", data)
  return fetchApi("post",`api/dashboard/update/${id}`, data, headers);
}

