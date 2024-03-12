interface CardHeaderProps {
  title: string;
  subtitle?: string;
}

export const CardHeader = ({ title, subtitle }: CardHeaderProps) => {
  return (
    <div>
      <h1 className="font-semibold text-2xl md:text-4xl leading-[46px] text-trueGray-800">
        {title}
      </h1>
      <h2 className="text-trueGray-500 text-sm">{subtitle}</h2>
    </div>
  );
};
