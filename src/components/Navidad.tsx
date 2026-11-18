const ROJO = '#C8102E';
const VERDE = '#157347';
const DORADO = '#D9A520';
const ROSA = '#DB2777';

/* ---------- Arbolito para el saludo del hero ---------- */
export const Arbolito = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="10.6" y="19" width="2.8" height="3.4" rx="0.6" fill="#8B5E3C" />
    <path d="M12 1.6 L16.6 8.4 H7.4 Z" fill={VERDE} />
    <path d="M12 6.4 L18 14.2 H6 Z" fill={VERDE} />
    <path d="M12 11.4 L19.4 19.6 H4.6 Z" fill={VERDE} />
    <circle cx="12" cy="1.9" r="1.5" fill={DORADO} />
    <circle cx="9.6" cy="12.6" r="1" fill={ROJO} />
    <circle cx="14.6" cy="16.4" r="1" fill={ROSA} />
    <circle cx="10.2" cy="17.6" r="1" fill={DORADO} />
  </svg>
);

/* ---------- Gorrito navideno para el logo ---------- */
export const Gorrito = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 28 24" className={className} aria-hidden="true">
    <path d="M3.5 16.5 C5.5 6.5 14 2 22 5.5 C20.5 11.5 12.5 16.5 3.5 16.5 Z" fill={ROJO} />
    <rect x="1.5" y="15.2" width="15" height="5" rx="2.5" fill="#FFFFFF" />
    <circle cx="22.6" cy="5" r="3.1" fill="#FFFFFF" />
  </svg>
);

/* ---------- Guirnalda de luces bajo el header ---------- */
const ANCHO_TRAMO = 480;
const TRAMOS = 4;
const POR_TRAMO = 8;
const Y_BORDE = 2;
const Y_CONTROL = 24;
const COLORES = [ROJO, DORADO, VERDE, ROSA];

const tramos = Array.from({ length: TRAMOS }, (_, s) => {
  const x0 = s * ANCHO_TRAMO;
  const luces = Array.from({ length: POR_TRAMO }, (_, i) => {
    const t = (i + 0.5) / POR_TRAMO;
    const x = x0 + ANCHO_TRAMO * t;
    const y = Y_BORDE + 2 * t * (1 - t) * (Y_CONTROL - Y_BORDE);
    const indice = s * POR_TRAMO + i;
    return { x, y, color: COLORES[indice % COLORES.length], retardo: -(indice % 4) * 0.6 };
  });
  return { x0, luces };
});

export const GuirnaldaLuces = () => (
  <div
    className="pointer-events-none absolute left-0 right-0 top-full h-[22px] overflow-hidden"
    aria-hidden="true"
  >
    <svg
      viewBox={`0 0 ${ANCHO_TRAMO * TRAMOS} 28`}
      preserveAspectRatio="xMidYMin slice"
      className="w-full h-full"
    >
      {tramos.map(({ x0, luces }) => (
        <g key={x0}>
          <path
            d={`M ${x0} ${Y_BORDE} Q ${x0 + ANCHO_TRAMO / 2} ${Y_CONTROL} ${x0 + ANCHO_TRAMO} ${Y_BORDE}`}
            fill="none"
            stroke="#15803D"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {luces.map(({ x, y, color, retardo }, i) => (
            <g key={i} className="luz-navidad" style={{ animationDelay: `${retardo}s` }}>
              <line x1={x} y1={y} x2={x} y2={y + 4} stroke="#15803D" strokeWidth="1.2" />
              <circle cx={x} cy={y + 8} r="6" fill={color} opacity="0.18" />
              <ellipse cx={x} cy={y + 8} rx="2.9" ry="3.8" fill={color} />
              <ellipse cx={x - 0.8} cy={y + 6.8} rx="0.8" ry="1.1" fill="#FFFFFF" opacity="0.65" />
            </g>
          ))}
        </g>
      ))}
    </svg>
  </div>
);

/* ---------- Nieve suave sobre el hero ---------- */
const COPOS = Array.from({ length: 16 }, (_, i) => ({
  izquierda: (i * 37 + (i % 3) * 11) % 100,
  tamano: 9 + ((i * 7) % 5) * 3,
  duracion: 9 + ((i * 5) % 7),
  retardo: -((i * 13) % 11) * 0.9,
  deriva: ((i % 4) - 1.5) * 28,
  opacidad: 0.22 + ((i % 4) * 0.09),
  color: i % 3 === 0 ? '#F9A8D4' : i % 3 === 1 ? '#BAE6FD' : '#CBD5E1',
  figura: i % 4 === 0 ? '✦' : '❄',
}));

export const Nieve = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
    {COPOS.map((copo, i) => (
      <span
        key={i}
        className="copo"
        style={{
          left: `${copo.izquierda}%`,
          fontSize: `${copo.tamano}px`,
          color: copo.color,
          opacity: copo.opacidad,
          animationDuration: `${copo.duracion}s`,
          animationDelay: `${copo.retardo}s`,
          ['--deriva' as string]: `${copo.deriva}px`,
        }}
      >
        {copo.figura}
      </span>
    ))}
  </div>
);
