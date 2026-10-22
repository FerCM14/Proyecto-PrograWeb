import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUnidad } from '../../context/UnidadContext';
import { useSolicitud } from '../../context/SolicitudContext';
import { usePrestamo } from '../../context/PrestamoContext';
import { useReserva } from '../../context/ReservaContext';
import { useUsuario } from '../../context/UsuarioContext';
import { ESTADOS_SOLICITUD, ESTADOS_PRESTAMO } from '../../data/contratoDatos';
import './SidebarEncargado.css';

export const SidebarEncargado = () => {
  const { unidades } = useUnidad();
  const { solicitudes } = useSolicitud();
  const { prestamos } = usePrestamo();
  const { reservas, listaEsperaGrupos } = useReserva();
  const { usuarios } = useUsuario();

  // Contadores dinámicos
  const totalUnidades = unidades.length;
  const countSolicitudes = solicitudes.length;
  const countVigentes = prestamos.filter(p => p.estado !== ESTADOS_PRESTAMO.DEVUELTO).length;
  const countVencidos = prestamos.filter(p => p.estado === ESTADOS_PRESTAMO.VENCIDO).length;
  const countReservas = reservas.filter(r => r.estado !== 'Cancelada').length;
  const countEspera = listaEsperaGrupos.reduce((acc, g) => acc + g.enEsperaTotal, 0);
  const countUsuarios = usuarios.length;

  return (
    <aside className="encargado-sidebar">
      <div className="sidebar-group">
        <div className="sidebar-group-title">OPERACIÓN</div>
        <nav className="sidebar-nav">
          <NavLink 
            to="/encargado/inventario" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span>Inventario</span>
            <span className="sidebar-counter">{totalUnidades}</span>
          </NavLink>

          <NavLink 
            to="/encargado/solicitudes" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span>Solicitudes</span>
            <span className="sidebar-counter">{countSolicitudes}</span>
          </NavLink>

          <NavLink 
            to="/encargado/prestamos" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span>Préstamos vigentes</span>
            <span className="sidebar-counter">{countVigentes}</span>
          </NavLink>

          <NavLink 
            to="/encargado/prestamos?filtro=vencidos" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span>Vencidos</span>
            <span className={`sidebar-counter ${countVencidos > 0 ? 'counter-danger' : ''}`}>
              {countVencidos}
            </span>
          </NavLink>

          <NavLink 
            to="/encargado/devoluciones" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span>Devoluciones</span>
            <span className="sidebar-counter">—</span>
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-group">
        <div className="sidebar-group-title">COMPLEMENTARIOS</div>
        <nav className="sidebar-nav">
          <NavLink 
            to="/encargado/reservas" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span>Reservas</span>
            <span className="sidebar-counter">{countReservas}</span>
          </NavLink>

          <NavLink 
            to="/encargado/lista-espera" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span>Lista de espera</span>
            <span className="sidebar-counter">{countEspera}</span>
          </NavLink>

          <NavLink 
            to="/encargado/tablero" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span>Tablero</span>
          </NavLink>

          <NavLink 
            to="/encargado/usuarios" 
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <span>Usuarios</span>
            <span className="sidebar-counter">{countUsuarios}</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};
