import React from 'react';
import { BadgeEstado } from '../BadgeEstado/BadgeEstado';
import './FilaUnidad.css';

export const FilaUnidad = ({ unidad, onCambiarEstado = null }) => {
  return (
    <tr className="fila-unidad-tr">
      <td className="unidad-codigo-col">
        <span className="font-mono unidad-codigo">{unidad.codigo}</span>
      </td>
      <td className="unidad-ubicacion-col">
        {unidad.ubicacion || 'Almacén H-102'}
      </td>
      <td className="unidad-estado-col">
        <BadgeEstado estado={unidad.estado} />
      </td>
      <td className="unidad-observaciones-col">
        {unidad.observaciones || '—'}
      </td>
      <td className="unidad-prestamo-col">
        <span className="font-mono">{unidad.prestamoVigente || '—'}</span>
      </td>
      {onCambiarEstado && (
        <td className="unidad-acciones-col">
          <button 
            type="button" 
            className="btn btn-secondary btn-sm"
            onClick={() => onCambiarEstado(unidad)}
          >
            Cambiar estado
          </button>
        </td>
      )}
    </tr>
  );
};
