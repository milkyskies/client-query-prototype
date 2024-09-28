type CardProps = {
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="p-4 sm:p-5 bg-white border border-stone-200 rounded-xl shadow-sm">
      {children}
    </div>
  );
};
