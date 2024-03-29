import { Box, LinearProgress } from "@mui/material";

function Loader() {
  return (
    <Box sx={{ pt: 10 }}>
      <LinearProgress />
    </Box>
  );
}

export default Loader;
