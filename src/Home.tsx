import { useQuery } from "@tanstack/react-query";
import Table from "./components/Table";
import { Response } from "../types/Response";
import ItemsPerPageInput from "./components/ItemsPerPageInput";
import { Stack } from "@mui/material";
import Loader from "./components/Loader";
import ErrorAlert from "./components/ErrorAlert";

function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tags"],
    queryFn: async (): Promise<Response> => {
      const res = await fetch(
        "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
      );
      if (!res.ok) throw new Error("Oops, something went wrong!");

      return res.json();
    },
  });

  return (
    <Stack spacing={1}>
      {isError ? (
        <ErrorAlert msg={error.message} />
      ) : (
        <>
          <ItemsPerPageInput />
          {isLoading ? <Loader /> : <Table tags={data?.items} />}
        </>
      )}
    </Stack>
  );
}

export default Home;
