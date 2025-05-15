import { Box, LinearProgress } from "@mui/material";

export default function Loading() {
    return (
      <Box sx={{ width: "100%", marginTop: 8 }}>
        <LinearProgress />
      </Box>
    );
}