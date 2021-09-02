import { createWebHistory, createRouter } from 'vue-router';
const history = createWebHistory();

import Home from '@/pages/Home';
import Empleados from '@/pages/Empleados';

// empresas
import Empresas from '@/pages/Empresas';
import MostrarEmpresa from '@/components/empresa/MostrarEmpresa';

// contratos
import Contratos from '@/pages/Contratos';
import MostrarContrato from '@/components/contratos/MostrarContrato';


// tikets
import Tikets from '@/pages/Tikets'



// sin terminar de configurar

import Roles from '@/pages/Roles';
import Error from '@/pages/Error';
import Paquetes from '@/pages/Paquetes';
import Rutas from '@/pages/Rutas';
import Repartidores from '@/pages/Repartidores';




export default createRouter({
    history,
    routes: [
        {
            path: "/",
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
            path: "/tikets",
            name: "tikets",
            component: Tikets
        },
        // {
        //     path: "/paquetes",
        //     name: "paquetes",
        //     component: Paquetes
        // },






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