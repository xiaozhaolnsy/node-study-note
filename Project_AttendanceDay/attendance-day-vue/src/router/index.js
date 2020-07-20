import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Attendance from '@/components/Attendance'
import BasicInfo from '@/components/BasicInfo'
import Statistics from '@/components/Statistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: Attendance
    },
    {
      path: '/basicinfo',
      name: 'basicinfo',
      component: BasicInfo
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    }
  ]
})
