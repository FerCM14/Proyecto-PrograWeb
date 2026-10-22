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

const router = createBrowserRouter([
  { path: '/', element: <App /> },
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
