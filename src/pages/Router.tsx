import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Solutions } from './Solutions';
import { Services } from './Services';
import { About } from './About';

export const Router: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} />
    </Routes>
  </>
);
