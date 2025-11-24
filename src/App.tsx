import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OsteopathPage from './pages/OsteopathPage';
import AthletesPage from './pages/AthletesPage';
import StressResetPage from './pages/StressResetPage';
import FullBodyPage from './pages/FullBodyPage';
import DeepReleasePage from './pages/DeepReleasePage';
import ManualOsteopathPage from './pages/ManualOsteopathPage';
import ChildrenPage from './pages/ChildrenPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/osteopath" element={<OsteopathPage />} />
        <Route path="/athletes" element={<AthletesPage />} />
        <Route path="/stress-reset" element={<StressResetPage />} />
        <Route path="/full-body" element={<FullBodyPage />} />
        <Route path="/deep-release" element={<DeepReleasePage />} />
        <Route path="/manual-osteopathic-treatment" element={<ManualOsteopathPage />} />
        <Route path="/children" element={<ChildrenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
