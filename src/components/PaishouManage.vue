<template>
  <div>
  <el-table
    :data="paishous"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="wxid"
      label="微信号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
  <el-button type="primary" size="large" @click="addNewPaishou">新增拍手</el-button>
  </div>
</template>

<script>

var Parse = require('parse');
Parse.initialize("myAppId");
Parse.serverURL = 'http://localhost:9998/parse'

var Paishou = Parse.Object.extend('Paishou')

export default {
  name: 'paishoumanage',
  data () {
    return {
      paishous: [{
        name: 'sj',
        wxid: '111'
      }, {
        name: 'yb',
        wxid: '222'
      }, {
        name: 'zxy',
        wxid: '333'
      }]
    }
  },
  methods: {
    addNewPaishou () {
      var p1 = new Paishou()
      p1.set("name", 'haha');
      p1.set("wxid", "i056958");
      p1.save(null)
      .then(function (object) {
      })

    }
  }
}
</script>

<style scoped>
</style>
