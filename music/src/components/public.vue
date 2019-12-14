<template>
  <div id="app">
    <!-- 头部 -->
    <div class="head">
      <a href>
        <img src="../assets/img/logo.svg" alt />
      </a>
      <a href class="down">下载APP</a>
    </div>
    <!-- 选项卡 -->
        <div class="tab">
            <router-link to='/home' activeClass="tabColor">推荐</router-link>
            <router-link to='/list' activeClass="tabColor">排行榜</router-link>
            <router-link to='/serch' activeClass="tabColor">搜索</router-link>
        </div>
    <router-view />
    <!-- 底部悬浮 -->
        <div class="suspension">
            <a href="">安装QQ音乐 发现更多精彩</a>
        </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
body {
  background: #f4f4f4;
}
/*头部*/
.head {
  position: fixed;
  background: #fff;
  width: 7.1rem;
  height: 1.6rem;
  display: flex;
  padding: 0 0.2rem;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.02);
  justify-content: space-between;
  z-index: 9999;
}
.head img {
  width: 2.52rem;
  height: 0.7rem;
}
.head .down {
  display: block;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.2rem;
  text-align: center;
  font-size: 0.28rem;
  color: #000;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
}
/*选项卡*/
.tab {
  padding-top: 1.6rem;
  background: #fff;
  display: flex;
}
.tab a {
  display: block;
  width: 7.5rem;
  height: 0.8rem;
  line-height: 0.8rem;
  overflow: hidden;
  text-align: center;
  font-size: 0.32rem;
  color: rgba(0, 0, 0, 0.6);
}
.tab .tabColor {
  color: #31c27c ;
  border-bottom: 2px solid #31c27c ;
}
/*底部 悬浮 */
.suspension {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 0.3rem 0;
  background: rgba(255, 255, 255, 0.9);
  width: 7.5rem;
}
.suspension a {
  margin: auto;
  display: block;
  padding: 0 0.3rem;
  border-radius: 0.9rem;
  background-color: #30c27c;
  color: #fff;
  height: 0.66rem;
  line-height: 0.66rem;
  font-size: 0.28rem;
}
</style>
