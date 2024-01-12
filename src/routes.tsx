import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Surat from './pages/Surat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/surat',
    element: <Surat />,
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);

export default router;
