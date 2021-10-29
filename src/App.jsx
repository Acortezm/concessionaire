import AdminLogin from './pages/Login/AdminLogin';
import Admin from './pages/Admin/Admin';
import AddProduct from './pages/Admin/AddProduct';
import GestionUser from './pages/Admin/GestionUser';
import Porductos from './pages/Admin/Porductos';
import SellerLogin from './pages/Login/SellerLogin';
import Vendedor from './pages/Vendedor/Vendedor';
import EditVenta from './pages/Vendedor/EditVenta';
import AddVenta from './pages/Vendedor/AddVenta';
import Ventas from './pages/Vendedor/Ventas';

import React from "react";
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';
import SellerLayout from './layouts/SellerLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
  <div>
    <Router>
      <Switch>
      /* Hacer un Route por cada layout*/
        <Route path = {['/admin', '/admin/addproduct', '/admin/gestionUser', '/admin/porductos','/admin/addVenta', '/admin/editVenta', '/admin/venta']}>
          <AdminLayout>
            <Switch>
              <Route path = '/admin'><Admin/></Route>
              <Route path = '/addproduct'><AddProduct/></Route>
              <Route path = '/admin/gestionUser'><GestionUser/></Route>
              <Route path = '/admin/porductos'><Porductos/></Route>
              <Route path = '/admin/addVenta'> <AddVenta/> </Route>
              <Route path = '/admin/editVenta'> <EditVenta/></Route>
              <Route path = '/admin/venta'> <Ventas/> </Route>
            </Switch>

          </AdminLayout>
        </Route>

        <Route path = {['/vendedor','/vendedor/addVenta', '/vendedor/editVenta', '/vendedor/venta']}>
            <SellerLayout>
              <Switch>
                <Route path = '/vendedor'> <Vendedor/></Route>
                <Route path = '/vendedor/addVenta'> <AddVenta/> </Route>
                <Route path = '/vendedor/editVenta'> <EditVenta/></Route>
                <Route path = '/vendedor/venta'> <Ventas/> </Route>
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
