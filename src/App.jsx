import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./component/TopBar";
import SideBar from "./component/SideBar";
import { getDesignTokens } from "./component/Theme";
import { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(
    () => localStorage.getItem("curentMode") || "light",
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const drawerOpen = isMobile ? open : true;

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh", width: "100%" }}>
        <CssBaseline />
        <TopBar
          setMode={setMode}
          open={drawerOpen}
          handleDrawerOpen={handleDrawerOpen}
          isMobile={isMobile}
        />
        <SideBar
          open={drawerOpen}
          handleDrawerClose={handleDrawerClose}
          isMobile={isMobile}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 2.5, md: 3 },
            width: "100%",
            overflow: "hidden",
          }}
        >
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
