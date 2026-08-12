// import React from 'react'

import Button from "@mui/material/Button";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import DownloadIcon from "@mui/icons-material/Download";
import Header from "../../component/Header";

function Dashboard() {
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Header
          isDash={true}
          title={"dashboard"}
          discription={"welcome to your Dashboard"}
        />

        <div style={{ marginBottom: "10px", textAlign: "right" }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadIcon />
            Downloade Reportes
          </Button>
        </div>
      </div>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

export default Dashboard;
