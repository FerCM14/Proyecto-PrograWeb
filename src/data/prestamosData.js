import { ESTADOS_PRESTAMO } from './contratoDatos';

export const INITIAL_PRESTAMOS = [
  // 1. Vencido - Camila Quispe (Mockup 4.6 y 5.1)
  {
    id: "PRE-2026-0291",
    unidadCodigo: "INV-TAB-0004",
    equipoId: 4,
    equipoNombre: "Tableta Wacom Intuos",
    estudianteId: 2,
    estudianteNombre: "Camila Quispe Andrade",
    codigoEstudiante: "20204512",
    carrera: "Ing. Industrial",
    ciclo: "8.°",
    fechaEntrega: "2026-09-07 10:15",
    fechaVencimiento: "2026-09-11 19:00",
    vencimientoTexto: "11/09/2026",
    estado: ESTADOS_PRESTAMO.VENCIDO,
    diasRetraso: 3,
    penalidadPorDia: 15.00,
    penalidadTotal: 45.00,
    penalidadPagada: false,
    accesoriosEntregados: [
      { nombre: "Lápiz digital Wacom 4K", entregado: true },
      { nombre: "Cable micro-USB", entregado: true },
      { nombre: "Estuche", entregado: true }
    ],
    observacionesEntrega: "Carcasa sin rayaduras. Lápiz verificado y sensible a la presión.",
    devolucion: null
  },
  // 2. Vencido - Alejandra Huamán (Mockup 4.6)
  {
    id: "PRE-2026-0303",
    unidadCodigo: "INV-CAM-0012",
    equipoId: 2,
    equipoNombre: "Cámara Canon EOS 90D",
    estudianteId: 3,
    estudianteNombre: "Alejandra Huamán Solís",
    codigoEstudiante: "20219087",
    carrera: "Comunicación",
    ciclo: "7.°",
    fechaEntrega: "2026-09-08 11:30",
    fechaVencimiento: "2026-09-12 19:00",
    vencimientoTexto: "12/09/2026",
    estado: ESTADOS_PRESTAMO.VENCIDO,
    diasRetraso: 2,
    penalidadPorDia: 20.00,
    penalidadTotal: 40.00,
    penalidadPagada: false,
    accesoriosEntregados: [
      { nombre: "Estuche rígido", entregado: true },
      { nombre: "Cargador", entregado: true },
      { nombre: "Batería de repuesto", entregado: true },
      { nombre: "Correa", entregado: true }
    ],
    observacionesEntrega: "Entregada con batería al 100% y lente limpio.",
    devolucion: null
  },
  // 3. Vence hoy - Lucía Paredes (Mockup 4.6)
  {
    id: "PRE-2026-0311",
    unidadCodigo: "INV-MUL-0021",
    equipoId: 5,
    equipoNombre: "Multímetro Fluke 117",
    estudianteId: 7,
    estudianteNombre: "Lucía Paredes Ynga",
    codigoEstudiante: "20189045",
    carrera: "Ing. Electrónica",
    ciclo: "9.°",
    fechaEntrega: "2026-09-09 09:00",
    fechaVencimiento: "2026-09-14 19:00",
    vencimientoTexto: "14/09/2026",
    estado: ESTADOS_PRESTAMO.VENCE_HOY,
    diasRetraso: 0,
    penalidadPorDia: 12.00,
    penalidadTotal: 0.00,
    penalidadPagada: false,
    accesoriosEntregados: [
      { nombre: "Cables de prueba TL75", entregado: true },
      { nombre: "Funda protectora", entregado: true },
      { nombre: "Batería 9V instalada", entregado: true }
    ],
    observacionesEntrega: "Equipo verificado en escala de ohmios y continuidad.",
    devolucion: null
  },
  // 4. En curso - Renzo Mendoza (Mockup 4.4 y 4.5)
  {
    id: "PRE-2026-0318",
    unidadCodigo: "INV-OSC-0042",
    equipoId: 1,
    equipoNombre: "Osciloscopio Tektronix TBS1052B",
    estudianteId: 1,
    estudianteNombre: "Renzo Mendoza Cárdenas",
    codigoEstudiante: "20213456",
    carrera: "Ing. Electrónica",
    ciclo: "6.° ciclo",
    curso: "IN324 Laboratorio de Circuitos Electrónicos",
    docente: "Ing. Elena Rivas Talledo",
    fechaEntrega: "2026-09-16 09:20",
    fechaVencimiento: "2026-09-21 19:00",
    vencimientoTexto: "21/09/2026",
    estado: ESTADOS_PRESTAMO.EN_CURSO,
    diasRetraso: 0,
    penalidadPorDia: 15.00,
    penalidadTotal: 0.00,
    accesoriosEntregados: [
      { nombre: "2 sondas de medición completas", entregado: true },
      { nombre: "Cable USB", entregado: true },
      { nombre: "Estuche rígido", entregado: false }
    ],
    observacionesEntrega: "Carcasa con rayadura superficial en la tapa. Pantalla y perillas operativas.",
    devolucion: null
  },
  // 5. En curso - Fabiana Loayza
  {
    id: "PRE-2026-0319",
    unidadCodigo: "INV-CAM-0009",
    equipoId: 2,
    equipoNombre: "Cámara Canon EOS 90D",
    estudianteId: 5,
    estudianteNombre: "Fabiana Loayza Ramos",
    codigoEstudiante: "20226654",
    carrera: "Comunicación",
    ciclo: "5.°",
    fechaEntrega: "2026-09-14 14:00",
    fechaVencimiento: "2026-09-19 19:00",
    vencimientoTexto: "19/09/2026",
    estado: ESTADOS_PRESTAMO.EN_CURSO,
    diasRetraso: 0,
    penalidadPorDia: 20.00,
    penalidadTotal: 0.00,
    accesoriosEntregados: [
      { nombre: "Batería de repuesto", entregado: true },
      { nombre: "Cargador", entregado: true },
      { nombre: "Correa", entregado: true }
    ],
    observacionesEntrega: "Entregado operativo.",
    devolucion: null
  },
  // 6. En curso - Mateo Chávez
  {
    id: "PRE-2026-0320",
    unidadCodigo: "INV-TRI-0007",
    equipoId: 7,
    equipoNombre: "Trípode Manfrotto MT055",
    estudianteId: 6,
    estudianteNombre: "Mateo Chávez Ríos",
    codigoEstudiante: "20198812",
    carrera: "Ing. de Sistemas",
    ciclo: "7.°",
    fechaEntrega: "2026-09-12 10:00",
    fechaVencimiento: "2026-09-17 19:00",
    vencimientoTexto: "17/09/2026",
    estado: ESTADOS_PRESTAMO.EN_CURSO,
    diasRetraso: 0,
    penalidadPorDia: 10.00,
    penalidadTotal: 0.00,
    accesoriosEntregados: [
      { nombre: "Zapata rápida 200PL", entregado: true },
      { nombre: "Funda de transporte acolchada", entregado: true }
    ],
    observacionesEntrega: "Zapata montada en rótula.",
    devolucion: null
  },
  // 7. En curso - Diego Salcedo
  {
    id: "PRE-2026-0321",
    unidadCodigo: "INV-ARD-0015",
    equipoId: 3,
    equipoNombre: "Kit de robótica Arduino Mega",
    estudianteId: 4,
    estudianteNombre: "Diego Salcedo Vera",
    codigoEstudiante: "20207731",
    carrera: "Ing. Industrial",
    ciclo: "8.°",
    fechaEntrega: "2026-09-14 09:30",
    fechaVencimiento: "2026-09-25 19:00",
    vencimientoTexto: "25/09/2026",
    estado: ESTADOS_PRESTAMO.EN_CURSO,
    diasRetraso: 0,
    penalidadPorDia: 10.00,
    penalidadTotal: 0.00,
    accesoriosEntregados: [
      { nombre: "Caja organizadora", entregado: true },
      { nombre: "Pack 37 sensores", entregado: true },
      { nombre: "Cable USB A-B", entregado: true }
    ],
    observacionesEntrega: "Kit nuevo sellado entregado con checklist verificado.",
    devolucion: null
  },
  // 8. En curso - Sebastián Rojas
  {
    id: "PRE-2026-0322",
    unidadCodigo: "INV-RED-0002",
    equipoId: 6,
    equipoNombre: "Analizador de redes NetAlly",
    estudianteId: 8,
    estudianteNombre: "Sebastián Rojas Ynga",
    codigoEstudiante: "20211203",
    carrera: "Ing. de Sistemas",
    ciclo: "7.°",
    fechaEntrega: "2026-09-14 11:00",
    fechaVencimiento: "2026-09-23 19:00",
    vencimientoTexto: "23/09/2026",
    estado: ESTADOS_PRESTAMO.EN_CURSO,
    diasRetraso: 0,
    penalidadPorDia: 18.00,
    penalidadTotal: 0.00,
    accesoriosEntregados: [
      { nombre: "Estuche rígido", entregado: true },
      { nombre: "Cargador y cable de red", entregado: true },
      { nombre: "Identificador de puertos", entregado: true }
    ],
    observacionesEntrega: "Equipo certificado con batería cargada al 90%.",
    devolucion: null
  },

  // Préstamos históricos devueltos (para historial de Camila Quispe Mockup 5.4)
  {
    id: "PRE-2026-0245",
    unidadCodigo: "INV-CAM-0010",
    equipoId: 2,
    equipoNombre: "Cámara Canon EOS 90D",
    estudianteId: 2,
    estudianteNombre: "Camila Quispe Andrade",
    codigoEstudiante: "20204512",
    fechaEntrega: "2026-08-20",
    fechaVencimiento: "2026-08-25",
    vencimientoTexto: "25/08/2026",
    estado: ESTADOS_PRESTAMO.DEVUELTO,
    diasRetraso: 0,
    penalidadTotal: 0.00,
    penalidadPagada: true,
    devolucion: {
      fechaRetorno: "2026-08-25",
      estadoRetorno: "Sin novedades",
      observaciones: "Devuelto en perfecto estado."
    }
  },
  {
    id: "PRE-2026-0198",
    unidadCodigo: "INV-TRI-0007",
    equipoId: 7,
    equipoNombre: "Trípode Manfrotto MT055",
    estudianteId: 2,
    estudianteNombre: "Camila Quispe Andrade",
    codigoEstudiante: "20204512",
    fechaEntrega: "2026-08-05",
    fechaVencimiento: "2026-08-09",
    vencimientoTexto: "09/08/2026",
    estado: ESTADOS_PRESTAMO.DEVUELTO,
    diasRetraso: 1,
    penalidadTotal: 15.00,
    penalidadPagada: true,
    devolucion: {
      fechaRetorno: "2026-08-10",
      estadoRetorno: "Sin novedades",
      observaciones: "1 día de retraso. Penalidad regularizada en caja."
    }
  },
  {
    id: "PRE-2026-0142",
    unidadCodigo: "INV-MUL-0022",
    equipoId: 5,
    equipoNombre: "Multímetro Fluke 117",
    estudianteId: 2,
    estudianteNombre: "Camila Quispe Andrade",
    codigoEstudiante: "20204512",
    fechaEntrega: "2026-07-14",
    fechaVencimiento: "2026-07-18",
    vencimientoTexto: "18/07/2026",
    estado: ESTADOS_PRESTAMO.DEVUELTO,
    diasRetraso: 0,
    penalidadTotal: 0.00,
    penalidadPagada: true,
    devolucion: {
      fechaRetorno: "2026-07-18",
      estadoRetorno: "Sin novedades",
      observaciones: "Devuelto a tiempo."
    }
  },
  {
    id: "PRE-2026-0087",
    unidadCodigo: "INV-ARD-0013",
    equipoId: 3,
    equipoNombre: "Kit de robótica Arduino Mega",
    estudianteId: 2,
    estudianteNombre: "Camila Quispe Andrade",
    codigoEstudiante: "20204512",
    fechaEntrega: "2026-07-02",
    fechaVencimiento: "2026-07-09",
    vencimientoTexto: "09/07/2026",
    estado: ESTADOS_PRESTAMO.DEVUELTO,
    diasRetraso: 0,
    penalidadTotal: 0.00,
    penalidadPagada: true,
    devolucion: {
      fechaRetorno: "2026-07-09",
      estadoRetorno: "Sin novedades",
      observaciones: "Devuelto completo."
    }
  },
  // Histórico Renzo Mendoza
  {
    id: "PRE-2026-0248",
    unidadCodigo: "INV-MUL-0021",
    equipoId: 5,
    equipoNombre: "Multímetro Fluke 117",
    estudianteId: 1,
    estudianteNombre: "Renzo Mendoza Cárdenas",
    codigoEstudiante: "20213456",
    carrera: "Ing. Electrónica",
    ciclo: "6.° ciclo",
    curso: "IN324 Laboratorio de Circuitos Electrónicos",
    docente: "Ing. Elena Rivas Talledo",
    fechaEntrega: "2026-09-08 10:00",
    fechaVencimiento: "2026-09-12 19:00",
    vencimientoTexto: "12/09/2026",
    estado: ESTADOS_PRESTAMO.DEVUELTO,
    diasRetraso: 0,
    penalidadTotal: 0.00,
    penalidadPagada: true,
    accesoriosEntregados: [
      { nombre: "Cables de prueba TL75", entregado: true },
      { nombre: "Funda protectora", entregado: true }
    ],
    devolucion: {
      fechaRetorno: "2026-09-12 18:30",
      estadoRetorno: "Sin novedades",
      observaciones: "Devuelto en excelentes condiciones operativas."
    }
  }
];
