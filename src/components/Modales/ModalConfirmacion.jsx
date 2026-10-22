import React from 'react';
import './Modales.css';

export const ModalConfirmacion = ({
  isOpen,
  onClose,
  onConfirm,
  titulo = 'Confirmar acción',
  mensaje = '¿Estás seguro de que deseas realizar esta operación?',
  textoConfirmar = 'Confirmar',
  textoCancelar = 'Cancelar',
  esDestructivo = false
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{titulo}</h3>
          <button type="button" className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <p>{mensaje}</p>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            {textoCancelar}
          </button>
          <button
            type="button"
            className={`btn ${esDestructivo ? 'btn-danger' : 'btn-primary'}`}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  );
};
