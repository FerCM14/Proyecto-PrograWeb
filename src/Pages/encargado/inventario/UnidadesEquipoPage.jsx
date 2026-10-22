import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import { SidebarEncargado } from '../../../components/SideBarEncargado/SidebarEncargado';
import { FilaUnidad } from '../../../components/FilaUnidad/FilaUnidad';
import { EstadoVacio } from '../../../components/EstadoVacio/EstadoVacio';
import { ModalCambiarEstadoUnidad } from '../../../components/Modales/ModalCambiarEstadoUnidad';
import { Notificacion } from '../../../components/Notificacion/Notificacion';
import { useEquipo } from '../../../context/EquipoContext';
import { useUnidad } from '../../../context/UnidadContext';
import { ESTADOS_UNIDAD } from '../../../data/contratoDatos';
import './Inventario.css';

export const UnidadesEquipoPage = () => {
  const { id } = useParams();
  const { getEquipoById } = useEquipo();
  const { getUnidadesPorEquipo, agregarUnidad, cambiarEstadoUnidad } = useUnidad();

  const equipo = getEquipoById(id);
  const unidades = getUnidadesPorEquipo(id);

  const [unidadAEditar, setUnidadAEditar] = useState(null);
  const [modalNuevaUnidad, setModalNuevaUnidad] = useState(false);
  const [nuevoCodigo, setNuevoCodigo] = useState('');
  const [nuevaUbicacion, setNuevaUbicacion] = useState('Almacén H-102 · anaquel 3');
  const [nuevoEstado, setNuevoEstado] = useState(ESTADOS_UNIDAD.DISPONIBLE);
  const [nuevasObs, setNuevasObs] = useState('');
  const [errorModal, setErrorModal] = useState(null);
  const [notif, setNotif] = useState(null);

  if (!equipo) {
    return (
      <div className="page-wrapper">
        <Header />
        <div className="encargado-layout">
          <SidebarEncargado />
          <main className="encargado-content">
            <h2>Equipo no encontrado</h2>
            <Link to="/encargado/inventario" className="btn btn-primary" style={{ marginTop: '16px' }}>
              Volver al inventario
            </Link>
          </main>
        </div>
        <Footer />
      </div>
    );
  }

  const handleCrearUnidad = (e) => {
    e.preventDefault();
    setErrorModal(null);
    try {
      agregarUnidad(equipo.id, {
        codigo: nuevoCodigo,
        ubicacion: nuevaUbicacion,
        estado: nuevoEstado,
        observaciones: nuevasObs
      });
      setNotif({ tipo: 'success', mensaje: `Unidad ${nuevoCodigo.toUpperCase()} registrada con éxito.` });
      setModalNuevaUnidad(false);
      setNuevoCodigo('');
      setNuevasObs('');
    } catch (err) {
      setErrorModal(err.message);
    }
  };

  const handleGuardarCambioEstado = (codigo, estado, obs) => {
    cambiarEstadoUnidad(codigo, estado, obs);
    setNotif({ tipo: 'success', mensaje: `Estado de la unidad ${codigo} actualizado a «${estado}».` });
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
                {equipo.marca} · {equipo.modelo} · {unidades.length} unidades registradas · Almacén H-102
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Link to={`/encargado/inventario/${equipo.id}/editar`} className="btn btn-secondary">
                Editar equipo
              </Link>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setNuevoCodigo(`${equipo.codigoBase}-00${unidades.length + 40}`);
                  setModalNuevaUnidad(true);
                }}
              >
                Nueva unidad
              </button>
            </div>
          </div>

          {/* Barra de pestañas */}
          <div className="tab-nav-bar">
            <Link to={`/encargado/inventario/${equipo.id}/unidades`} className="tab-nav-item active">
              Unidades ({unidades.length})
            </Link>
            <Link to={`/encargado/inventario/${equipo.id}/condiciones`} className="tab-nav-item">
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

          {/* Tabla de Unidades */}
          {unidades.length > 0 ? (
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>CÓDIGO</th>
                    <th>UBICACIÓN</th>
                    <th>ESTADO</th>
                    <th>OBSERVACIONES</th>
                    <th>PRÉSTAMO VIGENTE</th>
                    <th style={{ textAlign: 'right' }}>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {unidades.map(u => (
                    <FilaUnidad
                      key={u.codigo}
                      unidad={u}
                      onCambiarEstado={(unidad) => setUnidadAEditar(unidad)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EstadoVacio
              icono="+"
              titulo="Este equipo aún no tiene unidades"
              descripcion="Registra al menos una unidad con su código de inventario para que aparezca en el catálogo y los estudiantes puedan solicitarla."
              accionTexto="Registrar primera unidad"
              onAccion={() => {
                setNuevoCodigo(`${equipo.codigoBase}-0001`);
                setModalNuevaUnidad(true);
              }}
            />
          )}

          {/* Modal Cambiar Estado */}
          <ModalCambiarEstadoUnidad
            isOpen={!!unidadAEditar}
            onClose={() => setUnidadAEditar(null)}
            unidad={unidadAEditar}
            onGuardar={handleGuardarCambioEstado}
          />

          {/* Modal Alta de Unidad */}
          {modalNuevaUnidad && (
            <div className="modal-overlay" onClick={() => setModalNuevaUnidad(false)}>
              <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h3 className="modal-title">Registrar nueva unidad · {equipo.nombre}</h3>
                  <button type="button" className="modal-close-btn" onClick={() => setModalNuevaUnidad(false)}>✕</button>
                </div>

                <form onSubmit={handleCrearUnidad}>
                  <div className="modal-body">
                    {errorModal && <div className="modal-danger-box">{errorModal}</div>}

                    <div className="form-group">
                      <label className="form-label">CÓDIGO DE INVENTARIO (ÚNICO)</label>
                      <input
                        type="text"
                        className="form-input font-mono"
                        value={nuevoCodigo}
                        onChange={(e) => setNuevoCodigo(e.target.value)}
                        placeholder="Ej. INV-OSC-0047"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">UBICACIÓN FÍSICA</label>
                      <input
                        type="text"
                        className="form-input"
                        value={nuevaUbicacion}
                        onChange={(e) => setNuevaUbicacion(e.target.value)}
                        placeholder="Almacén H-102 · anaquel 3"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">ESTADO INICIAL</label>
                      <select
                        className="form-select"
                        value={nuevoEstado}
                        onChange={(e) => setNuevoEstado(e.target.value)}
                      >
                        <option value={ESTADOS_UNIDAD.DISPONIBLE}>Disponible</option>
                        <option value={ESTADOS_UNIDAD.MANTENIMIENTO}>En mantenimiento</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">OBSERVACIONES</label>
                      <textarea
                        className="form-textarea"
                        value={nuevasObs}
                        onChange={(e) => setNuevasObs(e.target.value)}
                        placeholder="Detalles sobre accesorios, calibración o estado..."
                      />
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setModalNuevaUnidad(false)}>
                      Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Registrar unidad
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};
