import VueRouter from "vue-router"
import Vue from 'vue'
import myHome from '../pages/index'
import mySearch from '../pages/search/search'
import myCourse from '../pages/course/course'
import mySubject from '../pages/subject/subject'
import quesDetail from '../pages/quesDetail/quesDetail'

Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  linkExactActiveClass:'active',
  routes:[
    {
      path:'/',
      component:myHome
    },
    {
      path:'/search',
      component:mySearch,
      props({query}){
        return {
          ques:query.ques
        }
      }
    },
    {
      path:'/course',
      component:myCourse
    },
    {
      path:'/subject',
      component:mySubject
    },
    {
      name:'quesDetail',
      path:'/q/:id',
      component:quesDetail,
      props:true
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})