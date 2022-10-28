import { ResponsivePie } from '@nivo/pie';
import { mockPieData } from '../../mocks/mock-data';

export const PieChart = () => {
  return (
    <ResponsivePie
      data={mockPieData}
      margin={{ top: 20, right: 0, bottom: 70, left: 0 }}
      theme={{
        tooltip: {
          container: { backgroundColor: '#333', fontSize: '1.25rem' },
        },
      }}
      innerRadius={0.65}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="var(--text-color)"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'html',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'react',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'css',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 55,
          itemsSpacing: 0,
          itemWidth: 90,
          itemHeight: 10,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          symbolSpacing: 6,
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                symbolSize: 20,
                itemTextColor: 'var(--text-color)',
              },
            },
          ],
        },
      ]}
    />
  );
};
