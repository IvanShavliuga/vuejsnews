<template>
  <section>
    <h3>Profile</h3>
    <div>
      <table class="table profileTable">
        <tr>
          <th colspan="2">Information of user</th>
        </tr>
        <tr>
          <td rowspan="2">
            <img :src="user.avatar" class="avatar" width="80" height="80" />
          </td>
          <td>{{ user.login }}</td>
        </tr>
        <tr>
          <td style="background: #fff; border-top: none">{{ user.rang }}</td>
        </tr>
        <tr v-if="!showeditage" @click="showflagage()">
          <td>Age</td>
          <td>{{ user.age }}</td>
        </tr>
        <tr v-else>
          <td>Age</td>
          <td>
            <input type="number" placeholder="age" v-model="editage" />
            <button class="ml-2 btn btn-primary btn-adds" @click="checkage()">
              <i class="fa fa-check"></i>
            </button>
          </td>
        </tr>
        <tr v-if="!showeditgender" @click="showflaggender()">
          <td>Gender</td>
          <td>{{ user.gender }}</td>
        </tr>
        <tr v-else>
          <td>Gender</td>
          <td>
            <input
              type="radio"
              v-model="editgender"
              name="gender"
              value="men"
            />Men
            <input
              type="radio"
              v-model="editgender"
              name="gender"
              value="women"
            />Women
            <button
              class="ml-2 btn btn-primary btn-adds"
              @click="checkgender()"
            >
              <i class="fa fa-check"></i>
            </button>
          </td>
        </tr>
        <tr v-if="!showeditname" @click="showflagname()">
          <td>Name</td>
          <td>{{ user.name }}</td>
        </tr>
        <tr v-else>
          <td>Name</td>
          <td>
            <input type="text" placeholder="name" v-model="editname" />
            <button class="ml-2 btn btn-primary btn-adds" @click="checkname()">
              <i class="fa fa-check"></i>
            </button>
          </td>
        </tr>
        <tr v-if="!showeditspec" @click="showflagspec()">
          <td>Specialization</td>
          <td>{{ user.spec }}</td>
        </tr>
        <tr v-else>
          <td>Specialization</td>
          <td>
            <input
              type="text"
              placeholder="specialization"
              v-model="editspec"
            />
            <button class="ml-2 btn btn-primary btn-adds" @click="checkspec()">
              <i class="fa fa-check"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>Skills</td>
          <td>
            <div class="skillsLine">
              <span v-for="(s, ks) in user.skills" :key="ks" class="skill">
                <span @click="delskill(ks)">{{ s }}</span
                ><span class="del">x</span>
              </span>
              <div class="d-flex">
                <input type="text" placeholder="skill" v-model="skill" />
                <button
                  class="ml-2 btn btn-primary btn-adds"
                  @click="addskill()"
                >
                  <i class="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr v-if="!showeditcity" @click="showflagcity()">
          <td>City</td>
          <td>{{ user.city }}</td>
        </tr>
        <tr v-else>
          <td>City</td>
          <td>
            <input type="text" placeholder="city" v-model="editcity" />
            <button class="ml-2 btn btn-primary btn-adds" @click="checkcity()">
              <i class="fa fa-check"></i>
            </button>
          </td>
        </tr>
        <tr>
          <th colspan="2">Contacts</th>
        </tr>
        <tr>
          <td>Link profile</td>
          <td>{{ user.link }}</td>
        </tr>
        <tr v-for="(c, kc) in user.contacts" :key="kc">
          <td>
            {{ c.messenger }}
          </td>
          <td>{{ c.contact }}</td>
        </tr>
        <tr>
          <td><input type="text" placeholder="messenger" v-model="mess" /></td>
          <td>
            <input type="text" placeholder="contact" v-model="cont" />
            <button class="ml-2 btn btn-primary btn-adds" @click="addcont()">
              <i class="fa fa-plus"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>
<style lang="scss">
.avatar {
  width: 80 !important;
  height: 80 !important;
  border-radius: 50%;
}
</style>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editage: 0,
      editgender: "men",
      editname: "",
      editspec: "",
      editcity: "",
      showeditage: false,
      showeditgender: false,
      showeditname: false,
      showeditspec: false,
      showeditcity: false,
      mess: "",
      cont: "",
      skill: "",
    }; //return
  }, //data
  methods: {
    addcont() {
      /* this.user.contacts.push({
        messenger: this.mess,
        contact: this.cont,
      }); */
    },
    addskill() {
      // this.user.skills.push(this.skill);
    },
    delskill(ind) {
      console.log(ind);
      // this.user.skills.splice(ind, 1);
    },
    readmess(id) {
      this.messages[id].read = !this.messages[id].read;
    },
    showmess(id) {
      this.messages[id].show = !this.messages[id].show;
    },
    checkname() {
      // this.user.name = this.editname;
      this.showeditname = false;
    },
    checkage() {
      // this.user.age = this.editage;
      this.showeditage = false;
    },
    showflagage() {
      this.showeditage = !this.showeditage;
    },
    showflagname() {
      this.showeditname = !this.showeditname;
    },
    checkspec() {
      // this.user.spec = this.editspec;
      this.showeditspec = false;
    },
    checkgender() {
      // this.user.gender = this.editgender;
      this.showeditgender = false;
    },
    showflaggender() {
      this.showeditgender = !this.showeditgender;
    },
    showflagspec() {
      this.showeditspec = !this.showeditspec;
    },
    checkcity() {
      // this.user.city = this.editcity;
      this.showeditcity = false;
    },
    showflagcity() {
      this.showeditcity = !this.showeditcity;
    },
  },
};
</script>
