import Stack from "@mui/material/Stack";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";
import { useTheme } from "@mui/material/styles";
import { data1 } from "./data";
import { data2 } from "./data";
import { data3 } from "./data";
import { data4 } from "./data";


function Row1() {
  const theme = useTheme()
  return (
    <Stack
      sx={{
        display:"flex",
        justifyContent: { xs: "center", sm: "space-between" },
        flexWrap: "wrap",
        gap: 1,
      }}
      direction={"row"}
    >
      <Card
        icon={<EmailIcon sx={{fontSize:"23px",color:theme.palette.secondary.main}}/>}
        title={"12,368"}
        subTitle={"Email sent"}
        data={data1}
        increasie={"+14%"}
        scheme={'category10'}
      />
      <Card
        icon={<PointOfSaleIcon sx={{fontSize:"23px",color:theme.palette.secondary.main}}/>}
        title={'4321,87'}
        subTitle={'sales obtaindes'}
        data={data2}
        increasie={'+21%'}
        scheme={'paired'}
      />
      <Card
        icon={<PersonAddAltOutlinedIcon sx={{fontSize:"23px",color:theme.palette.secondary.main}}/>}
        title={'32,411'}
        subTitle={'New Clients'}
        data={data3}
        increasie={'+5%'}
        scheme={'accent'}
      />
      <Card
        icon={<TrafficOutlinedIcon sx={{fontSize:"23px",color:theme.palette.secondary.main}}/>}
        title={'1,253,000'}
        subTitle={'Traffic Recevid'}
        data={data4}
        increasie={'+43%'}
        scheme={'red_yellow_green'}
      />
    </Stack>
  );
}

export default Row1;
