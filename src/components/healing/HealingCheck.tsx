import { useState, useCallback } from "react";
import ScreenEntry from "@/components/healing/ScreenEntry";
import ScreenNoSymptoms from "@/components/healing/ScreenNoSymptoms";
import ScreenNoClose from "@/components/healing/ScreenNoClose";
import ScreenSymptomSelect from "@/components/healing/ScreenSymptomSelect";
import ScreenIntensity from "@/components/healing/ScreenIntensity";
import ScreenAcknowledgment from "@/components/healing/ScreenAcknowledgment";
import ScreenYesClose from "@/components/healing/ScreenYesClose";
import ScreenComplete from "@/components/healing/ScreenComplete";

export type Step =
  | "entry"
  | "no-symptoms"
  | "no-close"
  | "symptom-select"
  | "intensity"
  | "acknowledgment"
  | "yes-close"
  | "complete";

const HealingCheck = () => {
  const [step, setStep] = useState<Step>("entry");
  const [transitioning, setTransitioning] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [intensity, setIntensity] = useState(5);
  const [otherText, setOtherText] = useState("");

  const goTo = useCallback((next: Step) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(next);
      setTransitioning(false);
    }, 300);
  }, []);

  return (
    <div className="healing-gradient fixed inset-0 flex items-center justify-center overflow-hidden">
      <div
        className={`w-full max-w-md px-6 transition-all duration-300 ease-in-out ${
          transitioning
            ? "opacity-0 translate-x-[-40px]"
            : "opacity-100 translate-x-0"
        }`}
      >
        {step === "entry" && <ScreenEntry onSelect={(hasSymptoms) => goTo(hasSymptoms ? "symptom-select" : "no-symptoms")} />}
        {step === "no-symptoms" && <ScreenNoSymptoms onContinue={() => goTo("no-close")} />}
        {step === "no-close" && <ScreenNoClose onDone={() => goTo("complete")} />}
        {step === "symptom-select" && (
          <ScreenSymptomSelect
            selected={selectedSymptoms}
            setSelected={setSelectedSymptoms}
            otherText={otherText}
            setOtherText={setOtherText}
            onContinue={() => goTo("intensity")}
          />
        )}
        {step === "intensity" && (
          <ScreenIntensity
            value={intensity}
            onChange={setIntensity}
            onContinue={() => goTo("acknowledgment")}
          />
        )}
        {step === "acknowledgment" && (
          <ScreenAcknowledgment intensity={intensity} onContinue={() => goTo("yes-close")} />
        )}
        {step === "yes-close" && <ScreenYesClose onFinish={() => goTo("complete")} />}
        {step === "complete" && <ScreenComplete />}
      </div>
    </div>
  );
};

export default HealingCheck;
