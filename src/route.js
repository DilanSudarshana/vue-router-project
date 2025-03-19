import Home from './pages/Home.vue'
import CreateEmployee from "./pages/create-employee/CreateEmployee.vue"
import Attendance from './pages/attendance-page/Attendance.vue'
import NotFound from './pages/not-found-page/NotFound.vue'

import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        component: Home,
        path: "/",
    },
    {
        component: CreateEmployee,
        path: "/create-employee",
    },
    {
        component: Attendance,
        path: "/attendance",
    },
    {
        path: '/: NotFound(.*)*',
        component: NotFound
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router