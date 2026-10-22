import React from 'react';
import './Notificacion.css';

export const Notificacion = ({
  tipo = 'success', // 'success' | 'warning' | 'danger' | 'info'
  mensaje,
  descripcion = null,
  onCerrar = null
}) => {
  if (!mensaje) return null;

  const iconMap = {
    success: '✓',
    warning: '⚠',
    danger: '✕',
    info: 'ℹ'
  };

  return (
    <div className={`notificacion-banner notificacion-${tipo}`}>
      <div className="notificacion-icon-box">
        {iconMap[tipo] || 'ℹ'}
      </div>
      <div className="notificacion-body">
        <p className="notificacion-msg">{mensaje}</p>
        {descripcion && <p className="notificacion-desc">{descripcion}</p>}
      </div>
      {onCerrar && (
        <button
          type="button"
          onClick={onCerrar}
          className="notificacion-close-btn"
          aria-label="Cerrar notificación"
        >
          ✕
        </button>
      )}
    </div>
  );
};
