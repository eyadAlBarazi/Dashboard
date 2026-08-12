import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { columns } from "./Data";
import Header from "../../component/Header";
function Invoicese() {
  return (
    <Box style={{ height: 600, width: "100%", mx: "auto" }}>
      <Header title={"invoicese"} discription={"list of Invoices Balances"} />
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </Box>
  );
}

export default Invoicese;
