import { useEffect, useState } from "react";

const ScreenComplete = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`flex flex-col items-center text-center gap-4 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-2xl font-heading font-semibold text-foreground">🌿</p>
      <p className="text-lg font-body text-muted-foreground">Check-in complete.</p>
    </div>
  );
};

export default ScreenComplete;
