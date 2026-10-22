import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

import { AuthProvider } from './context/AuthContext';
import { EquipoProvider } from './context/EquipoContext';
import { UnidadProvider } from './context/UnidadContext';
import { SolicitudProvider } from './context/SolicitudContext';
import { PrestamoProvider } from './context/PrestamoContext';
import { ReservaProvider } from './context/ReservaContext';
import { UsuarioProvider } from './context/UsuarioContext';

import { AccesoDenegadoPage } from './Pages/comun/AccesoDenegadoPage';
import { NoEncontradaPage } from './Pages/comun/NoEncontradaPage';

import { RutaProtegida } from './components/RutaProtegida';
import { ROLES } from './data/contratoDatos';
import { InventarioPage } from './Pages/encargado/inventario/InventarioPage';
import { FormularioEquipoPage } from './Pages/encargado/inventario/FormularioEquipoPage';
import { UnidadesEquipoPage } from './Pages/encargado/inventario/UnidadesEquipoPage';
import { CondicionesPrestamoPage } from './Pages/encargado/inventario/CondicionesPrestamoPage';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/encargado/inventario',
    element: (
      <RutaProtegida allowedRoles={[ROLES.ENCARGADO]}>
        <InventarioPage />
      </RutaProtegida>
    )
  },
  {
    path: '/inventario',
    element: (
      <RutaProtegida allowedRoles={[ROLES.ENCARGADO]}>
        <InventarioPage />
      </RutaProtegida>
    )
  },
  {
    path: '/encargado/inventario/nuevo',
    element: (
      <RutaProtegida allowedRoles={[ROLES.ENCARGADO]}>
        <FormularioEquipoPage />
      </RutaProtegida>
    )
  },
  {
    path: '/encargado/equipo/nuevo',
    element: (
      <RutaProtegida allowedRoles={[ROLES.ENCARGADO]}>
        <FormularioEquipoPage />
      </RutaProtegida>
    )
  },
  {
    path: '/encargado/inventario/:id/unidades',
    element: (
      <RutaProtegida allowedRoles={[ROLES.ENCARGADO]}>
        <UnidadesEquipoPage />
      </RutaProtegida>
    )
  },
  {
    path: '/encargado/inventario/:id/condiciones',
    element: (
      <RutaProtegida allowedRoles={[ROLES.ENCARGADO]}>
        <CondicionesPrestamoPage />
      </RutaProtegida>
    )
  },
  {
    path: '/encargado/inventario/:id/editar',
    element: (
      <RutaProtegida allowedRoles={[ROLES.ENCARGADO]}>
        <FormularioEquipoPage />
      </RutaProtegida>
    )
  },
  { path: '/403', element: <AccesoDenegadoPage /> },
  { path: '/acceso-denegado', element: <AccesoDenegadoPage /> },
  { path: '/404', element: <NoEncontradaPage /> },
  { path: '*', element: <NoEncontradaPage /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <EquipoProvider>
        <UnidadProvider>
          <SolicitudProvider>
            <PrestamoProvider>
              <ReservaProvider>
                <UsuarioProvider>
                  <RouterProvider router={router} />
                </UsuarioProvider>
              </ReservaProvider>
            </PrestamoProvider>
          </SolicitudProvider>
        </UnidadProvider>
      </EquipoProvider>
    </AuthProvider>
  </StrictMode>
);
