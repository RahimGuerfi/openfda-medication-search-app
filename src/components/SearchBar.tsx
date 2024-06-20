import React from "react";
import { TextField, Box, IconButton, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  value: string;
  onSetValue: (value: string) => void;
  handleSearch: () => void;
  isLoading: boolean;
};

export const SearchBar = ({
  value,
  onSetValue,
  handleSearch,
  isLoading,
}: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box display="flex" justifyContent="center" my={4}>
      <TextField
        label="Search for medications"
        variant="outlined"
        fullWidth
        sx={{
          mr: 1,
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff",
          },
        }}
        value={value}
        onChange={(e) => onSetValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />

      <IconButton
        aria-label="search"
        onClick={handleSearch}
        disabled={isLoading}
        color="primary"
      >
        {isLoading ? <CircularProgress size={24} /> : <SearchIcon />}
      </IconButton>
    </Box>
  );
};
