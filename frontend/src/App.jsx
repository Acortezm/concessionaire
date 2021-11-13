import AdminLogin from './pages/Login/AdminLogin';
import Admin from './pages/Admin/Admin';
import AddProduct from './pages/Admin/AddProduct';
import GestionUser from './pages/Admin/GestionUser';
import Productos from './pages/Admin/Productos';
import AddVentaAdmin from './pages/Admin/AddVentaAdmin';
import VentasAdmin from './pages/Admin/VentasAdmin';
import AddUser from './pages/Admin/AddUser';

import SellerLogin from './pages/Login/SellerLogin';
import Vendedor from './pages/Vendedor/Vendedor';
import AddVenta from './pages/Vendedor/AddVenta';
import Ventas from './pages/Vendedor/Ventas';

import React from "react";
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import SellerLayout from './layouts/SellerLayout';
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
              <Route path = '/admin/GestionUser'><GestionUser/></Route>
              <Route path = '/admin/productos'><Productos/></Route>
              <Route path = '/admin/addVentaAdmin'> <AddVentaAdmin/> </Route>
              <Route path = '/admin/ventasAdmin'> <VentasAdmin/> </Route>
              <Route path = '/admin/addUser'> <AddUser/> </Route>
              <Route path = '/admin'><Admin/></Route>
            </Switch>

          </AdminLayout>
        </Route>

        <Route path = {['/vendedor','/vendedor/addVenta', '/vendedor/editVenta', '/vendedor/venta']}>
            <SellerLayout>
              <Switch>
                <Route path = '/vendedor/addVenta'> <AddVenta/> </Route>
                <Route path = '/vendedor/venta'> <Ventas/> </Route>
                <Route path = '/vendedor'> <Vendedor/></Route>
              </Switch>
              </SellerLayout>       
          </Route>

        <Route path = {['/', '/adminLogin']}>
            <AuthLayout>
              <Switch>

              <Route path = '/adminLogin'>
                  <AdminLogin></AdminLogin>
                </Route>

                <Route path = '/'>
                  <SellerLogin></SellerLogin>
                </Route>
                                              
              </Switch>
            </AuthLayout>
        </Route>

    
      </Switch>
    </Router>
    </div>);
}

export default App;
