import { baseApi } from '../../api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (productInfo) => {
        return {
          url: '/products/add-product',
          method: 'POST',
          body: productInfo,
        };
      },
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: '/products',
        method: 'GET',
      }),
      providesTags: (result) => {
        console.log('result=>', result.data);

        return result
          ? result?.data.map((product: Record<string, unknown>) => ({
              type: 'Products',
              id: product.id,
            }))
          : [{ type: 'Products', id: 'ProductList' }];
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, _error, args) =>
        result
          ? [{ type: 'Products', id: args }]
          : [{ type: 'Products', id: 'ProductList' }],
    }),
    updateProduct: builder.mutation({
      query: ({ id, sendData }) => ({
        url: `/products/${id}`,
        method: 'PATCH',
        body: sendData,
      }),
      invalidatesTags: (result, _error, args) =>
        result
          ? [{ type: 'Products', id: args.id }]
          : [{ type: 'Products', id: 'ProductList' }],
    }),
  }),
});
export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
