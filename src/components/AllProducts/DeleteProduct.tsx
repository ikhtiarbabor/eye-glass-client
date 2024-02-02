/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteTwoTone } from '@ant-design/icons';
import { Space } from 'antd';
import { toast } from 'sonner';
import { useDeleteProductMutation } from '../../redux/features/product/productApi';
import { TError, TResponse } from '../../types';
import PopConfirm from '../ui/PopConfirm';

export default function DeleteProduct({ id }: { id: string }) {
  const [deleteProduct, { isLoading: deleteLoading }] =
    useDeleteProductMutation();

  const handleDelete = async () => {
    const deleteToastId = toast.loading(`Trying to delete this Product`, {
      duration: 2000,
    });
    try {
      const deletedProduct: TResponse<any> | any = await deleteProduct(
        id
      ).unwrap();
      const message = deletedProduct.message;

      toast.success(`${message}`, { id: deleteToastId, duration: 2000 });
    } catch (error: TError | any) {
      toast.error(`${error.message}`, { id: deleteToastId, duration: 2000 });
    }
  };
  const confirm = (_e: React.MouseEvent<HTMLElement> | undefined) => {
    handleDelete();
  };
  return (
    <>
      <PopConfirm
        placement='leftTop'
        confirm={confirm}
        description='Do you want to delete this Item ?'
        title='Delete The Product!'
      >
        <button disabled={deleteLoading}>
          <Space>
            <DeleteTwoTone twoToneColor='#ff0000' />
          </Space>
        </button>
      </PopConfirm>
    </>
  );
}
