<template>
  <div class="header">
    <div class="nav-bar">
      <div class="logo">
          <img @click="goHome()" src="../assets/logo.png" alt="查题吧">
      </div>
      <div class="nav">
        <router-link
          v-for="(menu,index) in menuList"
          :key="index"
          :to="menu.link"
          >{{menu.name}}
        </router-link>
      </div>
      <div class="loginbar">
          <div v-if="!$store.state.isLogin" class="loginbar-warpper">
              <div @click="login()" class="loginbar-btn">登录</div>
              <div class="loginbar-btn regist">注册</div>
          </div>
          <div v-else class="loginbar-warpper">
            <div @click="quit()" class="loginbar-btn">退出</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'myHeader',
    data(){
      return{
        menuList:[
          {name:'题库分类',link:'/subject'},
          {name:'网课答案',link:'/course'},
        ]
      }
    },
    mounted(){
      console.log(this.$store.state);
    },
    methods:{
      login(){
        this.$store.dispatch('login','17696851454');
      },
      quit(){
        this.$store.commit('QUIT','17696851454');
      },
      goHome(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>

<style lang="less">
  /* Header */
  .header {
    height: 90rem;
    width: 100%;
    box-shadow: 0rem 5rem 12rem 0rem rgba(0, 0, 0, 0.16);
  }
  .nav-bar {
    position: relative;
    line-height: 90rem;
    margin: 0 auto;
    display: flex;
    .logo {
      margin-right: 20rem;
      img {
        height: 60rem;
        cursor: pointer;
      }
    }
  }
  .nav {
    font-size: 30rem;
    font-weight: 450;
    display: inline-flex;
    a{
      display: block;
      margin-right: 20rem;
      &.active,&:hover{
        color: #3c7cfc;
      }
    }
  }
  /* Header 登录 */
  .loginbar {
    font-size: 22rem;
    height: 100%;
    position: absolute;
    right: 0;
  }
  .loginbar-warpper {
    height: 100%;
    user-select: none;
    display: flex;
    align-items: center;
  }
  .loginbar-btn {
    cursor: pointer;
    text-align: center;
    border-radius: 20rem;
    line-height: 47rem;
    width: 100rem;
    height: 50rem;
    margin-right: 20rem;
    border: 3rem solid #3c7cfc;
    color: #3c7cfc;
    &:hover {
      box-shadow: 0rem 5rem 12rem 0rem rgba(0, 0, 0, 0.16);
    }
  }
  .regist {
    background-color: #3c7cfc;
    color: white;
  }
</style>