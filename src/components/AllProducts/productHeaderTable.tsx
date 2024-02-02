import { EditOutlined } from '@ant-design/icons';
import { Space, TableProps } from 'antd';
import { TProductColumn } from '../../types/allProduct.types';
import DeleteProduct from './DeleteProduct';
import { UpdateModal } from './UpdateModal';

export const productHeaderTable: TableProps<TProductColumn>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'pride',
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Material',
    dataIndex: 'material',
    key: 'material',
  },

  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <button>
          <UpdateModal product={record} id={record.id}>
            <EditOutlined />
          </UpdateModal>
        </button>
        <DeleteProduct id={record.id} />
      </Space>
    ),
  },
];
