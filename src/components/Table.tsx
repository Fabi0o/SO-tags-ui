import { Tag } from "../../types/Response";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
  const rows = tags!.map(({ name, count }, id) => {
    return {
      id,
      name,
      count,
    };
  });

  return (
    <>
      <DataGrid
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
      />
    </>
  );
}

export default Table;
