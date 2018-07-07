<template>
  <el-card class="card" :body-style="{ padding: '0px' }" shadow="always">
    <img :src="repository.owner.avatar_url" class="image">
    <div style="padding: 14px;">
      <span>{{ repository.owner.login }}</span>
      <div class="bottom clearfix">
        {{ repository.id }}
      </div>
    </div>
  </el-card>
</template>


<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from "nuxt-property-decorator"

  class Owner {
    id: number;
    login: string;
    avatar_url: string;
  }

  interface Repository {
    id: number,
    owner: Owner,
  }

  @Component({})
  export default class Card extends Vue {
    @Prop() repository: Repository
  }
</script>


<style scoped>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

  .card:hover {
    filter: brightness(0.4);
    cursor: pointer;
    /*filter: invert(100%);*/
    /*opacity: 0.5;*/
  }

</style>
