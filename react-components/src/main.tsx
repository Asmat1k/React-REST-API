import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/errorBoundary/index.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DetailedItem from './components/detailed-item/index.tsx';
import searchApi from './api/api.ts';
import ErrorPage from './components/errorBoundary/404.tsx';

export const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'details/:name',
        loader: async function fetchData({ params }) {
          return await searchApi(`?search=${params.name}`);
        },
        element: <DetailedItem />,
      },
    ],
  },
]);

export default router;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
);
