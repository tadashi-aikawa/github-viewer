<template>
  <el-container>
    <el-header class="header">
      <NaviBar />
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

<script lang="ts">
  import {
    Component,
    Vue
  } from "nuxt-property-decorator"
  import NaviBar from "~/components/NaviBar";

  @Component({
    components: {
      NaviBar
    }
  })
  export default class extends Vue {
  }
</script>
