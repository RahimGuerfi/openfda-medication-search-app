import { IMedication } from "@/types";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { MedicationDetailsAccordion } from "./MedicationDetailsAccordion";

type Props = {
  medication: IMedication;
};

export const MedicationDetails = ({ medication }: Props) => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 16 } }}>
      <Stack flexDirection="column" gap={2}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" fontWeight="500">
                  Brand Name:
                </Typography>
                <Typography variant="body2">
                  {medication.openfda.brand_name?.join(", ") || "Unknown"}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" fontWeight="500">
                  Generic Name:
                </Typography>
                <Typography variant="body2">
                  {medication.openfda.generic_name?.join(", ") || "Unknown"}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" fontWeight="500">
                  Manufacturer:
                </Typography>
                <Typography variant="body2">
                  {medication.openfda.manufacturer_name?.join(", ") ||
                    "Unknown"}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" fontWeight="500">
                  Application Number:
                </Typography>
                <Typography variant="body2">
                  {medication.openfda.application_number?.join(", ") ||
                    "Unknown"}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" fontWeight="500">
                  Route:
                </Typography>
                <Typography variant="body2">
                  {medication.openfda.route?.join(", ") || "Unknown"}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body1" fontWeight="500">
                  Substance Name:
                </Typography>
                <Typography variant="body2">
                  {medication.openfda.substance_name?.join(", ") || "Unknown"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box>
          <MedicationDetailsAccordion
            title="Product Data elements"
            data={medication.spl_product_data_elements}
          />
          <MedicationDetailsAccordion
            title="Indications and Usage"
            data={medication.indications_and_usage}
          />
          <MedicationDetailsAccordion
            title="Dosage and Administration"
            data={medication.dosage_and_administration}
          />
          <MedicationDetailsAccordion
            title="Warnings and Cautions"
            data={medication.warnings_and_cautions}
          />
          <MedicationDetailsAccordion
            title="Adverse Reactions"
            data={medication.adverse_reactions}
          />
          <MedicationDetailsAccordion
            title="Drug Interactions"
            data={medication.drug_interactions}
          />
          <MedicationDetailsAccordion
            title="Use in Specific Populations"
            data={medication.use_in_specific_populations}
          />
          <MedicationDetailsAccordion
            title="Description"
            data={medication.description}
          />
          <MedicationDetailsAccordion
            title="Clinical Pharmacology"
            data={medication.clinical_pharmacology}
          />
          <MedicationDetailsAccordion
            title="How Supplied"
            data={medication.how_supplied}
          />
          <MedicationDetailsAccordion
            title="Precautions"
            data={medication.precautions}
          />
        </Box>
      </Stack>
    </Container>
  );
};
