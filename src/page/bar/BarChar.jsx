
import { ResponsiveBar } from "@nivo/bar";
import { useTheme } from "@mui/material/styles";

const data = [
  {
    year: "2019",
    Spain: "1000",
    France: "3500",
    Germany: "1800",
  },
  {
    year: "2020",
    Spain: "4000",
    France: "1500",
    Germany: "1800",
  },
  {
    year: "2021",
    Spain: "1000",
    France: "1500",
    Germany: "1800",
  },
  {
    year: "2022",
    Spain: "3000",
    France: "1500",
    Germany: "1800",
  },
  {
    year: "2023",
    Spain: "1000",
    France: "2000",
    Germany: "1800",
  },
];


function BarChar({isDash = false}) {
     const theme = useTheme();

  return (
        <div style={{ height: isDash ? "300px": "75vh" }}>
          <ResponsiveBar /* or Bar for fixed dimensions */
            data={data}
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
                  stroke:theme.palette.divider,
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
                  background:theme.palette.background.default,
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
            indexBy="year"
            keys={["Spain", "France", "Germany"]}
            colors={{ scheme: "paired" }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                translateX: 120,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 16,
              },
            ]}
            axisBottom={{ legend: isDash ? null : "Year", legendOffset: 37 }}
            axisLeft={{ legend:isDash ? null : "min Wage", legendOffset: -54 }}
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          />
        </div>
  )
}

export default BarChar