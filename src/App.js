import Login from './pages/Login'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Style from './pages/Style';
function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<PrivateRoute element={Style} redirectto="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/style" element={<PrivateRoute element={Style} redirectto="/login" />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
