<template>
  <div>
    <x-header :left-options="{showBack: false}">首页</x-header>
    <div class="tab-wrapper" ref="wrapper">
      <!-- <div class="element"> -->
      <!-- style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;" -->
      <tab :line-width=1 v-model="index" :style="styleObject">
        <tab-item class="vux-center" v-for="(item, index) in list" :key="index">{{item}}</tab-item>
      </tab>
      <!-- </div> -->
    </div>
    <div class="swiper-wrapper" :style="swWrapper" ref="swiper" id="swiper-wrapper">
      <div :style="styleSwHei">
        <swiper v-model="index" :height="SwHei" :show-dots="false" v-if="isLoading">
          <swiper-item v-for="(item, index) in list" :key="index">
            <div class="tab-swiper vux-center" v-for="i in dlist1.length">
              <grid :rows="3">
                <grid-item class="gridThree" v-for="j in 6">
                  <img :src="dlist1[i-1].data[j-1].imgSrc" alt="">
                  <p>{{dlist1[i-1].data[j-1].filmName}}</p>
                  <p>{{dlist1[i-1].data[j-1].actor}}</p>

                  <!-- {{dlist1[i-1].title}} -->
                  <!-- {{dlist1[i].title}} -->
                  <!-- {{dlist1[0].data[i].filmName}} -->
                  <!-- {{dlist1[i].title}} -->
                </grid-item>
              </grid>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </div>
    <vTabbar></vTabbar>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import axios from 'axios'
import { Tabbar, TabbarItem, XHeader, Group, Cell, Grid, GridItem } from 'vux'
import vTabbar from '../tabbar/tabbar.vue'
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
const list = ['精选', '美食', '电影', '酒店', '外卖', '外卖1', '外卖2', '外卖3', '外卖4', '外卖5', '外卖6']
let list66 = '';
let tabwidth = list.length * 70;
let swHeight = 500 * 7;
//计算高度
let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let swWrapper = (h - 142);
console.log(swWrapper)
// let imgH = ;

export default {
  data() {
    return {
      styleObject: {
        width: tabwidth + 'px',
      },
      styleSwHei: {
        height: swHeight + 'px',
      },
      SwHei: swHeight + 'px',
      swWrapper: {
        height: swWrapper + 'px'
      },
      list: list,
      index: 0,
      isLoading: false,
      dlist1: []
    }
  },
  methods: {
    tabScrollLeft() {//侧滑
      if (this.index < 3) {
        this.scroll.scrollTo(0, 0, 700)
      } else {
        this.scroll.scrollTo((-70 * (this.index - 2)), 0, 700)
      }
    }
  },
  computed: {

  },
  created: function() {
    console.log('2-created 创建完成');

    axios.get('http://movie.wxjii.cn/php/movieBAxios.php?type=1')
      .then(reponse => {
        // console.log(reponse.data);
        this.dlist1 = reponse.data.data;
        console.log(this.dlist1);

        this.$nextTick(() => {
          var swiperScroll = new BScroll(this.$refs.swiper, {
            scrollY: true,
            scrollX: false,
          })
          this.isLoading = true;

          // this.swiperScroll.scrollTo(0,-100,500) 

          // this.swiperScroll.scrollTo(0,-100,700) 
        });
      })
      .catch(error => {
        console.log(error);
        // alert('网络错误，不能访问');
      });

    console.log(this.dlist1);
  },
  beforeMount() {

  },
  mounted: function() {
    console.log(swWrapper)
    console.log("mounted")
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        eventPassthrough: 'vertical',
        probeType: 2,
        tap: true
      })
    });

    // this.$nextTick(() => {
    // var scrollY = new BScroll(this.$refs.swiper)
    // });

  },
  updated: function() {
    console.log(123)
    this.tabScrollLeft();

    // swiperScroll
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
  display: none;
}

.tab-wrapper {
  overflow: hidden;
}

.swiper-wrapper {
  overflow: hidden;
  /* height: 500px; */
}

.finished {
  text-decoration: underline;
}

.weui-grids {
  width: 100%;
}

#swiper-wrapper .gridThree{
  padding: 0;
  height: 250px;
  text-decoration: none;
  font-size: 10px;
}
#swiper-wrapper .gridThree img{
  height: 150px;
}
#swiper-wrapper .gridThree p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}
</style>
