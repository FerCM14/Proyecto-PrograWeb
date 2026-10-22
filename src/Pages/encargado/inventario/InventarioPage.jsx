import React, { useState, useMemo } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import { SidebarEncargado } from '../../../components/SideBarEncargado/SidebarEncargado';
import { EstadoVacio } from '../../../components/EstadoVacio/EstadoVacio';
import { Paginacion } from '../../../components/Paginacion/Paginacion';
import { useEquipo } from '../../../context/EquipoContext';
import { useUnidad } from '../../../context/UnidadContext';
import { CATEGORIAS_EQUIPO } from '../../../data/contratoDatos';
import './Inventario.css';

export const InventarioPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { equipos } = useEquipo();
  const { unidades, getConteoUnidades } = useUnidad();

  const [filtroCategoria, setFiltroCategoria] = useState('todas');
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [busqueda, setBusqueda] = useState(searchParams.get('q') || '');
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 8;

  // Filtrado
  const equiposFiltrados = useMemo(() => {
    return equipos.filter(eq => {
      if (filtroCategoria !== 'todas' && eq.categoria !== filtroCategoria) {
        return false;
      }

      const conteo = getConteoUnidades(eq.id);
      if (filtroEstado === 'disponibles' && conteo.libres === 0) return false;
      if (filtroEstado === 'prestadas' && conteo.prestadas === 0) return false;
      if (filtroEstado === 'mantenimiento' && conteo.mantenimiento === 0) return false;
      if (filtroEstado === 'baja' && conteo.baja === 0) return false;

      if (busqueda.trim()) {
        const q = busqueda.trim().toLowerCase();
        const coincideEquipo = eq.nombre.toLowerCase().includes(q) ||
          eq.marca.toLowerCase().includes(q) ||
          eq.modelo.toLowerCase().includes(q) ||
          eq.codigoBase.toLowerCase().includes(q);

        // Búsqueda también por código de unidad de ese equipo
        const unidadesEq = unidades.filter(u => String(u.equipoId) === String(eq.id));
        const coincideUnidad = unidadesEq.some(u => u.codigo.toLowerCase().includes(q));

        if (!coincideEquipo && !coincideUnidad) return false;
      }

      return true;
    });
  }, [equipos, filtroCategoria, filtroEstado, busqueda, unidades, getConteoUnidades]);

  const totalPaginas = Math.ceil(equiposFiltrados.length / itemsPorPagina) || 1;
  const equiposPaginados = equiposFiltrados.slice(
    (paginaActual - 1) * itemsPorPagina,
    paginaActual * itemsPorPagina
  );

  return (
    <div className="page-wrapper">
      <Header />

      <div className="encargado-layout">
        <SidebarEncargado />

        <main className="encargado-content">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <h1 className="page-title">Inventario de equipos</h1>
              <p className="help-text" style={{ marginTop: '4px' }}>
                {equipos.length} modelos · {unidades.length} unidades registradas en el Almacén H-102
              </p>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/encargado/inventario/nuevo')}
            >
              Nuevo equipo
            </button>
          </div>

          {/* Barra de Filtros y Búsqueda */}
          <div className="inventario-filter-bar">
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <select
                className="form-select"
                style={{ width: '180px', height: '38px' }}
                value={filtroCategoria}
                onChange={(e) => { setFiltroCategoria(e.target.value); setPaginaActual(1); }}
              >
                <option value="todas">Categoría: todas</option>
                {CATEGORIAS_EQUIPO.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <select
                className="form-select"
                style={{ width: '180px', height: '38px' }}
                value={filtroEstado}
                onChange={(e) => { setFiltroEstado(e.target.value); setPaginaActual(1); }}
              >
                <option value="todos">Estado: todos</option>
                <option value="disponibles">Con unidades libres</option>
                <option value="prestadas">Con prestadas</option>
                <option value="mantenimiento">En mantenimiento</option>
                <option value="baja">Dadas de baja</option>
              </select>
            </div>

            <div style={{ position: 'relative', width: '280px' }}>
              <input
                type="text"
                className="form-input"
                style={{ height: '38px', paddingLeft: '32px' }}
                placeholder="⌕ Código de inventario o nombre"
                value={busqueda}
                onChange={(e) => { setBusqueda(e.target.value); setPaginaActual(1); }}
              />
            </div>
          </div>

          {/* Tabla de Equipos */}
          {equiposPaginados.length > 0 ? (
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th style={{ width: '60px' }}>FOTO</th>
                    <th>EQUIPO</th>
                    <th>MARCA Y MODELO</th>
                    <th>CATEGORÍA</th>
                    <th>UNIDADES POR ESTADO</th>
                    <th style={{ textAlign: 'right' }}>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {equiposPaginados.map(eq => {
                    const c = getConteoUnidades(eq.id);
                    return (
                      <tr key={eq.id}>
                        <td>
                          <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius)', overflow: 'hidden', backgroundColor: 'var(--bg)' }}>
                            <img src={eq.imagen} alt={eq.nombre} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        </td>
                        <td>
                          <Link to={`/encargado/inventario/${eq.id}/unidades`} style={{ fontWeight: 600, color: 'var(--text)' }}>
                            {eq.nombre}
                          </Link>
                          <div className="font-mono help-text">{eq.codigoBase}</div>
                        </td>
                        <td>
                          <span style={{ color: 'var(--text)' }}>{eq.marca}</span> · <span style={{ color: 'var(--text-muted)' }}>{eq.modelo}</span>
                        </td>
                        <td>
                          <span className="duracion-tag">{eq.categoria}</span>
                        </td>
                        <td>
                          <div style={{ fontSize: '13px', lineHeight: '18px' }}>
                            <span style={{ color: 'var(--success)', fontWeight: 600 }}>{c.libres} libres</span>
                            {c.prestadas > 0 && <> · <span style={{ color: 'var(--info)' }}>{c.prestadas} prestadas</span></>}
                            {c.mantenimiento > 0 && <> · <span style={{ color: 'var(--warning)', fontWeight: 600 }}>{c.mantenimiento} mant.</span></>}
                            {c.baja > 0 && <> · <span style={{ color: 'var(--danger)' }}>{c.baja} de baja</span></>}
                          </div>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '8px' }}>
                            <Link to={`/encargado/inventario/${eq.id}/unidades`} className="btn-table-action">
                              Unidades
                            </Link>
                            <span style={{ color: 'var(--border)' }}>·</span>
                            <Link to={`/encargado/inventario/${eq.id}/condiciones`} className="btn-table-action">
                              Condiciones
                            </Link>
                            <span style={{ color: 'var(--border)' }}>·</span>
                            <Link to={`/encargado/inventario/${eq.id}/editar`} className="btn-table-action">
                              Editar
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <EstadoVacio
              icono="◻"
              titulo="Ningún equipo coincide con estos filtros"
              descripcion="Prueba con otra categoría o registra el primer equipo de redes."
              accionTexto="Limpiar filtros"
              onAccion={() => {
                setFiltroCategoria('todas');
                setFiltroEstado('todos');
                setBusqueda('');
              }}
            />
          )}

          <Paginacion
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            totalItems={equiposFiltrados.length}
            itemsPorPagina={itemsPorPagina}
            onCambiarPagina={(p) => setPaginaActual(p)}
            entidadNombre="equipos"
          />
        </main>
      </div>

      <Footer />
    </div>
  );
};
