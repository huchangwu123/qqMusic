<template>
  <div>
    <!-- 榜单 -->
    <div class="mList">
      <ul>
        <li v-if="i<4" v-for="(con,i) in musicList" :key="con.id">
          <div class="mListImg">
            <img :src="con.coverImgUrl" alt />
            <!-- <span>
              <i></i>
              {{con.playCount}}万
            </span> -->
          </div>
          <div class="mListCon">
            <h3>{{con.name}}</h3>
            <p v-for="(item,i) in con.tracks" :key="i">
              {{i+1}}
              <span>{{item.first}}</span>
              {{item.second}}
            </p>
            
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import api from "../common/api";
export default {
  data() {
    return {
      musicList: [
        // {
        //   id: 1,
        //   title: "流行指数榜",
        //   imgurl:require("../assets/img/phb1.jpg"),
        //   number: "1960.0",
        //   listjson: [
        //     {
        //       name: "葛东琪",
        //       song: "悬溺"
        //     },
        //     {
        //       name: "易烊千玺",
        //       song: "I Adore You"
        //     },
        //     {
        //       name: "永彬Ryan.B/李浩轩",
        //       song: "那什么"
        //     }
        //   ]
        // },
        // {
        //   id: 2,
        //   title: "热歌榜",
        //   imgurl:require("../assets/img/phb2.jpg"),
        //   number: "1980.0",
        //   listjson: [
        //     {
        //       name: "宝石Gem/陈伟霆",
        //       song: "野狼Disco（feat.陈伟霆）"
        //     },
        //     {
        //       name: "en",
        //       song: "嚣张"
        //     },
        //     {
        //       name: "周杰伦",
        //       song: "说好不哭（with 五月天阿信）"
        //     }
        //   ]
        // },
        // {
        //   id: 3,
        //   title: "新歌榜",
        //   imgurl: require("../assets/img/phb3.jpg"),
        //   number: "194.0",
        //   listjson: [
        //     {
        //       name: "宝石Gem/陈伟霆",
        //       song: "野狼Disco（feat.陈伟霆）"
        //     },
        //     {
        //       name: "葛东琪",
        //       song: "悬溺"
        //     },
        //     {
        //       name: "英雄联盟",
        //       song: "涅槃 (Phoenix)"
        //     }
        //   ]
        // },
        // {
        //   id: 4,
        //   title: "飙升榜",
        //   imgurl: require("../assets/img/phb4.jpg"),
        //   number: "970.0",
        //   listjson: [
        //     {
        //       name: "杨顺高/凯小晴",
        //       song: "不爱我就别伤害我"
        //     },
        //     {
        //       name: "(??)??? ((女)孩子们)",
        //       song: "LION"
        //     },
        //     {
        //       name: "宝石Gem/陈伟霆",
        //       song: "野狼Disco（feat.陈伟霆）"
        //     }
        //   ]
        // },
        // {
        //   id: 5,
        //   title: "内地榜",
        //   imgurl:require("../assets/img/phb5.jpg") ,
        //   number: "413.3",
        //   listjson: [
        //     {
        //       name: "宝石Gem/陈伟霆",
        //       song: "野狼Disco（feat.陈伟霆）"
        //     },
        //     {
        //       name: "易烊千玺",
        //       song: "I Adore You"
        //     },
        //     {
        //       name: "许嵩",
        //       song: "雨幕"
        //     }
        //   ]
        // },
        // {
        //   id: 6,
        //   title: "流行指数榜",
        //   imgurl: require("../assets/img/phb6.jpg"),
        //   number: "1960.0",
        //   listjson: [
        //     {
        //       name: "葛东琪",
        //       song: "悬溺"
        //     },
        //     {
        //       name: "I Adore You",
        //       song: "易烊千玺"
        //     },
        //     {
        //       name: "那什么",
        //       song: "永彬Ryan.B/李浩轩"
        //     }
        //   ]
        // },
        // {
        //   id: 7,
        //   title: "流行指数榜",
        //   imgurl: require("../assets/img/phb7.jpg"),
        //   number: "1960.0",
        //   listjson: [
        //     {
        //       name: "葛东琪",
        //       song: "悬溺"
        //     },
        //     {
        //       name: "I Adore You",
        //       song: "易烊千玺"
        //     },
        //     {
        //       name: "那什么",
        //       song: "永彬Ryan.B/李浩轩"
        //     }
        //   ]
        // }
      ]
    };
  },
  mounted(){
    this.$http({
      url:api.toplist
    })
    .then(res=>{
      console.log(res)
      this.musicList = res.data.list
    })
    .catch(err=>{

    })
  }
  
};
</script>
<style lang="" scoped>
/*排行榜*/
.mList {
  background: #fff;
  padding: 0.2rem 0.2rem 1.3rem;
}
.mList ul li {
  display: flex;
  margin-bottom: 0.2rem;
}
.mList ul li .mListImg {
  position: relative;
}
.mList ul li .mListImg img {
  width: 2rem;
  height: 2rem;
}
.mList ul li .mListImg span {
  position: absolute;
  bottom: 0.2rem;
  left: 0.14rem;
  display: block;
  float: left;
  margin-right: 0.06rem;
  color: #fff;
  opacity: .6;
}
.mList ul li .mListImg span i {
  z-index: 999;
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  background: url(../assets/img/erji.png) no-repeat 0 -1rem;
  background-size: 0.48rem 1.2rem;
}
.mList ul li .mListCon {
  margin: 0.1rem 0.2rem 0.1rem 0.3rem;
}
.mList ul li .mListCon h3 {
  font-size: 0.32rem;
  color: #000;
  margin-bottom: 0.12rem;
}
.mList ul li .mListCon p {
  width: 4.6rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.28rem;
  line-height: 0.46rem;
  color: rgba(0, 0, 0, 0.5);
}
.mList ul li .mListCon p span {
  color: #000;
  margin-left: 0.16rem;
  margin-right: 0.1rem;
}
</style>