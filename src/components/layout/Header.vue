<template>
  <div>
    <div id="header">
      <div class="logowrap">
        <img src="../../assets/facilio-logo.svg" alt="logo" />
      </div>
      <div class="opt">
        <div class="prof">
          <el-avatar
            style="background-color:rgb(57,178,194)"
            icon="el-icon-plus"
            :size="30"
          >
          </el-avatar>
        </div>
        <div class="prof">
          <el-avatar
            style="background-color:rgb(64,64,96)"
            icon="el-icon-bell"
            :size="30"
            :click="opennav"
          >
          </el-avatar>
        </div>
        <div class="prof">
          <el-button
            style="align-self:center"
            @click="opennav"
            class="user"
            :size="25"
            >{{ getFirstname.slice(0, 2) }}</el-button
          >
        </div>
      </div>
    </div>
    <div class="sidebar" id="mysidenav">
      <div class="first">
        <span @click="closenav" class="prof1">&times; </span>

        <div class="userwrap">
          <h3 style="text-align:center;text-transform:uppercase">
            {{ getFirstname.slice(0, 2) }}
          </h3>
        </div>

        <h4>{{ getFirstname }}.{{ getLastname }}</h4>
        <h4>{{ getEmail }}</h4>
        <router-link to="/app/profile/">
          <i class="el-icon-user" @click="closenav" style="color:white">
            My Profile</i
          >
          <span slot="title">User Profile</span>
        </router-link>
      </div>
      <div class="menu">
        <ul>
          <li><i class="el-icon-help"> Help</i></li>
          <li><i class="el-icon-mobile-phone"> About</i></li>
          <li><i class="el-icon-right">LogOut</i></li>
        </ul>
      </div>
    </div>
    <div class="navwrap">
      <el-menu class="el-menu-vertical" :collapse="isCollapse">
        <router-link to="/app/customer/all">
          <el-menu-item index="1">
            <i class="el-icon-s-custom"></i>
            <span slot="title">Customer</span>
          </el-menu-item>
        </router-link>
        <router-link to="/app/invoices/all">
          <el-menu-item index="2">
            <i class="el-icon-document-copy"></i>
            <span slot="title">Invoice</span>
          </el-menu-item>
        </router-link>
        <router-link to="/app/profile/">
          <el-menu-item index="3">
            <i class="el-icon-user"></i>
            <span slot="title">User Profile</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      isCollapse: true,
      uname: "",
      firstname: "",
      lastname: "",
      email: "",
    };
  },
  methods: {
    opennav() {
      document.getElementById("mysidenav").style.right = 0;
      document.getElementsById("btn1").style.backgroundColor = "rgb(71,58,158)";
    },
    closenav() {
      document.getElementById("mysidenav").style.right = "-350px";
    },
  },
  computed: {
    ...mapGetters(["getFirstname", "getLastname", "getEmail"]),
  },
};
</script>
<style scoped></style>

<style scoped>
.user {
  border: 0.5px solid black;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  background-color: rgb(71, 58, 158);
  color: white;
}
button {
  background-color: rgb(71, 58, 158) !important;
  color: white !important;
}
.user:hover {
  background-color: rgb(71, 58, 158);
}

.btn1 {
  background-color: rgb(71, 58, 158);
}

.prof {
  border-radius: 50%;
  display: flex;
}
.el-menu-item.is-active {
  color: #ff3184;
  border-left: #ff3184 !important;
}

.prof1 {
  font-size: 40px;
  opacity: 0.7;
  cursor: pointer;

  color: white;
  position: absolute;
  top: 10px;
  right: 20px;
}
#header {
  height: 50px;
  width: 100%;
  color: white;
  background-color: rgb(47, 46, 73);
  display: flex;
}
.logowrap {
  align-self: center;
  margin: 15px;
}
.opt {
  display: flex;
  margin-left: 80%;
  margin-right: 5%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.prof {
  margin: 10px;
}
.navwrap {
  width: 63px;
  height: 93vh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: white;
}
.sidebar {
  right: -350px;
  position: fixed;
  width: 350px;
  height: 100%;
  background-color: white;
  transition: 0.7s;
  z-index: 1;
}
.first {
  height: 35%;
  background-color: rgb(72, 58, 158);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
}
.userwrap {
  height: 100px;
  width: 100px;
  border: solid 2px white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
}
.menu ul {
  margin-top: 50%;
}
.menu li {
  list-style: none;
  margin: 25px;
  line-height: 30px;
}
.first h4 {
  font-size: 13px;
  padding: 8px;
}
.el-icon-user {
  padding: 10px;
}
</style>
