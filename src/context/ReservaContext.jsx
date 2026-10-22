import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_RESERVAS, INITIAL_LISTA_ESPERA_GRUPOS } from '../data/reservasData';
import { ESTADOS_RESERVA } from '../data/contratoDatos';
import { getStorageData, setStorageData } from './storageHelper';

const STORAGE_KEY_RESERVAS = 'ulima_almacen_reservas';
const STORAGE_KEY_LISTA_ESPERA = 'ulima_almacen_lista_espera';

const ReservaContext = createContext(null);

export const ReservaProvider = ({ children }) => {
  const [reservas, setReservas] = useState(() => 
    getStorageData(STORAGE_KEY_RESERVAS, INITIAL_RESERVAS)
  );

  const [listaEsperaGrupos, setListaEsperaGrupos] = useState(() => 
    getStorageData(STORAGE_KEY_LISTA_ESPERA, INITIAL_LISTA_ESPERA_GRUPOS)
  );

  useEffect(() => {
    setStorageData(STORAGE_KEY_RESERVAS, reservas);
  }, [reservas]);

  useEffect(() => {
    setStorageData(STORAGE_KEY_LISTA_ESPERA, listaEsperaGrupos);
  }, [listaEsperaGrupos]);

  const getReservasEstudiante = (estudianteId) => {
    return reservas.filter(r => String(r.estudianteId) === String(estudianteId));
  };

  /**
   * Crear nueva reserva verificando solapamiento
   */
  const crearReserva = ({
    estudianteId,
    estudianteNombre,
    equipoId,
    equipoNombre,
    fechaInicio,
    fechaFin,
    enListaEspera = false
  }) => {
    // Validar solapamiento con reservas activas del mismo usuario para este equipo
    const solapada = reservas.find(
      r => String(r.estudianteId) === String(estudianteId) &&
           String(r.equipoId) === String(equipoId) &&
           r.estado !== ESTADOS_RESERVA.CANCELADA &&
           r.estado !== ESTADOS_RESERVA.CUMPLIDA &&
           ((fechaInicio >= r.fechaInicio && fechaInicio <= r.fechaFin) ||
            (fechaFin >= r.fechaInicio && fechaFin <= r.fechaFin))
    );

    if (solapada) {
      throw new Error(`Ya tienes una reserva de este equipo del ${solapada.fechaInicio} al ${solapada.fechaFin}. Ajusta el rango para continuar.`);
    }

    const nuevaId = 'RES-2026-' + Math.floor(1000 + Math.random() * 9000);
    const formatDate = (d) => {
      const parts = d.split('-');
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    };

    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    const dias = Math.ceil((fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    const nuevaReserva = {
      id: nuevaId,
      estudianteId,
      estudianteNombre,
      equipoId,
      equipoNombre,
      fechaInicio,
      fechaFin,
      rangoTexto: `${formatDate(fechaInicio)} → ${formatDate(fechaFin)}`,
      dias: dias > 0 ? dias : 1,
      estado: enListaEspera ? ESTADOS_RESERVA.EN_ESPERA : ESTADOS_RESERVA.CONFIRMADA,
      listaEsperaPuesto: enListaEspera ? 1 : null,
      listaEsperaTexto: enListaEspera ? 'puesto 1' : '—'
    };

    setReservas(prev => [nuevaReserva, ...prev]);
    return nuevaReserva;
  };

  /**
   * Cancelar reserva
   */
  const cancelarReserva = (id) => {
    setReservas(prev => prev.map(r => {
      if (r.id === id) {
        return { ...r, estado: ESTADOS_RESERVA.CANCELADA };
      }
      return r;
    }));
  };

  /**
   * Asignar reserva desde lista de espera (encargado)
   */
  const asignarDesdeListaEspera = (equipoId, colaItemPosicion) => {
    setListaEsperaGrupos(prev => prev.map(grupo => {
      if (String(grupo.equipoId) === String(equipoId)) {
        return {
          ...grupo,
          enEsperaTotal: Math.max(0, grupo.enEsperaTotal - 1),
          cola: grupo.cola.filter(item => item.posicion !== colaItemPosicion)
        };
      }
      return grupo;
    }));
  };

  return (
    <ReservaContext.Provider
      value={{
        reservas,
        listaEsperaGrupos,
        getReservasEstudiante,
        crearReserva,
        cancelarReserva,
        asignarDesdeListaEspera
      }}
    >
      {children}
    </ReservaContext.Provider>
  );
};

export const useReserva = () => {
  const context = useContext(ReservaContext);
  if (!context) {
    throw new Error('useReserva debe ser usado dentro de un ReservaProvider');
  }
  return context;
};
