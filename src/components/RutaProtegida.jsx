import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ROLES } from '../data/contratoDatos';

export const RutaProtegida = ({ allowedRoles = [], children }) => {
  const { role, isAuthenticated } = useAuth();

  // Si no está autenticado y se requiere rol de usuario
  if (!isAuthenticated && !allowedRoles.includes(ROLES.VISITANTE)) {
    return <Navigate to="/login" replace />;
  }

  // Si su rol no está autorizado para esta ruta, va a la página 403 (Mockup 1.7)
  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/403" replace />;
  }

  return children;
};
