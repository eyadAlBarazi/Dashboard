import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./DataGeo";
import { geo } from "./Features";
import { useTheme } from "@mui/material/styles";

function GeoChar({isDash = false}) {
  const theme = useTheme();
  return (
  <div style={{
        borderRadius: "5px",
        width: "100%",
        height:isDash ? '400px': "75vh",
        border: isDash ?null : `1px solid ${theme.palette.text.primary}`,
      }}>
      <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
      data={data}
      features={geo.features}
      theme={{
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "#ffffff",
        },
        axis: {
          domain: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 12,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
          },
        },
        grid: {
          line: {
            stroke: theme.palette.divider,
            strokeWidth: 1,
          },
        },
        legends: {
          title: {
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
          },
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "#ffffff",
          },
          ticks: {
            line: {},
            text: {
              fontSize: 10,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
          },
        },
        annotations: {
          text: {
            fontSize: 13,
            fill: theme.palette.text.primary,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          link: {
            stroke: "#000000",
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          outline: {
            stroke: "#000000",
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          symbol: {
            fill: "#000000",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
        },
        tooltip: {
          wrapper: {},
          container: {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      projectionScale={isDash ? 70: 150}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="RdYlBu"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      enableGraticule={false}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={
        
        isDash ? [] :
        
        [
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: theme.palette.text.primary,
          itemOpacity: 0.85,
          symbolSize: 18,
        },
      ]}
    />
  </div>
  );
}

export default GeoChar;
