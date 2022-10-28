import { ResponsiveBar } from '@nivo/bar';
import { mockBarData } from '../../mocks/mock-data';

export const BarChart = () => {
  return (
    <ResponsiveBar
      data={mockBarData}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"
      theme={{
        tooltip: {
          container: {
            backgroundColor: '#333',
            fontSize: '1.25rem',
          },
        },
        axis: {
          domain: {
            line: {
              stroke: 'var(--text-color)',
            },
          },
          ticks: {
            line: {
              stroke: 'var(--text-color)',
              strokeWidth: 2,
            },
            text: {
              fill: 'var(--text-color)',
            },
          },
          legend: {
            text: { fill: 'var(--text-color)' },
          },
        },
      }}
      margin={{ top: 20, right: 110, bottom: 60, left: 60 }}
      padding={0.4}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      innerPadding={2}
      enableGridX
      axisBottom={{
        tickSize: 5,
        tickPadding: 1,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 25,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          itemTextColor: 'var(--text-color)',
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'var(--bg-color)',
                itemTextColor: 'var(--text-color)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
      }}
    />
  );
};
