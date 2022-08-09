<template>
  <transition 
    name="toApp"
    appear
  >
    <div v-show="toAppStatus" class="toApp">
      <h1 :class="{'animate__headShake':contentAniStatus,'paused':paused}" class="animate__animated">I am toApp!</h1>
    </div>
  </transition>
</template>

<script>
  export default {
    name:'toApp',
    data(){
      return{
        contentAniStatus:false
      }
    },
    computed:{
      toAppStatus(){
        return this.$store.state.toAppStatus;
      },
      paused(){
        return this.$store.state.toAppPaused;
      },
      run(){
        return this.$store.state.toAppRun;
      }
    },
    methods:{

    }
  }
</script>

<style lang="less">
  .toApp{
    background-color: #fa8c16;
    color: #fff7e6;
    font-size: 20px;
    width: 100vw;
    height: 25vh;
    position: fixed;
    bottom: 0;
    overflow: hidden;
    padding:20px;
    border-radius:15px 20px 0 0;
    .toApp_animate_headShake{
      animation: headShake 1s;
    }
  }
  .toApp-enter,.toApp-leave-to{
    transform: translateY(100%);
  }
  .toApp-leave,.toApp-enter-to{
    transform: translateY(0);
  }
  .toApp-enter-active,.toApp-leave-active{
    transition: transform .5s linear;
  }
  
</style>