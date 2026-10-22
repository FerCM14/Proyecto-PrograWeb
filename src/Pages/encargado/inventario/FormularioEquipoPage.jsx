import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import { SidebarEncargado } from '../../../components/SideBarEncargado/SidebarEncargado';
import { Notificacion } from '../../../components/Notificacion/Notificacion';
import { useEquipo } from '../../../context/EquipoContext';
import { CATEGORIAS_EQUIPO } from '../../../data/contratoDatos';
import './Inventario.css';

export const FormularioEquipoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getEquipoById, crearEquipo, editarEquipo } = useEquipo();

  const esEdicion = !!id;
  const equipoExistente = esEdicion ? getEquipoById(id) : null;

  const [nombre, setNombre] = useState(equipoExistente?.nombre || '');
  const [categoria, setCategoria] = useState(equipoExistente?.categoria || 'Redes');
  const [marca, setMarca] = useState(equipoExistente?.marca || '');
  const [modelo, setModelo] = useState(equipoExistente?.modelo || '');
  const [descripcion, setDescripcion] = useState(
    equipoExistente?.descripcion ||
    'Verificador de cableado y certificación básica de enlaces Ethernet. Para las prácticas del curso de Redes y Comunicaciones.'
  );

  const [accesorios, setAccesorios] = useState(
    equipoExistente?.accesorios || ['Estuche rígido', 'Cargador y cable de red', 'Batería de repuesto']
  );
  const [nuevoAccesorio, setNuevoAccesorio] = useState('');
  const [imagenUrl, setImagenUrl] = useState(
    equipoExistente?.imagen || 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80'
  );

  const [errores, setErrores] = useState({});
  const [notif, setNotif] = useState(null);

  const handleAgregarAccesorio = (e) => {
    e.preventDefault();
    if (nuevoAccesorio.trim()) {
      setAccesorios(prev => [...prev, nuevoAccesorio.trim()]);
      setNuevoAccesorio('');
    }
  };

  const handleQuitarAccesorio = (index) => {
    setAccesorios(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }

    if (!marca.trim()) {
      nuevosErrores.marca = 'La marca es obligatoria.';
    }

    if (!modelo.trim()) {
      nuevosErrores.modelo = 'El modelo es obligatorio.';
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    try {
      const codigoBase = 'INV-' + (nombre.substring(0, 3).toUpperCase());
      const payload = {
        codigoBase,
        nombre: nombre.trim(),
        categoria,
        marca: marca.trim(),
        modelo: modelo.trim(),
        descripcion: descripcion.trim(),
        accesorios,
        imagen: imagenUrl,
        duracionMaxima: equipoExistente?.duracionMaxima || 7,
        requiereAutorizacion: equipoExistente?.requiereAutorizacion ?? true,
        admiteRenovacion: equipoExistente?.admiteRenovacion ?? false,
        penalidadPorDia: equipoExistente?.penalidadPorDia || 15.00
      };

      if (esEdicion) {
        editarEquipo(id, payload);
        setNotif({ tipo: 'success', mensaje: 'Equipo actualizado correctamente en el inventario.' });
      } else {
        crearEquipo(payload);
        setNotif({ tipo: 'success', mensaje: 'Equipo registrado con éxito en el catálogo.' });
      }

      setTimeout(() => {
        navigate('/encargado/inventario');
      }, 1200);
    } catch (err) {
      setErrores({ general: err.message });
    }
  };

  return (
    <div className="page-wrapper">
      <Header />

      <div className="encargado-layout">
        <SidebarEncargado />

        <main className="encargado-content">
          <div className="breadcrumb-nav">
            <Link to="/encargado/inventario">Inventario</Link> / <strong>{esEdicion ? 'Editar equipo' : 'Nuevo equipo'}</strong>
          </div>

          <h1 className="page-title" style={{ marginBottom: '24px' }}>
            {esEdicion ? `Editar equipo · ${equipoExistente?.nombre}` : 'Nuevo equipo'}
          </h1>

          {notif && (
            <Notificacion
              tipo={notif.tipo}
              mensaje={notif.mensaje}
            />
          )}

          {errores.general && (
            <div className="modal-danger-box">
              <strong>Error:</strong> {errores.general}
            </div>
          )}

          <div style={{ maxWidth: '900px' }} className="estudiante-card">
            <form onSubmit={handleSubmit}>
              <h2 className="section-title" style={{ fontSize: '15px', marginBottom: '16px' }}>IDENTIFICACIÓN</h2>

              <div className="form-group">
                <label className="form-label">NOMBRE DEL EQUIPO</label>
                <input
                  type="text"
                  className={`form-input ${errores.nombre ? 'error' : ''}`}
                  placeholder="Ej. Analizador de redes portátil"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                {errores.nombre && <div className="form-field-error">{errores.nombre}</div>}
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">CATEGORÍA</label>
                  <select
                    className="form-select"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                  >
                    {CATEGORIAS_EQUIPO.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">MARCA</label>
                  <input
                    type="text"
                    className={`form-input ${errores.marca ? 'error' : ''}`}
                    placeholder="Ej. NetAlly"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                    required
                  />
                  {errores.marca && <div className="form-field-error">{errores.marca}</div>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">MODELO</label>
                <input
                  type="text"
                  className={`form-input ${errores.modelo ? 'error' : ''}`}
                  placeholder="Ej. LinkRunner AT 2000"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  required
                />
                {errores.modelo && <div className="form-field-error">{errores.modelo}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">DESCRIPCIÓN</label>
                <textarea
                  className="form-textarea"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  maxLength={400}
                  required
                />
                <span className="help-text">Máximo 400 caracteres. Se muestra en la ficha pública del catálogo.</span>
              </div>

              {/* Accesorios */}
              <div className="form-group" style={{ marginTop: '20px' }}>
                <label className="form-label">ACCESORIOS INCLUIDOS</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                  {accesorios.map((acc, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                      <span>{acc}</span>
                      <button
                        type="button"
                        className="btn btn-tertiary"
                        style={{ color: 'var(--danger)', fontSize: '12px' }}
                        onClick={() => handleQuitarAccesorio(idx)}
                      >
                        Quitar
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Nombre del accesorio..."
                    value={nuevoAccesorio}
                    onChange={(e) => setNuevoAccesorio(e.target.value)}
                  />
                  <button type="button" className="btn btn-secondary" onClick={handleAgregarAccesorio}>
                    Agregar
                  </button>
                </div>
              </div>

              {/* Fotografía */}
              <div className="form-group" style={{ marginTop: '20px' }}>
                <label className="form-label">FOTOGRAFÍA (URL)</label>
                <input
                  type="url"
                  className="form-input"
                  value={imagenUrl}
                  onChange={(e) => setImagenUrl(e.target.value)}
                  placeholder="https://..."
                />
                <span className="help-text">JPG o PNG con encuadre cuadrado (1:1).</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '32px' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => navigate('/encargado/inventario')}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => alert('Borrador guardado localmente.')}
                >
                  Guardar borrador
                </button>
                <button type="submit" className="btn btn-primary">
                  {esEdicion ? 'Actualizar equipo' : 'Guardar equipo'}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
