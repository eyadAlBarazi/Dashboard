import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function Header({title,discription,isDash=false}) {
  const theme = useTheme();
  return (
    <div style={{marginBottom:isDash?'20px' : "40px"}}>
      <Typography
        sx={{textTransform:"uppercase", color: theme.palette.info.light, fontWeight: "bold" }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography variant="body1">{discription}</Typography>
    </div>
  );
}

export default Header;
