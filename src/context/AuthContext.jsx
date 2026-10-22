import React, { createContext, useContext, useState, useEffect } from 'react';
import { ROLES, CONSTANTES_SISTEMA, ESTADOS_USUARIO } from '../data/contratoDatos';
import { INITIAL_USUARIOS } from '../data/usuariosData';
import { getStorageData, setStorageData } from './storageHelper';

const STORAGE_KEY_AUTH = 'ulima_almacen_auth_session';
const STORAGE_KEY_USUARIOS = 'ulima_almacen_usuarios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Inicialización de usuarios registrados
  const [usuarios, setUsuarios] = useState(() => 
    getStorageData(STORAGE_KEY_USUARIOS, INITIAL_USUARIOS)
  );

  // Sesión actual
  const [user, setUser] = useState(() => {
    const saved = getStorageData(STORAGE_KEY_AUTH, null);
    if (saved) return saved;
    // Por defecto inicia como Estudiante (Renzo Mendoza) para permitir evaluar de inmediato
    return INITIAL_USUARIOS.find(u => u.codigo === '20213456') || null;
  });

  const role = user ? user.rol : ROLES.VISITANTE;
  const isAuthenticated = !!user;

  // Sincronizar usuarios en localStorage
  useEffect(() => {
    setStorageData(STORAGE_KEY_USUARIOS, usuarios);
  }, [usuarios]);

  // Sincronizar sesión en localStorage
  useEffect(() => {
    setStorageData(STORAGE_KEY_AUTH, user);
  }, [user]);

  /**
   * Inicio de sesión con validaciones de rol y estado
   */
  const login = (correo, password) => {
    const correoNormalizado = (correo || '').trim().toLowerCase();
    const usuarioEncontrado = usuarios.find(
      u => u.correo.toLowerCase() === correoNormalizado
    );

    if (!usuarioEncontrado) {
      throw new Error('Correo no registrado. Verifica tus datos o crea una cuenta.');
    }

    if (usuarioEncontrado.password !== password) {
      throw new Error('Correo o contraseña incorrectos. Te quedan 4 intentos.');
    }

    if (usuarioEncontrado.estado === ESTADOS_USUARIO.PENDIENTE) {
      throw new Error('Tu cuenta de encargado se encuentra en estado «Pendiente de aprobación» por el jefe de laboratorio.');
    }

    // Si tiene deuda o está bloqueado, se permite ingresar pero se alertan las restricciones
    setUser(usuarioEncontrado);
    return usuarioEncontrado;
  };

  /**
   * Cierre de sesión
   */
  const logout = () => {
    setUser(null);
  };

  /**
   * Registro de Estudiante (@aloe.ulima.edu.pe)
   */
  const registroEstudiante = ({ nombres, apellidos, carrera, ciclo, correo, password, confirmarPassword, aceptaReglamento }) => {
    const correoNormalizado = (correo || '').trim().toLowerCase();

    if (!aceptaReglamento) {
      throw new Error('Debes aceptar el reglamento de préstamo de equipos.');
    }

    if (!correoNormalizado.endsWith(CONSTANTES_SISTEMA.DOMINIO_ESTUDIANTE)) {
      throw new Error(`El correo debe terminar en ${CONSTANTES_SISTEMA.DOMINIO_ESTUDIANTE}`);
    }

    if (password !== confirmarPassword) {
      throw new Error('Las contraseñas no coinciden.');
    }

    const passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passRegex.test(password)) {
      throw new Error('La contraseña debe tener mínimo 8 caracteres, una mayúscula y un número.');
    }

    const existe = usuarios.some(u => u.correo.toLowerCase() === correoNormalizado);
    if (existe) {
      throw new Error(`Ya existe una cuenta con el correo ${correoNormalizado}. Inicia sesión o recupera tu contraseña.`);
    }

    const nuevoEstudiante = {
      id: Date.now(),
      codigo: '2026' + Math.floor(1000 + Math.random() * 9000),
      nombre: nombres,
      apellidos: apellidos,
      nombreCompleto: `${nombres} ${apellidos}`,
      carrera: carrera || 'Ing. Electrónica',
      ciclo: ciclo || '1.°',
      celular: '',
      correo: correoNormalizado,
      password: password,
      rol: ROLES.ESTUDIANTE,
      prestamos: 0,
      retrasos: 0,
      deuda: 0,
      estado: ESTADOS_USUARIO.HABILITADO,
      bloqueado: false
    };

    setUsuarios(prev => [...prev, nuevoEstudiante]);
    return nuevoEstudiante;
  };

  /**
   * Registro de Encargado (@ulima.edu.pe) - queda en Pendiente de aprobación
   */
  const registroEncargado = ({ nombres, apellidos, correo, password, confirmarPassword, almacenAsignado, anexoTelefonico }) => {
    const correoNormalizado = (correo || '').trim().toLowerCase();

    if (!correoNormalizado.endsWith(CONSTANTES_SISTEMA.DOMINIO_ENCARGADO)) {
      throw new Error(`El correo debe terminar en ${CONSTANTES_SISTEMA.DOMINIO_ENCARGADO}`);
    }

    if (password !== confirmarPassword) {
      throw new Error('Las contraseñas no coinciden.');
    }

    const passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passRegex.test(password)) {
      throw new Error('La contraseña debe tener mínimo 8 caracteres, una mayúscula y un número.');
    }

    const existe = usuarios.some(u => u.correo.toLowerCase() === correoNormalizado);
    if (existe) {
      throw new Error(`Ya existe una cuenta con el correo ${correoNormalizado}.`);
    }

    const nuevoEncargado = {
      id: Date.now(),
      codigo: 'ENC-' + Math.floor(1000 + Math.random() * 9000),
      nombre: nombres,
      apellidos: apellidos,
      nombreCompleto: `${nombres} ${apellidos}`,
      almacenAsignado: almacenAsignado || 'Almacén H-102',
      anexoTelefonico: anexoTelefonico || '3120',
      correo: correoNormalizado,
      password: password,
      rol: ROLES.ENCARGADO,
      estado: ESTADOS_USUARIO.PENDIENTE,
      bloqueado: false
    };

    setUsuarios(prev => [...prev, nuevoEncargado]);
    return nuevoEncargado;
  };

  /**
   * Selector rápido para demostración académica
   */
  const setRoleQuickDemo = (targetRole, specificUserId = null) => {
    if (targetRole === ROLES.VISITANTE) {
      setUser(null);
      return;
    }

    if (specificUserId) {
      const found = usuarios.find(u => u.id === specificUserId);
      if (found) {
        setUser(found);
        return;
      }
    }

    if (targetRole === ROLES.ESTUDIANTE) {
      // Renzo Mendoza por defecto
      const renzo = usuarios.find(u => u.codigo === '20213456') || usuarios.find(u => u.rol === ROLES.ESTUDIANTE);
      setUser(renzo);
    } else if (targetRole === ROLES.ENCARGADO) {
      // Elena Rivas por defecto
      const elena = usuarios.find(u => u.rol === ROLES.ENCARGADO);
      setUser(elena);
    }
  };

  /**
   * Actualizar perfil del usuario conectado
   */
  const actualizarPerfil = (datosActualizados) => {
    if (!user) return;
    const actualizado = { ...user, ...datosActualizados };
    setUser(actualizado);
    setUsuarios(prev => prev.map(u => u.id === user.id ? actualizado : u));
  };

  /**
   * Cambiar contraseña del usuario conectado
   */
  const cambiarPassword = (passwordActual, nuevaPassword) => {
    if (!user) throw new Error('No hay sesión activa.');
    if (user.password !== passwordActual) {
      throw new Error('La contraseña actual es incorrecta.');
    }
    const passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passRegex.test(nuevaPassword)) {
      throw new Error('La nueva contraseña debe tener al menos 8 caracteres, una mayúscula y un número.');
    }
    const actualizado = { ...user, password: nuevaPassword };
    setUser(actualizado);
    setUsuarios(prev => prev.map(u => u.id === user.id ? actualizado : u));
  };

  /**
   * Recuperación de contraseña simulada
   */
  const recuperarPassword = (correo, nuevaPassword) => {
    const correoNormalizado = (correo || '').trim().toLowerCase();
    const usuario = usuarios.find(u => u.correo.toLowerCase() === correoNormalizado);
    if (!usuario) {
      throw new Error('El correo ingresado no pertenece a una cuenta registrada.');
    }
    setUsuarios(prev => prev.map(u => u.correo.toLowerCase() === correoNormalizado ? { ...u, password: nuevaPassword } : u));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        usuarios,
        setUsuarios,
        login,
        logout,
        registroEstudiante,
        registroEncargado,
        setRoleQuickDemo,
        actualizarPerfil,
        cambiarPassword,
        recuperarPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};
