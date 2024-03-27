import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Home from "./Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const queryClient = new QueryClient();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
