<template>
  <section>
    <article class="card mb-2" v-if="!editpost">
      <div class="card-header">
        {{ post.title }}
      </div>
      <div class="card-body">
        <h6 class="card-title">
          <span class="text-primary user-data" title="author">
            <img
              :src="users[post.userId].avatar"
              :alt="users[post.userId].avatar"
              class="avatar-comment"
            />
            @{{ users[post.userId].login }} {{ post.date }}
            {{ post.time }}</span
          >
          <span
            v-if="post.userId === loginid"
            @click="editpost = true"
            class="text-success user-data"
            title="Edit your post"
          >
            <i class="fa fa-pencil" title="edit"></i
          ></span>
          <span v-else title="You repost" class="text-success user-data"
            ><i class="fa fa-retweet"></i
          ></span>
        </h6>
        <div class="card-text">
          <p>
            <i class="fa fa-tags"></i>
            <span v-for="(c, kc) in post.cat" :key="kc">{{ c + " " }}</span>
          </p>
          <p>{{ post.desc }}</p>
        </div>
      </div>
      <div class="card-footer text-primary">
        <p>
          <span title="likes"
            ><i class="fa fa-thumbs-up" @click="like(post)"></i
            >{{ post.like.length }}</span
          >
          <span title="reposts"
            ><i class="fa fa-retweet" @click="repost(post)"></i
            >{{ post.repost.length }}</span
          >
          <span title="views"
            ><i class="fa fa-eye"></i>{{ post.views.length }}</span
          >
          <span title="comments"
            ><i class="fa fa-comments"></i>{{ post.comments.length }}</span
          >
          <span title="group"
            ><i class="fa fa-users"></i> {{ checkgroup() }}
          </span>
        </p>
        <template v-if="post.comments.length">
          <p v-for="(c, k) in post.comments" class="comments" :key="k">
            <img
              class="avatar-comment"
              :src="users[comments[c].userId].avatar"
            />
            <b>@{{ users[comments[c].userId].login }}:</b>
            <br />
            {{ comments[c].text }}
          </p>
        </template>
        <textarea
          class="form-control"
          v-model="comment"
          placeholder="Your comment"
        ></textarea>
        <div class="mt-3">
          <button @click="addcomment" class="btn btn-primary">Comment</button>
        </div>
        <!--<hr>
  <span @click="predisplay=!predisplay" class="debug">Debug</span>
  <pre v-if="predisplay">
  <span class="pre-header">DEBUG MODE:</span>
  loginid: <b>{{loginid}}</b> 
  likes (id): <b>{{post.like}}</b>
  reposts (id): <b>{{post.repost}}</b>
  </pre>-->
      </div>
    </article>
    <app-editpost
      v-else
      @edit="editpostfun"
      :post="post"
      :admingroups="admingroups"
    ></app-editpost>
  </section>
</template>
<style lang="scss">
.card {
  max-width: 17rem !important;
  height: 600px !important;
  margin: 5px !important;
  .avatar-comment {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 4px;
  }
  &-title {
    padding: 5px;
    line-height: 10px;
  }

  &-header {
    font-weight: bold !important;
    color: #93f !important;
  }
  &-footer {
    span {
      padding-right: 6px;
      cursor: default;
      i {
        padding-right: 4px;
      }
    }
    span:hover {
      color: red;
    }
    .debug {
      cursor: pointer;
      color: red;
      font-weight: bold;
    }
    .comments {
      background: #ccc;
      line-height: 14px;
      font-size: 10px;
      border: 1px solid #555;
      padding: 5px;
      margin: 5px;
      cursor: default;
      b {
        font-size: 13px;
        line-height: 14px;
        color: #a5a;
      }
      .pre-header {
        color: red;
        font-size: 14px;
        text-align: center;
        text-decoration: underline;
      }
    }
  }
  &-body {
    span {
      padding-left: 4px;
      i {
        padding-right: 7px;
      }
    }
    span:hover {
      color: red;
    }
    .user-data {
      font-size: 14px;
      cursor: pointer;
    }
  }
}
@media screen and (min-width: 1300px) {
  .card {
    max-width: 21rem !important;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1300px) {
  .card {
    max-width: 20rem !important;
  }
}
@media screen and (min-width: 774px) and (max-width: 1190px) {
  .card {
    max-width: 17rem !important;
  }
}
@media screen and (min-width: 696px) and (max-width: 769px) {
  .card {
    max-width: 23rem !important;
  }
}
@media screen and (min-width: 230px) and (max-width: 694px) {
  .card {
    max-width: 28rem !important;
  }
}
@media screen and (max-width: 298px) {
  .card {
    max-width: 14rem !important;
  }
}
</style>
<script>
import Editpost from "./Editpost.vue";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
    loginid: {
      type: Number,
      required: true,
    },
    admingroups: {
      type: Array,
      required: true,
    },
    groups: {
      type: Array,
      required: true,
    },
    comments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      predisplay: false,
      editpost: false,
      comment: "",
    };
  },
  methods: {
    like(post) {
      this.$store.dispatch("likepost", post);
    },
    repost(post) {
      this.$store.dispatch("repost", post);
    },
    editpostfun() {
      this.$store.dispatch("editpost", this.post);
      this.editpost = false;
    },
    addcomment() {
      let dcm = {
        text: this.comment,
        postId: this.post.id,
        userId: this.loginid,
      };
      this.$store.dispatch("addcomment", dcm);
    },
    checkgroup() {
      if (this.post.groupId === -1) return "Personal post";
      else if (this.post.groupId >= this.groups.length)
        return "Undefined error";
      else if (this.post.groupId >= 0)
        return this.groups[this.post.groupId].name;
    },
  },
  components: {
    appEditpost: Editpost,
  },
  updated() {
    console.log("post.id " + this.post.id);
    console.log("post.groupId " + this.post.groupId);
  },
};
</script>
