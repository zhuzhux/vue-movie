<template>
    <tabbar>
      <tabbar-item link="/home">
        <img slot="icon" src="./icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/test">
        <img slot="icon" src="./icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <!-- <tabbar-item selected link="/component/demo">
        <img slot="icon" src="./icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item> -->
      <tabbar-item link="/my">
        <img slot="icon" src="./icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>
<style>

</style>
