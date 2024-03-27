import { TextField } from "@mui/material";

function ItemsPerPageInput() {
  return (
    <TextField
      size="small"
      label="Items per page"
      sx={{ width: "25ch" }}
      type="number"
    />
  );
}

export default ItemsPerPageInput;
