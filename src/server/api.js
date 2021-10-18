import Vue from "vue"
import VueResource from "vue-resource"
Vue.use(VueResource);
const ListResource= Vue.resource('http://localhost:3000/users{/id}')

export default{
    fetchUsersLists:()=>{
        return ListResource.get();
    },
    getUser: (user)=>{
        // Vue.http.patch(`http://localhost:3000/users`, { login: user.login, password: user.password }).then(d=>console.log(d.data))
        return Vue.http.get(`http://localhost:3000/users?login=${user.login}&password=${user.password}`)
    }
}