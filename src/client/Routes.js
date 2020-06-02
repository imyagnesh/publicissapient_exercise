import React from 'react';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './Layout';

const HomePage = () => <div>HomePage</div>;
const ArticleListPage = () => <div>Article List Page</div>;

export default [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage,
      },
      {
        path: '/articles/:id',
        component: ArticleListPage,
      },
      {
        component: NotFoundPage,
      },
    ],
  },
];
