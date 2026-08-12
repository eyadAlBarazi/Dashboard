// import React from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const Array1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Manage Team", icon: <PeopleAltOutlinedIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];

const Array2 = [
  { text: "Profile From", icon: <PersonOutlineOutlinedIcon />, path: "/from" },
  { text: "Calender", icon: <CalendarTodayOutlinedIcon />, path: "/calender" },
  { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
];

const Array3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
  {
    text: "Geography Chart",
    icon: <MapOutlinedIcon />,
    path: "/geography",
  },
];

function SideBar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const nav = useNavigate();
  const location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Avatar
        sx={{
          transition: ".3s",
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid grey",
        }}
        alt="Remy Sharp"
        src="data:image/jpeg;base64,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"
      />
      <Typography
        align="center"
        sx={{ fontSize: open === true ? 17 : 0, transition: ".3s" }}
      >
        Eyad
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open === true ? 15 : 0,
          transition: ".3s",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>

      <Divider />

      <List>
        {Array1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  nav(item.path);
                }}
                sx={[
                  {
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? theme.palette.info.main
                          : "#19d285"
                        : null,
                    minHeight: 48,
                    px: 2.5,
                    transition: ".3s",
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  nav(item.path);
                }}
                sx={[
                  {
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? theme.palette.info.main
                          : "#19d285"
                        : null,
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? "" : item.text} placement="left">
              <ListItemButton
                onClick={() => {
                  nav(item.path);
                }}
                sx={[
                  {
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? theme.palette.info.main
                          : "#19d285"
                        : null,
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
