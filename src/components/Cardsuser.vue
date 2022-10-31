<template>
  <section>
    <h3>Cards</h3>
    <div class="card mb-2 addpost" v-if="cardcheck">
      <form>
        <div class="form-group">
          <div class="card-header">
            <input
              class="form-control"
              type="text"
              v-model="card.header"
              placeholder="header"
            />
          </div>
          <div class="card-body">
            <p class="card-text">
              <textarea
                class="form-control"
                cols="50"
                rows="7"
                v-model="card.body"
              >
text</textarea
              >
            </p>
            <input
              class="form-control"
              type="text"
              v-model="card.category"
              placeholder="category"
            />
          </div>
          <!-- card-body -->
          <div class="card-footer">
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              @click="sendcard"
            >
              Send card
            </button>
          </div>
        </div>
      </form>
    </div>
    <app-cards :cards="personalcards" @cardclick="cardclick"></app-cards>
  </section>
</template>
<script>
import Cards from "./Cards.vue";
export default {
  props: {
    personalcards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      card: {
        id: 0,
        header: "",
        category: "",
        date: "",
        body: "",
      },
      index: 0,
      cardcheck: false,
    };
  },
  methods: {
    cardclick(index) {
      console.log("CARDUSER: " + index);
      this.index = index;
      this.cardcheck = true;
      this.card = this.personalcards[this.index];
    },
    sendcard() {
      this.card.id = this.index;
      this.$store.dispatch("editcard", this.card);
      this.$emit("edit");
      this.index = -1;
      this.cardcheck = false;
    },
  },
  components: {
    appCards: Cards,
  },
};
</script>
