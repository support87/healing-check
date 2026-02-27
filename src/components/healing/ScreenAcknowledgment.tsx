import { useEffect, useState } from "react";
import HealingButton from "./HealingButton";

interface Props {
  intensity: number;
  onContinue: () => void;
}

function getMessages(intensity: number) {
  if (intensity <= 3) return { primary: "This is gentle adjustment.", support: "Your body is beginning to reset." };
  if (intensity <= 6) return { primary: "You're feeling the adjustment.", support: "Your system is actively recalibrating." };
  if (intensity <= 8) return { primary: "This can feel challenging.", support: "Real healing changes are happening." };
  return { primary: "This is a peak moment.", support: "Strong waves still pass." };
}

const ScreenAcknowledgment = ({ intensity, onContinue }: Props) => {
  const { primary, support } = getMessages(intensity);
  const [showPrimary, setShowPrimary] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowPrimary(true), 200);
    const t2 = setTimeout(() => setShowSupport(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="flex flex-col items-center text-center gap-8 relative">
      {/* Ripple pulse background */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full bg-secondary/10 ripple-pulse" />
      </div>

      <div className="min-h-[120px] flex flex-col justify-center gap-4">
        <p
          className={`text-xl font-heading font-semibold text-foreground transition-all duration-300 ${
            showPrimary ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {primary}
        </p>
        <p
          className={`text-lg font-body text-muted-foreground leading-relaxed transition-all duration-500 ${
            showSupport ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {support}
        </p>
      </div>

      <HealingButton onClick={onContinue}>I understand</HealingButton>
    </div>
  );
};

export default ScreenAcknowledgment;
