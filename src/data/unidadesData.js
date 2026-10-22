import { ESTADOS_UNIDAD } from './contratoDatos';

export const INITIAL_UNIDADES = [
  // 1. Osciloscopio TBS1052B (5 unidades: 3 disp, 1 prest, 1 mant)
  { codigo: "INV-OSC-0042", equipoId: 1, ubicacion: "Almacén H-102 · anaquel 3", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Sondas completas", prestamoVigente: "—" },
  { codigo: "INV-OSC-0043", equipoId: 1, ubicacion: "Almacén H-102 · anaquel 3", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Calibración al día", prestamoVigente: "—" },
  { codigo: "INV-OSC-0044", equipoId: 1, ubicacion: "Lab. Electrónica H-210", estado: ESTADOS_UNIDAD.PRESTADA, observaciones: "Entregada con estuche", prestamoVigente: "PRE-2026-0318" },
  { codigo: "INV-OSC-0045", equipoId: 1, ubicacion: "Servicio técnico externo", estado: ESTADOS_UNIDAD.MANTENIMIENTO, observaciones: "Sonda 2 con falso contacto", prestamoVigente: "—" },
  { codigo: "INV-OSC-0046", equipoId: 1, ubicacion: "Almacén N-005", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "En reserva técnica", prestamoVigente: "—" },

  // 2. Cámara Canon EOS 90D (4 unidades: 2 disp, 1 prest, 1 mant)
  { codigo: "INV-CAM-0009", equipoId: 2, ubicacion: "Almacén H-102 · armario 2", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Batería al 100%", prestamoVigente: "—" },
  { codigo: "INV-CAM-0010", equipoId: 2, ubicacion: "Almacén H-102 · armario 2", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Lente limpio", prestamoVigente: "—" },
  { codigo: "INV-CAM-0011", equipoId: 2, ubicacion: "Taller Fotografía F-104", estado: ESTADOS_UNIDAD.MANTENIMIENTO, observaciones: "Sensor sucio para limpieza", prestamoVigente: "—" },
  { codigo: "INV-CAM-0012", equipoId: 2, ubicacion: "Facultad Comunicación", estado: ESTADOS_UNIDAD.PRESTADA, observaciones: "Con correa y estuche", prestamoVigente: "PRE-2026-0303" },

  // 3. Kit Arduino Mega (6 unidades: 5 disp, 1 prest)
  { codigo: "INV-ARD-0013", equipoId: 3, ubicacion: "Almacén H-102 · estante 1", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Completo", prestamoVigente: "—" },
  { codigo: "INV-ARD-0014", equipoId: 3, ubicacion: "Almacén H-102 · estante 1", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Completo", prestamoVigente: "—" },
  { codigo: "INV-ARD-0015", equipoId: 3, ubicacion: "Lab. Robótica", estado: ESTADOS_UNIDAD.PRESTADA, observaciones: "Kit nuevo en uso", prestamoVigente: "PRE-2026-0321" },
  { codigo: "INV-ARD-0016", equipoId: 3, ubicacion: "Almacén H-102 · estante 1", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Completo", prestamoVigente: "—" },
  { codigo: "INV-ARD-0017", equipoId: 3, ubicacion: "Almacén H-102 · estante 1", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Completo", prestamoVigente: "—" },
  { codigo: "INV-ARD-0018", equipoId: 3, ubicacion: "Almacén H-102 · estante 1", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Completo", prestamoVigente: "—" },

  // 4. Tableta Wacom Intuos (3 unidades: 1 disp, 1 prest, 1 baja)
  { codigo: "INV-TAB-0004", equipoId: 4, ubicacion: "Lab. Cómputo", estado: ESTADOS_UNIDAD.PRESTADA, observaciones: "Lápiz verificado", prestamoVigente: "PRE-2026-0291" },
  { codigo: "INV-TAB-0005", equipoId: 4, ubicacion: "Almacén H-102 · cajón 4", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Excelente estado", prestamoVigente: "—" },
  { codigo: "INV-TAB-0006", equipoId: 4, ubicacion: "Depósito de baja", estado: ESTADOS_UNIDAD.DADA_DE_BAJA, observaciones: "Conector USB roto irreparable", prestamoVigente: "—" },

  // 5. Multímetro Fluke 117 (3 unidades: 0 disp, 2 prest, 1 mant)
  { codigo: "INV-MUL-0021", equipoId: 5, ubicacion: "Lab. Circuitos", estado: ESTADOS_UNIDAD.PRESTADA, observaciones: "Puntas con protector", prestamoVigente: "PRE-2026-0311" },
  { codigo: "INV-MUL-0022", equipoId: 5, ubicacion: "Lab. Electrónica", estado: ESTADOS_UNIDAD.PRESTADA, observaciones: "—", prestamoVigente: "PRE-2026-0319" },
  { codigo: "INV-MUL-0023", equipoId: 5, ubicacion: "Mantenimiento Interno", estado: ESTADOS_UNIDAD.MANTENIMIENTO, observaciones: "Fusible quemado en rango mA", prestamoVigente: "—" },

  // 6. Analizador NetAlly LinkRunner (3 unidades: 1 disp, 1 prest, 1 baja)
  { codigo: "INV-RED-0001", equipoId: 6, ubicacion: "Almacén H-102 · estante 3", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Firmware actualizado", prestamoVigente: "—" },
  { codigo: "INV-RED-0002", equipoId: 6, ubicacion: "Lab. Redes R-302", estado: ESTADOS_UNIDAD.PRESTADA, observaciones: "Entregado a Sebastián Rojas", prestamoVigente: "PRE-2026-0322" },
  { codigo: "INV-RED-0003", equipoId: 6, ubicacion: "Depósito de baja", estado: ESTADOS_UNIDAD.DADA_DE_BAJA, observaciones: "Placa lógica dañada", prestamoVigente: "—" },

  // 7. Trípode Manfrotto MT055 (6 unidades: 5 disp, 1 prest)
  { codigo: "INV-TRI-0007", equipoId: 7, ubicacion: "Taller Audiovisual", estado: ESTADOS_UNIDAD.PRESTADA, observaciones: "En uso por Mateo Chávez", prestamoVigente: "PRE-2026-0320" },
  { codigo: "INV-TRI-0008", equipoId: 7, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Excelente estado", prestamoVigente: "—" },
  { codigo: "INV-TRI-0009", equipoId: 7, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Con zapata montada", prestamoVigente: "—" },
  { codigo: "INV-TRI-0010", equipoId: 7, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "—", prestamoVigente: "—" },
  { codigo: "INV-TRI-0011", equipoId: 7, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "—", prestamoVigente: "—" },
  { codigo: "INV-TRI-0012", equipoId: 7, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "—", prestamoVigente: "—" },

  // 8. Fuente Korad KA3005P (4 unidades: 3 disp, 1 mant)
  { codigo: "INV-FUE-0001", equipoId: 8, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Calibrada", prestamoVigente: "—" },
  { codigo: "INV-FUE-0002", equipoId: 8, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "—", prestamoVigente: "—" },
  { codigo: "INV-FUE-0003", equipoId: 8, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "—", prestamoVigente: "—" },
  { codigo: "INV-FUE-0004", equipoId: 8, ubicacion: "Taller Mantenimiento", estado: ESTADOS_UNIDAD.MANTENIMIENTO, observaciones: "Perilla de ajuste fino rota", prestamoVigente: "—" },

  // 9. Brazo Dobot Magician Lite (3 unidades: 2 disp, 1 baja)
  { codigo: "INV-DOB-0001", equipoId: 9, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Pinza montada", prestamoVigente: "—" },
  { codigo: "INV-DOB-0002", equipoId: 9, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "—", prestamoVigente: "—" },
  { codigo: "INV-DOB-0003", equipoId: 9, ubicacion: "Depósito de baja", estado: ESTADOS_UNIDAD.DADA_DE_BAJA, observaciones: "Servomotor quemado en eje base", prestamoVigente: "—" },

  // 10. Kit Raspberry Pi 4 (5 unidades: 5 disp)
  { codigo: "INV-RAS-0001", equipoId: 10, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "Listo para préstamo", prestamoVigente: "—" },
  { codigo: "INV-RAS-0002", equipoId: 10, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "—", prestamoVigente: "—" },
  { codigo: "INV-RAS-0003", equipoId: 10, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "—", prestamoVigente: "—" },
  { codigo: "INV-RAS-0004", equipoId: 10, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "—", prestamoVigente: "—" },
  { codigo: "INV-RAS-0005", equipoId: 10, ubicacion: "Almacén H-102", estado: ESTADOS_UNIDAD.DISPONIBLE, observaciones: "—", prestamoVigente: "—" }
  // Equipo 11 (Generador) tiene 0 unidades para ilustrar "Este equipo aún no tiene unidades"
];
