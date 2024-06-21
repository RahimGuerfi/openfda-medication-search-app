import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Icon,
  Box,
  CardMedia,
  IconButton,
} from "@mui/material";
import { IMedication } from "@/types";
import MedicationIcon from "@mui/icons-material/Medication";
import { useMedicationsBookmarkStore } from "@/hooks/useMedicationsBookmarkStore";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkRemoveOutlinedIcon from "@mui/icons-material/BookmarkRemoveOutlined";

type Props = {
  medication: IMedication;
};

export const MedicationCard = ({ medication }: Props) => {
  const { addMedication, removeMedication, isBookmarked } =
    useMedicationsBookmarkStore();

  const handleAddRemoveMedication = (medication: IMedication) => {
    if (isBookmarked(medication.id)) {
      removeMedication(medication.id);
      return;
    }

    addMedication(medication);
  };

  const medicationName =
    medication.openfda.brand_name?.[0] ||
    medication.openfda.generic_name?.[0] ||
    "Unknown Medication";

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        borderRadius: 2,
        boxShadow: 2,
        position: "relative",
      }}
    >
      <CardActionArea href={`/medication/${medication.id}`} target="_blank">
        <CardMedia component="img" height="140" image="/fda.webp" alt="FDA" />
        <CardContent>
          <Box display="flex" alignItems="start">
            <Icon
              component={MedicationIcon}
              sx={{
                mr: 1,
              }}
            />
            <Typography variant="body1">{medicationName}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <IconButton
        aria-label="bookmark"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          color: "#FFF",
        }}
        onClick={() => handleAddRemoveMedication(medication)}
      >
        {isBookmarked(medication.id) ? (
          <BookmarkRemoveOutlinedIcon fontSize="medium" />
        ) : (
          <BookmarkAddOutlinedIcon fontSize="medium" />
        )}
      </IconButton>
    </Card>
  );
};
