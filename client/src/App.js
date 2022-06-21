import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Landing from './Components/Landing';
import Home from './Components/Home';
import Details from './Components/Details.jsx'; 
import Form from './Components/Form';

function App() {
  return (
    <BrowserRouter>
    
    <Routes> 
      <Route path="/" element={<Landing/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about/:id" element={<Details/>} />
      <Route path="/create" element={<Form/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
