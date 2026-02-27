import HealingButton from "./HealingButton";

interface Props {
  onFinish: () => void;
}

const ScreenYesClose = ({ onFinish }: Props) => (
  <div className="flex flex-col items-center text-center gap-8 animate-fade-in">
    <div>
      <p className="text-xl font-heading font-semibold text-foreground leading-snug">
        You're healing, even if it's uncomfortable.
      </p>
      <p className="mt-4 text-lg font-body text-muted-foreground leading-relaxed">
        Your body is learning to function without nicotine — and that's powerful.
      </p>
    </div>
    <HealingButton onClick={onFinish}>Finish Check-In</HealingButton>
  </div>
);

export default ScreenYesClose;
