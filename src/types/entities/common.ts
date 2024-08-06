import { SearchVariantType } from "./member";

export type PaginationModelType = {
  pageSize: number;
  page: number;
};

export type SearchInfoType = {
  text: string;
  variant: SearchVariantType;
};
