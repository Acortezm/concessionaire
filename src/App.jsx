
import Admin from './pages/Admin/Admin';
import AddProduct from './pages/Admin/AddProduct';
import GestionUser from './pages/Admin/GestionUser';
import Productos from './pages/Admin/Productos';
import AddVentaAdmin from './pages/Admin/AddVentaAdmin';
import VentasAdmin from './pages/Admin/VentasAdmin';
import AddUser from './pages/Admin/AddUser';


import Vendedor from './pages/Vendedor/Vendedor';
import AddVenta from './pages/Vendedor/AddVenta';
import Ventas from './pages/Vendedor/Ventas';

import Login from './pages/Login/Login';

import React from "react";
import VendedorLayout from './layouts/VendedorLayout';
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path = {['/admin', '/admin/addproduct', '/admin/gestionUser', '/admin/porductos','/admin/addVentaAdmin', '/admin/ventasAdmin', '/admin/addUser']}>
          <AdminLayout>
            <Switch>
              <Route path = '/admin/addproduct'><AddProduct/></Route>
              <Route path = '/admin/gestionUser'><GestionUser/></Route>
              <Route path = '/admin/productos'><Productos/></Route>
              <Route path = '/admin/addVentaAdmin'> <AddVentaAdmin/> </Route>
              <Route path = '/admin/ventasAdmin'> <VentasAdmin/> </Route>
              <Route path = '/admin/addUser'> <AddUser/> </Route>
              <Route path = '/vendedor'><Vendedor/></Route>
              <Route path = '/admin'><Admin/></Route>
            </Switch>
  
          </AdminLayout>
        </Route>

        <Route path = {['/vendedor', '/admin/addVenta', '/admin/ventas']}>
          <VendedorLayout>
            <Switch>
              <Route path = '/vendedor/addVenta'> <AddVenta/> </Route>
              <Route path = '/vendedor/ventas'> <Ventas/> </Route>
              <Route path = '/vendedor'><Vendedor/></Route>
              
            </Switch>
  
          </VendedorLayout>
        </Route>
  
  
        <Route path = {'/'}>
            <AuthLayout>
              <Switch>
  
                <Route path = '/'>
                  <Login></Login>
                </Route>
                                              
              </Switch>
            </AuthLayout>
        </Route>
  
    
      </Switch>
    </Router>
    </div>

  );
}

export default App;
