<template>
  <el-menu
    default-active="2"
    class="el-menu-demo"
    mode="horizontal">
    <el-menu-item index="1">
      <img src="https://tctechcrunch2011.files.wordpress.com/2010/07/github-logo.png?w=60&h=60"/>
    </el-menu-item>

    <el-menu-item index="2">
      Repositories
      <el-badge :value="total" class="mark"/>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "nuxt-property-decorator"
  import { State } from "vuex-class"

  @Component({})
  export default class extends Vue {
    @State total;
  }
</script>
