import Book from './Book';
import GetHired from './GetHired';
import Warn from './Warn';
import Hire from './Hire';
import Home from './home';
import type { RouteObject } from 'react-router-dom';

type ExtendedRoute = RouteObject & {
  title: string;
};

const routes: ExtendedRoute[] = [
  {
    path: '/',
    title: 'Home',
    element: <Home />,
  },
  {
    path: '/hire',
    title: 'Hire',
    element: <Hire />,
  },
  {
    path: '/get-hired',
    title: 'Get Hire',
    element: <GetHired />,
  },
  {
    path: '/warn',
    title: 'Warn',
    element: <Warn />,
  },
  {
    path: '/book',
    title: 'Hire',
    element: <Book />,
  },
];

export default routes;
