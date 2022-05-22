import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './Home';
import { Eng } from './Eng';

export const Router: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Eng />} />
    </Routes>
  </>
);
