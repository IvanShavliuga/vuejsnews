
import Menuuser from './components/Menuuser.vue';
import Infouser from './components/Infouser.vue';
import Messages from './components/Messages.vue';
import Profile from './components/Profile.vue';
import News from './components/News.vue';
import Cards  from './components/Cards.vue';
import Index  from './components/Index.vue';
import Groups from './components/Groups.vue';
import App from './App.vue'

export const  routes = [
        {path: '/', component: Index},
        {
            path: '/profile',
            component: Profile,
            children: [
                {
                    path: '/Infouser',
                    component: Infouser,
                    name:'Infouser'
                },
                {
                    path: 'Messages',
                    component: Messages,
                    name: 'messages'
                }
            ]
        },
        {path: '/groups', component: Groups},
        {path: '/cards', component: Cards}
    ]
