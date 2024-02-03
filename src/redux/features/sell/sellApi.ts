import { baseApi } from '../../api/baseApi';

const sellApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSell: builder.mutation({
      query: (sellProductInfo) => ({
        url: '/sells/create-sell',
        method: 'POST',
        body: sellProductInfo,
      }),
    }),
  }),
});

export const { useCreateSellMutation } = sellApi;
