// Datos maestros del sistema institucional Almacén de Equipos - Universidad de Lima

export const INITIAL_EQUIPOS = [
  {
    id: 1,
    codigoBase: "INV-OSC",
    nombre: "Osciloscopio TBS1052B",
    marca: "Tektronix",
    modelo: "TBS1052B",
    categoria: "Medición",
    laboratorio: "Lab. de Circuitos Electrónicos H-210",
    ubicacion: "Almacén H-102 · anaquel 3",
    descripcion: "Osciloscopio digital de 2 canales y 50 MHz con pantalla a color. Para las prácticas de circuitos electrónicos y el laboratorio de señales.",
    accesorios: ["2 sondas de medición completas", "Cable USB", "Estuche rígido"],
    duracionMaxima: 7,
    requiereAutorizacion: true,
    admiteRenovacion: false,
    penalidadPorDia: 15.00,
    unidadesLibres: 3,
    unidadesTotales: 5,
    estadoGeneral: "Disponible",
    imagen: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    unidades: [
      { codigo: "INV-OSC-0042", ubicacion: "Almacén H-102 · anaquel 3", estado: "Disponible", observaciones: "Sondas completas", prestamoVigente: "—" },
      { codigo: "INV-OSC-0043", ubicacion: "Almacén H-102 · anaquel 3", estado: "Disponible", observaciones: "Calibración vigente", prestamoVigente: "—" },
      { codigo: "INV-OSC-0044", ubicacion: "Lab. Electrónica H-210", estado: "Prestada", observaciones: "Entregada con estuche", prestamoVigente: "PRE-2026-0318" },
      { codigo: "INV-OSC-0045", ubicacion: "Servicio técnico externo", estado: "Mantenimiento", observaciones: "Sonda 2 con falso contacto", prestamoVigente: "—" },
      { codigo: "INV-OSC-0046", ubicacion: "Almacén N-005", estado: "Disponible", observaciones: "En reserva técnica", prestamoVigente: "—" }
    ]
  },
  {
    id: 2,
    codigoBase: "INV-CAM",
    nombre: "Cámara Canon EOS 90D",
    marca: "Canon",
    modelo: "EOS 90D",
    categoria: "Audiovisual",
    laboratorio: "Taller Audiovisual F-104",
    ubicacion: "Almacén H-102 · armario 2",
    descripcion: "Cámara réflex digital de 32.5 MP con grabación 4K, para los proyectos de fotografía y video de los cursos de Comunicación e Ingeniería Industrial. Se entrega con lente 18-135 mm montado.",
    accesorios: ["Estuche rígido", "Cargador", "Batería de repuesto", "Correa", "Cable USB"],
    duracionMaxima: 5,
    requiereAutorizacion: false,
    admiteRenovacion: true,
    penalidadPorDia: 20.00,
    unidadesLibres: 2,
    unidadesTotales: 4,
    estadoGeneral: "Disponible",
    imagen: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    unidades: [
      { codigo: "INV-CAM-0009", ubicacion: "Almacén H-102 · armario 2", estado: "Disponible", observaciones: "Batería al 100%", prestamoVigente: "—" },
      { codigo: "INV-CAM-0010", ubicacion: "Almacén H-102 · armario 2", estado: "Disponible", observaciones: "Lente limpio", prestamoVigente: "—" },
      { codigo: "INV-CAM-0011", ubicacion: "Taller Fotografía F-104", estado: "Mantenimiento", observaciones: "Sensor sucio para limpieza", prestamoVigente: "—" },
      { codigo: "INV-CAM-0012", ubicacion: "Facultad Comunicación", estado: "Prestada", observaciones: "Con correa y estuche", prestamoVigente: "PRE-2026-0303" }
    ]
  },
  {
    id: 3,
    codigoBase: "INV-ARD",
    nombre: "Kit de robótica Arduino Mega",
    marca: "Arduino",
    modelo: "Mega 2560 R3",
    categoria: "Robótica",
    laboratorio: "Lab. de Robótica y Automatización",
    ubicacion: "Almacén H-102 · estante 1",
    descripcion: "Placa microcontroladora basada en el ATmega2560 con set de 37 sensores, servomotores y cables Dupont para prototipado y robótica aplicada.",
    accesorios: ["Cable USB A-B", "Caja organizadora", "Pack 37 sensores", "Fuente de alimentación 9V"],
    duracionMaxima: 7,
    requiereAutorizacion: false,
    admiteRenovacion: true,
    penalidadPorDia: 10.00,
    unidadesLibres: 6,
    unidadesTotales: 6,
    estadoGeneral: "Disponible",
    imagen: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=600&q=80",
    unidades: [
      { codigo: "INV-ARD-0013", ubicacion: "Almacén H-102 · estante 1", estado: "Disponible", observaciones: "Completo", prestamoVigente: "—" },
      { codigo: "INV-ARD-0014", ubicacion: "Almacén H-102 · estante 1", estado: "Disponible", observaciones: "Completo", prestamoVigente: "—" },
      { codigo: "INV-ARD-0015", ubicacion: "Almacén H-102 · estante 1", estado: "Disponible", observaciones: "Kit nuevo", prestamoVigente: "—" },
      { codigo: "INV-ARD-0016", ubicacion: "Almacén H-102 · estante 1", estado: "Disponible", observaciones: "Completo", prestamoVigente: "—" },
      { codigo: "INV-ARD-0017", ubicacion: "Almacén H-102 · estante 1", estado: "Disponible", observaciones: "Completo", prestamoVigente: "—" },
      { codigo: "INV-ARD-0018", ubicacion: "Almacén H-102 · estante 1", estado: "Disponible", observaciones: "Completo", prestamoVigente: "—" }
    ]
  },
  {
    id: 4,
    codigoBase: "INV-TAB",
    nombre: "Tableta gráfica Wacom Intuos",
    marca: "Wacom",
    modelo: "CTL-4100",
    categoria: "Cómputo",
    laboratorio: "Centro de Cómputo C-201",
    ubicacion: "Almacén H-102 · cajón 4",
    descripcion: "Tableta digitalizadora de dibujo con lápiz sensible a 4096 niveles de presión para diseño gráfico, modelado y sketch interactivo.",
    accesorios: ["Lápiz digital Wacom 4K", "Cable micro-USB", "3 puntas de repuesto"],
    duracionMaxima: 7,
    requiereAutorizacion: false,
    admiteRenovacion: false,
    penalidadPorDia: 15.00,
    unidadesLibres: 1,
    unidadesTotales: 3,
    estadoGeneral: "Disponible",
    imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    unidades: [
      { codigo: "INV-TAB-0004", ubicacion: "Lab. Cómputo", estado: "Prestada", observaciones: "Lápiz verificado", prestamoVigente: "PRE-2026-0291" },
      { codigo: "INV-TAB-0005", ubicacion: "Almacén H-102 · cajón 4", estado: "Disponible", observaciones: "Excelente estado", prestamoVigente: "—" },
      { codigo: "INV-TAB-0006", ubicacion: "En tránsito", estado: "Prestada", observaciones: "—", prestamoVigente: "PRE-2026-0325" }
    ]
  },
  {
    id: 5,
    codigoBase: "INV-MUL",
    nombre: "Multímetro Fluke 117",
    marca: "Fluke",
    modelo: "117 True RMS",
    categoria: "Medición",
    laboratorio: "Lab. de Circuitos Electrónicos H-210",
    ubicacion: "Almacén H-102 · anaquel 2",
    descripcion: "Multímetro digital con tecnología VoltAlert para detección de voltaje sin contacto, medición de frecuencia y capacitancia.",
    accesorios: ["Cables de prueba TL75", "Funda protectora", "Batería 9V instalada"],
    duracionMaxima: 5,
    requiereAutorizacion: false,
    admiteRenovacion: false,
    penalidadPorDia: 12.00,
    unidadesLibres: 0,
    unidadesTotales: 3,
    estadoGeneral: "En Préstamo",
    imagen: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    unidades: [
      { codigo: "INV-MUL-0021", ubicacion: "Lab. Circuitos", estado: "Prestada", observaciones: "Puntas con protector", prestamoVigente: "PRE-2026-0311" },
      { codigo: "INV-MUL-0022", ubicacion: "Lab. Electrónica", estado: "Prestada", observaciones: "—", prestamoVigente: "PRE-2026-0314" },
      { codigo: "INV-MUL-0023", ubicacion: "Mantenimiento Interno", estado: "Mantenimiento", observaciones: "Fusible quemado en rango mA", prestamoVigente: "—" }
    ]
  },
  {
    id: 6,
    codigoBase: "INV-RED",
    nombre: "Analizador de redes portátil",
    marca: "NetAlly",
    modelo: "LinkRunner AT 2000",
    categoria: "Redes",
    laboratorio: "Lab. de Redes y Comunicaciones R-302",
    ubicacion: "Almacén H-102 · estante 3",
    descripcion: "Verificador de cableado y certificación básica de enlaces Ethernet Gigabit y PoE. Para las prácticas del curso de Redes y Telecomunicaciones.",
    accesorios: ["Estuche rígido", "Cargador y cable de red", "Identificador de puertos", "Batería recargable"],
    duracionMaxima: 7,
    requiereAutorizacion: true,
    admiteRenovacion: false,
    penalidadPorDia: 18.00,
    unidadesLibres: 2,
    unidadesTotales: 3,
    estadoGeneral: "Disponible",
    imagen: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    unidades: [
      { codigo: "INV-RED-0001", ubicacion: "Almacén H-102 · estante 3", estado: "Disponible", observaciones: "Firmware actualizado", prestamoVigente: "—" },
      { codigo: "INV-RED-0002", ubicacion: "Lab. Redes R-302", estado: "Prestada", observaciones: "Entregado a Sebastián Rojas", prestamoVigente: "PRE-2026-0322" },
      { codigo: "INV-RED-0003", ubicacion: "Depósito de baja", estado: "Dada de baja", observaciones: "Placa lógica dañada", prestamoVigente: "—" }
    ]
  },
  {
    id: 7,
    codigoBase: "INV-TRI",
    nombre: "Trípode profesional Manfrotto",
    marca: "Manfrotto",
    modelo: "MT055XPRO3",
    categoria: "Audiovisual",
    laboratorio: "Taller Audiovisual F-104",
    ubicacion: "Almacén H-102 · soporte pared",
    descripcion: "Trípode de aluminio de 3 secciones con columna a 90 grados, rótula de bola 496RC2 y capacidad de carga de 9 kg.",
    accesorios: ["Zapata rápida 200PL", "Funda de transporte acolchada", "Llave allen de ajuste"],
    duracionMaxima: 5,
    requiereAutorizacion: false,
    admiteRenovacion: true,
    penalidadPorDia: 10.00,
    unidadesLibres: 4,
    unidadesTotales: 5,
    estadoGeneral: "Disponible",
    imagen: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=600&q=80",
    unidades: [
      { codigo: "INV-TRI-0007", ubicacion: "Taller Audiovisual", estado: "Prestada", observaciones: "En uso por Mateo Chávez", prestamoVigente: "PRE-2026-0320" },
      { codigo: "INV-TRI-0008", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "Excelente estado", prestamoVigente: "—" },
      { codigo: "INV-TRI-0009", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "Con zapata montada", prestamoVigente: "—" },
      { codigo: "INV-TRI-0010", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "—", prestamoVigente: "—" },
      { codigo: "INV-TRI-0011", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "—", prestamoVigente: "—" }
    ]
  },
  {
    id: 8,
    codigoBase: "INV-FUE",
    nombre: "Fuente de poder regulable",
    marca: "Korad",
    modelo: "KA3005P",
    categoria: "Laboratorio de física",
    laboratorio: "Laboratorio de Física General",
    ubicacion: "Almacén H-102 · anaquel 4",
    descripcion: "Fuente de alimentación DC programable de 30V y 5A con display digital cuádruple de alta precisión para experimentos de laboratorio.",
    accesorios: ["Cable de poder", "Par de cables banana-caimán", "Cable USB de control"],
    duracionMaxima: 7,
    requiereAutorizacion: true,
    admiteRenovacion: false,
    penalidadPorDia: 12.00,
    unidadesLibres: 3,
    unidadesTotales: 4,
    estadoGeneral: "Disponible",
    imagen: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    unidades: [
      { codigo: "INV-FUE-0001", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "Calibrada", prestamoVigente: "—" },
      { codigo: "INV-FUE-0002", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "—", prestamoVigente: "—" },
      { codigo: "INV-FUE-0003", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "—", prestamoVigente: "—" },
      { codigo: "INV-FUE-0004", ubicacion: "Taller de Mantenimiento", estado: "Mantenimiento", observaciones: "Perilla de ajuste fino rota", prestamoVigente: "—" }
    ]
  },
  {
    id: 9,
    codigoBase: "INV-DOB",
    nombre: "Brazo robótico Dobot",
    marca: "Dobot",
    modelo: "Magician Lite",
    categoria: "Robótica",
    laboratorio: "Lab. de Robótica",
    ubicacion: "Almacén H-102 · mesa 2",
    descripcion: "Brazo robótico educativo multifuncional de 4 ejes con pinza neumática, módulo de succión y pluma de dibujo.",
    accesorios: ["Pinza neumática", "Ventosa de succión", "Fuente 12V", "Caja de bloques"],
    duracionMaxima: 7,
    requiereAutorizacion: true,
    admiteRenovacion: false,
    penalidadPorDia: 25.00,
    unidadesLibres: 2,
    unidadesTotales: 3,
    estadoGeneral: "Disponible",
    imagen: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    unidades: [
      { codigo: "INV-DOB-0001", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "Pinza montada", prestamoVigente: "—" },
      { codigo: "INV-DOB-0002", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "—", prestamoVigente: "—" },
      { codigo: "INV-DOB-0003", ubicacion: "Lab. Mecatrónica", estado: "Prestada", observaciones: "Proyecto fin de ciclo", prestamoVigente: "PRE-2026-0329" }
    ]
  },
  {
    id: 10,
    codigoBase: "INV-RAS",
    nombre: "Kit de sensores Raspberry Pi",
    marca: "Raspberry",
    modelo: "Pi 4 Model B (4GB)",
    categoria: "Robótica",
    laboratorio: "Lab. de Sistemas Embebidos",
    ubicacion: "Almacén H-102 · cajón 1",
    descripcion: "Computadora monoplaca con micro-SD de 32GB Raspbian OS preinstalada, case disipador y kit de módulos IoT.",
    accesorios: ["Micro SD 32GB", "Cargador USB-C 5.1V", "Cable micro-HDMI a HDMI"],
    duracionMaxima: 15,
    requiereAutorizacion: false,
    admiteRenovacion: true,
    penalidadPorDia: 10.00,
    unidadesLibres: 4,
    unidadesTotales: 5,
    estadoGeneral: "Disponible",
    imagen: "https://images.unsplash.com/photo-1517055729441-db3aab1358b0?auto=format&fit=crop&w=600&q=80",
    unidades: [
      { codigo: "INV-RAS-0001", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "Listo para préstamo", prestamoVigente: "—" },
      { codigo: "INV-RAS-0002", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "—", prestamoVigente: "—" },
      { codigo: "INV-RAS-0003", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "—", prestamoVigente: "—" },
      { codigo: "INV-RAS-0004", ubicacion: "Almacén H-102", estado: "Disponible", observaciones: "—", prestamoVigente: "—" },
      { codigo: "INV-RAS-0005", ubicacion: "Lab. Embebidos", estado: "Prestada", observaciones: "—", prestamoVigente: "PRE-2026-0330" }
    ]
  }
];

