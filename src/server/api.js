import Vue from "vue"
import VueResource from "vue-resource"
Vue.use(VueResource);
const ListResource= Vue.resource('http://localhost:3000/users{/id}')

export default{
    fetchUsersList:()=>{
        return Vue.http.get('http://localhost:3000/users');
    },
    fetchMessagesList: () => {
		return Vue.http.get('http://localhost:3000/messages');
	},
	fetchCardsList: () => {
		return Vue.http.get('http://localhost:3000/cards');
	},
	fetchPostsList: () => {
		return Vue.http.get('http://localhost:3000/posts');
	},
	fetchCommentsList: () => {
		return Vue.http.get('http://localhost:3000/comments');
	},
	fetchAlert: () => {
		return Vue.http.get('http://localhost:3000/alert');
	},
	fetchGroupsList: () => {
		return Vue.http.get('http://localhost:3000/groups');
	},
    getUser: (user)=>{
        // Vue.http.patch(`http://localhost:3000/users`, { login: user.login, password: user.password }).then(d=>console.log(d.data))
        return Vue.http.get(`http://localhost:3000/users?login=${user.login}&password=${user.password}`)
    }
}
