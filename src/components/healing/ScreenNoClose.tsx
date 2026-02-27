import HealingButton from "./HealingButton";

interface Props {
  onDone: () => void;
}

const ScreenNoClose = ({ onDone }: Props) => (
  <div className="flex flex-col items-center text-center gap-8 animate-fade-in">
    <div>
      <p className="text-xl font-heading font-semibold text-foreground">
        Your system is stabilizing.
      </p>
      <p className="mt-4 text-lg font-body text-muted-foreground leading-relaxed">
        Each day without nicotine helps your body reset.
      </p>
    </div>
    <HealingButton onClick={onDone}>Done</HealingButton>
  </div>
);

export default ScreenNoClose;