export const INITIAL_SOLICITUDES = [
  {
    id: "SOL-2026-0081",
    estudiante: "Renzo Mendoza Cárdenas",
    codigoEstudiante: "20213456",
    carrera: "Ing. Electrónica",
    ciclo: "6.°",
    deuda: 0,
    equipoNombre: "Osciloscopio TBS1052B",
    equipoId: 1,
    curso: "IN324 Laboratorio de Circuitos Electrónicos",
    docente: "Ing. Elena Rivas Talledo",
    fechas: "16/09 → 21/09/2026",
    fechaInicio: "2026-09-16",
    fechaFin: "2026-09-21",
    motivo: "Medición de señales del amplificador operacional para la práctica calificada 3 del laboratorio.",
    antiguedad: "hace 2 h",
    estado: "Enviada", // 'Enviada' | 'Aprobada' | 'Rechazada' | 'Entregada' | 'Devuelta'
    unidadAsignada: "Pendiente de asignar"
  },
  {
    id: "SOL-2026-0082",
    estudiante: "Alejandra Huamán Solís",
    codigoEstudiante: "20219087",
    carrera: "Comunicación",
    ciclo: "7.°",
    deuda: 60.00,
    equipoNombre: "Cámara Canon EOS 90D",
    equipoId: 2,
    curso: "CO210 Fotografía Documental",
    docente: "Lic. Carlos Valdivia",
    fechas: "17/09 → 22/09/2026",
    fechaInicio: "2026-09-17",
    fechaFin: "2026-09-22",
    motivo: "Registro fotográfico del taller comunitario en Santiago de Surco.",
    antiguedad: "hace 5 h",
    estado: "Enviada",
    unidadAsignada: "Pendiente de asignar"
  },
  {
    id: "SOL-2026-0083",
    estudiante: "Diego Salcedo Vera",
    codigoEstudiante: "20207731",
    carrera: "Ing. Industrial",
    ciclo: "8.°",
    deuda: 0,
    equipoNombre: "Kit de robótica Arduino Mega",
    equipoId: 3,
    curso: "IN401 Proyecto Integrador",
    docente: "Dra. Patricia Montes",
    fechas: "18/09 → 25/09/2026",
    fechaInicio: "2026-09-18",
    fechaFin: "2026-09-25",
    motivo: "Prototipo funcional de clasificación automatizada de piezas en faja transportadora.",
    antiguedad: "hace 1 d",
    estado: "Enviada",
    unidadAsignada: "Pendiente de asignar"
  },
  {
    id: "SOL-2026-0084",
    estudiante: "Fabiana Loayza Ramos",
    codigoEstudiante: "20226654",
    carrera: "Comunicación",
    ciclo: "5.°",
    deuda: 0,
    equipoNombre: "Trípode Manfrotto MT055",
    equipoId: 7,
    curso: "CO210 Fotografía Documental",
    docente: "Lic. Carlos Valdivia",
    fechas: "16/09 → 18/09/2026",
    fechaInicio: "2026-09-16",
    fechaFin: "2026-09-18",
    motivo: "Grabación en exteriores para corto audiovisual de ficción.",
    antiguedad: "hace 1 d",
    estado: "Enviada",
    unidadAsignada: "Pendiente de asignar"
  },
  {
    id: "SOL-2026-0085",
    estudiante: "Mateo Chávez Ríos",
    codigoEstudiante: "20198812",
    carrera: "Ing. de Sistemas",
    ciclo: "7.°",
    deuda: 0,
    equipoNombre: "Analizador de redes portátil",
    equipoId: 6,
    curso: "IN352 Redes y Telecomunicaciones",
    docente: "Ing. Roberto Alarcón",
    fechas: "19/09 → 23/09/2026",
    fechaInicio: "2026-09-19",
    fechaFin: "2026-09-23",
    motivo: "Certificación de cableado UTP Cat6 en el laboratorio R-302.",
    antiguedad: "hace 2 d",
    estado: "Aprobada",
    unidadAsignada: "INV-RED-0001"
  },
  {
    id: "SOL-2026-0086",
    estudiante: "Lucía Paredes Ynga",
    codigoEstudiante: "20189045",
    carrera: "Ing. Electrónica",
    ciclo: "9.°",
    deuda: 0,
    equipoNombre: "Multímetro Fluke 117",
    equipoId: 5,
    curso: "IN510 Tesis de Grado",
    docente: "Dr. Jorge Bustamante",
    fechas: "15/09 → 19/09/2026",
    fechaInicio: "2026-09-15",
    fechaFin: "2026-09-19",
    motivo: "Medición de consumo energético del banco de baterías de tesis.",
    antiguedad: "hace 3 d",
    estado: "Aprobada",
    unidadAsignada: "INV-MUL-0021"
  },
  {
    id: "SOL-2026-0087",
    estudiante: "Camila Quispe Andrade",
    codigoEstudiante: "20204512",
    carrera: "Ing. Industrial",
    ciclo: "8.°",
    deuda: 45.00,
    equipoNombre: "Tableta gráfica Wacom Intuos",
    equipoId: 4,
    curso: "DI105 Dibujo y Modelado Digital",
    docente: "Arq. Manuel Flores",
    fechas: "10/09 → 14/09/2026",
    fechaInicio: "2026-09-10",
    fechaFin: "2026-09-14",
    motivo: "Entrega del portafolio final de bocetos ergonómicos de producto.",
    antiguedad: "hace 6 d",
    estado: "Rechazada",
    unidadAsignada: "—",
    motivoRechazo: "Estudiante con penalidad pendiente por regularizar en Tesorería."
  }
];

