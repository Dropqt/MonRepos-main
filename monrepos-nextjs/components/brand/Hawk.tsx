/**
 * Mon Repos hawk - traced/vectorized from the printed business card.
 * Placeholder until the designer's master SVG arrives (swap the <path> here only).
 * Fills with currentColor; the eye is a true hole (fill-rule evenodd).
 */
type HawkProps = {
  className?: string;
  title?: string;
};

export default function Hawk({ className, title = "Mon Repos soko" }: HawkProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      role="img"
      aria-label={title}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M66.1,7.5 C73.4,7.5 85.5,6.1 93.5,9.8 C101.5,13.5 110.2,24.8 113.9,29.7 C117.7,34.6 116.2,37.5 116.0,39.5 C115.8,41.5 114.2,42.0 112.8,41.5 C111.4,41.0 110.3,37.6 107.6,36.6 C104.9,35.6 102.0,33.6 96.6,35.5 C91.2,37.4 83.9,46.3 75.3,47.9 C66.7,49.5 56.1,44.3 45.0,45.3 C33.9,46.3 14.1,55.1 8.9,53.9 C3.8,52.6 10.5,43.6 14.1,37.8 C17.7,32.0 24.7,24.0 30.6,19.3 C36.5,14.6 43.7,11.8 49.6,9.8 C55.5,7.8 58.8,7.5 66.1,7.5 Z M71.8,19.2 a5.5,5.5 0 1,0 11.0,0 a5.5,5.5 0 1,0 -11.0,0 Z"
      />
    </svg>
  );
}
