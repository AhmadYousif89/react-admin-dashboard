import { Heading } from '../components/layout/heading';
import { LineChart } from '../components/charts/line-chart';

export const Line = () => {
  return (
    <section>
      <Heading title="line charts" subTitle="latest revenue check" />
      <div className="h-[70rem]">
        <LineChart />
      </div>
    </section>
  );
};
