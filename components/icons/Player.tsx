export function PlayerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 61"
      className="svg-icon"
    >
      <defs>
        <mask id="c7lvb" width="2" height="2" x="-1" y="-1">
          <path d="M5 4h46v53H5z" />
          <path d="M28 8l26 45H2z" />
        </mask>
        <filter
          id="c7lva"
          width="78"
          height="85"
          x="-11"
          y="-12"
          filterUnits="userSpaceOnUse"
        >
          <feOffset in="SourceGraphic" result="FeOffset1023Out" />
          <feGaussianBlur
            in="FeOffset1023Out"
            result="FeGaussianBlur1024Out"
            stdDeviation="2.4 2.4"
          />
        </filter>
      </defs>
      <g>
        <g transform="rotate(90 28 30.5)">
          <g filter="url(#c7lva)">
            <path fill="none" d="M28 8l26 45H2z" mask='url("#c7lvb")' />
            <path fillOpacity=".42" d="M28 8l26 45H2z" />
          </g>
          <path d="M28 8l26 45H2z" />
        </g>
      </g>
    </svg>
  );
}
