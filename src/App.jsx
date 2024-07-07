import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Sidenav from './Component/Sidenav/Sidenav';
import Dashboard from './Component/Dashboard/Dashboard';
import Usuarios from './Component/Usuarios/Usuarios';
import Permisos from './Component/Permisos/Permisos';
import MisVentas from './Component/MisVentas/Misventas';
import Cuentabanco from './Component/CuentasBancos/Cuentabanco';
import Tickets from './Component/Tickets/Tickets';
import Configuracion from './Component/Configuracion/Configuracion';
import Reportes from './Component/Reportes/Reportes';
import { AuthProvider, useAuth } from './Component/AuthContext/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
};

const Main = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
      <Route path="/home" element={<ProtectedLayout><Home /></ProtectedLayout>} />
      <Route path="/dashboard" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
      <Route path="/usuarios" element={<ProtectedLayout><Usuarios /></ProtectedLayout>} />
      <Route path="/permisos" element={<ProtectedLayout><Permisos /></ProtectedLayout>} />
      <Route path="/mis-ventas" element={<ProtectedLayout><MisVentas /></ProtectedLayout>} />
      <Route path="/cuentas-banco" element={<ProtectedLayout><Cuentabanco /></ProtectedLayout>} />
      <Route path="/tickets" element={<ProtectedLayout><Tickets /></ProtectedLayout>} />
      <Route path="/reportes" element={<ProtectedLayout><Reportes /></ProtectedLayout>} />
      <Route path="/configuracion" element={<ProtectedLayout><Configuracion /></ProtectedLayout>} />
      
      {/* Agrega más rutas aquí según sea necesario */}
    </Routes>
  );
};

const ProtectedLayout = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <>
    <div className="d-flex">
      <Sidenav />
      <div className="content p-4">
        {children}
      </div>
    </div>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default App;
