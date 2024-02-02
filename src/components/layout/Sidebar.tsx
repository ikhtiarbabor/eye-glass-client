import { Layout, Menu } from 'antd';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';
import { adminPaths } from '../../routes/admin.routes';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';

const { Sider } = Layout;

const userRole = {
  ADMIN: 'admin',
  USER: 'user',
} as const;

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);

  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    default:
      break;
  }

  return (
    <Sider breakpoint='lg' collapsedWidth='0'>
      <div
        style={{
          color: 'white',
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['4']}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
