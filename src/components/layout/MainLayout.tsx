import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { logout } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hooks';
import ProtectedRoute from './ProtectedRoute';
import Sidebar from './Sidebar';
const { Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ProtectedRoute>
      <Layout style={{ minHeight: '100vh',}}>
        <Sidebar />
        <Layout>
          <Button onClick={handleLogout}>Logout</Button>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </ProtectedRoute>
  );
};

export default MainLayout;
