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
  limit = 10
) => {
  const { data } = await api.get<ISearchMedicationsResponse>(
    "drug/label.json",
    {
      params: {
        search: query,
        skip,
        limit,
      },
    }
  );

  return data;
};
