<template>
  <div class="home">
    <div class="cuh-header">
      <h2>All Invoices</h2>
    </div>
    <el-table
      class="cu-table"
      ref="multipleTable"
      :data="invoices"
      style="width: 100%"
      @row-click="handleRow"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="ID" width="120">
        <template slot-scope="scope">
          <router-link
            :to="{ name: 'InvoiceDetails', params: { id: scope.row.id } }"
            class="link"
          >
            {{ scope.row.id }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column property="client" label="NAME" width="300">
      </el-table-column>
      <el-table-column property="itemname" label="ITEM" width="200">
      </el-table-column>
      <el-table-column property="price" label="PRICE" width="200">
      </el-table-column>
      <el-table-column property="contact" label="CONTACT" width="200">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Invoices",
  data() {
    return {
      invoices: [],
      rowid: null,
    };
  },
  methods: {
    handleRow(row) {
      this.rowid = row.id;
    },
  },
  mounted() {
    fetch("https://60ed053da78dc700178adcc6.mockapi.io/api/invoices")
      .then((res) => res.json())
      .then((data) => (this.invoices = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style scoped>
el-table-column label {
  color: white;
}
.home {
  left: 7%;
  position: absolute;
  top: 60px;
}
.link {
  text-decoration: none;
}
.cu-header {
  height: 100px;
  width: 100%;
  background-color: white;
}
.cu-table {
  margin-top: 25px;
}
</style>