export const INITIAL_PRESTAMOS_VIGENTES = [
  {
    id: "PRE-2026-0291",
    unidad: "INV-TAB-0004",
    equipoNombre: "Tableta Wacom Intuos",
    estudiante: "Camila Quispe Andrade",
    codigoEstudiante: "20204512",
    carrera: "Ing. Industrial",
    vencimiento: "11/09/2026",
    estadoPrestamo: "vencido", // 'vencido' | 'vence_hoy' | 'en_curso'
    retrasoTexto: "3 d de retraso",
    retrasoDias: 3,
    penalidad: 45.00,
    accesorios: ["Lápiz digital", "Cable USB faltante", "Estuche"]
  },
  {
    id: "PRE-2026-0303",
    unidad: "INV-CAM-0012",
    equipoNombre: "Cámara Canon EOS 90D",
    estudiante: "Alejandra Huamán Solís",
    codigoEstudiante: "20219087",
    carrera: "Comunicación",
    vencimiento: "12/09/2026",
    estadoPrestamo: "vencido",
    retrasoTexto: "2 d de retraso",
    retrasoDias: 2,
    penalidad: 40.00,
    accesorios: ["Cargador", "Batería", "Correa"]
  },
  {
    id: "PRE-2026-0311",
    unidad: "INV-MUL-0021",
    equipoNombre: "Multímetro Fluke 117",
    estudiante: "Lucía Paredes Ynga",
    codigoEstudiante: "20189045",
    carrera: "Ing. Electrónica",
    vencimiento: "14/09/2026",
    estadoPrestamo: "vence_hoy",
    retrasoTexto: "vence hoy",
    retrasoDias: 0,
    penalidad: 0.00,
    accesorios: ["Cables de prueba", "Funda"]
  },
  {
    id: "PRE-2026-0318",
    unidad: "INV-OSC-0042",
    equipoNombre: "Osciloscopio TBS1052B",
    estudiante: "Renzo Mendoza Cárdenas",
    codigoEstudiante: "20213456",
    carrera: "Ing. Electrónica",
    vencimiento: "21/09/2026",
    estadoPrestamo: "en_curso",
    retrasoTexto: "vence en 7 d",
    retrasoDias: -7,
    penalidad: 0.00,
    accesorios: ["2 sondas", "Cable USB", "Estuche rígido"]
  },
  {
    id: "PRE-2026-0319",
    unidad: "INV-CAM-0009",
    equipoNombre: "Cámara Canon EOS 90D",
    estudiante: "Fabiana Loayza Ramos",
    codigoEstudiante: "20226654",
    carrera: "Comunicación",
    vencimiento: "19/09/2026",
    estadoPrestamo: "en_curso",
    retrasoTexto: "vence en 5 d",
    retrasoDias: -5,
    penalidad: 0.00,
    accesorios: ["Batería", "Cargador", "Correa"]
  },
  {
    id: "PRE-2026-0320",
    unidad: "INV-TRI-0007",
    equipoNombre: "Trípode Manfrotto MT055",
    estudiante: "Mateo Chávez Ríos",
    codigoEstudiante: "20198812",
    carrera: "Ing. de Sistemas",
    vencimiento: "17/09/2026",
    estadoPrestamo: "en_curso",
    retrasoTexto: "vence en 3 d",
    retrasoDias: -3,
    penalidad: 0.00,
    accesorios: ["Zapata rápida", "Funda acolchada"]
  },
  {
    id: "PRE-2026-0321",
    unidad: "INV-ARD-0015",
    equipoNombre: "Kit de robótica Arduino Mega",
    estudiante: "Diego Salcedo Vera",
    codigoEstudiante: "20207731",
    carrera: "Ing. Industrial",
    vencimiento: "25/09/2026",
    estadoPrestamo: "en_curso",
    retrasoTexto: "vence en 11 d",
    retrasoDias: -11,
    penalidad: 0.00,
    accesorios: ["Caja organizadora", "Sensores", "Cable USB"]
  },
  {
    id: "PRE-2026-0322",
    unidad: "INV-RED-0002",
    equipoNombre: "Analizador de redes NetAlly",
    estudiante: "Sebastián Rojas Ynga",
    codigoEstudiante: "20211203",
    carrera: "Ing. de Sistemas",
    vencimiento: "23/09/2026",
    estadoPrestamo: "en_curso",
    retrasoTexto: "vence en 9 d",
    retrasoDias: -9,
    penalidad: 0.00,
    accesorios: ["Estuche", "Cargador", "Cable de red"]
  }
];

