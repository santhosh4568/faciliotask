<template>
  <div class="profile">
    <el-row class="row">
      <el-col :span="12" class="forms">
        <h1 style="text-align:center">Your Details</h1>
        <el-form
          class="idform"
          ref="proform"
          :model="proform"
          label-width="120px"
        >
          <el-form-item label="First Name">
            <el-input
              v-model="proform.firstname"
              @input="handleFirst"
            ></el-input>
          </el-form-item>
          <el-form-item label="Last Name">
            <el-input v-model="proform.lastname" @input="handleLast"></el-input>
          </el-form-item>
          <el-form-item label="Position">
            <el-input
              v-model="proform.position"
              @input="handlePosition"
            ></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="proform.email" @input="handleEmail"></el-input>
          </el-form-item>
          <el-form-item label="D.O.J">
            <el-date-picker
              format="dd-MM-yyyy"
              value-format="dd-MM-yyyy"
              :default-value="defaultdate"
              @input="handleDoj"
              v-model="proform.doj"
              type="date"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="Contact">
            <el-input
              v-model="proform.contact"
              @input="handleContact"
            ></el-input>
          </el-form-item>
          <el-form-item label="Profile Pic">
            <input type="file" @change="fileChange($event)" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleclick">Update</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <h1 style="text-align:center">ID CARD</h1>
        <div class="mainbar">
          <div class="idcard">
            <div class="top">
              <h4 class="dept">FACILIO TECHNOLOGY</h4>
              <div class="picwrap">
                <div class="pic" style="padding:5px;">
                  <img class="uid" :src="proform.image" />
                </div>
              </div>
              <h4 class="dept">{{ proform.position }}</h4>
            </div>

            <div class="bottom">
              <h4 class="dept1">
                NAME: {{ proform.firstname }} {{ proform.lastname }}
              </h4>
              <h4 class="dept1">POSITION:{{ proform.position }}</h4>
              <h4 class="dept1">EMPLOYEE ID: 1234XXX</h4>
              <h4 class="dept1">D.O.J: {{ proform.doj }}</h4>
              <h4 class="dept1">CONTACT:{{ proform.contact }}</h4>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      proform: {
        firstname: "Santhosh",
        lastname: "P",
        position: "Student Intern",
        doj: "23-06-2021",
        email: "santhosh@facilio.com",
        contact: "7339535537",
        defaultdate: new Date("2021-06-23"),
        attachment: null,
        image: require("../assets/user.jpg"),
      },
    };
  },
  methods: {
    fileChange(evt) {
      this.proform.attachment = evt.target.files[0];
      this.proform.image = URL.createObjectURL(this.proform.attachment);
    },

    handleclick(e) {
      var payload = {
        firstname: this.proform.firstname,
        lastname: this.proform.lastname,
        position: this.proform.position,
        doj: this.proform.doj,
        email: this.proform.email,
        contact: this.proform.contact,
        image: this.proform.image,
      };
      this.$store.dispatch("setter", payload);
    },
  },
};
</script>

<style scoped>
.profile {
  left: 7%;
  position: absolute;
  top: 60px;
}
.row {
  width: 1000px;
  height: 650px;
  background-color: white;
  margin-left: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.idform {
  margin: 40px;
  margin-left: 15px;
}
.mainBar {
  height: 85vh;
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.idcard {
  height: 450px;
  width: 300px;
  margin-top: 30px;
  margin-left: 80px;
  position: relative;
  box-shadow: 1px 1px 7px 7px;
}
.top {
  height: 40%;
  background-color: rgba(255, 0, 0, 0.884);
  position: relative;
}

.bottom {
  height: 60%;
  background-color: white;
}
.picwrap {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  top: 1px;
}
.pic {
  height: 90px;
  width: 90px;

  border-radius: 50%;
}
.uid {
  height: 90px;
  width: 90px;
  border-radius: 50%;
}
.dept {
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-family: "Odibee Sans", cursive;
  padding: 10px;
}
.dept1 {
  color: black;
  text-align: justify;

  text-transform: uppercase;
  font-family: "Odibee Sans", cursive;
  padding: 7px;
}
</style>
