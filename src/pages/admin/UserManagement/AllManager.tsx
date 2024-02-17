import type { TableProps } from 'antd';
import { Table } from 'antd';
import { FilterValue } from 'antd/es/table/interface';
import { useState } from 'react';
import { managerTableColumn } from '../../../components/UserManagement/managerTableColums';
import { useGetAllManagersQuery } from '../../../redux/features/user/userApi';
interface TFilter {
  gender: null | string | FilterValue;
}

export default function AllManager() {
  const [sort, setSort] = useState({ sort: '' });
  const [filter, setFilter] = useState<TFilter>({ gender: '' });
  const query = { ...sort, ...filter };
  const { data: managers, isFetching } = useGetAllManagersQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  const handleTableChange: TableProps['onChange'] = (
    _pagination,
    filters,
    sorter
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { order } = (sorter as { column: object; order: any }) || {};

    if (
      filters?.gender?.length &&
      filters?.gender?.length > 0 &&
      filters?.gender?.length === 1
    ) {
      setFilter({ ...filter, gender: filters.gender[0] as string });
    } else {
      setFilter({ ...filter, gender: '' });
    }
    if (order === 'ascend') {
      setSort({ sort: 'name' });
    } else if (order === '-name') {
      setSort({ sort: 'descend' });
    } else {
      setSort({ sort: '' });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const managersData = managers?.data?.map((manager: any) => ({
    name: manager.name,
    email: manager.email,
    gender: manager.gender,
    username: manager.username,
  }));

  return (
    <Table
      columns={managerTableColumn}
      dataSource={managersData}
      loading={isFetching}
      onChange={handleTableChange}
    />
  );
}
