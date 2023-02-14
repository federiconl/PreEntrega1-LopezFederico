import './App.css';
import NavBar from './components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Gryffindor, Users, Home, UserComplete } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  

  return (
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/users' element= {<Users/>} />
        <Route path="/users/:userId" element={<UserComplete />} />
        <Route path='/category/:userHouse' element= {<Gryffindor/>} />
       
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
