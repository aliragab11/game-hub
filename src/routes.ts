import { createBrowserRouter } from 'react-router';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: ErrorPage,
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'games/:id',
        Component: GameDetailPage,
      },
    ],
  },
]);

export default router;
