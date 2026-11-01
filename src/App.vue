<template>
  <div class="container">
    <div v-if="userlogin">
      <app-header></app-header>
      <div class="content">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </div>
    <div v-else class="userlogin">
      <app-signin
        :users="users"
        @signin="signinfun"
        v-if="!registration"
      ></app-signin>
      <app-signup @signup="signupfun" :users="users" v-else></app-signup>
      <p
        class="signlink"
        @click="registration = !registration"
        :title="!registration ? 'Sign up' : 'sign in'"
      >
        {{ !registration ? "Sign up" : "sign in" }}
      </p>
    </div>
  </div>
</template>
<style lang="scss">
body,
div.container {
  background: #808 !important;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
.userlogin {
  margin: 0;
  padding: 0;
  height: 100%;
  text-align: center;
}
.content {
  padding: 15px;
  background: #eee;
}
.signlink {
  color: #fff;
  cursor: pointer;
}
</style>
<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import Header from './components/Header.vue'
import Signin from './components/Signin.vue'
import Footer from './components/Footer.vue'
import Signup from './components/Signup.vue'
import   useIndexStore  from '@/stores/index'

const store = useIndexStore()
const { users, auth: userlogin } = storeToRefs(store)

const title = ref('iv2news')
const registration = ref(false)

function signinfun(rd) {
  // при желании можно отреагировать на провал входа
  if (!rd.auth) registration.value = true
}

function signupfun(rd) {
  if (!rd.error) {
    console.log('rd.user ' + rd.user)
    store.signup(rd.user)
  }
}
</script>
