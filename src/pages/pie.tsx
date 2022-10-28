import { Heading } from '../components/layout/heading';
import { PieChart } from '../components/charts/pie-chart';

export const Pie = () => {
  return (
    <section>
      <Heading
        title="bar charts"
        subTitle="latest analytics viewed in pie form"
      />
      <div className="h-[70rem]">
        <PieChart />
      </div>
    </section>
  );
};
