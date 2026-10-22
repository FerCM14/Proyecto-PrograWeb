/**
 * Helper de persistencia seguro para LocalStorage con manejo de excepciones.
 * Aislado para facilitar la migración a servicios REST en la segunda entrega.
 */

export const getStorageData = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    if (item === null || item === undefined) return fallback;
    return JSON.parse(item);
  } catch (err) {
    console.warn(`[LocalStorage] Error al leer la clave "${key}":`, err);
    return fallback;
  }
};

export const setStorageData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`[LocalStorage] Error al guardar la clave "${key}":`, err);
  }
};
