import { Space, TableProps } from 'antd';
import { TProductColumn } from '../../types/allProduct.types';
import SaleManageMentModal from './SaleManageMentModal';

export const saleManagementTableHeader: TableProps<TProductColumn>['columns'] =
  [
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
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'pride',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
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
      title: 'Status',

      key: 'status',
      render: (_, record) => (
        <p
          className={`${
            record.status === 'in stock' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {record.status}
        </p>
      ),
    },

    {
      title: 'Sell',
      key: 'action',
      render: (_, record) => (
        <Space size='large'>
          <button>
            <SaleManageMentModal productName={record.name} id={record._id} />
          </button>
        </Space>
      ),
    },
  ];
