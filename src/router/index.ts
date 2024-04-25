import AddCourseForm from '@/components/AddCourseForm.vue';
import CoursesManagement from '@/components/CoursesManagement.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/courses',
    name: 'cursos',
    component: CoursesManagement
  },
  {
    path: '/addCourse',
    name: 'add Course',
    component: AddCourseForm
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
