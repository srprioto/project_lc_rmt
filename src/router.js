import { createWebHistory, createRouter } from 'vue-router';
const history = createWebHistory();

import Home from '@/cedi/pages/Home';

// login
import Login from '@/pages/Login';

// seleccionar rol
import SeleccionarRol from '@/pages/SeleccionarRol';

// en construccion
import EnConstruccion from '@/pages/EnConstruccion';

// empresas
import Empresas from '@/cedi/pages/Empresas';
import MostrarEmpresa from '@/cedi/components/empresa/MostrarEmpresa';

// contratos
import Contratos from '@/cedi/pages/Contratos';
import MostrarContrato from '@/cedi/components/contratos/MostrarContrato';

// tikets
import Tickets from '@/cedi/pages/Tickets'

// Roles
import Roles from '@/cedi/pages/Roles';
import MostrarRol from '@/cedi/components/roles/MostrarRol';

// empleados
import Empleados from '@/cedi/pages/Empleados';
import MostrarEmpleado from '@/cedi/components/empleados/MostrarEmpleado';

// vehiculos
import Vehiculos from '@/cedi/pages/Vehiculos';
import MostrarVehiculo from '@/cedi/components/vehiculos/MostrarVehiculo';

// facturas
import Facturacion from '@/cedi/pages/Facturacion';
import MostrarFactura from '@/cedi/components/facturacion/MostrarFactura';

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