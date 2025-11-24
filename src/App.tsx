import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
