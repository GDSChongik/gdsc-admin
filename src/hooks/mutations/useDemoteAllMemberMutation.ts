import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { recruitingApi } from "@/apis/recruitingApi";
import { SemesterVariantType } from "@/types/entities/recruiting";

export default function useDemoteAllMemberMutation(
  academicYear: number,
  semesterType: SemesterVariantType | null,
) {
  return useMutation({
    mutationFn: () => recruitingApi.demoteAllMember(academicYear, semesterType),
    onSuccess: () => {
      toast.success("정회원 일괄 강등하였습니다!");
    },
    onError: (error: any) => {
      toast.error(error.response.data.errorMessage);
    },
  });
}