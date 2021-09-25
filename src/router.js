import { createWebHistory, createRouter } from 'vue-router';
const history = createWebHistory();

import Home from '@/pages/Home';

// login
import Login from '@/pages/Login';

// seleccionar rol
import SeleccionarRol from '@/pages/SeleccionarRol';

// en construccion
import EnConstruccion from '@/pages/EnConstruccion';

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

// vehiculos
import Vehiculos from '@/pages/Vehiculos';
import MostrarVehiculo from '@/components/vehiculos/MostrarVehiculo';

// facturas
import Facturacion from '@/pages/Facturacion';
import MostrarFactura from '@/components/facturacion/MostrarFactura';

// sin terminar de configurar

import Error from '@/pages/Error';

// import Paquetes from '@/pages/Paquetes';
// import Rutas from '@/pages/Rutas';
// import Repartidores from '@/pages/Repartidores';




export default createRouter({
    history,
    routes: [

        {   // --- LOGIN ---
            path: "/",
            name: "login",
            component: Login
        },  


        {   // --- SELECCIONAR ROLES ---
            path: "/seleccionar-rol",
            name: "select-rol",
            component: SeleccionarRol
        },  


        {   // --- HOME ---
            path: "/dashboard",
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


        
        {   // --- VEHICULOS ---
            path: "/vehiculos",
            name: "vehiculos",
            component: Vehiculos
        },
        {
            path: "/vehiculos/:value:url/ok",
            name: "vehiculos-show",
            component: MostrarVehiculo
        },


        {   // --- FACTURACION ---
            path: "/facturacion",
            name: "facturacion",
            component: Facturacion
        },
        {
            path: "/facturacion/:value:url/ok",
            name: "facturacion-show",
            component: MostrarFactura
        },






        {   // --- construccion ---
            path: "/construccion",
            name: "en-construccion",
            component: EnConstruccion
        },


        {   // --- ERROR ---
            path: "/:catchAll(.*)", 
            name: "Error",
            component: Error
        },



        // {   
        //     path: "/repartidores",
        //     name: "repartidores",
        //     component: Repartidores
        // },

        // {
        //     path: "/paquetes",
        //     name: "paquetes",
        //     component: Paquetes
        // },
        // {
        //     path: "/rutas",
        //     name: "rutas",
        //     component: Rutas
        // },

        
        // {
        //     path: "/roles",
        //     name: "roles",
        //     component: Roles
        // },



    ]
});