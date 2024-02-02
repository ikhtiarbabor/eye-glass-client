import { Table } from 'antd';
import { saleManagementTableHeader } from '../../../components/SalesManagement/SaleManagementTableHeader';
import { useGetAllProductsQuery } from '../../../redux/features/product/productApi';
import { TProduct } from '../../../types/allProduct.types';

export default function SaleManagement() {
  const { data } = useGetAllProductsQuery(undefined);
  const productData =
    data?.data?.map((product: TProduct) => ({
      ...product,
      brand: product.brand.brand,
    })) || [];
  console.log(productData);

  return (
    <div className='overflow-x-auto'>
      <Table
        dataSource={productData}
        className='capitalize'
        columns={saleManagementTableHeader}
      />
    </div>
  );
}
