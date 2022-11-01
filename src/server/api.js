import axios from "axios";

export default {
  fetchUsersList: () => {
    return axios.get("http://localhost:3000/users");
  },
  fetchMessagesList: () => {
    return axios.get("http://localhost:3000/messages");
  },
  fetchCardsList: () => {
    return axios.get("http://localhost:3000/cards");
  },
  fetchPostsList: () => {
    return axios.get("http://localhost:3000/posts");
  },
  fetchCommentsList: () => {
    return axios.get("http://localhost:3000/comments");
  },
  fetchAlert: () => {
    return axios.get("http://localhost:3000/alert");
  },
  fetchGroupsList: () => {
    return axios.get("http://localhost:3000/groups");
  },
  getUser: (user) => {
    // axios.patch(`http://localhost:3000/users`, { login: user.login, password: user.password }).then(d=>console.log(d.data))
    return axios.get(
      `http://localhost:3000/users?login=${user.login}&password=${user.password}`
    );
  },
};
