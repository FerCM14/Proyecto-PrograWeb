import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CONSTANTES_SISTEMA } from '../../data/contratoDatos';

export const AccesoDenegadoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Header />

      <main className="container-1600" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ width: '48px', height: '48px', backgroundColor: '#FEF3C7', color: '#B7791F', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>
          !
        </div>

        <span className="form-label" style={{ color: 'var(--danger)', marginBottom: '8px' }}>
          ERROR 403 · ACCESO DENEGADO
        </span>

        <h1 className="page-title" style={{ marginBottom: '16px' }}>
          No tienes permiso para ver esta página
        </h1>

        <p className="body-text" style={{ color: 'var(--text-muted)', maxWidth: '540px', marginBottom: '32px' }}>
          Esta sección pertenece al panel del encargado de almacén o requiere privilegios administrativos. Si crees que es un error, escribe a <strong>{CONSTANTES_SISTEMA.CORREO_CONTACTO}</strong> indicando tu código de estudiante.
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/estudiante/catalogo')}
          >
            Ir al catálogo
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/estudiante/solicitudes')}
          >
            Ver mis solicitudes
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};
