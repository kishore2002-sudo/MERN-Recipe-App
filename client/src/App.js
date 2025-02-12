import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar  from "./components/navbar";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { Home } from "./pages/home";
import { SavedRecipes } from "./pages/saved-recipes";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        {/* <h1>hello</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
        </Routes> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
