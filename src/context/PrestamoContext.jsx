import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PRESTAMOS } from '../data/prestamosData';
import { ESTADOS_PRESTAMO } from '../data/contratoDatos';
import { getStorageData, setStorageData } from './storageHelper';

const STORAGE_KEY_PRESTAMOS = 'ulima_almacen_prestamos';

const PrestamoContext = createContext(null);

export const PrestamoProvider = ({ children }) => {
  const [prestamos, setPrestamos] = useState(() => 
    getStorageData(STORAGE_KEY_PRESTAMOS, INITIAL_PRESTAMOS)
  );

  useEffect(() => {
    setStorageData(STORAGE_KEY_PRESTAMOS, prestamos);
  }, [prestamos]);

  const getPrestamoById = (id) => {
    return prestamos.find(p => p.id === id) || null;
  };

  const getPrestamosPorEstudiante = (estudianteId) => {
    return prestamos.filter(p => String(p.estudianteId) === String(estudianteId));
  };

  const getPrestamosVigentes = () => {
    return prestamos.filter(p => p.estado !== ESTADOS_PRESTAMO.DEVUELTO);
  };

  /**
   * Registrar Entrega de Unidad Física
   */
  const registrarEntrega = ({
    solicitud,
    unidadCodigo,
    accesoriosEntregados,
    observacionesIniciales,
    fechaDevolucionPactada,
    penalidadPorDia = 15.00
  }) => {
    const prestamoId = 'PRE-2026-' + Math.floor(1000 + Math.random() * 9000);
    const ahora = new Date();
    const fechaEntregaStr = ahora.toISOString().replace('T', ' ').substring(0, 16);

    const nuevoPrestamo = {
      id: prestamoId,
      solicitudId: solicitud ? solicitud.id : null,
      unidadCodigo,
      equipoId: solicitud ? solicitud.equipoId : null,
      equipoNombre: solicitud ? solicitud.equipoNombre : 'Equipo de laboratorio',
      estudianteId: solicitud ? solicitud.estudianteId : 1,
      estudianteNombre: solicitud ? solicitud.estudiante : 'Estudiante ULIMA',
      codigoEstudiante: solicitud ? solicitud.codigoEstudiante : '20210000',
      carrera: solicitud ? solicitud.carrera : 'Ingeniería',
      ciclo: solicitud ? solicitud.ciclo : '6.°',
      curso: solicitud ? solicitud.curso : 'Laboratorio General',
      docente: solicitud ? solicitud.docente : 'Docente Responsable',
      fechaEntrega: fechaEntregaStr,
      fechaVencimiento: fechaDevolucionPactada || '2026-09-21 19:00',
      vencimientoTexto: fechaDevolucionPactada ? fechaDevolucionPactada.split(' ')[0] : '21/09/2026',
      estado: ESTADOS_PRESTAMO.EN_CURSO,
      diasRetraso: 0,
      penalidadPorDia,
      penalidadTotal: 0.00,
      penalidadPagada: false,
      accesoriosEntregados: accesoriosEntregados || [],
      observacionesEntrega: observacionesIniciales || 'Sin observaciones.',
      devolucion: null
    };

    setPrestamos(prev => [nuevoPrestamo, ...prev]);
    return nuevoPrestamo;
  };

  /**
   * Registrar Devolución Física del Equipo
   */
  const registrarDevolucion = (
    prestamoId,
    {
      fechaRetorno,
      accesoriosDevueltos,
      estadoRetorno, // 'Sin novedades' | 'Con daños' | 'Faltantes'
      descripcionDanio = '',
      accesoriosFaltantes = [],
      diasRetrasoCalculados = 0
    }
  ) => {
    const prestamo = prestamos.find(p => p.id === prestamoId);
    if (!prestamo) throw new Error('Préstamo no encontrado.');

    const penalidadCalculada = diasRetrasoCalculados > 0 
      ? diasRetrasoCalculados * (prestamo.penalidadPorDia || 15.00) 
      : 0;

    let prestamoActualizado = null;

    setPrestamos(prev => prev.map(p => {
      if (p.id === prestamoId) {
        prestamoActualizado = {
          ...p,
          estado: ESTADOS_PRESTAMO.DEVUELTO,
          diasRetraso: diasRetrasoCalculados,
          penalidadTotal: penalidadCalculada,
          penalidadPagada: penalidadCalculada === 0,
          devolucion: {
            fechaRetorno: fechaRetorno || new Date().toISOString().substring(0, 10),
            estadoRetorno: estadoRetorno || 'Sin novedades',
            accesoriosDevueltos,
            accesoriosFaltantes,
            descripcionDanio,
            requiereMantenimiento: estadoRetorno !== 'Sin novedades'
          }
        };
        return prestamoActualizado;
      }
      return p;
    }));

    return prestamoActualizado;
  };

  /**
   * Renovar préstamo (extiende 7 días la devolución si no está vencido)
   */
  const renovarPrestamo = (prestamoId, diasExtension = 5) => {
    const p = prestamos.find(item => item.id === prestamoId);
    if (!p) throw new Error('Préstamo no encontrado.');

    if (p.estado === ESTADOS_PRESTAMO.VENCIDO) {
      throw new Error('No es posible renovar un préstamo que ya se encuentra vencido.');
    }

    setPrestamos(prev => prev.map(item => {
      if (item.id === prestamoId) {
        return {
          ...item,
          vencimientoTexto: '28/09/2026',
          observacionesEntrega: `${item.observacionesEntrega || ''} (Renovado por ${diasExtension} días adicionales)`.trim()
        };
      }
      return item;
    }));
  };

  return (
    <PrestamoContext.Provider
      value={{
        prestamos,
        getPrestamoById,
        getPrestamosPorEstudiante,
        getPrestamosVigentes,
        registrarEntrega,
        registrarDevolucion,
        renovarPrestamo
      }}
    >
      {children}
    </PrestamoContext.Provider>
  );
};

export const usePrestamo = () => {
  const context = useContext(PrestamoContext);
  if (!context) {
    throw new Error('usePrestamo debe ser usado dentro de un PrestamoProvider');
  }
  return context;
};
