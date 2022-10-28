import { Card } from '../ui/card';
import { PorgressRing } from './porgress-ring';

interface StatsBoxProp {
  title: string;
  count: number;
  icon: JSX.Element;
  progress: number;
  increase: number;
}

export const StatsBox = ({
  title,
  count,
  icon,
  progress,
  increase,
}: StatsBoxProp) => {
  return (
    <Card>
      <article className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <span className="h-10 w-10">{icon}</span>
          <p className="text-3xl font-bold tracking-wider">{count}</p>
          <p className="text-xl font-semibold capitalize tracking-wide">
            {title}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <PorgressRing progress={progress} size={80} />
          <p className="text-xl font-bold tracking-wider">
            <i>{increase.toPrecision(2)}%</i>
          </p>
        </div>
      </article>
    </Card>
  );
};
