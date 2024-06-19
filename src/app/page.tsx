"use client";

import { MedicationsList } from "@/components/MedicationsList";
import { SearchBar } from "@/components/SearchBar";
import { ITEMS_PER_PAGE } from "@/config/constants";
import { useSearchMedicationsQuery } from "@/hooks/useSearchMedicationsQuery";
import {
  Alert,
  Box,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function MedicationsPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [triggerRefetch, setTriggerRefetch] = useState(false);

  const { totalResults, data, isError, isFetching, refetch, isPreviousData } =
    useSearchMedicationsQuery(query, page, ITEMS_PER_PAGE);

  const handleSearch = async () => {
    if (!query.length) return;

    // Reset page number to 1
    setPage(1);
    setTriggerRefetch(true);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage === page) return;
    setPage(newPage);

    setTriggerRefetch(true);
  };

  // Trigger refetch when triggerRefetch is true
  useEffect(() => {
    if (triggerRefetch) {
      refetch();
      setTriggerRefetch(false);
    }
  }, [triggerRefetch]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 16 } }}>
      <Typography
        textAlign="center"
        variant="h2"
        sx={{
          color: "primary.main",
        }}
        gutterBottom
      >
        openFDA Search
      </Typography>
      <Typography textAlign="center" variant="subtitle2" gutterBottom>
        Search for medications registered in the US using the OpenFDA API
      </Typography>

      <SearchBar
        value={query}
        onSetValue={(value) => setQuery(value)}
        handleSearch={handleSearch}
        isLoading={isFetching}
      />

      {isError && (
        <Box my={4}>
          <Alert severity="error">
            Oops! Something went wrong while fetching the data. Please try
            again.
          </Alert>
        </Box>
      )}

      {!!data && !isError && (
        <Stack
          gap={4}
          pt={4}
          borderTop={1}
          borderColor="white"
          alignItems="center"
        >
          {totalResults > 0 && (
            <Pagination
              count={Math.ceil(Math.min(totalResults) / ITEMS_PER_PAGE)}
              page={page}
              onChange={(_, page) => handlePageChange(page)}
              color="primary"
              variant="text"
              disabled={isPreviousData}
            />
          )}

          <MedicationsList medications={data} />
        </Stack>
      )}
    </Container>
  );
}
