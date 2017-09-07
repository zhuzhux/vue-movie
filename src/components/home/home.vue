<template>
  <div>
    <x-header :left-options="{showBack: false}">首页</x-header>
    <div class="tab-wrapper" ref="wrapper">
      <!-- <div class="element"> -->
      <!-- style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;" -->
      <tab class="" :line-width=1 v-model="index" :style="styleObject">
        <tab-item class="vux-center" v-for="(item, index) in list" :key="index">{{item}}</tab-item>
      </tab>
      <!-- </div> -->
    </div>
    <swiper v-model="index" height="500px" :show-dots="false">
      <swiper-item v-for="(item, index) in list" :key="index">
        <div class="tab-swiper vux-center">
          <grid :rows="3">
            <grid-item  class="gridThree" v-for="i in 9">
              {{oftenGoods[1]}}
            </grid-item>
          </grid>
        </div>
        
          <p>
          <!-- {{item}}{{index}}{{oftenGoods[0].data[0].alt}} -->
          </p>
      </swiper-item>
    </swiper>
    <vTabbar></vTabbar>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import axios from 'axios'
import { Tabbar, TabbarItem, XHeader, Group, Cell, Grid, GridItem} from 'vux'
import vTabbar from '../tabbar/tabbar.vue'
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
const list = ['精选', '美食', '电影', '酒店', '外卖', '外卖1', '外卖2', '外卖3', '外卖4', '外卖5', '外卖6']
let list66 = '';
let tabwidth = list.length*70;

export default {
  data() {
    return {
      styleObject: {
        width: tabwidth+'px',
      },
      list: list,
      // demo2: '精选',
      index: 0,
      oftenGoods:[]
    }
  },
  methods: {
    tabScrollLeft(){
      if(this.index<3){
        this.scroll.scrollTo(0,0,700) 
      }else{
        this.scroll.scrollTo((-70*(this.index-2)),0,700) 
      }
    }
  },
  computed:{

  },
  created: function() {
    console.log('2-created 创建完成');
    
    axios.get('http://movie.wxjii.cn/php/movieBAxios.php?type=1')
      .then(reponse => {
        // console.log(reponse.data);
        this.oftenGoods = reponse.data.data;
        console.log(this.oftenGoods);
        
      })
      .catch(error => {
        console.log(error);
        // alert('网络错误，不能访问');
      });
        
      console.log(this.oftenGoods);
  },
  beforeMount(){
    
  },
  mounted: function() {
    console.log("mounted")
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        eventPassthrough: 'vertical',
        bounce: true,//回弹动画
        probeType: 2,
        tap: true
      })
    });
    
  },
  updated: function() {
    this.tabScrollLeft();   
     
  },
  components: {
    XHeader,
    vTabbar,
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem,
    Grid,
    GridItem
  }
}
</script>
<style>
@import '~vux/src/styles/center.less';

.element::-webkit-scrollbar {
  display: none
}

.tab-wrapper {
  overflow: hidden
}

.finished {
  text-decoration: underline
}
.weui-grids{
  width: 100%
}
</style>
