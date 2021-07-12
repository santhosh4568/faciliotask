<template>
  <div class="cust" v-if="customer">
    <el-container style="height: 600px;width:1100px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color:white">
        <div v-for="customer in customers" :key="customer.id">
          <router-link
            :to="{ name: 'CustomerDetails', params: { id: customer.id } }"
            class="link"
          >
            <h2 class="item" @click="clickhandler">{{ customer.name }}</h2>
          </router-link>
        </div>
      </el-aside>

      <el-container>
        <el-header
          style="display:flex ; flex-direction:column; justify-content:flex-start;"
        >
          <h5 style="color:rgb(57,178,194);padding:10px">#{{ customer.id }}</h5>
          <h4 style="color:rgb(50, 64, 86);font-weight:400;font-size:22px;">
            {{ customer.name }}
          </h4>
          <el-tabs v-model="activeName">
            <el-tab-pane label="CUSTOMER" name="first">
              <div class="sumcard">
                <h3>
                  Name:<span> {{ customer.name }}</span>
                </h3>
                <h3>
                  Address:<span>{{ customer.address }}</span>
                </h3>
                <h3>
                  City:<span>{{ customer.city }}</span>
                </h3>
                <h3>
                  Contact:<span>{{ customer.contact }}</span>
                </h3>
              </div>
            </el-tab-pane>
            <el-tab-pane label="MAINTENENCE" name="second"
              >Maintenence Here</el-tab-pane
            >
            <el-tab-pane label="ROLE" name="third">Role Here</el-tab-pane>
            <el-tab-pane label="TASK" name="fourth">Task Here</el-tab-pane>
          </el-tabs>
        </el-header>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      customer: null,
      customers: [],
      activeName: "first",
      active: true,
    };
  },
  methods: {
    clickhandler(evt) {
      fetch("http://localhost:3000/customer/" + this.id)
        .then((res) => res.json())
        .then((data) => (this.customer = data))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    fetch("http://localhost:3000/customer/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.customer = data))
      .catch((err) => console.log(err.message));

    fetch("http://localhost:3000/customer")
      .then((res) => res.json())
      .then((data) => (this.customers = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.cust {
  left: 7%;
  position: absolute;
  top: 60px;
}
h2 {
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px black;
}
.sumcard {
  margin: 20px;
  background-color: white;
  height: 250px;
}
.item {
  border-bottom: 1px solid #f4f6f8;
  padding: 20px;
  font-size: 14px;
  color: rgb(50, 64, 86);
  letter-spacing: 0.5px;
  font-weight: 400;
  text-decoration: none solid rgb(50, 64, 86);
  text-align: start;
}
.item .active {
  background-color: rgb(238, 245, 247);
}
.item:hover {
  background-color: rgb(238, 245, 247);
}
.sumcard h3 {
  padding: 10px;
  text-align: justify;
}
.el-tabs__item.is-active {
  color: #ff3184 !important;
}
.el-tabs__item:hover {
  color: #ff3184;
  cursor: pointer;
}
.sumcard span {
  color: rgb(50, 64, 86);
  font-weight: 400;
  font-size: 18px;
  padding-top: 10px;
}
</style>