export const INITIAL_MIS_SOLICITUDES_RENZO = [
  {
    id: "SOL-2026-0081",
    equipo: "Osciloscopio TBS1052B",
    curso: "IN324 Laboratorio de Circuitos",
    fechas: "16/09/2026 → 21/09/2026",
    unidad: "Pendiente de asignar",
    estado: "Enviada",
    esRetirable: true
  },
  {
    id: "SOL-2026-0079",
    equipo: "Kit de robótica Arduino Mega",
    curso: "IN401 Proyecto Integrador",
    fechas: "18/09/2026 → 25/09/2026",
    unidad: "Pendiente de asignar",
    estado: "Enviada",
    esRetirable: true
  },
  {
    id: "SOL-2026-0071",
    equipo: "Cámara Canon EOS 90D",
    curso: "CO210 Fotografía Documental",
    fechas: "15/09/2026 → 19/09/2026",
    unidad: "INV-CAM-0009",
    estado: "Aprobada",
    esRetirable: false
  },
  {
    id: "SOL-2026-0062",
    equipo: "Multímetro Fluke 117",
    curso: "IN324 Laboratorio de Circuitos",
    fechas: "08/09/2026 → 12/09/2026",
    unidad: "INV-MUL-0021",
    estado: "Entregada",
    constanciaId: "PRE-2026-0248"
  },
  {
    id: "SOL-2026-0055",
    equipo: "Tableta gráfica Wacom Intuos",
    curso: "DI105 Dibujo Digital",
    fechas: "01/09/2026 → 05/09/2026",
    unidad: "INV-TAB-0004",
    estado: "Devuelta"
  },
  {
    id: "SOL-2026-0042",
    equipo: "Analizador de redes portátil",
    curso: "IN352 Redes y Comunicaciones",
    fechas: "27/08/2026 → 03/09/2026",
    unidad: "—",
    estado: "Rechazada",
    motivoRechazo: "Unidad asignada a mantenimiento por revisión técnica de cabezal."
  },
  {
    id: "SOL-2026-0038",
    equipo: "Trípode Manfrotto MT055",
    curso: "CO210 Fotografía Documental",
    fechas: "18/08/2026 → 22/08/2026",
    unidad: "INV-TRI-0007",
    estado: "Devuelta"
  }
];

