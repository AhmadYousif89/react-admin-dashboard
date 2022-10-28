import { ResponsiveLine } from '@nivo/line';
import { mockLineData } from '../../mocks/mock-data';

export const LineChart = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-xl capitalize text-base-color">revenue generated</p>
        <p className="text-3xl text-base-color">$ 426,786,21</p>
      </div>
      <ResponsiveLine
        data={mockLineData}
        theme={{
          textColor: 'var(--text-color)',
          axis: {
            domain: {
              line: {
                stroke: 'var(--text-color)',
              },
            },
            legend: {
              text: {
                fill: 'var(--text-color)',
              },
            },
            ticks: {
              line: {
                stroke: 'var(--text-color)',
                strokeWidth: 1,
              },
              text: {
                fill: 'var(--text-color)',
              },
            },
          },
          tooltip: {
            container: {
              backgroundColor: '#333',
              fontSize: '1.25rem',
            },
          },
          crosshair: { line: { stroke: 'var(--fill-color)' } },
        }}
        colors={{ scheme: 'nivo' }}
        margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=">-.2f"
        curve="linear"
        enablePointLabel
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickValues: 5,
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -50,
          legendPosition: 'middle',
        }}
        crosshairType="cross"
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .3)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};
