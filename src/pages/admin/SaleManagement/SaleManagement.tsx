import { Table } from 'antd';
import { saleManagementTableHeader } from '../../../components/SalesManagement/saleManagementTableHeader';
import EGError from '../../../components/ui/EGError';
import EGLoading from '../../../components/ui/EGLoading';
import { useGetAllProductsQuery } from '../../../redux/features/product/productApi';
import { TProduct } from '../../../types/allProduct.types';

export default function SaleManagement() {
  const { data, isLoading, error } = useGetAllProductsQuery(undefined);
  const productData =
    data?.data?.map((product: TProduct) => ({
      ...product,
      brand: product.brand.brand,
    })) || [];
  let content = null;
  if (isLoading && !error) {
    content = <EGLoading />;
  }
  if (!isLoading && error) {
    content = <EGError message={error?.data?.message} />;
  }
  if (!error && !isLoading) {
    content = (
      <Table
        dataSource={productData}
        className='capitalize'
        columns={saleManagementTableHeader}
      />
    );
  }
  return <div className='overflow-x-auto'>{content}</div>;
}
