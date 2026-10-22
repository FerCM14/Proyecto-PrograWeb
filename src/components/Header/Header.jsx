import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useSolicitud } from '../../context/SolicitudContext';
import { ROLES, ESTADOS_SOLICITUD } from '../../data/contratoDatos';
import './Header.css';

export const Header = () => {
  const { user, role, logout, setRoleQuickDemo } = useAuth();
  const { solicitudes } = useSolicitud();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  // Contador dinámico de solicitudes pendientes (Enviadas)
  const solicitudesPendientes = solicitudes.filter(
    s => s.estado === ESTADOS_SOLICITUD.ENVIADA
  ).length;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    if (role === ROLES.ENCARGADO) {
      navigate(`/encargado/inventario?q=${encodeURIComponent(searchTerm.trim())}`);
    } else if (role === ROLES.ESTUDIANTE) {
      navigate(`/estudiante/catalogo?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate(`/catalogo?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // Obtener iniciales del usuario
  const getInitials = (name) => {
    if (!name) return 'UL';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].substring(0, 2).toUpperCase();
  };

  return (
    <header className="site-header">
      {/* Barra superior discreta para demostración rápida de roles requerida por el prompt */}
      <div className="demo-role-bar">
        <div className="demo-role-content">
          <span className="demo-role-label">MODO DEMOSTRACIÓN:</span>
          <button 
            type="button" 
            className={`demo-btn ${role === ROLES.VISITANTE ? 'active' : ''}`}
            onClick={() => { setRoleQuickDemo(ROLES.VISITANTE); navigate('/'); }}
          >
            Visitante
          </button>
          <button 
            type="button" 
            className={`demo-btn ${role === ROLES.ESTUDIANTE && (!user || user.codigo === '20213456') ? 'active' : ''}`}
            onClick={() => { setRoleQuickDemo(ROLES.ESTUDIANTE); navigate('/estudiante/catalogo'); }}
          >
            Estudiante (Renzo · Al día)
          </button>
          <button 
            type="button" 
            className={`demo-btn ${role === ROLES.ESTUDIANTE && user && user.codigo === '20204512' ? 'active' : ''}`}
            onClick={() => { setRoleQuickDemo(ROLES.ESTUDIANTE, 2); navigate('/estudiante/cuenta'); }}
          >
            Estudiante (Camila · Deuda S/ 45)
          </button>
          <button 
            type="button" 
            className={`demo-btn ${role === ROLES.ENCARGADO ? 'active' : ''}`}
            onClick={() => { setRoleQuickDemo(ROLES.ENCARGADO); navigate('/encargado/inventario'); }}
          >
            Encargado (Elena Rivas · H-102)
          </button>
        </div>
      </div>

      {/* Cabecera Principal */}
      <div className="header-main-bar">
        <div className="header-inner container-1600">
          
          {/* Logo y Marca */}
          <div className="brand-group">
            <Link to={role === ROLES.ENCARGADO ? '/encargado/inventario' : (role === ROLES.ESTUDIANTE ? '/estudiante/catalogo' : '/')} className="brand-logo-link">
              <div className="brand-square"></div>
              <span className="brand-title">Almacén de Equipos</span>
            </Link>
            {role === ROLES.ENCARGADO && (
              <span className="badge-encargado-header">PANEL DEL ENCARGADO</span>
            )}
          </div>

          {/* Navegación según Rol */}
          {role === ROLES.VISITANTE && (
            <nav className="nav-links">
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
              <Link to="/catalogo" className={location.pathname.startsWith('/catalogo') ? 'active' : ''}>Catálogo</Link>
              <a href="/#reglas">Reglas del préstamo</a>
              <a href="/#ayuda">Ayuda</a>
            </nav>
          )}

          {role === ROLES.ESTUDIANTE && (
            <nav className="nav-links">
              <Link to="/estudiante/catalogo" className={location.pathname.startsWith('/estudiante/catalogo') ? 'active' : ''}>Catálogo</Link>
              <Link to="/estudiante/solicitudes" className={location.pathname.startsWith('/estudiante/solicitudes') ? 'active' : ''}>Mis solicitudes</Link>
              <Link to="/estudiante/prestamos" className={location.pathname.startsWith('/estudiante/prestamos') ? 'active' : ''}>Mis préstamos</Link>
              <Link to="/estudiante/reservas" className={location.pathname.startsWith('/estudiante/reservas') ? 'active' : ''}>Mis reservas</Link>
              <Link to="/estudiante/reservas/calendario" className={location.pathname.includes('calendario') ? 'active' : ''}>Calendario</Link>
            </nav>
          )}

          {/* Buscador de cabecera */}
          {(role === ROLES.ESTUDIANTE || role === ROLES.ENCARGADO) && (
            <form onSubmit={handleSearch} className="header-search-form">
              <span className="search-icon">⌕</span>
              <input
                type="text"
                placeholder={role === ROLES.ENCARGADO ? "Buscar por código: INV-OSC-0042" : "Buscar equipo o código..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="header-search-input"
              />
            </form>
          )}

          {/* Acciones y Perfil */}
          <div className="header-actions">
            {role === ROLES.VISITANTE ? (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-secondary btn-header">Iniciar sesión</Link>
                <Link to="/registro" className="btn btn-primary btn-header">Crear cuenta</Link>
              </div>
            ) : role === ROLES.ESTUDIANTE ? (
              <div className="user-profile-group">
                <Link to="/estudiante/cuenta" className="user-pill" title="Ver mi cuenta">
                  <span className="user-name">{user?.nombreCompleto || 'Estudiante'}</span>
                  <div className="user-avatar">{getInitials(user?.nombreCompleto)}</div>
                </Link>
                <button 
                  onClick={() => { logout(); navigate('/'); }}
                  className="btn-logout"
                  title="Cerrar sesión"
                >
                  Salir
                </button>
              </div>
            ) : (
              <div className="encargado-header-right">
                <Link to="/encargado/solicitudes" className="counter-pill" title="Ver bandeja de solicitudes">
                  <span className="counter-label">Solicitudes pendientes</span>
                  <span className="counter-badge">{solicitudesPendientes}</span>
                </Link>
                <div className="user-pill">
                  <span className="user-name">{user?.nombreCompleto || 'Elena Rivas'} · H-102</span>
                  <div className="user-avatar user-avatar-encargado">{getInitials(user?.nombreCompleto || 'Elena Rivas')}</div>
                </div>
                <button 
                  onClick={() => { logout(); navigate('/'); }}
                  className="btn-logout"
                  title="Cerrar sesión"
                >
                  Salir
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
