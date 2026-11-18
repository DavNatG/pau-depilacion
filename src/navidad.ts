const hoy = new Date();
const mes = hoy.getMonth();
const dia = hoy.getDate();

// Se muestra del 15 de noviembre al 6 de enero y desaparece solo despues.
const enTemporada =
  (mes === 10 && dia >= 15) || mes === 11 || (mes === 0 && dia <= 6);

// Para previsualizar fuera de temporada: ?navidad=1 (o ?navidad=0 para apagarlo).
const forzado =
  typeof window === 'undefined'
    ? null
    : new URLSearchParams(window.location.search).get('navidad');

export const esNavidad = forzado === null ? enTemporada : forzado !== '0';
