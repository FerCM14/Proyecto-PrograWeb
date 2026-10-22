import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const NoEncontradaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Header />

      <main className="container-1600" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary-dark)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>
          ?
        </div>

        <span className="form-label" style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
          ERROR 404 · PÁGINA NO ENCONTRADA
        </span>

        <h1 className="page-title" style={{ marginBottom: '16px' }}>
          No encontramos esta página
        </h1>

        <p className="body-text" style={{ color: 'var(--text-muted)', maxWidth: '520px', marginBottom: '32px' }}>
          El enlace pudo haber cambiado o la ficha del equipo ya no está publicada en el catálogo institucional.
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            Ir al inicio
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/catalogo')}
          >
            Buscar un equipo
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};
