import { useQuery } from "@tanstack/react-query";
import { recruitmentApi } from "@/apis/recruitmentApi";
import { QueryKey } from "@/constants/queryKey";

export default function useGetRecruitmentsQuery() {
  const { data = [] } = useQuery({
    queryKey: [QueryKey.recruitment],
    queryFn: recruitmentApi.getRecruitments,
  });

  return data;
}
