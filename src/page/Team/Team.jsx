// import React from 'react'

import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { useTheme } from "@emotion/react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Box, Typography } from "@mui/material";
import Header from "../../component/Header";

// import { useTheme } from "@emotion/react";
function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (


            

          <Box
            sx={{
              background:
                access === "Admin"
                  ? theme.palette.primary.light
                  : access === "Manger"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
              padding: "5px",
              borderRadius: "5px",
              textAlignL: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              height: "100%",
            }}
          >
           {access==='Admin'&&(<AdminPanelSettingsIcon sx={{color:"#fff"}}/>)}
           {access==='Manger'&&(<SecurityOutlinedIcon sx={{color:"#fff"}}/>)}
           {access==='User'&&(<LockOpenOutlinedIcon sx={{color:"#fff"}}/>)}
            <Typography sx={{color:"#fff"}}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box style={{ height: 600, width: "100%",mx:"auto" }}>

      <Header title={'TEAM'} discription={'Managing the Team Members'}/>

      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}

export default Team;
