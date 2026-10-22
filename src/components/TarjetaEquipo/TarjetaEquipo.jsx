import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useUnidad } from '../../context/UnidadContext';
import { ROLES } from '../../data/contratoDatos';
import './TarjetaEquipo.css';

export const TarjetaEquipo = ({ equipo }) => {
  const { role, user } = useAuth();
  const { getConteoUnidades } = useUnidad();
  const navigate = useNavigate();

  const conteo = getConteoUnidades(equipo.id);
  const tieneLibres = conteo.libres > 0;
  const tieneDeuda = user && user.deuda > 0;

  const handleAction = () => {
    if (role === ROLES.VISITANTE) {
      navigate('/login');
    } else if (tieneLibres) {
      navigate(`/estudiante/solicitudes/nueva?equipoId=${equipo.id}`);
    } else {
      navigate(`/estudiante/reservas/nueva?equipoId=${equipo.id}`);
    }
  };

  const detalleUrl = role === ROLES.ENCARGADO 
    ? `/encargado/inventario/${equipo.id}/unidades`
    : (role === ROLES.ESTUDIANTE ? `/estudiante/catalogo/${equipo.id}` : `/catalogo/${equipo.id}`);

  return (
    <div className="tarjeta-equipo">
      <div className="tarjeta-foto-container">
        <img 
          src={equipo.imagen || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'} 
          alt={equipo.nombre} 
          className="tarjeta-foto"
        />
        <span className="tarjeta-categoria-tag">{equipo.categoria}</span>
      </div>

      <div className="tarjeta-info">
        <h3 className="tarjeta-nombre" title={equipo.nombre}>
          <Link to={detalleUrl}>{equipo.nombre}</Link>
        </h3>
        <p className="tarjeta-marca-modelo">
          {equipo.marca} · {equipo.modelo}
        </p>

        <div className="tarjeta-disponibilidad-row">
          <span className={`disponibilidad-badge ${tieneLibres ? 'disponible' : 'agotado'}`}>
            <span className="disp-dot"></span>
            {conteo.libres} / {conteo.total} libres
          </span>
          <span className="duracion-tag">Hasta {equipo.duracionMaxima}d</span>
        </div>

        <div className="tarjeta-acciones">
          <Link to={detalleUrl} className="btn btn-secondary btn-card">
            Ver detalle
          </Link>

          {role !== ROLES.ENCARGADO && (
            <button
              type="button"
              className={`btn btn-card ${tieneLibres ? 'btn-primary' : 'btn-accent'}`}
              onClick={handleAction}
              disabled={tieneDeuda && tieneLibres}
              title={tieneDeuda && tieneLibres ? 'No puedes solicitar por penalidad pendiente' : ''}
            >
              {tieneLibres ? 'Solicitar' : 'Reservar'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
