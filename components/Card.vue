<template>
  <el-tooltip :content="repository.description" effect="light" popper-class="popup">
    <el-card class="card" :body-style="{ padding: '0px' }" shadow="always">
      <img :src="repository.owner.avatar_url" class="image">
      <div style="padding: 14px;">
        <div class="repository-name">{{ repository.name }}</div>
        <div class="owner-name">{{ repository.owner.login }}</div>
        <div class="bottom clearfix">
          <i class="el-icon-star-on">{{ repository.stargazers_count }}</i>
        </div>
        <div style="text-align: right;">
          <img :src="repository.languageIconUrl" width="35" height="35" />
        </div>
      </div>
    </el-card>
  </el-tooltip>
</template>


<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from "nuxt-property-decorator"
  import {Repository} from "store/index";

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
  }

  .owner-name {
    font-size: 13px;
    color: #999;
  }

  .el-icon-star-on {
    font-size: 15px;
    color: #606266;
  }

  .repository-name {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>

<style>
  .popup {
    max-width: 50vw;
  }
</style>
