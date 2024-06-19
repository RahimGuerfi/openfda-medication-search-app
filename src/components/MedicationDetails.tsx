import { IMedication } from "@/types";
import { Box, Container, Typography } from "@mui/material";
import { MedicationDetailsAccordion } from "./MedicationDetailsAccordion";

type Props = {
  medication: IMedication;
};

export const MedicationDetails = ({ medication }: Props) => {
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
        {medication.openfda.brand_name?.[0] ||
          medication.openfda.generic_name?.[0] ||
          "Unknown Medication"}
      </Typography>

      <Typography variant="subtitle2" textAlign="center" gutterBottom>
        Manufacturer: {medication.openfda.manufacturer_name?.[0] || "Unknown"}
      </Typography>
      <Typography variant="subtitle2" textAlign="center" gutterBottom>
        Application Number:{" "}
        {medication.openfda.application_number?.[0] || "N/A"}
      </Typography>
      <Typography variant="subtitle2" textAlign="center" gutterBottom>
        Route: {medication.openfda.route?.join(", ") || "N/A"}
      </Typography>
      <Typography variant="subtitle2" textAlign="center" gutterBottom>
        Substance Name: {medication.openfda.substance_name?.join(", ") || "N/A"}
      </Typography>

      <Box
        sx={{
          p: 2,
        }}
      >
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
    </Container>
  );
};
