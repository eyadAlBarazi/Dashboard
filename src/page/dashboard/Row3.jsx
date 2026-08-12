import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import PieChar from "../pie/PieChar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import BarChar from "../bar/BarChar";
import GeoChar from "../geography/GeoChar";

function Row3() {
  const theme = useTheme();
  return (
    <Stack sx={{ flexWrap: "wrap", mt: 2, gap: 1 }} direction={"row"}>
      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "28%" }}>
        <Typography
          variant="h6"
          sx={{
            padding: "30px 30px 0 30px",
            fontWeight: 600,
            color: theme.palette.secondary.main,
          }}
        >
          Campigen
        </Typography>
        <PieChar isDash={true} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              alignItems: "center",
              mt: "15px",
            }}
          >
            $48,352 revenue generated
          </Typography>

          <Typography
            variant="body2"
            sx={{
              px: 0.7,
              pb: 3,
            }}
          >
            includes extra misc expeneditures and costs
          </Typography>
        </div>
      </Paper>

      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "33%" }}>
        <Typography
          variant="h6"
          sx={{
            padding: "30px 30px 0 30px",
            fontWeight: 600,
            color: theme.palette.secondary.main,
          }}
        >
          Sales Quantite
        </Typography>
        <BarChar isDash={true}/>
      </Paper>

      <Paper sx={{ minWidth: "400px", flexGrow: 1, width: "33%" }}>
        <GeoChar isDash={true}/>
      </Paper>
    </Stack>
  ); 
}

export default Row3;
