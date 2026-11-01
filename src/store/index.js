import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from './../server/api.js'

export default defineStore('index', () => {
  // ---------- state ----------
  const currentUser = ref({})
  const users = ref([])
  const messages = ref([])
  const cards = ref([])
  const posts = ref([])
  const comments = ref([])
  const alert = ref({})
  const groups = ref([])
  const userloginid = ref(0)
  const auth = ref(false)

  // ---------- бывшие мутации ----------
  function setUsers(arr) { users.value = arr }
  function setMessages(arr) { messages.value = arr }
  function setCards(arr) { cards.value = arr }
  function setPosts(arr) { posts.value = arr }
  function setComments(arr) { comments.value = arr }
  function setGroups(arr) { groups.value = arr }
  function setAlert(obj) { alert.value = obj }

  function likePost(post) {
    const liked = post.like.some(idl => idl === userloginid.value)
    if (liked) post.like = post.like.filter(idl => idl !== userloginid.value)
    else post.like.push(userloginid.value)
    posts.value[post.id] = post
  }

  function repostPost(post) {
    const reposted = post.repost.some(idl => idl === userloginid.value)
    if (reposted) post.repost = post.repost.filter(idl => idl !== userloginid.value)
    else post.repost.push(userloginid.value)
    posts.value[post.id] = post
  }

  function addFriend(user) {
    const uid = users.value.filter(u => u === userloginid.value)
    if (uid[0] === undefined) {
      users.value[userloginid.value].friends.push(user.id)
      users.value[user.id].friends.push(userloginid.value)
    }
  }

  function groupFollow(group) {
    const uid = groups.value.filter(gf => gf === userloginid.value)
    if (uid[0] === undefined) groups.value[group.id].followers.push(userloginid.value)
  }

  function addPost(post) {
    post.id = posts.value.length
    const d = new Date()
    post.date = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear()
    post.time = d.getHours() + ':' + d.getMinutes()
    if (post.groupId >= 0) groups.value[post.groupId].idNews.push(post.id)
    posts.value.push(post)
  }

  function editPost(post) {
    const d = new Date()
    post.date = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear()
    post.time = d.getHours() + ':' + d.getMinutes()
    posts.value[post.id] = post
  }

  function editGroup(group) { groups.value[group.id] = group }

  function addGroup(group) {
    group.id = groups.value.length
    groups.value.push(group)
  }

  function editCard(card) { cards.value[card.id] = card }

  function addMessage(msg) {
    msg.id = messages.value.length
    messages.value.push(msg)
  }

  function addComment(com) {
    const idcom = comments.value.length
    const comment = com
    comment.id = idcom
    posts.value[com.postId].comments.push(idcom)
    comments.value.push(comment)
  }

  function signIn(user) {
    if (user === undefined) {
      auth.value = false
      userloginid.value = -1
    } else {
      userloginid.value = user.id
      auth.value = true
      currentUser.value = user
    }
  }

  function signUp(user) {
    console.log('state (user): ' + user.id)
    user.friends.push(user.id)
    users.value.push(user)
    userloginid.value = user.id
    const d = new Date()
    const strdate = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear()
    const strtime = d.getHours() + ':' + d.getMinutes()
    messages.value.push({
      type: 'system',
      id: messages.value.length,
      title: 'success registration, ' + user.login,
      to: user.id,
      from: -1,
      groupId: -1,
      body:
        'userloginid: <i>' + userloginid.value +
        '</i> user.id: <i>' + user.id +
        '</i> user.login: <i>' + user.login +
        '</i><br>User <i>' + user.name +
        '</i> success registration <i>' + strdate + ' ' + strtime + '</i>',
      read: false,
      show: false
    })
  }

  // ---------- getters ----------
  const loginid = computed(() => userloginid.value)

  const userMessages = computed(() =>
    messages.value.filter(m => m.to == userloginid.value || m.from == userloginid.value)
  )

  const personalcards = computed(() =>
    cards.value.filter(c => c.userId === userloginid.value)
  )

  const personalposts = computed(() =>
    posts.value.filter(g => g.groupId === -1 && g.userId === userloginid.value)
  )

  const postsUser = computed(() => {
    const pu = []
    for (let i = 0; i < posts.value.length; i++) {
      const gi = posts.value[i].groupId
      if (gi === -1) {
        const frid = users.value[userloginid.value].friends.filter(f => f === userloginid.value)
        if (frid[0] !== undefined || posts.value[i].userId === userloginid.value) pu.push(posts.value[i])
        continue
      }
      let pf = false
      const fl = groups.value[gi].followers.filter(rp => rp === userloginid.value)
      const ru = posts.value[i].repost.filter(rp => rp === userloginid.value)
      if (ru[0] !== undefined) {
        pf = true
        pu.push(posts.value[i])
      } else if (groups.value[gi].idAdmin !== userloginid.value && fl[0] == userloginid.value && pf === false) {
        pu.push(posts.value[i])
      } else if (posts.value[i].userId === userloginid.value && pf === false) {
        pu.push(posts.value[i])
      }
      pf = false
    }
    return pu
  })

  const postsAll = computed(() => posts.value)

  const groupsAdmin = computed(() =>
    groups.value.filter(g => g.idAdmin == userloginid.value)
  )

  const user = computed(() => currentUser.value)

  const friends = computed(() => {
    const fr = users.value[userloginid.value].friends.filter(u => u !== userloginid.value)
    return fr.map(f => users.value[f])
  })

  const groupsUser = computed(() => {
    const grp = []
    let addcheck = false
    for (let i = 0; i < groups.value.length; i++) {
      const fl = groups.value[i].followers.filter(v => v === userloginid.value)
      if (groups.value[i].idAdmin === userloginid.value) {
        grp.push(groups.value[i])
        addcheck = true
      }
      if (fl[0] !== undefined && addcheck != true) {
        grp.push(groups.value[i])
        addcheck = true
      }
      addcheck = false
    }
    return grp
  })

  const repostsUser = computed(() =>
    posts.value.filter(p => p.repost.some(rid => rid === userloginid.value))
  )

  const likesUser = computed(() =>
    posts.value.filter(p => p.likes.some(rid => rid === userloginid.value))
  )

  // ---------- actions ----------
  async function fetchAll() {
    const [
      usersArr, groupsArr, messagesArr, cardsArr, postsArr, commentsArr, alertObj
    ] = await Promise.all([
      api.fetchUsersList().then(r => r.data),
      api.fetchGroupsList().then(r => r.data),
      api.fetchMessagesList().then(r => r.data),
      api.fetchCardsList().then(r => r.data),
      api.fetchPostsList().then(r => r.data),
      api.fetchCommentsList().then(r => r.data),
      api.fetchAlert().then(r => r.data)
    ])
    setUsers(usersArr)
    setGroups(groupsArr)
    setMessages(messagesArr)
    setCards(cardsArr)
    setPosts(postsArr)
    setComments(commentsArr)
    setAlert(alertObj)
    return { status: '200 OK' }
  }

  async function getusers() {
    const arr = await api.fetchUsersLists().then(r => r.data)
    setUsers(arr)
  }

  async function getgroups() {
    setGroups(await api.fetchGroupsList().then(r => r.data))
  }

  async function getmessages() {
    setMessages(await api.fetchMessagesList().then(r => r.data))
  }

  async function getposts() {
    setPosts(await api.fetchPostsList().then(r => r.data))
  }

  async function getcards() {
    setCards(await api.fetchCardsList().then(r => r.data))
  }

  async function getcomments() {
    setComments(await api.fetchCommentsList().then(r => r.data))
  }

  async function getalert() {
    setAlert(await api.fetchAlert().then(r => r.data))
  }

  async function signin(user) {
    const d = await api.getUser(user).then(r => r.data)
    if (d[0] === undefined) return { auth: false }
    signIn(d[0])
    return { auth: true }
  }

  function signup(user) {
    signUp(user)
  }

  // в setup-сторе всё, что должно быть доступно снаружи, нужно вернуть явно
  return {
    // state
    currentUser, users, messages, cards, posts, comments, alert, groups,
    userloginid, auth,
    // getters
    loginid, userMessages, personalcards, personalposts,
    postsUser, postsAll, groupsAdmin, user, friends, groupsUser,
    repostsUser, likesUser,
    // actions
    fetchAll, getusers, getgroups, getmessages, getposts, getcards,
    getcomments, getalert, signin, signup, signupPost: signUp
  }
})
