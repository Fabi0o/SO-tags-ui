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
      onChange={(e) => change(Number(e.target.value))}
    />
  );
}

export default ItemsPerPageInput;
