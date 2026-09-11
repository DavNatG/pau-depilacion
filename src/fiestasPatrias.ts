const hoy = new Date();

// Se muestra del 1 al 20 de septiembre y desaparece sola después.
export const esFiestasPatrias = hoy.getMonth() === 8 && hoy.getDate() <= 20;
