<template>
  <form class="form-signin">
    <div class="header__logo text-center">
      <h1 class="header__logo__title">
        <span>N</span><span>e</span><span>w</span><span>s</span> <span>p</span
        ><span>o</span><span>r</span><span>t</span><span>a</span><span>l</span>
      </h1>
      <p class="signparagraph">Vue.js news portal</p>
    </div>
    <div class="form-label-group signelem">
      <label for="inputLogin">Login</label>
      <input
        type="login"
        id="inputLogin"
        class="form-control"
        placeholder="Login"
        required
        autofocus
        v-model="login"
      />
    </div>
    <div class="form-label-group signelem">
      <label for="inputPassword">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
        v-model="password"
      />
    </div>
    <div class="form-label-group signelem">
      <label for="inputRetryPassword">Password</label>
      <input
        type="password"
        id="inputRetryPassword"
        class="form-control"
        placeholder="Retry Password"
        required
        v-model="retrypassword"
      />
    </div>
    <div class="form-label-group signelem">
      <label for="inputEmail">Email</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email"
        required
        autofocus
        v-model="email"
      />
    </div>
    <div class="form-label-group signelem">
      <label for="inputName">Name</label>
      <input
        type="text"
        id="inputName"
        class="form-control"
        placeholder="Name"
        required
        autofocus
        v-model="name"
      />
    </div>
    <div class="form-label-group signelem">
      <label for="inputAge">Age</label>
      <input
        type="number"
        id="inputAge"
        class="form-control"
        placeholder="Age"
        required
        autofocus
        v-model="age"
      />
    </div>
    <div class="form-label-group signelem">
      <label for="inputAge">Gender</label>
      <input type="radio" v-model="editgender" name="gender" value="men" />Men
      <input
        type="radio"
        v-model="editgender"
        name="gender"
        value="women"
      />Women
    </div>
    <div class="form-label-group signelem">
      <label for="inputCity">City</label>
      <input
        type="text"
        id="inputCity"
        class="form-control"
        placeholder="City"
        required
        autofocus
        v-model="city"
      />
    </div>
    <div class="form-label-group signelem">
      <label for="inputSpecialization">Specialization</label>
      <input
        type="text"
        id="inputSpecialization"
        class="form-control"
        placeholder="Specialization"
        required
        autofocus
        v-model="specialization"
      />
    </div>

    <button
      class="btn btn-lg btn-primary btn-block btn-sign"
      @click.prevent="signupfun"
    >
      Sign up
    </button>
  </form>
</template>
<style lang="scss">
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.signelem {
  color: white;
}
.signparagraph {
  color: #e0e;
}
.btn-sign {
  margin-top: 25px;
}
.form-signin {
  margin-top: 60px !important;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
.form-signin {
  width: 300px !important;
  margin: auto;
}
@media (max-width: 300px) {
  .form-signin {
    width: 200px !important;
  }
}
</style>
<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      retrypassword: "",
      city: "",
      editgender: "men",
      name: "",
      age: 18,
      specialization: "",
      email: "",
      regdata: {
        status: "",
        error: false,
        user: {},
      },
    };
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    signupfun() {
      if (this.login === "") {
        this.regdata.status = "Empty login";
        this.regdata.error = true;
        this.regdata.user = {};
      } else {
        console.log("Users: " + this.users);
        if (this.password === this.retrypassword) {
          this.regdata.user = {
            skills: [],
            login: this.login,
            friends: [],
            contacts: [
              {
                messenger: "email",
                contact: this.email,
              },
            ],
            rang: "user",
            spec: this.specialization,
            name: this.name,
            age: this.age,
            avatar: "src/assets/images/avatar.png",
            gender: this.editgender,
            password: this.password,
            city: this.city,
            link: "test.com/newuser",
            id: this.users.length,
          };
          this.regdata.status = "Success sign up";
          this.regdata.error = false;

          console.log("OK sign up");
        } else {
          this.regdata.user = {};
          this.regdata.status = "Password invalid";
          this.regdata.error = true;
        } //else
      } //else
      console.log("status: " + this.regdata.status);
      this.$emit("signup", this.regdata);
    },
  },
};
</script>
