import { ITEMS_PER_PAGE } from "@/config/constants";
import { ISearchMedicationsResponse } from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.fda.gov/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const searchMedications = async (
  query: string,
  skip = 0,
  limit = ITEMS_PER_PAGE
) => {
  const { data } = await api.get<ISearchMedicationsResponse>(
    `drug/label.json?search=openfda.brand_name:${query}*+openfda.generic_name:${query}*`,
    {
      params: {
        skip,
        limit,
      },
    }
  );

  return data;
};

export const searchMedicationById = async (id: string) => {
  const { data } = await api.get<ISearchMedicationsResponse>(
    "drug/label.json",
    {
      params: {
        search: `id:${id}`,
      },
    }
  );

  return data;
};
