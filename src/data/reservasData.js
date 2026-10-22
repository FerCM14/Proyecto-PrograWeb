import { ESTADOS_RESERVA } from './contratoDatos';

export const INITIAL_RESERVAS = [
  {
    id: "RES-2026-0012",
    estudianteId: 1,
    estudianteNombre: "Renzo Mendoza Cárdenas",
    equipoId: 1,
    equipoNombre: "Osciloscopio Tektronix TBS1052B",
    fechaInicio: "2026-09-16",
    fechaFin: "2026-09-18",
    rangoTexto: "16/09 → 18/09/2026",
    dias: 3,
    estado: ESTADOS_RESERVA.CONFIRMADA,
    listaEsperaPuesto: null,
    listaEsperaTexto: "—"
  },
  {
    id: "RES-2026-0015",
    estudianteId: 1,
    estudianteNombre: "Renzo Mendoza Cárdenas",
    equipoId: 3,
    equipoNombre: "Kit de robótica Arduino Mega",
    fechaInicio: "2026-09-22",
    fechaFin: "2026-09-26",
    rangoTexto: "22/09 → 26/09/2026",
    dias: 5,
    estado: ESTADOS_RESERVA.CONFIRMADA,
    listaEsperaPuesto: null,
    listaEsperaTexto: "—"
  },
  {
    id: "RES-2026-0019",
    estudianteId: 1,
    estudianteNombre: "Renzo Mendoza Cárdenas",
    equipoId: 2,
    equipoNombre: "Cámara Canon EOS 90D",
    fechaInicio: "2026-09-20",
    fechaFin: "2026-09-24",
    rangoTexto: "20/09 → 24/09/2026",
    dias: 5,
    estado: ESTADOS_RESERVA.EN_ESPERA,
    listaEsperaPuesto: 2,
    listaEsperaTexto: "puesto 2 de 4"
  },
  {
    id: "RES-2026-0007",
    estudianteId: 1,
    estudianteNombre: "Renzo Mendoza Cárdenas",
    equipoId: 5,
    equipoNombre: "Multímetro Fluke 117",
    fechaInicio: "2026-09-05",
    fechaFin: "2026-09-08",
    rangoTexto: "05/09 → 08/09/2026",
    dias: 4,
    estado: ESTADOS_RESERVA.CUMPLIDA,
    listaEsperaPuesto: null,
    listaEsperaTexto: "—"
  }
];

export const INITIAL_LISTA_ESPERA_GRUPOS = [
  {
    equipoId: 2,
    equipoNombre: "Cámara Canon EOS 90D",
    enEsperaTotal: 4,
    aviso: null,
    cola: [
      { id: "COLA-CAN-1", posicion: 1, estudianteId: 5, estudiante: "Fabiana Loayza Ramos", rango: "19/09 → 23/09/2026", estado: "Asignar", accion: "Asignar unidad" },
      { id: "COLA-CAN-2", posicion: 2, estudianteId: 2, estudiante: "Camila Quispe Andrade", rango: "20/09 → 24/09/2026", estado: "Con deuda", accion: "Bloqueada" },
      { id: "COLA-CAN-3", posicion: 3, estudianteId: 6, estudiante: "Mateo Chávez Ríos", rango: "21/09 → 25/09/2026", estado: "Asignar", accion: "Asignar unidad" },
      { id: "COLA-CAN-4", posicion: 4, estudianteId: 4, estudiante: "Diego Salcedo Vera", rango: "22/09 → 26/09/2026", estado: "Asignar", accion: "Asignar unidad" }
    ]
  },
  {
    equipoId: 4,
    equipoNombre: "Tableta gráfica Wacom Intuos",
    enEsperaTotal: 2,
    aviso: "La unidad INV-TAB-0004 está en mantenimiento: la cola de la tableta no avanzará hasta que vuelva al inventario.",
    cola: [
      { id: "COLA-TAB-1", posicion: 1, estudianteId: 8, estudiante: "Sebastián Rojas Ynga", rango: "18/09 → 21/09/2026", estado: "En pausa", accion: "En pausa técnica" },
      { id: "COLA-TAB-2", posicion: 2, estudianteId: 7, estudiante: "Lucía Paredes Ynga", rango: "19/09 → 22/09/2026", estado: "En pausa", accion: "En pausa técnica" }
    ]
  }
];
