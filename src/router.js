import { createWebHistory, createRouter } from 'vue-router';
const history = createWebHistory();

import Home from '@/pages/Home';
import Empleados from '@/pages/Empleados';


import Empresas from '@/pages/Empresas';
import MostrarEmpresa from '@/components/empresa/MostrarEmpresa';



import Roles from '@/pages/Roles';
import Error from '@/pages/Error';
import Paquetes from '@/pages/Paquetes';
import Rutas from '@/pages/Rutas';
import Contratos from '@/pages/Contratos';
import Repartidores from '@/pages/Repartidores';

export default createRouter({
    history,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/empresas",
            name: "empresas",
            component: Empresas
        },
        {
            path: "/empresas/:value:url/ok",
            name: "empresas-show",
            component: MostrarEmpresa
        },



        {
            path: "/empleados",
            name: "empleados",
            component: Empleados
        },
        {
            path: "/paquetes",
            name: "paquetes",
            component: Paquetes
        },
        {
            path: "/rutas",
            name: "rutas",
            component: Rutas
        },
        {
            path: "/contratos",
            name: "contratos",
            component: Contratos
        },
        {
            path: "/repartidores",
            name: "repartidores",
            component: Repartidores
        },
        {
            path: "/roles",
            name: "roles",
            component: Roles
        },
        {
            path: "/:catchAll(.*)", 
            name: "Error",
            component: Error
        },
    ]
});