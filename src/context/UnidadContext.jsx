import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_UNIDADES } from '../data/unidadesData';
import { ESTADOS_UNIDAD } from '../data/contratoDatos';
import { getStorageData, setStorageData } from './storageHelper';

const STORAGE_KEY_UNIDADES = 'ulima_almacen_unidades';

const UnidadContext = createContext(null);

export const UnidadProvider = ({ children }) => {
  const [unidades, setUnidades] = useState(() => 
    getStorageData(STORAGE_KEY_UNIDADES, INITIAL_UNIDADES)
  );

  useEffect(() => {
    setStorageData(STORAGE_KEY_UNIDADES, unidades);
  }, [unidades]);

  const getUnidadesPorEquipo = (equipoId) => {
    return unidades.filter(u => String(u.equipoId) === String(equipoId));
  };

  const getUnidadesLibres = (equipoId) => {
    return unidades.filter(
      u => String(u.equipoId) === String(equipoId) && u.estado === ESTADOS_UNIDAD.DISPONIBLE
    );
  };

  const getConteoUnidades = (equipoId) => {
    const units = getUnidadesPorEquipo(equipoId);
    return {
      total: units.length,
      libres: units.filter(u => u.estado === ESTADOS_UNIDAD.DISPONIBLE).length,
      prestadas: units.filter(u => u.estado === ESTADOS_UNIDAD.PRESTADA).length,
      mantenimiento: units.filter(u => u.estado === ESTADOS_UNIDAD.MANTENIMIENTO).length,
      baja: units.filter(u => u.estado === ESTADOS_UNIDAD.DADA_DE_BAJA).length
    };
  };

  const agregarUnidad = (equipoId, { codigo, ubicacion, estado, observaciones }) => {
    const cod = (codigo || '').trim().toUpperCase();
    if (!cod) {
      throw new Error('El código de inventario es obligatorio.');
    }

    const existe = unidades.some(u => u.codigo.toUpperCase() === cod);
    if (existe) {
      throw new Error(`Ya existe una unidad con el código ${cod}.`);
    }

    const nuevaUnidad = {
      codigo: cod,
      equipoId: Number(equipoId),
      ubicacion: ubicacion || 'Almacén H-102',
      estado: estado || ESTADOS_UNIDAD.DISPONIBLE,
      observaciones: observaciones || '—',
      prestamoVigente: '—'
    };

    setUnidades(prev => [...prev, nuevaUnidad]);
    return nuevaUnidad;
  };

  const cambiarEstadoUnidad = (codigo, nuevoEstado, nuevasObservaciones = null) => {
    setUnidades(prev => prev.map(u => {
      if (u.codigo === codigo) {
        return {
          ...u,
          estado: nuevoEstado,
          observaciones: nuevasObservaciones !== null ? nuevasObservaciones : u.observaciones,
          prestamoVigente: nuevoEstado === ESTADOS_UNIDAD.PRESTADA ? u.prestamoVigente : '—'
        };
      }
      return u;
    }));
  };

  const asignarPrestamoAUnidad = (codigo, codigoPrestamo) => {
    setUnidades(prev => prev.map(u => {
      if (u.codigo === codigo) {
        return {
          ...u,
          estado: ESTADOS_UNIDAD.PRESTADA,
          prestamoVigente: codigoPrestamo
        };
      }
      return u;
    }));
  };

  const liberarUnidad = (codigo) => {
    setUnidades(prev => prev.map(u => {
      if (u.codigo === codigo) {
        return {
          ...u,
          estado: ESTADOS_UNIDAD.DISPONIBLE,
          prestamoVigente: '—'
        };
      }
      return u;
    }));
  };

  const derivarAMantenimiento = (codigo, motivo) => {
    setUnidades(prev => prev.map(u => {
      if (u.codigo === codigo) {
        return {
          ...u,
          estado: ESTADOS_UNIDAD.MANTENIMIENTO,
          prestamoVigente: '—',
          observaciones: motivo || 'Derivado a mantenimiento'
        };
      }
      return u;
    }));
  };

  return (
    <UnidadContext.Provider
      value={{
        unidades,
        getUnidadesPorEquipo,
        getUnidadesLibres,
        getConteoUnidades,
        agregarUnidad,
        cambiarEstadoUnidad,
        asignarPrestamoAUnidad,
        liberarUnidad,
        derivarAMantenimiento
      }}
    >
      {children}
    </UnidadContext.Provider>
  );
};

export const useUnidad = () => {
  const context = useContext(UnidadContext);
  if (!context) {
    throw new Error('useUnidad debe ser usado dentro de un UnidadProvider');
  }
  return context;
};
