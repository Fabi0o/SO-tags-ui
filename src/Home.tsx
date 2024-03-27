import { useQuery } from "@tanstack/react-query";
import Table from "./components/Table";
import { Response } from "../types/Response";

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

  return isLoading ? "Loading..." : <Table tags={data?.items} />;
}

export default Home;
