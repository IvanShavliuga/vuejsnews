<template>
  <div>
    <app-alert :alert="alert" @close="closealert" v-if="alertflag"></app-alert>
    <app-cards :cards="cards" :index="index"></app-cards>
    <app-news
      :posts="posts"
      :users="users"
      :loginid="loginid"
      :admingroups="admingroups"
      :groups="groups"
      :comments="comments"
    ></app-news>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import News from './News.vue'
import Cards from './Cards.vue'
import Alert from './Alert.vue'
import { useIndexStore } from '@/stores/index'

export default {
  components: {
    appNews: News,
    appCards: Cards,
    appAlert: Alert
  },
  setup() {
    const store = useIndexStore()

    const posts = computed(() => store.postsAll)
    const cards = computed(() => store.cards)
    const users = computed(() => store.users)
    const alert = computed(() => store.alert)
    const admingroups = computed(() => store.groupsAdmin)
    const groups = computed(() => store.groups)
    const comments = computed(() => store.comments)
    const loginid = computed(() => store.loginid)

    const alertflag = ref(true)
    const index = ref(0)

    function closealert() {
      alertflag.value = false
    }

    return {
      posts, cards, users, alert, admingroups, groups, comments, loginid,
      alertflag, index, closealert
    }
  }
}
</script>
