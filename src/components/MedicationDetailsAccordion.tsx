import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  title: string;
  data?: string[];
};

export const MedicationDetailsAccordion = ({ title, data }: Props) => {
  if (!data || data.length === 0) return null;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
        sx={{
          fontSize: "0.85rem",
        }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>
        {data.map((content, index) => (
          <Typography key={index} fontSize="0.75rem">
            {content}
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
