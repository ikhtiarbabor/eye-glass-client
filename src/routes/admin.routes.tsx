import AddProduct from '../pages/admin/Dashboard/AddProduct';
import AllProducts from '../pages/admin/Dashboard/AllProducts';
import SaleManagement from '../pages/admin/SaleManagement/SaleManagement';
import SellHistory from '../pages/admin/SaleManagement/SellHistory';

export const adminPaths = [
  // {
  //   name: 'Dashboard',
  //   path: 'dashboard',
  //   element: <AdminDashboard />,
  // },
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
    children: [
      {
        name: 'Sell Product',
        path: 'sell-management/sell',
        element: <SaleManagement />,
      },
      {
        name: 'Sell History',
        path: 'sell-management/history',
        element: <SellHistory />,
      },
    ],
  },
];
