import Admin from './pages/Admin/Admin';
import Vehiculos from './pages/Admin/Vehiculos';
import Clientes from './pages/Admin/Clientes';
import Index from './pages/Index';
import Login from './pages/Login';
import Registro from './pages/Registro';
import React from "react";
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateLayout from './layouts/PrivateLayout';

function App() {
  return (
  <div>
    <Router>
      <Switch>
      /* Hacer un Route por cada layout*/
        <Route path = {['/admin', '/admin/vehiculos/', '/admin/clientes']}>
          <PrivateLayout>
            <Switch>
              <Route path = '/admin'>
                <Admin/>
              </Route>
              <Route path = '/admin/vehiculos'>
                <Vehiculos/>
              </Route>
              <Route path = '/admin/clientes'>
                <Clientes/>
              </Route>
            </Switch>

          </PrivateLayout>
        </Route>

        <Route path = {['/login', '/registro']}>
            <AuthLayout>
              <Switch>
                <Route path = '/login'>
                  <Login></Login>
                </Route>
                
                <Route path = '/registro'>
                  <Registro></Registro>
                </Route>                
              </Switch>
            </AuthLayout>
        </Route>

        <Route path = {['/']}>
          <PublicLayout>
            <Switch>
              <Route path = '/'>
                <Index></Index>
              </Route>
            </Switch>

          </PublicLayout>
        </Route> 
      </Switch>
    </Router>
    </div>);
}

export default App;
