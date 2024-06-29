import styled from "@emotion/styled";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
// import useGetCouponListQuery from "@/hooks/queries/useGetCouponListQuery";
import { CouponListResponseDtoType } from "@/types/dtos/coupon";
import { formatDateWithText } from "@/utils/validation/formatDate";
import { Button } from "@mui/material";
import {
  useCouponSearchInfoDispatch,
  useCouponSearchInfoState,
} from "@/hooks/contexts/useCouponSearchInfoState";
import CouponModal from "../Modal/CouponModal";
import useDeleteCouponMutation from "@/hooks/mutations/useDeleteCouponMutation";
import { useRef } from "react";

const mockIssuedCouponList = [
  {
    couponId: 1,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 2,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 3,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 4,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 5,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
  {
    couponId: 6,
    name: "string",
    discountAmount: 234,
    createdAt: "2024-06-27T17:43:56.259Z",
  },
];

export default function CouponInfoTable() {
  const modalKey = useRef(0);

  const { modalOpen } = useCouponSearchInfoState();
  const { setModalOpen } = useCouponSearchInfoDispatch();

  //   const issuedCouponList = useGetCouponListQuery();
  const { mutate: deleteCouponMutate } = useDeleteCouponMutation();

  const handleClickCouponDelete = (id: number) => {
    deleteCouponMutate(id);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    modalKey.current += 1;
  };

  const getFilteredIssuedCouponList = (couponList: CouponListResponseDtoType) => {
    return couponList.map(issuedCoupon => ({
      id: issuedCoupon.couponId,
      name: issuedCoupon.name,
      discountAmount: issuedCoupon.discountAmount,
      createdAt: formatDateWithText(issuedCoupon.createdAt),
    }));
  };

  return (
    <>
      <StyledDataGrid
        rows={getFilteredIssuedCouponList(mockIssuedCouponList)}
        columns={getColumns(handleClickCouponDelete)}
        autoHeight
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnSorting
        hideFooterPagination
      />
      <CouponModal key={modalKey.current} open={modalOpen} onClose={handleCloseModal} />
    </>
  );
}

const getColumns = (handleClickCouponDelete: (id: number) => void): GridColDef[] => [
  {
    field: "name",
    headerName: "이름",
    headerAlign: "left",
    align: "left",
    width: 180,
    resizable: false,
    editable: false,
  },
  {
    field: "discountAmount",
    headerName: "할인 금액",
    headerAlign: "left",
    align: "left",
    width: 160,
    resizable: false,
    editable: false,
  },
  {
    field: "createdAt",
    headerName: "생성 일시",
    headerAlign: "left",
    align: "left",
    width: 200,
    resizable: false,
    editable: false,
  },
  {
    field: "editCoupon",
    headerName: "",
    sortable: false,
    flex: 1,
    renderCell: (params: GridCellParams) => {
      return (
        <StyledButtonWrapper>
          <StyledButton
            variant="outlined"
            color="error"
            onClick={() => handleClickCouponDelete(params.row.id)}
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
  alignItems: "center",
  justifyContent: "flex-end",
  paddingTop: 9,
});

const StyledButton = styled(Button)({
  padding: "8px 22px",
  height: "32px",
  width: "64px",
});