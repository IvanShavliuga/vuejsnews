import { createRouter, createWebHistory } from "vue-router";

import Infouser from "../components/Infouser.vue";
import Messages from "../components/Messages.vue";
import Profile from "../components/Profile.vue";
import News from "../components/News.vue";
import Cards from "../components/Cards.vue";
import Groups from "../components/Groups.vue";
import GroupsAll from "../components/GroupsAll.vue";
import Users from "../components/Users.vue";
import Home from "../components/Home.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/profile",
    component: Profile,
    children: [
      {
        path: "/Infouser",
        component: Infouser,
        name: "Infouser",
      },
      {
        path: "Messages",
        component: Messages,
        name: "Messages",
      },
      {
        path: "Groups",
        component: Groups,
        name: "Groups",
      },
      {
        path: "Posts",
        component: News,
        name: "Posts",
      } /*,
                {
                    path: 'Friends',
                    component: Messages,
                    name: 'Friends'
                }*/,
    ],
  },
  { path: "/groupsall", component: GroupsAll },
  { path: "/cards", component: Cards },
  { path: "/users", component: Users },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
