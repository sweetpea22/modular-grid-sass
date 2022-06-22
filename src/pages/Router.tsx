import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Solutions } from './Solutions';
import { Services } from './Services';
import { About } from './About';
import { Events } from './Events';
import { Company } from './Company';

export const Router: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Company />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} />
    </Routes>
  </>
);
