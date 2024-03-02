import { apiClient } from ".";
import { GrantableMemberDtoType } from "@/types/dtos/member";

export const grantableMemberApi = {
  getGrantableMemberList: async (
    page: number,
    size: number,
    searchType: string,
    searchText: string
  ): Promise<GrantableMemberDtoType> => {
    if (searchText) {
      const searchUrl = `admin/members/grantable?${searchType}=${searchText}&page=${page}&size=${size}`;
      const response = await apiClient.get(searchUrl);
      return response.data;
    }

    const commonUrl = `admin/members/grantable?page=${page}&size=${size}`;
    const response = await apiClient.get(commonUrl);
    return response.data;
  },
};
