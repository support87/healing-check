import HealingButton from "./HealingButton";

interface Props {
  onSelect: (hasSymptoms: boolean) => void;
}

const ScreenEntry = ({ onSelect }: Props) => (
  <div className="flex flex-col items-center text-center gap-8">
    <div>
      <h1 className="text-3xl font-heading font-semibold text-foreground leading-tight">
        Healing Check 🌿
      </h1>
      <p className="mt-3 text-muted-foreground font-body text-lg leading-relaxed">
        Your body is adjusting.
      </p>
    </div>

    <p className="text-foreground font-body text-lg leading-relaxed">
      Are you feeling any withdrawal symptoms right now?
    </p>

    <div className="flex flex-col gap-3 w-full">
      <HealingButton onClick={() => onSelect(true)}>Yes</HealingButton>
      <HealingButton onClick={() => onSelect(false)}>No</HealingButton>
    </div>
  </div>
);

export default ScreenEntry;
