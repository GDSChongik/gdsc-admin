export const paymentStatusTableSelectOptionList = [
  {
    value: 1,
    name: "전체",
  },
  {
    value: 2,
    name: "납부 완료",
  },
  {
    value: 3,
    name: "납부 미완료",
  },
];

export const paymentStatusTableTitle = [
  {
    value: "1",
    name: "학번",
    type: "studentId",
  },
  {
    value: "2",
    name: "이름",
    type: "name",
  },
  {
    value: "3",
    name: "전화번호",
    type: "phone",
  },
  {
    value: "4",
    name: "디스코드 사용자명",
    type: "discordUsername",
  },
  {
    value: "5",
    name: "디스코드 닉네임",
    type: "nickname",
  },
];

export const paymentStatusFieldMapping = {
  VERIFIED: "완료",
  PENDING: "미완료",
};