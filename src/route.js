import Home from './pages/Home.vue'
import CreateEmployee from "./pages/create-employee/CreateEmployee.vue"
import Attendance from './pages/attendance-page/Attendance.vue'
import Report from './pages/report-page/Report.vue'
import EmployeeType from "./pages/employee-type-page/EmployeeType.vue";
import UpdateEmployee from "./pages/update-employee-page/UpdateEmployee.vue";
import UpdateEmptype from "./pages/update-emptype-page/UpdateEmptype.vue";

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
        component: EmployeeType,
        path: "/employee-type",
        name: "Employee Category",
    },
    {
        component: UpdateEmployee,
        path: "/:id",
        name: "Update Employee",
    },
    {
        component: CreateEmployee,
        path: "/create-employee",
        name: "Employee",
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
        component: UpdateEmptype,
        path: "/employee-update/:id",
        name: "Update Employee Category",
    },


];
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;