export const INITIAL_RESERVAS_RENZO = [
  {
    id: "RES-2026-0012",
    equipo: "Osciloscopio Tektronix TBS1052B",
    rango: "16/09 → 18/09/2026",
    estado: "Confirmada",
    listaEspera: "—"
  },
  {
    id: "RES-2026-0015",
    equipo: "Kit de robótica Arduino Mega",
    rango: "22/09 → 26/09/2026",
    estado: "Confirmada",
    listaEspera: "—"
  },
  {
    id: "RES-2026-0019",
    equipo: "Cámara Canon EOS 90D",
    rango: "20/09 → 24/09/2026",
    estado: "En espera",
    listaEspera: "puesto 2 de 4"
  },
  {
    id: "RES-2026-0007",
    equipo: "Multímetro Fluke 117",
    rango: "05/09 → 08/09/2026",
    estado: "Cumplida",
    listaEspera: "—"
  }
];

export const INITIAL_LISTA_ESPERA = [
  {
    equipo: "Cámara Canon EOS 90D",
    enEsperaTotal: 4,
    cola: [
      { posicion: 1, estudiante: "Fabiana Loayza Ramos", rango: "19/09 → 23/09/2026", estado: "Asignar", accion: "Asignar unidad" },
      { posicion: 2, estudiante: "Camila Quispe Andrade", rango: "20/09 → 24/09/2026", estado: "Con deuda", accion: "Bloqueada" },
      { posicion: 3, estudiante: "Mateo Chávez Ríos", rango: "21/09 → 25/09/2026", estado: "Asignar", accion: "Asignar unidad" },
      { posicion: 4, estudiante: "Diego Salcedo Vera", rango: "22/09 → 26/09/2026", estado: "Asignar", accion: "Asignar unidad" }
    ]
  },
  {
    equipo: "Tableta gráfica Wacom Intuos",
    enEsperaTotal: 2,
    aviso: "La unidad INV-TAB-0004 está en mantenimiento: la cola de la tableta no avanzará hasta que vuelva al inventario.",
    cola: [
      { posicion: 1, estudiante: "Sebastián Rojas Ynga", rango: "18/09 → 21/09/2026", estado: "En pausa", accion: "En pausa técnica" },
      { posicion: 2, estudiante: "Lucía Paredes Ynga", rango: "19/09 → 22/09/2026", estado: "En pausa", accion: "En pausa técnica" }
    ]
  }
];

