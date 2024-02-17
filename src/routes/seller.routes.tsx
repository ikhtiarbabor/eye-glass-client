import AddProduct from '../pages/admin/Dashboard/AddProduct';
import Inventory from '../pages/seller/Inventory';

export const sellerPaths = [
  {
    name: 'Add Inventory',
    path: 'add-Inventory',
    element: <AddProduct />,
  },
  {
    name: 'Inventory ',
    path: 'all-inventories',
    element: <Inventory />,
  },
];
