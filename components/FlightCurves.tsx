type FlightCurvesProps = {
  className?: string;
};

export function FlightCurves({ className = "" }: FlightCurvesProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 180"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M-40 128C203 190 435 137 652 101C837 70 1011 79 1242 15"
        stroke="#0D47A1"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M-48 156C190 199 450 160 681 124C880 93 1038 106 1240 54"
        stroke="#00B6C7"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <path
        d="M-25 182C214 210 447 188 697 150C900 119 1036 133 1228 92"
        stroke="#0B8F66"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M1041 34l54 12-39 13-15 38-13-33-37-8 33-13 17-9z"
        fill="#0D47A1"
      />
    </svg>
  );
}
