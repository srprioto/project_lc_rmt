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



// USER

import UserHome from '@/usuarios/pages/Home';

import UserTickets from '@/usuarios/pages/Tickets';
// import UserMostrarTicket from '@/cedi/usuarios/roles/MostrarTicket';

import UserContratos from '@/usuarios/pages/Contratos';



const token = "?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWQiOjUsInJvbGUiOjIsImlhdCI6MTYzMzIwOTgzMSwiZXhwIjoxNjMzMjExMjcxfQ.VwDtOQwWBkjqXYKogwNFdCVh845leV3ZUGr9Hz5R94g";


export default createRouter({
    history,
    routes: [

        {   // --- LOGIN ---
            path: "/",
            name: "login",
            component: Login
        },  


        {   // --- SELECCIONAR ROLES ---
            path: `/seleccionar-rol`,
            name: "select-rol",
            component: SeleccionarRol
        },  

        // ***************
        // **** CEDI ****
        // ***************

        {   // --- HOME ---
            path: "/cedi/dashboard",
            name: "home",
            component: Home
        },  // ---  ---


        {   // --- EMPRESAS ---
            path: "/cedi/empresas",
            name: "empresas",
            component: Empresas
        },
        {
            path: "/cedi/empresas/:value:url/ok",
            name: "empresas-show",
            component: MostrarEmpresa
        },
        {
            path: "/cedi/empresas/:owner/crear",
            name: "crear-empresa",
            component: Empresas
        },
        
        
        {   // --- CONTRATOS ---
            path: "/cedi/contratos",
            name: "contratos",
            component: Contratos
        },
        {
            path: "/cedi/contratos/:value:url/ok",
            name: "contratos-show",
            component: MostrarContrato
        },


        {   // --- TIKETS ---
            path: "/cedi/tickets",
            name: "tickets",
            component: Tickets
        },


        {   // --- ROLES ---
            path: "/cedi/roles",
            name: "roles",
            component: Roles
        },
        {
            path: "/cedi/roles/:value:url/ok",
            name: "roles-show",
            component: MostrarRol
        },



        {   // --- EMPLEADOS ---
            path: "/cedi/empleados",
            name: "empleados",
            component: Empleados
        },
        {
            path: "/cedi/empleados/:value:url/ok",
            name: "empleados-show",
            component: MostrarEmpleado
        },

        
        
        {   // --- VEHICULOS ---
            path: "/cedi/vehiculos",
            name: "vehiculos",
            component: Vehiculos
        },
        {
            path: "/cedi/vehiculos/:value:url/ok",
            name: "vehiculos-show",
            component: MostrarVehiculo
        },



        {   // --- FACTURACION ---
            path: "/cedi/facturacion",
            name: "facturacion",
            component: Facturacion
        },
        {
            path: "/cedi/facturacion/:value:url/ok",
            name: "facturacion-show",
            component: MostrarFactura
        },



        // ***************
        // **** USER ****
        // ***************

        {   // --- HOME ---
            path: "/user/dashboard",
            name: "user-home",
            component: UserHome
        },  // ---  ---


        {   // --- TICKETS ---
            path: "/user/tickets",
            name: "user-tickets",
            component: UserTickets
        },
        // {
        //     path: "/user/tickets/:value:url/ok",
        //     name: "user-tickets-show",
        //     component: MostrarVehiculo
        // },


        {   // --- CONTRATOS ---
            path: "/user/contratos",
            name: "user-contratos",
            component: UserContratos
        },
        // {
        //     path: "/cedi/contratos/:value:url/ok",
        //     name: "user-contratos-show",
        //     component: MostrarContrato
        // },



        // ***************
        // **** OTROS ****
        // ***************


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