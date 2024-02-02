/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from 'antd';

import { productHeaderTable } from '../../../components/AllProducts/productHeaderTable';
import { useGetAllProductsQuery } from '../../../redux/features/product/productApi';

export default function AllProducts() {
  const { data: productRes } = useGetAllProductsQuery(undefined);
  const { data } = productRes || {};
  const modifiedData = data?.map((product: any) => ({
    name: product.name,
    color: product.color,
    brand: product.brand.brand,
    gender: product.gender,
    material: product.material,
    price: product.price,
    id: product.id,
  }));

  return (
    <div className='overflow-x-auto'>
      <Table dataSource={modifiedData} columns={productHeaderTable} />
    </div>
  );
}
