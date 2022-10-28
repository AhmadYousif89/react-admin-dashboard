import { ResponsiveChoropleth } from '@nivo/geo';
import { mockGeographyData } from '../../mocks/mock-data';
import { geoFeatures } from '../../mocks/mock-geo-features';

export const GeographyChart = ({ isDashboard = false }) => {
  return (
    <ResponsiveChoropleth
      data={mockGeographyData}
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
              stroke: 'var(--fill-color)',
            },
          },
          legend: {
            text: {
              fill: 'var(--fill-color)',
            },
          },
          ticks: {
            line: {
              stroke: 'var(--fill-color)',
              strokeWidth: 1,
            },
            text: {
              fill: 'var(--fill-color)',
            },
          },
        },
        legends: {
          text: {
            fill: 'var(--fill-color)',
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[10000, 1000000]}
      unknownColor="#ffa"
      label="properties.name"
      valueFormat=".2s"
      colors="nivo"
      projectionScale={isDashboard ? 100 : 200}
      projectionTranslation={isDashboard ? [0.45, 0.5] : [0.45, 0.45]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1}
      borderColor="#333"
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: 'var(--fill-color)',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: 'var(--text-color)',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};
