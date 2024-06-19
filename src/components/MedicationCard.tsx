import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Icon,
  Box,
  CardMedia,
} from "@mui/material";
import { IMedication } from "@/types";
import MedicationIcon from "@mui/icons-material/Medication";

type Props = {
  medication: IMedication;
};

export const MedicationCard = ({ medication }: Props) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", borderRadius: 2, boxShadow: 2 }}>
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
            <Typography variant="h6">
              {medication.openfda.brand_name?.[0] ||
                medication.openfda.generic_name?.[0] ||
                "Unknown Medication"}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
