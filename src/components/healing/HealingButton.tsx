interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "option" | "option-selected";
}

const HealingButton = ({ children, onClick, variant = "primary" }: Props) => {
  const base =
    "w-full min-h-[52px] rounded-btn font-heading font-semibold text-base transition-all duration-200 active:scale-[1.02] select-none";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-md",
    option:
      "bg-card/70 text-foreground border border-border/60 hover:bg-card/90 shadow-sm backdrop-blur-sm",
    "option-selected": "bg-primary text-primary-foreground shadow-md",
  };

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default HealingButton;
