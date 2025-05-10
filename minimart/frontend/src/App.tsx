import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Minimart from './components/Minimart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Minimart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
