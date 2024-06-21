import { IMedication } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IMedicationsBookmarkState {
  medications: IMedication[];
  addMedication: (medicaiton: IMedication) => void;
  removeMedication: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

export const useMedicationsBookmarkStore = create(
  persist<IMedicationsBookmarkState>(
    (set, get) => ({
      medications: [],
      addMedication: (med) =>
        set((state) => ({
          medications: [...state.medications, med],
        })),
      removeMedication: (id) =>
        set((state) => ({
          medications: [...state.medications.filter((med) => med.id !== id)],
        })),
      isBookmarked: (id: string) => {
        return get().medications.some((med) => med.id === id);
      },
    }),
    {
      name: "medications-bookmark",
    }
  )
);
