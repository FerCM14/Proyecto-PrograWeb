import React from 'react';
import './BadgeEstado.css';

export const BadgeEstado = ({ estado, tipo = 'default', customText = null }) => {
  const normalizado = (estado || '').toLowerCase().trim();
  const textoAMostrar = customText || estado;

  let claseColor = 'badge-default';

  if (tipo === 'vencimiento') {
    if (normalizado.includes('retraso') || normalizado === 'vencido') {
      claseColor = 'badge-danger'; // Vencido siempre en rojo #B4322B
    } else if (normalizado.includes('hoy') || normalizado === 'vence_hoy') {
      claseColor = 'badge-warning';
    } else {
      claseColor = 'badge-info';
    }
  } else {
    // Clasificación por valor
    switch (normalizado) {
      case 'disponible':
      case 'aprobada':
      case 'habilitado':
      case 'cumplida':
        claseColor = 'badge-success';
        break;
      case 'prestada':
      case 'enviada':
      case 'entregada':
      case 'en_curso':
        claseColor = 'badge-info';
        break;
      case 'mantenimiento':
      case 'en espera':
      case 'con deuda':
      case 'pendiente':
        claseColor = 'badge-warning';
        break;
      case 'dada de baja':
      case 'rechazada':
      case 'bloqueado':
      case 'vencido':
      case 'cancelada':
        claseColor = 'badge-danger';
        break;
      case 'devuelta':
        claseColor = 'badge-muted';
        break;
      default:
        claseColor = 'badge-default';
    }
  }

  return (
    <span className={`badge-estado ${claseColor}`}>
      <span className="badge-dot"></span>
      <span className="badge-text">{textoAMostrar}</span>
    </span>
  );
};
