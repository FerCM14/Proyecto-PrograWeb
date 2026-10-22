import React, { useState } from 'react';
import { ESTADOS_UNIDAD } from '../../data/contratoDatos';
import './Modales.css';

export const ModalCambiarEstadoUnidad = ({
  isOpen,
  onClose,
  unidad,
  onGuardar
}) => {
  const [nuevoEstado, setNuevoEstado] = useState(unidad?.estado || ESTADOS_UNIDAD.DISPONIBLE);
  const [observaciones, setObservaciones] = useState(unidad?.observaciones || '');

  if (!isOpen || !unidad) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar(unidad.codigo, nuevoEstado, observaciones);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Cambiar estado de unidad · {unidad.codigo}</h3>
          <button type="button" className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label className="form-label">ESTADO DE LA UNIDAD</label>
              <select
                className="form-select"
                value={nuevoEstado}
                onChange={(e) => setNuevoEstado(e.target.value)}
              >
                <option value={ESTADOS_UNIDAD.DISPONIBLE}>Disponible</option>
                <option value={ESTADOS_UNIDAD.MANTENIMIENTO}>En mantenimiento</option>
                <option value={ESTADOS_UNIDAD.DADA_DE_BAJA}>Dada de baja</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">MOTIVO / OBSERVACIONES</label>
              <textarea
                className="form-textarea"
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
                placeholder="Indica el motivo técnico del cambio de estado..."
                required
              />
            </div>

            {nuevoEstado === ESTADOS_UNIDAD.DADA_DE_BAJA && (
              <div className="modal-danger-box">
                Atención: Dar de baja una unidad la retirará permanentemente de la disponibilidad para préstamos.
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
