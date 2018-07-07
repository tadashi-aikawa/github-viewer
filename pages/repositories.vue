<template>
  <div
    style="padding: 10px;"
    v-loading.fullscreen.lock="searchingRepositories"
    :element-loading-text="`Search for ${word}`"
  >
    <el-row>
      <el-input
        placeholder="Type something"
        prefix-icon="el-icon-search"
        v-model="word"
        @change="handleSearchRepositories"
        autofucus
      >
      </el-input>
    </el-row>
    <el-row>
      <el-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4"
              v-for="repository in repositories" :key="repository.id">
        <a :href="repository.html_url" target="_blank">
          <Card :repository="repository" />
        </a>
      </el-col>
    </el-row>
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
    @State repositories;
    @State searchingRepositories;
    word = "";

    handleSearchRepositories(e) {
      this.$store.dispatch('searchRepositories', this.word);
    }
  }
</script>
<style scoped>
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
