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
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { totalResults, data, isError, isFetching } = useSearchMedicationsQuery(
    query,
    page,
    ITEMS_PER_PAGE
  );

  const handleSearch = async () => {
    if (!searchValue.length) return;

    setPage(1);
    setQuery(searchValue);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage === page) return;

    setPage(newPage);
  };

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
      <Typography textAlign="center" variant="body1" gutterBottom>
        Search for medications registered in the US using the OpenFDA API
      </Typography>

      <SearchBar
        value={searchValue}
        onSetValue={(value) => setSearchValue(value)}
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
              count={Math.ceil(totalResults / ITEMS_PER_PAGE)}
              page={page}
              onChange={(_, page) => handlePageChange(page)}
              color="primary"
              variant="text"
              disabled={isFetching}
            />
          )}

          <MedicationsList medications={data} />
        </Stack>
      )}
    </Container>
  );
}
