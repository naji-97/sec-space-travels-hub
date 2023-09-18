import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Missions from './components/Mission';
import RocketList from './components/Rockets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketList />} />
        <Route path="/sec-space-travels-hub" element={<RocketList />} />
        {/* sec-space-travels-hub/ */}
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;
