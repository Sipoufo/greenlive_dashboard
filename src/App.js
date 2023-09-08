import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Overview from './pages/Overview';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage />} >
          <Route index element={<Overview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
