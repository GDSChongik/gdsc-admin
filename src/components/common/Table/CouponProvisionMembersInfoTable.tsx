import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
// import useGetIssuedCouponListQuery from "@/hooks/queries/useGetIssuedCouponListQuery";
import { IssuedCouponType } from "@/types/entities/coupon";
import { formatDateWithText } from "@/utils/validation/formatDate";
import { formatPrice } from "@/utils/validation/formatPrice";
import useRevokeIssuedCouponMutation from "@/hooks/mutations/useRevokeIssuedCouponMutation";

const mockIssuedCouponList = [
  {
    issuedCouponId: 2,
    member: {
      memberId: 1,
      studentId: "C111206",
      name: "홍서현",
      email: "ghdtjgus76@naver.com",
      phone: "010-8712-0786",
    },
    couponName: "2024-1 정규 스터디 수료 쿠폰",
    discountAmount: 10000,
    usedAt: "2024-07-04T04:26:16.587Z",
    issuedAt: "2024-07-04T04:26:16.587Z",
    isUsed: true,
    isRevoked: true,
  },
];

export default function CouponProvisionMembersInfoTable() {
  //   const issuedCouponList = useGetIssuedCouponListQuery();
  const { mutate } = useRevokeIssuedCouponMutation();

  const getFilteredIssuedCouponList = (issuedCouponList: IssuedCouponType[]) => {
    return issuedCouponList.map(issuedCoupon => ({
      id: issuedCoupon.issuedCouponId,
      studentId: issuedCoupon.member.studentId,
      name: issuedCoupon.member.name,
      phone: issuedCoupon.member.phone,
      couponName: issuedCoupon.couponName,
      discountAmount: formatPrice(issuedCoupon.discountAmount),
      usedAt: formatDateWithText(issuedCoupon.usedAt),
      issuedAt: formatDateWithText(issuedCoupon.issuedAt),
      isUsed: issuedCoupon.isUsed ? "O" : "X",
      isRevoked: issuedCoupon.isRevoked ? "O" : "X",
    }));
  };

  const handleClickRevokeCoupon = (couponId: number) => {
    mutate(couponId);
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredIssuedCouponList(mockIssuedCouponList)}
        columns={getColumns(handleClickRevokeCoupon)}
        autoHeight
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        hideFooterPagination
      />
    </>
  );
}

const getColumns = (handleClickRevokeCoupon: (couponId: number) => void): GridColDef[] => [
  {
    field: "studentId",
    headerName: "학번",
    headerAlign: "left",
    align: "left",
    width: 70,
    resizable: false,
    editable: false,
  },
  {
    field: "name",
    headerName: "이름",
    headerAlign: "left",
    align: "left",
    width: 60,
    resizable: false,
    editable: false,
  },
  {
    field: "phone",
    headerName: "전화번호",
    headerAlign: "left",
    align: "left",
    width: 115,
    resizable: false,
    editable: false,
  },
  {
    field: "couponName",
    headerName: "쿠폰",
    headerAlign: "left",
    align: "left",
    width: 190,
    resizable: false,
    editable: false,
  },
  {
    field: "discountAmount",
    headerName: "할인 금액",
    headerAlign: "left",
    align: "left",
    width: 90,
    resizable: false,
    editable: false,
  },
  {
    field: "usedAt",
    headerName: "사용일시",
    headerAlign: "left",
    align: "left",
    width: 180,
    resizable: false,
    editable: false,
  },
  {
    field: "issuedAt",
    headerName: "발급일시",
    headerAlign: "left",
    align: "left",
    width: 180,
    resizable: false,
    editable: false,
  },
  {
    field: "isUsed",
    headerName: "사용여부",
    headerAlign: "left",
    align: "left",
    width: 70,
    resizable: false,
    editable: false,
  },
  {
    field: "isRevoked",
    headerName: "회수여부",
    headerAlign: "left",
    align: "left",
    width: 70,
    resizable: false,
    editable: false,
  },
  {
    field: "revokeCoupon",
    headerName: "",
    sortable: false,
    minWidth: 90,
    flex: 1,
    renderCell: (params: GridCellParams) => {
      return (
        <StyledButtonWrapper>
          <StyledButton
            variant="outlined"
            color="error"
            onClick={() => handleClickRevokeCoupon(params.row.id)}
          >
            회수
          </StyledButton>
        </StyledButtonWrapper>
      );
    },
  },
];

const StyledDataGrid = styled(DataGrid)({ border: "none", minHeight: 370 });

const StyledButtonWrapper = styled("div")({
  display: "flex",
  gap: 8,
  paddingTop: 9,
});

const StyledButton = styled(Button)({
  padding: "8px 22px",
  height: "32px",
});
