import { Space, TableProps } from 'antd';
import { TProductColumn } from '../../types/allProduct.types';

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
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <button>sale</button>
        </Space>
      ),
    },
  ];
