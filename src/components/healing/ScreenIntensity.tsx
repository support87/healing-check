import { useState } from "react";
import HealingButton from "./HealingButton";

interface Props {
  value: number;
  onChange: (v: number) => void;
  onContinue: () => void;
}

function getLabel(v: number) {
  if (v <= 3) return "Light";
  if (v <= 6) return "Manageable";
  if (v <= 8) return "Strong";
  return "Very intense";
}

const ScreenIntensity = ({ value, onChange, onContinue }: Props) => {
  const [interacted, setInteracted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
    if (!interacted) setInteracted(true);
  };

  const pct = ((value - 1) / 9) * 100;
  const label = getLabel(value);

  return (
    <div className="flex flex-col items-center text-center gap-8">
      <p className="text-xl font-heading font-semibold text-foreground">
        How intense is it right now?
      </p>

      <div className="w-full px-2">
        {/* Current value display */}
        <div className="flex flex-col items-center mb-5 gap-1">
          <span className="text-4xl font-heading font-bold text-foreground">{value}</span>
          <span className="text-sm font-body text-muted-foreground tracking-wide uppercase">{label}</span>
        </div>

        <div className="relative w-full">
          <input
            type="range"
            min={1}
            max={10}
            value={value}
            onChange={handleChange}
            className="intensity-slider w-full"
            style={{
              background: `linear-gradient(to right, hsl(33, 60%, 75%) 0%, hsl(33, 60%, 75%) ${pct}%, hsl(150, 15%, 85%) ${pct}%, hsl(150, 15%, 85%) 100%)`,
            }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm font-body text-muted-foreground">
          <span>1</span>
          <span>10</span>
        </div>
      </div>

      {interacted && (
        <div className="w-full animate-fade-in">
          <HealingButton onClick={onContinue}>Continue</HealingButton>
        </div>
      )}

      <style>{`
        .intensity-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 12px;
          border-radius: 6px;
          outline: none;
          cursor: pointer;
        }
        .intensity-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.18);
          cursor: pointer;
          transition: transform 0.15s ease;
        }
        .intensity-slider::-webkit-slider-thumb:active {
          transform: scale(1.12);
        }
        .intensity-slider::-moz-range-thumb {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.18);
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default ScreenIntensity;
