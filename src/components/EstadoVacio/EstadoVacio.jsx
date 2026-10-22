import React from 'react';
import './EstadoVacio.css';

export const EstadoVacio = ({
  icono = '◻',
  titulo = 'No hay registros disponibles',
  descripcion = 'No se encontraron elementos para mostrar en esta sección.',
  accionTexto = null,
  onAccion = null
}) => {
  return (
    <div className="estado-vacio-card">
      <div className="estado-vacio-icono">{icono}</div>
      <h3 className="estado-vacio-titulo">{titulo}</h3>
      <p className="estado-vacio-descripcion">{descripcion}</p>
      {accionTexto && onAccion && (
        <button
          type="button"
          className="btn btn-primary estado-vacio-btn"
          onClick={onAccion}
        >
          {accionTexto}
        </button>
      )}
    </div>
  );
};
