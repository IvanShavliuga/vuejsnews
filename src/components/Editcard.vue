<template>
  <section>
    <div class="card mb-2 addpost">
      <form>
        <div class="form-group">
          <div class="card-header">
            <!--  <input
              class="form-control"
              type="text"
              v-model="card.header"
              placeholder="header"
            /> -->
          </div>
          <div class="card-body">
            <p class="card-text">
              <!--  <textarea
                class="form-control"
                cols="50"
                rows="7"
                v-model="card.body"
              >
text</textarea
              > -->
            </p>
            <!-- <input
              class="form-control"
              type="text"
              v-model="card.category"
              placeholder="category"
            /> -->
          </div>
        </div>
        <div class="card-footer">
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            @click="sendcard"
          >
            Send post
          </button>
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
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    sendcard() {
      this.$store.dispatch("editcard", this.card);
      this.$emit("edit");
    },
  },
};
</script>
