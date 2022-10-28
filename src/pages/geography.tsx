import { GeographyChart } from '../components/charts/geo-chart';
import { Heading } from '../components/layout/heading';

export const Geography = () => {
  return (
    <section>
      <Heading
        title="geographical charts"
        subTitle="latest traffic analytics"
      />
      <div className="h-[70rem]">
        <GeographyChart />
      </div>
    </section>
  );
};
