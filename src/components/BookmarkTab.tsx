import { Box, Stack, Typography } from "@mui/material";
import { MedicationsList } from "./MedicationsList";
import { useMedicationsBookmarkStore } from "@/hooks/useMedicationsBookmarkStore";

export const BookmarkTab = () => {
  const { medications } = useMedicationsBookmarkStore();

  return (
    <Stack gap={4}>
      <Typography
        textAlign="center"
        variant="body1"
        color="gray.900"
        gutterBottom
      >
        {!medications.length
          ? "You have not bookmarked any medications yet."
          : "Below is a list of medications you have bookmarked. Click on a medication to view more details."}
      </Typography>
      <MedicationsList medications={medications} />
    </Stack>
  );
};
