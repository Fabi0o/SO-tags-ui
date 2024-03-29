import { useQuery } from "@tanstack/react-query";
import Table from "./components/Table";
import { Response } from "../types/Response";
import ItemsPerPageInput from "./components/ItemsPerPageInput";
import { Stack } from "@mui/material";
import Loader from "./components/Loader";

function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["tags"],
    queryFn: async (): Promise<Response> => {
      const res = await fetch(
        "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
      );
      if (!res.ok) throw new Error("Not found!");

      return res.json();
    },
  });

  return (
    <Stack spacing={1}>
      <ItemsPerPageInput />
      {isLoading ? <Loader /> : <Table tags={data?.items} />}
    </Stack>
  );
}

export default Home;
