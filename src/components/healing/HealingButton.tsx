interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "option" | "option-selected";
}

const HealingButton = ({ children, onClick, variant = "primary" }: Props) => {
  const base =
    "w-full min-h-[52px] rounded-btn font-heading font-semibold text-base transition-all duration-200 active:scale-[1.02] select-none";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90",
    option:
      "bg-card/60 text-foreground border border-border hover:bg-card/80",
    "option-selected": "bg-primary text-primary-foreground",
  };

  return (
    <button className={`${base} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default HealingButton;
