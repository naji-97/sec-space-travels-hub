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
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;
