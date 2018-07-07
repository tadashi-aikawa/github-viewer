<template>
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
