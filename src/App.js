import './App.css';
import NavBar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserDetail, Users } from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Inicio } from './pages/index';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>   
    <hr />
      <ul>
        <li>
          <Link to="/users">Usuarios</Link>
        </li>
        
      </ul>
      <hr />
    <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/users" element={<Users />} />
    <Route path="/users" element={<Users />} />
    <Route path="/users/:userId" element={<UserDetail />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
