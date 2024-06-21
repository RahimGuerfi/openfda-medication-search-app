import { useState } from "react";
import { ITEMS_PER_PAGE } from "@/config/constants";
import { useSearchMedicationsQuery } from "@/hooks/useSearchMedicationsQuery";
import { Alert, Pagination, Stack, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { MedicationsList } from "./MedicationsList";

export const SearchTab = () => {
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
    <Stack gap={4}>
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
        <Alert severity="error">
          Oops! Something went wrong while fetching the data. Please try again.
        </Alert>
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
    </Stack>
  );
};
