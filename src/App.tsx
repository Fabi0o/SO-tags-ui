import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
