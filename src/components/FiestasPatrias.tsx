const AZUL = '#0039A6';
const ROJO = '#D52B1E';
const BLANCO = '#FFFFFF';

export const BanderaChile = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
    <rect width="30" height="20" fill={ROJO} />
    <rect width="30" height="10" fill={BLANCO} />
    <rect width="10" height="10" fill={AZUL} />
    <polygon
      points="5,2 5.67,4.07 7.85,4.07 6.09,5.35 6.76,7.43 5,6.15 3.24,7.43 3.91,5.35 2.15,4.07 4.33,4.07"
      fill={BLANCO}
    />
  </svg>
);

const ANCHO_TRAMO = 480;
const TRAMOS = 4;
const POR_TRAMO = 9;
const Y_BORDE = 4;
const Y_CONTROL = 40;
const COLORES = [AZUL, BLANCO, ROJO];

const tramos = Array.from({ length: TRAMOS }, (_, s) => {
  const x0 = s * ANCHO_TRAMO;
  const banderines = Array.from({ length: POR_TRAMO }, (_, i) => {
    const t = (i + 0.5) / POR_TRAMO;
    const x = x0 + ANCHO_TRAMO * t;
    const y = Y_BORDE + 2 * t * (1 - t) * (Y_CONTROL - Y_BORDE);
    return { x, y, color: COLORES[(s * POR_TRAMO + i) % COLORES.length] };
  });
  return { x0, banderines };
});

export const Banderines = () => (
  <div className="pointer-events-none absolute left-0 right-0 top-16 md:top-[72px] h-[max(56px,4vw)]" aria-hidden="true">
    <svg viewBox={`0 0 ${ANCHO_TRAMO * TRAMOS} 64`} preserveAspectRatio="xMidYMin slice" className="w-full h-full">
      {tramos.map(({ x0, banderines }) => (
        <g key={x0}>
          <path
            d={`M ${x0} ${Y_BORDE} Q ${x0 + ANCHO_TRAMO / 2} ${Y_CONTROL} ${x0 + ANCHO_TRAMO} ${Y_BORDE}`}
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
          />
          {banderines.map(({ x, y, color }, i) => (
            <polygon
              key={i}
              className="banderin"
              style={{ animationDelay: `${-(i % 5) * 0.6}s` }}
              points={`${x - 20},${y} ${x + 20},${y} ${x},${y + 38}`}
              fill={color}
              stroke="rgba(0,0,0,0.12)"
              strokeWidth="1"
            />
          ))}
        </g>
      ))}
    </svg>
  </div>
);

export const FranjaTricolor = () => (
  <div className="absolute bottom-0 left-0 right-0 h-1 flex" aria-hidden="true">
    <div className="flex-1" style={{ backgroundColor: AZUL }} />
    <div className="flex-1" style={{ backgroundColor: BLANCO }} />
    <div className="flex-1" style={{ backgroundColor: ROJO }} />
  </div>
);
