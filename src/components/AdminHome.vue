<template>
<el-row>
  <el-col :span="24">
    <el-menu theme="dark" :default-active="paishoumanage" router={true} mode="horizontal" @select="handleSelect">
      <el-menu-item index="paishoumanage">拍手</el-menu-item>
      <el-menu-item index="biaoshumanage">标书</el-menu-item>
      <el-menu-item index="bidmanage">拍牌</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="24">
    <router-view></router-view>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'adminhome'
}
</script>

<style scoped>
</style>
