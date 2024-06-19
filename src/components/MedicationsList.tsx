import { Grid } from "@mui/material";
import { IMedication } from "@/types";
import { MedicationCard } from "./MedicationCard";

type Props = {
  medications: IMedication[];
};

export const MedicationsList = ({ medications }: Props) => {
  return (
    <Grid container spacing={4}>
      {medications.map((medication) => (
        <Grid item xs={12} sm={6} md={4} key={medication.id}>
          <MedicationCard medication={medication} />
        </Grid>
      ))}
    </Grid>
  );
};
