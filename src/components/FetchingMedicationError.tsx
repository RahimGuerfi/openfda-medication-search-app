import { Alert, Box, Container, Typography } from "@mui/material";

export const FetchingMedicationError = () => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Alert severity="error">
          Oops! Something went wrong while getting medication details. Please
          try again.
        </Alert>
      </Box>
    </Container>
  );
};
