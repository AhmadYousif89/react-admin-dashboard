import { BarChart } from '../components/charts/bar-chart';
import { Heading } from '../components/layout/heading';

export const Bar = () => {
  return (
    <section>
      <Heading
        title="bar charts"
        subTitle="latest analytics viewed in bars form"
      />
      <div className="h-[70rem]">
        <BarChart />
      </div>
    </section>
  );
};
