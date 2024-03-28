import { Tag } from "../../types/Response";
import { DataGrid, GridColDef, useGridApiRef } from "@mui/x-data-grid";
import useItemsPerPageStore from "../store/itemsPerPageStore";
import { useEffect } from "react";

type Props = {
  tags: Tag[] | undefined;
};

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "count",
    headerName: "Count",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
];

function Table({ tags }: Props) {
  const rows = tags!.map(({ name, count }, id) => ({
    id,
    name,
    count,
  }));

  const apiRef = useGridApiRef();

  const { itemsPerPage } = useItemsPerPageStore();

  useEffect(() => {
    apiRef.current.setPageSize(itemsPerPage);
  }, [itemsPerPage]);

  return (
    <>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        autosizeOptions={{
          expand: true,
        }}
        apiRef={apiRef}
      />
    </>
  );
}

export default Table;
