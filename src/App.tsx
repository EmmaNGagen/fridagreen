import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layouts } from './components/Layouts';
import { Home } from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
