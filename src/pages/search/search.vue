<template>
  <div>
    I am Search!{{ques}}
    <ul>
      <li @click="getAnswer(ques.id)" v-for="ques in quesList" :key="ques.id">{{ques.text}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'mySearch',
    props:['ques'],
    data(){
      return{
        quesList:[
          {id:'001',text:'1'},
          {id:'002',text:'2'},
          {id:'003',text:'3'},
          {id:'004',text:'4'}
        ]
      }
    },
    methods:{
      getAnswer(id){
        this.$router.push({
          name:'quesDetail',
          params:{id}
        })
      }
    }
  }
</script>

<style>

</style>