import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  
  return (
    <div>
      <Routes>
        {/* Kevin - APKG1-2 - Landing Page */}
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>


  );
}

export default App;
