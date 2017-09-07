<template>
  <div>
    <x-header :left-options="{showBack: false}">我的</x-header>      
    
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
      111111MY11
    </group>
    
    <vTabbar></vTabbar>
  </div>
</template>

<script>
import { Group, Cell, XHeader } from 'vux'
import vTabbar from '../tabbar/tabbar.vue'


export default {
  components: {
    Group,
    Cell,
    XHeader,
    vTabbar
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
