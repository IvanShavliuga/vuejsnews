import Vue from "vue"
import VueResource from "vue-resource"
Vue.use(VueResource);
const ListResource=Vue.resource('http://localhost:3000/users{/id}')

export default{
    fetchUsersLists:()=>{
        return ListResource.get();
    }
}