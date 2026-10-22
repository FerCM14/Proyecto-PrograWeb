import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_SOLICITUDES } from '../data/solicitudesData';
import { ESTADOS_SOLICITUD } from '../data/contratoDatos';
import { getStorageData, setStorageData } from './storageHelper';

const STORAGE_KEY_SOLICITUDES = 'ulima_almacen_solicitudes';

const SolicitudContext = createContext(null);

export const SolicitudProvider = ({ children }) => {
  const [solicitudes, setSolicitudes] = useState(() => 
    getStorageData(STORAGE_KEY_SOLICITUDES, INITIAL_SOLICITUDES)
  );

  useEffect(() => {
    setStorageData(STORAGE_KEY_SOLICITUDES, solicitudes);
  }, [solicitudes]);

  const getSolicitudesEstudiante = (estudianteId) => {
    return solicitudes.filter(s => String(s.estudianteId) === String(estudianteId));
  };

  const getSolicitudById = (id) => {
    return solicitudes.find(s => s.id === id) || null;
  };

  /**
   * Crear solicitud de préstamo con validación de fechas, duración y deuda
   */
  const crearSolicitud = ({
    estudiante,
    equipo,
    fechaInicio,
    fechaFin,
    curso,
    docente,
    motivo
  }) => {
    // 1. Validar restricción por deuda
    if (estudiante.deuda && estudiante.deuda > 0) {
      throw new Error(`Cuenta bloqueada por penalidad pendiente de S/ ${estudiante.deuda.toFixed(2)}. No puedes solicitar equipos hasta regularizar.`);
    }

    if (!fechaInicio || !fechaFin) {
      throw new Error('Debes seleccionar las fechas de inicio y devolución.');
    }

    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    const diffTime = fin.getTime() - inicio.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

    if (diffDays <= 0) {
      throw new Error('La fecha de devolución debe ser posterior a la fecha de inicio.');
    }

    // 2. Validar duración máxima del equipo
    if (diffDays > equipo.duracionMaxima) {
      throw new Error(`Duración excedida: ${diffDays} días solicitados y el máximo para este equipo es de ${equipo.duracionMaxima} días.`);
    }

    // 3. Validar motivo
    if (!motivo || motivo.trim().length < 20) {
      throw new Error('El motivo de la solicitud debe tener al menos 20 caracteres.');
    }

    const nuevaId = 'SOL-2026-' + Math.floor(1000 + Math.random() * 9000);
    const formatDate = (d) => {
      const parts = d.split('-');
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    };

    const nuevaSolicitud = {
      id: nuevaId,
      estudianteId: estudiante.id,
      estudiante: estudiante.nombreCompleto,
      codigoEstudiante: estudiante.codigo,
      carrera: estudiante.carrera,
      ciclo: estudiante.ciclo,
      deuda: estudiante.deuda || 0,
      equipoNombre: equipo.nombre,
      equipoId: equipo.id,
      curso: curso || 'Laboratorio',
      docente: docente || 'Docente a cargo',
      fechas: `${formatDate(fechaInicio)} → ${formatDate(fechaFin)}`,
      fechaInicio,
      fechaFin,
      diasSolicitados: diffDays,
      motivo: motivo.trim(),
      antiguedad: 'hace unos momentos',
      estado: ESTADOS_SOLICITUD.ENVIADA,
      unidadAsignada: 'Pendiente de asignar'
    };

    setSolicitudes(prev => [nuevaSolicitud, ...prev]);
    return nuevaSolicitud;
  };

  /**
   * Aprobar solicitud asignando una unidad concreta
   */
  const aprobarSolicitud = (id, unidadCodigo) => {
    if (!unidadCodigo || unidadCodigo === 'Pendiente de asignar') {
      throw new Error('Debes asignar una unidad física libre para aprobar la solicitud.');
    }

    setSolicitudes(prev => prev.map(s => {
      if (s.id === id) {
        return {
          ...s,
          estado: ESTADOS_SOLICITUD.APROBADA,
          unidadAsignada: unidadCodigo
        };
      }
      return s;
    }));
  };

  /**
   * Rechazar solicitud guardando motivo
   */
  const rechazarSolicitud = (id, motivo) => {
    if (!motivo || motivo.trim().length === 0) {
      throw new Error('Debes indicar un motivo de rechazo.');
    }

    setSolicitudes(prev => prev.map(s => {
      if (s.id === id) {
        return {
          ...s,
          estado: ESTADOS_SOLICITUD.RECHAZADA,
          motivoRechazo: motivo.trim(),
          unidadAsignada: '—'
        };
      }
      return s;
    }));
  };

  /**
   * Retirar solicitud enviada por el estudiante
   */
  const retirarSolicitud = (id) => {
    const solicitud = solicitudes.find(s => s.id === id);
    if (!solicitud) throw new Error('Solicitud no encontrada.');

    if (solicitud.estado !== ESTADOS_SOLICITUD.ENVIADA) {
      throw new Error('No pudimos retirar la solicitud porque ya fue aprobada o procesada. Contacta al encargado del almacén.');
    }

    setSolicitudes(prev => prev.filter(s => s.id !== id));
  };

  const marcarEntregada = (id) => {
    setSolicitudes(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, estado: ESTADOS_SOLICITUD.ENTREGADA };
      }
      return s;
    }));
  };

  const marcarDevuelta = (id) => {
    setSolicitudes(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, estado: ESTADOS_SOLICITUD.DEVUELTA };
      }
      return s;
    }));
  };

  return (
    <SolicitudContext.Provider
      value={{
        solicitudes,
        getSolicitudesEstudiante,
        getSolicitudById,
        crearSolicitud,
        aprobarSolicitud,
        rechazarSolicitud,
        retirarSolicitud,
        marcarEntregada,
        marcarDevuelta
      }}
    >
      {children}
    </SolicitudContext.Provider>
  );
};

export const useSolicitud = () => {
  const context = useContext(SolicitudContext);
  if (!context) {
    throw new Error('useSolicitud debe ser usado dentro de un SolicitudProvider');
  }
  return context;
};
