import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_USUARIOS } from '../data/usuariosData';
import { ESTADOS_USUARIO } from '../data/contratoDatos';
import { getStorageData, setStorageData } from './storageHelper';

const STORAGE_KEY_USUARIOS = 'ulima_almacen_usuarios';

const UsuarioContext = createContext(null);

export const UsuarioProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState(() => 
    getStorageData(STORAGE_KEY_USUARIOS, INITIAL_USUARIOS)
  );

  useEffect(() => {
    setStorageData(STORAGE_KEY_USUARIOS, usuarios);
  }, [usuarios]);

  const getUsuarioById = (id) => {
    return usuarios.find(u => String(u.id) === String(id)) || null;
  };

  const getUsuarioByCodigo = (codigo) => {
    return usuarios.find(u => u.codigo === codigo) || null;
  };

  /**
   * Bloquear cuenta de estudiante con motivo
   */
  const bloquearUsuario = (id, motivo) => {
    setUsuarios(prev => prev.map(u => {
      if (String(u.id) === String(id)) {
        return {
          ...u,
          estado: ESTADOS_USUARIO.BLOQUEADO,
          bloqueado: true,
          motivoBloqueo: motivo || 'Cuenta bloqueada administrativamente por el encargado.'
        };
      }
      return u;
    }));
  };

  /**
   * Desbloquear cuenta
   */
  const desbloquearUsuario = (id) => {
    setUsuarios(prev => prev.map(u => {
      if (String(u.id) === String(id)) {
        const nuevoEstado = (u.deuda && u.deuda > 0) ? ESTADOS_USUARIO.CON_DEUDA : ESTADOS_USUARIO.HABILITADO;
        return {
          ...u,
          estado: nuevoEstado,
          bloqueado: false,
          motivoBloqueo: null
        };
      }
      return u;
    }));
  };

  /**
   * Registrar pago de penalidad (regularización en Tesorería)
   */
  const registrarPago = (id) => {
    setUsuarios(prev => prev.map(u => {
      if (String(u.id) === String(id)) {
        return {
          ...u,
          deuda: 0,
          estado: ESTADOS_USUARIO.HABILITADO,
          bloqueado: false,
          motivoBloqueo: null
        };
      }
      return u;
    }));
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        getUsuarioById,
        getUsuarioByCodigo,
        bloquearUsuario,
        desbloquearUsuario,
        registrarPago
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error('useUsuario debe ser usado dentro de un UsuarioProvider');
  }
  return context;
};
