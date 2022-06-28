import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Landing from './Components/Landing';
import Home from './Components/Home';
import Details from './Components/Details.jsx'; 
import Form from './Components/Form';
import RecipeAdded from './Components/RecipeAdded';
import Search from './Components/Search';

function App() {
  return (
    <BrowserRouter>
    
    <Routes> 
      <Route path="/" element={<Landing/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about/:id" element={<Details/>} />
      <Route path="/create" element={<Form/>} />
      <Route path="/recipeAdded" element={<RecipeAdded/>} />
      <Route path="/search/:name" element={<Search/>} />
      <Route path='*' element={<Landing/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
