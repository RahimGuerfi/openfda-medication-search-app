"use client";

import { useState } from "react";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { SearchTab } from "@/components/SearchTab";
import { BookmarkTab } from "@/components/BookmarkTab";

export default function MedicationsPage() {
  const [selectedTab, setSelectedTab] = useState(0);

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

      <Tabs
        value={selectedTab}
        onChange={(_, value) => setSelectedTab(value)}
        centered
        sx={{
          marginBottom: 4,
        }}
      >
        <Tab icon={<SearchIcon />} label="Search" />
        <Tab icon={<BookmarkBorderIcon />} label="Bookmark" />
      </Tabs>

      <Box
        sx={{
          display: selectedTab === 0 ? "block" : "none",
        }}
      >
        <SearchTab />
      </Box>

      {selectedTab === 1 && <BookmarkTab />}
    </Container>
  );
}
