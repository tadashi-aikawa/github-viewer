<template>
  <el-tooltip :content="repository.description" effect="light" popper-class="popup">
    <el-card class="card" :body-style="{ padding: '0px' }" shadow="always">
      <img :src="repository.owner.avatar_url" class="image">
      <div style="padding: 14px;">
        <div class="repository-name">
          <img :src="repository.languageIconUrl" width="25" height="25"/>
          <span style="margin-left: 5px;">{{ repository.name }}</span>
        </div>
        <div class="owner-name">
          <font-awesome-icon icon="user" size="sm"/>
          {{ repository.owner.login }}
        </div>
        <div class="bottom clearfix">
          <i class="el-icon-star-on">{{ repository.stargazers_count }}</i>
        </div>
        <div align="right">
          <span class="license">{{ repository.licenseName }}</span>
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
    padding-left: 5px;
    font-size: 13px;
    color: #999;
  }

  .el-icon-star-on {
    font-size: 15px;
    color: #606266;
  }

  .license {
    font-size: 12px;
    color: #909399;
  }

  .repository-name {
    display: flex;
    align-items: center;
    padding-bottom: 5px;

    font-size: 16px;
    font-weight: bold;
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
