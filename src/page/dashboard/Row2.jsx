import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import LinerChar from "../line/LinerChar";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import { Transaction } from "./data";
function Row2() {
  const theme = useTheme();
  return (
    <Stack sx={{ gap: 1.5, marginTop: 2 }} direction={"row"}>
      <Paper sx={{ minWidth:400,maxWidth: 900, flexGrow: 1 }}>
        <Stack
          sx={{
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          direction={"row"}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ color: theme.palette.secondary.main, mb: 1, mt: 2, ml: 4 }}
            >
              Revenue Genrated
            </Typography>

            <Typography variant="body2" sx={{ ml: 4 }}>
              $59,342,32
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadIcon />
            </IconButton>
          </Box>
        </Stack>

        <LinerChar isDashbord={true} />
      </Paper>

      <Box
        sx={{
          flexGrow: 1,
          height: "350px",
          minWidth: "280px",
          maxHeight:"380px",
          overflow:"auto"
        }}
      >
        <Paper>
          <Typography
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: "bold",
              p: 1.2,
            }}
            variant="h6"
          >
            Recent Transaction
          </Typography>
        </Paper>

        {Transaction.map((item) => {
          return(
            <Paper
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ p: 1.2 }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {item.txId}
            </Typography>
            <Typography variant="body2">{item.user}</Typography>
          </Box>

          <Typography variant="body1">{item.data}</Typography>

          <Typography
            sx={{ borderRadius: 1.4, p: 1, bgcolor: theme.palette.error.main }}
            variant="body2"
          >
            {item.cost} $
          </Typography>
        </Paper>
          )
        })}

        
      </Box>
    </Stack>
  );
}

export default Row2;
