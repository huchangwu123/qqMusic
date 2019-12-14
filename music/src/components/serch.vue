<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <input type="text" placeholder="搜索歌曲、歌单、专辑" @click="search" v-model="val" @input="playList()" @blur="searchOver"/>
      <span></span>
      <!-- 取消 -->
      <div :class="isShow? 'cancelNone':'cancel'" @click="cancel">取消</div>
    </div>

    <!-- 播放 -->
    <!-- <audio :src="songUrl" controls></audio> -->
    <!-- 热门搜索 -->
    <div class="hot" v-show="isShow">
      <h3>热门搜索</h3>
      <span
        v-for="(con,i) in hotSearch"
        :key="i"
        :class="[i==0?'orange':'']"
        @click="playList(con.first)"
      >{{con.first}}</span>
    </div>
    <!-- 播放列表 -->
    <div class="searchList" v-show="!isShow">
      <ul>
        <li v-for="con in keySearch" :key="con.id" @click="gotoPlay(con.id)">
          <p>{{con.name}}</p>
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
      isShow: true,
      hotSearch: [],
      keySearch: [],
      songUrl:"",
      val:""
    };
  },
  methods: {
    search() {
      this.isShow = false;
    },
    cancel() {
      this.isShow = true;
    },
    playList(name) {
      console.log("input")
      this.isShow = false;
      this.$http({
        url: api.keywords,
        params: {
          keywords: name || this.val
        }
      })
        .then(res => {
          console.log(res,"playList");
          this.keySearch = res.data.result.songs;
        })
        .catch(err => {});
    },
    gotoPlay(id){
      this.isShow = false;
      this.$http({
        url: api.song,
        params: {
          id: id
        }
      })
        .then(res => {
          console.log(res,"2222222222")
          this.songUrl = res.data.data[0].url
        })
        .catch(err => {});
    },
    searchOver(){
      this.val = "";
    }
  },
  mounted() {
    this.$http({
      url: api.search
    })
      .then(res => {
        console.log(res);
        this.hotSearch = res.data.result.hots;
      })
      .catch(err => {});
  }
};
</script>
<style lang="" scoped>
body{
  background: #fff;
}
/*搜索框*/
.search {
  display: flex;
  background: #f4f4f4;
  padding: 0.2rem;
  position: relative;
}
.search input {
  border-radius: 3px;
  background: #fff;
  padding: 0.16rem 0.24rem 0.16rem 0.7rem;
  height: 0.4rem;
  line-height: 0.4rem;
  width: 100%;
  color: rgba(0, 0, 0, 0.8);
  border: none;
  -webkit-appearance: none;
  font-size: 0.28rem;
}
.search span {
  display: block;
  position: absolute;
  top: 0.38rem;
  left: 0.4rem;
  width: 0.36rem;
  height: 0.36rem;
  background: url(../assets/img/search.png) no-repeat;
  background-size: cover;
}
.search .cancel {
  display: block;
  padding-right: 0.2rem;
  padding-left: 0.2rem;
  font-size: 0.28rem;
  height: 0.72rem;
  line-height: 0.72rem;
  white-space: nowrap;
}
.search .cancelNone {
  display: none;
}
/*热门搜索*/
.hot {
  background: #fff;
  padding: 0.3rem 0.3rem 0.2rem 0.3rem;
}
.hot h3 {
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 0.16rem;
  font-size: 1.17em;
}
.hot span {
  display: inline-block;
  font-size: 0.28rem;
  padding: 0 0.2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 0.9rem;
  word-break: keep-all;
  margin-bottom: 0.2rem;
  margin-right: 0.28rem;
}
.hot .orange {
  color: #fc4524;
  border-color: #fc4524;
}
/* 搜索列表 */
.searchList ul {
  padding: 0.2rem;
}
.searchList ul li {
  margin-bottom: 0.2rem;
  padding: 0 0.2rem;
  font-size: 0.38rem;
}
.searchList ul li p{
  padding: 0.1rem 0;
  width: 6.7rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>