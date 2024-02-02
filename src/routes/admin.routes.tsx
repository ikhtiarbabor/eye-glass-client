import AdminDashboard from '../pages/admin/AdminDashboard';
import AddProduct from '../pages/admin/Dashboard/AddProduct';
import AllProducts from '../pages/admin/Dashboard/AllProducts';
import SaleManagement from '../pages/admin/SaleManagement/SaleManagement';

export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Add Product',
    path: 'add-product',
    element: <AddProduct />,
  },
  {
    name: 'All Products',
    path: 'all-products',
    element: <AllProducts />,
  },
  {
    name: 'Sales Management',
    path: 'sales-management',
    element: <SaleManagement />,
  },
];
