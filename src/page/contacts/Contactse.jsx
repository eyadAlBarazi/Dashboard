import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import { rows } from "../Team/Data";
import { rows } from "./Dtat";
import { columns } from "./Dtat";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Header from "../../component/Header";

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ justifyContent: "flex-start" }}>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector
        slotProps={{ tooltip: { title: "Change density" } }}
      />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: "Export data" },
          button: { material: { variant: "outlined" } },
        }}
      />
    </GridToolbarContainer>
  );
}

function Contactse() {
  return (
    <Box style={{ height: 600, width: "100%", mx: "auto" }}>
      <Header title={"contacts"} discription={"list of Contacts for future Referance"} />
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: CustomToolbar,
        }}
        showToolbar
      />
    </Box>
  );
}

export default Contactse;
