<template>
  <div id="app">
    <!-- <x-header :left-options="{showBack: false}">title1</x-header> -->
    
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
  <!-- <div>
    <group>
      <cell title="title12" value="value">s</cell>
    </group>
  </div> -->
  <!-- <vTabbar></vTabbar> -->
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, Group, Cell } from 'vux'
import vTabbar from './components/tabbar/tabbar.vue'

export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    Group,
    Cell,
    vTabbar
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html { overflow-y: scroll; }
body {
  background-color: #fbf9fe;
}
</style>
