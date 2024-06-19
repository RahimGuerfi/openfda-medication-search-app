import { ITEMS_PER_PAGE, MAX_RESULTS } from "@/config/constants";
import { searchMedications } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useSearchMedicationsQuery = (
  query: string,
  page: number,
  limit = ITEMS_PER_PAGE
) => {
  const { data, ...rest } = useQuery({
    queryKey: ["medications", page],
    queryFn: () => searchMedications(query, (page - 1) * limit, limit),
    keepPreviousData: true,
    enabled: false,
  });

  return {
    totalResults: Math.min(data?.meta.results.total ?? 0, MAX_RESULTS),
    data: data?.results,
    ...rest,
  };
};
