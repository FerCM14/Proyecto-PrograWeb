import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_EQUIPOS } from '../data/equiposData';
import { getStorageData, setStorageData } from './storageHelper';

const STORAGE_KEY_EQUIPOS = 'ulima_almacen_equipos';

const EquipoContext = createContext(null);

export const EquipoProvider = ({ children }) => {
  const [equipos, setEquipos] = useState(() => 
    getStorageData(STORAGE_KEY_EQUIPOS, INITIAL_EQUIPOS)
  );

  useEffect(() => {
    setStorageData(STORAGE_KEY_EQUIPOS, equipos);
  }, [equipos]);

  const getEquipoById = (id) => {
    return equipos.find(e => String(e.id) === String(id)) || null;
  };

  /**
   * Crear nuevo modelo de equipo evitando duplicado de Marca y Modelo
   */
  const crearEquipo = (nuevo) => {
    const marcaTrim = (nuevo.marca || '').trim().toLowerCase();
    const modeloTrim = (nuevo.modelo || '').trim().toLowerCase();

    const existe = equipos.some(
      e => e.marca.toLowerCase() === marcaTrim && e.modelo.toLowerCase() === modeloTrim
    );

    if (existe) {
      throw new Error('Ya existe un equipo con esta marca y modelo.');
    }

    const id = Date.now();
    const equipoCreado = {
      ...nuevo,
      id,
      accesorios: nuevo.accesorios || [],
      duracionMaxima: Number(nuevo.duracionMaxima) || 7,
      requiereAutorizacion: !!nuevo.requiereAutorizacion,
      admiteRenovacion: !!nuevo.admiteRenovacion,
      penalidadPorDia: Number(nuevo.penalidadPorDia) || 15.00,
      imagen: nuevo.imagen || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    };

    setEquipos(prev => [...prev, equipoCreado]);
    return equipoCreado;
  };

  /**
   * Editar equipo existente verificando marca y modelo
   */
  const editarEquipo = (id, datosActualizados) => {
    const marcaTrim = (datosActualizados.marca || '').trim().toLowerCase();
    const modeloTrim = (datosActualizados.modelo || '').trim().toLowerCase();

    const duplicado = equipos.some(
      e => String(e.id) !== String(id) &&
           e.marca.toLowerCase() === marcaTrim &&
           e.modelo.toLowerCase() === modeloTrim
    );

    if (duplicado) {
      throw new Error('Ya existe otro equipo con esta marca y modelo.');
    }

    let actualizado = null;
    setEquipos(prev => prev.map(e => {
      if (String(e.id) === String(id)) {
        actualizado = { ...e, ...datosActualizados };
        return actualizado;
      }
      return e;
    }));

    return actualizado;
  };

  /**
   * Actualizar condiciones de préstamo
   */
  const actualizarCondicionesPrestamo = (id, { duracionMaxima, requiereAutorizacion, admiteRenovacion, penalidadPorDia }) => {
    setEquipos(prev => prev.map(e => {
      if (String(e.id) === String(id)) {
        return {
          ...e,
          duracionMaxima: Number(duracionMaxima),
          requiereAutorizacion: Boolean(requiereAutorizacion),
          admiteRenovacion: Boolean(admiteRenovacion),
          penalidadPorDia: Number(penalidadPorDia)
        };
      }
      return e;
    }));
  };

  /**
   * Eliminar equipo
   */
  const eliminarEquipo = (id) => {
    setEquipos(prev => prev.filter(e => String(e.id) !== String(id)));
  };

  return (
    <EquipoContext.Provider
      value={{
        equipos,
        getEquipoById,
        crearEquipo,
        editarEquipo,
        actualizarCondicionesPrestamo,
        eliminarEquipo
      }}
    >
      {children}
    </EquipoContext.Provider>
  );
};

export const useEquipo = () => {
  const context = useContext(EquipoContext);
  if (!context) {
    throw new Error('useEquipo debe usarse dentro de un EquipoProvider');
  }
  return context;
};
