import { TextField } from "@mui/material";
import useItemsPerPageStore from "../store/itemsPerPageStore";

function ItemsPerPageInput() {
  const { itemsPerPage, change } = useItemsPerPageStore();

  return (
    <TextField
      size="small"
      label="Items per page"
      sx={{ width: "25ch" }}
      type="number"
      value={itemsPerPage}
      onChange={(e) => {
        if (Number(e.target.value) > 100) e.target.value = "100";
        change(Number(e.target.value));
      }}
    />
  );
}

export default ItemsPerPageInput;
