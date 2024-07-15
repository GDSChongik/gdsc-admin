import { Dayjs } from "dayjs";

export type SemesterVariantType = "FIRST" | "SECOND";

export type RoundVariantType = "FIRST" | "SECOND";

export type RecruitmentType = {
  recruitmentId: number;
  semester: string;
  roundType: RoundVariantType;
  semesterStartDate: string;
  semesterEndDate: string;
  recruitmentFee: number;
};

export type RecruitmentRoundType = "1차" | "2차";

type RecruitmentRoundBaseInfoType = {
  id: number;
  academicYear: string;
  recruitmentRoundId: number;
  semester: string;
  roundType: RecruitmentRoundType;
  startDate: string;
  endDate: string;
  name: string;
};

export type RecruitmentRoundInfoType = Pick<
  RecruitmentRoundBaseInfoType,
  "recruitmentRoundId" | "semester" | "startDate" | "endDate" | "name"
> & {
  roundType: RoundVariantType;
};

export type FilteredRecruitmentRoundInfoType = Pick<
  RecruitmentRoundBaseInfoType,
  "id" | "academicYear" | "semester" | "roundType" | "startDate" | "endDate" | "name"
>;

export type RecruitmentRoundModalInfoType = Pick<
  RecruitmentRoundBaseInfoType,
  "recruitmentRoundId" | "academicYear" | "semester" | "name" | "roundType"
> & {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
};