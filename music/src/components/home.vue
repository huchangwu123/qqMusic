<template>
  <div>
    <!-- 轮播 -->
    <div class="swiper-container lb">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-if="i<5" v-for="(con,i) in swiperImg" :key="con.id">
          <img :src="con.imageUrl" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 电台 -->
    <div class="radio">
      <h2>电台</h2>
      <ul>
        <li v-if="i<2" v-for="(con,i) in radioImg" :key="con.id">
          <a href>
            <img :src="con.picUrl" alt />
            <h3>{{con.name}}</h3>
          </a>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="foot">
      <div class="foot_con">
        <a href class="PC">查看电脑版网页</a>
        <div class="logo_fotter"></div>
        <p>Copyright © 1998 - 2019 Tencent. All Rights Reserved.</p>
        <p>联系电话：0755-86013388 QQ群：55209235</p>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../common/api"
import Swiper from "../../node_modules/swiper/js/swiper.min.js";
export default {
  data() {
    return {
      swiperImg: [
        // {
        //   id: 1,
        //   imgUrl: require("../assets/img/lb1.jpg")
        // },
        // {
        //   id: 2,
        //   imgUrl: require("../assets/img/lb2.jpg")
        // },
        // {
        //   id: 3,
        //   imgUrl: require("../assets/img/lb3.jpg")
        // },
        // {
        //   id: 4,
        //   imgUrl: require("../assets/img/lb4.jpg")
        // },
        // {
        //   id: 5,
        //   imgUrl: require("../assets/img/lb5.jpg")
        // }
      ],
      radioImg:[
        // {
        //   imgUrl:"../assets/img/radio1.jpg",
        //   title:"热歌"
        // }
      ]
    };
  },
  methods:{
    mySwiper(){
      let swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      loop: true
    });
    } 
  },
  mounted() {
    //轮播
    console.log(this,"11111");
    this.$http({
      url:api.banner
    })
    .then(res=>{
      console.log(res)
      this.swiperImg = res.data.banners
      this.$nextTick(()=>{
        this.mySwiper();
      })
    })
    .catch(err=>{

    })
    //电台
    this.$http({
      url:api.personalized
    })
    .then(res=>{
      console.log(res)
      this.radioImg = res.data.result
    })
    .catch(err=>{

    })
  }
};
</script>
<style lang="">
@import "../../node_modules/swiper/css/swiper.min.css";
/*轮播*/
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.lb {
  margin-bottom: 0.28rem;
}
.lb img {
  width: 7.5rem;
  height: 3rem;
}
/*电台*/
.radio {
  margin: 0 0.2rem 0.14rem 0.2rem;
}
.radio h2 {
  font-size: 0.32rem;
  line-height: 0.5rem;
  color: #000;
  margin-bottom: 0.22rem;
}
.radio ul {
  display: flex;
}
.radio ul li {
  width: 50%;
  margin-right: 0.16rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
  background: #fff;
}
.radio ul li img {
  text-align: center;
  width: 3.47rem;
}
.radio ul li h3 {
  padding: 0.1rem 0.14rem 0.1rem 0.14rem;
  height: 0.72rem;
  line-height: 0.36rem;
  font-size: 0.28rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/*底部*/
.foot {
  padding: 0.3rem 0 1.4rem 0;
}
.foot .foot_con .PC {
  display: block;
  text-align: center;
  margin-bottom: 0.32rem;
  font-size: 0.28rem;
}
.foot .foot_con .logo_fotter {
  width: 1.64rem;
  height: 0.48rem;
  margin: 0 auto 0.2rem;
  background: url(../assets/img/logo_footer.png) no-repeat;
  background-size: cover;
}
.foot .foot_con p {
  font-size: 0.2rem;
  line-height: 0.4rem;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
}
</style>