<template>
  <div class="content">
    <div class="logo">
        <img src="../assets/logo.png" alt="查题吧">
    </div>
    <div class="search">
      <input autocomplete="off" v-model="queryText" @keyup.enter="queryQues()" class="search-input" placeholder="在 16,952,858 道题目中搜索..." type="text">
      <div class="search-btn" @click="queryQues()">
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="#aeaeae" d="M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z" />
        </svg>
      </div>
    </div>
    <button @click="hideToApp()">hide toApp</button>
    <!-- <div class="hotlist">
        <div class="hotlist-title">
            <div class="hotlist-title-left">
                <span class="name">热门试题</span>
                <div class="ques-num">
                    <span>2647</span>
                    万道试题
                </div>
            </div>
            <div class="hotlist-title-right">
                <ul class="tablist">
                    <li class="tab-active">
                        学历考试
                    </li>
                    <li>网课答案</li>
                    <li>课后习题答案</li>
                    <li>继续教育</li>
                    <li>考试试题</li>
                    <li>竞赛试题</li>
                    <li>继续教育考试</li>
                </ul>
                <a href="">
                    <span>更多></span>
                </a>
            </div>
        </div>
        <div class="hotlist-content">
            <div class="hotlist-content-left">
                <ul>
                    <li>
                        <ul>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                宋元“讲史”是历史演义小说的雏形。
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                现代科学表明，思维运动也是一种物质运动。
                            </li>
                            <li>
                                江南地区家蝇的季节高峰为每年8月。
                            </li>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                宋元“讲史”是历史演义小说的雏形。
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                现代科学表明，思维运动也是一种物质运动。
                            </li>
                            <li>
                                江南地区家蝇的季节高峰为每年8月。
                            </li>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <ul>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                宋元“讲史”是历史演义小说的雏形。
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                现代科学表明，思维运动也是一种物质运动。
                            </li>
                            <li>
                                江南地区家蝇的季节高峰为每年8月。
                            </li>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                宋元“讲史”是历史演义小说的雏形。
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                            <li>
                                现代科学表明，思维运动也是一种物质运动。
                            </li>
                            <li>
                                江南地区家蝇的季节高峰为每年8月。
                            </li>
                            <li>
                                阿司匹林片规格为O.39，含阿司匹林(M=180.2)应为标示量的95％，l05％，现用氢化钠滴定液(0.1mol／L)滴定本品一片，应消耗滴定液体积为（） 1
                            </li>
                            <li>
                                初次侵染是指越冬的病原物对林木进行的第一轮侵染
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="hotlist-content-right">
                <myBanner />
                <div class="onlinenum">
                    <div class="onlinenum-view">
                        <span class="onlinenum-num">52080</span>
                        <span class="onlinenum-text">在线搜题人数</span>
                    </div>
                    <div class="onlinenum-view">
                        <span class="onlinenum-quesnum">52080</span>
                        <span class="onlinenum-text">在线人数</span>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
  </div>
</template>

<script >
  export default {
    name:'myHome',
    data(){
      return{
        queryText:''
      }
    },
    methods:{
      queryQues(){
        this.$router.push({
          path:'/search',
          query:{
            ques:this.queryText
          }
        })
      },
      hideToApp(){
        this.$store.state.toAppStatus = !this.$store.state.toAppStatus;
      }
    }
  }
</script>

<style lang="less" scoped>
  /* logo */
  .logo {
    margin: 0 auto;
    width:fit-content;
    img{
      width: 300rem;
    }
  }
  /* 搜索框 */
  .content {
    width: 100%;
    padding-top: 100rem;
  }
  .search {
    margin: 0 auto;
    width: 95%;
    display: flex;
    margin-top: 20rem;
    padding: 10rem;
    height: 90rem;
    border-radius: 20rem;
    border: 2rem solid #aeaeae;
    &:hover {
      border-color: #3c7cfc;
      box-shadow: 0rem 5rem 12rem 0rem rgba(0, 0, 0, 0.16);
    }
    input {
      line-height: 18rem;
      font-size: 28rem;
      font-weight: 400;
      height: 100%;
      width: 90%;
      border: none;
      outline: none;
      &::placeholder {
        color: #aeaeae;
      }
    }
    .search-btn {
      padding: 10rem;
      width: 10%;
    }
  }











  /* 热门试题 */
  .hotlist {
    margin: 0 auto;
    width: 1200rem;
  }
  .hotlist-title {
    width: 1200rem;
    height: 55rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1rem solid #eeeeee;
  }

  .hotlist-title-left {
    display: flex;
    align-items: center;
    min-width: 350rem;
  }
  .hotlist-title-left .name {
    font-size: 24rem;
  }
  .hotlist-title-left .ques-num {
    padding: 0 10rem;
    font-size: 14rem;
    line-height: 33rem;
    position: relative;
    margin-left: 18rem;
    border: 2rem solid #42c090;
    border-radius: 5rem;
    height: 35rem;
  }
  .ques-num > span {
    color: #42c090;
    font-weight: bold;
  }
  .ques-num::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: -10rem;
    top: 5rem;
    border-right: 10rem solid #42c090;
    border-top: 8rem solid transparent;
    border-bottom: 8rem solid transparent;
  }

  .ques-num::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: -6rem;
    top: 7rem;
    border-right: 7rem solid #fff;
    border-top: 6rem solid transparent;
    border-bottom: 6rem solid transparent;
  }
  /* 热门问题 */
  .hotlist-title-right {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 850rem;
  }
  .hotlist-title-right .tablist {
    font-size: 16rem;
    display: inline-flex;
  }
  .tablist .tab-active {
    border-radius: 1rem;
    border-bottom: 3rem solid #3c7cfc;
  }
  .tablist li {
    border-bottom: 3rem solid #fff;
    line-height: 51rem;
    margin-right: 30rem;
  }
  .hotlist-title-right > a > span {
    color: #aeaeae;
    font-size: 15rem;
  }
  /* 热门试题 题目列表 */
  .hotlist-content {
    margin-top: 20rem;
    display: flex;
  }
  .hotlist-content-left {
    height: fit-content;
    display: flex;
    overflow: hidden;
    border-radius: 5rem;
    width: 870rem;
    box-shadow: 0rem 5rem 12rem 0rem rgba(0, 0, 0, 0.16);
  }
  .hotlist-content-left > ul {
    padding: 15rem 0rem;
    position: relative;
    top: 0;
    flex-shrink: 0;
    width: 870rem;
    display: flex;
  }
  .hotlist-content-left > ul > li {
    margin: 0 10rem;
    width: 420rem;
  }
  .hotlist-content-left > ul > li li {
    line-height: 36rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15rem;
  }
  .hotlist-content-left > ul > li li span {
    color: #aeaeae;
  }
  /* 侧边广告栏 */
  .hotlist-content-right {
    border-radius: 5rem;
    margin-left: 30rem;
    width: 300rem;
  }
  .hotlist-content-right .onlinenum {
    margin-top: 20rem;
    border-radius: 10rem;
    box-shadow: 0rem 5rem 12rem 0rem rgba(0, 0, 0, 0.16);
    height: 120rem;
    padding: 24rem 32rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .onlinenum .onlinenum-view {
    padding: 0 10rem;
    text-align: center;
  }
  .onlinenum-num {
    font-size: 20rem;
    display: block;
    font-weight: bold;
    color: #3c7cfc;
  }
  .onlinenum-text {
    display: block;
    margin-top: 15rem;
    font-size: 14rem;
    color: #666666;
  }
  .onlinenum-quesnum {
    font-size: 20rem;
    display: block;
    font-weight: bold;
    color: #42c090;
  }
</style>