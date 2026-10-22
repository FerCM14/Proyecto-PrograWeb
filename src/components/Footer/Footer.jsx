import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ROLES, CONSTANTES_SISTEMA } from '../../data/contratoDatos';
import './Footer.css';

export const Footer = () => {
  const { role } = useAuth();
  const isEncargado = role === ROLES.ENCARGADO;

  return (
    <footer className={`site-footer ${isEncargado ? 'footer-encargado' : ''}`}>
      <div className="footer-inner container-1600">
        <div className="footer-left">
          <span className="footer-brand">Almacén de Equipos</span>
          <span className="footer-separator">·</span>
          <span>Facultad de Ingeniería</span>
          <span className="footer-separator">·</span>
          <span>Universidad de Lima</span>
          {!isEncargado && (
            <>
              <span className="footer-separator">·</span>
              <span className="footer-address">Av. Javier Prado Este 4600, Santiago de Surco</span>
            </>
          )}
        </div>

        <div className="footer-right">
          {isEncargado ? (
            <div className="footer-encargado-links">
              <a href="#manual" onClick={(e) => { e.preventDefault(); alert('Manual del Encargado de Almacén - Versión 2.4 (PDF)'); }}>
                Manual del encargado
              </a>
              <span className="footer-separator">·</span>
              <span>Soporte: {CONSTANTES_SISTEMA.SOPORTE_SISTEMAS}</span>
              <span className="footer-separator">·</span>
              <span>Última sincronización: 14/09/2026 08:05</span>
            </div>
          ) : (
            <div className="footer-public-links">
              <a href="#reglamento" onClick={(e) => { e.preventDefault(); alert('Reglamento de Préstamo de Equipos de Laboratorio - Campus Monterrico'); }}>
                Reglamento de préstamo
              </a>
              <span className="footer-separator">·</span>
              <a href={`mailto:${CONSTANTES_SISTEMA.CORREO_CONTACTO}`}>
                {CONSTANTES_SISTEMA.CORREO_CONTACTO}
              </a>
              <span className="footer-separator">·</span>
              <span>Anexo {CONSTANTES_SISTEMA.ANEXO}</span>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
