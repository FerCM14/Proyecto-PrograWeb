import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import { SidebarEncargado } from '../../../components/SideBarEncargado/SidebarEncargado';
import { Notificacion } from '../../../components/Notificacion/Notificacion';
import { useEquipo } from '../../../context/EquipoContext';
import './Inventario.css';

export const CondicionesPrestamoPage = () => {
  const { id } = useParams();
  const { getEquipoById, actualizarCondicionesPrestamo } = useEquipo();
  const equipo = getEquipoById(id);

  const [duracionMaxima, setDuracionMaxima] = useState(equipo?.duracionMaxima || 7);
  const [requiereAutorizacion, setRequiereAutorizacion] = useState(equipo?.requiereAutorizacion ?? true);
  const [admiteRenovacion, setAdmiteRenovacion] = useState(equipo?.admiteRenovacion ?? false);
  const [penalidadPorDia, setPenalidadPorDia] = useState(equipo?.penalidadPorDia || 15.00);
  const [notif, setNotif] = useState(null);

  if (!equipo) {
    return (
      <div className="page-wrapper">
        <Header />
        <div className="encargado-layout">
          <SidebarEncargado />
          <main className="encargado-content">
            <h2>Equipo no encontrado</h2>
            <Link to="/encargado/inventario" className="btn btn-primary">Volver al inventario</Link>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  const handleGuardar = (e) => {
    e.preventDefault();
    actualizarCondicionesPrestamo(equipo.id, {
      duracionMaxima,
      requiereAutorizacion,
      admiteRenovacion,
      penalidadPorDia
    });
    setNotif({ tipo: 'success', mensaje: 'Condiciones de préstamo actualizadas con éxito.' });
  };

  return (
    <div className="page-wrapper">
      <Header />

      <div className="encargado-layout">
        <SidebarEncargado />

        <main className="encargado-content">
          <div className="breadcrumb-nav">
            <Link to="/encargado/inventario">Inventario</Link> / <span>{equipo.categoria}</span> / <strong>{equipo.nombre}</strong>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <h1 className="page-title">{equipo.nombre}</h1>
              <p className="help-text" style={{ marginTop: '4px' }}>
                {equipo.marca} · {equipo.modelo} · Configuración de políticas de entrega y retraso
              </p>
            </div>
          </div>

          {/* Barra de pestañas */}
          <div className="tab-nav-bar">
            <Link to={`/encargado/inventario/${equipo.id}/unidades`} className="tab-nav-item">
              Unidades
            </Link>
            <Link to={`/encargado/inventario/${equipo.id}/condiciones`} className="tab-nav-item active">
              Condiciones del préstamo
            </Link>
          </div>

          {notif && (
            <Notificacion
              tipo={notif.tipo}
              mensaje={notif.mensaje}
              onCerrar={() => setNotif(null)}
            />
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '32px', alignItems: 'flex-start' }}>
            
            {/* Formulario de Configuración */}
            <div className="estudiante-card">
              <form onSubmit={handleGuardar}>
                <h2 className="section-title" style={{ fontSize: '15px', marginBottom: '20px' }}>
                  PARÁMETROS DEL PRÉSTAMO
                </h2>

                <div className="form-group">
                  <label className="form-label">DURACIÓN MÁXIMA (DÍAS CALENDARIO)</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    className="form-input"
                    value={duracionMaxima}
                    onChange={(e) => setDuracionMaxima(Number(e.target.value))}
                    required
                  />
                  <span className="help-text">Tiempo límite permitido por solicitud individual.</span>
                </div>

                <div className="form-group" style={{ margin: '16px 0' }}>
                  <label className="filtro-checkbox-label">
                    <input
                      type="checkbox"
                      checked={requiereAutorizacion}
                      onChange={(e) => setRequiereAutorizacion(e.target.checked)}
                      className="filtro-checkbox"
                    />
                    <span style={{ fontWeight: 600 }}>Requiere autorización del docente</span>
                  </label>
                  <p className="help-text" style={{ marginLeft: '26px', marginTop: '4px' }}>
                    Si se activa, el estudiante debe adjuntar curso y justificación académica obligatoria.
                  </p>
                </div>

                <div className="form-group" style={{ margin: '16px 0' }}>
                  <label className="filtro-checkbox-label">
                    <input
                      type="checkbox"
                      checked={admiteRenovacion}
                      onChange={(e) => setAdmiteRenovacion(e.target.checked)}
                      className="filtro-checkbox"
                    />
                    <span style={{ fontWeight: 600 }}>Admite renovación</span>
                  </label>
                  <p className="help-text" style={{ marginLeft: '26px', marginTop: '4px' }}>
                    Permite extender el préstamo una vez si no existen reservas en lista de espera.
                  </p>
                </div>

                <div className="form-group" style={{ marginTop: '20px' }}>
                  <label className="form-label">PENALIDAD POR DÍA DE RETRASO (S/)</label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    className="form-input"
                    value={penalidadPorDia}
                    onChange={(e) => setPenalidadPorDia(Number(e.target.value))}
                    required
                  />
                  <span className="help-text">Monto diario acumulativo que se imputa a Tesorería ante devolución fuera de fecha.</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '28px' }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setDuracionMaxima(equipo.duracionMaxima);
                      setRequiereAutorizacion(equipo.requiereAutorizacion);
                      setAdmiteRenovacion(equipo.admiteRenovacion);
                      setPenalidadPorDia(equipo.penalidadPorDia);
                    }}
                  >
                    Descartar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Guardar condiciones
                  </button>
                </div>
              </form>
            </div>

            {/* Vista Previa para el Estudiante (Mockup 2.5) */}
            <div className="estudiante-card" style={{ backgroundColor: 'var(--primary-soft)', borderColor: 'rgba(23,80,92,0.25)' }}>
              <span className="form-label" style={{ color: 'var(--primary-dark)', marginBottom: '8px' }}>
                VISTA PREVIA PARA EL ESTUDIANTE
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '12px' }}>
                Condiciones de este equipo
              </h3>
              <p className="body-text" style={{ lineHeight: '24px', color: 'var(--primary-dark)' }}>
                Préstamo de hasta <strong>{duracionMaxima} días calendario</strong>.{' '}
                {requiereAutorizacion
                  ? 'Requiere la autorización del docente del curso asociado.'
                  : 'No requiere autorización docente adicional.'}{' '}
                {admiteRenovacion
                  ? 'Admite una renovación sujeta a disponibilidad.'
                  : 'No admite renovación.'}{' '}
                El retraso genera una penalidad de <strong>S/ {penalidadPorDia.toFixed(2)} por día</strong>.
              </p>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
