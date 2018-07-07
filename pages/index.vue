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
        <el-row>
          <el-col :xs="12" :sm="8" :md="6" :lg="4" :xl="3"
                  v-for="repository in repositories" :key="repository.id">
            <a :href="repository.html_url" target="_blank">
              <Card :repository="repository" />
            </a>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
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
  .header {
    position: sticky;
    z-index: 100;
    top: 0;
  }

  .el-col {
    padding: 10px;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
</style>
