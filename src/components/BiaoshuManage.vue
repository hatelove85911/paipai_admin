<template>
  <el-table
    :data="paishous"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="标书号"
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
</template>

<script>
export default {
  name: 'biaoshumanage',
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
  }
}
</script>

<style scoped>
</style>

