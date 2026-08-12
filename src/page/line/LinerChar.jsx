import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 1000,
      },
      {
        x: "helicopter",
        y: 600,
      },
      {
        x: "boat",
        y: 200,
      },
      {
        x: "train",
        y: 184,
      },
      {
        x: "subway",
        y: 17,
      },
      {
        x: "bus",
        y: 127,
      },
      {
        x: "car",
        y: 117,
      },
      {
        x: "moto",
        y: 289,
      },
      {
        x: "bicycle",
        y: 287,
      },
      {
        x: "horse",
        y: 580,
      },
      {
        x: "skateboard",
        y: 600,
      },
      {
        x: "others",
        y: 1760,
      },
    ],
  },
  {
    id: "france",
    data: [
      {
        x: "plane",
        y: 5,
      },
      {
        x: "helicopter",
        y: 72,
      },
      {
        x: "boat",
        y: 136,
      },
      {
        x: "train",
        y: 181,
      },
      {
        x: "subway",
        y: 124,
      },
      {
        x: "bus",
        y: 70,
      },
      {
        x: "car",
        y: 250,
      },
      {
        x: "moto",
        y: 63,
      },
      {
        x: "bicycle",
        y: 287,
      },
      {
        x: "horse",
        y: 137,
      },
      {
        x: "skateboard",
        y: 215,
      },
      {
        x: "others",
        y: 72,
      },
    ],
  },
  {
    id: "us",
    data: [
      {
        x: "plane",
        y: 186,
      },
      {
        x: "helicopter",
        y: 19,
      },
      {
        x: "boat",
        y: 250,
      },
      {
        x: "train",
        y: 19,
      },
      {
        x: "subway",
        y: 219,
      },
      {
        x: "bus",
        y: 220,
      },
      {
        x: "car",
        y: 17,
      },
      {
        x: "moto",
        y: 55,
      },
      {
        x: "bicycle",
        y: 58,
      },
      {
        x: "horse",
        y: 60,
      },
      {
        x: "skateboard",
        y: 102,
      },
      {
        x: "others",
        y: 109,
      },
    ],
  },
  {
    id: "germany",
    data: [
      {
        x: "plane",
        y: 66,
      },
      {
        x: "helicopter",
        y: 150,
      },
      {
        x: "boat",
        y: 70,
      },
      {
        x: "train",
        y: 16,
      },
      {
        x: "subway",
        y: 193,
      },
      {
        x: "bus",
        y: 161,
      },
      {
        x: "car",
        y: 22,
      },
      {
        x: "moto",
        y: 253,
      },
      {
        x: "bicycle",
        y: 119,
      },
      {
        x: "horse",
        y: 221,
      },
      {
        x: "skateboard",
        y: 0,
      },
      {
        x: "others",
        y: 158,
      },
    ],
  },
  {
    id: "norway",
    data: [
      {
        x: "plane",
        y: 296,
      },
      {
        x: "helicopter",
        y: 130,
      },
      {
        x: "boat",
        y: 74,
      },
      {
        x: "train",
        y: 297,
      },
      {
        x: "subway",
        y: 1,
      },
      {
        x: "bus",
        y: 44,
      },
      {
        x: "car",
        y: 162,
      },
      {
        x: "moto",
        y: 160,
      },
      {
        x: "bicycle",
        y: 283,
      },
      {
        x: "horse",
        y: 10,
      },
      {
        x: "skateboard",
        y: 103,
      },
      {
        x: "others",
        y: 145,
      },
    ],
  },
];

function LinerChar({ isDashbord = false }) {
  const theme = useTheme();
  return (
    <Box style={{ height: isDashbord ? "280px":"75vh", width: "100%" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
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
        axisBottom={{ legend: "transportation", legendOffset: 36 }}
        axisLeft={{ legend: isDashbord ?"":"count", legendOffset: -40 }}
        colors={{ scheme: "set1" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaBlendMode="lighten"
        areaOpacity={0.15}
        isInteractive={false}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 105,
            translateY: 1,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
}

export default LinerChar;
