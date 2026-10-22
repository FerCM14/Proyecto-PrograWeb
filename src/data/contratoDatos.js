/**
 * Contrato de Datos Oficial - Almacén de Equipos ULIMA
 * Define los enums, categorías, estados, identificadores y constantes compartidas.
 */

export const ROLES = {
  VISITANTE: 'visitante',
  ESTUDIANTE: 'estudiante',
  ENCARGADO: 'encargado'
};

export const CATEGORIAS_EQUIPO = [
  'Medición',
  'Audiovisual',
  'Robótica',
  'Cómputo',
  'Redes',
  'Laboratorio de física'
];

export const ESTADOS_UNIDAD = {
  DISPONIBLE: 'Disponible',
  PRESTADA: 'Prestada',
  MANTENIMIENTO: 'Mantenimiento',
  DADA_DE_BAJA: 'Dada de baja'
};

export const ESTADOS_SOLICITUD = {
  ENVIADA: 'Enviada',
  APROBADA: 'Aprobada',
  RECHAZADA: 'Rechazada',
  ENTREGADA: 'Entregada',
  DEVUELTA: 'Devuelta'
};

export const ESTADOS_PRESTAMO = {
  EN_CURSO: 'en_curso',
  VENCE_HOY: 'vence_hoy',
  VENCIDO: 'vencido',
  DEVUELTO: 'devuelto'
};

export const ESTADOS_RESERVA = {
  CONFIRMADA: 'Confirmada',
  EN_ESPERA: 'En espera',
  CUMPLIDA: 'Cumplida',
  CANCELADA: 'Cancelada'
};

export const ESTADOS_USUARIO = {
  HABILITADO: 'Habilitado',
  CON_DEUDA: 'Con deuda',
  BLOQUEADO: 'Bloqueado',
  PENDIENTE: 'Pendiente de aprobación'
};

export const CONSTANTES_SISTEMA = {
  ALMACEN_DEFECTO: 'Almacén H-102',
  ANEXO: '3120',
  CORREO_CONTACTO: 'almacen.equipos@ulima.edu.pe',
  SOPORTE_SISTEMAS: 'sistemas@ulima.edu.pe',
  DOMINIO_ESTUDIANTE: '@aloe.ulima.edu.pe',
  DOMINIO_ENCARGADO: '@ulima.edu.pe',
  HORARIO_ATENCION: 'lunes a viernes de 08:00 a 19:00',
  FECHA_SIMULADA_HOY: '2026-09-14'
};
