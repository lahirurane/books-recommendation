import React from 'react';

const Home = React.lazy(() => import('./views/Home'));

const Books = React.lazy(() => import('./views/Books'));
const BookDetails = React.lazy(() => import('./views/Books/BookDetails'));
const Purchases = React.lazy(() => import('./views/User/Purchases'));
const UserHome = React.lazy(() => import('./views/User/User-Home'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/books', exact: true, name: 'Books', component: Books },
  { path: '/books/details', exact: true, name: 'Books Detail', component: BookDetails },
  { path: '/user/purchases', exact: true, name: 'Purchases', component: Purchases },
  { path: '/user/user-home', exact: true, name: 'My Home', component: UserHome }
];

export default routes;
