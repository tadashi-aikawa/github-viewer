<template>
  <el-container>
    <el-header class="header">
      <el-menu
        default-active="2"
        class="el-menu-demo"
        mode="horizontal">
        <el-menu-item index="1">
          <img src="https://tctechcrunch2011.files.wordpress.com/2010/07/github-logo.png?w=60&h=60"/>
        </el-menu-item>
        <el-menu-item index="2">Repositories</el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <div style="padding: 10px;">
        <nuxt/>
      </div>
    </el-main>
  </el-container>
</template>


<style scoped>
  .header {
    position: sticky;
    z-index: 100;
    top: 0;
  }
</style>
