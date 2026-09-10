import { useExperience } from "../lib/use-experience";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface RollingNumberProps {
  value: number;
  minDigits: number;
}

function RollingNumber({ value, minDigits }: RollingNumberProps) {
  const chars = value.toString().padStart(minDigits, "0").split("");
  return (
    <span className="inline-block align-baseline tabular-nums leading-none">
      {chars.map((char, i) => {
        const digit = Number(char);
        return (
          <span key={i} className="relative inline-block">
            <span className="invisible">8</span>
            <span className="absolute inset-x-0 top-0 h-[1em] overflow-hidden">
              <span
                className="block transition-transform duration-500 ease-out"
                style={{ transform: `translateY(-${digit}em)` }}
              >
                {DIGITS.map((n) => (
                  <span key={n} className="block h-[1em] leading-none">
                    {n}
                  </span>
                ))}
              </span>
            </span>
          </span>
        );
      })}
    </span>
  );
}

interface UnitProps {
  value: number;
  minDigits: number;
  label: string;
}

function Unit({ value, minDigits, label }: UnitProps) {
  return (
    <span className="whitespace-nowrap">
      <RollingNumber value={value} minDigits={minDigits} />
      <span className="ml-1 text-gray-500">{label}</span>
    </span>
  );
}

const UNITS = [
  { key: "years", minDigits: 1, label: "years" },
  { key: "months", minDigits: 1, label: "months" },
  { key: "days", minDigits: 2, label: "days" },
  { key: "hours", minDigits: 2, label: "hours" },
  { key: "minutes", minDigits: 2, label: "minutes" },
  { key: "seconds", minDigits: 2, label: "seconds" },
] as const;

export const ExperienceYears = () => {
  const d = useExperience();
  return <>{d.years}</>;
};

const ExperienceCounter = () => {
  const d = useExperience();
  return (
    <>
      {UNITS.map((u, i) => (
        <span key={u.key}>
          {i > 0 && ", "}
          <Unit value={d[u.key]} minDigits={u.minDigits} label={u.label} />
        </span>
      ))}
    </>
  );
};

export default ExperienceCounter;
