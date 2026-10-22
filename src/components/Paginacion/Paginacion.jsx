import React from 'react';
import './Paginacion.css';

export const Paginacion = ({
  paginaActual = 1,
  totalPaginas = 1,
  totalItems = 0,
  itemsPorPagina = 8,
  onCambiarPagina,
  entidadNombre = 'elementos'
}) => {
  if (totalItems === 0) return null;

  const inicio = (paginaActual - 1) * itemsPorPagina + 1;
  const fin = Math.min(paginaActual * itemsPorPagina, totalItems);

  const paginas = [];
  for (let i = 1; i <= totalPaginas; i++) {
    paginas.push(i);
  }

  return (
    <div className="paginacion-container">
      <div className="paginacion-info">
        Mostrando {inicio} a {fin} de {totalItems} {entidadNombre}
      </div>

      <div className="paginacion-controles">
        <button
          type="button"
          className="pag-btn"
          disabled={paginaActual <= 1}
          onClick={() => onCambiarPagina(paginaActual - 1)}
          aria-label="Página anterior"
        >
          ‹
        </button>

        {paginas.map(p => (
          <button
            key={p}
            type="button"
            className={`pag-btn ${paginaActual === p ? 'active' : ''}`}
            onClick={() => onCambiarPagina(p)}
          >
            {p}
          </button>
        ))}

        <button
          type="button"
          className="pag-btn"
          disabled={paginaActual >= totalPaginas}
          onClick={() => onCambiarPagina(paginaActual + 1)}
          aria-label="Página siguiente"
        >
          ›
        </button>
      </div>
    </div>
  );
};
