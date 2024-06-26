import Header from "@/components/common/Header";
import GrantedMemberInfoTable from "@/components/common/Table/GrantedMemberInfoTable";
import Title from "@/components/common/Title";

export default function GrantedMembersPage() {
  return (
    <>
      <Title variant={"grantedMember"} descriptionText={"승인된 멤버 정보를 관리합니다."} />
      <Header variant={"grantedMember"} />
      <GrantedMemberInfoTable />
    </>
  );
}
