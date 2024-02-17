/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from 'antd';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useBrandsQuery } from '../../redux/features/brand/brandApi';
import { useGetSellerInventoryQuery } from '../../redux/features/product/productApi';
import FilterProduct from '../AllProducts/FilterProduct';
import { productHeaderTable } from '../AllProducts/productHeaderTable';
import Invoice from '../Invoice/Invoice';
import EGError from '../ui/EGError';
import EGLoading from '../ui/EGLoading';

export default function InventoryProduct() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [filterQuery, setFilterQuery] = useState({});
  const {
    data: brands,
    isLoading: brandLoad,
    error: brandErr,
  } = useBrandsQuery(undefined, { refetchOnMountOrArgChange: true });
  const {
    data: InventoryRes,
    isLoading,
    isFetching,
    error,
  } = useGetSellerInventoryQuery(filterQuery, {
    refetchOnMountOrArgChange: true,
  });
  const { data } = InventoryRes || {};
  const modifiedData = data?.map((product: any) => ({
    quantity: product.quantity,
    name: product.name,
    color: product.color,
    brand: product.brand.brand,
    gender: product.gender,
    material: product.material,
    price: product.price,
    id: product.id,
    shape: product.shape,
    lenseType: product?.lenseType,
  }));
  let content = null;
  if ((isLoading || brandLoad) && !error && !brandErr) {
    content = <EGLoading />;
  }
  if ((!isLoading && !brandLoad && brandErr) || error) {
    const { data: errorData } = (error as { data: { message: string } }) || {};
    const { data } = (brandErr as { data: { message: string } }) || {};
    content = <EGError message={errorData?.message || data?.message} />;
  }
  if (!isLoading && !error) {
    content = (
      <>
        <FilterProduct setFilterQuery={setFilterQuery} brands={brands} />
        <div className='overflow-x-auto'>
          <Table
            loading={isFetching}
            dataSource={modifiedData}
            className='capitalize'
            columns={productHeaderTable}
          />

          <Invoice componentRef={componentRef} />
          <button onClick={handlePrint}>Print this out!</button>
        </div>
      </>
    );
  }
  return <>{content}</>;
}