export const INITIAL_USUARIOS = [
  { id: 1, codigo: "20213456", nombre: "Renzo Mendoza Cárdenas", carrera: "Ing. Electrónica", ciclo: "6.°", correo: "rmendoza@aloe.ulima.edu.pe", prestamos: 14, retrasos: 2, deuda: 0, estado: "Habilitado" },
  { id: 2, codigo: "20204512", nombre: "Camila Quispe Andrade", carrera: "Ing. Industrial", ciclo: "8.°", correo: "cquispe@aloe.ulima.edu.pe", prestamos: 14, retrasos: 2, deuda: 45.00, estado: "Con deuda" },
  { id: 3, codigo: "20219087", nombre: "Alejandra Huamán Solís", carrera: "Comunicación", ciclo: "7.°", correo: "ahuaman@aloe.ulima.edu.pe", prestamos: 11, retrasos: 3, deuda: 60.00, estado: "Bloqueado" },
  { id: 4, codigo: "20207731", nombre: "Diego Salcedo Vera", carrera: "Ing. Industrial", ciclo: "8.°", correo: "dsalcedo@aloe.ulima.edu.pe", prestamos: 7, retrasos: 1, deuda: 0, estado: "Habilitado" },
  { id: 5, codigo: "20226654", nombre: "Fabiana Loayza Ramos", carrera: "Comunicación", ciclo: "5.°", correo: "floayza@aloe.ulima.edu.pe", prestamos: 12, retrasos: 0, deuda: 0, estado: "Habilitado" },
  { id: 6, codigo: "20198812", nombre: "Mateo Chávez Ríos", carrera: "Ing. de Sistemas", ciclo: "7.°", correo: "mchavez@aloe.ulima.edu.pe", prestamos: 16, retrasos: 1, deuda: 0, estado: "Habilitado" },
  { id: 7, codigo: "20189045", nombre: "Lucía Paredes Ynga", carrera: "Ing. Electrónica", ciclo: "9.°", correo: "lparedes@aloe.ulima.edu.pe", prestamos: 19, retrasos: 0, deuda: 0, estado: "Habilitado" },
  { id: 8, codigo: "20211203", nombre: "Sebastián Rojas Ynga", carrera: "Ing. de Sistemas", ciclo: "7.°", correo: "srojas@aloe.ulima.edu.pe", prestamos: 6, retrasos: 0, deuda: 0, estado: "Habilitado" },
  { id: 9, codigo: "20223390", nombre: "Valeria Ccahuana Pino", carrera: "Arquitectura", ciclo: "4.°", correo: "vccahuana@aloe.ulima.edu.pe", prestamos: 4, retrasos: 1, deuda: 15.00, estado: "Con deuda" }
];

