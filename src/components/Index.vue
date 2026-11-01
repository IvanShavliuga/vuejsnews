<template>
  <main>
    <div v-if="userlogin">
      <app-content></app-content>
    </div>
    <div v-else>
      <app-signin></app-signin>
    </div>
  </main>
</template>
<script>
import { computed } from 'vue'
import Content from './Content.vue'
import Signin from './Signin.vue'
import { useIndexStore } from '@/stores/index' // путь к вашему стору

export default {
  components: {
    appContent: Content,
    appSignin: Signin
  },
  setup() {
    const store = useIndexStore()

    const posts = computed(() => store.postsAll)
    const cards = computed(() => store.cards)
    const users = computed(() => store.users)
    const alert = computed(() => store.alert)

    return { posts, cards, users, alert }
  }
}
</script>
