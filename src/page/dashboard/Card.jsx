import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@mui/material/styles";
function Card({ icon, title, subTitle, data, increasie, scheme }) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        flexGrow: 1,
        minWidth: "333px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack sx={{ gap: 1 }} direction={"column"}>
        {icon}
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {subTitle}
        </Typography>
      </Stack>

      <Stack
        sx={{ justifyContent: "center", alignItems: "center" }}
        direction={"column"}
      >
        <div style={{ height: "80px", width: "80px" }}>
          <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.5}
            colors={{ scheme: scheme }}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            enableArcLabels={false}
            enableArcLinkLabels={false}
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
          />
        </div>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {increasie}
        </Typography>
      </Stack>
    </Paper>
  );
}

export default Card;
