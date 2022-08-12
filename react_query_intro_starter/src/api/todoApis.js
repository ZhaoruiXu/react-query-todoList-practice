import axios from "axios";

const todosApi = axios.create({ baseURL: "http://localhost:3500" });

// read
export const getTodos = async () => {
  const response = await todosApi.get("/todos");
  return response.data;
};

// create
export const addTodo = async todo => {
  return await todosApi.post("/todos", todo);
};

// update
export const updateTodo = async todo => {
  return await todosApi.patch(`/todos/${todo.id}`, todo);
};

// a "todo" param will still be passed in for the delete, but will be destructured into "id"
export const deleteTodo = async ({ id }) => {
  return await todosApi.delete(`/todos/${id}`, id);
};

// for further use, if we would like to expand outside of CRUD
export default todosApi;
