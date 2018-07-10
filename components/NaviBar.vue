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
  import Remote = Electron.Remote;
  const remote: Remote = require('electron').remote
  const fs = remote.require('fs')

  import * as chokidar from 'chokidar'

  @Component({})
  export default class extends Vue {
    @State total;

    mounted() {
      console.log('mounted...')
      const w = chokidar.watch('/home/vagrant/hoge.md')
      w.on('change', (path, stats) => {
        console.log(stats)
        fs.readFile('/home/vagrant/hoge.md', "utf8", (err, data) => console.log(data))
      })
      // fs.readFile('/home/vagrant/hoge.md', "utf8", (err, data) => console.log(data))
      // fs.watchFile('/home/vagrant/hoge.md', (type, filename) => {
      //   console.log(type, filename)
      //   fs.readFile('/home/vagrant/hoge.md', "utf8", (err, data) => console.log(data))
      // })
    }

  }
</script>
