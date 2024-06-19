import { FetchingMedicationError } from "@/components/FetchingMedicationError";
import { MedicationDetails } from "@/components/MedicationDetails";
import { searchMedicationById } from "@/services/api";
import { IMedication } from "@/types";
import { Metadata } from "next";

type Props = {
  params: {
    medicationId: string;
  };
};

export const metadata: Metadata = {
  title: "Medication Details",
};

export default async function MedicationPage({ params }: Props) {
  let medication: IMedication | null;

  try {
    const data = await searchMedicationById(params.medicationId);

    medication = data.results[0];
  } catch (e) {
    return <FetchingMedicationError />;
  }

  if (!medication) return <FetchingMedicationError />;

  return <MedicationDetails medication={medication} />;
}
