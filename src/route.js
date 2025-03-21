import Home from './pages/Home.vue'
import CreateEmployee from "./pages/create-employee/CreateEmployee.vue"
import Attendance from './pages/attendance-page/Attendance.vue'
import Report from './pages/report-page/Report.vue'
import EmployeeType from "./pages/employee-type-page/EmployeeType.vue";

import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        component: Home,
        path: "/",
        name: "Home",
    },
    {
        component: CreateEmployee,
        path: "/create-employee",
        name: "Create New Employee",
    },
    {
        component: Attendance,
        path: "/attendance",
        name: "Attendance",

    },
    {
        component: Report,
        path: "/report",
        name: "Report",
    },
    {
        component: EmployeeType,
        path: "/employee-type",
        name: "Employee Type",
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;