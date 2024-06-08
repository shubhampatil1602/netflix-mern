import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './Auth';
import Browse from './Browse';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Auth />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
