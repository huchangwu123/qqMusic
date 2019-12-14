//基础接口
let base = "http://localhost:3000"
//轮播接口
let banner = base+ "/banner"
//电台
let  personalized = base+"/personalized/djprogram"
//排行榜
let  toplist = base+"/toplist/detail"
//热搜
let  search = base+"/search/hot"
//关键字搜索
let  keywords = base+"/search?keywords="
//获取音乐、播放
let song = base+"/song/url"
export default{
    banner,
    personalized,
    toplist,
    search,
    keywords,
    song
}