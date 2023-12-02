import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Controlled } from '../pages/hookForm/hookForm';
import { Uncontrolled } from '../pages/uncontrolled/uncontrolled';
import { Layout } from '../pages/layout/layout';
import { Home } from '../pages/home/home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="uncontrolled" element={<Uncontrolled />} />
      <Route path="controlled" element={<Controlled />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>,
  ),
);
