export function WaveBackground({
  position,
  color = "#f0f9ff",
  className = "",
}) {
  const path =
    position === "top"
      ? "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      : "M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

  return (
    <div className={`absolute ${position}-0 left-0 w-full ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full"
      >
        <path fill={color} fillOpacity="1" d={path}></path>
      </svg>
    </div>
  );
}

export function BlobBackground({ position, color, className = "" }) {
  return (
    <div
      className={`absolute ${
        position === "top-right" ? "top-0 right-0" : "bottom-0 left-0"
      } ${className}`}
    >
      <svg
        width="400"
        height="400"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        <path
          fill={color}
          d="M47.1,-61.5C62.2,-52.8,76.5,-41.1,81.5,-26.2C86.5,-11.3,82.2,6.8,74.1,22.1C66,37.4,54.1,49.9,40.1,57.6C26.1,65.3,10.1,68.2,-5.9,67.5C-21.9,66.8,-37.9,62.5,-48.5,52.4C-59.1,42.3,-64.3,26.5,-67.7,9.7C-71.1,-7.1,-72.7,-24.9,-65.8,-38.7C-58.9,-52.5,-43.5,-62.3,-28.1,-70.8C-12.7,-79.3,2.8,-86.5,17.1,-82.9C31.4,-79.3,45.5,-64.9,47.1,-61.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
