import { createWebHistory, createRouter } from 'vue-router';
const history = createWebHistory();

import Home from '@/pages/Home';

// login
import Login from '@/pages/Login';

// empresas
import Empresas from '@/pages/Empresas';
import MostrarEmpresa from '@/components/empresa/MostrarEmpresa';

// contratos
import Contratos from '@/pages/Contratos';
import MostrarContrato from '@/components/contratos/MostrarContrato';

// tikets
import Tickets from '@/pages/Tickets'

// Roles
import Roles from '@/pages/Roles';
import MostrarRol from '@/components/roles/MostrarRol';

// empleados
import Empleados from '@/pages/Empleados';
import MostrarEmpleado from '@/components/empleados/MostrarEmpleado';



// sin terminar de configurar


import Error from '@/pages/Error';
import Paquetes from '@/pages/Paquetes';
import Rutas from '@/pages/Rutas';
import Repartidores from '@/pages/Repartidores';




export default createRouter({
    history,
    routes: [

        {   // --- LOGIN ---
            path: "/",
            name: "login",
            component: Login
        },  

        {   // --- HOME ---
            path: "/home",
            name: "home",
            component: Home
        },  // ---  ---


        {   // --- EMPRESAS ---
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
            path: "/empresas/:owner/crear",
            name: "crear-empresa",
            component: Empresas
        },
        
        
        {   // --- CONTRATOS ---
            path: "/contratos",
            name: "contratos",
            component: Contratos
        },
        {
            path: "/contratos/:value:url/ok",
            name: "contratos-show",
            component: MostrarContrato
        },


        {   // --- TIKETS ---
            path: "/tickets",
            name: "tickets",
            component: Tickets
        },


        {   // --- ROLES ---
            path: "/roles",
            name: "roles",
            component: Roles
        },
        {
            path: "/roles/:value:url/ok",
            name: "roles-show",
            component: MostrarRol
        },



        {   // --- EMPLEADOS ---
            path: "/empleados",
            name: "empleados",
            component: Empleados
        },
        {
            path: "/empleados/:value:url/ok",
            name: "empleados-show",
            component: MostrarEmpleado
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