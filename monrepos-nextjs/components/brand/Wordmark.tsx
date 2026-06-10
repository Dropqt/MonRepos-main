import Hawk from "./Hawk";

/**
 * "Mon Repos" wordmark with the hawk perched on the first "o".
 * Size + color are inherited - set font-size and a text color on `className`
 * (the hawk follows currentColor). Placeholder lettering uses Playfair Display.
 */
type WordmarkProps = {
  stacked?: boolean; // Mon / Repos on two lines, vs. inline
  className?: string;
};

export default function Wordmark({ stacked = false, className = "" }: WordmarkProps) {
  const O = (
    <span className="wm-o">
      o<Hawk className="wm-hawk" />
    </span>
  );

  return (
    <span className={`wordmark ${className}`} aria-label="Mon Repos">
      {stacked ? (
        <>
          <span className="wm-line" aria-hidden="true">
            M{O}n
          </span>
          <span className="wm-line" aria-hidden="true">
            Repos
          </span>
        </>
      ) : (
        <span aria-hidden="true">
          M{O}n&nbsp;Repos
        </span>
      )}
    </span>
  );
}
