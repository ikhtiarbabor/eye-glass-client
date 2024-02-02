import { baseApi } from '../../api/baseApi';

const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    brands: builder.query({ query: () => ({ url: '/brands', method: 'GET' }) }),
    getSingleBrands: builder.query({
      query: (id) => ({ url: `/brands/${id}`, method: 'GET' }),
    }),
  }),
});
export const { useBrandsQuery,useGetSingleBrandsQuery } = brandApi;
