import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Eng } from './Eng';
import { Services } from './Services';

export const Router: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Eng />} />
    </Routes>
  </>
);
