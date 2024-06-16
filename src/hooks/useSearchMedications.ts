import { searchMedications } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useSearchMedications = (
  query: string,
  page: number,
  limit = 10
) => {
  return useQuery({
    queryKey: ["medications", query, page, limit],
    queryFn: () => searchMedications(query, (page - 1) * limit, limit),
    enabled: !!query,
  });
};
