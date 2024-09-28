import { Card } from "@/ui/card";

type DataCardProps = {
  title: string;
  value: string;
  icon?: React.ReactNode;
};

export const DataCard: React.FC<DataCardProps> = (props: {
  title: string;
  value: string;
  icon?: React.ReactNode;
}) => {
  return (
    <Card>
      <div className="sm:flex sm:gap-x-3 h-full">
        {props.icon}
        <div className="grow flex flex-col justify-between h-full">
          <h2 className="sm:mb-3 text-sm text-stone-500">{props.title}</h2>
          <p className="text-lg md:text-xl font-semibold text-stone-800">
            {props.value}
          </p>
        </div>
      </div>
    </Card>
  );
};
