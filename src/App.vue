<template>
  <div>
    <myHeader />
    <router-view class="container-wrapper"></router-view>
    <myFooter />
    <toApp />
  </div>
</template>

<script>
import myHeader from './components/Header'
import myFooter from './components/Footer'
import toApp from './components/toApp'

  export default {
    name:'app',
    components:{
      myHeader,
      myFooter,
      toApp
    }
  }
</script>

<style>
  .container-wrapper{
    min-height: calc(100vh - 160rem);
  }
</style>