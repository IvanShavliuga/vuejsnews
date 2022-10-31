<template>
  <section>
    <h3>Add new post</h3>
    <div class="card mb-2 addpost">
      <form>
        <div class="form-group">
          <div class="card-header">
            <input
              class="form-control"
              type="text"
              v-model="post.title"
              placeholder="title"
            />
          </div>
          <div class="card-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="groups">Groups</label>
              </div>
              <select
                class="custom-select"
                id="groups"
                v-model="post.groupId"
                placeholder="groups"
              >
                <option value="-1" @click="post.groupId = -1">
                  Personal post
                </option>
                <option
                  v-for="(gid, k) in admingroups"
                  :value="gid.id"
                  :key="k"
                >
                  {{ gid.name }}
                </option>
              </select>
            </div>
            <p class="card-text">
              <textarea
                class="form-control"
                cols="50"
                rows="7"
                v-model="post.desc"
              >
text</textarea
              >
            </p>
          </div>
          <div class="input-group mb-3">
            <input
              class="form-control"
              type="text"
              v-model="catnew"
              placeholder="category"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" @click="addcat">
                <i class="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <div class="card-footer">
            <i class="fa fa-tags"></i>
            <span v-for="(c, kc) in post.cat" :key="kc" @click="delcat(kc)">{{
              c + " "
            }}</span>
            <hr />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              @click="sendpost"
            >
              Send post
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<style lang="scss">
.addpost {
  max-width: 25rem !important;
  span {
    cursor: pointer;
  }
  form {
    margin-bottom: -15px !important;
  }
}
</style>
<script>
export default {
  data() {
    return {
      post: {
        title: "",
        userId: -1,
        date: "1.1.21",
        time: "0:0:0",
        desc: "",
        cat: [],
        like: [],
        repost: [],
        views: [],
        comments: [],
        groupId: 0,
        likeclick: false,
        type: "post",
      },
      catnew: "",
    };
  },
  props: {
    admingroups: {
      type: Array,
      required: true,
    },
    loginid: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addcat() {
      if (this.catnew.length) this.post.cat.push(this.catnew);
    },
    sendpost() {
      this.post.userId = this.loginid;
      this.$store.dispatch("addpost", this.post);
      this.addflag = true;
      this.$emit("add");
    },
    delcat(id) {
      this.post.cat.splice(id, 1);
    },
  },
};
</script>