export const METRICAS_TABLERO = {
  prestamosPeriodo: 86,
  prestamosVariacion: "+12 % frente al periodo anterior",
  unidadesDisponibles: 27,
  unidadesTotales: 42,
  prestamosVencidos: 2,
  penalidadesMonto: 105.00,
  enMantenimiento: 4,
  tiempoPromedioDias: 5.4,
  devolucionesATiempoPct: 91,
  unidadMasSolicitada: "INV-ARD-0015",
  mensual: [
    { mes: "Mayo", cantidad: 18 },
    { mes: "Junio", cantidad: 24 },
    { mes: "Julio", cantidad: 31 },
    { mes: "Agosto", cantidad: 40 },
    { mes: "Setiembre", cantidad: 46 }
  ],
  inventarioEstado: [
    { estado: "Disponibles", cantidad: 27, color: "#1E7F4D" },
    { estado: "Prestadas", cantidad: 8, color: "#3B6FA8" },
    { estado: "En mantenimiento", cantidad: 4, color: "#D9A404" },
    { estado: "Dadas de baja", cantidad: 3, color: "#B4322B" }
  ],
  rankingMasSolicitados: [
    { pos: 1, equipo: "Kit de robótica Arduino Mega", prestamos: 21, uso: 86 },
    { pos: 2, equipo: "Cámara Canon EOS 90D", prestamos: 18, uso: 79 },
    { pos: 3, equipo: "Osciloscopio Tektronix TBS1052B", prestamos: 15, uso: 71 },
    { pos: 4, equipo: "Multímetro Fluke 117", prestamos: 12, uso: 64 },
    { pos: 5, equipo: "Trípode Manfrotto MT055", prestamos: 9, uso: 52 }
  ],
  sinMovimiento: [
    { equipo: "Fuente de poder regulable", unidades: 4, ultimo: "12/06/2026" },
    { equipo: "Analizador de redes portátil", unidades: 3, ultimo: "03/06/2026" },
    { equipo: "Generador de funciones", unidades: 2, ultimo: "21/05/2026" },
    { equipo: "Brazo robótico educativo Dobot", unidades: 3, ultimo: "08/05/2026" },
    { equipo: "Kit de sensores Raspberry Pi", unidades: 5, ultimo: "sin registros" }
  ],
  porCarrera: [
    { carrera: "Ing. Electrónica", prestamos: 31, color: "#17505C" },
    { carrera: "Ing. de Sistemas", prestamos: 23, color: "#3B6FA8" },
    { carrera: "Comunicación", prestamos: 16, color: "#10B981" },
    { carrera: "Ing. Industrial", prestamos: 11, color: "#F59E0B" },
    { carrera: "Arquitectura", prestamos: 5, color: "#8B5CF6" }
  ]
};
