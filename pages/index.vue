<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#ff0000">
      <el-menu-item index="1">
        <img src="https://tctechcrunch2011.files.wordpress.com/2010/07/github-logo.png?w=60&h=60"/>
      </el-menu-item>
      <el-menu-item index="2">Processing Center</el-menu-item>
      <el-submenu index="3">
        <template slot="title">Workspace</template>
        <el-menu-item index="3-1">item one</el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
        <el-submenu index="3-4">
          <template slot="title">item four</template>
          <el-menu-item index="3-4-1">item one</el-menu-item>
          <el-menu-item index="3-4-2">item two</el-menu-item>
          <el-menu-item index="3-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4" disabled>Info</el-menu-item>
      <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
    </el-menu>

    <div style="padding: 10px;">
      <el-row>
        <el-col :span="2" v-for="repository in repositories" :key="repository.id">
          <a :href="repository.html_url" target="_blank">
            <Card :repository="repository" />
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "nuxt-property-decorator"
  import { State } from "vuex-class"
  import Card from "~/components/Card.vue"

  @Component({
    components: {
      Card
    }
  })
  export default class extends Vue {
    @State repositories
  }
</script>
<style scoped>
  a {
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }
</style>
