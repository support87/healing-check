import { useEffect, useState } from "react";
import HealingButton from "./HealingButton";

interface Props {
  onContinue: () => void;
}

const ScreenNoSymptoms = ({ onContinue }: Props) => {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowSecond(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col items-center text-center gap-8">
      <div>
        <p className="text-xl font-body text-foreground animate-fade-in">
          No noticeable symptoms.
        </p>
        <p
          className={`mt-4 text-lg font-body text-muted-foreground transition-all duration-500 ${
            showSecond ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          That's a good sign.
        </p>
      </div>
      <HealingButton onClick={onContinue}>Continue</HealingButton>
    </div>
  );
};

export default ScreenNoSymptoms;
