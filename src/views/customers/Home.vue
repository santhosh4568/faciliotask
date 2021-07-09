<template>
  <div class="home">
    <div class="cuh-header">
      <h2>All Customers</h2>
    </div>
    <el-table
    class="cu-table"
    ref="multipleTable"
    :data="customers"
    style="width: 100%"
   
    @row-click="handleRow"
    >
    
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="ID"
      width="120">
      <template slot-scope="scope" >
         <router-link :to="{name:'CustomerDetails',params:{id:scope.row.id}}" class="link">
        {{ scope.row.id}}
         </router-link>
      </template>
    </el-table-column>
    <el-table-column
      property="name"
      label="NAME"
      width="300">
    </el-table-column>
    <el-table-column
      property="address"
      label="ADDRESS"
      width=200>
    </el-table-column>
    <el-table-column
      property="city"
      label="CITY"
      width=200>
    </el-table-column>
    <el-table-column
      property="contact"
      label="CONTACT"
      width=200>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return{
      customers:[],
      rowid:null,
    }
  },
  methods:{
      handleRow(row)
      {
          this.rowid=row.id;
          
      }
  },
  mounted() {
    fetch('http://localhost:3000/customer')
    .then((res)=>res.json())
    .then(data => this.customers=data)
    .catch(err => console.log(err.message))
  }
}
</script>
<style scoped>
el-table-column label{
  color:white;
}
.home
{
  left:7%;
  position:absolute;
  top:60px;
}
.link
{
  text-decoration: none;
}
.cu-header
{
  height:100px;
  width:100%;
  background-color: white;
}
.cu-table{
  margin-top:25px;
}
</style>
