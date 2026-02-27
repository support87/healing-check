import HealingButton from "./HealingButton";

const SYMPTOMS = [
  "Irritability",
  "Restlessness",
  "Headache",
  "Low mood",
  "Trouble sleeping",
  "Strong cravings",
  "Other",
];

interface Props {
  selected: string[];
  setSelected: (s: string[]) => void;
  otherText: string;
  setOtherText: (s: string) => void;
  onContinue: () => void;
}

const ScreenSymptomSelect = ({ selected, setSelected, otherText, setOtherText, onContinue }: Props) => {
  const toggle = (s: string) => {
    setSelected(
      selected.includes(s) ? selected.filter((x) => x !== s) : [...selected, s]
    );
  };

  const showOtherInput = selected.includes("Other");

  return (
    <div className="flex flex-col items-center text-center gap-6">
      <p className="text-xl font-heading font-semibold text-foreground">
        What feels most noticeable?
      </p>

      <div className="flex flex-col gap-2.5 w-full">
        {SYMPTOMS.map((s) => (
          <HealingButton
            key={s}
            variant={selected.includes(s) ? "option-selected" : "option"}
            onClick={() => toggle(s)}
          >
            {s}
          </HealingButton>
        ))}
      </div>

      {showOtherInput && (
        <input
          type="text"
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
          placeholder="Describe what you're feeling..."
          className="w-full px-4 py-3 rounded-btn bg-card/60 border border-border text-foreground font-body text-center placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200 animate-fade-in"
        />
      )}

      {selected.length > 0 && (
        <div className="w-full animate-fade-in">
          <HealingButton onClick={onContinue}>Continue</HealingButton>
        </div>
      )}
    </div>
  );
};

export default ScreenSymptomSelect;
