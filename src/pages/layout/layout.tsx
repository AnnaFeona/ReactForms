import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/header';

import './layout.scss'

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
